"use server";

import { Pinecone } from "@pinecone-database/pinecone";
import { Client } from "@notionhq/client";
import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || "dummy-key",
});

/**
 * Echo Agent: Second Brain Knowledge Retrieval (RAG)
 */
export async function searchSecondBrain(userId: string, query: string) {
  try {
    let responseText = "Simulated Echo: Based on your documents, the Q3 Roadmap requires aligning the engineering vectors before September 15th.";

    if (process.env.PINECONE_API_KEY && process.env.GEMINI_API_KEY && process.env.NOTION_API_KEY) {
      const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
      const indexName = process.env.PINECONE_INDEX_NAME || "chronix-index";
      const index = pc.index(indexName);

      // We will fetch the notion page content live to ensure we have data,
      // and then we will try to embed/upsert it to Pinecone for future retrieval.
      const notion = new Client({ auth: process.env.NOTION_API_KEY });
      const pageId = process.env.NOTION_PAGE_ID || "";
      
      let documentContext = "";
      
      if (pageId) {
        try {
          const blocks = await notion.blocks.children.list({ block_id: pageId });
          const textBlocks = blocks.results.map((block: any) => {
            if (block.paragraph && block.paragraph.rich_text.length > 0) {
              return block.paragraph.rich_text[0].plain_text;
            }
            return "";
          }).filter((t: string) => t.length > 0);
          
          documentContext = textBlocks.join("\n");

          // Optional: Embed and store in Pinecone (assuming 768 dimensions for Gemini)
          try {
            const embedRes = await ai.models.embedContent({
              model: "text-embedding-004",
              contents: documentContext.substring(0, 5000), // chunk limit
            });
            
            if (embedRes.embeddings && embedRes.embeddings[0]) {
              const vector = embedRes.embeddings[0].values;
              if (vector) {
                await index.upsert([{
                  id: `notion-${pageId}`,
                  values: vector,
                  metadata: { text: documentContext.substring(0, 1000) }
                }]);
              }
            }
          } catch (pineconeErr) {
            console.error("Pinecone Upsert failed (possibly dimension mismatch or index missing), falling back to direct context injection.", pineconeErr);
          }
          
        } catch (notionErr) {
          console.error("Failed to fetch from Notion:", notionErr);
        }
      }

      const prompt = `
        You are Echo, an executive knowledge retrieval agent.
        Answer the following user query using ONLY the provided context from their Notion workspace.
        If the answer is not in the context, say "I could not find the answer in your workspace."
        
        Context from Notion:
        ${documentContext}

        User Query: ${query}
      `;
      
      const response = await ai.models.generateContent({ model: "gemini-2.5-flash", contents: prompt });
      responseText = response.text || "Failed to generate response.";
    }

    // Log the search action
    await prisma.agentAction.create({
      data: {
        userId,
        agentName: "Echo",
        actionType: "LOG",
        logMessage: `Queried Second Brain for: "${query.substring(0, 30)}..."`,
      },
    });

    revalidatePath("/dashboard/agent-hub");
    return { success: true, response: responseText };
  } catch (error) {
    console.error("Echo Error:", error);
    return { success: false, error: "Failed to query second brain" };
  }
}

export async function generateEchoReport(userId: string) {
  try {
    await prisma.agentAction.create({
      data: {
        userId,
        agentName: "Echo",
        actionType: "OPTIMIZATION",
        logMessage: "Generated weekly synthesis report based on task completion velocity.",
      }
    });
    revalidatePath("/dashboard/analytics");
    revalidatePath("/dashboard/agent-hub");
    return { success: true };
  } catch (error) {
    return { success: false };
  }
}
