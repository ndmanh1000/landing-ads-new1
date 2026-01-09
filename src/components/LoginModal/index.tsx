"use client";

import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { useLogin } from "@/contexts/LoginContext";
import { googleLogin, redirectToDashboard } from "@/lib/auth";
import { trackAuthAttempt, trackAuthSuccess } from "@/lib/posthog";

export default function LoginModal() {
  const {
    isLoginModalOpen,
    closeLoginModal,
    isLoading,
    setIsLoading,
    error,
    setError,
  } = useLogin();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isLoginModalOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLoginModal();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isLoginModalOpen, closeLoginModal]);

  const handleGoogleSuccess = async (credentialResponse: CredentialResponse) => {
    if (!credentialResponse.credential) {
      setError("Không nhận được thông tin đăng nhập từ Google");
      return;
    }

    // Track auth attempt (Google OAuth doesn't distinguish signup/login)
    trackAuthAttempt("google");

    setIsLoading(true);
    setError(null);

    try {
      const response = await googleLogin(credentialResponse.credential);

      if (response.code === 1 && response.data) {
        // Track successful auth (register or login) - MUST await before redirect
        await trackAuthSuccess("google", response.data.isNewUser);

        // Backend sets cookies, just redirect
        redirectToDashboard();
      } else {
        setError(response.message || "Đăng nhập thất bại");
        setIsLoading(false);
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Có lỗi xảy ra. Vui lòng thử lại.");
      setIsLoading(false);
    }
  };

  const handleGoogleError = () => {
    setError("Đăng nhập Google thất bại. Vui lòng thử lại.");
  };

  if (!mounted || !isLoginModalOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 backdrop-blur-sm transition-opacity duration-300"
      onClick={closeLoginModal}
      role="dialog"
      aria-modal="true"
      aria-labelledby="login-modal-title"
    >
      <div
        className="relative w-full max-w-md px-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeLoginModal}
          className="absolute -top-12 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:scale-110 hover:bg-white/20 active:scale-95"
          aria-label="Đóng"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Modal Content */}
        <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-gray-800">
          {/* Loading Overlay */}
          {isLoading && (
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-white/80 dark:bg-gray-800/80">
              <div className="flex flex-col items-center gap-3">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Đang đăng nhập...
                </p>
              </div>
            </div>
          )}

          <div className="p-8">
            {/* Logo/Branding */}
            <div className="mb-6 text-center">
              <h2
                id="login-modal-title"
                className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white"
              >
                Bắt đầu dùng thử BlueEDU
              </h2>
              <p className="text-sm md:text-[11px] text-gray-600 dark:text-gray-400 text-center mt-2 md:mt-2">
                Đăng nhập nhanh để trải nghiệm miễn phí công cụ giảng dạy
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-4 rounded-lg bg-red-50 p-3 text-center text-sm text-red-600 dark:bg-red-900/20 dark:text-red-400">
                {error}
              </div>
            )}

            {/* Google Login Button */}
            <div className="flex flex-col items-center gap-3">
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={handleGoogleError}
                theme="outline"
                size="large"
                text="continue_with"
                shape="rectangular"
                width="300"
              />

            </div>

            {/* Terms */}
            <p className="mt-6 text-center text-xs text-gray-500 dark:text-gray-400">
              Bằng việc đăng nhập, bạn đồng ý với{" "}
              <a
                href="https://app.blueedu.vn/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Điều khoản sử dụng
              </a>{" "}
              và{" "}
              <a
                href="https://app.blueedu.vn/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Chính sách bảo mật
              </a>
            </p>
          </div>
        </div>

        {/* Instructions */}
        <p className="mt-4 text-center text-sm text-white/70">
          Nhấn ESC hoặc click bên ngoài để đóng
        </p>
      </div>
    </div>,
    document.body
  );
}
