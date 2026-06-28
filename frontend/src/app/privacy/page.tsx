"use client";

import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-on-surface antialiased">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-background transition-all duration-200 border-b border-outline-variant">
        <div className="flex justify-between items-center px-4 md:px-[40px] py-4 max-w-[1440px] mx-auto">
          <Link href="/" className="font-sans font-black text-[20px] uppercase text-foreground tracking-tighter flex items-center gap-3">
            <img src="/icon.svg" alt="Logo" className="w-6 h-6 brightness-0 invert" />
            Chronix OS
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/login" className="font-mono text-[12px] uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">Login</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-[800px] mx-auto px-4 md:px-[40px] pt-32 pb-24 border-x border-outline-variant/30 min-h-screen">
        <h1 className="font-sans font-black text-[48px] uppercase tracking-tighter mb-8 text-foreground">Privacy Policy</h1>
        <p className="font-mono text-muted-foreground mb-12 text-[12px] uppercase tracking-widest border-b border-outline-variant/30 pb-4">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="space-y-12 font-mono text-[14px] leading-relaxed text-muted-foreground">
          <section>
            <h2 className="font-sans font-black text-[24px] uppercase text-foreground mb-4">1. Introduction</h2>
            <p>Welcome to Chronix OS. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our application and tell you about your privacy rights.</p>
          </section>

          <section>
            <h2 className="font-sans font-black text-[24px] uppercase text-foreground mb-4">2. The Data We Collect</h2>
            <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
            <ul className="list-none pl-0 mt-6 space-y-4">
              <li className="flex gap-4"><span className="text-primary mt-1">■</span> <div><strong className="text-foreground">Identity Data</strong> includes first name, last name, username or similar identifier.</div></li>
              <li className="flex gap-4"><span className="text-primary mt-1">■</span> <div><strong className="text-foreground">Contact Data</strong> includes email address.</div></li>
              <li className="flex gap-4"><span className="text-primary mt-1">■</span> <div><strong className="text-foreground">Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version.</div></li>
              <li className="flex gap-4"><span className="text-primary mt-1">■</span> <div><strong className="text-foreground">Usage Data</strong> includes information about how you use our application, including task creation and agent telemetry.</div></li>
            </ul>
          </section>

          <section>
            <h2 className="font-sans font-black text-[24px] uppercase text-foreground mb-4">3. How We Use Your Data</h2>
            <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
            <ul className="list-none pl-0 mt-6 space-y-4">
              <li className="flex gap-4"><span className="text-primary mt-1">■</span> To register you as a new user.</li>
              <li className="flex gap-4"><span className="text-primary mt-1">■</span> To manage our relationship with you.</li>
              <li className="flex gap-4"><span className="text-primary mt-1">■</span> To enable our AI agents to provide contextual recommendations and execute tasks autonomously on your behalf.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-sans font-black text-[24px] uppercase text-foreground mb-4">4. Data Security</h2>
            <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. We use Firebase Authentication for secure identity management.</p>
          </section>

          <section>
            <h2 className="font-sans font-black text-[24px] uppercase text-foreground mb-4">5. Contact Details</h2>
            <p>If you have any questions about this privacy policy or our privacy practices, please contact us at <a href="mailto:support@chronix.os" className="text-primary hover:underline">support@chronix.os</a>.</p>
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
