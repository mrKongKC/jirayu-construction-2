import { Locale, locales } from '@/lib/i18n';

export function isLocalePrefix(segment: string): segment is Locale {
  return locales.includes(segment as Locale);
}

export function switchLocalePath(pathname: string, locale: Locale): string {
  const parts = pathname.split('/').filter(Boolean);
  const segment = parts[0];
  const hasLocalePrefix = segment && isLocalePrefix(segment);
  if (hasLocalePrefix) {
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

export function stripLocalePrefix(pathname: string): string {
  const parts = pathname.split('/').filter(Boolean);
  if (parts[0] && isLocalePrefix(parts[0])) {
    parts.shift();
  }
  return parts.length ? `/${parts.join('/')}` : '/';
}

export function isHomePathname(pathname: string): boolean {
  const segments = pathname.split('/').filter(Boolean);
  return segments.length === 1 && isLocalePrefix(segments[0]);
}
