"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div key={pathname}>
      {/* The Page Transition Curtain */}
      <motion.div
        className="fixed inset-0 z-[9999] bg-surface-container-lowest flex items-center justify-center pointer-events-none border-b border-primary/20"
        initial={{ y: "0%" }}
        animate={{ y: "-100%" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.6 }}
      >
        {/* The X Logo Animation */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0, rotate: -90 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-4"
        >
          <img src="/icon.svg" alt="Chronix OS Loading" className="w-24 h-24 drop-shadow-xl" />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="font-mono-label text-[12px] text-on-surface-variant tracking-widest uppercase font-bold"
          >
            Initializing
          </motion.div>
        </motion.div>
      </motion.div>

      {/* The Next Page Content Entrance */}
      <motion.div
        initial={{ opacity: 0, filter: "blur(4px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
