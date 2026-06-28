"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function CalendarClient({ initialTasks, userId }: { initialTasks: any[], userId: string }) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  const prevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  const today = () => setCurrentDate(new Date());

  const isToday = (day: number) => {
    const todayDate = new Date();
    return todayDate.getDate() === day && todayDate.getMonth() === currentDate.getMonth() && todayDate.getFullYear() === currentDate.getFullYear();
  };

  const getTasksForDay = (day: number) => {
    return initialTasks.filter(task => {
      if (!task.scheduledAt) return false;
      const taskDate = new Date(task.scheduledAt);
      return taskDate.getDate() === day && taskDate.getMonth() === currentDate.getMonth() && taskDate.getFullYear() === currentDate.getFullYear();
    });
  };

  return (
    <>
      <header className="flex justify-between items-center h-20 sticky top-0 z-40 bg-background/50 backdrop-blur-xl mb-8 border-b border-outline">
        <div className="flex items-center gap-4">
          <h2 className="font-serif font-black text-[32px] md:text-[48px] text-foreground hidden md:block tracking-tight">
            Timeline
          </h2>
          <h2 className="font-sans font-bold text-[24px] text-foreground md:hidden">
            Calendar
          </h2>
        </div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={today}
            className="bg-surface border border-outline-variant text-foreground font-sans font-bold text-[13px] uppercase tracking-widest py-3 px-6 rounded-full hover:bg-surface-variant transition-all duration-200"
          >
            Today
          </button>
        </div>
      </header>

      <div className="max-w-[1440px] mx-auto pb-24">
        <div className="bg-surface/40 backdrop-blur-xl border border-outline rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
          
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-sans font-bold text-[24px] text-foreground">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h3>
            <div className="flex gap-2">
              <button onClick={prevMonth} className="p-3 bg-background border border-outline-variant rounded-xl hover:text-primary hover:border-primary transition-colors flex items-center justify-center">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button onClick={nextMonth} className="p-3 bg-background border border-outline-variant rounded-xl hover:text-primary hover:border-primary transition-colors flex items-center justify-center">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-4 mb-4">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, i) => (
              <div key={i} className="text-center font-sans font-bold text-[12px] uppercase tracking-widest text-muted-foreground pb-2 border-b border-outline-variant/50">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-4 auto-rows-fr">
            {Array.from({ length: firstDayOfMonth }).map((_, i) => (
              <div key={`empty-${i}`} className="min-h-[120px] rounded-2xl bg-background/30 border border-transparent"></div>
            ))}
            
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const dayTasks = getTasksForDay(day);
              return (
                <div 
                  key={`day-${day}`} 
                  className={`min-h-[120px] rounded-2xl p-3 border transition-colors relative group
                    ${isToday(day) 
                      ? 'bg-primary/5 border-primary/30 shadow-[0_0_15px_rgba(46,125,50,0.1)]' 
                      : 'bg-background border-outline hover:border-primary/20'}`}
                >
                  <span className={`font-sans font-bold text-[14px] ${isToday(day) ? 'text-primary' : 'text-muted-foreground'}`}>
                    {day}
                  </span>
                  
                  <div className="mt-2 flex flex-col gap-1.5 overflow-y-auto max-h-[80px] custom-scrollbar">
                    {dayTasks.map(task => (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        key={task.id} 
                        title={task.title}
                        className={`text-[10px] font-sans font-bold uppercase tracking-wide truncate px-2 py-1 rounded border cursor-pointer
                          ${task.priority === 'High' 
                            ? 'bg-error/10 text-error border-error/30' 
                            : 'bg-surface border-outline-variant text-foreground'}`}
                      >
                        {task.title}
                      </motion.div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          
        </div>
      </div>
    </>
  );
}
