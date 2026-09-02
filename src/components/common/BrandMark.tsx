import { Box, Typography } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";
import { gradientPrimaryBg, shadowPrimaryLight } from "@/theme/utils";

interface BrandMarkProps {
  title: string;
  tagline?: string;
  size?: "sm" | "md";
  sx?: SxProps<Theme>;
  titleSx?: SxProps<Theme>;
  taglineSx?: SxProps<Theme>;
}

const sizes = {
  sm: { mark: 38, title: "1rem", tagline: "0.6rem" },
  md: { mark: 40, title: "1.1rem", tagline: "0.58rem" },
};

export default function BrandMark({
  title,
  tagline,
  size = "sm",
  sx,
  titleSx,
  taglineSx,
}: BrandMarkProps) {
  const dim = sizes[size];

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, ...sx }}>
      <Box
        sx={(theme) => ({
          width: dim.mark,
          height: dim.mark,
          background: gradientPrimaryBg(theme),
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 800,
          fontSize: size === "sm" ? "1.1rem" : undefined,
          color: "common.white",
          boxShadow: shadowPrimaryLight(theme),
          flexShrink: 0,
        })}
      >
        J
      </Box>
      <Box>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: dim.title,
            lineHeight: 1,
            letterSpacing: size === "sm" ? "-0.01em" : undefined,
            ...titleSx,
          }}
        >
          {title}
        </Typography>
        {tagline && (
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: dim.tagline,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              ...taglineSx,
            }}
          >
            {tagline}
          </Typography>
        )}
      </Box>
    </Box>
  );
}
