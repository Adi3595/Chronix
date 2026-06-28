import React from "react";
import Link from "next/link";
import { CinematicBackground } from "@/components/CinematicBackground";

export const metadata = {
  title: 'About Us | Chronix OS',
  description: 'The story behind Chronix, the autonomous operating system for ambition.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen text-foreground antialiased relative selection:bg-primary selection:text-background flex flex-col justify-between">
      <CinematicBackground />

      {/* TopNavBar */}
      <nav className="w-full z-50 bg-background/50 backdrop-blur-xl border-b border-outline">
        <div className="flex justify-between items-center px-6 md:px-[80px] py-6 max-w-[1440px] mx-auto">
          <Link href="/" className="font-sans text-[18px] font-bold tracking-widest uppercase flex items-center gap-3">
            <img src="/icon.png" className="w-8 h-8 object-contain" alt="Chronix Logo" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-primary">
              CHRONIX
            </span>
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/login" className="hidden md:block font-sans text-[13px] text-muted-foreground hover:text-foreground uppercase tracking-widest transition-colors">Log In</Link>
            <Link href="/signup" className="bg-primary/20 text-primary hover:bg-primary hover:text-background px-6 py-2.5 rounded-full font-sans text-[13px] font-bold uppercase tracking-widest transition-colors border border-primary/30">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-1 max-w-[800px] mx-auto w-full px-6 py-24 relative z-10">
        <h1 className="font-serif font-black text-[48px] md:text-[64px] uppercase text-foreground leading-none tracking-tighter mb-8">
          The Origin <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Protocol</span>
        </h1>
        
        <div className="space-y-8 font-sans text-[15px] text-muted-foreground leading-relaxed">
          <p className="text-[20px] text-foreground font-medium">
            Chronix was born from a singular realization: Human ambition is infinite, but human execution is fragile.
          </p>
          
          <p>
            In an era of endless tools, dashboards, and notification feeds, we found ourselves managing the work instead of doing it. We built Chronix to serve as an autonomous connective tissue between your goals and your reality.
          </p>

          <h2 className="font-sans font-black text-[24px] uppercase text-foreground mt-12 mb-4 tracking-tighter">Our Mission</h2>
          <p>
            To eliminate the friction of execution. We believe that when you strip away the administrative overhead of planning, scheduling, and tracking, what remains is pure, unadulterated momentum.
          </p>

          <div className="p-8 border border-outline bg-surface/30 backdrop-blur-md rounded-2xl my-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <span className="material-symbols-outlined text-[64px]">memory</span>
            </div>
            <h3 className="font-sans font-bold text-[16px] uppercase tracking-widest text-primary mb-4">The Neural Architecture</h3>
            <p className="text-[14px]">
              We didn't just build software; we engineered a digital nervous system. Our six specialized agents (Atlas, Orbit, Sentinel, Nova, Echo, and Aura) work in symphony to orchestrate your life seamlessly in the background.
            </p>
          </div>
        </div>
      </main>

      <footer className="w-full border-t border-outline py-8 text-center bg-surface/50 backdrop-blur-md relative z-10">
        <p className="font-sans text-[11px] text-muted-foreground uppercase tracking-widest">
          © 2026 Chronix Systems. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
