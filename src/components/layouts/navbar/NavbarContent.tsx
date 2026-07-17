"use client";

import { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PhoneIcon from "@mui/icons-material/Phone";
import { useI18n } from "@/components/provider/I18nProvider";
import { useAppAction } from "@/components/provider/AppActionProvider";
import {
  gradientPrimaryBg,
  shadowPrimaryLight,
  textWhiteStrong,
  bgPrimaryHover,
  textWhiteMedium,
  bgWhiteHover,
} from "@/theme/utils";
import { sectionConfig as config } from "@/config/section";

export default function NavbarContent() {
  const { t, toggleLocale } = useI18n();
  const { scrolled, setIsClickDrawer, isClickedDrawer } = useAppAction();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClickDrawer = (val: boolean) => {
    setMobileOpen(val);
    setIsClickDrawer(val);
  };

  const goToSection = (href: string) => {
    handleClickDrawer(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { label: t.nav.home, href: "#hero", show: config.showHero },
    { label: t.nav.services, href: "#services", show: config.showServices },
    { label: t.nav.portfolio, href: "#portfolio", show: config.showPortfolio },
    { label: t.nav.whyUs, href: "#why-us", show: config.showWhyUs },
    { label: t.nav.reviews, href: "#reviews", show: config.showReviews },
    { label: t.nav.contact, href: "#contact", show: config.showContact },
  ].filter((item) => item.show);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (isClickedDrawer) {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
    } else {
      html.style.overflow = "";
      body.style.overflow = "";
    }

    return () => {
      html.style.overflow = "";
      body.style.overflow = "";
    };
  }, [isClickedDrawer]);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={(theme) => ({
          background: scrolled ? theme.palette.custom.white : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled
            ? `1px solid ${theme.palette.divider}`
            : "1px solid transparent",
          transition: "all 0.4s ease",
        })}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            py: { xs: 1.5, md: 1.5 },
            px: { xs: 3, md: 6 },
          }}
        >
          {/* Brand Identity / Logo */}
          <Box
            onClick={() => goToSection("#hero")}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              cursor: "pointer",
              userSelect: "none",
            }}
          >
            <Box
              sx={(theme) => ({
                width: 38,
                height: 38,
                background: gradientPrimaryBg(theme),
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                fontSize: "1.1rem",
                color: "common.white",
                boxShadow: shadowPrimaryLight(theme),
              })}
            >
              J
            </Box>
            <Box>
              <Typography
                sx={(theme) => ({
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: scrolled
                    ? theme.palette.text.primary
                    : theme.palette.common.white,
                  lineHeight: 1,
                  letterSpacing: "-0.01em",
                })}
              >
                {t.title}
              </Typography>
              <Typography
                sx={(theme) => ({
                  fontWeight: 400,
                  fontSize: "0.6rem",
                  letterSpacing: "0.12em",
                  color: scrolled
                    ? theme.palette.text.secondary
                    : textWhiteStrong(theme),
                  textTransform: "uppercase",
                })}
              >
                {t.common.tagline}
              </Typography>
            </Box>
          </Box>

          {/* Desktop Navigation Menu */}
          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
              alignItems: "center",
              gap: 0.5,
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.label}
                onClick={() => goToSection(item.href)}
                sx={(theme) => ({
                  color: scrolled
                    ? theme.palette.text.secondary
                    : textWhiteStrong(theme),
                  fontSize: "0.82rem",
                  fontWeight: 500,
                  px: 1.5,
                  py: 1,
                  minWidth: "auto",
                  borderRadius: 6,
                  "&:hover": {
                    color: scrolled
                      ? theme.palette.primary.main
                      : theme.palette.common.white,
                    background: scrolled
                      ? bgPrimaryHover(theme)
                      : bgWhiteHover(theme),
                  },
                })}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            {/* Language Toggle Button */}
            <Button
              onClick={toggleLocale}
              size="small"
              variant="outlined"
              sx={(theme) => ({
                display: { xs: "none", md: "flex" },
                borderColor: scrolled
                  ? theme.palette.primary.lighter
                  : textWhiteMedium(theme),
                color: scrolled
                  ? theme.palette.primary.main
                  : theme.palette.common.white,
                fontSize: "0.72rem",
                fontWeight: 600,
                px: 1.5,
                py: 0.6,
                minWidth: "auto",
                borderRadius: 2,
                "&:hover": {
                  borderColor: theme.palette.primary.main,
                  background: bgPrimaryHover(theme),
                  color: theme.palette.primary.main,
                },
              })}
            >
              {t.switchLang}
            </Button>

            {/* CTA Button */}
            <Button
              variant="contained"
              size="small"
              startIcon={<PhoneIcon sx={{ fontSize: "0.9rem !important" }} />}
              href="tel:+66..."
              sx={{
                display: { xs: "none", md: "flex" },
                fontSize: "0.78rem",
                py: 1,
                px: 2.5,
              }}
            >
              {t.nav.cta}
            </Button>

            <IconButton
              onClick={() => handleClickDrawer(true)}
              sx={(theme) => ({
                display: { xs: "flex", lg: "none" },
                color: scrolled
                  ? theme.palette.text.primary
                  : theme.palette.common.white,
              })}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Sidebar Navigation */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => handleClickDrawer(false)}
        ModalProps={{
          disableScrollLock: false,
        }}
        PaperProps={{
          sx: (theme) => ({
            width: 280,
            background: theme.palette.background.paper,
            boxShadow: theme.shadows[10], // Accessing default MUI shadows
          }),
        }}
      >
        <Box sx={{ p: 3 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 4,
            }}
          >
            <Typography
              sx={(theme) => ({
                fontWeight: 700,
                fontSize: "1.1rem",
                color: theme.palette.primary.main,
              })}
            >
              {t.title}
            </Typography>
            <IconButton onClick={() => handleClickDrawer(false)} size="small">
              <CloseIcon />
            </IconButton>
          </Box>
          <List disablePadding>
            {navItems.map((item) => (
              <ListItem key={item.label} disablePadding sx={{ mb: 0.5 }}>
                <ListItemButton
                  onClick={() => goToSection(item.href)}
                  sx={(theme) => ({
                    borderRadius: 2,
                    py: 1.5,
                    "&:hover": {
                      background: bgPrimaryHover(theme),
                      color: theme.palette.primary.main,
                    },
                  })}
                >
                  <Typography sx={{ fontWeight: 500, fontSize: "0.9rem" }}>
                    {item.label}
                  </Typography>
                </ListItemButton>
              </ListItem>
            ))}
            
          </List>
          <Box
            sx={{ mt: 4, display: "flex", flexDirection: "column", gap: 1.5 }}
          >
            <Button variant="contained" fullWidth href="tel:+66...">
              {t.nav.cta}
            </Button>
            <Button
              variant="outlined"
              fullWidth
              onClick={toggleLocale}
              sx={(theme) => ({
                borderColor: theme.palette.divider,
              })}
            >
              {t.common.switchLangLong}
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
