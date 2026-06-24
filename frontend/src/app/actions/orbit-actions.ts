"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function triggerOrbitSync(userId: string) {
  // Mock external synchronization
  await new Promise(resolve => setTimeout(resolve, 1500)); // simulate latency

  await prisma.agentAction.create({
    data: {
      userId,
      agentName: "Orbit",
      actionType: "LOG",
      logMessage: "Successfully synchronized calendar and external tasks. Identified 2 new schedule blocks.",
    }
  });

  revalidatePath("/dashboard/agent-hub");
  revalidatePath("/dashboard/calendar");
}
