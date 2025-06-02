"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function AnalyticsPageviewTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      // Fire page_view event
      window.gtag("event", "page_view", {
        page_path: pathname,
      });

      // Optionally fire custom "click" for tracking
      window.gtag("event", "click", {
        event_category: "navigation",
        event_label: pathname,
      });
    }
  }, [pathname]);

  return null;
}
