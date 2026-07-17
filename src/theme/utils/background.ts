import { Theme, alpha } from "@mui/material/styles";

export const bgPrimarySoft = (theme: Theme) =>
  alpha(theme.palette.primary.main, 0.06);

export const bgPrimaryHover = (theme: Theme) =>
  alpha(theme.palette.primary.main, 0.08);

export const bgPrimaryMedium = (theme: Theme) =>
  alpha(theme.palette.primary.main, 0.15);

export const bgWhiteHover = (theme: Theme) =>
  alpha(theme.palette.common.white, 0.12);

export const bgPrimaryGradientSoft = (theme: Theme) =>
  `linear-gradient(
    135deg,
    ${alpha(theme.palette.primary.main, 0.1)},
    ${alpha(theme.palette.primary.light, 0.06)}
  )`;
