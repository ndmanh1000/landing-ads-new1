"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import Metadata from "@/components/Common/Metadata";
import LoginModal from "@/components/LoginModal";
import { Inter } from "next/font/google";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        {/* Favicon */}
        <link type="image/x-icon" href="/images/favicon.ico" rel="canonical" />
        <link type="image/png" sizes="32x32" href="/images/favicon.ico" rel="canonical" />
        <link sizes="180x180" href="/images/favicon.ico" rel="canonical" />

        {/* Primary Meta Tags */}
        <title><h1>Blue Edu</h1></title>

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blue Edu" />
        <meta name="twitter:description" content="Blue Edu" />
        <meta name="twitter:image" content="/images/logo/Thumbnail.jpeg" />
        <meta name="twitter:image:alt" content="Blue Edu" />
        <meta name="google-site-verification" content="D7k4LgS55FY2Fs9HI_4Vn2aWzZYECQuNN1w-hB89pDU" />
      </head>

      <body className={`bg-[#FCFCFC] ${inter.className}`}>
        <Metadata />
        <Providers>
          <div className="mt-0 md:mt-24">
            <Header />
          </div>

          {children}
          <Footer />
          <ScrollToTop />
          <LoginModal />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";

