import SettingsClient from "./SettingsClient";
import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";

import { cookies } from "next/headers";

export default async function SettingsPage() {
  const cookieStore = await cookies();
  const userId = cookieStore.get("chronix-uid")?.value || "demo-user-123";

  let user = await prisma.user.findUnique({
    where: { id: userId }
  });

  if (!user) {
    user = { id: userId, name: "A. Executive", email: "admin@chronix.os", createdAt: new Date(), updatedAt: new Date() };
  }

  return <SettingsClient user={user} />;
}
