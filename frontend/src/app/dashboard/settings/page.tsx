import SettingsClient from "./SettingsClient";
import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";

export default async function SettingsPage() {
  let user = await prisma.user.findUnique({
    where: { id: "demo-user-123" }
  });

  if (!user) {
    user = { id: "demo-user-123", name: "A. Executive", email: "admin@chronix.os", createdAt: new Date(), updatedAt: new Date() };
  }

  return <SettingsClient user={user} />;
}
