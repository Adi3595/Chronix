"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function runSentinelScan(userId: string) {
  // Mock a scan for high-priority tasks
  const count = await prisma.task.count({
    where: { userId, isCompleted: false, priority: "High" }
  });

  if (count > 0) {
    await prisma.agentAction.create({
      data: {
        userId,
        agentName: "Sentinel",
        actionType: "OPTIMIZATION",
        logMessage: `Detected ${count} high priority tasks creating a scheduling bottleneck. Recommend deferring non-essential work.`,
      }
    });
  }

  revalidatePath("/dashboard/tasks");
  revalidatePath("/dashboard/agent-hub");
}

export async function acceptSentinelSuggestion(taskId: string, userId: string) {
  // Postpone task to tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  await prisma.task.update({
    where: { id: taskId },
    data: { scheduledAt: tomorrow }
  });

  // Log action
  await prisma.agentAction.create({
    data: {
      userId,
      agentName: "Sentinel",
      actionType: "OPTIMIZATION",
      logMessage: "Rescheduled task to tomorrow based on load balancing recommendation.",
    }
  });

  // Small momentum boost for taking action
  await prisma.user.update({
    where: { id: userId },
    data: { momentumScore: { increment: 2 } }
  });

  revalidatePath("/dashboard/tasks");
  revalidatePath("/dashboard/agent-hub");
}
