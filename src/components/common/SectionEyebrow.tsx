"use client";

import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";
import { textEyebrow } from "@/theme/utils";

type Props = {
  title: ReactNode;
};

export default function SectionEyebrow({ title }: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        mb: 2,
      }}
    >
      <Box
        sx={(theme) => ({
          width: 32,
          height: 3,
          background: theme.palette.primary.main,
          borderRadius: 2,
        })}
      />

      <Typography
        sx={(theme) => ({
          ...textEyebrow,
          color: theme.palette.primary.main,
        })}
      >
        {title}
      </Typography>
    </Box>
  );
}
