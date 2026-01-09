import AboutSectionOne from "@/components/About/AboutSectionOne";

import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";

import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import Story from "@/components/Story";
import { Metadata } from "next";
import Media from "@/components/Media";

export const metadata: Metadata = {
  title: "Blue Edu - LMS gọn nhẹ + AI siêu tốc cho giáo viên thời đại mới",
  description: "Blue Edu - LMS gọn nhẹ + AI siêu tốc cho giáo viên thời đại mới",
  openGraph: {
    type: "website",
    title: "Blue Edu - LMS gọn nhẹ + AI siêu tốc cho giáo viên thời đại mới",
    description: "Blue Edu - LMS gọn nhẹ + AI siêu tốc cho giáo viên thời đại mới",
    siteName: "Blue Edu",
    images: [
      {
        url: "/images/logo/Thumbnail.jpeg",
        width: 1200,
        height: 630,
        alt: "Blue Edu - LMS gọn nhẹ + AI siêu tốc cho giáo viên thời đại mới",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blue Edu - LMS gọn nhẹ + AI siêu tốc cho giáo viên thời đại mới",
    description: "Blue Edu - LMS gọn nhẹ + AI siêu tốc cho giáo viên thời đại mới",
    images: ["/images/logo/Thumbnail.jpeg"],
  },
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <AboutSectionOne />
      <Story />
      {/* <Media /> */}
      <Brands />



      {/* <Pricing /> */}
      {/* <Testimonials /> */}
      {/* <Blog /> */}

    </>
  );
}
