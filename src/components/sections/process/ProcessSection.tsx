"use client";

import { Box, Typography, Grid } from "@mui/material";
import { useI18n } from "@/components/provider/I18nProvider";

import Section from "@/components/layouts/Section";
import SectionHeader from "@/components/common/SectionHeader";

import {
  gradientPrimaryConnector,
  textSecondarySoft,
  textPrimaryAlpha,
  sectionSpacing,
  gridSpacing,
} from "@/theme/utils";
import StepCircle from "./StepCircle";

export default function ProcessSection() {
  const { t } = useI18n();

  return (
    <Section id="process" bg="paper">
      <SectionHeader
        eyebrow={t.process.eyebrow}
        title={t.process.title}
        titleAccent={t.process.titleAccent}
        align="center"
        mb={sectionSpacing.large}
      />

      <Box sx={{ position: "relative" }}>
        <Box
          sx={(theme) => ({
            display: { xs: "none", md: "block" },
            position: "absolute",
            top: 36,
            left: "0%",
            right: "0%",
            width: "80%",
            height: 2,
            background: gradientPrimaryConnector(theme),
          })}
        />

        <Grid container spacing={gridSpacing.lg}>
          {t.process.steps.map((step, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={step.en}>
              <Box sx={{ position: "relative" }}>
                <Box sx={{ mx: { xs: "auto", md: 0 } }}>
                  <StepCircle index={i + 1} />
                </Box>

                <Box
                  sx={{
                    textAlign: { xs: "center", md: "left" },
                    mt: 4,
                  }}
                >
                  <Typography
                    sx={(theme) => ({
                      fontWeight: 600,
                      letterSpacing: "0.15em",
                      color: textPrimaryAlpha(theme, 0.6),
                      textTransform: "uppercase",
                      mb: 1,
                    })}
                  >
                    {step.en}
                  </Typography>

                  <Typography
                    variant="h5"
                    sx={{
                      color: "text.primary",
                      mb: 1.5,
                      fontWeight: 700,
                    }}
                  >
                    {step.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={(theme) => ({
                      color: textSecondarySoft(theme),
                      lineHeight: 1.85,
                    })}
                  >
                    {step.desc}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Section>
  );
}
