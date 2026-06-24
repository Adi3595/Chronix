"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function generateEchoReport(userId: string) {
  // Fetch completed tasks in the last 7 days
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const completedTasks = await prisma.task.findMany({
    where: { 
      userId, 
      isCompleted: true,
      updatedAt: { gte: sevenDaysAgo }
    }
  });

  const reportContent = `Synthesized ${completedTasks.length} completed tasks from this week. Key themes: Strategic Alignment, Deep Work completion.`;

  await prisma.agentAction.create({
    data: {
      userId,
      agentName: "Echo",
      actionType: "LOG",
      logMessage: reportContent,
    }
  });

  // Small momentum boost for generating a report
  await prisma.user.update({
    where: { id: userId },
    data: { momentumScore: { increment: 5 } }
  });

  revalidatePath("/dashboard/analytics");
  revalidatePath("/dashboard/agent-hub");
}
