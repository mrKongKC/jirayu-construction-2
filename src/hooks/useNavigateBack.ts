"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { useLocalePath } from "@/hooks/useLocalePath";

export function useNavigateBack(fallbackPath = "") {
  const router = useRouter();
  const { toLocalePath } = useLocalePath();

  return useCallback(() => {
    if (window.history.length > 1) {
      router.back();
      return;
    }
    router.push(toLocalePath(fallbackPath));
  }, [router, toLocalePath, fallbackPath]);
}
