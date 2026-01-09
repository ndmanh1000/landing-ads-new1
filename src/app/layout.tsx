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
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon.ico" />

        {/* Primary Meta Tags */}
        <title>Blue Edu - LMS gọn nhẹ + AI siêu tốc</title>
        <meta name="title" content="Blue Edu - LMS gọn nhẹ + AI siêu tốc" />
        <meta name="description" content="Blue Edu - LMS gọn nhẹ + AI siêu tốc" />
        <meta name="image" content="/images/logo/Thumbnail.jpeg" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Blue Edu" />
        <meta property="og:title" content="Blue Edu - LMS gọn nhẹ + AI siêu tốc" />
        <meta property="og:description" content="Blue Edu - LMS gọn nhẹ + AI siêu tốc" />
        <meta property="og:image" content="/images/logo/Thumbnail.jpeg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Blue Edu - LMS gọn nhẹ + AI siêu tốc" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blue Edu - LMS gọn nhẹ + AI siêu tốc" />
        <meta name="twitter:description" content="Blue Edu - LMS gọn nhẹ + AI siêu tốc" />
        <meta name="twitter:image" content="/images/logo/Thumbnail.jpeg" />
        <meta name="twitter:image:alt" content="Blue Edu - LMS gọn nhẹ + AI siêu tốc" />
        <meta name="google-site-verification" content="D7k4LgS55FY2Fs9HI_4Vn2aWzZYECQuNN1w-hB89pDU" />
      </head>

      <body className={`bg-[#FCFCFC] ${inter.className}`}>
        <Metadata />
        <Providers>
          <Header />
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

