"use client";

import { useEffect } from "react";
import { initPostHog } from "@/lib/posthog";

/**
 * PostHog initialization component
 * Initializes PostHog on client-side mount
 */
export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initPostHog();
  }, []);

  return <>{children}</>;
}
