import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { getPortfolioProject } from "@/config/portfolio";
import { absoluteAssetUrl } from "@/lib/seo-metadata";
import { buildPageMetadata } from "@/lib/seo/page-metadata";

export function buildPortfolioMetadata(
  locale: Locale,
  slug: string,
): Metadata {
  const project = getPortfolioProject(slug, locale);
  if (!project) return {};

  return buildPageMetadata({
    locale,
    path: `/portfolio/${slug}`,
    title: project.metaTitle,
    description: project.metaDescription,
    ogImage: absoluteAssetUrl(project.cover),
    openGraphType: "article",
  });
}
