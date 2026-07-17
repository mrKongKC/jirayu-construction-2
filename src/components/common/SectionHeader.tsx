"use client";

import { Box, Typography, Grid } from "@mui/material";
import SectionEyebrow from "@/components/common/SectionEyebrow";
import { gradientPrimaryText, textSecondarySoft, gridSpacing } from "@/theme/utils";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  titleEnd?: string;
  subtitle?: string;
  align?: "left" | "center";
  accentVariant?: "inline" | "block" | "inline-spaced";
  layout?: "default" | "split";
  subtitleBelow?: boolean;
  mb?: number | { xs?: number; md?: number };
}

function TitleBlock({
  title,
  titleAccent,
  titleEnd,
  accentVariant,
  isCenter,
}: Pick<
  SectionHeaderProps,
  "title" | "titleAccent" | "titleEnd" | "accentVariant" | "align"
> & { isCenter: boolean }) {
  return (
    <Typography
      variant="h2"
      sx={{
        fontWeight: 800,
        lineHeight: accentVariant === "block" ? undefined : { xs: 1.1, md: 1.15 },
        color: isCenter ? "text.primary" : undefined,
      }}
    >
      {title}
      {titleAccent && (
        <Box
          component="span"
          sx={(theme) => ({
            ...(accentVariant === "block" && { display: "block" }),
            ...(accentVariant === "inline-spaced" && { mx: 1.5 }),
            ...(accentVariant === "inline" && { ml: 1.5, pb: 1 }),
            ...gradientPrimaryText(theme),
          })}
        >
          {titleAccent}
        </Box>
      )}
      {titleEnd}
    </Typography>
  );
}

export default function SectionHeader({
  eyebrow,
  title,
  titleAccent,
  titleEnd,
  subtitle,
  align = "left",
  accentVariant = "inline",
  layout = "default",
  subtitleBelow = false,
  mb = 5,
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <Box sx={{ textAlign: isCenter ? "center" : "left", mb }}>
      <SectionEyebrow title={eyebrow} />

      {layout === "split" && subtitle ? (
        <Grid container spacing={gridSpacing.lg} alignItems="flex-end">
          <Grid size={{ xs: 12, md: 6 }}>
            <TitleBlock
              title={title}
              titleAccent={titleAccent}
              titleEnd={titleEnd}
              accentVariant={accentVariant}
              align={align}
              isCenter={isCenter}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 5 }} sx={{ ml: { md: "auto" } }}>
            <Typography
              sx={(theme) => ({
                color: textSecondarySoft(theme),
                lineHeight: 1.85,
              })}
            >
              {subtitle}
            </Typography>
          </Grid>
        </Grid>
      ) : (
        <>
          <TitleBlock
            title={title}
            titleAccent={titleAccent}
            titleEnd={titleEnd}
            accentVariant={accentVariant}
            align={align}
            isCenter={isCenter}
          />
          {subtitle && isCenter && (
            <Typography
              sx={(theme) => ({
                color: textSecondarySoft(theme),
                lineHeight: 1.85,
                maxWidth: 640,
                mx: "auto",
                mt: 2,
              })}
            >
              {subtitle}
            </Typography>
          )}
          {subtitle && !isCenter && subtitleBelow && (
            <Typography
              sx={(theme) => ({
                color: textSecondarySoft(theme),
                lineHeight: 1.85,
                mt: 2.5,
                mb: 6,
                maxWidth: 400,
              })}
            >
              {subtitle}
            </Typography>
          )}
        </>
      )}
    </Box>
  );
}
