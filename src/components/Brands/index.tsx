"use client";

import Image from "next/image";
import { useLogin } from "@/contexts/LoginContext";

const Brands = () => {
  const { openLoginModal } = useLogin();

  const benefits = [
    {
      icon: "/images/logo/setting1.svg",
      text: (
        " Đã được số hóa"
      ),
      order: "order-1 md:order-1",
    },
    {
      icon: "/images/logo/setting1.svg",
      text: (
        "Phân loại loại năng lực"
      ),
      order: "order-2 md:order-2",
    },
    {
      icon: "/images/logo/setting1.svg",
      text: "Dùng được ngay khi truy cập",
      order: "order-3 md:order-3",
    },
    {
      icon: "/images/logo/setting1.svg",
      text: "Sử dụng vĩnh viễn ",
      order: "order-4 md:order-4",
    },
  ];

  return (
    <section id="pricing" className="bg-header relative py-20">
      <div className="container px-4">
        <h1 className="text-center text-2xl md:text-2xl">
          Hướng dẫn Đăng ký để nhận & lưu trữ thư viện miễn phí.
        </h1>

        {/* Content Grid */}
        <div className="mt-6 relative">
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              {/* Image Column - Left Side */}
              <div className="flex justify-center items-center">
                <div className="relative w-full aspect-square rounded-xl border-2 border-gray-200 p-4 bg-white">
                  <Image
                    src="/images/logo/tap1.jpeg"
                    alt="Blue Edu"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Text Column - Right Side */}
              <div className="flex flex-col gap-4">
                {benefits.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 rounded-xl border-2 border-gray-200 p-4 bg-white">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-2xl bg-green-500">
                      <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-base lg:text-md text-gray-700 leading-6">
                      {item.text}
                    </p>
                  </div>
                ))}

                {/* Button */}
                <div className="mt-2 flex justify-center md:justify-start">
                  <button
                    onClick={openLoginModal}
                    className="bg-lime-400 cursor-pointer hover:bg-lime-500 text-black font-bold text-base lg:text-lg p-2 rounded-xl transition"
                  >
                    Nhận tài liệu miễn phí
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

};

export default Brands;


