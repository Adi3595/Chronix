import NovaClient from "./NovaClient";
import { prisma } from "@/lib/db";

export const dynamic = 'force-dynamic';

export default async function NovaPage() {
  const history = await prisma.agentAction.findMany({
    where: { userId: "demo-user-123", agentName: "Nova" },
    orderBy: { createdAt: 'asc' }
  });

  const formattedHistory = history.map(h => ({
    command: h.command || "Executed Nova Action",
    response: h.logMessage
  }));

  return <NovaClient initialHistory={formattedHistory} />;
}
