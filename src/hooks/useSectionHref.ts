"use client";

import { useCallback } from "react";
import { usePathname } from "next/navigation";
import { isHomePathname } from "@/lib/locale-path";
import { useLocalePath } from "@/hooks/useLocalePath";

export function useSectionHref() {
  const pathname = usePathname();
  const { toLocalePath } = useLocalePath();

  return useCallback(
    (hash: string) => {
      const anchor = hash.startsWith("#") ? hash : `#${hash}`;
      return isHomePathname(pathname)
        ? anchor
        : `${toLocalePath("")}${anchor}`;
    },
    [pathname, toLocalePath],
  );
}
