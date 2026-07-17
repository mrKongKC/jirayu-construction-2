import { Theme, alpha } from "@mui/material/styles";

export const shadowPrimaryLight = (theme: Theme) =>
  `0 4px 12px ${alpha(theme.palette.primary.main, 0.25)}`;

export const shadowPrimarySoft = (theme: Theme) =>
  `0 8px 24px ${alpha(theme.palette.primary.main, 0.45)}`;

export const shadowPrimaryStrong = (theme: Theme) =>
  `0 12px 40px ${alpha(theme.palette.primary.main, 0.6)}`;

export const shadowPrimaryMedium = (theme: Theme) =>
  `0 16px 48px ${alpha(theme.palette.primary.main, 0.35)}`;

export const shadowPrimaryCircle = (theme: Theme) =>
  `0 4px 16px ${alpha(theme.palette.primary.main, 0.12)}`;

export const shadowPrimaryCircleHover = (theme: Theme) =>
  `0 8px 32px ${alpha(theme.palette.primary.main, 0.25)}`;

export const shadowPrimarySubtle = (theme: Theme) =>
  `0 4px 16px ${alpha(theme.palette.primary.main, 0.12)}`;