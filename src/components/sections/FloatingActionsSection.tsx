"use client";

import { useState, useEffect } from "react";
import { Box, Fab, Tooltip, Zoom } from "@mui/material";

import { useI18n } from "@/components/provider/I18nProvider";

import {
  textPrimaryAlpha,
  gradientPrimaryBg,
  borderPrimaryLight,
  brand,
} from "@/theme/utils";

import PhoneIcon from "@mui/icons-material/Phone";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import FacebookIcon from "@mui/icons-material/Facebook";
import { contactLinks } from "@/config/contact";
import { useAppAction } from "@/components/provider/AppActionProvider";

export default function FloatingActionsSection() {
  const { t } = useI18n();
  const { isAtBottom, isClickedDrawer } = useAppAction();

  const [show, setShow] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const fn = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const fabBase = {
    borderRadius: "10px",
    width: 44,
    height: 44,
    minHeight: "unset",
    transition: "all 0.25s ease",
    "&:hover": { transform: "scale(1.08)" },
  };

  return (
    <Zoom in={!isAtBottom && !isClickedDrawer}>
      <Box
        id="floating-actions"
        sx={{
          position: "fixed",
          bottom: 28,
          right: 22,
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
          zIndex: 1300,
        }}
      >
        {/* Scroll Top */}
        {mounted && (
          <Zoom in={show}>
            <Tooltip title={t.floating.scrollTop} placement="left">
              <Fab
                size="small"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                sx={(theme) => ({
                  ...fabBase,
                  background: theme.palette.background.paper,
                  color: "primary.main",
                  border: borderPrimaryLight(theme),
                  boxShadow: `0 4px 16px ${textPrimaryAlpha(theme, 0.1)}`,

                  "&:hover": {
                    background: textPrimaryAlpha(theme, 0.06),
                  },
                })}
              >
                <KeyboardArrowUpIcon fontSize="small" />
              </Fab>
            </Tooltip>
          </Zoom>
        )}

        {/* Facebook */}
        <Tooltip title={t.floating.facebook} placement="left">
          <Fab
            size="small"
            component="a"
            href={contactLinks.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              ...fabBase,
              background: brand.facebook.main,
              color: "common.white",

              "&:hover": {
                background: brand.facebook.hover,
              },
            }}
          >
            <FacebookIcon sx={{ fontSize: "1.1rem" }} />
          </Fab>
        </Tooltip>

        {/* Phone */}
        <Tooltip title={t.floating.phone} placement="left">
          <Fab
            size="small"
            component="a"
            href={`tel:${contactLinks.phoneTel}`}
            sx={(theme) => ({
              ...fabBase,
              background: gradientPrimaryBg(theme),
              color: "common.white",

              boxShadow: `0 4px 16px ${textPrimaryAlpha(theme, 0.4)}`,

              animation: "pulse 2.5s ease infinite",

              "@keyframes pulse": {
                "0%,100%": {
                  boxShadow: `0 4px 16px ${textPrimaryAlpha(theme, 0.4)}`,
                },
                "50%": {
                  boxShadow: `0 4px 28px ${textPrimaryAlpha(theme, 0.7)}`,
                },
              },
            })}
          >
            <PhoneIcon sx={{ fontSize: "1.1rem" }} />
          </Fab>
        </Tooltip>
      </Box>
    </Zoom>
  );
}
