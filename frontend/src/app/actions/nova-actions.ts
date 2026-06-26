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
      try {
        const channels = await slack.conversations.list({ limit: 1, types: "public_channel" });
        const channelId = channels.channels?.[0]?.id;
        
        if (channelId && process.env.GEMINI_API_KEY) {
          const history = await slack.conversations.history({ channel: channelId, limit: 10 });
          const messages = history.messages?.map(m => `${m.user || 'Unknown'}: ${m.text}`).join('\n') || "";
          
          if (messages.trim()) {
            const prompt = `You are Nova, an executive communications AI. Summarize the following recent Slack messages from the team into 1 concise sentence highlighting any action items:\n\n${messages}`;
            const response = await ai.models.generateContent({ model: "gemini-2.5-flash", contents: prompt });
            logMessage = response.text || "Analyzed Slack API. Generated executive summary.";
          }
        }
      } catch (slackErr) {
        console.error("Slack API error, falling back to simulation.", slackErr);
      }
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
      try {
        // Set Do Not Disturb for 120 minutes
        await slack.dnd.setSnooze({ num_minutes: 120 });
        // Set custom status
        await slack.users.profile.set({ 
          profile: { 
            status_text: "In Deep Work", 
            status_emoji: ":stop_sign:",
            status_expiration: Math.floor(Date.now() / 1000) + (120 * 60)
          } 
        });
        logMessage = "Deep Work mode engaged. Slack DND enabled via live API and status updated.";
      } catch (slackErr) {
        console.error("Slack DND error, falling back to simulation.", slackErr);
      }
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
