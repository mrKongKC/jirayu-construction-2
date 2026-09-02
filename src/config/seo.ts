import th from "@/locales/th.json";
import en from "@/locales/en.json";

function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (explicit) return explicit;

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  if (process.env.NODE_ENV === "production") {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL must be set for production builds so canonicals, sitemap, and JSON-LD are not localhost.",
    );
  }

  return "http://localhost:3000";
}

export const siteConfig = {
  name: th.title,
  url: getSiteUrl(),
  ogImage: "/og-img.png",
  sitemapLastModified: "2026-09-02",

  locales: {
    th: {
      name: th.title,
      title: th.siteTitle,
      description: th.siteDesc,
      ogAlt: th.ogAlt,
      keywords: th.keywords,
    },
    en: {
      name: en.title,
      title: en.siteTitle,
      description: en.siteDesc,
      ogAlt: en.ogAlt,
      keywords: en.keywords,
    },
  },
};
