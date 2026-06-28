"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { planGoal } from "@/app/actions/ai-agents";
import { useRouter } from "next/navigation";

export default function GoalsClient({ initialGoals }: { initialGoals: any[] }) {
  const router = useRouter();
  const [isAdding, setIsAdding] = useState(false);
  const [newGoalTitle, setNewGoalTitle] = useState("");
  const [isPlanning, setIsPlanning] = useState(false);

  async function handleAddGoal(e: React.FormEvent) {
    e.preventDefault();
    if (!newGoalTitle.trim() || isPlanning) return;
    
    setIsPlanning(true);
    // Atlas will automatically create 3 subtasks
    await planGoal("demo-user-123", newGoalTitle);
    
    setNewGoalTitle("");
    setIsAdding(false);
    setIsPlanning(false);
    router.refresh();
  }

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
          <button 
            onClick={() => setIsAdding(true)}
            className="bg-primary text-on-primary font-label-sm text-[12px] py-2 px-4 rounded-full hover:opacity-90 transition-all duration-200"
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
          className="mb-8 flex gap-4 max-w-[1440px] mx-auto"
        >
          <input 
            autoFocus
            type="text" 
            value={newGoalTitle}
            onChange={(e) => setNewGoalTitle(e.target.value)}
            disabled={isPlanning}
            placeholder="Describe your ambitious new goal... Atlas will handle the rest." 
            className="flex-1 bg-surface-container-lowest border border-outline-variant p-4 rounded-xl text-on-surface focus:border-primary focus:outline-none font-body-md"
          />
          <button disabled={isPlanning} type="submit" className="bg-primary text-on-primary px-6 rounded-xl font-mono-label disabled:opacity-50 flex items-center gap-2">
            {isPlanning && <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>}
            {isPlanning ? "Planning..." : "Generate"}
          </button>
          <button disabled={isPlanning} type="button" onClick={() => setIsAdding(false)} className="px-6 text-on-surface-variant hover:underline font-mono-label disabled:opacity-50">
            Cancel
          </button>
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
                className="bg-surface-container-lowest rounded-xl p-6 md:p-8 shadow-[0px_4px_20px_rgba(0,0,0,0.03)] relative overflow-hidden group"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="font-label-sm text-[12px] font-semibold text-primary uppercase tracking-widest mb-2 block">
                      Chronix Goal
                    </span>
                    <h3 className="font-headline-md font-serif text-[24px] text-on-surface font-semibold mb-1">
                      {goal.title}
                    </h3>
                    <p className="font-body-md text-[15px] text-on-surface-variant max-w-lg">
                      {totalTasks} total sub-tasks automatically generated by Atlas AI.
                    </p>
                  </div>
                  <div className="bg-surface-container-low px-3 py-1 rounded-full flex items-center space-x-1">
                    <div className={`w-2 h-2 rounded-full ${progress === 100 ? 'bg-primary' : 'bg-outline-variant'} animate-pulse`}></div>
                    <span className="font-mono-label font-mono text-[13px] text-on-surface">
                      {progress === 100 ? 'Completed' : 'In Progress'}
                    </span>
                  </div>
                </div>

                {/* Timeline */}
                <div className="mt-8 mb-6 relative">
                  <div className="h-2 w-full bg-surface-variant rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full transition-all duration-1000" style={{ width: `${progress}%` }}></div>
                  </div>
                  <div className="flex justify-between mt-3">
                    <span className="font-label-sm text-[12px] font-semibold text-on-surface-variant">Start</span>
                    <span className="font-label-sm text-[12px] font-semibold text-primary font-medium" style={{ marginLeft: "-5%" }}>
                      {progress}% Complete ({completedTasks}/{totalTasks} Tasks)
                    </span>
                    <span className="font-label-sm text-[12px] font-semibold text-on-surface-variant">Target</span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Right Column: Future Projection (AI Panel) */}
        <aside className="xl:col-span-4 flex flex-col gap-6">
          <div className="bg-surface/80 backdrop-blur-md border border-outline-variant rounded-xl p-6 relative overflow-hidden flex-1 min-h-[400px] flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent -z-10"></div>
            <div className="flex items-center space-x-2 mb-6">
              <span className="material-symbols-outlined text-primary">auto_awesome</span>
              <h3 className="font-headline-md font-serif text-[24px] text-on-surface font-medium">Atlas AI Planner</h3>
            </div>
            <p className="font-body-md text-[15px] text-on-surface-variant mb-8">
              Click "New Goal" and simply describe what you want to achieve. Atlas will automatically parse your goal, break it down into an optimal 3-step action plan, and inject those tasks directly into your Execution Matrix.
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}
