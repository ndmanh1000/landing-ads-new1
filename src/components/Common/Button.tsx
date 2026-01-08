"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  showArrow?: boolean;
  className?: string;
  fullWidth?: boolean;
}

const Button = ({
  children,
  href = "",
  onClick,
  variant = "primary",
  size = "md",
  icon,
  showArrow = true,
  className = "",
  fullWidth = false,
}: ButtonProps) => {

  const sizeClasses = {
    sm: "px-6 py-2.5 text-sm sm:px-7 sm:py-3",
    md: "px-6 py-3 text-sm sm:px-8 sm:py-3",
    lg: "px-8 py-4 text-base sm:px-10 sm:py-4",
  };


  const variantClasses = {
    primary:
      "bg-gradient-to-r from-primary via-blue-600 to-primary text-white shadow-xl hover:shadow-2xl hover:shadow-primary/50",
    secondary:
      "border-2 border-primary bg-white text-primary shadow-lg hover:bg-gradient-to-r hover:from-primary/5 hover:via-blue-50 hover:to-primary/5 hover:shadow-xl hover:shadow-primary/20 dark:bg-gray-800 dark:border-primary dark:text-primary dark:hover:bg-primary/10",
  };

  const baseClasses = `group relative w-full overflow-hidden rounded-lg text-center font-bold transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 ${fullWidth ? "w-full" : "sm:w-auto"
    } ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const buttonContent = (
    <>

      {variant === "primary" && (
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-600 via-primary to-blue-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            backgroundSize: "200% 100%",
            animation: "shimmer 3s linear infinite",
          }}
        ></div>
      )}

      <span className="relative z-10 flex items-center justify-center">
        {icon && <span className="mr-2 text-base animate-bounce">{icon}</span>}
        <span>{children}</span>
        {showArrow && (
          <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        )}
      </span>


      {variant === "primary" && (
        <span
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent blur-xl"
          style={{
            animation: `shadowRun 3s ease-in-out infinite`,
          }}
        ></span>
      )}


      {variant === "primary" && (
        <span className="absolute -inset-1 rounded-lg bg-primary/50 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"></span>
      )}


      {variant === "primary" && (
        <span className="absolute inset-0 rounded-lg border-2 border-white/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:animate-ping"></span>
      )}


      {variant === "secondary" && (
        <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-primary via-blue-500 to-primary opacity-0 blur transition-opacity duration-300 group-hover:opacity-50"></div>
      )}

      {/* Shine effect - chỉ cho secondary */}
      {variant === "secondary" && (
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 group-hover:translate-x-full"></span>
      )}
    </>
  );


  if (href && onClick) {
    return (
      <Link href={href} onClick={onClick} className={baseClasses} rel="noopener">
        {buttonContent}
      </Link>
    );
  }


  if (onClick) {
    return (
      <button onClick={onClick} className={baseClasses}>
        {buttonContent}
      </button>
    );
  }


  return (
    <Link href={href} className={baseClasses} rel="noopener">
      {buttonContent}
    </Link>
  );
};

export default Button;
