import React from "react";
import Link from "next/link";
import { CinematicBackground } from "@/components/CinematicBackground";

export const metadata = {
  title: 'Contact Us | Chronix OS',
  description: 'Get in touch with the Chronix support and enterprise teams.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen text-foreground antialiased relative selection:bg-primary selection:text-background flex flex-col justify-between">
      <CinematicBackground />

      {/* TopNavBar */}
      <nav className="w-full z-50 bg-background/50 backdrop-blur-xl border-b border-outline">
        <div className="flex justify-between items-center px-6 md:px-[80px] py-6 max-w-[1440px] mx-auto">
          <Link href="/" className="font-sans text-[18px] font-bold tracking-widest uppercase flex items-center gap-3">
            <img src="/icon.png" className="w-12 h-12 object-contain mix-blend-screen [filter:invert(1)_hue-rotate(180deg)]" alt="Chronix Logo" />
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

      <main className="flex-1 max-w-[800px] mx-auto w-full px-6 py-24 relative z-10 flex flex-col items-center">
        <h1 className="font-serif font-black text-[48px] md:text-[64px] uppercase text-foreground leading-none tracking-tighter mb-4 text-center">
          Establish <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Comms</span>
        </h1>
        <p className="font-sans text-[15px] text-muted-foreground uppercase tracking-widest mb-12 text-center">
          Our team is standing by to assist with your deployment.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[600px]">
          {/* General Support */}
          <div className="bg-surface/40 backdrop-blur-xl border border-outline rounded-3xl p-8 flex flex-col items-center text-center hover:border-primary/40 transition-colors">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
              <span className="material-symbols-outlined text-[24px]">support_agent</span>
            </div>
            <h3 className="font-sans font-bold text-[18px] uppercase tracking-tight text-foreground mb-2">Technical Support</h3>
            <p className="font-sans text-[13px] text-muted-foreground mb-6 flex-1">
              Need help configuring your neural agents or setting up integrations?
            </p>
            <a href="mailto:support@chronix.os" className="text-primary font-sans text-[13px] uppercase tracking-widest font-bold hover:underline">
              support@chronix.os
            </a>
          </div>

          {/* Enterprise */}
          <div className="bg-surface/40 backdrop-blur-xl border border-outline rounded-3xl p-8 flex flex-col items-center text-center hover:border-primary/40 transition-colors">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
              <span className="material-symbols-outlined text-[24px]">corporate_fare</span>
            </div>
            <h3 className="font-sans font-bold text-[18px] uppercase tracking-tight text-foreground mb-2">Enterprise Solutions</h3>
            <p className="font-sans text-[13px] text-muted-foreground mb-6 flex-1">
              Custom agent deployments and bulk licensing for your entire organization.
            </p>
            <a href="mailto:enterprise@chronix.os" className="text-primary font-sans text-[13px] uppercase tracking-widest font-bold hover:underline">
              enterprise@chronix.os
            </a>
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
