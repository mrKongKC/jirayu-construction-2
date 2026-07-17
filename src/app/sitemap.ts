export const dynamic = 'force-static';
// export const dynamic = "force-dynamic";

import { MetadataRoute } from "next";
import { siteConfig } from "@/config/seo"; 

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

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const routes: RouteDefinition[] = [
    {
      path: "", 
      changeFrequency: "weekly", 
      priority: 1.0, 
    },
    /* 
    {
      path: "/portfolio",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    */
  ];

  const sitemapData: MetadataRoute.Sitemap = routes.map((route) => {
    return {
      url: `${baseUrl}${route.path}`,
      lastModified: new Date(), 
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    };
  });

  return sitemapData;
}
