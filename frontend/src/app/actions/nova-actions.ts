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
export async function summarizeCommunications(userId: string, command: string, targetChannelId?: string) {
  try {
    let logMessage = "No Slack tokens found. Connect your Slack workspace in Settings → Integrations to enable Nova.";

    // Look up user's DB tokens first, then fall back to env vars
    const userRecord = await prisma.user.findUnique({ where: { id: userId } });
    const botToken = userRecord?.slackBotToken || process.env.SLACK_BOT_TOKEN;

    if (botToken) {
      const slack = new WebClient(botToken);
      
      // Real API: Fetch conversations, map history, send to Gemini for summary
      try {
        let channelId = targetChannelId;
        
        if (!channelId) {
          const channels = await slack.conversations.list({ limit: 1, types: "public_channel" });
          channelId = channels.channels?.[0]?.id;
        }
        
        if (channelId && process.env.GEMINI_API_KEY) {
          const history = await slack.conversations.history({ channel: channelId, limit: 10 });
          const messages = history.messages?.map(m => `${m.user || 'Unknown'}: ${m.text}`).join('\n') || "";
          
          if (messages.trim()) {
            const prompt = `You are Nova, an executive communications AI. Summarize the following recent Slack messages from the team into 1 concise sentence highlighting any action items:\n\n${messages}`;
            const response = await ai.models.generateContent({ model: "gemini-2.5-flash", contents: prompt });
            logMessage = response.text || "Analyzed Slack API. Generated executive summary.";
          }
        }
      } catch (slackErr: any) {
        console.error("Slack API error:", slackErr);
        if (slackErr.data?.error === "missing_scope") {
          logMessage = `Nova Slack Error: Missing required scopes. Add 'channels:read' and 'channels:history' to your Bot Token scopes and reinstall the app.`;
        } else {
          logMessage = `Nova Slack Error: ${slackErr.message || "Failed to fetch messages. Check if bot is in channel."}`;
        }
      }
    }

    await prisma.agentAction.create({
      data: {
        userId,
        agentName: "Nova",
        actionType: "OPTIMIZATION",
        command: command,
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

    // Look up user's DB tokens first, then fall back to env vars
    const userRecord2 = await prisma.user.findUnique({ where: { id: userId } });
    const userToken = userRecord2?.slackUserToken || process.env.SLACK_USER_TOKEN;

    if (userToken) {
      const slack = new WebClient(userToken);
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
