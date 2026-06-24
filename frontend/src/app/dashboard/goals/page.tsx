import GoalsClient from "./GoalsClient";
import { prisma } from "@/lib/db";

export const dynamic = 'force-dynamic';

export default async function GoalsPage() {
  const goals = await prisma.goal.findMany({
    where: { userId: "demo-user-123" },
    orderBy: { createdAt: "desc" },
    include: { tasks: true }, // Include tasks for completion calculation
  });

  return <GoalsClient initialGoals={goals} />;
}
