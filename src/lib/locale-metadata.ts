import type { Metadata } from 'next';
import { translations, type Locale } from '@/lib/i18n';
import { localePath } from '@/lib/locale-path';
import { siteConfig } from '@/config/seo';
import { buildOpenGraph, buildTwitterCard } from '@/lib/seo-metadata';

function buildLanguageAlternates(locale: Locale, path = '') {
  const { url } = siteConfig;
  const canonicalPath = localePath(locale, path);

  return {
    canonical: `${url}${canonicalPath}`,
    languages: {
      'x-default': `${url}${localePath('th', path)}`,
      'th-TH': `${url}${localePath('th', path)}`,
      'en-US': `${url}${localePath('en', path)}`,
    },
  };
}

export function buildLegalMetadata(
  locale: Locale,
  type: 'privacy' | 'terms',
): Metadata {
  const content = translations[locale].legal[type];
  const alternates = buildLanguageAlternates(locale, type);
  const title = content.title;
  const description = content.metaDescription;

  return {
    title,
    description,
    alternates,
    openGraph: buildOpenGraph({
      title,
      description,
      url: alternates.canonical,
      locale,
    }),
    twitter: buildTwitterCard(title, description),
  };
}

export { buildLanguageAlternates };
