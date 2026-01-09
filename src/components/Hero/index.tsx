"use client";

import Image from "next/image";
import { useLogin } from "@/contexts/LoginContext";

const Hero = () => {
  const { openLoginModal } = useLogin();

  return (
    <section className="relative pt-28 lg:pt-0 overflow-hidden">
      <div className="relative w-full cursor-pointer" onClick={openLoginModal}>
        {/* Mobile Image */}
        <div className="lg:hidden w-full">
          <Image
            src="/images/hero/smobi.jpg"
            alt="Blue Edu - Trợ thủ AI cho Giáo viên"
            width={1200}
            height={1600}
            className="w-full h-auto object-contain"
            priority
            sizes="100vw"
          />
        </div>

        {/* Desktop Image */}
        <div className="hidden lg:block w-full">
          <Image
            src="/images/hero/sweb.jpg"
            alt="Blue Edu - Trợ thủ AI cho Giáo viên"
            width={1920}
            height={1080}
            className="w-full h-auto object-contain"
            priority
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );

}

export default Hero;
