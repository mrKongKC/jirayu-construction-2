import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isValidLocale, localeStaticParams, type Locale } from "@/lib/i18n";
import { buildLocaleRootMetadata } from "@/lib/seo/page-metadata";

export function generateStaticParams() {
  return localeStaticParams();
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) return {};
  return buildLocaleRootMetadata(localeParam as Locale);
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

  const lang = localeParam === "th" ? "th" : "en";

  return <div lang={lang}>{children}</div>;
}
