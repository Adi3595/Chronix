"use client";

import { motion } from "framer-motion";

export default function CalendarPage() {
  return (
    <>
      {/* TopAppBar */}
      <header className="hidden md:flex justify-between items-center h-20 sticky top-0 z-40 bg-surface/80 backdrop-blur-md mb-6 border-none">
        <div className="flex items-center gap-4">
          <h2 className="font-headline-md font-serif text-[24px] font-medium text-on-surface">Weekly Overview</h2>
          <span className="font-label-sm text-[12px] font-semibold text-on-surface-variant uppercase tracking-widest px-2 py-1 bg-surface-container rounded">
            Oct 24 - 30
          </span>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex gap-2">
            <button className="p-2 text-on-surface-variant hover:bg-surface-container-low transition-colors duration-200 rounded-full">
              <span className="material-symbols-outlined">search</span>
            </button>
            <button className="p-2 text-on-surface-variant hover:bg-surface-container-low transition-colors duration-200 rounded-full">
              <span className="material-symbols-outlined">account_circle</span>
            </button>
          </div>
          <button className="bg-primary-container text-on-primary px-4 py-2 rounded-lg font-mono-label text-[13px] font-mono hover:opacity-90 transition-opacity duration-200">
            New Entry
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-[1440px] mx-auto pb-12">
        {/* Calendar Canvas (3 columns) */}
        <div className="lg:col-span-3 bg-surface-container-lowest rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.03)] p-6">
          {/* Calendar Header / Controls */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex gap-4">
              <button className="flex items-center justify-center w-8 h-8 rounded border border-outline-variant text-on-surface-variant hover:bg-surface-container-low transition-colors">
                <span className="material-symbols-outlined text-sm">chevron_left</span>
              </button>
              <button className="flex items-center justify-center w-8 h-8 rounded border border-outline-variant text-on-surface-variant hover:bg-surface-container-low transition-colors">
                <span className="material-symbols-outlined text-sm">chevron_right</span>
              </button>
              <button className="px-3 py-1 rounded border border-outline-variant text-on-surface-variant font-mono-label text-[13px] font-mono hover:bg-surface-container-low transition-colors">
                Today
              </button>
            </div>
            <div className="flex gap-2 bg-surface-container p-1 rounded-lg">
              <button className="px-4 py-1.5 rounded-md font-mono-label text-[13px] font-mono text-on-surface-variant hover:text-primary transition-colors">Day</button>
              <button className="px-4 py-1.5 rounded-md font-mono-label text-[13px] font-mono bg-surface-container-lowest text-primary shadow-sm">Week</button>
              <button className="px-4 py-1.5 rounded-md font-mono-label text-[13px] font-mono text-on-surface-variant hover:text-primary transition-colors">Month</button>
            </div>
          </div>

          {/* The Grid */}
          <div className="relative overflow-x-auto pb-4">
            <div className="min-w-[800px]">
              {/* Days Header */}
              <div className="grid grid-cols-8 gap-px bg-outline-variant/20 mb-4 rounded-t-lg overflow-hidden">
                <div className="bg-surface-container-lowest p-2"></div>
                <div className="bg-surface-container-lowest p-4 text-center">
                  <span className="font-label-sm text-[12px] font-semibold text-on-surface-variant uppercase block mb-1">Mon</span>
                  <span className="font-body-md text-[15px] font-medium text-on-surface">24</span>
                </div>
                <div className="bg-surface-container-lowest p-4 text-center">
                  <span className="font-label-sm text-[12px] font-semibold text-on-surface-variant uppercase block mb-1">Tue</span>
                  <span className="font-body-md text-[15px] font-medium text-on-surface">25</span>
                </div>
                <div className="bg-surface-container-lowest p-4 text-center">
                  <span className="font-label-sm text-[12px] font-semibold text-on-surface-variant uppercase block mb-1">Wed</span>
                  <span className="font-body-md text-[15px] font-medium text-primary bg-primary-container/10 w-8 h-8 rounded-full flex items-center justify-center mx-auto">26</span>
                </div>
                <div className="bg-surface-container-lowest p-4 text-center relative shadow-[inset_0_0_15px_rgba(186,26,26,0.15)]">
                  <span className="font-label-sm text-[12px] font-semibold text-error uppercase block mb-1">Thu</span>
                  <span className="font-body-md text-[15px] font-medium text-on-surface">27</span>
                </div>
                <div className="bg-surface-container-lowest p-4 text-center">
                  <span className="font-label-sm text-[12px] font-semibold text-on-surface-variant uppercase block mb-1">Fri</span>
                  <span className="font-body-md text-[15px] font-medium text-on-surface">28</span>
                </div>
                <div className="bg-surface-container-lowest p-4 text-center opacity-60">
                  <span className="font-label-sm text-[12px] font-semibold text-on-surface-variant uppercase block mb-1">Sat</span>
                  <span className="font-body-md text-[15px] font-medium text-on-surface">29</span>
                </div>
                <div className="bg-surface-container-lowest p-4 text-center opacity-60">
                  <span className="font-label-sm text-[12px] font-semibold text-on-surface-variant uppercase block mb-1">Sun</span>
                  <span className="font-body-md text-[15px] font-medium text-on-surface">30</span>
                </div>
              </div>

              {/* Time Grid */}
              <div className="relative grid grid-cols-8 gap-px bg-outline-variant/10 rounded-b-lg border border-outline-variant/20">
                {/* Time Labels Column */}
                <div className="col-span-1 bg-surface-container-lowest relative">
                  {[9, 10, 11, 12, 1, 2, 3].map((hr, i) => (
                    <div key={i} className="h-24 border-b border-outline-variant/10 relative p-2 text-right">
                      <span className="font-label-sm text-[12px] text-on-surface-variant relative -top-3">
                        {hr} {hr > 8 && hr < 12 ? 'AM' : 'PM'}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Monday */}
                <div className="col-span-1 bg-surface-container-lowest relative border-r border-outline-variant/10">
                  <div className="h-24 border-b border-outline-variant/10"></div>
                  <div className="h-24 border-b border-outline-variant/10"></div>
                  {/* Focus Block */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="absolute top-[48px] left-1 right-1 h-[140px] bg-primary/5 border-l-2 border-primary rounded p-2 shadow-sm z-10 cursor-pointer"
                  >
                    <p className="font-mono-label text-[13px] font-mono text-primary">09:30 - 11:00</p>
                    <p className="font-body-md text-[15px] font-medium text-on-surface mt-1 leading-tight">Deep Work: Strategy Draft</p>
                    <div className="mt-2 flex -space-x-2">
                      <div className="w-6 h-6 rounded-full bg-surface-container border border-surface-container-lowest flex items-center justify-center">
                        <span className="material-symbols-outlined text-[12px] text-primary">psychology</span>
                      </div>
                    </div>
                  </motion.div>
                  <div className="h-24 border-b border-outline-variant/10"></div>
                  <div className="h-24 border-b border-outline-variant/10"></div>
                  <div className="h-24 border-b border-outline-variant/10"></div>
                  <div className="h-24 border-b border-outline-variant/10"></div>
                  <div className="h-24 border-b border-outline-variant/10"></div>
                </div>

                {/* Tuesday */}
                <div className="col-span-1 bg-surface-container-lowest relative border-r border-outline-variant/10">
                  <div className="h-24 border-b border-outline-variant/10"></div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="absolute top-[96px] left-1 right-1 h-[90px] bg-[#3d6843]/5 border-l-2 border-[#3d6843] rounded p-2 shadow-sm z-10 cursor-pointer"
                  >
                    <p className="font-mono-label text-[13px] font-mono text-[#3d6843]">10:00 - 11:00</p>
                    <p className="font-body-md text-[15px] font-medium text-on-surface mt-1 leading-tight">Board Prep</p>
                  </motion.div>
                  <div className="h-24 border-b border-outline-variant/10"></div>
                  <div className="h-24 border-b border-outline-variant/10"></div>
                  <div className="absolute top-[288px] left-1 right-1 h-[44px] bg-white border border-gray-200 rounded p-2 shadow-sm z-10 flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-on-surface-variant">restaurant</span>
                    <p className="font-label-sm text-[12px] font-semibold text-on-surface-variant">Lunch</p>
                  </div>
                  <div className="h-24 border-b border-outline-variant/10"></div>
                  <div className="h-24 border-b border-outline-variant/10"></div>
                  <div className="h-24 border-b border-outline-variant/10"></div>
                  <div className="h-24 border-b border-outline-variant/10"></div>
                </div>

                {/* Wednesday (Today) */}
                <div className="col-span-1 bg-surface-bright relative border-r border-outline-variant/10">
                  <div className="absolute top-[210px] left-0 right-0 h-px bg-primary z-20 flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary -ml-1"></div>
                  </div>
                  <div className="h-24 border-b border-outline-variant/10"></div>
                  <div className="h-24 border-b border-outline-variant/10"></div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="absolute top-[120px] left-1 right-1 h-[168px] bg-primary/5 border-l-2 border-primary rounded p-2 shadow-sm z-10 border-t border-r border-b border-primary/20"
                  >
                    <div className="flex justify-between items-start">
                      <p className="font-mono-label text-[13px] font-mono text-primary">10:15 - 12:00</p>
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    </div>
                    <p className="font-body-md text-[15px] font-medium text-on-surface mt-1 leading-tight">Focus: Q4 Architecture</p>
                    <p className="font-label-sm text-[12px] font-semibold text-on-surface-variant mt-2 line-clamp-2">No interruptions. Orbit is handling emails.</p>
                  </motion.div>
                  <div className="h-24 border-b border-outline-variant/10"></div>
                  <div className="h-24 border-b border-outline-variant/10"></div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="absolute top-[384px] left-1 right-1 h-[90px] bg-[#3d6843]/5 border-l-2 border-[#3d6843] rounded p-2 shadow-sm z-10 shadow-[inset_0_0_15px_rgba(200,150,0,0.1)]"
                  >
                    <p className="font-mono-label text-[13px] font-mono text-[#3d6843]">13:00 - 14:00</p>
                    <p className="font-body-md text-[15px] font-medium text-on-surface mt-1 leading-tight">Sync: Design</p>
                  </motion.div>
                  <div className="h-24 border-b border-outline-variant/10"></div>
                  <div className="h-24 border-b border-outline-variant/10"></div>
                  <div className="h-24 border-b border-outline-variant/10"></div>
                </div>

                {/* Thursday */}
                <div className="col-span-1 bg-error-container/10 relative border-r border-outline-variant/10 shadow-[inset_0_0_15px_rgba(186,26,26,0.15)]">
                  <div className="h-24 border-b border-outline-variant/10"></div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="absolute top-[24px] left-1 right-1 h-[168px] bg-error-container/30 border-l-2 border-error rounded p-2 shadow-sm z-10"
                  >
                    <div className="flex items-center gap-1 text-error mb-1">
                      <span className="material-symbols-outlined text-sm">warning</span>
                      <p className="font-label-sm text-[12px] font-semibold uppercase tracking-wider">Deadline</p>
                    </div>
                    <p className="font-mono-label text-[13px] font-mono text-on-surface-variant">09:15 - 11:00</p>
                    <p className="font-body-md text-[15px] font-medium text-on-surface mt-1 leading-tight">Final Investor Pitch Submission</p>
                  </motion.div>
                  <div className="h-24 border-b border-outline-variant/10"></div>
                  <div className="h-24 border-b border-outline-variant/10"></div>
                  <div className="h-24 border-b border-outline-variant/10"></div>
                  <div className="h-24 border-b border-outline-variant/10"></div>
                  <div className="h-24 border-b border-outline-variant/10"></div>
                  <div className="h-24 border-b border-outline-variant/10"></div>
                </div>

                {/* Friday */}
                <div className="col-span-1 bg-surface-container-lowest relative border-r border-outline-variant/10">
                  <div className="h-24 border-b border-outline-variant/10"></div>
                  <div className="h-24 border-b border-outline-variant/10"></div>
                  <div className="h-24 border-b border-outline-variant/10"></div>
                  <div className="h-24 border-b border-outline-variant/10"></div>
                  <div className="h-24 border-b border-outline-variant/10"></div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="absolute top-[480px] left-1 right-1 h-[90px] bg-surface-container-low border border-dashed border-gray-200 rounded p-2 shadow-sm z-10"
                  >
                    <p className="font-mono-label text-[13px] font-mono text-on-surface-variant">14:00 - 15:00</p>
                    <p className="font-body-md text-[15px] font-medium text-on-surface mt-1 leading-tight italic text-on-surface-variant">Weekly Review</p>
                  </motion.div>
                  <div className="h-24 border-b border-outline-variant/10"></div>
                  <div className="h-24 border-b border-outline-variant/10"></div>
                </div>

                {/* Saturday */}
                <div className="col-span-1 bg-surface/50 relative border-r border-outline-variant/10">
                  {[...Array(7)].map((_, i) => <div key={i} className="h-24 border-b border-outline-variant/10"></div>)}
                </div>

                {/* Sunday */}
                <div className="col-span-1 bg-surface/50 relative">
                  {[...Array(7)].map((_, i) => <div key={i} className="h-24 border-b border-outline-variant/10"></div>)}
                </div>
              </div>
            </div>
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
              {/* Atlas */}
              <div className="p-3 bg-surface-container-low rounded-lg border border-outline-variant/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-primary-container text-on-primary flex items-center justify-center">
                      <span className="font-mono-label font-mono text-[10px] font-bold">AT</span>
                    </div>
                    <span className="font-body-md text-[14px] font-medium text-on-surface">Atlas</span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                </div>
                <p className="font-label-sm text-[11px] font-semibold text-on-surface-variant leading-relaxed">
                  Rescheduled 2 low-priority meetings to protect Thursday morning's pitch deadline block.
                </p>
              </div>
              {/* Orbit */}
              <div className="p-3 bg-surface-container-low rounded-lg border border-outline-variant/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-tertiary-container text-[#ffffff] flex items-center justify-center">
                      <span className="font-mono-label font-mono text-[10px] font-bold">OR</span>
                    </div>
                    <span className="font-body-md text-[14px] font-medium text-on-surface">Orbit</span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                </div>
                <p className="font-label-sm text-[11px] font-semibold text-on-surface-variant leading-relaxed">
                  Currently screening inbound comms during Focus Block. 1 urgent ping flagged for review.
                </p>
              </div>
            </div>
            <button className="w-full mt-4 py-2 border border-outline-variant rounded font-mono-label font-mono text-[12px] text-on-surface-variant hover:bg-surface-container transition-colors">
              Review Agent Actions
            </button>
          </motion.div>

          {/* Upcoming Mini-list */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-surface-container-lowest rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.03)] p-6 flex-1"
          >
            <h3 className="font-headline-md font-serif text-[18px] font-medium text-on-surface mb-4">Up Next</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start relative pl-4 border-l-2 border-primary">
                <div className="w-2 h-2 rounded-full bg-primary absolute -left-[5px] top-1.5 ring-4 ring-surface-container-lowest"></div>
                <div>
                  <p className="font-mono-label font-mono text-[11px] text-primary">In 45 mins</p>
                  <p className="font-body-md text-[14px] font-medium text-on-surface leading-tight mt-0.5">Sync: Design Team</p>
                </div>
              </li>
              <li className="flex gap-3 items-start relative pl-4 border-l-2 border-outline-variant/30">
                <div className="w-2 h-2 rounded-full bg-outline-variant absolute -left-[5px] top-1.5 ring-4 ring-surface-container-lowest"></div>
                <div>
                  <p className="font-mono-label font-mono text-[11px] text-on-surface-variant">Tomorrow, 09:15</p>
                  <p className="font-body-md text-[14px] font-medium text-on-surface leading-tight mt-0.5 text-error">Pitch Submission Deadline</p>
                </div>
              </li>
              <li className="flex gap-3 items-start relative pl-4 border-l-2 border-outline-variant/30">
                <div className="w-2 h-2 rounded-full bg-outline-variant absolute -left-[5px] top-1.5 ring-4 ring-surface-container-lowest"></div>
                <div>
                  <p className="font-mono-label font-mono text-[11px] text-on-surface-variant">Friday, 14:00</p>
                  <p className="font-body-md text-[14px] font-medium text-on-surface leading-tight mt-0.5 text-on-surface-variant">Weekly Review</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </>
  );
}
