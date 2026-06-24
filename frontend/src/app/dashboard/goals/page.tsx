"use client";

import { motion } from "framer-motion";

export default function GoalsPage() {
  return (
    <>
      <header className="flex justify-between items-center h-20 sticky top-0 z-40 bg-surface/80 backdrop-blur-md mb-8">
        <div className="flex items-center gap-4">
          <h2 className="font-display-lg-mobile md:font-display-lg text-[32px] md:text-[48px] font-serif text-on-surface hidden md:block">
            Milestone View
          </h2>
          <h2 className="font-headline-md font-serif text-[24px] text-on-surface md:hidden">
            Goals
          </h2>
        </div>
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex relative">
            <span
              className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]"
            >
              search
            </span>
            <input
              className="pl-10 pr-4 py-2 rounded-full bg-surface-container-low border-transparent focus:bg-surface-container-lowest focus:border-primary focus:ring-0 font-body-md text-[15px] text-on-surface w-64 transition-all duration-200 ease-out placeholder:text-on-surface-variant/60"
              placeholder="Search milestones..."
              type="text"
            />
          </div>
          <button className="md:hidden text-on-surface-variant hover:text-primary transition-colors p-2 rounded-full hover:bg-surface-container-low">
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 pb-24 md:pb-10">
        {/* Left Column: Goal Cards */}
        <div className="xl:col-span-8 flex flex-col gap-6">
          {/* Filters/Controls */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex space-x-6 border-b border-surface-variant/60 pb-2 w-full max-w-md">
              <button className="font-mono-label text-[13px] font-mono text-primary border-b-2 border-primary pb-2 -mb-[9px] transition-colors">
                Active Goals
              </button>
              <button className="font-mono-label text-[13px] font-mono text-on-surface-variant hover:text-on-surface transition-colors pb-2 -mb-[9px]">
                Archived
              </button>
              <button className="font-mono-label text-[13px] font-mono text-on-surface-variant hover:text-on-surface transition-colors pb-2 -mb-[9px]">
                Templates
              </button>
            </div>
          </div>

          {/* Goal Card 1: Technical */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-surface-container-lowest rounded-xl p-6 md:p-8 shadow-[0px_4px_20px_rgba(0,0,0,0.03)] relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-110"></div>
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="font-label-sm text-[12px] font-semibold text-primary uppercase tracking-widest mb-2 block">
                  Technical Mastery
                </span>
                <h3 className="font-headline-md font-serif text-[24px] text-on-surface font-semibold mb-1">
                  Master DSA & System Design
                </h3>
                <p className="font-body-md text-[15px] text-on-surface-variant max-w-lg">
                  Complete 300+ LeetCode patterns and build a distributed key-value store. Prepare for L6 technical screens.
                </p>
              </div>
              <div className="bg-surface-container-low px-3 py-1 rounded-full flex items-center space-x-1">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <span className="font-mono-label font-mono text-[13px] text-on-surface">On Track</span>
              </div>
            </div>

            {/* Timeline */}
            <div className="mt-8 mb-6 relative">
              <div className="h-2 w-full bg-surface-variant rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full relative" style={{ width: "65%" }}></div>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 left-[30%] w-4 h-4 bg-surface-container-lowest border-2 border-primary rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 left-[65%] w-4 h-4 bg-surface-container-lowest border-2 border-primary rounded-full shadow-sm z-10"></div>
              <div className="absolute top-1/2 -translate-y-1/2 left-[85%] w-3 h-3 bg-surface-container-lowest border-2 border-outline-variant rounded-full"></div>
              <div className="flex justify-between mt-3">
                <span className="font-label-sm text-[12px] font-semibold text-on-surface-variant">Q1 Start</span>
                <span className="font-label-sm text-[12px] font-semibold text-primary font-medium" style={{ marginLeft: "-5%" }}>
                  Predicted Completion: Nov 15
                </span>
                <span className="font-label-sm text-[12px] font-semibold text-on-surface-variant">Q4 Target</span>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-surface-variant/30">
              <div>
                <p className="font-label-sm text-[12px] text-on-surface-variant mb-1">Current Momentum</p>
                <div className="flex items-baseline space-x-2">
                  <span className="font-headline-md font-serif text-[24px] text-on-surface">8.4</span>
                  <span className="font-mono-label font-mono text-[13px] text-primary flex items-center">
                    <span className="material-symbols-outlined text-[14px]">trending_up</span>+1.2
                  </span>
                </div>
              </div>
              <div>
                <p className="font-label-sm text-[12px] text-on-surface-variant mb-1">Consistency (30d)</p>
                <p className="font-headline-md font-serif text-[24px] text-on-surface">92%</p>
              </div>
              <div className="flex flex-col justify-end">
                <svg className="w-full h-10" preserveAspectRatio="none" viewBox="0 0 100 30">
                  <path className="text-primary" d="M0,25 C10,25 15,15 25,10 C35,5 40,20 50,15 C60,10 65,5 75,10 C85,15 90,5 100,2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  <path className="text-primary/10" d="M0,25 C10,25 15,15 25,10 C35,5 40,20 50,15 C60,10 65,5 75,10 C85,15 90,5 100,2 L100,30 L0,30 Z" fill="currentColor"></path>
                </svg>
              </div>
            </div>
          </motion.article>

          {/* Goal Card 2: Entrepreneurial */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-surface-container-lowest rounded-xl p-6 md:p-8 shadow-[0px_4px_20px_rgba(0,0,0,0.03)] relative overflow-hidden group"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="font-label-sm text-[12px] font-semibold text-[#b14b6f] uppercase tracking-widest mb-2 block">
                  Venture Creation
                </span>
                <h3 className="font-headline-md font-serif text-[24px] text-on-surface font-semibold mb-1">
                  Launch Alpha Product
                </h3>
                <p className="font-body-md text-[15px] text-on-surface-variant max-w-lg">
                  Secure 10 pilot B2B design partners. Deploy initial microservices architecture to AWS.
                </p>
              </div>
              <div className="bg-surface-container-low px-3 py-1 rounded-full flex items-center space-x-1">
                <div className="w-2 h-2 rounded-full bg-outline-variant"></div>
                <span className="font-mono-label font-mono text-[13px] text-on-surface-variant">At Risk</span>
              </div>
            </div>

            {/* Timeline */}
            <div className="mt-8 mb-6 relative">
              <div className="h-2 w-full bg-surface-variant rounded-full overflow-hidden">
                <div className="h-full bg-[#b14b6f] rounded-full relative" style={{ width: "35%" }}></div>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 left-[15%] w-4 h-4 bg-surface-container-lowest border-2 border-[#b14b6f] rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-[#b14b6f] rounded-full"></div>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 left-[35%] w-4 h-4 bg-surface-container-lowest border-2 border-[#b14b6f] rounded-full shadow-sm z-10"></div>
              <div className="absolute top-1/2 -translate-y-1/2 left-[50%] w-0.5 h-6 bg-error-container -mt-3 z-0 opacity-50"></div>
              <div className="flex justify-between mt-3">
                <span className="font-label-sm text-[12px] font-semibold text-on-surface-variant">Ideation</span>
                <span className="font-label-sm text-[12px] font-semibold text-[#b14b6f] font-medium">Lagging by 2 weeks</span>
                <span className="font-label-sm text-[12px] font-semibold text-on-surface-variant">MVP Launch</span>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-surface-variant/30">
              <div>
                <p className="font-label-sm text-[12px] text-on-surface-variant mb-1">Current Momentum</p>
                <div className="flex items-baseline space-x-2">
                  <span className="font-headline-md font-serif text-[24px] text-on-surface">3.2</span>
                  <span className="font-mono-label font-mono text-[13px] text-error flex items-center">
                    <span className="material-symbols-outlined text-[14px]">trending_down</span>-0.5
                  </span>
                </div>
              </div>
              <div>
                <p className="font-label-sm text-[12px] text-on-surface-variant mb-1">Consistency (30d)</p>
                <p className="font-headline-md font-serif text-[24px] text-on-surface">45%</p>
              </div>
              <div className="flex flex-col justify-end">
                <svg className="w-full h-10 opacity-60" preserveAspectRatio="none" viewBox="0 0 100 30">
                  <path className="text-[#b14b6f]" d="M0,10 C10,12 15,15 25,20 C35,25 40,22 50,25 C60,28 65,20 75,22 C85,24 90,28 100,28" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </div>
            </div>
          </motion.article>
        </div>

        {/* Right Column: Future Projection (AI Panel) */}
        <aside className="xl:col-span-4 flex flex-col gap-6">
          <div className="bg-white/90 backdrop-blur-md border border-gray-200/50 rounded-xl p-6 relative overflow-hidden flex-1 min-h-[400px] flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-surface-bright/40 via-transparent to-primary/5 -z-10"></div>
            <div className="flex items-center space-x-2 mb-6">
              <span className="material-symbols-outlined text-primary">auto_awesome</span>
              <h3 className="font-headline-md font-serif text-[24px] text-on-surface font-medium">Future Projection</h3>
            </div>
            <p className="font-body-md text-[15px] text-on-surface-variant mb-8">
              Based on your behavioral data and current momentum across all active milestones, Chronix AI has modeled your probable trajectories for Q4.
            </p>
            <div className="space-y-4 flex-1">
              <div className="bg-surface-container-lowest/50 rounded-lg p-4 border border-surface-variant/40 hover:bg-surface-container-lowest transition-colors duration-200">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-mono-label font-mono text-[13px] text-on-surface font-medium">DSA Mastery</span>
                  <span className="font-label-sm text-[12px] text-primary font-bold bg-primary-container/20 px-2 py-0.5 rounded text-primary-container">
                    94% Probability
                  </span>
                </div>
                <p className="font-body-md text-[14px] text-on-surface-variant">
                  Your sustained 92% consistency rate suggests completion 12 days ahead of target. Maintain current review cadence.
                </p>
              </div>
              <div className="bg-surface-container-lowest/50 rounded-lg p-4 border border-surface-variant/40 hover:bg-surface-container-lowest transition-colors duration-200">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-mono-label font-mono text-[13px] text-on-surface font-medium">Alpha Launch</span>
                  <span className="font-label-sm text-[12px] text-[#b14b6f] font-bold bg-[#b14b6f]/10 px-2 py-0.5 rounded">
                    41% Probability
                  </span>
                </div>
                <p className="font-body-md text-[14px] text-on-surface-variant">
                  Declining momentum detected in outbound sales activities. Recommend reallocating 4 hours/week from 'Deep Work' to 'Networking'.
                </p>
                <button className="mt-3 text-primary font-mono-label text-[13px] font-mono flex items-center space-x-1 hover:underline">
                  <span>View Intervention Plan</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </button>
              </div>
            </div>
            <div className="mt-8 h-32 rounded-lg border border-surface-variant/50 relative overflow-hidden flex items-end px-4 pb-2" style={{ background: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.02) 10px, rgba(0,0,0,0.02) 20px)" }}>
              <div className="w-1/4 h-[80%] bg-surface-variant/60 rounded-t-sm mx-1"></div>
              <div className="w-1/4 h-[60%] bg-surface-variant/60 rounded-t-sm mx-1"></div>
              <div className="w-1/4 h-[95%] bg-primary/40 rounded-t-sm mx-1 border-t-2 border-primary relative group">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface font-label-sm text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Projected Peak</div>
              </div>
              <div className="w-1/4 h-[40%] bg-surface-variant/60 rounded-t-sm mx-1"></div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
