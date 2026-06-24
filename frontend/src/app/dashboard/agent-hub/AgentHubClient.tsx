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

  const itemVariants = {
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
            <motion.div variants={itemVariants} className="bg-surface-container-lowest shadow-[0px_4px_20px_rgba(0,0,0,0.03)] rounded-xl p-6 flex flex-col group hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden ring-1 ring-error-container/50">
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center text-primary border border-surface-container-highest">
                    <span className="material-symbols-outlined text-[24px]">visibility</span>
                  </div>
                  <div>
                    <h3 className="font-headline-md font-serif text-on-surface text-[20px] leading-tight">Sentinel</h3>
                    <p className="font-mono-label font-mono text-[13px] text-on-surface-variant opacity-70">A-03 // Risk Monitor</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-error-container/30 text-error rounded-full border border-error/10">
                  <span className="w-2 h-2 rounded-full bg-error animate-pulse"></span>
                  <span className="font-label-sm text-[10px] uppercase tracking-widest font-semibold">Alert</span>
                </div>
              </div>
              <div className="space-y-4 relative z-10 flex-1">
                <div>
                  <p className="font-label-sm text-[12px] text-on-surface-variant mb-1 uppercase tracking-wider font-semibold">Current Mission</p>
                  <p className="font-body-md text-[15px] text-on-surface">Task Risk Analysis</p>
                </div>
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
              <div className="space-y-4 relative z-10 flex-1">
                <div>
                  <p className="font-label-sm text-[12px] text-on-surface-variant mb-1 uppercase tracking-wider font-semibold">Current Mission</p>
                  <p className="font-body-md text-[15px] text-on-surface">Goal Planning & Breakdown</p>
                </div>
              </div>
            </motion.div>

            {/* Agent: Rescue */}
            <motion.div variants={itemVariants} className="bg-surface-container-lowest shadow-[0px_4px_20px_rgba(0,0,0,0.03)] rounded-xl p-6 flex flex-col group hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden border border-transparent hover:border-surface-variant">
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center text-primary border border-surface-container-highest">
                    <span className="material-symbols-outlined text-[24px]">medical_services</span>
                  </div>
                  <div>
                    <h3 className="font-headline-md font-serif text-on-surface text-[20px] leading-tight">Rescue</h3>
                    <p className="font-mono-label font-mono text-[13px] text-on-surface-variant opacity-70">A-05 // Recovery</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-outline-variant"></span>
                  <span className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-widest font-semibold">Standby</span>
                </div>
              </div>
              <div className="space-y-4 relative z-10 flex-1">
                <div>
                  <p className="font-label-sm text-[12px] text-on-surface-variant mb-1 uppercase tracking-wider font-semibold">Current Mission</p>
                  <p className="font-body-md text-[15px] text-on-surface opacity-70">Awaiting Incident Trigger</p>
                </div>
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
