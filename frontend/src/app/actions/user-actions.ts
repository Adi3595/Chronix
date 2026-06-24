"use server";

import { prisma } from "@/lib/db";

export async function syncUser(uid: string, email: string, name: string) {
  try {
    const user = await prisma.user.upsert({
      where: { id: uid },
      update: {
        email,
        name,
      },
      create: {
        id: uid,
        email,
        name,
      }
    });
    return { success: true, user };
  } catch (error: any) {
    console.error("Error syncing user:", error);
    return { success: false, error: error.message };
  }
}
