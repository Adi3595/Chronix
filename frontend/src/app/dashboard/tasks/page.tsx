import TasksClient from "./TasksClient";
import { prisma } from "@/lib/db";

import { cookies } from "next/headers";

export const dynamic = 'force-dynamic';

export default async function TasksPage() {
  const cookieStore = await cookies();
  const userId = cookieStore.get("chronix-uid")?.value || "demo-user-123";

  let tasks: any[] = [];
  try {
    tasks = await prisma.task.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.error("[Tasks] DB error:", error);
  }
  return <TasksClient initialTasks={tasks} userId={userId} />;
}
