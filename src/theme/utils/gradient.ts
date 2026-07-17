import { alpha, Theme } from "@mui/material/styles";

export const gradientPrimaryText = (theme: Theme) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});

export const gradientPrimaryTextStrong = (theme: Theme) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.lighter} 50%, ${theme.palette.primary.main} 100%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});

export const gradientPrimaryLine = (theme: Theme) =>
  `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light}, ${theme.palette.primary.main})`;

export const gradientPrimaryBg = (theme: Theme) =>
  `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`;

export const gradientPrimaryConnector = (theme: Theme) =>
  `linear-gradient(
    90deg,
    ${alpha(theme.palette.primary.main, 0.1)} 0%,  
    ${alpha(theme.palette.primary.main, 0.25)} 20%, 
    ${alpha(theme.palette.primary.main, 0.25)} 80%, 
    ${alpha(theme.palette.primary.main, 0.1)} 100%  
  )`;

export const gradientPrimarySoftAlt = (theme: Theme) =>
  `linear-gradient(
    135deg,
    ${alpha(theme.palette.primary.main, 0.12)},
    ${alpha(theme.palette.primary.light, 0.08)}
  )`;
