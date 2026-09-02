import type { Metadata } from 'next';
import { siteConfig } from '@/config/seo';
import type { Locale } from '@/lib/i18n';

interface OpenGraphInput {
  title: string;
  description: string;
  url: string;
  locale: Locale;
  ogAlt?: string;
}

export function buildOpenGraph({
  title,
  description,
  url,
  locale,
  ogAlt,
}: OpenGraphInput): Metadata['openGraph'] {
  const { ogImage, locales } = siteConfig;
  const alt = ogAlt ?? locales[locale].ogAlt;

  return {
    type: 'website',
    locale: locale === 'th' ? 'th_TH' : 'en_US',
    alternateLocale: locale === 'th' ? ['en_US'] : ['th_TH'],
    url,
    siteName: locales[locale].name,
    title,
    description,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt,
      },
    ],
  };
}

export function buildTwitterCard(
  title: string,
  description: string,
): Metadata['twitter'] {
  return {
    card: 'summary_large_image',
    title,
    description,
    images: [siteConfig.ogImage],
  };
}

export function buildSiteVerification(): Metadata['verification'] {
  const google = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
  if (!google) return undefined;
  return { google };
}

export function absoluteAssetUrl(path: string): string {
  if (path.startsWith('http')) return path;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${siteConfig.url}${normalized}`;
}
