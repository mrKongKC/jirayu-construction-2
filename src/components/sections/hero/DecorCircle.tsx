import { Box } from "@mui/material";
import { circleRingPrimary } from "@/theme/utils";

export default function DecorCircle() {
  return (
    <Box
      sx={(theme) => {
        const ring = circleRingPrimary(theme);

        return {
          position: "absolute",
          right: { xs: -80, md: 60 },
          top: "50%",
          transform: "translateY(-50%)",
          width: { xs: 260, md: 460 },
          height: { xs: 260, md: 460 },
          border: ring.borderOuter,
          borderRadius: "50%",
          zIndex: 2,

          "&::before": {
            content: '""',
            position: "absolute",
            inset: 32,
            border: ring.borderMid,
            borderRadius: "50%",
          },

          "&::after": {
            content: '""',
            position: "absolute",
            inset: 64,
            border: ring.borderInner,
            borderRadius: "50%",
          },
        };
      }}
    />
  );
}