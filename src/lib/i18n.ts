import th from '@/locales/th.json';
import en from '@/locales/en.json';

export type Locale = 'th' | 'en';

export const defaultLocale: Locale = 'th';
export const locales: Locale[] = ['th', 'en'];

export type Translations = typeof th;

export const translations: Record<Locale, Translations> = { th, en };

export const LOCALE_STORAGE_KEY = 'locale';

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export function formatCopyright(template: string, year = new Date().getFullYear()) {
  return template.replace('{year}', String(year));
}

export function getTranslations(locale: Locale): Translations {
  const base = translations[locale];
  return {
    ...base,
    footer: {
      ...base.footer,
      copyright: formatCopyright(base.footer.copyright),
    },
  };
}
