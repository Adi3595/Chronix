import GoalsClient from "./GoalsClient";
import { prisma } from "@/lib/db";

export const dynamic = 'force-dynamic';

export default async function GoalsPage() {
  let goals: any[] = [];
  try {
    goals = await prisma.goal.findMany({
      where: { userId: "demo-user-123" },
      orderBy: { createdAt: "desc" },
      include: { tasks: true },
    });
  } catch (error) {
    console.error("[Goals] DB error:", error);
  }
  return <GoalsClient initialGoals={goals} />;
}
