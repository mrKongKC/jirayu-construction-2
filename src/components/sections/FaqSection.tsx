"use client";

import { Box, Typography } from "@mui/material";
import Section from "@/components/layouts/Section";
import SectionHeader from "@/components/common/SectionHeader";
import { textSecondarySoft, sectionSpacing } from "@/theme/utils";
import type { Translations } from "@/lib/i18n";

interface Props {
  faq: Translations["faq"];
}

export default function FaqSection({ faq }: Props) {
  return (
    <Section id="faq" bg="default">
      <SectionHeader
        eyebrow={faq.eyebrow}
        title={faq.title}
        titleAccent={faq.titleAccent}
        align="center"
        mb={sectionSpacing.header}
      />

      <Box
        sx={{ maxWidth: 800, mx: "auto" }}
        component="section"
        aria-label={faq.title}
      >
        {faq.items.map((item, index) => (
          <Box
            key={item.question}
            component="details"
            {...(index === 0 ? { open: true } : {})}
            sx={(theme) => ({
              bgcolor: "background.paper",
              mb: 1.5,
              borderRadius: 3,
              border: `1px solid ${theme.palette.divider}`,
              overflow: "hidden",
              "& summary": {
                cursor: "pointer",
                listStyle: "none",
                "&::-webkit-details-marker": { display: "none" },
              },
              "&[open] summary .faq-chevron": {
                transform: "rotate(180deg)",
              },
            })}
          >
            <Box
              component="summary"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 2,
                px: { xs: 2, md: 3 },
                py: { xs: 1.75, md: 2 },
              }}
            >
              <Typography component="h3" sx={{ fontWeight: 600, pr: 1 }}>
                {item.question}
              </Typography>
              <Box
                className="faq-chevron"
                aria-hidden
                sx={{
                  color: "primary.main",
                  fontSize: "1.25rem",
                  lineHeight: 1,
                  transition: "transform 0.2s ease",
                  flexShrink: 0,
                }}
              >
                ▾
              </Box>
            </Box>
            <Box sx={{ px: { xs: 2, md: 3 }, pb: { xs: 2, md: 2.5 }, pt: 0 }}>
              <Typography
                component="p"
                sx={(theme) => ({
                  color: textSecondarySoft(theme),
                  lineHeight: 1.85,
                  fontSize: { xs: "0.95rem", md: "1rem" },
                })}
              >
                {item.answer}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Section>
  );
}
