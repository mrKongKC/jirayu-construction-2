import type { Metadata } from 'next';
import { translations, type Locale } from '@/lib/i18n';
import { localePath } from '@/lib/locale-path';
import { siteConfig } from '@/config/seo';

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

  return {
    title: content.title,
    description: content.metaDescription,
    alternates,
    openGraph: {
      title: content.title,
      description: content.metaDescription,
      locale: locale === 'th' ? 'th_TH' : 'en_US',
      alternateLocale: locale === 'th' ? ['en_US'] : ['th_TH'],
      url: alternates.canonical,
    },
  };
}

export { buildLanguageAlternates };
