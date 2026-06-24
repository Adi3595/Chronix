"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function scheduleTask(taskId: string, scheduledAt: Date) {
  try {
    const task = await prisma.task.update({
      where: { id: taskId },
      data: { scheduledAt },
    });

    revalidatePath("/dashboard/calendar");
    revalidatePath("/dashboard");
    return { success: true, task };
  } catch (error) {
    console.error("Failed to schedule task:", error);
    return { success: false, error: "Failed to schedule task" };
  }
}

export async function toggleTaskCompletion(taskId: string, isCompleted: boolean) {
  try {
    const task = await prisma.task.update({
      where: { id: taskId },
      data: { isCompleted },
    });

    // Update momentum score if completed
    if (isCompleted) {
      await prisma.user.update({
        where: { id: task.userId },
        data: { momentumScore: { increment: 2 } },
      });
    }

    revalidatePath("/dashboard/tasks");
    revalidatePath("/dashboard/calendar");
    revalidatePath("/dashboard");
    return { success: true, task };
  } catch (error) {
    console.error("Failed to toggle task completion:", error);
    return { success: false, error: "Failed to toggle task" };
  }
}
