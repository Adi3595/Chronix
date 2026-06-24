"use client";

import { motion } from "framer-motion";
import { formatDistanceToNow, format } from "date-fns";

export default function CalendarClient({ tasks, agentActions }: { tasks: any[], agentActions: any[] }) {
  return (
    <>
      {/* TopAppBar */}
      <header className="hidden md:flex justify-between items-center h-20 sticky top-0 z-40 bg-surface/80 backdrop-blur-md mb-6 border-none">
        <div className="flex items-center gap-4">
          <h2 className="font-headline-md font-serif text-[24px] font-medium text-on-surface">Weekly Overview</h2>
          <span className="font-label-sm text-[12px] font-semibold text-on-surface-variant uppercase tracking-widest px-2 py-1 bg-surface-container rounded">
            Live Feed
          </span>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-[1440px] mx-auto pb-12">
        {/* Scheduled Tasks List (Main View) */}
        <div className="lg:col-span-3 bg-surface-container-lowest rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.03)] p-6">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-headline-md font-serif text-[18px] font-medium text-on-surface">Scheduled Tasks</h3>
          </div>

          <div className="space-y-4">
            {tasks.length === 0 ? (
              <p className="text-on-surface-variant">No tasks scheduled. Go to Tasks to schedule them.</p>
            ) : (
              tasks.map((task) => (
                <div key={task.id} className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg border border-outline-variant/30 hover:border-primary/50 transition-colors">
                  <div>
                    <h4 className={`font-body-md font-medium text-[16px] ${task.isCompleted ? 'line-through text-on-surface-variant' : 'text-on-surface'}`}>
                      {task.title}
                    </h4>
                    <p className="font-label-sm text-[12px] text-on-surface-variant mt-1">
                      Priority: {task.priority}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono-label font-mono text-[13px] text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {format(new Date(task.scheduledAt), "MMM d, h:mm a")}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Agent Scheduling Sidebar (1 column) */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          {/* Agent Status Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-surface-container-lowest rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.03)] p-6"
          >
            <h3 className="font-headline-md font-serif text-[18px] font-medium text-on-surface mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">robot_2</span>
              Agent Optimizations
            </h3>
            <div className="space-y-4">
              {agentActions.length === 0 ? (
                <p className="font-label-sm text-[11px] text-on-surface-variant">Agents standing by.</p>
              ) : (
                agentActions.map((action, i) => (
                  <div key={action.id} className="p-3 bg-surface-container-low rounded-lg border border-outline-variant/30">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-primary-container text-on-primary flex items-center justify-center">
                          <span className="font-mono-label font-mono text-[10px] font-bold">{action.agentName.substring(0, 2).toUpperCase()}</span>
                        </div>
                        <span className="font-body-md text-[14px] font-medium text-on-surface">{action.agentName}</span>
                      </div>
                      {i === 0 && <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>}
                    </div>
                    <p className="font-label-sm text-[11px] font-semibold text-on-surface-variant leading-relaxed">
                      {action.logMessage}
                    </p>
                  </div>
                ))
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
