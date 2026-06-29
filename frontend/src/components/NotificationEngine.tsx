"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NotificationEngine({ tasks }: { tasks: any[] }) {
  const [notifications, setNotifications] = useState<any[]>([]);

  useEffect(() => {
    // Check for approaching deadlines (tasks due within 24 hours that are not completed)
    const now = new Date();
    const approaching = tasks.filter(t => {
      if (!t.scheduledAt || t.isCompleted) return false;
      const due = new Date(t.scheduledAt);
      const hoursUntilDue = (due.getTime() - now.getTime()) / (1000 * 60 * 60);
      return hoursUntilDue > 0 && hoursUntilDue <= 24;
    });

    if (approaching.length > 0) {
      // Simulate real-time notification arrival with a slight delay
      const timer = setTimeout(() => {
        setNotifications(approaching);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [tasks]);

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-4 pointer-events-none">
      <AnimatePresence>
        {notifications.map((task) => (
          <motion.div
            key={`notif-${task.id}`}
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-surface-container-lowest border border-error/30 shadow-[0_10px_40px_rgba(255,107,107,0.15)] rounded-2xl p-4 w-[320px] pointer-events-auto flex items-start gap-4"
          >
            <div className="bg-error/10 text-error p-2 rounded-full mt-1">
              <span className="material-symbols-outlined text-[20px]">warning</span>
            </div>
            <div className="flex-1 pr-2">
              <h4 className="font-mono-label font-bold text-[12px] text-error uppercase tracking-widest mb-1">
                Approaching Deadline
              </h4>
              <p className="font-body-md text-[14px] text-on-surface-variant leading-snug">
                "{task.title}" is due in less than 24 hours.
              </p>
              <button 
                onClick={() => setNotifications(prev => prev.filter(n => n.id !== task.id))}
                className="mt-3 text-[12px] text-primary hover:underline font-bold uppercase tracking-wider"
              >
                Dismiss
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
