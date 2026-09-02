"use client";

import { Box } from "@mui/material";
import { useI18n } from "@/components/provider/I18nProvider";
import OptimizedImage from "@/components/common/OptimizedImage";
import { siteImages } from "@/config/images";

export default function ParallaxImage() {
  const { t } = useI18n();

  return (
    <Box
      sx={{
        position: "absolute",
        inset: "-20%",
        zIndex: 0,
        transform: "translateY(var(--hero-parallax, 0px))",
        willChange: "transform",

        "@media (prefers-reduced-motion: reduce)": {
          transform: "none",
        },
      }}
    >
      <OptimizedImage
        src={siteImages.hero}
        alt={t.common.alt.hero}
        fill
        priority
        sizes="100vw"
      />
    </Box>
  );
}
