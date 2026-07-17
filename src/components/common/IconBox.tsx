"use client";

import { Box } from "@mui/material";
import {
  gradientPrimarySoftAlt,
  borderPrimaryCustom,
} from "@/theme/utils";

export default function IconBox({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={(theme) => ({
        width: 50,
        height: 50,
        background: gradientPrimarySoftAlt(theme),
        border: borderPrimaryCustom(theme),
        borderRadius: 2.5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p:2
      })}
    >
      {children}
    </Box>
  );
}