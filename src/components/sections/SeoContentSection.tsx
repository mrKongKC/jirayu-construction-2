"use client";

import { Box, Typography, Chip } from "@mui/material";
import Section from "@/components/layouts/Section";
import SectionHeader from "@/components/common/SectionHeader";
import { textSecondarySoft } from "@/theme/utils";
import type { Translations } from "@/lib/i18n";

interface Props {
  content: Translations["seoContent"];
  areas: readonly string[];
}

export default function SeoContentSection({ content, areas }: Props) {
  return (
    <Section id="about-nan" bg="paper">
      <Box component="article">
        <SectionHeader
          eyebrow={content.eyebrow}
          title={content.title}
          titleAccent={content.titleAccent}
          subtitle={content.subtitle}
          align="center"
          accentVariant="block"
          mb={{ xs: 4, md: 5 }}
        />

        <Box
          sx={{
            maxWidth: 800,
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            gap: { xs: 2.5, md: 3 },
          }}
        >
          {content.paragraphs.map((paragraph) => (
            <Typography
              key={paragraph.slice(0, 40)}
              component="p"
              sx={(theme) => ({
                color: textSecondarySoft(theme),
                lineHeight: 1.9,
                fontSize: { xs: "0.95rem", md: "1.05rem" },
              })}
            >
              {paragraph}
            </Typography>
          ))}

          <Box
            component="nav"
            aria-label={content.eyebrow}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1.5,
              justifyContent: "center",
              pt: { xs: 1, md: 2 },
            }}
          >
            {areas.map((area) => (
              <Chip
                key={area}
                label={area}
                component="span"
                sx={(theme) => ({
                  fontWeight: 500,
                  bgcolor: theme.palette.background.default,
                  border: `1px solid ${theme.palette.divider}`,
                })}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Section>
  );
}
