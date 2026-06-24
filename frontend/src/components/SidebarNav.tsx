"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarNav() {
  const pathname = usePathname();

  const tabs = [
    { icon: "dashboard", label: "Dashboard", href: "/dashboard", exact: true },
    { icon: "target", label: "Goals", href: "/dashboard/goals" },
    { icon: "check_circle", label: "Tasks", href: "/dashboard/tasks" },
    { icon: "calendar_today", label: "Calendar", href: "/dashboard/calendar" },
    { icon: "auto_awesome", label: "Future Self", href: "/dashboard/future-self" },
    { icon: "emergency", label: "Rescue Center", href: "/dashboard/rescue-center" },
    { icon: "insights", label: "Analytics", href: "/dashboard/analytics" },
    { icon: "smart_toy", label: "Agent Hub", href: "/dashboard/agent-hub" },
    { icon: "settings", label: "Settings", href: "/dashboard/settings" },
  ];

  return (
    <ul className="space-y-1">
      {tabs.map((tab, idx) => {
        const isActive = tab.exact ? pathname === tab.href : pathname.startsWith(tab.href);
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
