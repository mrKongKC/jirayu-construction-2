import type { Metadata } from "next";
import { siteConfig } from "@/config/seo";
import { localePath } from "@/lib/locale-path";
import { translations, type Locale } from "@/lib/i18n";
import { buildOpenGraph, buildTwitterCard } from "@/lib/seo-metadata";

export function buildLanguageAlternates(locale: Locale, path = "") {
  const { url } = siteConfig;
  const canonicalPath = localePath(locale, path);

  return {
    canonical: `${url}${canonicalPath}`,
    languages: {
      "x-default": `${url}${localePath("th", path)}`,
      "th-TH": `${url}${localePath("th", path)}`,
      "en-US": `${url}${localePath("en", path)}`,
    },
  };
}

interface PageMetadataInput {
  locale: Locale;
  path?: string;
  title: string;
  description: string;
  ogImage?: string;
  openGraphType?: "website" | "article";
}

export function buildPageMetadata({
  locale,
  path = "",
  title,
  description,
  ogImage,
  openGraphType = "website",
}: PageMetadataInput): Metadata {
  const alternates = buildLanguageAlternates(locale, path);
  const defaultOg = buildOpenGraph({
    title,
    description,
    url: alternates.canonical,
    locale,
  });

  const images = ogImage
    ? [{ url: ogImage, width: 1200, height: 630, alt: title }]
    : defaultOg?.images;

  return {
    title,
    description,
    alternates,
    openGraph: {
      ...defaultOg,
      type: openGraphType,
      images,
    },
    twitter: {
      ...buildTwitterCard(title, description),
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

export function buildLocaleRootMetadata(locale: Locale): Metadata {
  const t = translations[locale];
  const alternates = buildLanguageAlternates(locale);

  return {
    title: {
      default: t.siteTitle,
      template: `%s | ${t.title}`,
    },
    description: t.siteDesc,
    keywords: t.keywords,
    alternates,
    openGraph: buildOpenGraph({
      title: t.siteTitle,
      description: t.siteDesc,
      url: alternates.canonical,
      locale,
    }),
    twitter: buildTwitterCard(t.siteTitle, t.siteDesc),
  };
}

export function buildLegalMetadata(
  locale: Locale,
  type: "privacy" | "terms",
): Metadata {
  const content = translations[locale].legal[type];
  return buildPageMetadata({
    locale,
    path: type,
    title: content.title,
    description: content.metaDescription,
  });
}
