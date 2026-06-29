import { NextResponse } from "next/server";

export async function GET() {
  const clientId = process.env.SLACK_CLIENT_ID;
  
  if (!clientId) {
    return NextResponse.json({ error: "Missing Slack Client ID in environment variables" }, { status: 500 });
  }

  // The scopes we need for Nova and Sentinel to function properly
  const botScopes = ["channels:history", "channels:read", "chat:write"].join(",");
  const userScopes = ["channels:history", "dnd:write", "search:read", "users.profile:write"].join(",");
  
  // Base Slack OAuth URL
  const slackOAuthUrl = new URL("https://slack.com/oauth/v2/authorize");
  slackOAuthUrl.searchParams.append("client_id", clientId);
  slackOAuthUrl.searchParams.append("scope", botScopes);
  slackOAuthUrl.searchParams.append("user_scope", userScopes);
  // Optionally, you can pass state here to verify the callback (e.g. CSRF token or user ID)
  // slackOAuthUrl.searchParams.append("state", "random_state_string");

  // Redirect user to Slack authorization page
  return NextResponse.redirect(slackOAuthUrl.toString());
}
