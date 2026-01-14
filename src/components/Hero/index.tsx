"use client";

import Image from "next/image";
import { useLogin } from "@/contexts/LoginContext";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaAward } from "react-icons/fa";




const Hero = () => {
  const { openLoginModal } = useLogin();

  return (
    <section className="relative pt-28 lg:pb-14 overflow-hidden">
      {/* Animated Background with Blur and Colors */}
      <div className="absolute inset-0 backdrop-blur-md">
        {/* Base Gradient Background */}
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgb(42, 60, 40), rgb(15, 33, 40))' }}></div>

        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 animate-gradient-xy"></div>

        {/* Floating Animated Shapes - Large */}
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full animate-float-slow-reverse"></div>
        <div className="absolute top-1/2 right-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full animate-pulse-slow"></div>

        {/* Additional Animated Particles - Medium */}
        <div className="absolute top-32 right-20 w-40 h-40 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-32 left-20 w-36 h-36 rounded-full animate-float-delayed" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/4 left-1/3 w-32 h-32 rounded-full animate-float-delayed" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-28 h-28 rounded-full animate-float-delayed" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-20 left-1/2 w-24 h-24 rounded-full animate-float-delayed" style={{ animationDelay: '0.5s' }}></div>
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
            {/* <div className="border-2 border-[#2f6e55] rounded-full p-4 text-white text-sm md:text-2xl w-full md:w-64">
              Digital For Growth
            </div> */}
            <div className="flex flex-col gap-5">
              <h1 className="text-2xl md:text-[48px] text-white uppercase leading-16 text-midnight_text text-center lg:text-start mx-auto lg:mx-0 pt-5">
                Miễn phí thư viện số hơn +5.000 đề thi câu hỏi
              </h1>

              <div className="text-center lg:text-start max-w-2xl mx-auto lg:mx-0 mt-2">
                <div className="flex items-center gap-1.5 md:gap-2 lg:gap-4 justify-center lg:justify-start flex-wrap">
                  <div className="flex flex-shrink-0 justify-center">
                    <span className="text-xs md:text-sm lg:text-xl uppercase text-white font-medium whitespace-nowrap">
                      Tài liệu số hóa chuẩn BGD
                    </span>
                    {/* <span className="text-black text-sm lg:text-xl  font-bold whitespace-nowrap">
                      CHUẨN BGD
                    </span> */}
                  </div>
                  {/* <span className="text-primary text-2xl lg:text-3xl font-bold flex-shrink-0 flex items-center">
                    80%
                  </span> */}
                  <div className="mx-0.5 md:mx-1 lg:mx-2 w-px h-4 bg-white flex-shrink-0"></div>
                  <div className="flex flex-shrink-0 min-w-0 justify-center text-white">
                    <p className="text-xs md:text-sm lg:text-xl font-medium text-white uppercase whitespace-nowrap">Dành cho các khối lớp từ 1-12</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 max-w-full overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-3 justify-center lg:justify-start">
                  {/* Card 1: Truy cập tài liệu độc quyền */}
                  <div className="bg-gray-100 border border-gray-300 rounded-lg p-2.5 lg:p-3 flex items-center justify-center flex-1 min-w-0 transition-all duration-300 hover:shadow-md hover:border-gray-400 hover:scale-105 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                    <div className="flex items-center gap-2 min-w-0 relative z-10 w-full">
                      <div className="border rounded-lg p-2 flex-shrink-0" style={{ backgroundColor: '#b8cdc5' }}>
                        <MdOutlineDocumentScanner className="text-gray-800 text-xl lg:text-2xl" />
                      </div>
                      <span className="text-gray-800 font-medium text-xs lg:text-sm leading-tight break-words text-center md:text-left flex-1">
                        Tài liệu chuẩn BGD
                      </span>
                    </div>
                  </div>

                  {/* Card 2: Nhóm hỗ trợ học tập 24/7 */}
                  <div className="bg-gray-100 border border-gray-300 rounded-lg p-2.5 lg:p-3 flex items-center justify-center flex-1 min-w-0 transition-all duration-300 hover:shadow-md hover:border-gray-400 hover:scale-105 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                    <div className="flex items-center gap-2 min-w-0 relative z-10 w-full">
                      <div className="border rounded-lg p-2 flex-shrink-0" style={{ backgroundColor: '#b8cdc5' }}>
                        <MdOutlineSupportAgent className="text-gray-800 text-xl lg:text-2xl" />
                      </div>
                      <span className="text-gray-800 font-medium text-xs lg:text-sm leading-tight break-words text-center md:text-left flex-1">
                        Dùng ngay cho giảng dạy
                      </span>
                    </div>
                  </div>

                  {/* Card 3: Chứng nhận hoàn thành khóa học */}
                  <div className="bg-gray-100 border border-gray-300 rounded-lg p-2.5 lg:p-3 flex items-center justify-center flex-1 min-w-0 transition-all duration-300 hover:shadow-md hover:border-gray-400 hover:scale-105 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                    <div className="flex items-center gap-2 min-w-0 relative z-10 w-full">
                      <div className="border rounded-lg p-2 flex-shrink-0" style={{ backgroundColor: '#b8cdc5' }}>
                        <FaAward className="text-gray-800 text-xl lg:text-2xl" />
                      </div>
                      <span className="text-gray-800 font-medium text-xs lg:text-sm leading-tight break-words text-center md:text-left flex-1">
                        Sử dụng trọn đời
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-auto lg:mx-0">
                <div

                >
                  <button
                    onClick={openLoginModal}
                    className="text-black font-bold bg-[#d3f901] uppercase cursor-pointer text-base lg:text-xl p-2 rounded-full animate-breathe transition-all duration-300 border border-primary hover:bg-transparent hover:cursor-pointer hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 active:scale-95"
                    aria-label="Nhận tài liệu miễn phí"
                  >
                    Nhận tài liệu miễn phí
                  </button>

                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 lg:col-span-5">
            <div className="flex justify-center md:justify-center lg:justify-center">
              <div className="w-full md:max-w-md lg:max-w-none">
                <Image
                  src="/images/hero/mode.png"
                  alt="Thư viện số Blue Edu với hơn 5000 đề thi câu hỏi"
                  width={698}
                  height={652}
                  className="w-full h-auto object-contain"
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
