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
    <div className="font-body-md text-body-md antialiased overflow-x-hidden min-h-screen flex bg-background text-on-background">
      <PlanProvider plan={resolvedPlan} isAdmin={isAdmin}>
        {/* SideNavBar (Desktop Only) */}
        <nav className="hidden md:flex h-screen w-64 fixed left-0 top-0 bg-background border-r border-outline-variant/50 flex-col py-8 px-4 gap-y-2 z-50">
          {/* Header */}
          <div className="mb-8 px-4">
            <div className="flex items-center gap-3 mb-2">
              <img
                alt="Chronix OS Logo"
                className="w-10 h-10 object-contain brightness-0 invert"
                src="/icon.svg"
              />
              <div>
                <h1 className="font-sans font-black text-[22px] uppercase text-foreground tracking-tighter truncate leading-none">
                  Chronix OS
                </h1>
                <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest mt-2">
                  {resolvedPlan === "executive" ? "Executive Suite" : resolvedPlan === "enterprise" ? "Enterprise" : "Starter Plan"}
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="px-2 mb-6">
            <Link href="/dashboard/tasks" className="w-full bg-primary text-background py-3 font-bold text-[12px] font-mono hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 uppercase tracking-[0.2em]">
              <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>
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
        <main className="flex-1 md:ml-64 p-4 md:p-[40px] max-w-[1440px] mx-auto w-full">
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
