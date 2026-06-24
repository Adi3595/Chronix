import TasksClient from "./TasksClient";
import { prisma } from "@/lib/db";

export const dynamic = 'force-dynamic';

export default async function TasksPage() {
  const tasks = await prisma.task.findMany({
    where: { userId: "demo-user-123" },
    orderBy: { createdAt: "desc" },
  });

  return <TasksClient initialTasks={tasks} />;
}
