"use client";

import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-on-surface antialiased">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md transition-all duration-200 border-b border-outline-variant/20">
        <div className="flex justify-between items-center px-4 md:px-[40px] py-4 max-w-[1440px] mx-auto">
          <Link href="/" className="font-display-lg font-serif text-[24px] font-semibold text-primary tracking-tight flex items-center gap-2">
            <img src="/icon.svg" alt="Logo" className="w-8 h-8" />
            Chronix OS
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/login" className="font-mono-label text-[13px] font-mono text-on-surface-variant hover:text-primary transition-colors">Login</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-[800px] mx-auto px-4 md:px-[40px] pt-32 pb-24">
        <h1 className="font-display-lg font-serif text-[48px] font-semibold mb-8 text-on-surface">Terms of Service</h1>
        <p className="font-body-md text-on-surface-variant mb-8 text-[16px]">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="space-y-8 font-body-md text-[16px] leading-relaxed text-on-surface-variant">
          <section>
            <h2 className="font-headline-md font-serif text-[24px] font-semibold text-on-surface mb-4">1. Acceptance of Terms</h2>
            <p>By accessing or using the Chronix OS application, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.</p>
          </section>

          <section>
            <h2 className="font-headline-md font-serif text-[24px] font-semibold text-on-surface mb-4">2. Description of Service</h2>
            <p>Chronix OS is a productivity platform providing AI-driven autonomous agents designed to assist with task prioritization, scheduling, and progress tracking. The Service is provided "AS IS" and on an "AS AVAILABLE" basis.</p>
          </section>

          <section>
            <h2 className="font-headline-md font-serif text-[24px] font-semibold text-on-surface mb-4">3. User Responsibilities</h2>
            <p>You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password. You agree not to disclose your password to any third party.</p>
          </section>

          <section>
            <h2 className="font-headline-md font-serif text-[24px] font-semibold text-on-surface mb-4">4. Intellectual Property</h2>
            <p>The Service and its original content, features, and functionality are and will remain the exclusive property of Chronix OS and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Chronix OS.</p>
          </section>

          <section>
            <h2 className="font-headline-md font-serif text-[24px] font-semibold text-on-surface mb-4">5. Termination</h2>
            <p>We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.</p>
          </section>

          <section>
            <h2 className="font-headline-md font-serif text-[24px] font-semibold text-on-surface mb-4">6. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at <a href="mailto:support@chronix.os" className="text-primary hover:underline">support@chronix.os</a>.</p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container w-full py-16">
        <div className="max-w-[1440px] mx-auto px-4 md:px-[40px] grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="font-display-lg font-serif text-[24px] text-primary mb-4 flex items-center gap-2">
              <img src="/icon.svg" alt="Logo" className="w-6 h-6 grayscale" />
              Chronix OS
            </div>
            <p className="font-body-md text-[14px] text-on-surface-variant mb-6 max-w-sm leading-relaxed">
              Execution Without Chaos. A premium autonomous executive productivity suite powered by an interconnected neural suite of AI agents.
            </p>
            <div className="flex flex-col gap-2 font-mono-label text-[13px] font-mono text-on-surface-variant">
              <span className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px]">location_on</span> 120 Execution Ave, San Francisco, CA 94105</span>
              <a href="mailto:support@chronix.os" className="flex items-center gap-2 hover:text-primary transition-colors w-fit"><span className="material-symbols-outlined text-[16px]">mail</span> support@chronix.os</a>
              <a href="tel:+15551234567" className="flex items-center gap-2 hover:text-primary transition-colors w-fit"><span className="material-symbols-outlined text-[16px]">call</span> +1 (555) 123-4567</a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-[14px] text-on-surface mb-4 uppercase tracking-widest">Platform</h4>
            <ul className="flex flex-col gap-3 font-mono-label text-[13px] font-mono">
              <li><Link href="/#features" className="text-on-surface-variant hover:text-primary transition-colors">Features</Link></li>
              <li><Link href="/#pricing" className="text-on-surface-variant hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link href="/dashboard" className="text-on-surface-variant hover:text-primary transition-colors">Terminal</Link></li>
              <li><Link href="https://github.com/Adi3595/Chronix" target="_blank" className="text-on-surface-variant hover:text-primary transition-colors">GitHub</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[14px] text-on-surface mb-4 uppercase tracking-widest">Legal</h4>
            <ul className="flex flex-col gap-3 font-mono-label text-[13px] font-mono">
              <li><Link href="/privacy" className="text-on-surface-variant hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-on-surface-variant hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><a href="mailto:support@chronix.os" className="text-on-surface-variant hover:text-primary transition-colors">Contact Support</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto px-4 md:px-[40px] pt-8 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-body-md text-[13px] text-on-surface-variant">
            © {new Date().getFullYear()} Chronix Productivity OS. Swiss Engineered Focus.
          </div>
          <div className="flex gap-4 text-on-surface-variant">
            {/* Social Icons Placeholder */}
            <a href="#" className="hover:text-primary transition-colors"><span className="material-symbols-outlined text-[20px]">language</span></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
