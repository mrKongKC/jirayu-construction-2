"use client";

import { Box, Typography, Chip } from "@mui/material";
import { useI18n } from "@/components/provider/I18nProvider";
import Section from "@/components/layouts/Section";
import SectionHeader from "@/components/common/SectionHeader";
import { textSecondarySoft, sectionSpacing } from "@/theme/utils";

export default function SeoContentSection() {
  const { t } = useI18n();
  const content = t.seoContent;

  return (
    <Section id="about-nan" bg="paper">
      <SectionHeader
        eyebrow={content.eyebrow}
        title={content.title}
        titleAccent={content.titleAccent}
        subtitle={content.subtitle}
        align="center"
        accentVariant="block"
        mb={sectionSpacing.header}
      />

      <Box sx={{ maxWidth: 800, mx: "auto", display: "flex", flexDirection: "column", gap: 3 }}>
        {content.paragraphs.map((paragraph) => (
          <Typography
            key={paragraph.slice(0, 40)}
            sx={(theme) => ({
              color: textSecondarySoft(theme),
              lineHeight: 1.9,
              fontSize: { xs: "0.95rem", md: "1.02rem" },
            })}
          >
            {paragraph}
          </Typography>
        ))}

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, justifyContent: "center", pt: 1 }}>
          {content.areas.map((area) => (
            <Chip
              key={area}
              label={area}
              sx={(theme) => ({
                fontWeight: 500,
                bgcolor: theme.palette.background.default,
                border: `1px solid ${theme.palette.divider}`,
              })}
            />
          ))}
        </Box>
      </Box>
    </Section>
  );
}
