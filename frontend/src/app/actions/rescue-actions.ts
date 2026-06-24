"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function activateRescueMode(userId: string) {
  try {
    // Find all non-completed, low/medium priority tasks
    const tasks = await prisma.task.findMany({
      where: {
        userId,
        isCompleted: false,
        priority: { in: ["Low", "Medium"] },
      },
    });

    // "Reschedule" them by moving their scheduledAt forward 7 days
    for (const task of tasks) {
      const newDate = new Date();
      newDate.setDate(newDate.getDate() + 7);
      
      await prisma.task.update({
        where: { id: task.id },
        data: { scheduledAt: newDate },
      });
    }

    // Log the Rescue intervention
    await prisma.agentAction.create({
      data: {
        userId,
        agentName: "Rescue",
        actionType: "OPTIMIZATION",
        logMessage: `Emergency intervention activated. Pushed ${tasks.length} non-essential tasks to next week.`,
      },
    });

    revalidatePath("/dashboard/calendar");
    revalidatePath("/dashboard/tasks");
    revalidatePath("/dashboard/agent-hub");
    revalidatePath("/dashboard/rescue-center");
    
    return { success: true, rescheduledCount: tasks.length };
  } catch (error) {
    console.error("Failed to activate rescue mode:", error);
    return { success: false, error: "Failed to activate rescue mode" };
  }
}
