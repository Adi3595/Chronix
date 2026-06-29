"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function NovaClient({ initialHistory = [] }: { initialHistory?: { command: string, response: string }[] }) {
  const [novaHistory, setNovaHistory] = useState<{command: string, response: string}[]>(initialHistory);
  const [savedChannelId, setSavedChannelId] = useState("");

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
          <h2 className="font-serif font-black text-[48px] text-foreground mb-4">Nova Agent</h2>
          <p className="font-body-lg text-[18px] text-on-surface-variant max-w-2xl leading-relaxed">
            Your Communications Filter. Command Nova to summarize Slack threads and filter out the noise so you can maintain deep focus.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-6 max-w-4xl"
        >
          {/* Nova Terminal */}
          <motion.div variants={itemVariants} className="bg-surface/40 backdrop-blur-xl p-8 flex flex-col relative border border-outline rounded-3xl shadow-[0_10px_40px_rgba(46,125,50,0.1)]">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="font-sans font-black text-[24px] uppercase text-foreground tracking-tighter leading-none">Nova</h3>
                <p className="font-mono-label text-[12px] text-muted-foreground mt-2 uppercase tracking-widest">Communications Filter</p>
              </div>
              <span className="material-symbols-outlined text-primary text-[32px] opacity-80">forum</span>
            </div>
            
            <p className="text-on-surface-variant text-[14px] font-sans mb-8">
              Connects to Slack APIs to read threads, synthesize discussions, and summarize key action items so you don't have to scroll.
            </p>

            {/* Input Form */}
            <div className="mt-auto">
              <form 
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const cmdInput = form.elements.namedItem("command") as HTMLInputElement;
                  const channelInput = form.elements.namedItem("channelId") as HTMLInputElement;
                  
                  cmdInput.disabled = true;
                  channelInput.disabled = true;
                  
                  // Add loading placeholder
                  setNovaHistory(prev => [...prev, { command: cmdInput.value || "Summarize", response: "Summarizing Communications..." }]);
                  
                  const { summarizeCommunications } = await import("@/app/actions/nova-actions");
                  const res = await summarizeCommunications("demo-user-123", cmdInput.value || "Summarize", channelInput.value || undefined);
                  
                  // Update last entry with real response
                  setNovaHistory(prev => {
                    const newHistory = [...prev];
                    newHistory[newHistory.length - 1].response = res.message || "Failed to get summary.";
                    return newHistory;
                  });
                  
                  cmdInput.value = "";
                  cmdInput.disabled = false;
                  channelInput.disabled = false;
                  setTimeout(() => cmdInput.focus(), 10);
                }}
                className="flex flex-col gap-4"
              >
                <div className="flex flex-col md:flex-row gap-4">
                  <input name="channelId" type="text" value={savedChannelId} onChange={(e) => setSavedChannelId(e.target.value)} placeholder="Slack Channel ID (Optional)" className="w-full md:w-1/3 bg-surface-variant border border-outline rounded-xl px-4 py-4 text-[14px] font-sans text-foreground focus:outline-none focus:border-primary/50 transition-colors" />
                  <input name="command" type="text" placeholder="Command Nova..." className="flex-1 bg-surface-variant border border-outline rounded-xl px-4 py-4 text-[15px] font-sans text-foreground focus:outline-none focus:border-primary/50 transition-colors" />
                </div>
                <button type="submit" className="w-full bg-primary text-background px-6 py-4 rounded-xl font-sans text-[14px] font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(46,125,50,0.4)]">
                  Execute Command
                </button>
              </form>
            </div>

            {/* History Feed */}
            {novaHistory.length > 0 && (
              <div className="mt-8 p-6 bg-background/50 border border-primary/20 rounded-xl max-h-[500px] overflow-y-auto space-y-6 shadow-[0_0_15px_rgba(46,125,50,0.1)] custom-scrollbar">
                {novaHistory.map((item, i) => (
                  <div key={i} className="text-[14px] font-mono leading-relaxed border-b border-outline-variant/30 pb-4 last:border-0 last:pb-0">
                    <div className="text-foreground/70 mb-2 font-bold">&gt; {item.command}</div>
                    <div className="text-primary/90 whitespace-pre-wrap"><span className="text-primary font-bold">Nova:</span> {item.response}</div>
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
