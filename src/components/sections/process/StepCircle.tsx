import { Box, Typography } from "@mui/material";
import { textPrimaryAlpha, shadowPrimarySubtle } from "@/theme/utils";

export default function StepCircle({ index }: { index: number }) {
  return (
    <Box
      sx={(theme) => ({
        width: 72,
        height: 72,
        borderRadius: "50%",
        background: theme.palette.background.paper,

        border: `2px solid ${textPrimaryAlpha(theme, 0.25)}`,
        boxShadow: shadowPrimarySubtle(theme),

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        zIndex: 1,
        transition: "all 0.3s ease",

        "&:hover": {
          border: `2px solid ${theme.palette.primary.main}`,
          boxShadow: `0 8px 32px ${textPrimaryAlpha(theme, 0.25)}`,
          background: `${theme.palette.primary.main}`,

          "& .MuiTypography-root": {
            color: theme.palette.common.white,
          },
        },
      })}
    >
      <Typography
        sx={{
          fontWeight: 800,
          color: "primary.main",
        }}
      >
        {String(index).padStart(2, "0")}
      </Typography>
    </Box>
  );
}
