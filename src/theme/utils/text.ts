import { Theme, alpha } from "@mui/material/styles";

export const textSecondarySoft = (theme: Theme) =>
  alpha(theme.palette.text.secondary, 0.7);

export const textWhiteStrong = (theme: Theme) =>
  alpha(theme.palette.common.white, 0.75);

export const textWhiteMedium = (theme: Theme) =>
  alpha(theme.palette.common.white, 0.45);

export const textWhiteSubtle = (theme: Theme) =>
  alpha(theme.palette.common.white, 0.3);

export const textWhiteHover = (theme: Theme) => theme.palette.common.white;

// dynamic
export const textPrimaryAlpha = (theme: Theme, opacity: number) =>
  alpha(theme.palette.primary.main, opacity);

export const textPrimarySoft = (theme: Theme) =>
  alpha(theme.palette.primary.main, 0.6);

export const textEyebrow = {
  fontSize: "0.72rem",
  fontWeight: 600,
  letterSpacing: "0.15em",
  textTransform: "uppercase",
};

export const textLabel = {
  fontSize: "0.8rem",
  fontWeight: 600,
};

export const textBodySmall = {
  fontSize: "0.85rem",
};
