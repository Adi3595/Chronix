import FutureSelfClient from "./FutureSelfClient";
import { prisma } from "@/lib/db";

import { cookies } from "next/headers";

export const dynamic = 'force-dynamic';

export default async function FutureSelfPage() {
  const cookieStore = await cookies();
  const userId = cookieStore.get("chronix-uid")?.value || "demo-user-123";

  let momentumScore = 87;
  let optimizedProbability = 92;
  let currentProbability = 0;
  
  let velocity = 0;
  let remainingTasks = 0;
  let projectedDays = 0;

  try {
    const [user, tasks] = await Promise.all([
      prisma.user.findUnique({ where: { id: userId } }),
      prisma.task.findMany({ where: { userId } })
    ]);

    momentumScore = user?.momentumScore || 87;
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(t => t.isCompleted).length;
    remainingTasks = totalTasks - completedTasks;
    const completionRate = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;
    
    // Calculate Velocity
    const oldestTask = tasks.reduce((oldest, t) => t.createdAt < oldest ? t.createdAt : oldest, new Date());
    const daysSinceStart = Math.max(1, Math.ceil((new Date().getTime() - oldestTask.getTime()) / (1000 * 3600 * 24)));
    velocity = completedTasks / daysSinceStart; // tasks per day
    
    // Projected days to finish remaining
    projectedDays = velocity > 0 ? Math.ceil(remainingTasks / velocity) : remainingTasks > 0 ? 999 : 0;

    optimizedProbability = Math.min(100, momentumScore + 5);
    currentProbability = Math.max(0, Math.round(completionRate));
  } catch (error) {
    console.error("[FutureSelf] DB error:", error);
  }

  return (
    <FutureSelfClient
      optimizedProbability={optimizedProbability}
      currentProbability={currentProbability}
      velocity={velocity}
      projectedDays={projectedDays}
      remainingTasks={remainingTasks}
    />
  );
}
