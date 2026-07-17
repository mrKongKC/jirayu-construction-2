import { Box, Typography, Container } from "@mui/material";
import {
  borderPrimaryMedium,
} from "@/theme/utils";
import { useI18n } from "@/components/provider/I18nProvider";

export default function StatsGrid() {
  const { t } = useI18n();

  return (
    <Container maxWidth="xl" disableGutters sx={{ px: { xs: 0, md: 4 } }}>
      <Box
        sx={{
          display: "grid",
          width: "100%",
          gridTemplateColumns: { xs: "repeat(2,1fr)", md: "repeat(4,1fr)" },
        }}
      >
        {t.hero.stats.map((stat, i) => (
          <Box
            key={stat.label}
            sx={(theme) => ({
              py: { xs: 2.5, md: 3 },
              px: { xs: 2, md: 4 },
              textAlign: "center",

              borderRight: i < 3 ? borderPrimaryMedium(theme) : "none",
              borderBottom:
                i < 2
                  ? {
                      xs: borderPrimaryMedium(theme),
                      md: "none",
                    }
                  : "none",
            })}
          >
            <Typography
              sx={{
                fontSize: { xs: "1.8rem", md: "2.2rem" },
                fontWeight: 800,
                color: "primary.light",
                lineHeight: 1,
                mb: 0.5,
              }}
            >
              {stat.num}
            </Typography>

            <Typography
              sx={(theme) => ({
                fontSize: "0.7rem",
                fontWeight: 500,
                color: theme.palette.custom.whiteSoft,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              })}
            >
              {stat.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
