import TasksClient from "./TasksClient";
import { prisma } from "@/lib/db";

export const dynamic = 'force-dynamic';

export default async function TasksPage() {
  let tasks: any[] = [];
  try {
    tasks = await prisma.task.findMany({
      where: { userId: "demo-user-123" },
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.error("[Tasks] DB error:", error);
  }
  return <TasksClient initialTasks={tasks} />;
}
