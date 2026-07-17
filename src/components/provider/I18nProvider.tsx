'use client';

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useMemo,
} from 'react';
import {
  getTranslations,
  Locale,
  defaultLocale,
  LOCALE_STORAGE_KEY,
  Translations,
} from '@/lib/i18n';

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
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLocaleState(readStoredLocale());
    setMounted(true);
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    localStorage.setItem(LOCALE_STORAGE_KEY, l);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocaleState((prev) => {
      const next = prev === 'th' ? 'en' : 'th';
      localStorage.setItem(LOCALE_STORAGE_KEY, next);
      return next;
    });
  }, []);

  const t = useMemo(() => getTranslations(locale), [locale]);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.lang = locale;
    document.title = t.siteTitle;
  }, [locale, t.siteTitle, mounted]);

  return (
    <I18nContext.Provider value={{ locale, t, setLocale, toggleLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
