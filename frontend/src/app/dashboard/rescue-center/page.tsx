import RescueCenterClient from "./RescueCenterClient";
import { prisma } from "@/lib/db";
import { cookies } from "next/headers";

export const dynamic = 'force-dynamic';

export default async function RescueCenterPage() {
  const cookieStore = await cookies();
  const userId = cookieStore.get("chronix-uid")?.value || "demo-user-123";

  let lowPriorityTasks: any[] = [];
  try {
    lowPriorityTasks = await prisma.task.findMany({
      where: {
        userId,
        isCompleted: false,
        priority: { in: ["Low", "Medium"] },
      }
    });
  } catch (err) {
    console.error("Failed to fetch rescue tasks:", err);
  }

  return <RescueCenterClient tasks={lowPriorityTasks} />;
}
