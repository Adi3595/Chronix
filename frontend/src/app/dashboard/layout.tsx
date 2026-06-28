import LogoutButton from "@/components/LogoutButton";
import Link from "next/link";
import React from "react";
import SidebarNav from "@/components/SidebarNav";
import { cookies } from "next/headers";
import { prisma } from "@/lib/db";
import { resolveUserPlan } from "@/lib/plans";
import { PlanProvider } from "@/components/PlanProvider";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const userId = cookieStore.get("chronix-uid")?.value || "demo-user-123";

  let dbPlan = "starter";
  let isAdmin = false;
  let email = "demo@chronix.os";

  try {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (user) {
      dbPlan = user.plan;
      isAdmin = user.isAdmin;
      if (user.email) email = user.email;
    }
  } catch (error) {
    console.error("[Layout] DB error:", error);
  }

  const resolvedPlan = resolveUserPlan(email, dbPlan, isAdmin);

  return (
    <div className="font-sans text-[15px] antialiased overflow-x-hidden min-h-screen flex bg-transparent text-on-background">
      <PlanProvider plan={resolvedPlan} isAdmin={isAdmin}>
        {/* SideNavBar (Desktop Only) */}
        <nav className="hidden md:flex h-screen w-72 fixed left-0 top-0 bg-surface/40 backdrop-blur-3xl border-r border-outline flex-col py-8 px-6 gap-y-4 z-50 shadow-[4px_0_24px_rgba(0,0,0,0.2)]">
          {/* Header */}
          <div className="mb-8 px-4">
            <div className="flex items-center gap-3 mb-2">
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
          </div>

          {/* CTA */}
          <div className="px-2 mb-6">
            <Link href="/dashboard/tasks" className="w-full bg-primary text-background py-3.5 rounded-full font-bold text-[13px] font-sans hover:bg-primary/90 transition-all flex items-center justify-center gap-2 uppercase tracking-widest shadow-[0_0_20px_rgba(46,125,50,0.4)]">
              <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
                add
              </span>
              New Entry
            </Link>
          </div>

          {/* Main Navigation */}
          <div className="flex-1 overflow-y-auto">
            <SidebarNav />
          </div>

          {/* Footer Navigation */}
          <div className="mt-auto pt-4 border-t border-outline-variant/30">
            <ul className="space-y-1">
              <li>
                <Link
                  href="/dashboard/help"
                  className="flex items-center gap-3 px-4 py-3 text-muted-foreground font-mono text-[12px] uppercase tracking-widest hover:bg-surface hover:text-primary transition-colors border border-transparent hover:border-outline-variant"
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
        </nav>

        {/* Main Content Area */}
        <main className="flex-1 md:ml-72 p-6 md:p-[60px] max-w-[1600px] mx-auto w-full relative z-10">
          {/* Top App Bar (Mobile Only) */}
          <div className="md:hidden flex justify-between items-center mb-6 pb-4 border-b border-outline-variant/50">
            <div className="flex items-center gap-3">
              <img src="/icon.svg" className="w-8 h-8 brightness-0 invert" alt="Logo" />
              <h1 className="font-sans font-black text-[20px] uppercase text-foreground tracking-tighter leading-none mt-1">
                Chronix OS
              </h1>
            </div>
            <button className="p-2 bg-surface border border-outline-variant">
              <span className="material-symbols-outlined text-primary text-[20px]">menu</span>
            </button>
          </div>
          {children}
        </main>
      </PlanProvider>
    </div>
  );
}
