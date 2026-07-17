import { Box } from "@mui/material";
import { gradientPrimaryLine } from "@/theme/utils";

export default function TopGradientLine() {
  return (
    <Box
      sx={(theme) => ({
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        background: gradientPrimaryLine(theme),
        zIndex: 3,
      })}
    />
  );
}
