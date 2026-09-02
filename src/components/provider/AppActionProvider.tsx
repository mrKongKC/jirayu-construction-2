"use client";

import React, { createContext, useContext, useState, useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";
import { isHomePathname } from "@/lib/locale-path";

const SCROLL_TOP_THRESHOLD = 400;
const PARALLAX_FACTOR = 0.35;

interface AppActionContextValue {
  scrolled: boolean;
  isAtBottom: boolean;
  showScrollTop: boolean;
  isClickedDrawer: boolean;
  setIsClickDrawer: (val: boolean) => void;
}

const AppActionContext = createContext<AppActionContextValue>({
  scrolled: false,
  isAtBottom: false,
  showScrollTop: false,
  isClickedDrawer: false,
  setIsClickDrawer: () => {},
});

export function AppActionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = useMemo(() => isHomePathname(pathname), [pathname]);

  const [scrolled, setScrolledState] = useState(() => !isHomePage);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isClickedDrawer, setIsClickDrawer] = useState(false);

  useEffect(() => {
    const root = document.documentElement;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollTop(scrollY > SCROLL_TOP_THRESHOLD);

      const bottomFooter = document.getElementById(
        "bottom-footer-legal-copyright",
      );
      if (bottomFooter) {
        const rect = bottomFooter.getBoundingClientRect();
        setIsAtBottom(rect.top <= window.innerHeight);
      } else {
        setIsAtBottom(false);
      }

      if (!isHomePage) {
        setScrolledState(true);
        return;
      }

      root.style.setProperty(
        "--hero-parallax",
        `${scrollY * PARALLAX_FACTOR}px`,
      );

      const heroContent = document.querySelector("#hero-content");
      const navbar = document.querySelector("header");
      const OFFSET = 80;

      if (!heroContent || !navbar) {
        setScrolledState(scrollY > 50);
        return;
      }

      const rect = heroContent.getBoundingClientRect();
      const navbarHeight = navbar.clientHeight;
      setScrolledState(rect.top < navbarHeight - OFFSET);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      root.style.removeProperty("--hero-parallax");
    };
  }, [isHomePage]);

  return (
    <AppActionContext.Provider
      value={{
        scrolled,
        isAtBottom,
        showScrollTop,
        isClickedDrawer,
        setIsClickDrawer,
      }}
    >
      {children}
    </AppActionContext.Provider>
  );
}

export function useAppAction() {
  const context = useContext(AppActionContext);
  if (!context) {
    throw new Error("useAppAction must be used within an AppActionProvider");
  }
  return context;
}
