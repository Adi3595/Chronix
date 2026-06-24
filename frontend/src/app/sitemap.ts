import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://chronix-os.onrender.com";

  const now = new Date();

  // Public-facing pages (will be indexed by search engines)
  const publicRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/login`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/signup`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Auth-gated dashboard pages (lower priority, but listed for completeness)
  const dashboardRoutes: MetadataRoute.Sitemap = [
    "/dashboard",
    "/dashboard/tasks",
    "/dashboard/goals",
    "/dashboard/analytics",
    "/dashboard/calendar",
    "/dashboard/agent-hub",
    "/dashboard/future-self",
    "/dashboard/rescue-center",
    "/dashboard/settings",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  return [...publicRoutes, ...dashboardRoutes];
}

