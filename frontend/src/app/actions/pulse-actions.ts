"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function recalculatePulse(userId: string) {
  // Real mathematical momentum recalculation
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const tasks = await prisma.task.findMany({
    where: { userId }
  });

  const recentlyCompleted = tasks.filter(t => t.isCompleted && t.updatedAt >= sevenDaysAgo).length;
  
  const overdueTasks = tasks.filter(t => 
    !t.isCompleted && 
    t.scheduledAt && 
    t.scheduledAt < new Date()
  ).length;

  // Base score 50. +5 for each recent completion. -10 for each overdue.
  const baseScore = 50;
  let newScore = baseScore + (recentlyCompleted * 5) - (overdueTasks * 10);
  
  // Cap between 0 and 100
  newScore = Math.max(0, Math.min(100, newScore));

  await prisma.user.update({
    where: { id: userId },
    data: { momentumScore: newScore }
  });

  await prisma.agentAction.create({
    data: {
      userId,
      agentName: "Pulse",
      actionType: "LOG",
      logMessage: `Calculated true momentum score to ${newScore} (Recent: ${recentlyCompleted}, Overdue: ${overdueTasks}).`,
    }
  });

  revalidatePath("/dashboard/analytics");
  revalidatePath("/dashboard/agent-hub");
}
