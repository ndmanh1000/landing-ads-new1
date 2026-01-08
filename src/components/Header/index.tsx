"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLogin } from "@/contexts/LoginContext";

const Header = () => {
  const { openLoginModal } = useLogin();

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleStickyNavbar = () => {
      if (window.scrollY >= 80) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  const usePathName = usePathname();

  return (
    <>
      <header
        className={`header top-0 left-0 z-40 flex w-full items-center ${sticky
          ? "dark:bg-gray-dark dark:shadow-sticky-dark shadow-sticky fixed z-[9999] bg-white/80 backdrop-blur-xs transition"
          : "absolute bg-transparent z-40"
          }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between w-full">
            <div className="w-auto max-w-full px-4">
              <Link
                href="/"
                onClick={(e) => {
                  // If already on home page, scroll to top
                  if (usePathName === "/") {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                className={`header-logo block ${sticky ? "py-2" : "py-4"
                  } `}
              >
                <Image
                  src="/images/logo/logo5.webp"
                  alt="logo"
                  width={160}
                  height={50}
                  className="h-auto w-auto max-w-[120px] md:max-w-[160px] lg:max-w-[200px] object-contain"
                  priority
                />
              </Link>
            </div>
            <div className="px-4">
              <button
                onClick={openLoginModal}
                className="rounded-md bg-primary cursor-pointer px-6 py-2.5 text-base font-medium text-white transition-all duration-300 hover:bg-primary/90"
              >
                Nhận tài liệu
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
