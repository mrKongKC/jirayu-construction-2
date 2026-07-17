"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface AppActionContextValue {
  scrolled: boolean;
  isAtBottom: boolean;
  isClickedDrawer: boolean;
  setIsClickDrawer: (val: boolean) => void;
}

const AppActionContext = createContext<AppActionContextValue>({
  scrolled: false,
  isAtBottom: false,
  isClickedDrawer: false,
  setIsClickDrawer: () => {},
});

export function AppActionProvider({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolledState] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isClickedDrawer, setIsClickDrawer] = useState(false);

  // Global Scroll Logic
  useEffect(() => {
    const handleScroll = () => {
      const heroContent = document.querySelector("#hero-content");
      const navbar = document.querySelector("header");
      const OFFSET = 80;

      if (!heroContent || !navbar) {
        setScrolledState(window.scrollY > 50);
        return;
      }

      const rect = heroContent.getBoundingClientRect();
      const navbarHeight = navbar.clientHeight;

      setScrolledState(rect.top < navbarHeight - OFFSET);

      const bottomFooter = document.getElementById(
        "bottom-footer-legal-copyright",
      );
      if (bottomFooter) {
        const rect = bottomFooter.getBoundingClientRect();
        const visible = rect.top <= window.innerHeight;
        setIsAtBottom(visible);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppActionContext.Provider
      value={{ scrolled, isAtBottom, isClickedDrawer, setIsClickDrawer }}
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
