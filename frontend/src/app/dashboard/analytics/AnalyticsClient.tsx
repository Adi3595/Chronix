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
          <h2 className="font-display-lg text-[48px] font-serif font-semibold text-on-surface">Momentum Analytics</h2>
          <p className="font-body-md text-[15px] text-on-surface-variant mt-2 max-w-2xl">
            Pulse and Echo metrics calculating your productivity velocity.
          </p>
        </div>
        <div className="flex space-x-4">
          <button 
            onClick={handlePulseRefresh}
            disabled={isPulsing}
            className="px-6 py-3 rounded-lg bg-surface-container-highest font-mono-label text-[13px] text-on-surface-variant hover:text-primary transition-all shadow-sm flex items-center gap-2"
          >
            <span className={`material-symbols-outlined ${isPulsing ? "animate-spin" : ""}`}>refresh</span>
            {isPulsing ? "Pulsing..." : "Refresh Pulse"}
          </button>
          <button 
            onClick={handleGenerateReport}
            disabled={isGenerating}
            className="px-6 py-3 rounded-lg bg-primary-container text-on-primary font-mono-label text-[13px] hover:opacity-90 transition-all shadow-sm flex items-center gap-2"
          >
            <span className="material-symbols-outlined">auto_awesome</span>
            {isGenerating ? "Synthesizing..." : "Echo Report"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 shadow-sm">
          <p className="text-on-surface-variant font-mono-label text-[13px] mb-2">Momentum Score</p>
          <h3 className="text-[48px] font-serif font-bold text-primary">{user.momentumScore}</h3>
          <p className="text-[#3d6843] text-sm mt-2 font-medium">↑ +5% since last week</p>
        </motion.div>
        
        <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} transition={{delay: 0.1}} className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 shadow-sm">
          <p className="text-on-surface-variant font-mono-label text-[13px] mb-2">Tasks Completed (7 Days)</p>
          <h3 className="text-[48px] font-serif font-bold text-on-surface">{completedTasks.length}</h3>
          <p className="text-on-surface-variant text-sm mt-2 font-medium">Steady velocity</p>
        </motion.div>
        
        <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} transition={{delay: 0.2}} className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 shadow-sm">
          <p className="text-on-surface-variant font-mono-label text-[13px] mb-2">Echo Reports Generated</p>
          <h3 className="text-[48px] font-serif font-bold text-on-surface">{agentActions.filter(a => a.agentName === "Echo").length}</h3>
          <p className="text-on-surface-variant text-sm mt-2 font-medium">Lifetime synthesis count</p>
        </motion.div>
      </div>

      <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-sm p-6">
        <h3 className="font-headline-md text-[24px] font-serif mb-6 text-on-surface">Agent Activity Logs</h3>
        {agentActions.length === 0 && <p className="text-on-surface-variant text-sm py-4">No recent activity from Pulse or Echo.</p>}
        
        <div className="space-y-4">
          {agentActions.map((action) => (
            <div key={action.id} className="flex gap-4 items-start p-4 bg-surface-container/30 rounded-lg">
              <div className={`p-2 rounded-full ${action.agentName === 'Echo' ? 'bg-[#ffdad6] text-[#93000a]' : 'bg-[#beefbf] text-[#002109]'}`}>
                <span className="material-symbols-outlined">{action.agentName === 'Echo' ? 'auto_awesome' : 'monitor_heart'}</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <h4 className="font-bold text-[15px]">{action.agentName} - {action.actionType}</h4>
                  <span className="text-xs text-on-surface-variant">{formatDistanceToNow(new Date(action.createdAt))} ago</span>
                </div>
                <p className="text-[14px] text-on-surface-variant mt-1">{action.logMessage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
