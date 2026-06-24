import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Lightweight In-Memory Rate Limiter
// Note: This works well for single-instance deployments (like Render Free Tier).
// For multi-instance scaling, replace this with a Redis-based solution (e.g., Upstash).

const WINDOW_SIZE_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 60; // 60 requests per minute

interface RateLimitTracker {
  count: number;
  resetTime: number;
}

// In-memory store mapping IP addresses to their request trackers
const ipTracker = new Map<string, RateLimitTracker>();

export function proxy(request: NextRequest) {
  // Retrieve the client IP (Render uses x-forwarded-for)
  const ip = request.ip || request.headers.get('x-forwarded-for') || '127.0.0.1';
  const now = Date.now();

  let tracker = ipTracker.get(ip);

  // If IP is not tracked yet, initialize it
  if (!tracker) {
    tracker = { count: 1, resetTime: now + WINDOW_SIZE_MS };
    ipTracker.set(ip, tracker);
    return NextResponse.next();
  }

  // If the time window has passed, reset the count
  if (now > tracker.resetTime) {
    tracker.count = 1;
    tracker.resetTime = now + WINDOW_SIZE_MS;
    return NextResponse.next();
  }

  // Increment the request count
  tracker.count++;

  // If the count exceeds the maximum, block the request
  if (tracker.count > MAX_REQUESTS_PER_WINDOW) {
    return new NextResponse(
      JSON.stringify({ error: 'Too many requests. Please try again later.' }),
      {
        status: 429,
        headers: {
          'Content-Type': 'application/json',
          'Retry-After': Math.ceil((tracker.resetTime - now) / 1000).toString(),
        },
      }
    );
  }

  // Optional: Clean up old entries periodically to prevent memory leaks in the Map
  if (ipTracker.size > 10000) {
    // Basic cleanup: clear map if it gets too large (to prevent memory exhaustion)
    ipTracker.clear();
  }

  return NextResponse.next();
}

// Only apply the rate limiter to sensitive routes: API, Login, and Signup
export const config = {
  matcher: ['/api/:path*', '/login', '/signup'],
};
