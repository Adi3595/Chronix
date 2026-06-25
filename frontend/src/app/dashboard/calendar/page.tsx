import CalendarClient from "./CalendarClient";
import { prisma } from "@/lib/db";

export const dynamic = 'force-dynamic';

export default async function CalendarPage() {
  const userId = "demo-user-123";

  let tasks: any[] = [];
  let agentActions: any[] = [];

  try {
    [tasks, agentActions] = await Promise.all([
      prisma.task.findMany({
        where: { userId, scheduledAt: { not: null } },
        orderBy: { scheduledAt: "asc" },
      }),
      prisma.agentAction.findMany({
        where: { userId },
        orderBy: { createdAt: "desc" },
        take: 3
      })
    ]);
  } catch (error) {
    console.error("[Calendar] DB error:", error);
  }

  return <CalendarClient tasks={tasks} agentActions={agentActions} />;
}
