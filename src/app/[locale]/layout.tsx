import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { locales, translations, isValidLocale, type Locale } from "@/lib/i18n";
import { buildLanguageAlternates } from "@/lib/locale-metadata";
import { buildJsonLdGraph } from "@/lib/seo-jsonld";
import { buildOpenGraph, buildTwitterCard } from "@/lib/seo-metadata";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) return {};

  const locale = localeParam as Locale;
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

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) notFound();

  const locale = localeParam as Locale;
  const jsonLd = buildJsonLdGraph(locale);

  return (
    <div lang={locale === "th" ? "th" : "en"}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </div>
  );
}
