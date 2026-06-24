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
      <footer className="bg-surface-container w-full py-12 border-t border-outline-variant/20">
        <div className="max-w-[1440px] mx-auto px-4 md:px-[40px] flex flex-col md:flex-row justify-between items-center">
          <div className="font-display-lg font-serif text-[24px] text-primary mb-6 md:mb-0 flex items-center gap-2">
            <img src="/icon.svg" alt="Logo" className="w-6 h-6 grayscale" />
            Chronix OS
          </div>
          <div className="font-body-md text-[13px] text-on-surface-variant">
            © {new Date().getFullYear()} Chronix Productivity OS. Swiss Engineered Focus.
          </div>
        </div>
      </footer>
    </div>
  );
}
