"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-md"
      >
        <span className="material-symbols-outlined text-[64px] text-primary mb-6 block">route</span>
        <h1 className="font-display-lg text-[48px] font-serif text-on-surface mb-2">404</h1>
        <p className="font-body-lg text-on-surface-variant mb-8">
          The execution path you are looking for does not exist or has been archived.
        </p>
        <Link 
          href="/dashboard" 
          className="bg-primary text-on-primary px-8 py-3 rounded-xl font-mono-label hover:opacity-90 transition-opacity inline-flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          Return to Terminal
        </Link>
      </motion.div>
    </div>
  );
}
