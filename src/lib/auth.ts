const API_BASE = process.env.NEXT_PUBLIC_API_URL || "https://api.blueedu.vn";

// SECURITY: Validate redirect URL against trusted domains to prevent open redirect
const TRUSTED_DOMAINS = ["app.blueedu.vn"];
const DEFAULT_REDIRECT = "https://app.blueedu.vn/app/dashboard";

function getValidatedRedirectUrl(): string {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL;
  if (!appUrl) return DEFAULT_REDIRECT;

  try {
    const url = new URL(appUrl);
    const hostWithPort = url.port ? `${url.hostname}:${url.port}` : url.hostname;
    if (TRUSTED_DOMAINS.some((d) => hostWithPort === d || hostWithPort.endsWith(`.${d}`))) {
      return `${appUrl}/app/dashboard`;
    }
    console.warn("[Auth] Untrusted redirect domain, using default:", appUrl);
    return DEFAULT_REDIRECT;
  } catch {
    return DEFAULT_REDIRECT;
  }
}

const REDIRECT_URL = getValidatedRedirectUrl();

export type User = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber?: string;
  avatarUrl?: string;
};

export type LoginResponse = {
  code: number;
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
    user: User;
    /** True if this is a new user registration, false if existing user login */
    isNewUser: boolean;
  };
};

export async function googleLogin(idToken: string): Promise<LoginResponse> {
  // Add setCookie=true for cross-domain cookie auth
  const response = await fetch(`${API_BASE}/api/v1/auth/google?setCookie=true`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include", // Required for cookies to be set
    body: JSON.stringify({ idToken }),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  return response.json();
}

export function redirectToDashboard() {
  window.location.href = REDIRECT_URL;
}
