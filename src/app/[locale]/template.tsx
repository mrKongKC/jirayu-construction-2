"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function LocaleTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.animation = "none";
    void el.offsetHeight;
    el.style.animation = "";
  }, [pathname]);

  return (
    <div ref={ref} className="page-transition">
      {children}
    </div>
  );
}
