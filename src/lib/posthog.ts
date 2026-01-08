import posthog from "posthog-js";

// PostHog configuration for landing page
// Uses same project as main app (Frontend) for cross-domain tracking

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com";

// Source identifier to distinguish landing from main app in analytics
export const ANALYTICS_SOURCE = "landing" as const;

let isInitialized = false;

/**
 * Initialize PostHog (client-side only)
 * Must be called in useEffect or client component
 */
export function initPostHog() {
  if (typeof window === "undefined") return;
  if (isInitialized) return;
  if (!POSTHOG_KEY) {
    console.warn("[PostHog] Missing NEXT_PUBLIC_POSTHOG_KEY");
    return;
  }

  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    // Disable auto pageview - we capture manually with source property
    capture_pageview: false,
    capture_pageleave: true,
    // Error tracking
    capture_exceptions: true,
    // Debug in development
    debug: process.env.NODE_ENV === 'development',
    // Persistence for super properties
    persistence: 'localStorage+cookie',
    // IMPORTANT: Use loaded callback to ensure SDK is ready before capturing
    loaded: (posthogInstance) => {
      // Register super properties FIRST
      posthogInstance.register({
        source: ANALYTICS_SOURCE,
        domain: window.location.hostname,
      });
      // Then capture pageview with source attached
      posthogInstance.capture('$pageview', {
        source: ANALYTICS_SOURCE, // Also pass explicitly to be safe
      });

      if (process.env.NODE_ENV === 'development') {
        console.log('[PostHog] Initialized with source:', ANALYTICS_SOURCE);
      }
    },
  });

  isInitialized = true;
}

/**
 * Track custom event with source property
 */
export function trackEvent(eventName: string, properties?: Record<string, unknown>) {
  if (typeof window === "undefined" || !isInitialized) return;

  posthog.capture(eventName, {
    source: ANALYTICS_SOURCE,
    ...properties,
  });
}

/**
 * Track CTA button click on landing page
 */
export function trackCTAClick(ctaName: string, location: string) {
  trackEvent("landing_cta_click", {
    cta_name: ctaName,
    location,
    page_url: window.location.pathname,
  });
}

/**
 * Track auth attempt from landing (button click, before API call)
 * Note: Google OAuth doesn't distinguish signup/login - same button, same flow
 */
export function trackAuthAttempt(method: "google" | "email") {
  trackEvent("landing_auth_attempt", {
    method,
  });
}

/**
 * Track successful auth from landing (after API response)
 * Returns a promise that resolves after event is captured (with timeout)
 * IMPORTANT: Use this before redirecting to ensure event is sent
 * SAFETY: Never throws - tracking failures must not break auth flow
 * @param isNewUser - true = new registration, false = existing user login
 */
export function trackAuthSuccess(method: "google" | "email", isNewUser: boolean): Promise<void> {
  return new Promise((resolve) => {
    try {
      if (typeof window === "undefined" || !isInitialized) {
        resolve();
        return;
      }

      const eventName = isNewUser ? "user_registered" : "user_login";

      // Use capture with callback to ensure event is queued
      posthog.capture(eventName, {
        source: ANALYTICS_SOURCE,
        method,
      });

      // Give PostHog time to flush the event before redirect
      // PostHog batches events, so we need a small delay
      setTimeout(resolve, 300);
    } catch (err) {
      // NEVER let tracking break auth flow
      console.error("[PostHog] trackAuthSuccess failed:", err);
      resolve();
    }
  });
}

/**
 * Track video play on landing page
 */
export function trackVideoPlay(videoId: string, videoTitle?: string) {
  trackEvent("landing_video_play", {
    video_id: videoId,
    video_title: videoTitle,
  });
}

/**
 * Track section view (for scroll tracking)
 */
export function trackSectionView(sectionId: string, sectionName: string) {
  trackEvent("landing_section_view", {
    section_id: sectionId,
    section_name: sectionName,
  });
}

/**
 * Track external link click
 */
export function trackExternalLink(url: string, linkText?: string) {
  trackEvent("external_link_click", {
    url,
    link_text: linkText,
    destination: new URL(url).hostname,
  });
}

export { posthog };
