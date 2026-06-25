"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const DOCS_SECTIONS = [
  {
    title: "Getting Started",
    id: "getting-started",
    content: (
      <div className="space-y-4">
        <p className="text-on-surface-variant leading-relaxed">
          Welcome to the Chronix OS Documentation. Chronix is a cutting-edge execution terminal designed to orchestrate chaos into predictable outcomes.
        </p>
        <p className="text-on-surface-variant leading-relaxed">
          By utilizing advanced AI models and automated workflow interception, Chronix helps high-performing executives maintain peak momentum without burnout.
        </p>
        <div className="p-4 bg-primary-container/10 border border-primary/20 rounded-xl mt-4">
          <h4 className="font-mono-label text-primary mb-2 flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px]">lightbulb</span> Pro Tip
          </h4>
          <p className="text-sm text-on-surface-variant">Start by connecting your Google Calendar and Slack in the Settings menu to unlock maximum autonomy.</p>
        </div>
      </div>
    )
  },
  {
    title: "AI Agent Hub",
    id: "agent-hub",
    content: (
      <div className="space-y-4">
        <p className="text-on-surface-variant leading-relaxed">
          The AI Agent Hub gives you direct access to specialized autonomous agents. Each agent handles a specific vector of your workload:
        </p>
        <ul className="list-disc list-inside text-on-surface-variant space-y-2 ml-2">
          <li><strong>Atlas (Architecture):</strong> Plans long-term roadmaps and identifies structural bottlenecks.</li>
          <li><strong>Orbit (Scheduling):</strong> Monitors calendar conflicts and automatically suggests meeting rescheduling.</li>
          <li><strong>Nova (Communications):</strong> Drafts executive summaries of long Slack threads and email chains.</li>
        </ul>
        <p className="text-on-surface-variant leading-relaxed mt-4">
          You can toggle agents on or off depending on your active subscription tier.
        </p>
      </div>
    )
  },
  {
    title: "Deep Work Enforcement",
    id: "deep-work",
    content: (
      <div className="space-y-4">
        <p className="text-on-surface-variant leading-relaxed">
          Deep Work Enforcement is a proprietary feature that temporarily intercepts non-critical notifications across connected channels.
        </p>
        <p className="text-on-surface-variant leading-relaxed">
          When activated, Chronix will:
        </p>
        <ul className="list-disc list-inside text-on-surface-variant space-y-2 ml-2">
          <li>Set your Slack status to "In Deep Work"</li>
          <li>Hold all non-urgent emails in a batch summary</li>
          <li>Reject incoming ad-hoc meeting invites with a polite, AI-generated decline message</li>
        </ul>
      </div>
    )
  },
  {
    title: "Billing & Subscriptions",
    id: "billing",
    content: (
      <div className="space-y-4">
        <p className="text-on-surface-variant leading-relaxed">
          Chronix offers a seamless, instant-upgrade billing experience. 
        </p>
        <p className="text-on-surface-variant leading-relaxed">
          Navigate to the <strong>Settings</strong> page to view your current plan. Clicking "Upgrade" will launch our secure checkout modal. Once payment is processed, your account is upgraded immediately in real-time, instantly unlocking restricted features.
        </p>
      </div>
    )
  }
];

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState(DOCS_SECTIONS[0].id);

  return (
    <div className="max-w-5xl mx-auto pb-12">
      {/* Header */}
      <div className="pb-6 border-b border-surface-variant flex items-center gap-4">
        <Link href="/dashboard/help" className="w-10 h-10 rounded-full hover:bg-surface-container flex items-center justify-center text-on-surface-variant transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <div>
          <h1 className="font-display-lg text-[32px] md:text-[40px] font-serif text-on-surface">Documentation</h1>
          <p className="text-on-surface-variant mt-1 font-body-md text-[14px]">Official guides and references for Chronix OS.</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mt-8">
        
        {/* Sidebar Nav */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <nav className="sticky top-8 space-y-1">
            {DOCS_SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`w-full text-left px-4 py-2.5 rounded-lg font-mono-label text-[13px] transition-all duration-200 ${
                  activeSection === section.id 
                    ? "bg-primary-container text-on-primary-container border-l-2 border-primary"
                    : "text-on-surface-variant hover:bg-surface-container border-l-2 border-transparent"
                }`}
              >
                {section.title}
              </button>
            ))}
          </nav>
        </aside>

        {/* Content Area */}
        <main className="flex-1 bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-6 md:p-10 shadow-sm min-h-[600px]">
          {DOCS_SECTIONS.map((section) => (
            activeSection === section.id && (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="font-headline-md text-[28px] font-serif text-on-surface mb-6 pb-4 border-b border-surface-variant">
                  {section.title}
                </h2>
                <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none">
                  {section.content}
                </div>
              </motion.div>
            )
          ))}
        </main>
      </div>
    </div>
  );
}
