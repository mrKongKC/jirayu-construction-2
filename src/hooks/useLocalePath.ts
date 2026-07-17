'use client';

import { useMemo } from 'react';
import { useParams } from 'next/navigation';
import { defaultLocale, isValidLocale, type Locale } from '@/lib/i18n';
import { localePath } from '@/lib/locale-path';

export function useLocalePath() {
  const params = useParams();
  const paramLocale = params?.locale;
  const locale = (
    typeof paramLocale === 'string' && isValidLocale(paramLocale)
      ? paramLocale
      : defaultLocale
  ) as Locale;

  const toLocalePath = useMemo(
    () => (path: string) => localePath(locale, path),
    [locale],
  );

  return { locale, toLocalePath };
}
