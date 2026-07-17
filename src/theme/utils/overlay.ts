import { alpha, Theme } from "@mui/material/styles";

export const overlayGradient = (theme: Theme) =>
  `linear-gradient(
    to right,
    ${theme.palette.custom.overlayDark} 0%,
    ${theme.palette.custom.overlayMid} 55%,
    ${theme.palette.custom.overlayLight} 100%
  )`;

export const overlayFadeTop = (theme: Theme) =>
  `linear-gradient(
    to top,
    ${theme.palette.custom.overlayDark} 0%,
    transparent 40%
  )`;


export const overlayHeroDark = (theme: Theme) =>
  `linear-gradient(
    135deg,
    ${alpha(theme.palette.common.black, 0.9)} 0%,
    ${alpha(theme.palette.common.black, 0.54)} 60%,
    ${alpha(theme.palette.common.black, 0.54)} 100%
  )`;