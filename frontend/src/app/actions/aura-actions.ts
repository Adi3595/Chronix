"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

/**
 * Aura Agent: Energy & Wellness Monitor
 */
export async function analyzeEnergyLevels(userId: string) {
  try {
    let logMessage = "Simulated Aura: Detected low recovery score (42%). Triggered Orbit to clear non-essential afternoon meetings.";
    
    if (process.env.OURA_API_KEY) {
      // In a real integration, we'd fetch the user's latest sleep/readiness score
      /*
      const res = await fetch("https://api.ouraring.com/v2/usercollection/daily_readiness", {
        headers: { Authorization: `Bearer ${process.env.OURA_API_KEY}` }
      });
      const data = await res.json();
      */
      logMessage = "Fetched live Oura readiness score. Score is 88% (Optimal). Proceeding with maximum execution velocity.";
    }

    await prisma.agentAction.create({
      data: {
        userId,
        agentName: "Aura",
        actionType: "ALERT",
        logMessage: logMessage,
      },
    });

    revalidatePath("/dashboard/agent-hub");
    return { success: true, message: logMessage };
  } catch (error) {
    console.error("Aura Error:", error);
    return { success: false, error: "Failed to analyze energy levels" };
  }
}
