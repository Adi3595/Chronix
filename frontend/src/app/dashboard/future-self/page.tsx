"use client";

import { motion } from "framer-motion";

export default function FutureSelfPage() {
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
        {/* Page Header */}
        <div className="mb-12 max-w-4xl">
          <h2 className="font-display-lg font-serif text-[48px] text-on-surface mb-4">Future Self Projection</h2>
          <p className="font-body-lg text-[18px] text-on-surface-variant max-w-2xl leading-relaxed">
            Analyzing current momentum vectors against optimal lifecycle patterns. The simulation indicates a critical divergence point approaching in Q3.
          </p>
        </div>

        {/* Dashboard Grid (Swiss Asymmetrical) */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          {/* Main Visualization Panel (Spans 8 cols) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="xl:col-span-8 flex flex-col gap-6"
          >
            {/* Generative Texture Card holding the paths */}
            <motion.div variants={itemVariants} className="relative w-full h-[600px] bg-surface-container-lowest rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col">
              {/* Generative Background Image via Placeholder */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-40 z-0"
                style={{
                  backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDH6V80khJlEcKDlz9WYosWTfId3ZB9-IuMTz0vqqYUPMG8aPjQXcsAv2y-thLcaqk_5VK-uO0AQL68wPu14Wc4WhQKqG_CzGfIXbxRuTxle8igYO_5eAvrstkpef_xky_JfAD1lvCAKWUTX-P19f8VXuWL3HTH6TZK9dBVazEDuXyuX71rAoeKLbpgBgRQgLMAX3sMUcp-YF7l1BEA83JgYe_ESvq3nreeyvXKKBHRdctQibAuzyaTcAhveW_ysl86if4QxMq-in4')"
                }}
              ></div>
              {/* Card Header */}
              <div className="relative z-10 p-8 flex justify-between items-center border-b border-surface-variant/50 bg-white/50 backdrop-blur-sm">
                <h3 className="font-headline-md font-serif text-[24px] text-on-surface">Trajectory Analysis</h3>
                <span className="font-mono-label font-mono text-[13px] text-on-surface-variant tracking-widest uppercase">Delta: +24%</span>
              </div>
              {/* Simulation Canvas */}
              <div className="relative flex-1 p-8 z-10 flex">
                {/* Origin Point */}
                <div className="absolute left-8 bottom-1/2 translate-y-1/2 flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-on-surface border-4 border-surface-container-lowest shadow-sm z-20"></div>
                  <span className="font-mono-label font-mono text-[13px] text-on-surface">Present</span>
                </div>
                {/* Lines holding the "Paths" (Simulated with SVG for precise curve in standard layout) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
                  {/* Current Trajectory Line (Muted, straightish) */}
                  <path d="M 10 50 C 40 50, 60 70, 90 75" fill="none" stroke="#bfcaba" strokeDasharray="2,2" strokeWidth="0.5"></path>
                  {/* Optimized Path Line (Vibrant, curving up) */}
                  <path d="M 10 50 C 40 50, 50 20, 90 15" fill="none" stroke="#0d631b" strokeWidth="1.5"></path>
                </svg>
                {/* Path Endpoints / Markers */}
                {/* Optimized Point */}
                <div className="absolute right-12 top-[12%] flex flex-col items-end">
                  <div className="bg-surface-container-lowest shadow-[0px_4px_20px_rgba(0,0,0,0.03)] p-4 rounded-lg border border-primary/10 backdrop-blur-md min-w-[200px]">
                    <div className="flex items-center gap-2 mb-2 text-primary">
                      <span className="material-symbols-outlined">trending_up</span>
                      <span className="font-label-sm text-[12px] uppercase tracking-wider font-semibold">Optimized Path</span>
                    </div>
                    <div className="font-display-lg-mobile font-serif text-[32px] text-on-surface leading-tight">92<span className="font-serif text-[24px] text-on-surface-variant">%</span></div>
                    <p className="font-body-md text-[15px] text-on-surface-variant mt-1 text-sm">Success Probability</p>
                  </div>
                  <div className="w-3 h-3 rounded-full bg-primary mt-2 mr-6 shadow-[0_0_10px_rgba(13,99,27,0.5)]"></div>
                </div>
                {/* Current Trajectory Point */}
                <div className="absolute right-12 bottom-[20%] flex flex-col items-end">
                  <div className="bg-surface-container-lowest shadow-[0px_4px_20px_rgba(0,0,0,0.03)] p-4 rounded-lg border border-outline-variant/30 backdrop-blur-md min-w-[200px] opacity-80">
                    <div className="flex items-center gap-2 mb-2 text-on-surface-variant">
                      <span className="material-symbols-outlined text-[18px]">trending_flat</span>
                      <span className="font-label-sm text-[12px] uppercase tracking-wider font-semibold">Current Trajectory</span>
                    </div>
                    <div className="font-display-lg-mobile font-serif text-[32px] text-on-surface leading-tight">68<span className="font-serif text-[24px] text-outline-variant">%</span></div>
                    <p className="font-body-md text-[15px] text-outline mt-1 text-sm">Success Probability</p>
                  </div>
                  <div className="w-3 h-3 rounded-full bg-outline-variant mt-2 mr-6"></div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Side Panel (Spans 4 cols) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="xl:col-span-4 flex flex-col gap-6"
          >
            {/* Life Stages Card */}
            <motion.div variants={itemVariants} className="bg-surface-container-lowest rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.03)] p-8 flex-1">
              <h3 className="font-headline-md font-serif text-[24px] text-on-surface mb-8">Life Stage Milestones</h3>
              <div className="relative border-l border-surface-variant ml-4 space-y-10 py-2">
                {/* Stage 1 */}
                <div className="relative pl-8">
                  <div className="absolute -left-[17px] top-0.5 w-8 h-8 rounded-full bg-primary-container flex items-center justify-center border-4 border-surface-container-lowest text-on-primary-container shadow-sm">
                    <span className="material-symbols-outlined text-[16px]">school</span>
                  </div>
                  <h4 className="font-mono-label font-mono text-[13px] text-on-surface mb-1">Q3 2024 · Skill Acquisition</h4>
                  <p className="font-body-md text-[14px] text-on-surface-variant">Complete advanced certification protocols to align with optimal trajectory.</p>
                </div>
                {/* Stage 2 */}
                <div className="relative pl-8">
                  <div className="absolute -left-[17px] top-0.5 w-8 h-8 rounded-full bg-surface-container flex items-center justify-center border-4 border-surface-container-lowest text-on-surface-variant">
                    <span className="material-symbols-outlined text-[16px]">work</span>
                  </div>
                  <h4 className="font-mono-label font-mono text-[13px] text-on-surface mb-1">Q1 2025 · Career Pivot</h4>
                  <p className="font-body-md text-[14px] text-on-surface-variant">Transition to senior leadership tier; requires 15% increase in current task velocity.</p>
                </div>
                {/* Stage 3 */}
                <div className="relative pl-8">
                  <div className="absolute -left-[17px] top-0.5 w-8 h-8 rounded-full bg-surface-container flex items-center justify-center border-4 border-surface-container-lowest text-on-surface-variant">
                    <span className="material-symbols-outlined text-[16px]">account_balance</span>
                  </div>
                  <h4 className="font-mono-label font-mono text-[13px] text-outline mb-1">2027 · Resource Consolidation</h4>
                  <p className="font-body-md text-[14px] text-outline-variant">Projected milestone based on compound optimization. Subject to variance.</p>
                </div>
              </div>
            </motion.div>

            {/* Action Card */}
            <motion.div variants={itemVariants} className="bg-surface-container-lowest rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.03)] p-6 flex flex-col justify-center items-center text-center border border-primary/10">
              <span className="material-symbols-outlined text-primary mb-3 text-[32px]">tune</span>
              <h4 className="font-mono-label font-mono text-[13px] text-on-surface mb-2">Adjust Variables</h4>
              <p className="font-body-md text-[14px] text-on-surface-variant mb-4">Recalibrate input effort or time horizons to update projections.</p>
              <button className="w-full py-2.5 rounded border border-outline-variant text-on-surface font-label-sm text-[12px] font-semibold hover:bg-surface-container-low transition-colors">
                Open Console
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
