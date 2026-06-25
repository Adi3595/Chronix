"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global Error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-[#0E1111] text-white flex flex-col items-center justify-center p-4">
          <div className="bg-[#1A1D1D] p-8 rounded-2xl border border-red-900/30 max-w-md w-full text-center">
            <h1 className="text-[28px] font-serif mb-2">Fatal System Error</h1>
            <p className="text-gray-400 mb-8 text-sm">
              Chronix OS encountered an unrecoverable state at the root level.
            </p>
            <button
              onClick={() => reset()}
              className="w-full bg-[#2E7D32] text-white py-3 rounded-xl font-bold hover:opacity-90 transition-opacity"
            >
              Reboot System
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
