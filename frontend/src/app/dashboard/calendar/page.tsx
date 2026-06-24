import CalendarClient from "./CalendarClient";
import { prisma } from "@/lib/db";

export const dynamic = 'force-dynamic';

export default async function CalendarPage() {
  const userId = "demo-user-123";

  // Fetch data in parallel
  const [tasks, agentActions] = await Promise.all([
    prisma.task.findMany({
      where: { 
        userId,
        scheduledAt: { not: null } 
      },
      orderBy: { scheduledAt: "asc" },
    }),
    prisma.agentAction.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
      take: 3
    })
  ]);

  return <CalendarClient tasks={tasks} agentActions={agentActions} />;
}
