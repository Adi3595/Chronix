import DashboardSidebar from "@/components/DashboardSidebar";
import { cookies } from "next/headers";
import { prisma } from "@/lib/db";
import { resolveUserPlan } from "@/lib/plans";
import { PlanProvider } from "@/components/PlanProvider";
import NotificationEngine from "@/components/NotificationEngine";

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
  let userTasks: any[] = [];

  try {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (user) {
      dbPlan = user.plan;
      isAdmin = user.isAdmin;
      if (user.email) email = user.email;
    }
    userTasks = await prisma.task.findMany({ where: { userId } });
  } catch (error) {
    console.error("[Layout] DB error:", error);
  }

  const resolvedPlan = resolveUserPlan(email, dbPlan, isAdmin);

  return (
    <div className="font-sans text-[15px] antialiased min-h-screen flex flex-col md:flex-row bg-transparent text-on-background">
      <PlanProvider plan={resolvedPlan} isAdmin={isAdmin}>
        <DashboardSidebar resolvedPlan={resolvedPlan} />

        {/* Main Content Area */}
        <main className="flex-1 p-6 md:p-[60px] max-w-[1600px] mx-auto w-full relative z-10 pt-6 md:pt-[60px]">
          {children}
        </main>
        <NotificationEngine tasks={userTasks} />
      </PlanProvider>
    </div>
  );
}
