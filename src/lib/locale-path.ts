import { Locale, locales } from '@/lib/i18n';

export function isLocalePrefix(segment: string): segment is Locale {
  return locales.includes(segment as Locale);
}

export function getLocaleFromPathname(pathname: string): Locale | null {
  const segment = pathname.split('/').filter(Boolean)[0];
  return segment && isLocalePrefix(segment) ? segment : null;
}

export function switchLocalePath(pathname: string, locale: Locale): string {
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length > 0 && isLocalePrefix(parts[0])) {
    parts[0] = locale;
  } else {
    parts.unshift(locale);
  }
  return `/${parts.join('/')}`;
}

export function localePath(locale: Locale, path = ''): string {
  const normalized = path.startsWith('/') ? path.slice(1) : path;
  return normalized ? `/${locale}/${normalized}` : `/${locale}`;
}
