"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div key={pathname}>
      {/* The Page Transition Curtain */}
      <motion.div
        className="fixed inset-0 z-[9999] bg-surface-container-lowest flex items-center justify-center pointer-events-none"
        initial={{ opacity: 1, filter: "blur(0px)" }}
        animate={{ opacity: 0, filter: "blur(10px)", scale: 1.05 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
      >
        {/* The X Logo Animation */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0, rotate: -90 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-6"
        >
          <img src="/icon.svg" alt="Chronix OS Loading" className="w-48 h-48 drop-shadow-2xl mix-blend-multiply opacity-90 dark:mix-blend-screen dark:opacity-100 dark:[filter:invert(1)_hue-rotate(180deg)]" />
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="font-mono-label text-[14px] text-on-surface-variant tracking-[0.2em] uppercase font-bold"
          >
            Initializing
          </motion.div>
        </motion.div>
      </motion.div>

      {/* The Next Page Content Entrance */}
      <motion.div
        initial={{ opacity: 0, filter: "blur(8px)", scale: 0.98 }}
        animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
