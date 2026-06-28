"use server";

import { GoogleGenAI } from "@google/genai";
import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || "dummy-key-for-local-dev",
});

/**
 * Sentinel Agent: Analyzes a task and predicts deadline risks.
 */
export async function analyzeTaskRisk(userId: string, taskTitle: string, taskDescription: string) {
  try {
    let riskMessage = "No API Key provided. Simulated Sentinel analysis: Risk level nominal.";
    
    if (process.env.GEMINI_API_KEY) {
      const prompt = `You are Sentinel, an AI risk detection agent for a productivity app called Chronix.
        Analyze this task and output a 1-sentence risk prediction:
        Task: ${taskTitle}
        Details: ${taskDescription || "None"}
      `;
      
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });
      
      riskMessage = response.text || riskMessage;
    }

    // Log the action to the DB
    await prisma.agentAction.create({
      data: {
        userId,
        agentName: "Sentinel",
        actionType: "ALERT",
        logMessage: riskMessage,
      },
    });

    revalidatePath("/dashboard/agent-hub");
    return { success: true, message: riskMessage };
  } catch (error) {
    console.error("Sentinel Error:", error);
    return { success: false, error: "Failed to analyze risk" };
  }
}

/**
 * Atlas Agent: Plans a new goal by breaking it down into 3 tasks.
 */
export async function planGoal(userId: string, goalTitle: string, targetDays: number = 30) {
  try {
    let tasks = ["Research", "Implementation", "Review"];
    
    let aiDescription = "";
    
    if (process.env.GEMINI_API_KEY) {
      const prompt = `You are Atlas, a strategic planning AI for Chronix.
        Break down the following goal into exactly 3 actionable task titles.
        Also provide a 1-2 sentence description of what you understand the goal to be and the strategy to achieve it.
        Respond ONLY with a raw JSON object in exactly this format, no markdown formatting, no backticks:
        {
          "tasks": ["Task 1", "Task 2", "Task 3"],
          "aiUnderstanding": "Your strategy description here."
        }
        
        Goal: ${goalTitle}
      `;
      
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });
      
      if (response.text) {
        try {
          const cleanedText = response.text.replace(/```json/g, '').replace(/```/g, '').trim();
          const parsed = JSON.parse(cleanedText);
          tasks = parsed.tasks && Array.isArray(parsed.tasks) ? parsed.tasks.slice(0, 3) : tasks;
          aiDescription = parsed.aiUnderstanding || "";
        } catch (e) {
          console.error("Failed to parse JSON from AI response", response.text);
          // Fallback parsing just in case
          if (response.text.includes(",")) {
            tasks = response.text.split(",").map(t => t.trim()).slice(0, 3);
          }
        }
      }
    }

    // Create Goal
    const goal = await prisma.goal.create({
      data: {
        userId,
        title: goalTitle,
        description: aiDescription,
        targetDays: targetDays,
        currentDays: 0,
      },
    });

    // Create Tasks
    for (const title of tasks) {
      await prisma.task.create({
        data: {
          userId,
          goalId: goal.id,
          title: title,
          priority: "Medium",
        },
      });
    }

    // Log Action
    await prisma.agentAction.create({
      data: {
        userId,
        agentName: "Atlas",
        actionType: "OPTIMIZATION",
        logMessage: `Created strategic plan for: ${goalTitle}. Generated ${tasks.length} tasks.`,
      },
    });

    revalidatePath("/dashboard/goals");
    revalidatePath("/dashboard/tasks");
    revalidatePath("/dashboard/agent-hub");
    
    return { success: true, goalId: goal.id };
  } catch (error) {
    console.error("Atlas Error:", error);
    return { success: false, error: "Failed to plan goal" };
  }
}
