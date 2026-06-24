"use client";

import { motion } from "framer-motion";

export default function DashboardPage() {
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
          <span className="text-primary font-semibold">87 Momentum</span>.
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
              +4% This Week
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
          className="bg-surface-container-lowest rounded-2xl p-6 md:col-span-4 shadow-[0px_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0px_8px_24px_rgba(0,0,0,0.05)] hover:-translate-y-[2px] transition-all"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-mono-label text-[13px] font-mono text-on-surface-variant uppercase tracking-wider">
              Today's Focus
            </h3>
            <span className="material-symbols-outlined text-outline">tune</span>
          </div>
          <div className="space-y-4">
            {[
              { title: "Finalize Q3 Strategy Deck", desc: "High Priority • Atlas" },
              { title: "Review Sentinel Risk Report", desc: "Medium Priority" },
              { title: "Weekly Sync w/ Design", desc: "Scheduled • 14:00" },
            ].map((task, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-3 hover:bg-surface-container-low rounded-lg transition-colors cursor-pointer border border-transparent hover:border-outline-variant/30"
              >
                <div className="mt-1 w-5 h-5 rounded border border-outline flex items-center justify-center"></div>
                <div>
                  <p className="font-body-md text-[15px] text-on-surface font-medium leading-tight">
                    {task.title}
                  </p>
                  <p className="font-label-sm text-[12px] font-semibold tracking-wider text-on-surface-variant mt-1">
                    {task.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-4 w-full py-2 text-primary font-mono-label text-[13px] border border-primary/20 rounded-lg hover:bg-primary/5 transition-colors">
            View All Tasks
          </button>
        </motion.div>

        {/* 3. Future Self Simulator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-gradient-to-br from-surface-container-lowest to-surface-container-low rounded-2xl p-6 md:col-span-4 shadow-[0px_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0px_8px_24px_rgba(0,0,0,0.05)] hover:-translate-y-[2px] transition-all"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-mono-label text-[13px] font-mono text-on-surface-variant uppercase tracking-wider flex items-center gap-2">
              <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>
                auto_awesome
              </span>
              Future Projection
            </h3>
          </div>
          <div className="py-4">
            <p className="font-headline-md font-serif text-[24px] text-on-surface mb-2">
              On track for Q4 Goals.
            </p>
            <p className="font-body-md text-[15px] text-on-surface-variant mb-4">
              Current trajectory indicates early completion of "Project Horizon" by 12 days.
            </p>
            <div className="w-full bg-surface-variant rounded-full h-1.5 mb-2 overflow-hidden">
              <div className="bg-primary h-1.5 rounded-full" style={{ width: "78%" }}></div>
            </div>
            <div className="flex justify-between text-label-sm text-[12px] text-on-surface-variant font-mono-label">
              <span>Current: 78%</span>
              <span>Target: 100%</span>
            </div>
          </div>
        </motion.div>

        {/* 4. Deadline Radar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-surface-container-lowest rounded-2xl p-6 md:col-span-4 shadow-[0px_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0px_8px_24px_rgba(0,0,0,0.05)] hover:-translate-y-[2px] transition-all"
        >
          <h3 className="font-mono-label text-[13px] font-mono text-on-surface-variant uppercase tracking-wider mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>
              radar
            </span>
            Sentinel Radar
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-error-container/30 rounded-lg border border-error/20">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-error">warning</span>
                <span className="font-body-md text-[15px] text-on-surface font-medium">
                  Tax Filing Prep
                </span>
              </div>
              <span className="font-mono-label text-[13px] font-mono text-error">2 Days</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-surface-container rounded-lg">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-on-surface-variant">
                  schedule
                </span>
                <span className="font-body-md text-[15px] text-on-surface">
                  Client Presentation
                </span>
              </div>
              <span className="font-mono-label text-[13px] font-mono text-on-surface-variant">
                5 Days
              </span>
            </div>
          </div>
        </motion.div>

        {/* 5. Agent Feed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="bg-surface-container-lowest rounded-2xl p-6 md:col-span-4 shadow-[0px_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0px_8px_24px_rgba(0,0,0,0.05)] hover:-translate-y-[2px] transition-all"
        >
          <h3 className="font-mono-label text-[13px] font-mono text-on-surface-variant uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>
              smart_toy
            </span>
            Agent Activity
          </h3>
          <div className="relative pl-4 border-l-2 border-surface-variant space-y-6 mt-4">
            <div className="relative">
              <div className="absolute -left-[23px] top-1 w-3 h-3 bg-primary rounded-full ring-4 ring-white"></div>
              <p className="font-label-sm text-[12px] text-primary font-mono-label mb-1">
                2 mins ago
              </p>
              <p className="font-body-md text-[15px] text-on-surface">
                Data Agent completed weekly analytics pull. Report is ready for review.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -left-[23px] top-1 w-3 h-3 bg-outline-variant rounded-full ring-4 ring-white"></div>
              <p className="font-label-sm text-[12px] text-on-surface-variant font-mono-label mb-1">
                1 hr ago
              </p>
              <p className="font-body-md text-[15px] text-on-surface">
                Scheduling Agent resolved conflict between Design Sync and Client Call.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 6. Calendar Focus Blocks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-surface-container-lowest rounded-2xl p-6 md:col-span-12 shadow-[0px_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0px_8px_24px_rgba(0,0,0,0.05)] hover:-translate-y-[2px] transition-all"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-mono-label text-[13px] font-mono text-on-surface-variant uppercase tracking-wider">
              Focus Blocks
            </h3>
            <div className="flex gap-2">
              <button className="p-1 rounded hover:bg-surface-container transition-colors">
                <span className="material-symbols-outlined text-outline">
                  chevron_left
                </span>
              </button>
              <span className="font-mono-label text-[13px] font-mono py-1">Today</span>
              <button className="p-1 rounded hover:bg-surface-container transition-colors">
                <span className="material-symbols-outlined text-outline">
                  chevron_right
                </span>
              </button>
            </div>
          </div>
          {/* Mini Timeline */}
          <div className="flex h-32 gap-2">
            <div className="flex-1 flex flex-col gap-2">
              <span className="font-label-sm text-[12px] text-on-surface-variant text-center">
                09:00
              </span>
              <div className="flex-1 bg-surface-container-low rounded-md border border-outline-variant/30 flex items-center justify-center p-2 text-center relative group">
                <span className="font-label-sm text-on-surface-variant opacity-50">
                  Deep Work
                </span>
                <div className="absolute inset-0 bg-primary/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <span className="font-label-sm text-[12px] text-primary font-bold text-center">
                11:00
              </span>
              <div className="flex-1 bg-primary/10 rounded-md border border-primary/30 flex flex-col items-center justify-center p-2 text-center shadow-inner">
                <span className="font-mono-label text-primary font-bold text-xs mb-1">
                  Strategy Deck
                </span>
                <span className="material-symbols-outlined text-primary" style={{ fontSize: "16px" }}>
                  bolt
                </span>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <span className="font-label-sm text-[12px] text-on-surface-variant text-center">
                13:00
              </span>
              <div className="flex-1 bg-transparent rounded-md border border-dashed border-outline-variant flex items-center justify-center p-2">
                <span className="font-label-sm text-on-surface-variant opacity-50">
                  Lunch
                </span>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <span className="font-label-sm text-[12px] text-on-surface-variant text-center">
                14:00
              </span>
              <div className="flex-1 bg-secondary-container/30 rounded-md border border-[#beefbf] flex items-center justify-center p-2 text-center">
                <span className="font-label-sm text-[#254f2d]">Meetings</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom spacing for mobile if needed */}
      <div className="h-24 md:h-8"></div>
    </>
  );
}
