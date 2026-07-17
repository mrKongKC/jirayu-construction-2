"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { updateMetaDescription } from "@/lib/document-meta";
import { useI18n } from "@/components/provider/I18nProvider";

export function useDocumentMeta(title: string, description?: string) {
  const { locale } = useI18n();

  useEffect(() => {
    document.title = title;
    if (description) {
      updateMetaDescription(description);
    }
  }, [title, description, locale]);
}

export function useHomeDocumentMeta() {
  const { t, locale } = useI18n();
  const pathname = usePathname();
  const isHome = /^\/(th|en)\/?$/.test(pathname);

  useEffect(() => {
    if (!isHome) return;
    document.title = t.siteTitle;
    updateMetaDescription(t.siteDesc);
  }, [isHome, locale, t.siteTitle, t.siteDesc]);
}
