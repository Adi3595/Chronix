import AgentHubClient from "./AgentHubClient";
import { prisma } from "@/lib/db";

export const dynamic = 'force-dynamic';

export default async function AgentHubPage() {
  const userId = "demo-user-123";

  // Fetch agent logs
  const agentActions = await prisma.agentAction.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    take: 20
  });

  return <AgentHubClient agentActions={agentActions} />;
}
