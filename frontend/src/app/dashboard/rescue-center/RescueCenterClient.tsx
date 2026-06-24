"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { activateRescueMode } from "@/app/actions/rescue-actions";
import { useRouter } from "next/navigation";

export default function RescueCenterClient() {
  const [isRescuing, setIsRescuing] = useState(false);
  const router = useRouter();

  const handleRescue = async () => {
    setIsRescuing(true);
    await activateRescueMode("demo-user-123");
    setIsRescuing(false);
    router.refresh();
  };

  return (
    <>
      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row gap-6 pb-12">
        {/* Left Column: Command & Timeline */}
        <div className="flex-1 flex flex-col gap-8">
          {/* Header */}
          <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-outline-variant/50">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#FEE2E2] text-[#DC2626] px-3 py-1 rounded-full mb-4">
                <span className="material-symbols-outlined text-[16px] animate-pulse">error</span>
                <span className="font-label-sm text-[12px] uppercase tracking-widest font-semibold">Rescue Mode Available</span>
              </div>
              <h1 className="font-display-lg font-serif text-[48px] text-on-surface tracking-tight leading-tight">Project Titan Recovery</h1>
              <p className="font-body-lg text-[18px] text-on-surface-variant mt-2 max-w-2xl">Re-aligning critical path constraints to meet impending milestone delivery.</p>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <button 
                disabled={isRescuing}
                onClick={handleRescue}
                className="bg-primary text-white font-mono-label font-mono text-[13px] px-6 py-3 rounded-lg hover:bg-opacity-90 transition-opacity ease-out duration-200 flex items-center gap-2 disabled:opacity-50"
              >
                {isRescuing && <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>}
                <span className="material-symbols-outlined text-[18px]">done_all</span>
                {isRescuing ? "Activating Rescue..." : "Commit Rescue Plan"}
              </button>
            </div>
          </header>

          {/* Status Cards (Bento Mini) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-surface-container-lowest rounded-xl p-6 shadow-[0px_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono-label font-mono text-[13px] text-on-surface-variant uppercase tracking-wider">Success Probability</span>
                <span className="material-symbols-outlined text-outline">trending_up</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-display-lg font-serif text-[36px] font-semibold text-on-surface">84</span>
                <span className="font-headline-md font-serif text-[24px] text-on-surface-variant">%</span>
              </div>
              <div className="w-full bg-surface-variant h-1 mt-4 rounded-full overflow-hidden">
                <div className="bg-primary h-full rounded-full w-[84%]"></div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-surface-container-lowest rounded-xl p-6 shadow-[0px_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono-label font-mono text-[13px] text-on-surface-variant uppercase tracking-wider">Time Saved</span>
                <span className="material-symbols-outlined text-outline">history_toggle_off</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-display-lg font-serif text-[36px] font-semibold text-primary">14.5</span>
                <span className="font-body-lg text-[18px] text-on-surface-variant">hrs</span>
              </div>
              <p className="font-body-md text-[15px] text-outline mt-2">Through task deferral.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-surface-container-lowest rounded-xl p-6 shadow-[0px_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-secondary-container/30 rounded-full blur-xl"></div>
              <div className="flex items-center justify-between mb-4 relative z-10">
                <span className="font-mono-label font-mono text-[13px] text-on-surface-variant uppercase tracking-wider">Focus Mode</span>
                <span className="material-symbols-outlined text-primary">do_not_disturb_on</span>
              </div>
              <div className="relative z-10 mt-auto">
                <p className="font-headline-md font-serif text-[24px] text-on-surface leading-tight">Deep Work Active</p>
                <p className="font-body-md text-[15px] text-outline mt-1">All non-essential notifications silenced.</p>
              </div>
            </motion.div>
          </div>

          {/* Primary Section: The Recovery Roadmap */}
          <section className="bg-surface-container-lowest rounded-xl p-8 shadow-[0px_4px_20px_rgba(0,0,0,0.03)] mt-4">
            <h2 className="font-headline-md font-serif text-[24px] text-on-surface mb-8 pb-4 border-b border-outline-variant/30">The Recovery Roadmap</h2>
            <div className="relative pl-6 border-l-2 border-surface-variant flex flex-col gap-10">
              {/* Timeline Item 1 (Active) */}
              <div className="relative">
                <div className="absolute -left-[35px] top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-white"></div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono-label font-mono text-[13px] text-primary font-bold">CURRENT BLOCK • 09:00 - 11:30</span>
                  <span className="bg-primary/10 text-primary px-2 py-0.5 rounded font-label-sm text-[10px] uppercase tracking-wider">Critical</span>
                </div>
                <h3 className="font-headline-md font-serif text-[20px] text-on-surface mb-2">Finalize API Architecture</h3>
                <p className="font-body-md text-[15px] text-on-surface-variant mb-4">Complete the data mapping and resolve pending merge conflicts on main branch.</p>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Context & Intelligence */}
        <div className="w-full xl:w-96 flex flex-col gap-6 shrink-0">
          {/* Action Panel: Priority Restructure */}
          <section className="bg-surface-container-lowest rounded-xl p-6 shadow-[0px_4px_20px_rgba(0,0,0,0.03)]">
            <div className="flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-outline">dynamic_feed</span>
              <h2 className="font-headline-md font-serif text-[20px] text-on-surface">Priority Restructure</h2>
            </div>
            <p className="font-body-md text-[15px] text-on-surface-variant mb-6">Clicking "Commit Rescue Plan" will automatically push all non-essential Tasks 7 days into the future.</p>
            <div className="flex flex-col gap-4">
              <div className="p-4 border border-outline-variant/40 rounded-lg flex gap-4 opacity-75">
                <div className="mt-1">
                  <span className="material-symbols-outlined text-[#D97706] text-[20px]">schedule</span>
                </div>
                <div>
                  <h4 className="font-mono-label font-mono text-[14px] text-on-surface mb-1 line-through decoration-[#707a6c]">Weekly Sync: Design Team</h4>
                  <p className="font-body-md text-[13px] text-outline">Deferred to next week.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Agent Sidebar: Intelligence Feed */}
          <section className="bg-surface-container-lowest rounded-xl p-6 shadow-[0px_4px_20px_rgba(0,0,0,0.03)] flex-1 flex flex-col">
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-outline-variant/30">
              <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-on-secondary-container text-[18px]">smart_toy</span>
              </div>
              <h2 className="font-headline-md font-serif text-[20px] text-on-surface">Rescue Agent</h2>
            </div>
            <div className="flex flex-col gap-6 flex-1">
              <div className="flex gap-4">
                <div className="w-1 flex flex-col items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mt-1.5"></div>
                </div>
                <div>
                  <h4 className="font-mono-label font-mono text-[13px] text-on-surface mb-1">Awaiting Authorization</h4>
                  <p className="font-body-md text-[14px] text-on-surface-variant leading-relaxed">I am standing by to reschedule your low-priority tasks and clear your calendar for Deep Work.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
