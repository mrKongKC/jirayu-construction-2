import { Box } from "@mui/material";
import { overlayGradient, overlayFadeTop } from "@/theme/utils";

export default function HeroOverlay() {
  return (
    <>
      <Box
        sx={(theme) => ({
          position: "absolute",
          inset: 0,
          background: overlayGradient(theme),
          zIndex: 1,
        })}
      />
      <Box
        sx={(theme) => ({
          position: "absolute",
          inset: 0,
          background: overlayFadeTop(theme),
          zIndex: 1,
        })}
      />
    </>
  );
}