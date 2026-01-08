import Breadcrumb from "@/components/Common/Breadcrumb";
import Story from "@/components/Story";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Story Page | Free Next.js Template for Startup and SaaS",
  description: "This is Story Page for Startup Nextjs Template",
  // other metadata
};

const StoryPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Story Page"
        description="Blue Edu – Trợ lý dạy học tốc độ cao với AI"
      />
      <Story />
    </>
  );
};

export default StoryPage;
