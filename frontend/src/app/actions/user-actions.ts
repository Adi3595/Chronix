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

export async function upgradePlan(uid: string, plan: "executive" | "enterprise") {
  try {
    await prisma.user.update({
      where: { id: uid },
      data: { plan },
    });
    
    // In a real app we might revalidatePath("/dashboard", "layout") here
    // but since we rely on client context, we will also return success.
    return { success: true };
  } catch (error: any) {
    console.error("Error upgrading plan:", error);
    return { success: false, error: error.message };
  }
}

export async function downgradePlan(uid: string) {
  try {
    await prisma.user.update({
      where: { id: uid },
      data: { plan: "starter" },
    });
    return { success: true };
  } catch (error: any) {
    console.error("Error downgrading plan:", error);
    return { success: false, error: error.message };
  }
}
