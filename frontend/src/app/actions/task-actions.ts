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
