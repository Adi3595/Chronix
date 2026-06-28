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
          <h2 className="font-serif font-black text-[48px] tracking-tight text-foreground leading-none">Momentum Analytics</h2>
          <p className="font-sans text-[15px] text-muted-foreground mt-4 max-w-2xl">
            Pulse and Echo metrics calculating your productivity velocity.
          </p>
        </div>
        <div className="flex space-x-4">
          <button 
            onClick={handlePulseRefresh}
            disabled={isPulsing}
            className="px-6 py-3 bg-surface/40 backdrop-blur-xl border border-outline hover:border-primary hover:text-primary transition-all rounded-full font-sans text-[12px] uppercase tracking-widest font-bold flex items-center gap-2"
          >
            <span className={`material-symbols-outlined text-[16px] ${isPulsing ? "animate-spin" : ""}`}>refresh</span>
            {isPulsing ? "Pulsing..." : "Refresh Pulse"}
          </button>
          <button 
            onClick={handleGenerateReport}
            disabled={isGenerating}
            className="px-6 py-3 bg-primary text-background border border-primary hover:bg-primary/90 transition-all rounded-full font-sans text-[12px] uppercase tracking-widest font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(46,125,50,0.4)]"
          >
            <span className="material-symbols-outlined text-[16px]">auto_awesome</span>
            {isGenerating ? "Synthesizing..." : "Echo Report"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} className="bg-surface/40 backdrop-blur-xl p-8 rounded-3xl border border-outline transition-all duration-300 group hover:border-primary/40 hover:shadow-[0_10px_40px_rgba(46,125,50,0.15)] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <p className="text-muted-foreground font-sans text-[12px] font-bold uppercase tracking-widest border-b border-outline pb-4 mb-6 relative z-10">Momentum Score</p>
          <h3 className="text-[64px] font-serif font-bold text-foreground group-hover:text-primary transition-colors leading-none tracking-tight relative z-10">{user.momentumScore}</h3>
          <p className="text-primary font-sans text-[12px] font-bold uppercase tracking-widest mt-6 relative z-10">↑ +5% since last week</p>
        </motion.div>
        
        <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} transition={{delay: 0.1}} className="bg-surface/40 backdrop-blur-xl p-8 rounded-3xl border border-outline transition-all duration-300 group hover:border-primary/40 hover:shadow-[0_10px_40px_rgba(46,125,50,0.15)] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <p className="text-muted-foreground font-sans text-[12px] font-bold uppercase tracking-widest border-b border-outline pb-4 mb-6 relative z-10">Tasks Completed (7 Days)</p>
          <h3 className="text-[64px] font-serif font-bold text-foreground group-hover:text-primary transition-colors leading-none tracking-tight relative z-10">{completedTasks.length}</h3>
          <p className="text-muted-foreground font-sans text-[12px] font-bold uppercase tracking-widest mt-6 relative z-10">Steady velocity</p>
        </motion.div>
        
        <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} transition={{delay: 0.2}} className="bg-surface/40 backdrop-blur-xl p-8 rounded-3xl border border-outline transition-all duration-300 group hover:border-primary/40 hover:shadow-[0_10px_40px_rgba(46,125,50,0.15)] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <p className="text-muted-foreground font-sans text-[12px] font-bold uppercase tracking-widest border-b border-outline pb-4 mb-6 relative z-10">Echo Reports Generated</p>
          <h3 className="text-[64px] font-serif font-bold text-foreground group-hover:text-primary transition-colors leading-none tracking-tight relative z-10">{agentActions.filter(a => a.agentName === "Echo").length}</h3>
          <p className="text-muted-foreground font-sans text-[12px] font-bold uppercase tracking-widest mt-6 relative z-10">Lifetime synthesis count</p>
        </motion.div>
      </div>

      <div className="bg-surface/40 backdrop-blur-xl border border-outline rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
        <h3 className="font-sans font-bold text-[24px] text-foreground mb-8 border-b border-outline pb-4 tracking-tight">Agent Activity Logs</h3>
        {agentActions.length === 0 && <p className="text-muted-foreground font-sans text-[13px] uppercase tracking-widest py-4">No recent activity from Pulse or Echo.</p>}
        
        <div className="space-y-4">
          {agentActions.map((action) => (
            <div key={action.id} className="flex gap-6 items-start p-6 bg-background/50 backdrop-blur-xl border border-outline rounded-2xl group hover:border-primary/40 transition-colors shadow-sm">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center border ${action.agentName === 'Echo' ? 'bg-primary/10 border-primary/20 text-primary shadow-[0_0_15px_rgba(46,125,50,0.2)]' : 'bg-surface border-outline text-muted-foreground group-hover:text-primary group-hover:border-primary/30 group-hover:shadow-[0_0_15px_rgba(46,125,50,0.2)] transition-all'}`}>
                <span className="material-symbols-outlined text-[20px]">{action.agentName === 'Echo' ? 'auto_awesome' : 'monitor_heart'}</span>
              </div>
              <div className="flex-1 mt-1">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-sans font-bold text-[16px] tracking-wide text-foreground group-hover:text-primary transition-colors">{action.agentName} - {action.actionType}</h4>
                  <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-muted-foreground">{formatDistanceToNow(new Date(action.createdAt))} ago</span>
                </div>
                <p className="font-sans text-[14px] text-muted-foreground leading-relaxed">{action.logMessage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
