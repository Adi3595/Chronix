import DashboardClient from "./DashboardClient";
import { prisma } from "@/lib/db";
import { cookies } from "next/headers";

export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const userId = cookieStore.get("chronix-uid")?.value || "demo-user-123";

  let user = null;
  let tasks: any[] = [];
  let agentActions: any[] = [];

  try {
    [user, tasks, agentActions] = await Promise.all([
      prisma.user.findUnique({ where: { id: userId } }),
      prisma.task.findMany({
        where: { userId },
        orderBy: [
          { isCompleted: "asc" },
          { priority: "asc" },
          { createdAt: "desc" }
        ],
        take: 5
      }),
      prisma.agentAction.findMany({
        where: { userId },
        orderBy: { createdAt: "desc" },
        take: 4
      })
    ]);
  } catch (error) {
    console.error("[Dashboard] DB error:", error);
    // Render with empty data rather than crashing
  }

  return <DashboardClient user={user} tasks={tasks} agentActions={agentActions} />;
}
