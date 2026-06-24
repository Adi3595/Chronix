import FutureSelfClient from "./FutureSelfClient";
import { prisma } from "@/lib/db";

export default async function FutureSelfPage() {
  const userId = "demo-user-123";

  // Fetch data in parallel
  const [user, tasks] = await Promise.all([
    prisma.user.findUnique({ where: { id: userId } }),
    prisma.task.findMany({ where: { userId } })
  ]);

  const momentumScore = user?.momentumScore || 87;
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(t => t.isCompleted).length;
  
  // Basic trajectory calculation
  const completionRate = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;
  
  // The "Optimized Path" is what you get if you have high momentum.
  // The "Current Path" is based on the actual completion rate.
  const optimizedProbability = Math.min(100, momentumScore + 5);
  const currentProbability = Math.max(0, Math.round(completionRate));

  return <FutureSelfClient 
    optimizedProbability={optimizedProbability} 
    currentProbability={currentProbability} 
  />;
}
