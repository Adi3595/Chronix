"use client";

import { useAuth } from "@/components/AuthProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const { user, loading, login } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.push("/dashboard");
    }
  }, [user, loading, router]);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.03)] border border-surface-container-high w-full max-w-md text-center">
        <div className="flex justify-center mb-6">
          <img src="/icon.svg" alt="Chronix OS Logo" className="w-20 h-20" />
        </div>
        <h1 className="font-display-lg font-serif text-[32px] text-primary mb-2">Chronix OS</h1>
        <p className="font-body-md text-on-surface-variant mb-8">Execution Without Chaos</p>
        
        {loading ? (
          <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
        ) : (
          <button 
            onClick={() => login()}
            className="w-full bg-primary-container text-on-primary py-3 rounded-lg font-mono-label font-bold tracking-widest hover:opacity-90 transition-opacity"
          >
            ACCESS TERMINAL
          </button>
        )}
      </div>
    </div>
  );
}
