"use client";

import { Box, Typography, Grid } from "@mui/material";
import { useI18n } from "@/components/provider/I18nProvider";

import Section from "@/components/layouts/Section";
import SectionHeader from "@/components/common/SectionHeader";
import FeatureItem from "@/components/common/FeatureItem";
import SectionCard from "@/components/common/SectionCard";
import ContactForm from "./ContactForm";

import { textSecondarySoft, textBodySmall, gridSpacing } from "@/theme/utils";

import { contactLinks } from "@/config/contact";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function ContactSection() {
  const { t } = useI18n();
  const c = t.contact;

  const infoItems = [
    { icon: PhoneIcon, ...c.info.phone, href: `tel:${contactLinks.phoneTel}` },
    { icon: EmailIcon, ...c.info.email, href: `mailto:${c.info.email.value}` },
    {
      icon: LocationOnIcon,
      ...c.info.location,
      href: "https://maps.google.com/?q=Nan+Thailand",
    },
    {
      icon: FacebookIcon,
      ...c.info.facebook,
      href: contactLinks.facebookUrl,
    },
  ];

  return (
    <Section id="contact" bg="paper">
      <Grid container spacing={gridSpacing.lg}>
        <Grid size={{ lg: 5, xs: 12 }}>
          <SectionHeader
            eyebrow={c.eyebrow}
            title={c.title}
            titleAccent={c.titleAccent}
            subtitle={c.sub}
            accentVariant="block"
            subtitleBelow
            mb={0}
          />

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {infoItems.map((item) => (
              <FeatureItem key={item.label} {...item} />
            ))}
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 7 }}>
          <SectionCard>
            <Typography
              variant="h4"
              sx={{
                mb: 0.75,
                fontWeight: 700,
              }}
            >
              {c.formTitle}
            </Typography>

            <Typography variant="body2" sx={{ mb: 4 }}>
              {c.formSub}
            </Typography>

            <ContactForm />

            <Typography
              sx={(theme) => ({
                ...textBodySmall,
                color: textSecondarySoft(theme),
                mt: 2,
                textAlign: "center",
              })}
            >
              {c.privacy}
            </Typography>
          </SectionCard>
        </Grid>
      </Grid>
    </Section>
  );
}
