"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function SettingsClient({ user }: { user: any }) {
  const [deepWorkEnabled, setDeepWorkEnabled] = useState(true);
  const [weeklyBriefing, setWeeklyBriefing] = useState(false);
  const [autonomyLevel, setAutonomyLevel] = useState(3);
  const [notificationThreshold, setNotificationThreshold] = useState(75);

  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-12">
      {/* Header */}
      <div className="pb-6 border-b border-surface-variant">
        <h1 className="font-display-lg text-[48px] font-serif text-on-surface">Settings & Preferences</h1>
        <p className="text-on-surface-variant mt-2 font-body-lg">Manage your executive suite configuration and integrations.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Profile & Identity */}
        <section className="md:col-span-8 bg-surface-container-lowest rounded-xl p-6 md:p-8 shadow-sm border border-outline-variant/30 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary">person</span>
              <h2 className="font-headline-md text-[24px] font-serif text-on-surface">Profile Identity</h2>
            </div>
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="w-20 h-20 rounded-full bg-surface-container flex items-center justify-center shrink-0 overflow-hidden">
                  <span className="material-symbols-outlined text-[40px] text-primary">account_circle</span>
                </div>
                <div className="flex-1 space-y-4 w-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono-label text-[13px] text-on-surface-variant mb-2">Display Name</label>
                      <input className="w-full px-4 py-3 rounded-lg bg-surface-container-lowest border border-outline-variant focus:border-primary focus:outline-none font-body-md text-on-surface transition-colors" type="text" defaultValue={user?.name || "A. Executive"} />
                    </div>
                    <div>
                      <label className="block font-mono-label text-[13px] text-on-surface-variant mb-2">Email Address</label>
                      <input className="w-full px-4 py-3 rounded-lg bg-surface-container-lowest border border-outline-variant focus:border-primary focus:outline-none font-body-md text-on-surface transition-colors" type="email" defaultValue={user?.email || "admin@chronix.os"} />
                    </div>
                  </div>
                  <div>
                    <label className="block font-mono-label text-[13px] text-on-surface-variant mb-2">Role / Title</label>
                    <input className="w-full px-4 py-3 rounded-lg bg-surface-container-lowest border border-outline-variant focus:border-primary focus:outline-none font-body-md text-on-surface transition-colors" type="text" defaultValue="Chief Strategy Officer" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-end">
            <button className="px-6 py-2 bg-primary-container text-on-primary-container rounded-lg font-mono-label hover:opacity-90 transition-all duration-200">
              Save Changes
            </button>
          </div>
        </section>

        {/* Theme / Interface */}
        <section className="md:col-span-4 bg-surface-container-lowest rounded-xl p-6 md:p-8 shadow-sm border border-outline-variant/30 flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-primary">palette</span>
            <h2 className="font-headline-md text-[24px] font-serif text-on-surface">Interface</h2>
          </div>
          <div className="space-y-4 flex-1">
            <label className="block font-mono-label text-[13px] text-on-surface-variant mb-4">Color Scheme</label>
            <div className="space-y-2">
              <label className="flex items-center justify-between p-3 rounded-lg border border-primary-container bg-surface-container-low cursor-pointer">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">light_mode</span>
                  <span className="font-mono-label text-on-surface">Light</span>
                </div>
                <div className="w-4 h-4 rounded-full border-2 border-primary-container flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary-container"></div>
                </div>
              </label>
              <label className="flex items-center justify-between p-3 rounded-lg border border-transparent hover:bg-surface-container transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-on-surface-variant">dark_mode</span>
                  <span className="font-mono-label text-on-surface-variant">Dark</span>
                </div>
                <div className="w-4 h-4 rounded-full border-2 border-outline-variant"></div>
              </label>
              <label className="flex items-center justify-between p-3 rounded-lg border border-transparent hover:bg-surface-container transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-on-surface-variant">contrast</span>
                  <span className="font-mono-label text-on-surface-variant">Auto</span>
                </div>
                <div className="w-4 h-4 rounded-full border-2 border-outline-variant"></div>
              </label>
            </div>
          </div>
        </section>

        {/* External Integrations */}
        <section className="md:col-span-12 bg-surface-container-lowest rounded-xl p-6 md:p-8 shadow-sm border border-outline-variant/30">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-primary">cable</span>
            <h2 className="font-headline-md text-[24px] font-serif text-on-surface">Connected Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Google Calendar */}
            <div className="border border-surface-variant rounded-lg p-5 flex flex-col justify-between hover:border-outline-variant transition-colors">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="material-symbols-outlined text-[32px] text-on-surface">calendar_month</span>
                  <span className="px-2 py-1 bg-secondary-container text-on-secondary-container rounded font-label-sm text-[10px] uppercase">Active</span>
                </div>
                <h3 className="font-mono-label text-[13px] text-on-surface mb-1">Google Calendar</h3>
                <p className="text-on-surface-variant text-[13px]">Sync events and scheduling conflicts.</p>
              </div>
              <div className="mt-6 pt-4 border-t border-surface-variant flex justify-between items-center">
                <span className="text-[13px] text-on-surface-variant truncate">admin@chronix.os</span>
                <button className="text-error text-[13px] font-bold hover:underline">Revoke</button>
              </div>
            </div>
            {/* Slack */}
            <div className="border border-surface-variant rounded-lg p-5 flex flex-col justify-between hover:border-outline-variant transition-colors">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="material-symbols-outlined text-[32px] text-on-surface">forum</span>
                  <span className="px-2 py-1 bg-surface-container text-on-surface-variant rounded font-label-sm text-[10px] uppercase">Inactive</span>
                </div>
                <h3 className="font-mono-label text-[13px] text-on-surface mb-1">Slack Workspace</h3>
                <p className="text-on-surface-variant text-[13px]">Send executive summaries to channels.</p>
              </div>
              <div className="mt-6 pt-4 border-t border-surface-variant">
                <button className="w-full py-2 border border-outline-variant text-on-surface rounded-lg font-mono-label text-[13px] hover:bg-surface-container transition-all">
                  Connect
                </button>
              </div>
            </div>
            {/* GitHub */}
            <div className="border border-surface-variant rounded-lg p-5 flex flex-col justify-between hover:border-outline-variant transition-colors">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="material-symbols-outlined text-[32px] text-on-surface">code</span>
                  <span className="px-2 py-1 bg-secondary-container text-on-secondary-container rounded font-label-sm text-[10px] uppercase">Active</span>
                </div>
                <h3 className="font-mono-label text-[13px] text-on-surface mb-1">GitHub Enterprise</h3>
                <p className="text-on-surface-variant text-[13px]">Track commits and PR velocity.</p>
              </div>
              <div className="mt-6 pt-4 border-t border-surface-variant flex justify-between items-center">
                <span className="text-[13px] text-on-surface-variant truncate">chronix-org</span>
                <button className="text-error text-[13px] font-bold hover:underline">Revoke</button>
              </div>
            </div>
          </div>
        </section>

        {/* AI Agent Sensitivity */}
        <section className="md:col-span-6 bg-surface-container-lowest rounded-xl p-6 md:p-8 shadow-sm border border-outline-variant/30">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-primary">smart_toy</span>
            <h2 className="font-headline-md text-[24px] font-serif text-on-surface">Agent Sensitivity</h2>
          </div>
          <p className="text-on-surface-variant mb-8 text-[14px]">Control how autonomously the internal AI models execute background tasks and filter notifications.</p>
          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-end mb-3">
                <label className="font-mono-label text-[13px] text-on-surface">Autonomy Level</label>
                <span className="font-label-sm text-[12px] font-bold text-primary">Level {autonomyLevel}</span>
              </div>
              <input 
                className="w-full accent-primary" 
                max="5" 
                min="1" 
                type="range" 
                value={autonomyLevel}
                onChange={(e) => setAutonomyLevel(Number(e.target.value))}
              />
              <div className="flex justify-between mt-2 text-[11px] text-on-surface-variant">
                <span>Strict</span>
                <span>Autonomous</span>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-end mb-3">
                <label className="font-mono-label text-[13px] text-on-surface">Notification Threshold</label>
                <span className="font-label-sm text-[12px] font-bold text-primary">High Importance ({notificationThreshold})</span>
              </div>
              <input 
                className="w-full accent-primary" 
                max="100" 
                min="1" 
                type="range" 
                value={notificationThreshold}
                onChange={(e) => setNotificationThreshold(Number(e.target.value))}
              />
            </div>
          </div>
        </section>

        {/* Productivity Modes */}
        <section className="md:col-span-6 bg-surface-container-lowest rounded-xl p-6 md:p-8 shadow-sm border border-outline-variant/30">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-primary">tune</span>
            <h2 className="font-headline-md text-[24px] font-serif text-on-surface">Productivity Modes</h2>
          </div>
          <div className="space-y-6">
            {/* Toggle Item */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-mono-label text-[13px] text-on-surface">Deep Work Enforcement</h3>
                <p className="text-[13px] text-on-surface-variant mt-1">Automatically mute non-critical channels.</p>
              </div>
              <button 
                onClick={() => setDeepWorkEnabled(!deepWorkEnabled)}
                className={`w-12 h-6 rounded-full relative transition-colors ${deepWorkEnabled ? 'bg-primary' : 'bg-surface-dim'}`}
              >
                <span className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${deepWorkEnabled ? 'right-1' : 'left-1'}`}></span>
              </button>
            </div>
            {/* Toggle Item */}
            <div className="flex items-center justify-between pt-6 border-t border-surface-variant">
              <div>
                <h3 className="font-mono-label text-[13px] text-on-surface">Weekly Briefing Email</h3>
                <p className="text-[13px] text-on-surface-variant mt-1">Receive automated summary on Monday 8 AM.</p>
              </div>
              <button 
                onClick={() => setWeeklyBriefing(!weeklyBriefing)}
                className={`w-12 h-6 rounded-full relative transition-colors ${weeklyBriefing ? 'bg-primary' : 'bg-surface-dim'}`}
              >
                <span className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${weeklyBriefing ? 'right-1' : 'left-1'}`}></span>
              </button>
            </div>
          </div>
        </section>
      </div>

      <div className="flex justify-between items-center pt-8 border-t border-surface-variant mt-12">
        <button className="text-error font-mono-label text-[13px] hover:underline">Delete Account</button>
        <span className="text-[13px] text-on-surface-variant">Chronix OS v2.4.1</span>
      </div>
    </div>
  );
}
