import AgentHubClient from "./AgentHubClient";
import { prisma } from "@/lib/db";

export const dynamic = 'force-dynamic';

export default async function AgentHubPage() {
  const userId = "demo-user-123";

  let agentActions: any[] = [];
  try {
    agentActions = await prisma.agentAction.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
      take: 20
    });
  } catch (error) {
    console.error("[AgentHub] DB error:", error);
  }

  return <AgentHubClient agentActions={agentActions} />;
}
