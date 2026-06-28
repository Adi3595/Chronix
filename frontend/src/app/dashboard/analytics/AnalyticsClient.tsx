"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { generateEchoReport } from "@/app/actions/echo-actions";
import { recalculatePulse } from "@/app/actions/pulse-actions";
import { formatDistanceToNow } from "date-fns";

export default function AnalyticsClient({
  user,
  completedTasks,
  agentActions,
}: {
  user: any;
  completedTasks: any[];
  agentActions: any[];
}) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);

  const handleGenerateReport = async () => {
    setIsGenerating(true);
    await generateEchoReport(user.id);
    setIsGenerating(false);
  };

  const handlePulseRefresh = async () => {
    setIsPulsing(true);
    await recalculatePulse(user.id);
    setIsPulsing(false);
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="font-sans font-black text-[48px] uppercase tracking-tighter text-foreground leading-none">Momentum Analytics</h2>
          <p className="font-mono text-[12px] uppercase tracking-widest text-muted-foreground mt-4 max-w-2xl">
            Pulse and Echo metrics calculating your productivity velocity.
          </p>
        </div>
        <div className="flex space-x-4">
          <button 
            onClick={handlePulseRefresh}
            disabled={isPulsing}
            className="px-6 py-3 bg-background border border-outline-variant hover:border-primary hover:text-primary transition-all font-mono text-[12px] uppercase tracking-widest font-bold flex items-center gap-2"
          >
            <span className={`material-symbols-outlined text-[16px] ${isPulsing ? "animate-spin" : ""}`}>refresh</span>
            {isPulsing ? "Pulsing..." : "Refresh Pulse"}
          </button>
          <button 
            onClick={handleGenerateReport}
            disabled={isGenerating}
            className="px-6 py-3 bg-primary text-background border border-primary hover:bg-primary/90 transition-all font-mono text-[12px] uppercase tracking-widest font-bold flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[16px]">auto_awesome</span>
            {isGenerating ? "Synthesizing..." : "Echo Report"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} className="bg-surface p-6 border border-outline-variant transition-all duration-200 group hover:border-primary shadow-[inset_0_0_0_transparent] hover:shadow-[inset_4px_0_0_rgba(169,198,50,1)]">
          <p className="text-muted-foreground font-mono text-[10px] uppercase tracking-widest border-b border-outline-variant/30 pb-2 mb-4">Momentum Score</p>
          <h3 className="text-[64px] font-sans font-black text-foreground group-hover:text-primary transition-colors leading-none tracking-tighter">{user.momentumScore}</h3>
          <p className="text-primary font-mono text-[10px] uppercase tracking-widest mt-4 font-bold">↑ +5% since last week</p>
        </motion.div>
        
        <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} transition={{delay: 0.1}} className="bg-surface p-6 border border-outline-variant transition-all duration-200 group hover:border-primary shadow-[inset_0_0_0_transparent] hover:shadow-[inset_4px_0_0_rgba(169,198,50,1)]">
          <p className="text-muted-foreground font-mono text-[10px] uppercase tracking-widest border-b border-outline-variant/30 pb-2 mb-4">Tasks Completed (7 Days)</p>
          <h3 className="text-[64px] font-sans font-black text-foreground group-hover:text-primary transition-colors leading-none tracking-tighter">{completedTasks.length}</h3>
          <p className="text-muted-foreground font-mono text-[10px] uppercase tracking-widest mt-4 font-bold">Steady velocity</p>
        </motion.div>
        
        <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} transition={{delay: 0.2}} className="bg-surface p-6 border border-outline-variant transition-all duration-200 group hover:border-primary shadow-[inset_0_0_0_transparent] hover:shadow-[inset_4px_0_0_rgba(169,198,50,1)]">
          <p className="text-muted-foreground font-mono text-[10px] uppercase tracking-widest border-b border-outline-variant/30 pb-2 mb-4">Echo Reports Generated</p>
          <h3 className="text-[64px] font-sans font-black text-foreground group-hover:text-primary transition-colors leading-none tracking-tighter">{agentActions.filter(a => a.agentName === "Echo").length}</h3>
          <p className="text-muted-foreground font-mono text-[10px] uppercase tracking-widest mt-4 font-bold">Lifetime synthesis count</p>
        </motion.div>
      </div>

      <div className="bg-surface border border-outline-variant p-8">
        <h3 className="font-sans font-black text-[24px] uppercase text-foreground mb-8 border-b border-outline-variant pb-4 tracking-tighter">Agent Activity Logs</h3>
        {agentActions.length === 0 && <p className="text-muted-foreground font-mono text-[12px] uppercase tracking-widest py-4">No recent activity from Pulse or Echo.</p>}
        
        <div className="space-y-4">
          {agentActions.map((action) => (
            <div key={action.id} className="flex gap-6 items-start p-6 bg-background border border-outline-variant group hover:border-primary transition-colors">
              <div className={`p-3 border border-outline-variant flex items-center justify-center ${action.agentName === 'Echo' ? 'bg-primary/5 text-primary' : 'bg-surface text-foreground group-hover:text-primary transition-colors'}`}>
                <span className="material-symbols-outlined text-[24px]">{action.agentName === 'Echo' ? 'auto_awesome' : 'monitor_heart'}</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-sans font-bold text-[18px] uppercase tracking-tight text-foreground group-hover:text-primary transition-colors">{action.agentName} - {action.actionType}</h4>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{formatDistanceToNow(new Date(action.createdAt))} ago</span>
                </div>
                <p className="font-mono text-[12px] text-muted-foreground leading-relaxed">{action.logMessage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
