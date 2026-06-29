"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createTaskAction(userId: string, title: string, description?: string, scheduledAt?: Date) {
  try {
    const task = await prisma.task.create({
      data: {
        userId,
        title,
        description,
        scheduledAt,
        priority: title.toLowerCase().includes("urgent") || title.toLowerCase().includes("asap") ? "High" : "Medium",
      },
    });

    revalidatePath("/dashboard/tasks");
    return { success: true, task };
  } catch (error) {
    console.error("Failed to create task:", error);
    return { success: false, error: "Failed to create task" };
  }
}

export async function toggleTaskCompletion(taskId: string, isCompleted: boolean) {
  try {
    const task = await prisma.task.update({
      where: { id: taskId },
      data: { isCompleted },
    });
    
    // Log the completion as an agent synergy if completed
    if (isCompleted) {
      await prisma.agentAction.create({
        data: {
          userId: task.userId,
          agentName: "Atlas",
          actionType: "OPTIMIZATION",
          logMessage: `Marked task "${task.title.substring(0,20)}..." as complete.`,
        }
      });
    }

    // Mathematically recalculate momentum score based on true task velocity
    const { recalculatePulse } = await import("./pulse-actions");
    await recalculatePulse(task.userId);

    revalidatePath("/dashboard");
    revalidatePath("/dashboard/tasks");
    return { success: true, task };
  } catch (error) {
    console.error("Failed to toggle task:", error);
    return { success: false, error: "Failed to toggle task" };
  }
}
