import GoalsClient from "./GoalsClient";
import { prisma } from "@/lib/db";

import { cookies } from "next/headers";

export const dynamic = 'force-dynamic';

export default async function GoalsPage() {
  const cookieStore = await cookies();
  const userId = cookieStore.get("chronix-uid")?.value || "demo-user-123";

  let goals: any[] = [];
  try {
    goals = await prisma.goal.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
      include: { tasks: true },
    });
  } catch (error) {
    console.error("[Goals] DB error:", error);
  }
  return <GoalsClient initialGoals={goals} userId={userId} />;
}
