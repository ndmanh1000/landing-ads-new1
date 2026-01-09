"use client";

import Image from "next/image";
import { useLogin } from "@/contexts/LoginContext";

const Hero = () => {
  const { openLoginModal } = useLogin();

  return (
    <section className="relative pt-28 lg:pb-14 overflow-hidden">
      {/* Animated Background with Blur and Colors */}
      <div className="absolute inset-0 backdrop-blur-md">
        {/* Base Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50/90 to-purple-50/70 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>

        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-200/40 via-indigo-200/30 to-purple-200/40 animate-gradient-xy opacity-70"></div>

        {/* Floating Animated Shapes - Large */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl animate-float-slow-reverse"></div>
        <div className="absolute top-1/2 right-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-300/25 rounded-full blur-3xl animate-pulse-slow"></div>

        {/* Additional Animated Particles - Medium */}
        <div className="absolute top-32 right-20 w-40 h-40 bg-blue-200/40 rounded-full blur-2xl animate-float-delayed"></div>
        <div className="absolute bottom-32 left-20 w-36 h-36 bg-purple-200/35 rounded-full blur-2xl animate-float-delayed" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-indigo-200/40 rounded-full blur-2xl animate-float-delayed" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-28 h-28 bg-cyan-200/35 rounded-full blur-2xl animate-float-delayed" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-20 left-1/2 w-24 h-24 bg-blue-300/30 rounded-full blur-2xl animate-float-delayed" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container relative z-10">
        <div className="grid gap-5 grid-cols-1 lg:grid-cols-12 content-center">
          <div className="lg:col-span-7 flex flex-col justify-center relative">
            <Image
              src="/images/hero/star.svg"
              alt=""
              width={95}
              height={97}
              className="absolute top-[-74px] right-[51px] opacity-10"
              loading="lazy"
              aria-hidden="true"
            />
            <Image
              src="/images/hero/lineone.svg"
              alt=""
              width={190}
              height={148}
              className="absolute top-[-74px] right-[51px] opacity-5"
              loading="lazy"
              aria-hidden="true"
            />
            <Image
              src="/images/hero/linetwo.svg"
              alt=""
              width={190}
              height={148}
              className="hidden xl:block absolute bottom-[-74px] right-[-38rem] opacity-5"
              loading="lazy"
              aria-hidden="true"
            />
            <div className="flex flex-col gap-5">
              {/* Badge với border và text AI */}
              <div className="relative inline-flex items-center justify-center lg:justify-start mb-2 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <div className="relative inline-flex items-center gap-2 px-5 py-2.5 border-2 border-primary/30 rounded-full bg-gradient-to-r from-white/95 to-blue-50/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/50 hover:scale-105">
                  <span className="text-xl animate-pulse">✨</span>
                  <span className="text-sm lg:text-base font-semibold text-gray-800 bg-gradient-to-r from-gray-800 to-gray-700 bg-clip-text text-transparent">
                    Trợ thủ AI cho Giáo viên dạy thêm & dạy online
                  </span>
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-md animate-bounce">
                    HOT
                  </div>
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-extrabold text-gray-900 text-center lg:text-start mx-auto lg:mx-0 pt-5 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <span className="bg-gradient-to-r from-primary via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Giảm đến 80% thời gian soạn – giao – chấm bài
                </span>
              </h1>
              <p className="text-black/80 text-lg lg:text-xl font-medium text-center lg:text-start max-w-2xl mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                Đơn giản, dễ dùng - Không cần cài đặt
              </p>
              <div className="text-center lg:text-start max-w-2xl mx-auto lg:mx-0 mt-2 animate-fade-in-up" id="t1" style={{ animationDelay: '0.4s' }}>
                <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 justify-center lg:justify-start">
                  <div className="flex items-center gap-2">
                    <span className="text-lg lg:text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent animate-pulse-slow">
                      Tặng thư viện số <span className="text-2xl lg:text-3xl text-primary">+5.000</span>
                    </span>
                  </div>
                  <span className="hidden sm:inline text-gray-400 text-xl font-bold mx-1">|</span>
                  <span className="text-gray-700 text-base lg:text-xl font-semibold">
                    Trọn bộ đề thi, câu hỏi chuẩn BGD
                  </span>
                </div>
              </div>
              <div className="mt-4 max-w-full overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-4 justify-center lg:justify-start">
                  {/* Card 1: Truy cập tài liệu độc quyền */}
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-lg p-3 lg:p-4 flex items-center justify-center flex-1 min-w-0 transition-all duration-300 hover:shadow-lg hover:border-blue-400 hover:scale-105 hover:-translate-y-1 relative overflow-hidden group animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                    <div className="flex flex-col min-w-0 relative z-10">
                      <span className="text-gray-800 font-semibold text-xs lg:text-sm leading-tight break-words">
                        1 Nền tảng thay thế mọi công cụ
                      </span>
                    </div>
                  </div>

                  {/* Card 2: Nhóm hỗ trợ học tập 24/7 */}
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-lg p-3 lg:p-4 flex items-center justify-center flex-1 min-w-0 transition-all duration-300 hover:shadow-lg hover:border-purple-400 hover:scale-105 hover:-translate-y-1 relative overflow-hidden group animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                    <div className="flex flex-col min-w-0 relative z-10">
                      <span className="text-gray-800 font-semibold text-xs lg:text-sm leading-tight break-words">
                        Mở là dùng ngay
                      </span>
                    </div>
                  </div>

                  {/* Card 3: Chứng nhận hoàn thành khóa học */}
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-lg p-3 lg:p-4 flex items-center justify-center flex-1 min-w-0 transition-all duration-300 hover:shadow-lg hover:border-green-400 hover:scale-105 hover:-translate-y-1 relative overflow-hidden group animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                    <div className="flex flex-col min-w-0 relative z-10">
                      <span className="text-gray-800 font-semibold text-xs lg:text-sm leading-tight break-words">
                        Phù hợp dạy thêm và online
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                <div className="flex flex-col items-center lg:items-start gap-2">
                  <button
                    onClick={openLoginModal}
                    className="relative text-white font-bold cursor-pointer text-base lg:text-lg px-6 py-3 rounded-lg transition-all duration-300 border-2 border-primary bg-gradient-to-r from-primary via-blue-600 to-indigo-600 hover:from-white hover:via-blue-50 hover:to-indigo-50 hover:text-primary hover:shadow-2xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary/50 focus:ring-offset-2 active:scale-95 overflow-hidden group"
                    aria-label="Nhận tài liệu miễn phí"
                  >
                    <span className="relative z-10">DÙNG THỬ MIỄN PHÍ</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  </button>
                  <p className="text-xs lg:text-sm text-primary font-semibold animate-blink text-center lg:text-left flex items-center justify-center lg:justify-start gap-1.5">
                    <span className="text-base lg:text-lg">👉</span>
                    Dạy thử 1 lớp để thấy khác biệt
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 lg:col-span-5">
            <div className="flex justify-center md:justify-center lg:justify-center animate-fade-in-right" style={{ animationDelay: '0.3s' }}>
              <div className="w-full md:max-w-md lg:max-w-none transform hover:scale-105 transition-transform duration-500">
                <Image
                  src="/images/hero/mode.png"
                  alt="Thư viện số Blue Edu với hơn 5000 đề thi câu hỏi"
                  width={698}
                  height={652}
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 41.67vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

}

export default Hero;
