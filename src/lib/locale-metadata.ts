import type { Metadata } from 'next';
import { translations, type Locale } from '@/lib/i18n';
import { localePath } from '@/lib/locale-path';
import { siteConfig } from '@/config/seo';

export function buildLegalMetadata(
  locale: Locale,
  type: 'privacy' | 'terms',
): Metadata {
  const content = translations[locale].legal[type];
  const path = localePath(locale, type);
  const { url } = siteConfig;

  return {
    title: content.title,
    description: content.metaDescription,
    alternates: {
      canonical: `${url}${path}`,
      languages: {
        'th-TH': `${url}${localePath('th', type)}`,
        'en-US': `${url}${localePath('en', type)}`,
      },
    },
    openGraph: {
      title: content.title,
      description: content.metaDescription,
      locale: locale === 'th' ? 'th_TH' : 'en_US',
      alternateLocale: locale === 'th' ? ['en_US'] : ['th_TH'],
      url: `${url}${path}`,
    },
  };
}
