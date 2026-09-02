"use client";

import { useEffect } from "react";
import Link from "next/link";
import { defaultLocale, isValidLocale, LOCALE_STORAGE_KEY } from "@/lib/i18n";

export default function RootRedirect() {
  useEffect(() => {
    try {
      const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
      const locale = stored && isValidLocale(stored) ? stored : defaultLocale;
      window.location.replace(`/${locale}`);
    } catch {
      window.location.replace(`/${defaultLocale}`);
    }
  }, []);

  return (
    <p style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <Link href={`/${defaultLocale}`}>ไปยังหน้าแรก / Go to homepage</Link>
    </p>
  );
}
