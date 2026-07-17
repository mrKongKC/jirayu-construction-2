'use client';

import React, {
  createContext,
  useContext,
  useState,
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

function readStoredLocale(): Locale {
  if (typeof window === 'undefined') return defaultLocale;
  const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
  return stored === 'en' || stored === 'th' ? stored : defaultLocale;
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();

  const paramLocale = params?.locale;
  const urlLocale =
    typeof paramLocale === 'string' && isValidLocale(paramLocale)
      ? paramLocale
      : null;

  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (urlLocale) {
      setLocaleState(urlLocale);
      localStorage.setItem(LOCALE_STORAGE_KEY, urlLocale);
      return;
    }
    if (mounted) {
      setLocaleState(readStoredLocale());
    }
  }, [urlLocale, mounted]);

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

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.lang = locale;
  }, [locale, mounted]);

  return (
    <I18nContext.Provider value={{ locale, t, setLocale, toggleLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
