"use client";

import Link from "next/link";

export default function PrivacyPolicyPage() {
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
        <h1 className="font-display-lg font-serif text-[48px] font-semibold mb-8 text-on-surface">Privacy Policy</h1>
        <p className="font-body-md text-on-surface-variant mb-8 text-[16px]">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="space-y-8 font-body-md text-[16px] leading-relaxed text-on-surface-variant">
          <section>
            <h2 className="font-headline-md font-serif text-[24px] font-semibold text-on-surface mb-4">1. Introduction</h2>
            <p>Welcome to Chronix OS. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our application and tell you about your privacy rights.</p>
          </section>

          <section>
            <h2 className="font-headline-md font-serif text-[24px] font-semibold text-on-surface mb-4">2. The Data We Collect</h2>
            <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data</strong> includes email address.</li>
              <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version.</li>
              <li><strong>Usage Data</strong> includes information about how you use our application, including task creation and agent telemetry.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-headline-md font-serif text-[24px] font-semibold text-on-surface mb-4">3. How We Use Your Data</h2>
            <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>To register you as a new user.</li>
              <li>To manage our relationship with you.</li>
              <li>To enable our AI agents to provide contextual recommendations and execute tasks autonomously on your behalf.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-headline-md font-serif text-[24px] font-semibold text-on-surface mb-4">4. Data Security</h2>
            <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. We use Firebase Authentication for secure identity management.</p>
          </section>

          <section>
            <h2 className="font-headline-md font-serif text-[24px] font-semibold text-on-surface mb-4">5. Contact Details</h2>
            <p>If you have any questions about this privacy policy or our privacy practices, please contact us at <a href="mailto:support@chronix.os" className="text-primary hover:underline">support@chronix.os</a>.</p>
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
