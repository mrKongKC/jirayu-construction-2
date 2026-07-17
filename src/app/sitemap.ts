export const dynamic = "force-static";

import { MetadataRoute } from "next";
import { siteConfig } from "@/config/seo";
import { locales } from "@/lib/i18n";

type ChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never"
  | undefined;

interface RouteDefinition {
  path: string;
  changeFrequency: ChangeFrequency;
  priority: number;
}

const routeTemplates: RouteDefinition[] = [
  { path: "", changeFrequency: "weekly", priority: 1.0 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const lastModified = new Date(siteConfig.sitemapLastModified);

  return locales.flatMap((locale) =>
    routeTemplates.map((route) => ({
      url: `${baseUrl}/${locale}${route.path}`,
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
  );
}
