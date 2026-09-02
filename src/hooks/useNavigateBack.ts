"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { useLocalePath } from "@/hooks/useLocalePath";
import { stripLocalePrefix } from "@/lib/locale-path";

function readPrevPath() {
  try {
    return sessionStorage.getItem("nav:prevPath");
  } catch {
    return null;
  }
}

export function useNavigateBack(fallbackPath = "", fallbackHash = "") {
  const router = useRouter();
  const { toLocalePath } = useLocalePath();

  return useCallback(() => {
    const fallback = `${toLocalePath(fallbackPath)}${fallbackHash}`;
    const idx = (window.history.state as { idx?: number } | null)?.idx;
    const previous = readPrevPath();
    const current = stripLocalePrefix(window.location.pathname);
    const previousPath = previous ? stripLocalePrefix(previous) : null;
    const previousWasLocaleSwap = previousPath === current;
    const canUseHistory =
      typeof idx === "number" ? idx > 0 : window.history.length > 1;

    if (canUseHistory && !previousWasLocaleSwap) {
      router.back();
      return;
    }

    router.replace(fallback);
  }, [router, toLocalePath, fallbackPath, fallbackHash]);
}
