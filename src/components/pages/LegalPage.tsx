"use client";

import { Box, Container, Typography, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useI18n } from "@/components/provider/I18nProvider";
import { useNavigateBack } from "@/hooks/useNavigateBack";
import { textSecondarySoft } from "@/theme/utils";

interface LegalPageProps {
  type: "privacy" | "terms";
}

export default function LegalPage({ type }: LegalPageProps) {
  const { t } = useI18n();
  const navigateBack = useNavigateBack();
  const content = t.legal[type];

  return (
    <Box component="main" sx={{ py: { xs: 10, md: 12 }, minHeight: "60vh", bgcolor: "background.default" }}>
      <Container maxWidth="md" sx={{ px: { xs: 2, sm: 3 } }}>
        <Button
          onClick={navigateBack}
          startIcon={<ArrowBackIcon />}
          sx={{ mb: 4 }}
        >
          {t.nav.home}
        </Button>

        <Typography component="h1" variant="h3" sx={{ fontWeight: 800, mb: 1 }}>
          {content.title}
        </Typography>
        <Typography sx={(theme) => ({ color: textSecondarySoft(theme), mb: 5 })}>
          {content.updated}
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {content.sections.map((section) => (
            <Box key={section.heading}>
              <Typography component="h2" variant="h5" sx={{ fontWeight: 700, mb: 1.5 }}>
                {section.heading}
              </Typography>
              <Typography sx={(theme) => ({ color: textSecondarySoft(theme), lineHeight: 1.85 })}>
                {section.body}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
