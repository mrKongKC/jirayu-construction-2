import { Theme, alpha } from "@mui/material/styles";

export const borderPrimaryLight = (theme: Theme) =>
  `1px solid ${alpha(theme.palette.primary.main, 0.1)}`;

export const borderPrimaryMedium = (theme: Theme) =>
  `1px solid ${alpha(theme.palette.primary.main, 0.12)}`;

export const borderPrimarySoft = (theme: Theme) =>
  `1px solid ${alpha(theme.palette.primary.main, 0.15)}`;

export const borderWhiteSoft = (theme: Theme) =>
  `1px solid ${alpha(theme.palette.common.white, 0.4)}`;

export const borderPrimaryStrongCircle = (theme: Theme) =>
  `2px solid ${theme.palette.primary.main}`;

export const borderPrimaryCustom = (theme: Theme) =>
  `1px solid ${alpha(theme.palette.primary.main, 0.2)}`;