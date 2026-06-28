import { prisma } from "@/lib/db";
import { cookies } from "next/headers";
import CalendarClient from "./CalendarClient";

export const dynamic = 'force-dynamic';

export default async function CalendarPage() {
  const cookieStore = await cookies();
  const userId = cookieStore.get("chronix-uid")?.value || "demo-user-123";

  let tasks: any[] = [];
  try {
    tasks = await prisma.task.findMany({
      where: { userId, scheduledAt: { not: null } },
      orderBy: { scheduledAt: "asc" },
    });
  } catch (error) {
    console.error("[Calendar] DB error:", error);
  }

  return <CalendarClient initialTasks={tasks} userId={userId} />;
}
