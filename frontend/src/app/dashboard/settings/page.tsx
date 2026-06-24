import SettingsClient from "./SettingsClient";
import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";

export default async function SettingsPage() {
  const user = await prisma.user.findUnique({
    where: { id: "demo-user-123" }
  });

  if (!user) {
    redirect("/login");
  }

  return <SettingsClient user={user} />;
}
