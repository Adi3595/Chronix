import { prisma } from "@/lib/db";
import AnalyticsClient from "./AnalyticsClient";
import { cookies } from "next/headers";

export const dynamic = 'force-dynamic';

export default async function AnalyticsPage() {
  const cookieStore = await cookies();
  const userId = cookieStore.get("chronix-uid")?.value || "demo-user-123";

  const fallbackUser = { id: userId, name: "A. Executive", email: "admin@chronix.os", momentumScore: 87, createdAt: new Date(), updatedAt: new Date() };
  let user: any = fallbackUser;
  let completedTasks: any[] = [];
  let agentActions: any[] = [];

  try {
    const lastWeek = new Date();
    lastWeek.setDate(lastWeek.getDate() - 7);

    const dbUser = await prisma.user.findUnique({ where: { id: userId } });
    if (dbUser) user = dbUser;

    completedTasks = await prisma.task.findMany({
      where: { userId, isCompleted: true, updatedAt: { gte: lastWeek } },
      orderBy: { updatedAt: "desc" }
    });

    agentActions = await prisma.agentAction.findMany({
      take: 5,
      orderBy: { createdAt: "desc" },
      where: { OR: [{ agentName: "Pulse" }, { agentName: "Echo" }] }
    });
  } catch (error) {
    console.error("[Analytics] DB error:", error);
  }

  return (
    <AnalyticsClient
      user={user}
      completedTasks={completedTasks}
      agentActions={agentActions}
    />
  );
}
