"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function recalculatePulse(userId: string) {
  // Mock momentum recalculation
  const completedTasks = await prisma.task.count({
    where: { userId, isCompleted: true }
  });

  const baseScore = 50;
  const newScore = Math.min(100, baseScore + (completedTasks * 5));

  await prisma.user.update({
    where: { id: userId },
    data: { momentumScore: newScore }
  });

  await prisma.agentAction.create({
    data: {
      userId,
      agentName: "Pulse",
      actionType: "LOG",
      logMessage: `Recalculated momentum score to ${newScore} based on task velocity.`,
    }
  });

  revalidatePath("/dashboard/analytics");
  revalidatePath("/dashboard/agent-hub");
}
