"use client";

import { useState } from "react";
import Link from "next/link";
import Masonry from "@mui/lab/Masonry";
import { Box, Typography, Tabs, Tab } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import { useI18n } from "@/components/provider/I18nProvider";
import { useLocalePath } from "@/hooks/useLocalePath";
import {
  getPortfolioCategories,
  getPortfolioProjects,
} from "@/config/portfolio";

import Section from "@/components/layouts/Section";
import SectionHeader from "@/components/common/SectionHeader";
import OptimizedImage from "@/components/common/OptimizedImage";
import { gridSpacing } from "@/theme/utils";

export default function PortfolioSection() {
  const { t, locale } = useI18n();
  const { toLocalePath } = useLocalePath();
  const [tab, setTab] = useState(0);

  const cats = getPortfolioCategories(locale);
  const projects = getPortfolioProjects(locale);

  const filtered =
    tab === 0 ? projects : projects.filter((p) => p.typeLabel === cats[tab]);

  return (
    <Section id="portfolio" bg="paper">
      <SectionHeader
        eyebrow={t.portfolio.eyebrow}
        title={t.portfolio.title}
        titleAccent={t.portfolio.titleAccent}
        mb={{ xs: 4, md: 5 }}
      />

      <Box
        sx={(theme) => ({
          borderBottom: `2px solid ${theme.palette.divider}`,
          mb: { xs: 4, md: 5 },
          mx: { xs: -0.5, sm: 0 },
        })}
      >
        <Tabs
          value={tab}
          onChange={(_, v) => setTab(v)}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          TabIndicatorProps={{
            style: {
              backgroundColor: "primary.main",
              height: 2,
            },
          }}
          sx={{
            "& .MuiTab-root": {
              fontWeight: 500,
              color: "text.secondary",
              textTransform: "none",
              px: { xs: 2, sm: 3 },
              py: { xs: 1.5, sm: 2 },
              minHeight: { xs: 48, sm: 52 },
              "&.Mui-selected": {
                color: "primary.main",
                fontWeight: 700,
              },
            },
          }}
        >
          {cats.map((c) => (
            <Tab key={c} label={c} />
          ))}
        </Tabs>
      </Box>

      <Masonry
        columns={{ xs: 1, sm: 2, md: 3 }}
        spacing={gridSpacing.sm}
        sx={(theme) => ({
          [theme.breakpoints.down("sm")]: {
            margin: "unset",
          },
        })}
      >
        {filtered.map((p) => (
          <Box key={p.id}>
            <Box
              component={Link}
              href={toLocalePath(`portfolio/${p.slug}`)}
              sx={{
                display: "block",
                position: "relative",
                overflow: "hidden",
                borderRadius: 3,
                textDecoration: "none",
                color: "inherit",
                cursor: "pointer",
                aspectRatio: {
                  xs: "4/3",
                  sm: "4/3",
                  md: p.featured && tab === 0 ? "4/5" : "4/3",
                },

                "&:hover .p-img": { transform: "scale(1.07)" },
                "&:hover .p-overlay": { opacity: 1 },
                "&:hover .p-info": {
                  transform: "translateY(0)",
                  opacity: 1,
                },
              }}
            >
              <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
                <OptimizedImage
                  src={p.cover}
                  alt={`${p.title} — ${p.location}`}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
                  className="p-img"
                  sx={{
                    transition: "transform 0.6s ease",
                    display: "block",
                  }}
                />
              </Box>

              <Box
                className="p-overlay"
                sx={(theme) => ({
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(
                    to top,
                    ${theme.palette.custom.overlayDark} 0%,
                    ${theme.palette.custom.overlayLight} 60%,
                    transparent 100%
                  )`,
                  opacity: 0.7,
                  transition: "opacity 0.35s ease",
                })}
              />

              <Box
                className="p-info"
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  p: { xs: 2.5, sm: 3, md: 3.5 },
                  transform: "translateY(6px)",
                  opacity: 0.88,
                  transition: "all 0.35s ease",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        letterSpacing: "0.15em",
                        color: "primary.light",
                        textTransform: "uppercase",
                        mb: 0.75,
                        fontSize: "0.72rem",
                      }}
                    >
                      {p.typeLabel} · {p.area}
                    </Typography>

                    <Typography
                      variant="h5"
                      sx={{
                        color: "common.white",
                        fontWeight: 700,
                        mb: 0.25,
                        fontSize: { xs: "1.1rem", md: "1.25rem" },
                      }}
                    >
                      {p.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: "rgba(255,255,255,0.85)",
                        fontSize: "0.9rem",
                      }}
                    >
                      {p.location}
                    </Typography>
                  </Box>

                  <Box
                    sx={(theme) => ({
                      width: 40,
                      height: 40,
                      flexShrink: 0,
                      border: `1px solid ${theme.palette.common.white}`,
                      borderRadius: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.25s ease",

                      "& svg": {
                        color: theme.palette.common.white,
                      },
                    })}
                  >
                    <OpenInNewIcon sx={{ fontSize: "1rem" }} />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Masonry>
    </Section>
  );
}
