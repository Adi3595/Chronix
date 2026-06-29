import EchoClient from "./EchoClient";
import { prisma } from "@/lib/db";

export const dynamic = 'force-dynamic';

export default async function EchoPage() {
  const history = await prisma.agentAction.findMany({
    where: { userId: "demo-user-123", agentName: "Echo" },
    orderBy: { createdAt: 'asc' }
  });

  const formattedHistory = history.map(h => ({
    query: h.command || "Searched Second Brain",
    response: h.logMessage
  }));

  return <EchoClient initialHistory={formattedHistory} />;
}
