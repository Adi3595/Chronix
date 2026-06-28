"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createTaskAction } from "@/app/actions/task-actions";

export default function TasksClient({ initialTasks, userId }: { initialTasks: any[], userId?: string }) {
  const router = useRouter();
  const [isAdding, setIsAdding] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDesc, setNewTaskDesc] = useState("");
  const [newTaskDate, setNewTaskDate] = useState("");

  async function handleAddTask(e: React.FormEvent) {
    e.preventDefault();
    if (!newTaskTitle.trim() || !userId) return;
    
    await createTaskAction(userId, newTaskTitle, newTaskDesc, newTaskDate ? new Date(newTaskDate) : undefined);
    setNewTaskTitle("");
    setNewTaskDesc("");
    setNewTaskDate("");
    setIsAdding(false);
    router.refresh();
  }

  const highPriority = initialTasks.filter(t => t.priority === "High" && !t.isCompleted);
  const otherTasks = initialTasks.filter(t => t.priority !== "High" && !t.isCompleted);

  return (
    <>
      <header className="flex justify-between items-center h-20 sticky top-0 z-40 bg-background/50 backdrop-blur-xl mb-8 border-b border-outline">
        <div></div> {/* Spacer */}
        <div className="flex items-center space-x-6">
          <button className="text-muted-foreground hover:text-primary transition-colors duration-200 p-2 cursor-pointer flex items-center justify-center border border-transparent">
            <span className="material-symbols-outlined">search</span>
          </button>
          <button 
            onClick={() => setIsAdding(true)}
            className="bg-primary text-background font-sans text-[12px] font-bold uppercase tracking-widest py-3 px-8 rounded-full hover:bg-primary/90 transition-all duration-200 shadow-[0_0_20px_rgba(46,125,50,0.4)]"
          >
            New Entry
          </button>
          <button className="text-muted-foreground hover:text-primary transition-colors duration-200 p-2 cursor-pointer flex items-center justify-center border border-transparent">
            <span className="material-symbols-outlined">account_circle</span>
          </button>
        </div>
      </header>

      <div className="pb-12 max-w-[1440px] mx-auto">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="font-serif font-black text-[48px] tracking-tight text-foreground leading-none">Execution Matrix</h2>
            <p className="font-sans text-[15px] text-muted-foreground mt-4 max-w-2xl">
              High-impact tasks prioritized for unhurried focus.
            </p>
          </div>
          <div className="flex space-x-2 bg-surface/40 backdrop-blur-xl border border-outline p-1 rounded-2xl">
            <button className="px-6 py-2.5 bg-background text-primary rounded-xl font-sans font-bold text-[12px] uppercase tracking-widest transition-all duration-200 flex items-center space-x-2 shadow-sm">
              <span className="material-symbols-outlined text-[16px]">view_list</span>
              <span>Matrix</span>
            </button>
            <button className="px-6 py-2.5 text-muted-foreground hover:text-primary hover:bg-background/50 rounded-xl font-sans font-bold text-[12px] uppercase tracking-widest transition-all duration-200 flex items-center space-x-2">
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
            className="bg-primary/5 backdrop-blur-xl p-8 rounded-3xl mb-12 border border-primary/20 relative overflow-hidden group transition-all shadow-[0_20px_50px_rgba(46,125,50,0.1)]"
          >
            <div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />
            <div className="absolute -right-12 -top-12 opacity-10 pointer-events-none">
              <span className="material-symbols-outlined text-[120px] text-primary">smart_toy</span>
            </div>
            <div className="flex items-start space-x-6 relative z-10">
              <div className="bg-primary/20 text-primary p-4 rounded-full flex-shrink-0 border border-primary/30 shadow-[0_0_15px_rgba(46,125,50,0.3)]">
                <span className="material-symbols-outlined">lightbulb</span>
              </div>
              <div>
                <h4 className="font-sans text-[13px] text-primary uppercase tracking-widest mb-2 font-bold">Sentinel Suggestion</h4>
                <p className="font-sans text-[18px] text-foreground mb-6 max-w-2xl">
                  Consider deferring <strong className="text-primary font-black uppercase">"{highPriority[0].title}"</strong>. Your calendar shows continuous context switching today.
                </p>
                <div className="flex space-x-4">
                  <button 
                    onClick={async () => {
                      const { acceptSentinelSuggestion } = await import("@/app/actions/sentinel-actions");
                      await acceptSentinelSuggestion(highPriority[0].id, highPriority[0].userId);
                    }}
                    className="bg-primary text-background px-6 py-2 rounded-full font-sans text-[12px] uppercase tracking-widest font-bold hover:bg-primary/90 shadow-[0_0_15px_rgba(46,125,50,0.4)] transition-all"
                  >
                    Accept & Move
                  </button>
                  <button className="text-muted-foreground font-sans text-[12px] uppercase tracking-widest font-bold hover:text-foreground transition-colors px-6 py-2">Dismiss</button>
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
            className="mb-12 bg-surface/40 backdrop-blur-xl border border-outline rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
          >
            <div className="flex flex-col gap-6 mb-8">
              <input 
                autoFocus
                type="text" 
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
                placeholder="Initialize new objective..." 
                className="w-full bg-transparent border-b border-outline-variant pb-4 text-foreground font-serif text-[32px] focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/30"
              />
              <textarea 
                value={newTaskDesc}
                onChange={(e) => setNewTaskDesc(e.target.value)}
                placeholder="Details & context..." 
                className="w-full bg-transparent border border-outline-variant rounded-xl p-4 text-foreground font-sans text-[15px] focus:outline-none focus:border-primary transition-colors min-h-[100px] placeholder:text-muted-foreground/30"
              />
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-sans text-muted-foreground uppercase tracking-widest font-bold">Deadline (Optional)</label>
                <input 
                  type="datetime-local" 
                  value={newTaskDate}
                  onChange={(e) => setNewTaskDate(e.target.value)}
                  className="w-full md:w-auto bg-transparent border border-outline-variant rounded-xl px-4 py-3 text-foreground font-sans text-[15px] focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button type="submit" className="bg-primary text-background px-10 py-4 rounded-full font-sans text-[13px] uppercase tracking-widest font-bold hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(46,125,50,0.4)]">
                Deploy Task
              </button>
              <button type="button" onClick={() => setIsAdding(false)} className="px-8 py-4 text-muted-foreground hover:text-foreground font-sans text-[13px] font-bold uppercase tracking-widest transition-colors">
                Abort
              </button>
            </div>
          </motion.form>
        )}

        {/* Matrix Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* High Impact / High Urgency */}
          <div className="space-y-6">
            <h3 className="font-sans font-bold text-[20px] text-foreground flex items-center space-x-3 pb-4 border-b border-outline tracking-tight">
              <span className="w-2 h-2 rounded-full bg-error shadow-[0_0_10px_rgba(255,107,107,0.8)] animate-pulse"></span>
              <span>Critical Leverage (High Priority)</span>
            </h3>
            
            {highPriority.length === 0 && <p className="text-muted-foreground font-sans text-[13px] uppercase tracking-widest py-4">No critical tasks.</p>}
            
            <div className="flex flex-col gap-4">
              {highPriority.map((task, i) => (
                <motion.div
                  key={task.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-surface/40 backdrop-blur-xl p-8 rounded-3xl transition-all duration-300 border border-outline hover:border-error/50 cursor-pointer group hover:shadow-[0_10px_40px_rgba(255,107,107,0.15)] relative"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-sans font-bold text-[20px] text-foreground group-hover:text-error transition-all duration-200 tracking-wide">
                      {task.title}
                    </h4>
                    <span className="bg-error/10 text-error border border-error/30 rounded-full px-4 py-1.5 text-[11px] font-sans font-bold uppercase tracking-widest">
                      Due Today
                    </span>
                  </div>
                  <p className="font-sans text-[14px] text-muted-foreground line-clamp-2">
                    {task.description || "NO DESCRIPTION PROVIDED."}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* High Impact / Low Urgency */}
          <div className="space-y-6">
            <h3 className="font-sans font-bold text-[20px] text-foreground flex items-center space-x-3 pb-4 border-b border-outline tracking-tight">
              <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(46,125,50,0.8)]"></span>
              <span>Strategic Deep Work (Other)</span>
            </h3>
            
            {otherTasks.length === 0 && <p className="text-muted-foreground font-sans text-[13px] uppercase tracking-widest py-4">No other tasks.</p>}

            <div className="flex flex-col gap-4">
              {otherTasks.map((task, i) => (
                <motion.div
                  key={task.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-surface/40 backdrop-blur-xl p-8 rounded-3xl transition-all duration-300 border border-outline hover:border-primary/40 cursor-pointer group hover:shadow-[0_10px_40px_rgba(46,125,50,0.15)] relative"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-sans font-bold text-[20px] text-foreground group-hover:text-primary transition-all duration-200 tracking-wide">
                      {task.title}
                    </h4>
                    <span className="bg-surface border border-outline rounded-full px-4 py-1.5 text-muted-foreground text-[11px] font-sans font-bold uppercase tracking-widest">
                      Next Week
                    </span>
                  </div>
                  <p className="font-sans text-[14px] text-muted-foreground line-clamp-2">
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
