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
    <section id="pricing" className="bg-header relative py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-cyan-50/40"></div>

        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-200/30 via-purple-200/20 to-cyan-200/30 animate-gradient-xy opacity-60"></div>

        {/* Floating Animated Shapes - Large */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-float-slow-reverse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-300/15 rounded-full blur-3xl animate-pulse-slow"></div>

        {/* Additional Animated Particles - Medium */}
        <div className="absolute top-32 right-20 w-40 h-40 bg-blue-200/25 rounded-full blur-2xl animate-float-delayed"></div>
        <div className="absolute bottom-32 left-20 w-36 h-36 bg-purple-200/25 rounded-full blur-2xl animate-float-delayed" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-cyan-200/25 rounded-full blur-2xl animate-float-delayed" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-28 h-28 bg-indigo-200/25 rounded-full blur-2xl animate-float-delayed" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container px-4 relative z-10">
        <p className="text-center text-2xl md:text-2xl uppercase  ">
          Hướng dẫn Đăng ký để nhận & lưu trữ thư viện miễn phí.
        </p>

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
                  <div
                    key={index}
                    className="group relative flex items-center gap-3 rounded-xl border-2 border-gray-200 p-4 bg-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50 hover:-translate-y-1 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Decorative gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-purple-500/5 to-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                    <div className="relative z-10 flex h-5 w-5 shrink-0 items-center justify-center rounded-2xl bg-green-500 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                      <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="relative z-10 text-base lg:text-md text-gray-700 leading-6 transition-colors duration-300 group-hover:text-gray-900">
                      {item.text}
                    </p>
                  </div>
                ))}

                {/* Button */}
                <div className="mt-2 flex flex-col items-center md:items-start gap-2">
                  <button
                    onClick={openLoginModal}
                    className="bg-lime-400 cursor-pointer hover:bg-lime-500 text-black font-bold text-base lg:text-lg p-2 rounded-xl transition"
                  >
                    Nhận tài liệu miễn phí
                  </button>
                  <p className="text-sm text-gray-600 text-center md:text-left">
                    Áp dụng cho giáo viên đăng ký dùng thử Blue Edu
                  </p>
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


