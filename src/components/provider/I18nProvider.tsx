'use client';

import React, {
  createContext,
  useContext,
  useCallback,
  useEffect,
  useMemo,
} from 'react';
import { useParams, usePathname, useRouter } from 'next/navigation';
import {
  getTranslations,
  Locale,
  defaultLocale,
  LOCALE_STORAGE_KEY,
  Translations,
  isValidLocale,
} from '@/lib/i18n';
import { switchLocalePath } from '@/lib/locale-path';

interface I18nContextValue {
  locale: Locale;
  t: Translations;
  setLocale: (l: Locale) => void;
  toggleLocale: () => void;
}

const I18nContext = createContext<I18nContextValue>({
  locale: defaultLocale,
  t: getTranslations(defaultLocale),
  setLocale: () => {},
  toggleLocale: () => {},
});

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();

  const paramLocale = params?.locale;
  const urlLocale =
    typeof paramLocale === 'string' && isValidLocale(paramLocale)
      ? paramLocale
      : null;

  const locale = urlLocale ?? defaultLocale;

  useEffect(() => {
    if (urlLocale) {
      localStorage.setItem(LOCALE_STORAGE_KEY, urlLocale);
    }
    document.documentElement.lang = locale;
  }, [urlLocale, locale]);

  const setLocale = useCallback(
    (l: Locale) => {
      localStorage.setItem(LOCALE_STORAGE_KEY, l);
      const onLocaleRoute =
        pathname.startsWith('/th') || pathname.startsWith('/en');
      if (onLocaleRoute) {
        router.push(switchLocalePath(pathname, l));
      } else {
        router.push(`/${l}`);
      }
    },
    [pathname, router],
  );

  const toggleLocale = useCallback(() => {
    setLocale(locale === 'th' ? 'en' : 'th');
  }, [locale, setLocale]);

  const t = useMemo(() => getTranslations(locale), [locale]);

  return (
    <I18nContext.Provider value={{ locale, t, setLocale, toggleLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
