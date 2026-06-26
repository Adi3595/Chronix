"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePlan } from "@/components/PlanProvider";
import { PlanDefinition } from "@/lib/plans";

type Tab = {
  icon: string;
  label: string;
  href: string;
  exact?: boolean;
  feature?: keyof PlanDefinition["features"];
};

export default function SidebarNav() {
  const pathname = usePathname();
  const { can } = usePlan();

  const tabs: Tab[] = [
    { icon: "dashboard", label: "Dashboard", href: "/dashboard", exact: true },
    { icon: "target", label: "Goals", href: "/dashboard/goals", feature: "goals" },
    { icon: "check_circle", label: "Tasks", href: "/dashboard/tasks" },
    { icon: "calendar_today", label: "Calendar", href: "/dashboard/calendar", feature: "calendar" },
    { icon: "auto_awesome", label: "Future Self", href: "/dashboard/future-self", feature: "futureSelf" },
    { icon: "emergency", label: "Rescue Center", href: "/dashboard/rescue-center", feature: "rescueCenter" },
    { icon: "insights", label: "Analytics", href: "/dashboard/analytics", feature: "analytics" },
    { icon: "smart_toy", label: "Agent Hub", href: "/dashboard/agent-hub", feature: "agentHub" },
    { icon: "settings", label: "Settings", href: "/dashboard/settings" },
  ];

  return (
    <ul className="space-y-1">
      {tabs.map((tab, idx) => {
        const isActive = tab.exact ? pathname === tab.href : pathname.startsWith(tab.href);
        const hasAccess = tab.feature ? can(tab.feature) : true;

        if (!hasAccess) {
          return (
            <li key={idx}>
              <div className="flex items-center justify-between px-4 py-3 rounded-lg font-mono-label text-[13px] text-on-surface-variant opacity-60 cursor-not-allowed">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined">{tab.icon}</span>
                  {tab.label}
                </div>
                <span className="material-symbols-outlined text-[14px] text-outline">lock</span>
              </div>
            </li>
          );
        }

        return (
          <li key={idx}>
            <Link
              href={tab.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg font-mono-label text-[13px] transition-colors duration-200 ${
                isActive
                  ? "bg-surface-container text-primary font-bold shadow-sm border border-outline-variant/20"
                  : "text-on-surface-variant hover:bg-surface-container hover:text-primary"
              }`}
            >
              <span className="material-symbols-outlined">{tab.icon}</span>
              {tab.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
