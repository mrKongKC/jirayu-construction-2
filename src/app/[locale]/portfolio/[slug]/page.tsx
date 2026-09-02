import { notFound } from "next/navigation";
import PageShell from "@/components/layouts/PageShell";
import PortfolioDetailPage from "@/components/pages/PortfolioDetailPage";
import JsonLd from "@/components/seo/JsonLd";
import {
  getAllPortfolioSlugs,
  getPortfolioProject,
} from "@/config/portfolio";
import { buildPortfolioMetadata } from "@/lib/portfolio-metadata";
import { buildPortfolioJsonLd } from "@/lib/seo-jsonld";
import { isValidLocale, locales, type Locale } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getAllPortfolioSlugs().map((slug) => ({ locale, slug })),
  );
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: localeParam, slug } = await params;
  if (!isValidLocale(localeParam)) return {};
  return buildPortfolioMetadata(localeParam as Locale, slug);
}

export default async function PortfolioProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: localeParam, slug } = await params;
  if (!isValidLocale(localeParam)) notFound();

  const locale = localeParam as Locale;
  const project = getPortfolioProject(slug, locale);
  if (!project) notFound();

  const jsonLd = buildPortfolioJsonLd(locale, slug);

  return (
    <PageShell>
      {jsonLd && <JsonLd id={`jsonld-portfolio-${slug}`} data={jsonLd} />}
      <PortfolioDetailPage project={project} />
    </PageShell>
  );
}
