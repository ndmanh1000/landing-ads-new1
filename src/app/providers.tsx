"use client";

import { ThemeProvider } from "next-themes";
import GoogleOAuthProvider from "@/components/GoogleOAuthProvider";
import { LoginProvider } from "@/contexts/LoginContext";
import { PostHogProvider } from "@/components/PostHogProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
      <PostHogProvider>
        <GoogleOAuthProvider>
          <LoginProvider>{children}</LoginProvider>
        </GoogleOAuthProvider>
      </PostHogProvider>
    </ThemeProvider>
  );
}
