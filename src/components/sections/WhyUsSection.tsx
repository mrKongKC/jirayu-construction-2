"use client";

import { Box, Typography, Grid } from "@mui/material";
import { useI18n } from "@/components/provider/I18nProvider";

import Section from "@/components/layouts/Section";
import SectionHeader from "@/components/common/SectionHeader";
import IconBox from "@/components/common/IconBox";
import OptimizedImage from "@/components/common/OptimizedImage";

import { getYearsInBusiness } from "@/config/business";
import { siteImages } from "@/config/images";
import {
  borderPrimaryLight,
  bgPrimarySoft,
  surfacePrimary,
  sectionSpacing,
  gridSpacing,
  textLabel,
  textBodySmall,
  textSecondarySoft,
} from "@/theme/utils";

import VerifiedIcon from "@mui/icons-material/Verified";
import GroupsIcon from "@mui/icons-material/Groups";
import HandshakeIcon from "@mui/icons-material/Handshake";
import SpeedIcon from "@mui/icons-material/Speed";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const ICONS = [
  VerifiedIcon,
  GroupsIcon,
  HandshakeIcon,
  SpeedIcon,
  PriceCheckIcon,
  SupportAgentIcon,
];

export default function WhyUsSection() {
  const { t } = useI18n();
  const yearsInBusiness = getYearsInBusiness();

  return (
    <Section id="why-us" bg="default">
      <Grid container spacing={gridSpacing.lg} alignItems="center">
        {/* LEFT IMAGE */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                borderRadius: 4.5,
                overflow: "hidden",
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  background: (theme) => bgPrimarySoft(theme),
                },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: { xs: "4/3", md: "4/5" },
                  maxHeight: { md: 480 },
                }}
              >
                <OptimizedImage
                  src={siteImages.whyUs}
                  alt={t.common.alt.team}
                  fill
                  sizes="(max-width: 900px) 100vw, 40vw"
                />
              </Box>
            </Box>

            {/* Badge */}
            <Box
              sx={(theme) => ({
                position: "absolute",
                bottom: { xs: -20, sm: -28 },
                right: { xs: -12, sm: -20, md: -20 },

                ...surfacePrimary(theme),

                p: { xs: 2, sm: 3 },
                minWidth: { xs: 100, sm: 140 },
                borderRadius: { xs: 3, sm: 4.5 },
              })}
            >
              <Typography
                sx={{
                  fontSize: { xs: "1.8rem", sm: "2.5rem" },
                  fontWeight: 800,
                  color: "common.white",
                  lineHeight: 1.2,
                }}
              >
                {yearsInBusiness}+
              </Typography>

              <Typography
                sx={(theme) => ({
                  ...textLabel,
                  fontSize: { xs: "0.7rem", sm: "0.8rem" },
                  color: theme.palette.custom.whiteSoft,
                })}
              >
                {t.whyUs.yearsLabel}
              </Typography>
            </Box>

            {/* Frame */}
            <Box
              sx={(theme) => ({
                position: "absolute",
                top: -12,
                left: -12,
                right: 12,
                bottom: 12,
                border: borderPrimaryLight(theme),
                borderRadius: theme.shape.borderRadius,
                zIndex: -1,
              })}
            />
          </Box>
        </Grid>

        {/* RIGHT */}
        <Grid size={{ xs: 12, md: 7 }}>
          <Box sx={{ pl: { md: 3 } }}>
            <SectionHeader
              eyebrow={t.whyUs.eyebrow}
              title={t.whyUs.title}
              titleAccent={t.whyUs.titleAccent}
              titleEnd={t.whyUs.titleEnd}
              accentVariant="inline-spaced"
              mb={sectionSpacing.header}
            />

            {/* ITEMS */}
            <Grid container spacing={gridSpacing.sm}>
              {t.whyUs.items.map((item, i) => {
                const Icon = ICONS[i];

                return (
                  <Grid size={{ xs: 12, sm: 6 }} key={item.title}>
                    <Box
                      sx={(theme) => ({
                        display: "flex",
                        gap: 2,
                        p: 2.5,
                        borderRadius: 2,
                        border: "1px solid transparent",
                        transition: "all 0.25s ease",
                        "&:hover": {
                          border: borderPrimaryLight(theme),
                          background: bgPrimarySoft(theme),
                        },
                      })}
                    >
                      {/* Icon */}
                      <IconBox>
                        <Icon sx={{ color: "primary.main" }} />
                      </IconBox>

                      {/* Text */}
                      <Box>
                        <Typography sx={{ ...textLabel, mb: 0.5 }}>
                          {item.title}
                        </Typography>

                        <Typography
                          sx={(theme) => ({
                            ...textBodySmall,
                            color: textSecondarySoft(theme),
                            lineHeight: 1.75,
                          })}
                        >
                          {item.desc}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Section>
  );
}
