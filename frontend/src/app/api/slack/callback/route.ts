import { NextResponse } from "next/server";
import { WebClient } from "@slack/web-api";
import { prisma } from "@/lib/db";
import { cookies } from "next/headers";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const code = url.searchParams.get("code");
    const error = url.searchParams.get("error");

    if (error) {
      console.error("Slack OAuth error:", error);
      return NextResponse.redirect(new URL("/dashboard/settings?error=slack_auth_failed", request.url));
    }

    if (!code) {
      return NextResponse.json({ error: "Missing authorization code" }, { status: 400 });
    }

    const clientId = process.env.SLACK_CLIENT_ID;
    const clientSecret = process.env.SLACK_CLIENT_SECRET;

    if (!clientId || !clientSecret) {
      console.error("Missing Slack credentials in environment variables");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    // Exchange the temporary code for an access token
    const slack = new WebClient();
    const result = await slack.oauth.v2.access({
      client_id: clientId,
      client_secret: clientSecret,
      code: code,
    });

    if (!result.ok || !result.team) {
      console.error("Slack OAuth access error:", result.error);
      return NextResponse.redirect(new URL("/dashboard/settings?error=slack_access_failed", request.url));
    }

    const botToken = result.access_token;
    const userToken = result.authed_user?.access_token;
    const teamId = result.team.id;
    const teamName = result.team.name;

    // Save tokens to the database
    // Get the currently logged-in user
    const cookieStore = await cookies();
    const userId = cookieStore.get("chronix-uid")?.value || "demo-user-123";

    await prisma.user.update({
      where: { id: userId },
      data: {
        slackBotToken: botToken,
        slackUserToken: userToken,
        slackWorkspaceId: teamId,
        slackWorkspaceName: teamName,
      },
    });

    // Redirect back to settings page on success
    return NextResponse.redirect(new URL("/dashboard/settings?success=slack_connected", request.url));
  } catch (error) {
    console.error("Error during Slack callback:", error);
    return NextResponse.redirect(new URL("/dashboard/settings?error=slack_callback_error", request.url));
  }
}
