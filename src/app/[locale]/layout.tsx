import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { locales, translations, isValidLocale, type Locale } from "@/lib/i18n";
import { siteConfig } from "@/config/seo";

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
  const { name, url, ogImage, seo } = siteConfig;

  return {
    title: {
      default: t.siteTitle,
      template: `%s | ${t.title}`,
    },
    description: t.siteDesc,
    keywords: t.keywords,
    alternates: {
      canonical: `${url}/${locale}`,
      languages: {
        "th-TH": `${url}/th`,
        "en-US": `${url}/en`,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "th" ? "th_TH" : "en_US",
      alternateLocale: locale === "th" ? ["en_US"] : ["th_TH"],
      url: `${url}/${locale}`,
      siteName: name,
      title: t.siteTitle,
      description: t.siteDesc,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: seo.ogAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t.siteTitle,
      description: t.siteDesc,
      images: [ogImage],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  return children;
}
