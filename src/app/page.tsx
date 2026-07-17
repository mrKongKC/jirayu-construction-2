"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { defaultLocale, LOCALE_STORAGE_KEY } from "@/lib/i18n";

export default function RootRedirect() {
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
    const locale =
      stored === "en" || stored === "th" ? stored : defaultLocale;
    router.replace(`/${locale}`);
  }, [router]);

  return null;
}
