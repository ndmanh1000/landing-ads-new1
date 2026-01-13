import { posthog, LANDING_PAGE_ID, ANALYTICS_SOURCE } from "@/lib/posthog";

export function useTracking() {
    // Track click nút CTA
    const trackCTA = (ctaName: string, location: string) => {
        if (typeof window === "undefined") return;

        posthog.capture("landing_cta_click", {
            source: ANALYTICS_SOURCE,
            landing_page: LANDING_PAGE_ID,
            cta_name: ctaName,
            location,
        });
    };

    // Track đăng ký/đăng nhập
    const trackAuth = (type: "signup" | "login", location: string) => {
        posthog.capture("landing_auth_attempt", {
            source: ANALYTICS_SOURCE,
            landing_page: LANDING_PAGE_ID,
            auth_type: type,
            location,
        });
    };

    return { trackCTA, trackAuth };
}
