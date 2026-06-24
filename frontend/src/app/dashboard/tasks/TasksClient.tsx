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
      <header className="flex justify-between items-center h-20 sticky top-0 z-40 bg-surface/80 backdrop-blur-md mb-8">
        <div></div> {/* Spacer */}
        <div className="flex items-center space-x-6">
          <button className="text-on-surface-variant hover:bg-surface-container-low transition-colors duration-200 p-2 rounded-full cursor-pointer flex items-center justify-center">
            <span className="material-symbols-outlined">search</span>
          </button>
          <button 
            onClick={() => setIsAdding(true)}
            className="bg-primary-container text-on-primary-container font-label-sm text-[12px] py-2 px-4 rounded-full hover:opacity-90 transition-all duration-200"
          >
            New Entry
          </button>
          <button className="text-on-surface-variant hover:bg-surface-container-low transition-colors duration-200 p-2 rounded-full cursor-pointer flex items-center justify-center">
            <span className="material-symbols-outlined">account_circle</span>
          </button>
        </div>
      </header>

      <div className="pb-12 max-w-[1440px] mx-auto">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <h2 className="font-display-lg font-serif text-[48px] text-on-surface">Execution Matrix</h2>
            <p className="font-body-md text-[15px] text-on-surface-variant mt-2 max-w-2xl">
              High-impact tasks prioritized for unhurried focus.
            </p>
          </div>
          <div className="flex space-x-2 bg-surface-container-low p-1 rounded-lg">
            <button className="px-4 py-2 rounded-md bg-surface-container-lowest shadow-[0px_4px_20px_rgba(0,0,0,0.03)] font-label-sm text-[12px] text-primary transition-all duration-200 flex items-center space-x-2">
              <span className="material-symbols-outlined text-[18px]">view_list</span>
              <span>Matrix</span>
            </button>
            <button className="px-4 py-2 rounded-md text-on-surface-variant hover:bg-surface-container-highest font-label-sm text-[12px] transition-all duration-200 flex items-center space-x-2">
              <span className="material-symbols-outlined text-[18px]">view_kanban</span>
              <span>Kanban</span>
            </button>
          </div>
        </div>

        {/* Add Task Form inline */}
        {isAdding && (
          <motion.form 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleAddTask} 
            className="mb-8 flex gap-4"
          >
            <input 
              autoFocus
              type="text" 
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
              placeholder="What needs to be done?" 
              className="flex-1 bg-surface-container-lowest border border-outline-variant p-4 rounded-xl text-on-surface focus:border-primary focus:outline-none font-body-md"
            />
            <button type="submit" className="bg-primary text-on-primary px-6 rounded-xl font-mono-label">
              Add
            </button>
            <button type="button" onClick={() => setIsAdding(false)} className="px-6 text-on-surface-variant hover:underline font-mono-label">
              Cancel
            </button>
          </motion.form>
        )}

        {/* Matrix Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* High Impact / High Urgency */}
          <div className="space-y-6">
            <h3 className="font-headline-md font-serif text-[24px] text-on-surface flex items-center space-x-3 pb-2 border-b border-surface-variant">
              <span className="w-3 h-3 rounded-full bg-error"></span>
              <span>Critical Leverage (High Priority)</span>
            </h3>
            
            {highPriority.length === 0 && <p className="text-on-surface-variant text-sm py-4">No critical tasks.</p>}
            
            {highPriority.map((task, i) => (
              <motion.div
                key={task.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-surface-container-lowest rounded-xl p-6 shadow-[0px_4px_20px_rgba(0,0,0,0.03)] transition-all duration-200 hover:-translate-y-[2px] border border-transparent hover:border-outline-variant cursor-pointer group"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-body-lg text-[18px] font-medium text-on-surface group-hover:text-primary transition-all duration-200">
                    {task.title}
                  </h4>
                  <span className="bg-error-container text-[#93000a] px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
                    Due Today
                  </span>
                </div>
                <p className="font-body-md text-[15px] text-on-surface-variant line-clamp-2 mb-4">
                  {task.description || "No description provided."}
                </p>
              </motion.div>
            ))}
          </div>

          {/* High Impact / Low Urgency */}
          <div className="space-y-6">
            <h3 className="font-headline-md font-serif text-[24px] text-on-surface flex items-center space-x-3 pb-2 border-b border-surface-variant">
              <span className="w-3 h-3 rounded-full bg-primary"></span>
              <span>Strategic Deep Work (Other)</span>
            </h3>
            
            {otherTasks.length === 0 && <p className="text-on-surface-variant text-sm py-4">No other tasks.</p>}

            {otherTasks.map((task, i) => (
              <motion.div
                key={task.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-surface-container-lowest rounded-xl p-6 shadow-[0px_4px_20px_rgba(0,0,0,0.03)] transition-all duration-200 hover:-translate-y-[2px] border border-transparent hover:border-outline-variant cursor-pointer group"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-body-lg text-[18px] font-medium text-on-surface group-hover:text-primary transition-all duration-200">
                    {task.title}
                  </h4>
                  <span className="bg-surface-variant text-on-surface-variant px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
                    Next Week
                  </span>
                </div>
                <p className="font-body-md text-[15px] text-on-surface-variant line-clamp-2 mb-4">
                  {task.description || "No description provided."}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
