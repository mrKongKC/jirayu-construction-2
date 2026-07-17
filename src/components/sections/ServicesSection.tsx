"use client";

import { Box, Typography, Grid, Card, CardContent } from "@mui/material";

import { useI18n } from "@/components/provider/I18nProvider";

import Section from "@/components/layouts/Section";
import SectionHeader from "@/components/common/SectionHeader";
import IconBox from "@/components/common/IconBox";

import {
  textSecondarySoft,
  textPrimaryAlpha,
  sectionSpacing,
  gridSpacing,
} from "@/theme/utils";

import HomeWorkIcon from "@mui/icons-material/HomeWork";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import ConstructionIcon from "@mui/icons-material/Construction";
import ApartmentIcon from "@mui/icons-material/Apartment";
import LandscapeIcon from "@mui/icons-material/Landscape";
import EngineeringIcon from "@mui/icons-material/Engineering";

const ICONS = [
  HomeWorkIcon,
  DesignServicesIcon,
  ConstructionIcon,
  ApartmentIcon,
  LandscapeIcon,
  EngineeringIcon,
];

const IMAGES = [
  "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&auto=format&fit=crop&q=70",
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
        accentVariant="block"
        layout="split"
        mb={sectionSpacing.header}
      />

      <Grid container spacing={gridSpacing.md}>
        {t.services.items.map((item, i) => {
          const Icon = ICONS[i];

          return (
            <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={item.title}>
              <Card
                sx={{
                  height: "100%",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                }}
              >
                <Box
                  component="img"
                  src={IMAGES[i]}
                  alt={item.title}
                  loading="lazy"
                  sx={{
                    width: "100%",
                    height: 180,
                    objectFit: "cover",
                  }}
                />

                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                    <IconBox>
                      <Icon sx={{ color: "primary.main" }} />
                    </IconBox>
                    <Box>
                      <Typography sx={{ fontWeight: 700, mb: 0.25 }}>
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
