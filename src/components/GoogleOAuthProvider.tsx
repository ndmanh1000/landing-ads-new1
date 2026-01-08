"use client";

import { GoogleOAuthProvider as GoogleProvider } from "@react-oauth/google";
import { ReactNode } from "react";

// SECURITY: Never use fallback client ID - must be explicitly configured
const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

export default function GoogleOAuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  if (!GOOGLE_CLIENT_ID) {
    console.error("[GoogleOAuthProvider] NEXT_PUBLIC_GOOGLE_CLIENT_ID is not configured");
    return <>{children}</>;
  }

  return <GoogleProvider clientId={GOOGLE_CLIENT_ID}>{children}</GoogleProvider>;
}
