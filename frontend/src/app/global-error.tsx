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
        <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4">
          <div className="max-w-md w-full bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/30 text-center shadow-xl">
            <span className="material-symbols-outlined text-[48px] text-error mb-4">error</span>
            <h2 className="font-serif text-[32px] font-bold mb-2">Something went wrong!</h2>
            <p className="text-on-surface-variant mb-8 text-sm">
              Chronix encountered an unexpected error.
            </p>
            <button
              onClick={() => reset()}
              className="w-full bg-primary text-on-primary py-3 rounded-xl font-bold hover:opacity-90 transition-opacity"
            >
              Reboot System
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
