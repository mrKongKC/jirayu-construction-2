"use client";

import { Box } from "@mui/material";
import { useEffect, useRef } from "react";
import { useI18n } from "@/components/provider/I18nProvider";
import OptimizedImage from "@/components/common/OptimizedImage";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&auto=format&fit=crop&q=80";

export default function ParallaxImage() {
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fn = () => {
      if (ref.current) {
        ref.current.style.transform = `translateY(${window.scrollY * 0.35}px)`;
      }
    };

    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <Box
      ref={ref}
      sx={{
        position: "absolute",
        inset: "-20%",
        zIndex: 0,
        willChange: "transform",
      }}
    >
      <OptimizedImage
        src={HERO_IMAGE}
        alt={t.common.alt.hero}
        fill
        priority
        sizes="100vw"
      />
    </Box>
  );
}
