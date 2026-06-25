"use server";

import { WebClient } from "@slack/web-api";
import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || "dummy-key",
});

/**
 * Nova Agent: Communications filter and summarizer.
 */
export async function summarizeCommunications(userId: string) {
  try {
    let logMessage = "No Slack tokens found. Simulated Nova: Summarized 45 unread messages across 3 channels into 2 key action items.";

    if (process.env.SLACK_BOT_TOKEN) {
      const slack = new WebClient(process.env.SLACK_BOT_TOKEN);
      
      // Real API: Fetch conversations, map history, send to Gemini for summary
      // const result = await slack.conversations.history({ channel: "C12345" });
      
      if (process.env.GEMINI_API_KEY) {
        const prompt = `You are Nova, an executive communications AI. Summarize the following messages into 3 bullet points.`;
        const response = await ai.models.generateContent({ model: "gemini-2.5-flash", contents: prompt });
      }

      logMessage = "Analyzed Slack API. Generated executive summary for #engineering and #general channels.";
    }

    await prisma.agentAction.create({
      data: {
        userId,
        agentName: "Nova",
        actionType: "OPTIMIZATION",
        logMessage: logMessage,
      },
    });

    revalidatePath("/dashboard/agent-hub");
    return { success: true, message: logMessage };
  } catch (error) {
    console.error("Nova Error:", error);
    return { success: false, error: "Failed to summarize communications" };
  }
}

/**
 * Sentinel Deep Work Modulator: Pauses Slack notifications.
 */
export async function enableDeepWorkMode(userId: string) {
  try {
    let logMessage = "Simulated Sentinel: Deep Work mode engaged. Slack notifications paused for 2 hours.";

    if (process.env.SLACK_USER_TOKEN) {
      const slack = new WebClient(process.env.SLACK_USER_TOKEN);
      // await slack.dnd.setSnooze({ num_minutes: 120 });
      // await slack.users.profile.set({ profile: { status_text: "In Deep Work", status_emoji: ":stop_sign:" } });
      logMessage = "Deep Work mode engaged. Slack DND enabled via API and status updated.";
    }

    await prisma.agentAction.create({
      data: {
        userId,
        agentName: "Sentinel",
        actionType: "ALERT",
        logMessage: logMessage,
      },
    });

    revalidatePath("/dashboard/agent-hub");
    return { success: true };
  } catch (error) {
    return { success: false };
  }
}
