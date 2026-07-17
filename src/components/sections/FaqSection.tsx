"use client";

import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useI18n } from "@/components/provider/I18nProvider";
import Section from "@/components/layouts/Section";
import SectionHeader from "@/components/common/SectionHeader";
import { textSecondarySoft, sectionSpacing } from "@/theme/utils";

export default function FaqSection() {
  const { t } = useI18n();

  return (
    <Section id="faq" bg="default">
      <SectionHeader
        eyebrow={t.faq.eyebrow}
        title={t.faq.title}
        titleAccent={t.faq.titleAccent}
        align="center"
        mb={sectionSpacing.header}
      />

      <Box sx={{ maxWidth: 800, mx: "auto" }}>
        {t.faq.items.map((item, index) => (
          <Accordion
            key={item.question}
            defaultExpanded={index === 0}
            disableGutters
            elevation={0}
            sx={{
              bgcolor: "background.paper",
              mb: 1.5,
              borderRadius: "12px !important",
              "&:before": { display: "none" },
              border: "1px solid",
              borderColor: "divider",
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "primary.main" }} />}>
              <Typography component="h3" sx={{ fontWeight: 600, pr: 2 }}>
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={(theme) => ({ color: textSecondarySoft(theme), lineHeight: 1.85 })}>
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Section>
  );
}
