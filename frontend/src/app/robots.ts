import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/login"],
      disallow: ["/dashboard/", "/api/"],
    },
    sitemap: "https://chronix-os.vercel.app/sitemap.xml",
  };
}
