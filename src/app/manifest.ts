export const dynamic = "force-static";

import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/seo';

export default function manifest(): MetadataRoute.Manifest {
  const { locales } = siteConfig;

  return {
    name: locales.th.title,
    short_name: locales.th.name,
    description: locales.th.description,
    start_url: '/th',
    display: 'standalone',
    background_color: '#0F172A',
    theme_color: '#D97706',
    lang: 'th',
    icons: [
      {
        src: '/jirayu.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
      {
        src: '/og-img.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
