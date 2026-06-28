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
        <div className="mb-12 max-w-3xl">
          <h2 className="font-sans font-black text-[48px] uppercase text-foreground leading-none tracking-tighter">Agent Command Center</h2>
          <p className="font-mono text-[12px] uppercase tracking-widest text-muted-foreground mt-4">Live orchestration and telemetry across your autonomous neural suite. Monitoring 6 active agents.</p>
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
            <motion.div variants={itemVariants} className="bg-surface p-6 flex flex-col group transition-all duration-300 relative border border-outline-variant hover:border-primary shadow-[inset_0_0_0_transparent] hover:shadow-[inset_4px_0_0_rgba(169,198,50,1)]">
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-background flex items-center justify-center text-primary border border-outline-variant">
                    <span className="material-symbols-outlined text-[24px]">visibility</span>
                  </div>
                  <div>
                    <h3 className="font-sans font-black text-[24px] uppercase text-foreground tracking-tighter leading-none">Sentinel</h3>
                    <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mt-1">A-03 // Risk & Focus</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-background border border-outline-variant">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-foreground font-bold">Active</span>
                </div>
              </div>
              <div className="space-y-4 relative z-10 flex-1 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest border-b border-outline-variant/30 pb-2 mb-2 block">Current Mission</span>
                  <p className="font-sans font-bold text-[16px] uppercase text-foreground">Deep Work Enforcement</p>
                </div>
                <button 
                  onClick={async () => {
                    const { enableDeepWorkMode } = await import("@/app/actions/nova-actions");
                    await enableDeepWorkMode("demo-user-123");
                  }}
                  className="mt-4 text-primary font-mono text-[12px] uppercase tracking-widest font-bold flex items-center gap-2 hover:underline"
                >
                  <span className="material-symbols-outlined text-[16px]">do_not_disturb_on</span> Engage Deep Work
                </button>
              </div>
            </motion.div>

            {/* Agent: Atlas */}
            <motion.div variants={itemVariants} className="bg-surface p-6 flex flex-col group transition-all duration-300 relative border border-outline-variant hover:border-primary shadow-[inset_0_0_0_transparent] hover:shadow-[inset_4px_0_0_rgba(169,198,50,1)]">
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-background flex items-center justify-center text-primary border border-outline-variant">
                    <span className="material-symbols-outlined text-[24px]">public</span>
                  </div>
                  <div>
                    <h3 className="font-sans font-black text-[24px] uppercase text-foreground tracking-tighter leading-none">Atlas</h3>
                    <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mt-1">A-01 // Strategic Core</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-background border border-outline-variant">
                  <span className="w-1.5 h-1.5 bg-primary animate-pulse"></span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-foreground font-bold">Optimal</span>
                </div>
              </div>
              <div className="space-y-4 relative z-10 flex-1 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest border-b border-outline-variant/30 pb-2 mb-2 block">Current Mission</span>
                  <p className="font-sans font-bold text-[16px] uppercase text-foreground">Goal Planning & Breakdown</p>
                </div>
                <a href="/dashboard/goals" className="mt-4 text-primary font-mono text-[12px] uppercase tracking-widest font-bold flex items-center gap-2 hover:underline w-fit">
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span> Go to Goals
                </a>
              </div>
            </motion.div>

            {/* Agent: Orbit */}
            <motion.div variants={itemVariants} className="bg-surface p-6 flex flex-col group transition-all duration-300 relative border border-outline-variant hover:border-primary shadow-[inset_0_0_0_transparent] hover:shadow-[inset_4px_0_0_rgba(169,198,50,1)]">
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-background flex items-center justify-center text-primary border border-outline-variant">
                    <span className="material-symbols-outlined text-[24px]">sync</span>
                  </div>
                  <div>
                    <h3 className="font-sans font-black text-[24px] uppercase text-foreground tracking-tighter leading-none">Orbit</h3>
                    <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mt-1">A-02 // Integrations</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-background border border-outline-variant">
                  <span className="w-1.5 h-1.5 bg-outline-variant"></span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Idle</span>
                </div>
              </div>
              <div className="space-y-4 relative z-10 flex-1 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest border-b border-outline-variant/30 pb-2 mb-2 block">Current Mission</span>
                  <p className="font-sans font-bold text-[16px] uppercase text-muted-foreground">Awaiting Sync Cycle</p>
                </div>
                <button 
                  onClick={async () => {
                    const { triggerOrbitSync } = await import("@/app/actions/orbit-actions");
                    await triggerOrbitSync("demo-user-123");
                  }}
                  className="mt-4 text-primary font-mono text-[12px] uppercase tracking-widest font-bold flex items-center gap-2 hover:underline w-fit"
                >
                  <span className="material-symbols-outlined text-[16px]">bolt</span> Force Sync
                </button>
              </div>
            </motion.div>

            {/* Agent: Nova */}
            <motion.div variants={itemVariants} className="bg-surface p-6 flex flex-col group transition-all duration-300 relative border border-outline-variant hover:border-primary shadow-[inset_0_0_0_transparent] hover:shadow-[inset_4px_0_0_rgba(169,198,50,1)]">
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-background flex items-center justify-center text-primary border border-outline-variant">
                    <span className="material-symbols-outlined text-[24px]">forum</span>
                  </div>
                  <div>
                    <h3 className="font-sans font-black text-[24px] uppercase text-foreground tracking-tighter leading-none">Nova</h3>
                    <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mt-1">A-04 // Comms Filter</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-background border border-outline-variant">
                  <span className="w-1.5 h-1.5 bg-outline-variant"></span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Idle</span>
                </div>
              </div>
              <div className="space-y-4 relative z-10 flex-1 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest border-b border-outline-variant/30 pb-2 mb-2 block">Current Mission</span>
                  <p className="font-sans font-bold text-[16px] uppercase text-muted-foreground">Awaiting Slack Channel</p>
                </div>
                <button 
                  onClick={async (e) => {
                    const btn = e.currentTarget;
                    btn.disabled = true;
                    btn.innerHTML = "Summarizing...";
                    const { summarizeCommunications } = await import("@/app/actions/nova-actions");
                    await summarizeCommunications("demo-user-123");
                    btn.innerHTML = "<span class='material-symbols-outlined text-[16px]'>summarize</span> Summarize Slack";
                    btn.disabled = false;
                  }}
                  className="mt-4 text-primary font-mono text-[12px] uppercase tracking-widest font-bold flex items-center gap-2 hover:underline w-fit disabled:opacity-50"
                >
                  <span className="material-symbols-outlined text-[16px]">summarize</span> Summarize Slack
                </button>
              </div>
            </motion.div>

            {/* Agent: Echo */}
            <motion.div variants={itemVariants} className="bg-surface p-6 flex flex-col group transition-all duration-300 relative border border-outline-variant hover:border-primary shadow-[inset_0_0_0_transparent] hover:shadow-[inset_4px_0_0_rgba(169,198,50,1)] md:col-span-2">
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-background flex items-center justify-center text-primary border border-outline-variant">
                    <span className="material-symbols-outlined text-[24px]">memory</span>
                  </div>
                  <div>
                    <h3 className="font-sans font-black text-[24px] uppercase text-foreground tracking-tighter leading-none">Echo</h3>
                    <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mt-1">A-05 // Knowledge Retrieval</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-background border border-outline-variant">
                  <span className="w-1.5 h-1.5 bg-primary animate-pulse"></span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-foreground font-bold">Ready</span>
                </div>
              </div>
              <div className="space-y-4 relative z-10 flex-1">
                <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest border-b border-outline-variant/30 pb-2 mb-2 block">Query Second Brain</span>
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
                  <input name="query" type="text" placeholder="Access Neural Link..." className="flex-1 bg-background border border-outline-variant px-4 py-3 text-[14px] font-mono text-foreground focus:outline-none focus:border-primary placeholder:text-muted-foreground/30 transition-colors" />
                  <button type="submit" className="bg-primary text-background px-6 font-mono text-[12px] font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors">Search</button>
                </form>
              </div>
            </motion.div>

            {/* Agent: Aura */}
            <motion.div variants={itemVariants} className="bg-surface p-6 flex flex-col group transition-all duration-300 relative border border-outline-variant hover:border-primary shadow-[inset_0_0_0_transparent] hover:shadow-[inset_4px_0_0_rgba(169,198,50,1)]">
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-background flex items-center justify-center text-primary border border-outline-variant">
                    <span className="material-symbols-outlined text-[24px]">favorite</span>
                  </div>
                  <div>
                    <h3 className="font-sans font-black text-[24px] uppercase text-foreground tracking-tighter leading-none">Aura</h3>
                    <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mt-1">A-06 // Energy Monitor</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-background border border-outline-variant">
                  <span className="w-1.5 h-1.5 bg-outline-variant"></span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Idle</span>
                </div>
              </div>
              <div className="space-y-4 relative z-10 flex-1 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest border-b border-outline-variant/30 pb-2 mb-2 block">Current Mission</span>
                  <p className="font-sans font-bold text-[16px] uppercase text-muted-foreground">Awaiting Biometric Sync</p>
                </div>
                <button 
                  onClick={async () => {
                    const { analyzeEnergyLevels } = await import("@/app/actions/aura-actions");
                    await analyzeEnergyLevels("demo-user-123");
                  }}
                  className="mt-4 text-primary font-mono text-[12px] uppercase tracking-widest font-bold flex items-center gap-2 hover:underline w-fit"
                >
                  <span className="material-symbols-outlined text-[16px]">monitor_heart</span> Analyze Vitals
                </button>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Sidebar: Live Collaboration Log (Col span 4) */}
          <div className="lg:col-span-4">
            <div className="bg-surface border border-outline-variant p-6 flex flex-col h-[calc(100vh-140px)] sticky top-28">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-outline-variant">
                <h3 className="font-sans font-black text-[18px] uppercase tracking-tighter text-foreground flex items-center gap-3">
                  <span className="material-symbols-outlined text-[20px] text-primary">dynamic_feed</span>
                  Synergy Feed
                </h3>
                <span className="flex items-center gap-2 font-mono text-[10px] text-primary uppercase tracking-widest font-bold">
                  <span className="w-2 h-2 bg-primary animate-ping"></span> Live
                </span>
              </div>
              <div className="flex-1 overflow-y-auto space-y-6 pr-2">
                {agentActions.length === 0 ? (
                  <p className="text-muted-foreground font-mono text-[12px] uppercase tracking-widest">No agent activity yet.</p>
                ) : (
                  agentActions.map((action, i) => (
                    <div key={action.id} className="relative pl-6 before:absolute before:left-1.5 before:top-2 before:bottom-[-24px] before:w-px before:bg-outline-variant last:before:hidden">
                      <div className={`absolute left-[3px] top-1.5 w-2 h-2 z-10 ${i === 0 ? 'bg-primary' : 'bg-outline-variant'}`}></div>
                      <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-2 font-semibold">
                        {formatDistanceToNow(new Date(action.createdAt), { addSuffix: true })}
                      </p>
                      <div className="bg-background p-3 border border-outline-variant">
                        <p className="font-mono text-[12px] text-foreground leading-snug">
                          <strong className="font-bold text-primary uppercase tracking-wider">{action.agentName}</strong>: {action.logMessage}
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
