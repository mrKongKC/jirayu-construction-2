"use client";

import { useEffect } from "react";
import { useI18n } from "@/components/provider/I18nProvider";
import { buildJsonLdGraph } from "@/lib/seo-jsonld";

const SCRIPT_ID = "json-ld";

export default function JsonLdScript() {
  const { locale } = useI18n();

  useEffect(() => {
    const graph = buildJsonLdGraph(locale);
    let script = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(graph);
  }, [locale]);

  return null;
}
