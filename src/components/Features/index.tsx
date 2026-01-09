"use client";
import { Icon } from "@iconify/react";
import { useMemo } from "react";

import { useLogin } from "@/contexts/LoginContext";

const Features = () => {

  const features = [
    "Ban ngày vừa dạy, vừa quản lý lớp",

    "Buổi tối phải chấm bài đến khuya",

    "Cuối tuần tự tổng hợp điểm trên Excel",

    "Soạn đề, chấm bài thủ công bằng MS",

    "Dạy online, giao bài, nhắc học sinh qua Zalo, Zoom",

    "Loạn vì nhiều công cụ, mất thời gian chuyển tab",
  ];

  // Generate random positions for particles once
  const particleData = useMemo<Array<{ left: number; top: number; delay: number; duration: number }>>(() => {
    return Array.from({ length: 12 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 2,
    }));
  }, []);

  return (
    <section
      className="pt-32 pb-20 relative overflow-hidden"
      id="product"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: "url('/images/logo/bg1.jpg')"
        }}
      ></div>
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>
      <div className="container relative z-10">
        <div className="bg-Lightsuccess bg-[url('/images/logo/bg-lines.png')] bg-no-repeat bg-contain bg-right-bottom rounded-3xl shadow-2xl border border-green-100 overflow-hidden">
          <div className="flex flex-col gap-8 md:gap-10 lg:gap-12 py-10 md:py-12 lg:py-16 px-6 md:px-10 lg:px-20">
            {/* Header Section - Title & Highlight */}
            <div className="flex flex-col gap-4 md:gap-6 text-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <p className="text-gray-900 text-2xl md:text-2xl font-extrabold leading-tight uppercase">
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent ">
                  1 Ngày Thầy/Cô tự xoay xở với... trăm công nghìn việc
                </span>
              </p>
              <p className="text-lg md:text-lg text-green-600 font-semibold leading-relaxed max-w-3xl mx-auto">
                Câu hỏi đã được sắp xếp & lưu trữ sẵn, Thầy/Cô không cần nhập lại từ đầu
              </p>
            </div>

            {/* Image Section - Centered */}
            <div className="flex justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="w-full max-w-2xl lg:max-w-3xl flex items-center justify-center transform hover:scale-105 transition-transform duration-500">
                <img
                  src="/images/logo/tap2.png"
                  alt="tap2"
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Features Grid - 2 Columns */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 lg:gap-6">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 lg:gap-4 group bg-white/60 hover:bg-white/80 rounded-xl p-4 lg:p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-green-100"
                    style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                  >
                    <Icon
                      icon="mdi:check-circle"
                      className="text-green-600 text-xl lg:text-2xl flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300"
                    />
                    <span className="text-sm lg:text-lg text-gray-800 leading-relaxed font-medium group-hover:text-gray-900 transition-colors duration-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Text */}
            <div className="flex flex-col items-center gap-2 mt-4 animate-fade-in-up" style={{ animationDelay: '1s' }}>
              <p className="text-sm md:text-base lg:text-lg text-gray-700 font-medium bg-green-50/80 px-4 py-3 rounded-lg border border-green-200 inline-flex items-center gap-2 shadow-sm">
                <span className="text-lg">👉</span>
                Blue Edu được xây dựng dựa trên nhu cầu thực tế của Giáo viên
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
