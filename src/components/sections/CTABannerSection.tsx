"use client";

import { Box, Typography, Button, Grid } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PhoneIcon from "@mui/icons-material/Phone";

import { useI18n } from "@/components/provider/I18nProvider";
import OptimizedImage from "@/components/common/OptimizedImage";
import { contactLinks } from "@/config/contact";

import {
  gradientPrimaryLine,
  gradientPrimaryText,
  overlayHeroDark,
  shadowPrimarySoft,
  textPrimaryAlpha,
} from "@/theme/utils";

export default function CTABannerSection() {
  const { t } = useI18n();

  return (
    <Box
      id="cta"
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 9, md: 11 },
      }}
    >
      {/* BG Image */}
      <Box sx={{ position: "absolute", inset: 0 }}>
        <OptimizedImage
          src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1800&auto=format&fit=crop&q=70"
          alt={t.cta.title}
          fill
          sizes="100vw"
          sx={{ objectPosition: "center 40%" }}
        />
      </Box>

      {/* Overlay */}
      <Box
        sx={(theme) => ({
          position: "absolute",
          inset: 0,
          background: overlayHeroDark(theme),
        })}
      />

      {/* Top line */}
      <Box
        sx={(theme) => ({
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: `linear-gradient(90deg, transparent, ${gradientPrimaryLine(theme)}, transparent)`,
        })}
      />

      {/* Bottom line */}
      <Box
        sx={(theme) => ({
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 3,
          background: `linear-gradient(90deg, transparent, ${gradientPrimaryLine(theme)}, transparent)`,
        })}
      />

      {/* Content */}
      <Box
        sx={{ position: "relative", zIndex: 1, px: { xs: 2, sm: 3, md: 5 } }}
      >
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* LEFT */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography
              sx={{
                color: "primary.light",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                mb: 2,
              }}
            >
              {t.cta.eyebrow}
            </Typography>

            <Typography
              variant="h2"
              sx={{
                color: "common.white",
                fontWeight: 800,
                lineHeight: { xs: 1.1, md: 1.3 },
              }}
            >
              {t.cta.title}

              <Box
                component="span"
                sx={(theme) => ({
                  ml: { xs:0, md: 1 },
                  display: { xs: "block", md: "inline" },
                  pt: 2,
                  pr: 2,
                  ...gradientPrimaryText(theme),
                })}
              >
                {t.cta.titleAccent}
              </Box>
            </Typography>
          </Grid>

          {/* RIGHT */}
          <Grid size={{ xs: 12, md: "auto" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 2,
              }}
            >
              {/* Primary CTA */}
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                sx={(theme) => ({
                  py: 1.8,
                  px: 3.5,
                  boxShadow: shadowPrimarySoft(theme),
                })}
              >
                {t.cta.btnQuote}
              </Button>

              {/* Secondary CTA */}
              <Button
                variant="outlined"
                size="large"
                startIcon={<PhoneIcon />}
                component="a"
                href={`tel:${contactLinks.phoneTel}`}
                sx={(theme) => ({
                  py: 1.8,
                  px: 3.5,
                  borderColor: textPrimaryAlpha(theme, 0.35),
                  color: "common.white",
                  borderWidth: "1.5px",

                  "&:hover": {
                    borderColor: "primary.main",
                    background: textPrimaryAlpha(theme, 0.12),
                    color: "primary.light",
                    borderWidth: "1.5px",
                  },
                })}
              >
                {t.cta.btnCall}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
