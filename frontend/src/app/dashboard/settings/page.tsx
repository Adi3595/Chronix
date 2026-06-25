import SettingsClient from "./SettingsClient";
import { prisma } from "@/lib/db";
import { cookies } from "next/headers";

export const dynamic = 'force-dynamic';

export default async function SettingsPage() {
  const cookieStore = await cookies();
  const userId = cookieStore.get("chronix-uid")?.value || "demo-user-123";

  let user: any = { id: userId, name: "A. Executive", email: "admin@chronix.os", momentumScore: 87, createdAt: new Date(), updatedAt: new Date() };

  try {
    const dbUser = await prisma.user.findUnique({ where: { id: userId } });
    if (dbUser) user = dbUser;
  } catch (error) {
    console.error("[Settings] DB error:", error);
  }

  return <SettingsClient user={user} />;
}
