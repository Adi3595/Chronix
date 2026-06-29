"use client";

import { motion } from "framer-motion";

export default function FutureSelfClient({ 
  optimizedProbability, 
  currentProbability,
  velocity,
  projectedDays,
  remainingTasks
}: { 
  optimizedProbability: number, 
  currentProbability: number,
  velocity: number,
  projectedDays: number,
  remainingTasks: number
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  const delta = optimizedProbability - currentProbability;

  return (
    <>
      <div className="pb-12 pt-8 max-w-[1440px] mx-auto w-full">
        {/* Page Header */}
        <div className="mb-12 max-w-4xl">
          <h2 className="font-serif font-black text-[48px] text-foreground mb-4">Future Self Projection</h2>
          <p className="font-body-lg text-[18px] text-on-surface-variant max-w-2xl leading-relaxed">
            Analyzing current momentum vectors and completion rates against optimal lifecycle patterns. The simulation indicates a {delta > 20 ? "critical divergence" : "stable alignment"} point.
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
            <motion.div variants={itemVariants} className="relative w-full h-[600px] bg-surface/40 backdrop-blur-xl border border-outline rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col">
              {/* Card Header */}
              <div className="relative z-10 p-8 flex justify-between items-center border-b border-outline bg-surface-variant/30">
                <h3 className="font-sans font-bold text-[24px] text-foreground tracking-wide">Trajectory Analysis</h3>
                <span className="font-sans text-[12px] font-bold text-primary tracking-widest uppercase">Delta: +{delta}%</span>
              </div>
              {/* Simulation Canvas */}
              <div className="relative flex-1 p-8 z-10 flex">
                {/* Origin Point */}
                <div className="absolute left-8 bottom-1/2 translate-y-1/2 flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-foreground border-4 border-surface shadow-[0_0_10px_rgba(255,255,255,0.5)] z-20"></div>
                  <span className="font-sans font-bold text-[13px] text-foreground tracking-widest uppercase">Present</span>
                </div>
                {/* Lines holding the "Paths" */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <defs>
                    <filter id="glowLine" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="1.5" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>
                  {/* Current Trajectory Line (Chaotic) */}
                  <motion.path 
                    d="M 10 50 Q 20 20, 30 60 T 50 40 T 70 80 T 90 75" 
                    fill="none" 
                    stroke="rgba(255,255,255,0.15)" 
                    strokeDasharray="1,1" 
                    strokeWidth="0.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 4, ease: "linear" }}
                  />
                  {/* Optimized Path Line */}
                  <motion.path 
                    d="M 10 50 C 40 50, 50 20, 90 15" 
                    fill="none" 
                    stroke="var(--color-primary)" 
                    strokeWidth="1.5"
                    filter="url(#glowLine)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                  />
                </svg>
                {/* Path Endpoints / Markers */}
                {/* Optimized Point */}
                <div className="absolute right-12 top-[12%] flex flex-col items-end">
                  <div className="bg-surface/60 shadow-[0_10px_30px_rgba(0,0,0,0.3)] p-6 rounded-2xl border border-primary/30 backdrop-blur-md min-w-[220px]">
                    <div className="flex items-center gap-2 mb-2 text-primary">
                      <span className="material-symbols-outlined">trending_up</span>
                      <span className="font-sans text-[12px] font-bold uppercase tracking-widest">Optimized Path</span>
                    </div>
                    <div className="font-serif text-[40px] font-bold text-foreground leading-tight">{optimizedProbability}<span className="text-[24px] text-muted-foreground">%</span></div>
                    <p className="font-sans text-[13px] text-muted-foreground mt-1">Success Probability</p>
                  </div>
                  <div className="w-3 h-3 rounded-full bg-primary mt-3 mr-8 shadow-[0_0_15px_rgba(46,125,50,0.8)]"></div>
                </div>
                {/* Current Trajectory Point */}
                <div className="absolute right-12 bottom-[20%] flex flex-col items-end">
                  <div className="bg-surface/40 shadow-[0_10px_30px_rgba(0,0,0,0.3)] p-6 rounded-2xl border border-outline backdrop-blur-md min-w-[220px] opacity-80">
                    <div className="flex items-center gap-2 mb-2 text-muted-foreground">
                      <span className="material-symbols-outlined text-[18px]">trending_flat</span>
                      <span className="font-sans text-[12px] font-bold uppercase tracking-widest">Current Trajectory</span>
                    </div>
                    <div className="font-serif text-[40px] font-bold text-foreground leading-tight">{currentProbability}<span className="text-[24px] text-muted-foreground">%</span></div>
                    <p className="font-sans text-[13px] text-muted-foreground mt-1">Task Completion Rate</p>
                  </div>
                  <div className="w-3 h-3 rounded-full bg-muted-foreground mt-3 mr-8"></div>
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
            <motion.div variants={itemVariants} className="bg-surface/40 backdrop-blur-xl border border-outline rounded-3xl p-8 flex-1">
              <h3 className="font-sans font-bold text-[20px] text-foreground mb-8">Intelligence Synthesis</h3>
              <div className="relative border-l border-outline ml-4 space-y-10 py-2">
                <div className="relative pl-8">
                  <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary text-primary shadow-[0_0_10px_rgba(46,125,50,0.4)]">
                    <span className="material-symbols-outlined text-[16px]">speed</span>
                  </div>
                  <h4 className="font-sans font-bold text-[13px] uppercase tracking-widest text-foreground mb-1">True Velocity</h4>
                  <p className="font-sans text-[14px] text-muted-foreground"><span className="text-primary font-bold">{velocity.toFixed(2)}</span> tasks completed per day.</p>
                </div>
                <div className="relative pl-8">
                  <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-surface flex items-center justify-center border border-outline text-muted-foreground">
                    <span className="material-symbols-outlined text-[16px]">task_alt</span>
                  </div>
                  <h4 className="font-sans font-bold text-[13px] uppercase tracking-widest text-foreground mb-1">Remaining Workload</h4>
                  <p className="font-sans text-[14px] text-muted-foreground"><span className="text-foreground font-bold">{remainingTasks}</span> tasks left across all active goals.</p>
                </div>
                <div className="relative pl-8">
                  <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-surface flex items-center justify-center border border-outline text-muted-foreground">
                    <span className="material-symbols-outlined text-[16px]">calendar_month</span>
                  </div>
                  <h4 className="font-sans font-bold text-[13px] uppercase tracking-widest text-foreground mb-1">Projected Completion</h4>
                  <p className="font-sans text-[14px] text-muted-foreground">Based on your velocity, it will take <span className="text-foreground font-bold">{projectedDays}</span> days to finish everything.</p>
                </div>
              </div>
            </motion.div>

            {/* Action Card */}
            <motion.div variants={itemVariants} className="bg-primary/5 backdrop-blur-xl border border-primary/20 rounded-3xl p-8 flex flex-col justify-center items-center text-center">
              <span className="material-symbols-outlined text-primary mb-3 text-[32px]">tune</span>
              <h4 className="font-sans font-bold text-[13px] uppercase tracking-widest text-primary mb-2">Increase Probability</h4>
              <p className="font-sans text-[14px] text-muted-foreground">Complete pending tasks in the dashboard to raise your Current Trajectory score.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
