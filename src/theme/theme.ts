"use client";

import { alpha, createTheme, responsiveFontSizes } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypeBackground {
    inverse: string;
    elevated: string;
  }

  interface Shape {
    borderRadius: number;
    cardRadius: number;
    cardRadiusSm: number;
    cardRadiusLg: number;
  }

  interface ShapeOptions {
    borderRadius?: number;
    cardRadius?: number;
    cardRadiusSm?: number;
    cardRadiusLg?: number;
  }

  interface Palette {
    custom: {
      amber: string;
      amberSoft: string;
      amberHover: string;

      overlayDark: string;
      overlayMid: string;
      overlayLight: string;
      overlayGlass: string;

      whiteSoft: string;
      white: string;
    };
  }

  interface PaletteOptions {
    custom?: {
      amber?: string;
      amberSoft?: string;
      amberHover?: string;

      overlayDark?: string;
      overlayMid?: string;
      overlayLight?: string;
      overlayGlass?: string;

      whiteSoft?: string;
      white?: string;
    };
  }

  interface PaletteColor {
    lighter?: string;
  }
  interface SimplePaletteColorOptions {
    lighter?: string;
  }
}

const SYSTEM_FONT = [
  "ui-sans-serif",
  "-apple-system",
  "system-ui",
  '"Segoe UI"',
  "Helvetica",
  '"Apple Color Emoji"',
  "Arial",
  "sans-serif",
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
].join(", ");

let theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#D97706",
      light: "#F59E0B",
      lighter: "#FCD34D",
      dark: "#B45309",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#1E3A5F",
      light: "#2E5080",
      dark: "#122540",
      contrastText: "#ffffff",
    },
    background: {
      default: "#F9F7F4",
      paper: "#FFFFFF",
      elevated: "#FFFFFF",
      inverse: "#1A1A1A",
    },
    text: {
      primary: "#1A1A1A",
      secondary: "#6B7280",
    },
    divider: "rgba(0,0,0,0.08)",

    custom: {
      amber: "#F59E0B",
      amberSoft: "rgba(217,119,6,0.15)",
      amberHover: "rgba(217,119,6,0.06)",
      overlayDark: "rgba(15,15,15,0.92)",
      overlayMid: "rgba(15,15,15,0.75)",
      overlayGlass: "rgba(10,10,10,0.6)",
      overlayLight: "rgba(15,15,15,0.3)",
      whiteSoft: "rgba(255,255,255,0.6)",
      white: "#FFFFFF",
    },
  },

  typography: {
    fontFamily: SYSTEM_FONT,
    h1: { fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.1 },
    h2: { fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.15 },
    h3: { fontWeight: 600, letterSpacing: "-0.02em" },
    h4: { fontWeight: 600, letterSpacing: "-0.015em" },
    h5: { fontWeight: 600, letterSpacing: "-0.01em" },
    h6: { fontWeight: 600 },
    body1: { lineHeight: 1.75, letterSpacing: "0.005em" },
    body2: { lineHeight: 1.7 },
    button: { fontWeight: 600, letterSpacing: "0.02em", textTransform: "none" },
    caption: { letterSpacing: "0.06em", fontWeight: 500 },
    overline: { letterSpacing: "0.1em", fontWeight: 600, fontSize: "0.7rem" },
  },

  shape: {
    borderRadius: 4,
    cardRadius: 24,
    cardRadiusSm: 16,
    cardRadiusLg: 32,
  },
});

theme = createTheme(theme, {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: theme.palette.background.default,
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "12px 28px",
          fontSize: "0.875rem",
          fontWeight: 600,
          transition: "all 0.22s ease",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
            transform: "translateY(-1px)",
          },
        },
        contained: {
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
          "&:hover": {
            background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
          },
        },
        outlined: {
          borderColor: theme.palette.primary.main,
          color: theme.palette.primary.main,
          "&:hover": {
            borderColor: theme.palette.primary.dark,
            backgroundColor: theme.palette.custom.amberHover,
          },
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          border: `1px solid ${theme.palette.divider}`,
          boxShadow: `0 2px 8px ${alpha(theme.palette.common.black, 0.05)}`,
          "&:hover": {
            boxShadow: `0 12px 40px ${alpha(theme.palette.common.black, 0.12)}`,
            transform: "translateY(-4px)",
            borderColor: alpha(theme.palette.primary.main, 0.2),
          },
        },
      },
    },
  },
});

export default responsiveFontSizes(theme);
