import th from "@/locales/th.json";
import en from "@/locales/en.json";
import { contactLinks } from "@/config/contact";

function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
}

export const siteConfig = {
  name: th.title,
  url: getSiteUrl(),
  ogImage: "/og-img.png",
  contact: contactLinks,

  seo: {
    title: th.siteTitle,
    titleTemplate: `%s | ${th.title}`,
    description: th.siteDesc,
    keywords: th.keywords,
    ogAlt: th.ogAlt,
  },

  business: {
    phone: contactLinks.phone,
    address: {
      locality: "เมืองน่าน",
      region: "น่าน",
      postalCode: "55000",
      country: "TH",
    },
    geo: {
      latitude: "18.7756",
      longitude: "100.7730",
    },
    openingHours: {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "17:00",
    },
  },

  locales: {
    th: {
      name: th.title,
      title: th.siteTitle,
      description: th.siteDesc,
      ogAlt: th.ogAlt,
    },
    en: {
      name: en.title,
      title: en.siteTitle,
      description: en.siteDesc,
      ogAlt: en.ogAlt,
    },
  },
};
