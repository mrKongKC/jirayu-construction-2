"use client";
import Link from "next/link";
import { Box, Container, Typography, Grid, Divider, IconButton, alpha } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useI18n } from "@/components/provider/I18nProvider";
import { contactLinks } from "@/config/contact";
import { brand, gradientPrimaryBg, sectionSpacing, shadowPrimaryLight, textEyebrow, textLabel, textWhiteMedium, textWhiteSubtle } from "@/theme/utils";
import { getFooterColumns, getFilteredLinks } from "./utils";

export default function Footer() {
  const { t } = useI18n();
  const f = t.footer;
  const footerColumns = getFooterColumns(f);

  return (
    <Box id="footer" component="footer" sx={(theme) => ({ background: theme.palette.background.inverse, pt: sectionSpacing.large, pb: 4 })}>
      <Container maxWidth="xl">
        <Grid container spacing={6} sx={{ mb: 8 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
              <Box sx={(theme) => ({ width: 40, height: 40, background: gradientPrimaryBg(theme), borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, color: "common.white", boxShadow: shadowPrimaryLight(theme) })}>J</Box>
              <Box>
                <Typography sx={(theme) => ({ fontWeight: 700, fontSize: "1.1rem", color: theme.palette.background.default, lineHeight: 1 })}>{t.title}</Typography>
                <Typography sx={(theme) => ({ ...textEyebrow, fontSize: "0.58rem", color: textWhiteMedium(theme) })}>{t.common.tagline}</Typography>
              </Box>
            </Box>
            <Typography variant="body2" sx={(theme) => ({ color: textWhiteMedium(theme), mb: 3, maxWidth: 300, lineHeight: 1.85 })}>{f.desc}</Typography>
            
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, mb: 4 }}>
              {[
                { icon: PhoneIcon, text: t.contact.info.phone.value, href: `tel:${contactLinks.phoneTel}` },
                { icon: EmailIcon, text: t.contact.info.email.value, href: `mailto:${contactLinks.email}` },
                { icon: LocationOnIcon, text: t.contact.info.location.value, href: "#" }
              ].map((item) => (
                <Box key={item.text} component="a" href={item.href} sx={(theme) => ({ display: "flex", alignItems: "center", gap: 1.5, textDecoration: "none", color: textWhiteMedium(theme), "&:hover": { color: theme.palette.primary.light }, transition: "all 0.2s" })}>
                  <item.icon sx={{ fontSize: "0.9rem" }} />
                  <Typography sx={{ ...textLabel, fontWeight: 400 }}>{item.text}</Typography>
                </Box>
              ))}
            </Box>

            <IconButton
              component="a"
              href={contactLinks.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              sx={(theme) => ({
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: 2,
                color: textWhiteMedium(theme),
                transition: "all 0.3s ease",
                "&:hover": {
                  background: alpha(brand.facebook.main, 0.1),
                  borderColor: brand.facebook.main,
                  color: brand.facebook.main,
                },
              })}
            >
              <FacebookIcon fontSize="small" />
            </IconButton>
          </Grid>

          {footerColumns.map(({ id, colKey, heading, links }) => (
            <Grid size={{ xs: 6, sm: 4, md: 2.5 }} key={id} sx={{ ml: { md: "auto" } }}>
              <Typography sx={(theme) => ({ ...textEyebrow, color: theme.palette.primary.main, mb: 3 })}>{heading}</Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                {getFilteredLinks(links, colKey).map((link) => (
                  <Typography
                    key={link}
                    sx={(theme) => ({
                      ...textLabel,
                      fontWeight: 400,
                      color: textWhiteMedium(theme),
                      transition: "color 0.2s ease",
                      "&:hover": { color: theme.palette.primary.light },
                      cursor: "pointer",
                    })}
                  >
                    {link}
                  </Typography>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        <Divider sx={(theme) => ({ borderColor: textWhiteSubtle(theme), mb: 4 })} />

        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "center", alignItems: "center", gap: 2, mb: 2 }}>
          <Typography
            component={Link}
            href="/privacy"
            sx={(theme) => ({ fontSize: "0.72rem", color: textWhiteSubtle(theme), textDecoration: "none", "&:hover": { color: theme.palette.primary.light } })}
          >
            {f.privacy}
          </Typography>
          <Typography sx={(theme) => ({ fontSize: "0.72rem", color: textWhiteSubtle(theme), display: { xs: "none", sm: "block" } })}>·</Typography>
          <Typography
            component={Link}
            href="/terms"
            sx={(theme) => ({ fontSize: "0.72rem", color: textWhiteSubtle(theme), textDecoration: "none", "&:hover": { color: theme.palette.primary.light } })}
          >
            {f.terms}
          </Typography>
        </Box>

        <Typography id="bottom-footer-legal-copyright" sx={(theme) => ({ fontSize: "0.72rem", color: textWhiteSubtle(theme), textAlign: "center" })}>{f.copyright}</Typography>
      </Container>
    </Box>
  );
}
