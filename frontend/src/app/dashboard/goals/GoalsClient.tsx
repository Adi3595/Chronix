"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { planGoal } from "@/app/actions/ai-agents";
import { useRouter } from "next/navigation";

export default function GoalsClient({ initialGoals, userId }: { initialGoals: any[], userId?: string }) {
  const router = useRouter();
  const [isAdding, setIsAdding] = useState(false);
  const [newGoalTitle, setNewGoalTitle] = useState("");
  const [targetDays, setTargetDays] = useState(30);
  const [isPlanning, setIsPlanning] = useState(false);

  async function handleAddGoal(e: React.FormEvent) {
    e.preventDefault();
    if (!newGoalTitle.trim() || isPlanning || !userId) return;
    
    setIsPlanning(true);
    // Atlas will automatically create 3 subtasks
    await planGoal(userId, newGoalTitle, targetDays);
    
    setNewGoalTitle("");
    setIsAdding(false);
    setIsPlanning(false);
    router.refresh();
  }

  return (
    <>
      <header className="flex justify-between items-center h-20 sticky top-0 z-40 bg-background/50 backdrop-blur-xl mb-8 border-b border-outline">
        <div className="flex items-center gap-4">
          <h2 className="font-serif font-black text-[32px] md:text-[48px] text-foreground hidden md:block tracking-tight">
            Milestone View
          </h2>
          <h2 className="font-sans font-bold text-[24px] text-foreground md:hidden">
            Goals
          </h2>
        </div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setIsAdding(true)}
            className="bg-primary text-background font-sans font-bold text-[13px] uppercase tracking-widest py-3 px-6 rounded-full hover:bg-primary/90 transition-all duration-200 shadow-[0_0_20px_rgba(46,125,50,0.4)]"
          >
            New Goal (Atlas AI)
          </button>
        </div>
      </header>

      {isAdding && (
        <motion.form 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleAddGoal} 
          className="mb-8 flex flex-col gap-4 max-w-[1440px] mx-auto bg-surface/40 backdrop-blur-xl border border-outline p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
        >
          <input 
            autoFocus
            type="text" 
            value={newGoalTitle}
            onChange={(e) => setNewGoalTitle(e.target.value)}
            disabled={isPlanning}
            placeholder="Describe your ambitious new goal... Atlas will handle the rest." 
            className="w-full bg-transparent border-b border-outline-variant p-4 text-foreground focus:border-primary focus:outline-none font-serif text-[24px] mb-2 placeholder:text-muted-foreground/30"
          />
          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-3 text-muted-foreground font-sans text-[13px] uppercase tracking-widest font-bold">
              <span>Target Days:</span>
              <input 
                type="number" 
                value={targetDays}
                onChange={(e) => setTargetDays(Number(e.target.value))}
                min={1}
                disabled={isPlanning}
                className="w-20 bg-background border border-outline-variant rounded-xl px-3 py-2 text-foreground focus:border-primary focus:outline-none"
              />
            </div>
            <div className="flex-1"></div>
            <button disabled={isPlanning} type="submit" className="bg-primary text-background px-8 py-3 rounded-full font-sans font-bold text-[13px] uppercase tracking-widest disabled:opacity-50 flex items-center gap-2 shadow-[0_0_20px_rgba(46,125,50,0.4)]">
              {isPlanning && <span className="w-4 h-4 border-2 border-background border-t-transparent rounded-full animate-spin"></span>}
              {isPlanning ? "Planning..." : "Generate Plan"}
            </button>
            <button disabled={isPlanning} type="button" onClick={() => setIsAdding(false)} className="px-6 py-3 text-muted-foreground hover:text-foreground font-sans text-[13px] font-bold uppercase tracking-widest transition-colors disabled:opacity-50">
              Cancel
            </button>
          </div>
        </motion.form>
      )}

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 pb-24 md:pb-10 max-w-[1440px] mx-auto">
        {/* Left Column: Goal Cards */}
        <div className="xl:col-span-8 flex flex-col gap-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex space-x-6 border-b border-surface-variant/60 pb-2 w-full max-w-md">
              <button className="font-mono-label text-[13px] font-mono text-primary border-b-2 border-primary pb-2 -mb-[9px] transition-colors">
                Active Goals ({initialGoals.length})
              </button>
            </div>
          </div>

          {initialGoals.length === 0 && (
            <p className="text-on-surface-variant">No active goals. Let Atlas plan one for you!</p>
          )}

          {initialGoals.map((goal, i) => {
            const totalTasks = goal.tasks.length;
            const completedTasks = goal.tasks.filter((t: any) => t.isCompleted).length;
            const progress = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

            return (
              <motion.article
                key={goal.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-surface/40 backdrop-blur-xl border border-outline rounded-3xl p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.2)] relative overflow-hidden group hover:border-primary/40 transition-colors"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="font-sans text-[11px] font-bold text-primary uppercase tracking-widest mb-2 block">
                      Chronix Goal
                    </span>
                    <h3 className="font-sans font-bold text-[24px] text-foreground mb-1">
                      {goal.title}
                    </h3>
                    <p className="font-sans text-[15px] text-muted-foreground max-w-lg mt-2">
                      {totalTasks} total sub-tasks automatically generated by Atlas AI.
                    </p>
                    {goal.description && (
                      <div className="mt-4 bg-primary/10 border border-primary/20 rounded-xl p-4 text-primary font-sans text-[13px] leading-relaxed relative">
                        <span className="material-symbols-outlined absolute -top-3 -left-3 text-primary bg-background rounded-full border border-primary/30 p-1 text-[16px]">smart_toy</span>
                        <strong className="block mb-1 uppercase tracking-widest text-[10px]">Atlas Understanding:</strong>
                        {goal.description}
                      </div>
                    )}
                  </div>
                  <div className="bg-surface border border-outline px-4 py-2 rounded-full flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${progress === 100 ? 'bg-primary shadow-[0_0_10px_rgba(46,125,50,0.8)]' : 'bg-muted-foreground'} animate-pulse`}></div>
                    <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-foreground">
                      {progress === 100 ? 'Completed' : 'In Progress'}
                    </span>
                  </div>
                </div>

                {/* Timeline */}
                <div className="mt-8 mb-4 relative">
                  <div className="h-1.5 w-full bg-surface rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(46,125,50,0.8)]" style={{ width: `${progress}%` }}></div>
                  </div>
                  <div className="flex justify-between mt-4">
                    <span className="font-sans text-[11px] uppercase tracking-widest font-bold text-muted-foreground">Start</span>
                    <span className="font-sans text-[11px] uppercase tracking-widest font-bold text-primary" style={{ marginLeft: "-5%" }}>
                      {progress}% Complete ({completedTasks}/{totalTasks} Tasks)
                    </span>
                    <span className="font-sans text-[11px] uppercase tracking-widest font-bold text-muted-foreground">Target</span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Right Column: Future Projection (AI Panel) */}
        <aside className="xl:col-span-4 flex flex-col gap-6">
          <div className="bg-primary/5 backdrop-blur-xl border border-primary/20 rounded-3xl p-8 relative overflow-hidden flex-1 min-h-[400px] flex flex-col shadow-[0_20px_50px_rgba(46,125,50,0.1)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(46,125,50,0.1)_0%,transparent_50%)] -z-10"></div>
            <div className="flex items-center space-x-3 mb-6">
              <span className="material-symbols-outlined text-primary text-[28px]">auto_awesome</span>
              <h3 className="font-sans font-bold text-[24px] text-primary">Atlas AI Planner</h3>
            </div>
            <p className="font-sans text-[15px] text-muted-foreground leading-relaxed mb-8">
              Click "New Goal" and simply describe what you want to achieve. Atlas will automatically parse your goal, break it down into an optimal 3-step action plan, and inject those tasks directly into your Execution Matrix.
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}
