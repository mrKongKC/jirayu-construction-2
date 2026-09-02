import { Theme, alpha } from "@mui/material/styles";
import { shadowPrimaryMedium } from "./shadow";
import { gradientPrimaryBg } from "./gradient";

export const circleRingPrimary = (theme: Theme) => ({
  borderOuter: `1px solid ${alpha(theme.palette.primary.main, 0.12)}`,
  borderMid: `1px solid ${alpha(theme.palette.primary.main, 0.08)}`,
  borderInner: `1px solid ${alpha(theme.palette.primary.main, 0.05)}`,
});

export const surfacePrimary = (theme: Theme) => ({
  background: gradientPrimaryBg(theme),
  boxShadow: shadowPrimaryMedium(theme),
});
