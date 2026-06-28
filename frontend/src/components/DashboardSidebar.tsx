"use client";

import Link from "next/link";
import React, { useState } from "react";
import SidebarNav from "@/components/SidebarNav";
import LogoutButton from "@/components/LogoutButton";
import { motion, AnimatePresence } from "framer-motion";

export default function DashboardSidebar({ resolvedPlan }: { resolvedPlan: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const SidebarContent = (
    <>
      {/* Header */}
      <div className="mb-8 px-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            alt="Chronix OS Logo"
            className="w-10 h-10 object-contain brightness-0 invert"
            src="/icon.svg"
          />
          <div>
            <h1 className="font-serif font-black text-[24px] text-foreground tracking-tight leading-none">
              Chronix OS
            </h1>
            <p className="text-[11px] text-primary font-sans uppercase tracking-widest mt-1">
              {resolvedPlan === "executive" ? "Executive Suite" : resolvedPlan === "enterprise" ? "Enterprise" : "Starter Plan"}
            </p>
          </div>
        </div>
        <button 
          className="md:hidden text-foreground p-2" 
          onClick={() => setIsOpen(false)}
        >
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>

      {/* CTA */}
      <div className="px-2 mb-6">
        <Link 
          href="/dashboard/tasks" 
          onClick={() => setIsOpen(false)}
          className="w-full bg-primary text-background py-3.5 rounded-full font-bold text-[13px] font-sans hover:bg-primary/90 transition-all flex items-center justify-center gap-2 uppercase tracking-widest shadow-[0_0_20px_rgba(46,125,50,0.4)]"
        >
          <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
            add
          </span>
          New Entry
        </Link>
      </div>

      {/* Main Navigation */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden w-full">
        <SidebarNav onClick={() => setIsOpen(false)} />
      </div>

      {/* Footer Navigation (Always at bottom) */}
      <div className="mt-auto pt-4 border-t border-outline-variant/30 w-full shrink-0 pb-6 md:pb-0">
        <ul className="space-y-1">
          <li>
            <Link
              href="/dashboard/help"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-3 text-muted-foreground font-mono text-[12px] uppercase tracking-widest hover:bg-surface hover:text-primary transition-colors border border-transparent hover:border-outline-variant rounded-xl"
            >
              <span className="material-symbols-outlined text-[16px]">help_outline</span>
              Help
            </Link>
          </li>
          <li>
            <LogoutButton />
          </li>
        </ul>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden flex justify-between items-center mb-6 pb-4 border-b border-outline-variant/50 sticky top-0 bg-background z-40 px-6 pt-6">
        <div className="flex items-center gap-3">
          <img src="/icon.svg" className="w-8 h-8 brightness-0 invert" alt="Logo" />
          <h1 className="font-sans font-black text-[20px] uppercase text-foreground tracking-tighter leading-none mt-1">
            Chronix OS
          </h1>
        </div>
        <button 
          className="p-2 bg-surface border border-outline-variant rounded-xl"
          onClick={() => setIsOpen(true)}
        >
          <span className="material-symbols-outlined text-primary text-[20px]">menu</span>
        </button>
      </div>

      {/* Desktop Sidebar */}
      <nav className="hidden md:flex h-screen w-72 sticky self-start left-0 top-0 bg-surface/40 backdrop-blur-3xl border-r border-outline flex-col py-8 px-6 gap-y-4 z-50 shadow-[4px_0_24px_rgba(0,0,0,0.2)]">
        {SidebarContent}
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] md:hidden"
            />
            <motion.nav 
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 bottom-0 w-80 bg-background/95 backdrop-blur-3xl border-r border-outline flex flex-col py-8 px-6 gap-y-4 z-[101] md:hidden"
            >
              {SidebarContent}
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
