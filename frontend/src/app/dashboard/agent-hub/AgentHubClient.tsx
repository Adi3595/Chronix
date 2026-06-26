"use client";

import { motion } from "framer-motion";
import { formatDistanceToNow } from "date-fns";

export default function AgentHubClient({ agentActions }: { agentActions: any[] }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <>
      <div className="pb-12 pt-8 max-w-[1440px] mx-auto w-full">
        <div className="mb-10 max-w-3xl">
          <h2 className="font-display-lg font-serif text-[48px] text-on-surface mb-3 tracking-tight">Agent Command Center</h2>
          <p className="font-body-lg text-[18px] text-on-surface-variant leading-relaxed">Live orchestration and telemetry across your autonomous neural suite. Monitoring 6 active agents.</p>
        </div>

        {/* Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left/Main: Agent Cards Grid (Col span 8) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Agent: Sentinel */}
            <motion.div variants={itemVariants} className="bg-surface-container-lowest shadow-[0px_4px_20px_rgba(0,0,0,0.03)] rounded-xl p-6 flex flex-col group hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden border border-transparent hover:border-error-container/50">
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center text-primary border border-surface-container-highest">
                    <span className="material-symbols-outlined text-[24px]">visibility</span>
                  </div>
                  <div>
                    <h3 className="font-headline-md font-serif text-on-surface text-[20px] leading-tight">Sentinel</h3>
                    <p className="font-mono-label font-mono text-[13px] text-on-surface-variant opacity-70">A-03 // Risk & Focus</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-surface-container-highest rounded-full">
                  <span className="font-label-sm text-[10px] uppercase tracking-widest font-semibold text-on-surface-variant">Active</span>
                </div>
              </div>
              <div className="space-y-4 relative z-10 flex-1 flex flex-col justify-between">
                <div>
                  <p className="font-label-sm text-[12px] text-on-surface-variant mb-1 uppercase tracking-wider font-semibold">Current Mission</p>
                  <p className="font-body-md text-[15px] text-on-surface">Deep Work Enforcement</p>
                </div>
                <button 
                  onClick={async () => {
                    const { enableDeepWorkMode } = await import("@/app/actions/nova-actions");
                    await enableDeepWorkMode("demo-user-123");
                  }}
                  className="mt-4 text-primary font-mono-label text-[12px] flex items-center gap-1 hover:underline"
                >
                  <span className="material-symbols-outlined text-[14px]">do_not_disturb_on</span> Engage Deep Work
                </button>
              </div>
            </motion.div>

            {/* Agent: Atlas */}
            <motion.div variants={itemVariants} className="bg-surface-container-lowest shadow-[0px_4px_20px_rgba(0,0,0,0.03)] rounded-xl p-6 flex flex-col group hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden border border-transparent hover:border-surface-variant">
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center text-primary border border-surface-container-highest">
                    <span className="material-symbols-outlined text-[24px]">public</span>
                  </div>
                  <div>
                    <h3 className="font-headline-md font-serif text-on-surface text-[20px] leading-tight">Atlas</h3>
                    <p className="font-mono-label font-mono text-[13px] text-on-surface-variant opacity-70">A-01 // Strategic Core</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
                  <span className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-widest font-semibold">Optimal</span>
                </div>
              </div>
              <div className="space-y-4 relative z-10 flex-1 flex flex-col justify-between">
                <div>
                  <p className="font-label-sm text-[12px] text-on-surface-variant mb-1 uppercase tracking-wider font-semibold">Current Mission</p>
                  <p className="font-body-md text-[15px] text-on-surface">Goal Planning & Breakdown</p>
                </div>
                <a href="/dashboard/goals" className="mt-4 text-primary font-mono-label text-[12px] flex items-center gap-1 hover:underline w-fit">
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span> Go to Goals
                </a>
              </div>
            </motion.div>

            {/* Agent: Orbit */}
            <motion.div variants={itemVariants} className="bg-surface-container-lowest shadow-[0px_4px_20px_rgba(0,0,0,0.03)] rounded-xl p-6 flex flex-col group hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden border border-transparent hover:border-surface-variant">
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center text-primary border border-surface-container-highest">
                    <span className="material-symbols-outlined text-[24px]">sync</span>
                  </div>
                  <div>
                    <h3 className="font-headline-md font-serif text-on-surface text-[20px] leading-tight">Orbit</h3>
                    <p className="font-mono-label font-mono text-[13px] text-on-surface-variant opacity-70">A-02 // Integrations</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-outline-variant"></span>
                  <span className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-widest font-semibold">Idle</span>
                </div>
              </div>
              <div className="space-y-4 relative z-10 flex-1 flex flex-col justify-between">
                <div>
                  <p className="font-label-sm text-[12px] text-on-surface-variant mb-1 uppercase tracking-wider font-semibold">Current Mission</p>
                  <p className="font-body-md text-[15px] text-on-surface opacity-70">Awaiting Sync Cycle</p>
                </div>
                <button 
                  onClick={async () => {
                    const { triggerOrbitSync } = await import("@/app/actions/orbit-actions");
                    await triggerOrbitSync("demo-user-123");
                  }}
                  className="mt-4 text-primary font-mono-label text-[12px] flex items-center gap-1 hover:underline w-fit"
                >
                  <span className="material-symbols-outlined text-[14px]">bolt</span> Force Sync
                </button>
              </div>
            </motion.div>

            {/* Agent: Nova */}
            <motion.div variants={itemVariants} className="bg-surface-container-lowest shadow-[0px_4px_20px_rgba(0,0,0,0.03)] rounded-xl p-6 flex flex-col group hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden border border-transparent hover:border-surface-variant">
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center text-primary border border-surface-container-highest">
                    <span className="material-symbols-outlined text-[24px]">forum</span>
                  </div>
                  <div>
                    <h3 className="font-headline-md font-serif text-on-surface text-[20px] leading-tight">Nova</h3>
                    <p className="font-mono-label font-mono text-[13px] text-on-surface-variant opacity-70">A-04 // Comms Filter</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-outline-variant"></span>
                  <span className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-widest font-semibold">Idle</span>
                </div>
              </div>
              <div className="space-y-4 relative z-10 flex-1 flex flex-col justify-between">
                <div>
                  <p className="font-label-sm text-[12px] text-on-surface-variant mb-1 uppercase tracking-wider font-semibold">Current Mission</p>
                  <p className="font-body-md text-[15px] text-on-surface opacity-70">Awaiting Slack Channel</p>
                </div>
                <button 
                  onClick={async (e) => {
                    const btn = e.currentTarget;
                    btn.disabled = true;
                    btn.innerHTML = "Summarizing...";
                    const { summarizeCommunications } = await import("@/app/actions/nova-actions");
                    await summarizeCommunications("demo-user-123");
                    btn.innerHTML = "<span class='material-symbols-outlined text-[14px]'>summarize</span> Summarize Slack";
                    btn.disabled = false;
                  }}
                  className="mt-4 text-primary font-mono-label text-[12px] flex items-center gap-1 hover:underline w-fit disabled:opacity-50"
                >
                  <span className="material-symbols-outlined text-[14px]">summarize</span> Summarize Slack
                </button>
              </div>
            </motion.div>

            {/* Agent: Echo */}
            <motion.div variants={itemVariants} className="bg-surface-container-lowest shadow-[0px_4px_20px_rgba(0,0,0,0.03)] rounded-xl p-6 flex flex-col group hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden border border-transparent hover:border-surface-variant md:col-span-2">
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center text-primary border border-surface-container-highest">
                    <span className="material-symbols-outlined text-[24px]">memory</span>
                  </div>
                  <div>
                    <h3 className="font-headline-md font-serif text-on-surface text-[20px] leading-tight">Echo</h3>
                    <p className="font-mono-label font-mono text-[13px] text-on-surface-variant opacity-70">A-05 // Knowledge Retrieval (RAG)</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
                  <span className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-widest font-semibold">Ready</span>
                </div>
              </div>
              <div className="space-y-4 relative z-10 flex-1">
                <p className="font-label-sm text-[12px] text-on-surface-variant mb-1 uppercase tracking-wider font-semibold">Query Second Brain</p>
                <form 
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const input = e.currentTarget.elements.namedItem('query') as HTMLInputElement;
                    const query = input.value;
                    if(!query) return;
                    input.disabled = true;
                    const { searchSecondBrain } = await import("@/app/actions/echo-actions");
                    await searchSecondBrain("demo-user-123", query);
                    input.value = "";
                    input.disabled = false;
                  }}
                  className="flex gap-2"
                >
                  <input name="query" type="text" placeholder="Ask Notion via Pinecone..." className="flex-1 bg-surface-container border border-outline-variant rounded-lg px-3 py-2 text-[14px] text-on-surface focus:outline-none focus:border-primary" />
                  <button type="submit" className="bg-primary text-on-primary px-4 rounded-lg font-mono-label text-[12px] hover:opacity-90">Search</button>
                </form>
              </div>
            </motion.div>

            {/* Agent: Aura */}
            <motion.div variants={itemVariants} className="bg-surface-container-lowest shadow-[0px_4px_20px_rgba(0,0,0,0.03)] rounded-xl p-6 flex flex-col group hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden border border-transparent hover:border-surface-variant">
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center text-primary border border-surface-container-highest">
                    <span className="material-symbols-outlined text-[24px]">favorite</span>
                  </div>
                  <div>
                    <h3 className="font-headline-md font-serif text-on-surface text-[20px] leading-tight">Aura</h3>
                    <p className="font-mono-label font-mono text-[13px] text-on-surface-variant opacity-70">A-06 // Energy Monitor</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-outline-variant"></span>
                  <span className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-widest font-semibold">Idle</span>
                </div>
              </div>
              <div className="space-y-4 relative z-10 flex-1 flex flex-col justify-between">
                <div>
                  <p className="font-label-sm text-[12px] text-on-surface-variant mb-1 uppercase tracking-wider font-semibold">Current Mission</p>
                  <p className="font-body-md text-[15px] text-on-surface opacity-70">Awaiting Biometric Sync</p>
                </div>
                <button 
                  onClick={async () => {
                    const { analyzeEnergyLevels } = await import("@/app/actions/aura-actions");
                    await analyzeEnergyLevels("demo-user-123");
                  }}
                  className="mt-4 text-primary font-mono-label text-[12px] flex items-center gap-1 hover:underline w-fit"
                >
                  <span className="material-symbols-outlined text-[14px]">monitor_heart</span> Analyze Vitals
                </button>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Sidebar: Live Collaboration Log (Col span 4) */}
          <div className="lg:col-span-4">
            <div className="bg-surface-container-lowest shadow-[0px_4px_20px_rgba(0,0,0,0.03)] rounded-xl p-6 flex flex-col h-[calc(100vh-140px)] sticky top-28 border border-surface-container-highest/30">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-surface-container-highest/50">
                <h3 className="font-headline-md font-serif text-[18px] text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px] text-primary">dynamic_feed</span>
                  Synergy Feed
                </h3>
                <span className="flex items-center gap-1.5 font-label-sm text-[12px] text-primary uppercase tracking-widest font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span> Live
                </span>
              </div>
              <div className="flex-1 overflow-y-auto space-y-6 pr-2">
                {agentActions.length === 0 ? (
                  <p className="text-on-surface-variant text-sm">No agent activity yet.</p>
                ) : (
                  agentActions.map((action, i) => (
                    <div key={action.id} className="relative pl-6 before:absolute before:left-1.5 before:top-2 before:bottom-[-24px] before:w-px before:bg-surface-container-highest last:before:hidden">
                      <div className={`absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 border-surface-container-lowest z-10 ${i === 0 ? 'bg-primary-container' : 'bg-surface-variant'}`}></div>
                      <p className="font-label-sm text-[10px] text-on-surface-variant opacity-70 mb-1 font-semibold">
                        {formatDistanceToNow(new Date(action.createdAt), { addSuffix: true })}
                      </p>
                      <div className="bg-surface rounded-lg p-3 border border-surface-container-highest/50">
                        <p className="font-mono-label font-mono text-[12px] text-on-surface leading-snug">
                          <span className="font-semibold text-primary">{action.agentName}</span>: {action.logMessage}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
