import Link from "next/link";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-body-md text-body-md antialiased overflow-x-hidden min-h-screen flex bg-background text-on-background">
      {/* SideNavBar (Desktop Only) */}
      <nav className="hidden md:flex h-screen w-64 fixed left-0 top-0 bg-surface-container-lowest border-r border-outline-variant shadow-sm flex-col py-8 px-4 gap-y-2 z-50">
        {/* Header */}
        <div className="mb-8 px-4">
          <div className="flex items-center gap-3 mb-2">
            <img
              alt="User Profile"
              className="w-10 h-10 rounded-full object-cover border border-outline-variant"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4ra48ArBG32KGJ3FgD64JQx1TJPGZyCB7yCxJ4UaNBtkTGzrF7kutaH-ddtpMNfUeVB7JlVM9PxXy6jhyhV-L1sMfRO__zrHHa5MAv4doHXdeQD2OreYm0bgj4q-WIZQNw6596CdNNOUS4F5ycT1XVLzxXYr4BhbKD_KtLGasSRsSWEo2ugnj_NyF9IcYRBog-nig4k2Z07AsHbT-ItihTCurSoNou3Gak2J8fWIOB_74HGVWX2nwBQmGhu6tkXdi5dq8tzOo3GM"
            />
            <div>
              <h1 className="font-headline-md text-[24px] font-serif text-primary truncate">
                Chronix OS
              </h1>
              <p className="font-mono-label text-[13px] text-on-surface-variant font-mono">
                Premium Productivity
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="px-2 mb-6">
          <button className="w-full bg-primary-container text-on-primary py-3 rounded-lg font-mono-label text-[13px] font-mono hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-[0px_4px_20px_rgba(0,0,0,0.03)]">
            <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
              add
            </span>
            New Entry
          </button>
        </div>

        {/* Main Navigation */}
        <div className="flex-1 overflow-y-auto">
          <ul className="space-y-1">
            <li>
              <Link
                href="/dashboard"
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:text-primary font-mono-label text-[13px] hover:bg-surface-container transition-colors duration-200"
              >
                <span className="material-symbols-outlined">dashboard</span>
                Dashboard
              </Link>
            </li>
            {[
              { icon: "target", label: "Goals", href: "/dashboard/goals" },
              { icon: "check_circle", label: "Tasks", href: "/dashboard/tasks" },
              { icon: "calendar_today", label: "Calendar", href: "/dashboard/calendar" },
              { icon: "auto_awesome", label: "Future Self", href: "/dashboard/future-self" },
              { icon: "emergency", label: "Rescue Center", href: "/dashboard/rescue-center" },
              { icon: "insights", label: "Analytics", href: "/dashboard/analytics" },
              { icon: "smart_toy", label: "Agent Hub", href: "/dashboard/agent-hub" },
              { icon: "settings", label: "Settings", href: "/dashboard/settings" },
            ].map((tab, idx) => (
              <li key={idx}>
                <Link
                  href={tab.href}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant font-mono-label text-[13px] hover:bg-surface-container hover:text-primary transition-colors duration-200"
                >
                  <span className="material-symbols-outlined">{tab.icon}</span>
                  {tab.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Navigation */}
        <div className="mt-auto pt-4 border-t border-outline-variant/30">
          <ul className="space-y-1">
            <li>
              <Link
                href="#"
                className="flex items-center gap-3 px-4 py-2 rounded-lg text-on-surface-variant font-mono-label text-[13px] hover:bg-surface-container transition-colors duration-200"
              >
                <span className="material-symbols-outlined">help_outline</span>
                Help
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center gap-3 px-4 py-2 rounded-lg text-on-surface-variant font-mono-label text-[13px] hover:bg-surface-container transition-colors duration-200"
              >
                <span className="material-symbols-outlined">logout</span>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 md:ml-64 p-4 md:p-[40px] max-w-[1440px] mx-auto w-full">
        {/* Top App Bar (Mobile Only) */}
        <div className="md:hidden flex justify-between items-center mb-6">
          <h1 className="font-display-lg-mobile text-[32px] font-serif font-semibold text-primary">
            Chronix OS
          </h1>
          <button className="p-2 bg-surface-container-lowest rounded-full shadow-sm">
            <span className="material-symbols-outlined text-primary">menu</span>
          </button>
        </div>
        {children}
      </main>
    </div>
  );
}
