"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function EchoClient() {
  const [echoHistory, setEchoHistory] = useState<{query: string, response: string}[]>([]);
  const [savedPageId, setSavedPageId] = useState("");

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } }
  };

  return (
    <>
      <div className="pb-12 pt-8 max-w-[1440px] mx-auto w-full">
        {/* Page Header */}
        <div className="mb-12 max-w-4xl">
          <h2 className="font-serif font-black text-[48px] text-foreground mb-4">Echo Agent</h2>
          <p className="font-body-lg text-[18px] text-on-surface-variant max-w-2xl leading-relaxed">
            Your Second Brain interface. Query your Notion workspace to extract insights, find forgotten notes, and synthesize intelligence.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-6 max-w-4xl"
        >
          {/* Echo Terminal */}
          <motion.div variants={itemVariants} className="bg-surface/40 backdrop-blur-xl p-8 flex flex-col relative border border-outline rounded-3xl shadow-[0_10px_40px_rgba(46,125,50,0.1)]">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="font-sans font-black text-[24px] uppercase text-foreground tracking-tighter leading-none">Echo</h3>
                <p className="font-mono-label text-[12px] text-muted-foreground mt-2 uppercase tracking-widest">Knowledge Retrieval</p>
              </div>
              <span className="material-symbols-outlined text-primary text-[32px] opacity-80">search_insights</span>
            </div>
            
            <p className="text-on-surface-variant text-[14px] font-sans mb-8">
              Deep searches your connected workspace using Pinecone vector embeddings to surface exactly what you need.
            </p>

            {/* Input Form */}
            <div className="mt-auto">
              <form 
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const queryInput = form.elements.namedItem("query") as HTMLInputElement;
                  const pageInput = form.elements.namedItem("pageId") as HTMLInputElement;
                  const query = queryInput.value;
                  if (!query) return;
                  
                  queryInput.disabled = true;
                  pageInput.disabled = true;
                  
                  // Add a loading placeholder
                  setEchoHistory(prev => [...prev, { query, response: "Accessing Neural Link..." }]);
                  
                  const { searchSecondBrain } = await import("@/app/actions/echo-actions");
                  const res = await searchSecondBrain("demo-user-123", query, pageInput.value || undefined);
                  
                  // Update the last entry with the real response
                  setEchoHistory(prev => {
                    const newHistory = [...prev];
                    newHistory[newHistory.length - 1].response = res.response || "No response found.";
                    return newHistory;
                  });
                  
                  queryInput.value = "";
                  queryInput.disabled = false;
                  pageInput.disabled = false;
                  setTimeout(() => queryInput.focus(), 10);
                }}
                className="flex flex-col gap-4"
              >
                <div className="flex flex-col md:flex-row gap-4">
                  <input name="pageId" type="text" value={savedPageId} onChange={(e) => setSavedPageId(e.target.value)} placeholder="Notion Page ID (Optional)" className="w-full md:w-1/3 bg-surface-variant border border-outline rounded-xl px-4 py-4 text-[14px] font-sans text-foreground focus:outline-none focus:border-primary/50 transition-colors" />
                  <input name="query" type="text" placeholder="Ask Echo a question..." className="flex-1 bg-surface-variant border border-outline rounded-xl px-4 py-4 text-[15px] font-sans text-foreground focus:outline-none focus:border-primary/50 transition-colors" />
                </div>
                <button type="submit" className="w-full bg-primary text-background px-6 py-4 rounded-xl font-sans text-[14px] font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(46,125,50,0.4)]">
                  Access Neural Link
                </button>
              </form>
            </div>
            
            {/* History Feed */}
            {echoHistory.length > 0 && (
              <div className="mt-8 p-6 bg-background/50 border border-primary/20 rounded-xl max-h-[500px] overflow-y-auto space-y-6 shadow-[0_0_15px_rgba(46,125,50,0.1)] custom-scrollbar">
                {echoHistory.map((item, i) => (
                  <div key={i} className="text-[14px] font-mono leading-relaxed border-b border-outline-variant/30 pb-4 last:border-0 last:pb-0">
                    <div className="text-foreground/70 mb-2 font-bold">&gt; {item.query}</div>
                    <div className="text-primary/90 whitespace-pre-wrap"><span className="text-primary font-bold">Echo:</span> {item.response}</div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
