import PageShell from "@/components/layouts/PageShell";
import LegalPage from "@/components/pages/LegalPage";
import JsonLd from "@/components/seo/JsonLd";
import { buildLegalMetadata } from "@/lib/seo/page-metadata";
import { buildLegalJsonLd } from "@/lib/seo-jsonld";
import { isValidLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  return buildLegalMetadata(locale as Locale, "privacy");
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) notFound();

  const locale = localeParam as Locale;
  const jsonLd = buildLegalJsonLd(locale, "privacy");

  return (
    <PageShell>
      <JsonLd id="jsonld-privacy" data={jsonLd} />
      <LegalPage type="privacy" />
    </PageShell>
  );
}
