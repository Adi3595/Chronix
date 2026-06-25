import FutureSelfClient from "./FutureSelfClient";
import { prisma } from "@/lib/db";

export const dynamic = 'force-dynamic';

export default async function FutureSelfPage() {
  const userId = "demo-user-123";

  let momentumScore = 87;
  let optimizedProbability = 92;
  let currentProbability = 0;

  try {
    const [user, tasks] = await Promise.all([
      prisma.user.findUnique({ where: { id: userId } }),
      prisma.task.findMany({ where: { userId } })
    ]);

    momentumScore = user?.momentumScore || 87;
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(t => t.isCompleted).length;
    const completionRate = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;

    optimizedProbability = Math.min(100, momentumScore + 5);
    currentProbability = Math.max(0, Math.round(completionRate));
  } catch (error) {
    console.error("[FutureSelf] DB error:", error);
  }

  return (
    <FutureSelfClient
      optimizedProbability={optimizedProbability}
      currentProbability={currentProbability}
    />
  );
}
