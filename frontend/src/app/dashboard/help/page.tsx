"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const FAQS = [
  {
    question: "How does the AI Agent Hub work?",
    answer: "The AI Agent Hub provides you with 6 specialized autonomous agents. Once enabled, they analyze your calendar, Slack, and GitHub to preemptively solve problems, draft emails, and block out focus time. They operate securely and only take actions based on your Autonomy Level settings."
  },
  {
    question: "How do I upgrade my plan?",
    answer: "You can upgrade at any time by navigating to Settings > Billing & Subscription. Our Executive suite unlocks all AI agents and unlimited task matrix slots. Your subscription is managed securely via our native simulated checkout."
  },
  {
    question: "What is Deep Work Enforcement?",
    answer: "Deep Work Enforcement automatically analyzes your highest priority tasks and calendar events. When activated, it will temporarily pause non-critical notifications from Slack and email, allowing you to focus on what matters most."
  },
  {
    question: "How is my data secured?",
    answer: "Chronix OS uses industry-standard encryption for all data at rest and in transit. Your connected accounts (Google, Slack, GitHub) use OAuth 2.0, meaning we never store your passwords, and you can revoke access at any time."
  }
];

export default function HelpPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-12">
      {/* Header */}
      <div className="pb-6 border-b border-surface-variant">
        <h1 className="font-display-lg text-[48px] font-serif text-on-surface">Support Center</h1>
        <p className="text-on-surface-variant mt-2 font-body-lg">Documentation, FAQs, and direct assistance for the Chronix OS suite.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Quick Links */}
        <section className="md:col-span-4 space-y-6">
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/30 text-center">
            <span className="material-symbols-outlined text-[32px] text-primary mb-3">quick_reference_all</span>
            <h3 className="font-headline-md text-[18px] font-serif mb-2 text-on-surface">Documentation</h3>
            <p className="text-[13px] text-on-surface-variant mb-4">Read the comprehensive guide to maximizing Chronix OS.</p>
            <button className="w-full py-2 bg-surface-container text-on-surface rounded-lg font-mono-label text-[13px] hover:bg-surface-variant transition-colors">
              Read Docs
            </button>
          </div>

          <div className="bg-primary-container rounded-xl p-6 shadow-sm text-center">
            <span className="material-symbols-outlined text-[32px] text-primary mb-3">support_agent</span>
            <h3 className="font-headline-md text-[18px] font-serif mb-2 text-on-primary-container">Priority Support</h3>
            <p className="text-[13px] text-on-primary-container/80 mb-4">Executive & Enterprise users get 24/7 dedicated support.</p>
            <a href="mailto:support@chronix.os" className="block w-full py-2 bg-primary text-on-primary rounded-lg font-mono-label text-[13px] hover:opacity-90 transition-opacity">
              Contact Us
            </a>
          </div>
        </section>

        {/* FAQs */}
        <section className="md:col-span-8 bg-surface-container-lowest rounded-xl p-6 md:p-8 shadow-sm border border-outline-variant/30">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-primary">live_help</span>
            <h2 className="font-headline-md text-[24px] font-serif text-on-surface">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx} 
                  className={`border rounded-xl overflow-hidden transition-colors ${isOpen ? 'border-primary bg-primary-container/5' : 'border-surface-variant hover:border-outline-variant'}`}
                >
                  <button 
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-4 text-left"
                  >
                    <span className="font-mono-label text-[14px] text-on-surface">{faq.question}</span>
                    <span className={`material-symbols-outlined transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : 'text-on-surface-variant'}`}>
                      keyboard_arrow_down
                    </span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 pt-0 text-[14px] text-on-surface-variant leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-surface-variant flex items-center justify-between">
            <p className="text-[13px] text-on-surface-variant">Still need help? Visit our community forum.</p>
            <Link href="https://github.com/Adi3595/Chronix/issues" target="_blank" className="font-mono-label text-[13px] text-primary hover:underline flex items-center gap-1">
              Open Issue <span className="material-symbols-outlined text-[14px]">open_in_new</span>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
