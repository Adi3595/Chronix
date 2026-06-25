"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 w-full">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-surface-container-lowest p-8 rounded-2xl border border-error/20 max-w-md w-full text-center shadow-lg"
      >
        <div className="w-16 h-16 bg-error-container rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="material-symbols-outlined text-[32px] text-on-error-container">warning</span>
        </div>
        <h2 className="font-display-md text-[28px] font-serif text-on-surface mb-2">Execution Halted</h2>
        <p className="font-body-md text-on-surface-variant mb-8">
          A critical error occurred while attempting to process this view. The issue has been logged.
        </p>
        <div className="flex flex-col gap-3">
          <button
            onClick={() => reset()}
            className="w-full bg-primary text-on-primary py-3 rounded-xl font-mono-label hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">refresh</span>
            Attempt Recovery
          </button>
          <Link
            href="/dashboard"
            className="w-full bg-transparent border-2 border-outline-variant text-on-surface py-3 rounded-xl font-mono-label hover:bg-surface-container transition-colors"
          >
            Return to Dashboard
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
