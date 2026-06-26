import { NextResponse } from "next/server";
import { google } from "googleapis";
import { prisma } from "@/lib/db";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const code = searchParams.get("code");
    const userId = searchParams.get("state"); // passed from init route
    const error = searchParams.get("error");

    if (error) {
      console.error("Google OAuth Error:", error);
      return NextResponse.redirect(new URL("/dashboard/settings?error=oauth_failed", req.url));
    }

    if (!code || !userId) {
      return NextResponse.json({ error: "Missing code or state" }, { status: 400 });
    }

    const urlObj = new URL(req.url);
    const redirectUri = `${urlObj.origin}/api/auth/google/callback`;

    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CALENDAR_CLIENT_ID,
      process.env.GOOGLE_CALENDAR_CLIENT_SECRET,
      redirectUri
    );

    const { tokens } = await oauth2Client.getToken(code);

    if (tokens.refresh_token) {
      await prisma.user.update({
        where: { id: userId },
        data: { googleRefreshToken: tokens.refresh_token },
      });
    }

    // Redirect back to settings page with success
    return NextResponse.redirect(new URL("/dashboard/settings?success=calendar_connected", req.url));
  } catch (error) {
    console.error("Callback error:", error);
    return NextResponse.redirect(new URL("/dashboard/settings?error=callback_failed", req.url));
  }
}
