"use client";

import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import theme from "@/theme/theme";
import { I18nProvider } from "@/components/provider/I18nProvider";
import { AppActionProvider } from "@/components/provider/AppActionProvider";

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppActionProvider>
          <I18nProvider>{children}</I18nProvider>
        </AppActionProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
