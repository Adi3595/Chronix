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

export default function SidebarNav({ onClick }: { onClick?: () => void }) {
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
              <div className="flex items-center justify-between px-4 py-3 font-sans text-[13px] tracking-wide text-muted-foreground opacity-40 cursor-not-allowed rounded-xl border border-transparent">
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
              className={`flex items-center gap-3 px-4 py-3 font-sans text-[13px] tracking-wide transition-all duration-200 rounded-xl border ${
                isActive
                  ? "bg-primary/10 text-primary font-bold border-primary/30 shadow-[0_4px_20px_rgba(46,125,50,0.15)]"
                  : "text-muted-foreground border-transparent hover:bg-surface-variant hover:text-foreground hover:border-outline-variant"
              }`}
              onClick={onClick}
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
