"use client";

import { motion } from "framer-motion";
import { formatDistanceToNow } from "date-fns";

export default function DashboardClient({ 
  user, 
  tasks, 
  agentActions 
}: { 
  user: any, 
  tasks: any[], 
  agentActions: any[] 
}) {
  const momentumScore = user?.momentumScore || 87;

  return (
    <>
      {/* Hero Section */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <h2 className="font-display-lg font-serif text-[48px] text-on-surface tracking-tight mb-2 leading-tight">
          Welcome back.
        </h2>
        <p className="font-body-lg text-[18px] text-on-surface-variant">
          You are currently at{" "}
          <span className="text-primary font-semibold">{momentumScore} Momentum</span>.
        </p>
      </motion.header>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-min">
        
        {/* 1. Momentum Score (Large Card) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="bg-surface-container-lowest rounded-2xl p-6 md:col-span-8 shadow-[0px_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0px_8px_24px_rgba(0,0,0,0.05)] hover:-translate-y-[2px] transition-all flex flex-col justify-between min-h-[320px]"
        >
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="font-mono-label text-[13px] font-mono text-on-surface-variant uppercase tracking-wider mb-1">
                System Status
              </h3>
              <div className="text-4xl font-headline-md font-serif text-primary">
                Momentum Score
              </div>
            </div>
            <div className="bg-secondary-container/30 px-3 py-1 rounded-full text-[#254f2d] font-mono-label text-[13px] flex items-center gap-1">
              <span className="material-symbols-outlined" style={{ fontSize: "14px" }}>
                trending_up
              </span>
              +{momentumScore > 80 ? 4 : 1}% This Week
            </div>
          </div>
          {/* Chart Area Placeholder */}
          <div className="flex-1 w-full bg-surface-container-low rounded-lg relative overflow-hidden flex items-end">
            <div className="absolute inset-0 bg-gradient-to-t from-secondary-container/20 to-transparent"></div>
            <div className="w-full h-[60%] border-t-2 border-primary border-dashed relative">
              <div className="absolute -top-1.5 left-[10%] w-3 h-3 bg-primary rounded-full ring-4 ring-white"></div>
              <div className="absolute -top-4 left-[30%] w-3 h-3 bg-primary rounded-full ring-4 ring-white"></div>
              <div className="absolute top-2 left-[50%] w-3 h-3 bg-primary rounded-full ring-4 ring-white"></div>
              <div className="absolute -top-8 left-[70%] w-3 h-3 bg-primary rounded-full ring-4 ring-white"></div>
              <div className="absolute -top-12 left-[90%] w-4 h-4 bg-primary-container rounded-full ring-4 ring-white shadow-lg flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2. Today's Focus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-surface-container-lowest rounded-2xl p-6 md:col-span-4 shadow-[0px_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0px_8px_24px_rgba(0,0,0,0.05)] hover:-translate-y-[2px] transition-all flex flex-col"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-mono-label text-[13px] font-mono text-on-surface-variant uppercase tracking-wider">
              Today's Focus
            </h3>
            <span className="material-symbols-outlined text-outline">tune</span>
          </div>
          <div className="space-y-4 flex-1">
            {tasks.length === 0 ? (
              <p className="text-on-surface-variant text-sm">No tasks pending. Enjoy your day!</p>
            ) : (
              tasks.slice(0, 4).map((task) => (
                <div
                  key={task.id}
                  className="flex items-start gap-3 p-3 hover:bg-surface-container-low rounded-lg transition-colors cursor-pointer border border-transparent hover:border-outline-variant/30"
                >
                  <div className={`mt-1 w-5 h-5 rounded border flex items-center justify-center ${task.isCompleted ? 'bg-primary border-primary text-white' : 'border-outline'}`}>
                    {task.isCompleted && <span className="material-symbols-outlined text-[14px]">check</span>}
                  </div>
                  <div>
                    <p className={`font-body-md text-[15px] leading-tight ${task.isCompleted ? 'text-on-surface-variant line-through' : 'text-on-surface font-medium'}`}>
                      {task.title}
                    </p>
                    <p className="font-label-sm text-[12px] font-semibold tracking-wider text-on-surface-variant mt-1">
                      {task.priority} Priority
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
          <button className="mt-4 w-full py-2 text-primary font-mono-label text-[13px] border border-primary/20 rounded-lg hover:bg-primary/5 transition-colors">
            View All Tasks
          </button>
        </motion.div>

        {/* 3. Agent Feed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="bg-surface-container-lowest rounded-2xl p-6 md:col-span-12 shadow-[0px_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0px_8px_24px_rgba(0,0,0,0.05)] hover:-translate-y-[2px] transition-all"
        >
          <h3 className="font-mono-label text-[13px] font-mono text-on-surface-variant uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>
              smart_toy
            </span>
            Recent Agent Activity
          </h3>
          <div className="relative pl-4 border-l-2 border-surface-variant space-y-6 mt-4">
            {agentActions.length === 0 ? (
              <p className="text-on-surface-variant text-sm">Agents are standing by.</p>
            ) : (
              agentActions.map((action, index) => (
                <div key={action.id} className="relative">
                  <div className={`absolute -left-[23px] top-1 w-3 h-3 rounded-full ring-4 ring-white ${index === 0 ? 'bg-primary' : 'bg-outline-variant'}`}></div>
                  <p className={`font-label-sm text-[12px] font-mono-label mb-1 ${index === 0 ? 'text-primary' : 'text-on-surface-variant'}`}>
                    {formatDistanceToNow(new Date(action.createdAt), { addSuffix: true })} • {action.agentName}
                  </p>
                  <p className="font-body-md text-[15px] text-on-surface">
                    {action.logMessage}
                  </p>
                </div>
              ))
            )}
          </div>
        </motion.div>

      </div>

      {/* Bottom spacing for mobile if needed */}
      <div className="h-24 md:h-8"></div>
    </>
  );
}
