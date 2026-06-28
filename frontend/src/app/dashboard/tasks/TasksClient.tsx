"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createTaskAction } from "@/app/actions/task-actions";

export default function TasksClient({ initialTasks }: { initialTasks: any[] }) {
  const router = useRouter();
  const [isAdding, setIsAdding] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  async function handleAddTask(e: React.FormEvent) {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    
    await createTaskAction(newTaskTitle);
    setNewTaskTitle("");
    setIsAdding(false);
    router.refresh();
  }

  const highPriority = initialTasks.filter(t => t.priority === "High" && !t.isCompleted);
  const otherTasks = initialTasks.filter(t => t.priority !== "High" && !t.isCompleted);

  return (
    <>
      <header className="flex justify-between items-center h-20 sticky top-0 z-40 bg-background/90 backdrop-blur-md mb-8 border-b border-outline-variant/50">
        <div></div> {/* Spacer */}
        <div className="flex items-center space-x-6">
          <button className="text-muted-foreground hover:text-primary transition-colors duration-200 p-2 cursor-pointer flex items-center justify-center border border-transparent hover:border-outline-variant">
            <span className="material-symbols-outlined">search</span>
          </button>
          <button 
            onClick={() => setIsAdding(true)}
            className="bg-primary text-background font-mono text-[12px] font-bold uppercase tracking-widest py-2 px-6 hover:bg-primary/90 transition-all duration-200 border border-primary"
          >
            New Entry
          </button>
          <button className="text-muted-foreground hover:text-primary transition-colors duration-200 p-2 cursor-pointer flex items-center justify-center border border-transparent hover:border-outline-variant">
            <span className="material-symbols-outlined">account_circle</span>
          </button>
        </div>
      </header>

      <div className="pb-12 max-w-[1440px] mx-auto">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="font-sans font-black text-[48px] uppercase tracking-tighter text-foreground leading-none">Execution Matrix</h2>
            <p className="font-mono text-[12px] text-muted-foreground uppercase tracking-widest mt-4 max-w-2xl">
              High-impact tasks prioritized for unhurried focus.
            </p>
          </div>
          <div className="flex space-x-2 bg-background border border-outline-variant p-1">
            <button className="px-6 py-2 bg-surface text-primary border border-outline-variant font-mono text-[12px] uppercase tracking-widest transition-all duration-200 flex items-center space-x-2">
              <span className="material-symbols-outlined text-[16px]">view_list</span>
              <span>Matrix</span>
            </button>
            <button className="px-6 py-2 text-muted-foreground hover:text-primary hover:bg-surface border border-transparent hover:border-outline-variant font-mono text-[12px] uppercase tracking-widest transition-all duration-200 flex items-center space-x-2">
              <span className="material-symbols-outlined text-[16px]">view_kanban</span>
              <span>Kanban</span>
            </button>
          </div>
        </div>

        {/* Sentinel Suggestion */}
        {highPriority.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-primary/5 p-6 mb-12 border border-primary/30 relative overflow-hidden group transition-all"
          >
            <div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />
            <div className="absolute -right-12 -top-12 opacity-10 pointer-events-none">
              <span className="material-symbols-outlined text-[120px] text-primary">smart_toy</span>
            </div>
            <div className="flex items-start space-x-4 relative z-10">
              <div className="bg-primary text-background p-3 flex-shrink-0 border border-primary">
                <span className="material-symbols-outlined">lightbulb</span>
              </div>
              <div>
                <h4 className="font-mono text-[12px] text-primary uppercase tracking-[0.2em] mb-2 font-bold">Sentinel Suggestion</h4>
                <p className="font-sans text-[18px] text-foreground mb-4 max-w-2xl">
                  Consider deferring <strong className="text-primary font-black uppercase">"{highPriority[0].title}"</strong>. Your calendar shows continuous context switching today.
                </p>
                <div className="flex space-x-4">
                  <button 
                    onClick={async () => {
                      const { acceptSentinelSuggestion } = await import("@/app/actions/sentinel-actions");
                      await acceptSentinelSuggestion(highPriority[0].id, highPriority[0].userId);
                    }}
                    className="text-primary font-mono text-[12px] uppercase tracking-widest font-bold hover:underline"
                  >
                    Accept & Move
                  </button>
                  <button className="text-muted-foreground font-mono text-[12px] uppercase tracking-widest font-bold hover:text-foreground transition-colors">Dismiss</button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Add Task Form inline */}
        {isAdding && (
          <motion.form 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleAddTask} 
            className="mb-12 flex gap-4 bg-surface p-4 border border-outline-variant"
          >
            <input 
              autoFocus
              type="text" 
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
              placeholder="Initialize new objective..." 
              className="flex-1 bg-background border border-outline-variant px-4 py-3 text-foreground font-mono text-[14px] focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/30"
            />
            <button type="submit" className="bg-primary text-background px-8 font-mono text-[12px] uppercase tracking-widest font-bold hover:bg-primary/90 transition-colors">
              Deploy
            </button>
            <button type="button" onClick={() => setIsAdding(false)} className="px-6 text-muted-foreground hover:text-foreground font-mono text-[12px] uppercase tracking-widest transition-colors">
              Abort
            </button>
          </motion.form>
        )}

        {/* Matrix Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* High Impact / High Urgency */}
          <div className="space-y-6">
            <h3 className="font-sans font-black text-[20px] uppercase text-foreground flex items-center space-x-3 pb-4 border-b border-outline-variant tracking-tighter">
              <span className="w-2 h-2 bg-error"></span>
              <span>Critical Leverage (High Priority)</span>
            </h3>
            
            {highPriority.length === 0 && <p className="text-muted-foreground font-mono text-[12px] uppercase tracking-widest py-4">No critical tasks.</p>}
            
            <div className="flex flex-col gap-4">
              {highPriority.map((task, i) => (
                <motion.div
                  key={task.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-surface p-6 transition-all duration-200 border border-outline-variant hover:border-error cursor-pointer group shadow-[inset_0_0_0_transparent] hover:shadow-[inset_4px_0_0_rgba(255,107,107,1)] relative"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-sans font-bold text-[18px] text-foreground group-hover:text-error transition-all duration-200 uppercase tracking-tight">
                      {task.title}
                    </h4>
                    <span className="bg-background text-error border border-error px-3 py-1 text-[10px] font-mono uppercase tracking-widest">
                      Due Today
                    </span>
                  </div>
                  <p className="font-mono text-[12px] text-muted-foreground line-clamp-2">
                    {task.description || "NO DESCRIPTION PROVIDED."}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* High Impact / Low Urgency */}
          <div className="space-y-6">
            <h3 className="font-sans font-black text-[20px] uppercase text-foreground flex items-center space-x-3 pb-4 border-b border-outline-variant tracking-tighter">
              <span className="w-2 h-2 bg-primary"></span>
              <span>Strategic Deep Work (Other)</span>
            </h3>
            
            {otherTasks.length === 0 && <p className="text-muted-foreground font-mono text-[12px] uppercase tracking-widest py-4">No other tasks.</p>}

            <div className="flex flex-col gap-4">
              {otherTasks.map((task, i) => (
                <motion.div
                  key={task.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-surface p-6 transition-all duration-200 border border-outline-variant hover:border-primary cursor-pointer group shadow-[inset_0_0_0_transparent] hover:shadow-[inset_4px_0_0_rgba(169,198,50,1)] relative"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-sans font-bold text-[18px] text-foreground group-hover:text-primary transition-all duration-200 uppercase tracking-tight">
                      {task.title}
                    </h4>
                    <span className="bg-background text-muted-foreground border border-outline-variant px-3 py-1 text-[10px] font-mono uppercase tracking-widest">
                      Next Week
                    </span>
                  </div>
                  <p className="font-mono text-[12px] text-muted-foreground line-clamp-2">
                    {task.description || "NO DESCRIPTION PROVIDED."}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
