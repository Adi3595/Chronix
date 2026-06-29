"use client";

import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-on-surface antialiased">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-background transition-all duration-200 border-b border-outline-variant">
        <div className="flex justify-between items-center px-4 md:px-[40px] py-4 max-w-[1440px] mx-auto">
          <Link href="/" className="font-sans font-black text-[20px] uppercase text-foreground tracking-tighter flex items-center gap-3">
            <img src="/icon.svg" alt="Logo" className="w-6 h-6 object-contain mix-blend-multiply opacity-90 dark:mix-blend-screen dark:opacity-100 dark:[filter:invert(1)_hue-rotate(180deg)]" />
            Chronix OS
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/login" className="font-mono text-[12px] uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">Login</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-[800px] mx-auto px-4 md:px-[40px] pt-32 pb-24 border-x border-outline-variant/30 min-h-screen">
        <h1 className="font-sans font-black text-[48px] uppercase tracking-tighter mb-8 text-foreground">Terms of Service</h1>
        <p className="font-mono text-muted-foreground mb-12 text-[12px] uppercase tracking-widest border-b border-outline-variant/30 pb-4">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="space-y-12 font-mono text-[14px] leading-relaxed text-muted-foreground">
          <section>
            <h2 className="font-sans font-black text-[24px] uppercase text-foreground mb-4">1. Acceptance of Terms</h2>
            <p>By accessing or using the Chronix OS application, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.</p>
          </section>

          <section>
            <h2 className="font-sans font-black text-[24px] uppercase text-foreground mb-4">2. Description of Service</h2>
            <p>Chronix OS is a productivity platform providing AI-driven autonomous agents designed to assist with task prioritization, scheduling, and progress tracking. The Service is provided "AS IS" and on an "AS AVAILABLE" basis.</p>
          </section>

          <section>
            <h2 className="font-sans font-black text-[24px] uppercase text-foreground mb-4">3. User Responsibilities</h2>
            <p>You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password. You agree not to disclose your password to any third party.</p>
          </section>

          <section>
            <h2 className="font-sans font-black text-[24px] uppercase text-foreground mb-4">4. Intellectual Property</h2>
            <p>The Service and its original content, features, and functionality are and will remain the exclusive property of Chronix OS and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Chronix OS.</p>
          </section>

          <section>
            <h2 className="font-sans font-black text-[24px] uppercase text-foreground mb-4">5. Termination</h2>
            <p>We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.</p>
          </section>

          <section>
            <h2 className="font-sans font-black text-[24px] uppercase text-foreground mb-4">6. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at <a href="mailto:support@chronix.os" className="text-primary hover:underline">support@chronix.os</a>.</p>
          </section>
        </div>
      </main>

      {/* Brutalist Footer */}
      <footer className="bg-background w-full pt-20 pb-8 border-t border-outline-variant relative overflow-hidden">
        {/* Massive Watermark Title */}
        <div className="w-full flex justify-start mb-16 px-4 md:px-[40px]">
          <h2 className="font-display-lg font-black text-[12vw] leading-none text-foreground/5 tracking-tighter uppercase select-none pointer-events-none">
            CHRONIX
          </h2>
        </div>
        
        <div className="max-w-[1440px] mx-auto px-4 md:px-[40px] flex flex-col md:flex-row justify-between items-end gap-10">
          <div>
            <div className="font-mono text-[12px] text-muted-foreground uppercase tracking-widest mb-4">Neural Architecture Online</div>
            <div className="flex gap-6">
              <Link href="/privacy" className="font-mono text-[12px] text-muted-foreground hover:text-primary uppercase tracking-widest transition-colors">Privacy</Link>
              <Link href="/terms" className="font-mono text-[12px] text-muted-foreground hover:text-primary uppercase tracking-widest transition-colors">Terms</Link>
            </div>
          </div>
          <div className="font-mono text-[10px] text-muted-foreground/50 uppercase tracking-widest text-right">
            © {new Date().getFullYear()} Chronix OS.
            <br />Execution Without Chaos.
          </div>
        </div>
      </footer>
    </div>
  );
}
