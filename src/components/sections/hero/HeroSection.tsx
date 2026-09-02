"use client";

import { Box, Button, Container, Typography } from "@mui/material";
import { useI18n } from "@/components/provider/I18nProvider";

import HeroOverlay from "./HeroOverlay";
import DecorCircle from "./DecorCircle";
import GlassBar from "./GlassBar";
import HeroTitle from "./HeroTitle";
import PrimaryButton from "@/components/common/PrimaryButton";
import SectionEyebrow from "@/components/common/SectionEyebrow";
import ParallaxImage from "./ParallaxImage";
import TopGradientLine from "./TopGradientLine";
import StatsGrid from "./StatsGrid";

import { fadeUp } from "@/theme/animations";
import { bgPrimarySoft, borderWhiteSoft, textWhiteStrong } from "@/theme/utils";

export default function HeroSection() {
  const { t } = useI18n();

  return (
    <Box
      id="hero"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        overflow: "hidden",
        background: "background.inverse",
      }}
    >
      {/* Background */}
      <ParallaxImage />
      <HeroOverlay />
      <TopGradientLine />
      <DecorCircle />

      {/* Content */}
      <Container
        id="hero-content"
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 3,
          pt: { xs: 14, md: 9 },
          pb: { xs: 6, md: 8 },
          px: { xs: 3, sm: 3, md: 8, lg: 12 },
        }}
      >
        <Box
          sx={{
            maxWidth: { xs: "100%", md: "60%", xl: "52%" },
            pl: 0,
          }}
        >
          {/* Eyebrow */}
          <Box sx={fadeUp(0.15)}>
            <SectionEyebrow title={t.hero.eyebrow} />
          </Box>

          {/* Title */}
          <Box
            sx={{
              ...fadeUp(0.3),
              display: "flex",
              flexDirection: "column",
              gap: { xs: 0.25, md: 0 },
            }}
          >
            <HeroTitle component="h1">{t.hero.line1}</HeroTitle>
            <HeroTitle gradient component="span">{t.hero.line2}</HeroTitle>
            <HeroTitle component="span">{t.hero.line3}</HeroTitle>
          </Box>

          {/* Subtitle */}
          <Box sx={fadeUp(0.5)}>
            <Typography
              sx={(theme) => ({
                color: textWhiteStrong(theme),
                fontSize: { xs: "0.95rem", md: "1.05rem" },
                lineHeight: 1.85,
                maxWidth: 480,
                mt: 3,
              })}
            >
              {t.hero.sub}
            </Typography>
          </Box>

          {/* Tags */}
          <Box
            sx={{
              ...fadeUp(0.6),
              display: "flex",
              flexWrap: "wrap",
              gap: 1.5,
              mt: 3,
            }}
          >
            {t.hero.tags.map((tag) => (
              <Box
                key={tag}
                component="span"
                sx={(theme) => ({
                  px: 2,
                  py: 0.75,
                  borderRadius: "999px",
                  border: borderWhiteSoft(theme),
                  background: bgPrimarySoft(theme),
                  color: textWhiteStrong(theme),
                  fontSize: "0.78rem",
                  fontWeight: 500,
                })}
              >
                {tag}
              </Box>
            ))}
          </Box>

          {/* CTA */}
          <Box
            sx={{
              ...fadeUp(0.75),
              display: "flex",
              flexWrap: "wrap",
              gap: { xs: 1.5, sm: 2 },
              mt: { xs: 4, md: 5 },
            }}
          >
            <PrimaryButton component="a" href="#contact">
              {t.hero.ctaPrimary}
            </PrimaryButton>
            <Button
              variant="outlined"
              size="large"
              component="a"
              href="#portfolio"
              sx={(theme) => ({
                fontSize: "0.875rem",
                py: { xs: 1.75, md: 2 },
                px: { xs: 3, md: 3.5 },
                border: borderWhiteSoft(theme),
                color: "common.white",

                "&:hover": {
                  borderColor: theme.palette.primary.main,
                  background: bgPrimarySoft(theme),
                  color: theme.palette.primary.light,
                },
              })}
            >
              {t.hero.ctaSecondary}
            </Button>
          </Box>
        </Box>
      </Container>

      {/* Bottom Stats */}
      <GlassBar>
        <StatsGrid />
      </GlassBar>
    </Box>
  );
}
