"use client";

import { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  IconButton,
  Avatar,
} from "@mui/material";

import { useI18n } from "@/components/provider/I18nProvider";

import Section from "@/components/layouts/Section";
import SectionHeader from "@/components/common/SectionHeader";

import {
  textSecondarySoft,
  textPrimaryAlpha,
  sectionSpacing,
  gridSpacing,
  borderPrimaryLight,
  bgPrimarySoft,
  gradientPrimarySoftAlt,
} from "@/theme/utils";

import StarIcon from "@mui/icons-material/Star";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function ReviewsSection() {
  const { t } = useI18n();
  const reviews = t.reviews.items;
  const [active, setActive] = useState(0);

  const prev = () =>
    setActive((a) => (a - 1 + reviews.length) % reviews.length);
  const next = () => setActive((a) => (a + 1) % reviews.length);

  return (
    <Section id="reviews" bg="default">
      <SectionHeader
        eyebrow={t.reviews.eyebrow}
        title={t.reviews.title}
        titleAccent={t.reviews.titleAccent}
        mb={sectionSpacing.header}
      />

      <Grid container spacing={gridSpacing.lg} alignItems="center">
        {/* Main card */}
        <Grid size={{ xs: 12, lg: 7 }}>
          <Box
            sx={(theme) => ({
              p: { xs: 4, md: 6 },
              background: theme.palette.background.paper,
              borderRadius: 3,
              border: borderPrimaryLight(theme),
              position: "relative",
              overflow: "hidden",
            })}
          >
            {/* BG quote */}
            <Box
              sx={{
                position: "absolute",
                top: -10,
                right: 20,
                opacity: 0.04,
              }}
            >
              <FormatQuoteIcon
                sx={{ fontSize: "12rem", color: "primary.main" }}
              />
            </Box>

            <FormatQuoteIcon
              sx={{
                color: "primary.main",
                fontSize: "2.5rem",
                opacity: 0.5,
                mb: 2,
              }}
            />

            {/* Stars */}
            <Box sx={{ display: "flex", gap: 0.5, mb: 3 }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon
                  key={i}
                  sx={{ color: "primary.light", fontSize: "1rem" }}
                />
              ))}
            </Box>

            {/* Text */}
            <Typography
              sx={{
                lineHeight: 1.9,
                fontStyle: "italic",
                mb: 4,
                minHeight: 100,
              }}
            >
              "{reviews[active].text}"
            </Typography>

            {/* Divider */}
            <Box
              sx={{
                width: 32,
                height: 3,
                background: "primary.main",
                borderRadius: 2,
                mb: 3,
              }}
            />

            {/* User */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Avatar
                  sx={(theme) => ({
                    background: gradientPrimarySoftAlt(theme),
                    color: "common.white",
                    fontWeight: 700,
                    width: 48,
                    height: 48,
                  })}
                >
                  {reviews[active].avatar}
                </Avatar>

                <Box>
                  <Typography sx={{ fontWeight: 700 }}>
                    {reviews[active].name}
                  </Typography>

                  <Typography
                    sx={(theme) => ({
                      color: textSecondarySoft(theme),
                    })}
                  >
                    {reviews[active].role}
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={(theme) => ({
                  px: 2,
                  py: 0.75,
                  background: bgPrimarySoft(theme),
                  borderRadius: 2,
                  border: borderPrimaryLight(theme),
                })}
              >
                <Typography
                  sx={{
                    fontWeight: 600,
                    color: "primary.main",
                  }}
                >
                  {reviews[active].project}
                </Typography>
              </Box>
            </Box>

            {/* Nav */}
            <Box sx={{ display: "flex", gap: 1.5, mt: 4 }}>
              <IconButton
                size="small"
                onClick={prev}
                sx={(theme) => ({
                  border: `1.5px solid ${textPrimaryAlpha(theme, 0.25)}`,
                  borderRadius: 2,
                  color: "text.secondary",
                  "&:hover": {
                    background: textPrimaryAlpha(theme, 0.08),
                    borderColor: "primary.main",
                    color: "primary.main",
                  },
                })}
              >
                <ArrowBackIcon fontSize="small" />
              </IconButton>

              <IconButton
                size="small"
                onClick={next}
                sx={(theme) => ({
                  border: `1.5px solid ${textPrimaryAlpha(theme, 0.25)}`,
                  borderRadius: 2,
                  color: "text.secondary",
                  "&:hover": {
                    background: textPrimaryAlpha(theme, 0.08),
                    borderColor: "primary.main",
                    color: "primary.main",
                  },
                })}
              >
                <ArrowForwardIcon fontSize="small" />
              </IconButton>

              {/* Dots */}
              <Box sx={{ display: "flex", gap: 1, ml: 2 }}>
                {reviews.map((_, i) => (
                  <Box
                    key={i}
                    onClick={() => setActive(i)}
                    sx={(theme) => ({
                      width: i === active ? 20 : 6,
                      height: 6,
                      borderRadius: 3,
                      background:
                        i === active
                          ? theme.palette.primary.main
                          : textPrimaryAlpha(theme, 0.25),
                      cursor: "pointer",
                    })}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        </Grid>

        {/* List */}
        <Grid size={{ xs: 12, lg: 5 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {reviews.map((r, i) => (
              <Box
                key={i}
                onClick={() => setActive(i)}
                sx={(theme) => ({
                  p: 2.5,
                  borderRadius: 2,
                  cursor: "pointer",
                  border:
                    i === active
                      ? borderPrimaryLight(theme)
                      : `1px solid ${textPrimaryAlpha(theme, 0.08)}`,
                  background:
                    i === active
                      ? bgPrimarySoft(theme)
                      : theme.palette.background.paper,
                  display: "flex",
                  gap: 2,
                  alignItems: "center",
                })}
              >
                <Avatar
                  sx={(theme) => ({
                    background:
                      i === active
                        ? gradientPrimarySoftAlt(theme)
                        : textPrimaryAlpha(theme, 0.07),
                    color: i === active ? "common.white" : "text.secondary",
                    fontWeight: 700,
                    width: 40,
                    height: 40,
                  })}
                >
                  {r.avatar}
                </Avatar>

                <Box sx={{ flex: 1 }}>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      color: i === active ? "text.primary" : "text.secondary",
                    }}
                  >
                    {r.name}
                  </Typography>

                  <Typography
                    sx={(theme) => ({
                      color: textSecondarySoft(theme),
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    })}
                  >
                    {r.project}
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", gap: 0.25 }}>
                  {Array.from({ length: 5 }).map((_, j) => (
                    <StarIcon
                      key={j}
                      sx={(theme) => ({
                        fontSize: "0.7rem",
                        color:
                          i === active
                            ? theme.palette.primary.light
                            : textPrimaryAlpha(theme, 0.3),
                      })}
                    />
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Section>
  );
}