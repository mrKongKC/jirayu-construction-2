"use client";

import { Box, Typography, Grid, Card, CardContent } from "@mui/material";

import { useI18n } from "@/components/provider/I18nProvider";

import Section from "@/components/layouts/Section";
import SectionHeader from "@/components/common/SectionHeader";
import IconBox from "@/components/common/IconBox";
import OptimizedImage from "@/components/common/OptimizedImage";

import { siteImages } from "@/config/images";
import {
  textSecondarySoft,
  textPrimaryAlpha,
  gridSpacing,
} from "@/theme/utils";

import HomeWorkIcon from "@mui/icons-material/HomeWork";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import ConstructionIcon from "@mui/icons-material/Construction";
import ApartmentIcon from "@mui/icons-material/Apartment";
import LandscapeIcon from "@mui/icons-material/Landscape";
import EngineeringIcon from "@mui/icons-material/Engineering";

const ICONS = [
  ConstructionIcon,
  HomeWorkIcon,
  DesignServicesIcon,
  EngineeringIcon,
  ApartmentIcon,
  LandscapeIcon,
];

export default function ServicesSection() {
  const { t } = useI18n();

  return (
    <Section id="services" bg="default">
      <SectionHeader
        eyebrow={t.services.eyebrow}
        title={t.services.title}
        titleAccent={t.services.titleAccent}
        subtitle={t.services.sub}
        accentVariant="inline"
        subtitleBelow
        mb={{ xs: 4, md: 5 }}
      />

      <Grid container spacing={gridSpacing.md}>
        {t.services.items.map((item, i) => {
          const Icon = ICONS[i];

          return (
            <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={item.title}>
              <Card
                component="article"
                sx={{
                  height: "100%",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                }}
              >
                <Box sx={{ position: "relative", width: "100%", height: 180 }}>
                  <OptimizedImage
                    src={siteImages.services[i]}
                    alt={`${item.title} — ${t.title}`}
                    fill
                    sizes="(max-width: 900px) 100vw, 33vw"
                  />
                </Box>

                <CardContent sx={{ p: { xs: 2.5, sm: 3 } }}>
                  <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                    <IconBox>
                      <Icon sx={{ color: "primary.main" }} />
                    </IconBox>
                    <Box>
                      <Typography
                        component="h3"
                        sx={{ fontWeight: 700, mb: 0.25, fontSize: "1rem" }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        sx={(theme) => ({
                          fontSize: "0.72rem",
                          fontWeight: 500,
                          letterSpacing: "0.06em",
                          color: textPrimaryAlpha(theme, 0.5),
                          textTransform: "uppercase",
                        })}
                      >
                        {item.en}
                      </Typography>
                    </Box>
                  </Box>

                  <Typography
                    variant="body2"
                    sx={(theme) => ({
                      color: textSecondarySoft(theme),
                      lineHeight: 1.75,
                    })}
                  >
                    {item.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Section>
  );
}
