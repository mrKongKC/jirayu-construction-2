"use client";

import { Box, Container, Typography, Button, Grid, Chip } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PhoneIcon from "@mui/icons-material/Phone";
import Link from "next/link";

import { useI18n } from "@/components/provider/I18nProvider";
import { useLocalePath } from "@/hooks/useLocalePath";
import { useNavigateBack } from "@/hooks/useNavigateBack";
import OptimizedImage from "@/components/common/OptimizedImage";
import PrimaryButton from "@/components/common/PrimaryButton";
import { contactLinks } from "@/config/contact";
import type { LocalizedProject } from "@/config/portfolio";
import { textSecondarySoft } from "@/theme/utils";

interface Props {
  project: LocalizedProject;
}

function MetaCard({ label, value }: { label: string; value: string }) {
  return (
    <Box
      sx={(theme) => ({
        p: { xs: 1.5, md: 0 },
        borderRadius: { xs: 2, md: 0 },
        bgcolor: { xs: "background.paper", md: "transparent" },
        border: {
          xs: `1px solid ${theme.palette.divider}`,
          md: "none",
        },
        height: "100%",
      })}
    >
      <Typography
        sx={{
          fontWeight: 700,
          mb: 0.5,
          fontSize: { xs: "0.72rem", md: "0.875rem" },
          letterSpacing: { xs: "0.04em", md: 0 },
          textTransform: { xs: "uppercase", md: "none" },
          color: "text.secondary",
        }}
      >
        {label}
      </Typography>
      <Typography
        sx={{
          fontWeight: { xs: 600, md: 400 },
          fontSize: { xs: "0.875rem", md: "1rem" },
          color: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.text.primary
              : textSecondarySoft(theme),
          lineHeight: 1.4,
        }}
      >
        {value}
      </Typography>
    </Box>
  );
}

export default function PortfolioDetailPage({ project }: Props) {
  const { t } = useI18n();
  const { toLocalePath } = useLocalePath();
  const navigateBack = useNavigateBack("", "#portfolio");
  const d = t.portfolioDetail;

  const metaItems = [
    { label: d.location, value: project.location },
    { label: d.scope, value: project.area },
    { label: d.district, value: project.districtLabel },
  ];

  return (
    <Box
      component="main"
      sx={{ py: { xs: 9, md: 12 }, bgcolor: "background.default" }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Button
          onClick={navigateBack}
          startIcon={<ArrowBackIcon sx={{ fontSize: "1rem !important" }} />}
          size="small"
          sx={{ mb: { xs: 2, md: 4 }, px: 0 }}
        >
          {d.back}
        </Button>

        <Grid container spacing={{ xs: 2.5, md: 5 }}>
          <Grid size={{ xs: 12, md: 7 }} order={{ xs: 2, md: 1 }}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                aspectRatio: { xs: "16/10", md: "16/10" },
                borderRadius: { xs: 2, md: 3 },
                overflow: "hidden",
                mb: { xs: 2.5, md: 2 },
              }}
            >
              <OptimizedImage
                src={project.cover}
                alt={project.title}
                fill
                sizes="(max-width: 900px) 100vw, 60vw"
                priority
              />
            </Box>

            {project.gallery.length > 1 && (
              <Box>
                <Typography
                  sx={{
                    fontWeight: 700,
                    mb: 1.5,
                    fontSize: { xs: "0.95rem", md: "1rem" },
                  }}
                >
                  {d.gallery}
                </Typography>
                <Grid container spacing={1}>
                  {project.gallery.map((src) => (
                    <Grid size={{ xs: 4, sm: 4 }} key={src}>
                      <Box
                        sx={{
                          position: "relative",
                          aspectRatio: "4/3",
                          borderRadius: 1.5,
                          overflow: "hidden",
                        }}
                      >
                        <OptimizedImage
                          src={src}
                          alt={`${project.title} — ${d.gallery}`}
                          fill
                          sizes="(max-width: 600px) 33vw, 200px"
                        />
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )}
          </Grid>

          <Grid size={{ xs: 12, md: 5 }} order={{ xs: 1, md: 2 }}>
            <Chip
              label={project.typeLabel}
              color="primary"
              size="small"
              sx={{ mb: 1.5, fontWeight: 600 }}
            />

            <Typography
              component="h1"
              sx={{
                fontWeight: 800,
                mb: { xs: 2, md: 2 },
                fontSize: { xs: "1.35rem", sm: "1.75rem", md: "2.25rem" },
                lineHeight: { xs: 1.35, md: 1.2 },
                letterSpacing: "-0.02em",
              }}
            >
              {project.title}
            </Typography>

            <Grid container spacing={1.5} sx={{ mb: { xs: 2.5, md: 4 } }}>
              {metaItems.map((item, index) => (
                <Grid
                  size={{ xs: index === 2 ? 12 : 6, sm: 4, md: 12 }}
                  key={item.label}
                >
                  <MetaCard label={item.label} value={item.value} />
                </Grid>
              ))}
            </Grid>

            <Typography
              component="p"
              sx={(theme) => ({
                color: textSecondarySoft(theme),
                lineHeight: { xs: 1.75, md: 1.9 },
                fontSize: { xs: "0.875rem", md: "1.05rem" },
                mb: { xs: 2.5, md: 5 },
              })}
            >
              {project.description}
            </Typography>

            <Box
              sx={(theme) => ({
                p: { xs: 2, md: 3 },
                borderRadius: { xs: 2, md: 3 },
                bgcolor: "background.paper",
                border: `1px solid ${theme.palette.divider}`,
              })}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  mb: 0.75,
                  fontSize: { xs: "0.95rem", md: "1rem" },
                }}
              >
                {d.cta}
              </Typography>
              <Typography
                sx={(theme) => ({
                  color: textSecondarySoft(theme),
                  mb: 2,
                  fontSize: { xs: "0.8125rem", md: "0.95rem" },
                  lineHeight: 1.6,
                })}
              >
                {d.ctaSub}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1.25,
                }}
              >
                <Link
                  href={`${toLocalePath("")}#contact`}
                  style={{ textDecoration: "none" }}
                >
                  <PrimaryButton
                    size="medium"
                    fullWidth
                    sx={{ py: { xs: 1.25, md: 1.5 } }}
                  >
                    {d.ctaBtn}
                  </PrimaryButton>
                </Link>
                <Button
                  variant="outlined"
                  size="medium"
                  fullWidth
                  startIcon={<PhoneIcon sx={{ fontSize: "1rem !important" }} />}
                  component="a"
                  href={`tel:${contactLinks.phoneTel}`}
                  sx={{
                    py: { xs: 1.25, md: 1.5 },
                    whiteSpace: "nowrap",
                  }}
                >
                  {t.contact.info.phone.value}
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
