import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import AnalyticsClient from "./AnalyticsClient";

import { cookies } from "next/headers";

export default async function AnalyticsPage() {
  const cookieStore = await cookies();
  const userId = cookieStore.get("chronix-uid")?.value || "demo-user-123";

  let user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) {
    user = { id: userId, name: "A. Executive", email: "admin@chronix.os", momentumScore: 87, createdAt: new Date(), updatedAt: new Date() };
  }

  // Fetch recent tasks for velocity metrics
  const lastWeek = new Date();
  lastWeek.setDate(lastWeek.getDate() - 7);

  const completedTasks = await prisma.task.findMany({
    where: { 
      userId, 
      isCompleted: true,
      updatedAt: { gte: lastWeek }
    },
    orderBy: { updatedAt: "desc" }
  });

  const agentActions = await prisma.agentAction.findMany({
    take: 5,
    orderBy: { createdAt: "desc" },
    where: {
      OR: [
        { agentName: "Pulse" },
        { agentName: "Echo" }
      ]
    }
  });

  return (
    <AnalyticsClient 
      user={user} 
      completedTasks={completedTasks} 
      agentActions={agentActions} 
    />
  );
}
