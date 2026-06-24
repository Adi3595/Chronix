import DashboardClient from "./DashboardClient";
import { prisma } from "@/lib/db";

export default async function DashboardPage() {
  const userId = "demo-user-123";

  // Fetch data in parallel
  const [user, tasks, agentActions] = await Promise.all([
    prisma.user.findUnique({ where: { id: userId } }),
    prisma.task.findMany({
      where: { userId },
      orderBy: [
        { isCompleted: "asc" },
        { priority: "asc" }, // High priority first
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

  return <DashboardClient user={user} tasks={tasks} agentActions={agentActions} />;
}
