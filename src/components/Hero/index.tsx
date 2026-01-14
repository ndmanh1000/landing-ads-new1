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

      {/* --- PHẦN BACKGROUND (Xanh -> Vàng) --- */}
      <div className="absolute inset-0 z-0">
        {/* 1. Nền Gradient chính: Xanh (#053cc0) -> Vàng (#ffc600) */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#053cc0] via-[#053cc0] to-[#ffc600]"></div>

        {/* 2. Hiệu ứng các hạt trôi nổi */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float-slow-reverse"></div>
        <div className="absolute top-1/2 right-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>
      {/* ------------------------------------------ */}

      <div className="container relative z-10">
        <div className="grid gap-5 grid-cols-1 lg:grid-cols-12 content-center">
          <div className="lg:col-span-7 flex flex-col justify-center relative">

            {/* Các họa tiết trang trí (Ngôi sao, đường kẻ) */}
            <Image
              src="/images/hero/star.svg"
              alt=""
              width={95}
              height={97}
              className="absolute top-[-74px] right-[51px] opacity-20"
              loading="lazy"
              aria-hidden="true"
            />
            <Image
              src="/images/hero/lineone.svg"
              alt=""
              width={190}
              height={148}
              className="absolute top-[-74px] right-[51px] opacity-10"
              loading="lazy"
              aria-hidden="true"
            />
            <Image
              src="/images/hero/linetwo.svg"
              alt=""
              width={190}
              height={148}
              className="hidden xl:block absolute bottom-[-74px] right-[-38rem] opacity-10"
              loading="lazy"
              aria-hidden="true"
            />

            <div className="flex flex-col gap-5">
              {/* Tiêu đề chính */}
              <h1 className="text-2xl md:text-[48px] text-white uppercase leading-16 text-center lg:text-start mx-auto lg:mx-0 pt-5 font-bold shadow-black drop-shadow-sm">
                Miễn phí thư viện số hơn +5.000 đề thi câu hỏi
              </h1>

              {/* --- ĐÃ CHỈNH SỬA: DÒNG TEXT LUÔN NẰM TRÊN 1 HÀNG --- */}
              <div className="text-center lg:text-start max-w-2xl mx-auto lg:mx-0 mt-2">
                {/* Sử dụng flex-nowrap để không xuống dòng, gap-1 để tiết kiệm chỗ trên mobile */}
                <div className="flex items-center gap-1 sm:gap-2 lg:gap-4 justify-center lg:justify-start flex-nowrap w-full">

                  <div className="flex flex-shrink-0 justify-center">
                    {/* text-[10px] cho mobile để chữ nhỏ lại, vừa vặn 1 dòng */}
                    <span className="text-[10px] sm:text-xs md:text-sm lg:text-xl uppercase text-white font-medium whitespace-nowrap">
                      Tài liệu số hóa chuẩn BGD
                    </span>
                  </div>

                  {/* Thanh gạch đứng */}
                  <div className="mx-0.5 md:mx-1 lg:mx-2 w-px h-3 sm:h-4 bg-white flex-shrink-0"></div>

                  <div className="flex flex-shrink-0 min-w-0 justify-center text-white">
                    {/* text-[10px] cho mobile */}
                    <p className="text-[10px] sm:text-xs md:text-sm lg:text-xl font-medium text-white uppercase whitespace-nowrap">
                      Dành cho các khối lớp từ 1-12
                    </p>
                  </div>
                </div>
              </div>
              {/* ----------------------------------------------------- */}

              {/* Phần Cards (3 thẻ) */}
              <div className="mt-4 max-w-full overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-3 justify-center lg:justify-start">

                  {/* Card 1 */}
                  <div className="bg-white/90 backdrop-blur-sm border border-white/50 rounded-lg p-2.5 lg:p-3 flex items-center justify-center flex-1 min-w-0 transition-all duration-300 hover:shadow-lg hover:scale-105 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                    <div className="flex items-center gap-2 min-w-0 relative z-10 w-full">
                      <div className="border rounded-lg p-2 flex-shrink-0 bg-[#b8cdc5]">
                        <MdOutlineDocumentScanner className="text-gray-800 text-xl lg:text-2xl" />
                      </div>
                      <span className="text-gray-900 font-semibold text-xs lg:text-sm leading-tight break-words text-center md:text-left flex-1">
                        Dùng ngay cho giảng dạy
                      </span>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white/90 backdrop-blur-sm border border-white/50 rounded-lg p-2.5 lg:p-3 flex items-center justify-center flex-1 min-w-0 transition-all duration-300 hover:shadow-lg hover:scale-105 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                    <div className="flex items-center gap-2 min-w-0 relative z-10 w-full">
                      <div className="border rounded-lg p-2 flex-shrink-0 bg-[#b8cdc5]">
                        <MdOutlineSupportAgent className="text-gray-800 text-xl lg:text-2xl" />
                      </div>
                      <span className="text-gray-900 font-semibold text-xs lg:text-sm leading-tight break-words text-center md:text-left flex-1">
                        Sử dụng trọn đời
                      </span>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-white/90 backdrop-blur-sm border border-white/50 rounded-lg p-2.5 lg:p-3 flex items-center justify-center flex-1 min-w-0 transition-all duration-300 hover:shadow-lg hover:scale-105 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                    <div className="flex items-center gap-2 min-w-0 relative z-10 w-full">
                      <div className="border rounded-lg p-2 flex-shrink-0 bg-[#b8cdc5]">
                        <FaAward className="text-gray-800 text-xl lg:text-2xl" />
                      </div>
                      <span className="text-gray-900 font-semibold text-xs lg:text-sm leading-tight break-words text-center md:text-left flex-1">
                        Không mất phí
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Nút Đăng Ký */}
              <div className="mx-auto lg:mx-0">
                <div>
                  <button
                    onClick={openLoginModal}
                    className="text-white font-bold bg-[#ffc600] hover:bg-[#e6b200] uppercase cursor-pointer text-base lg:text-xl px-6 py-3 rounded-full animate-breathe transition-all duration-300 shadow-lg border border-white/20"
                    aria-label="Nhận tài liệu miễn phí"
                  >
                    Nhận tài liệu miễn phí
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Phần Hình Ảnh (Phải) */}
          <div className="mt-10 lg:mt-0 lg:col-span-5">
            <div className="flex justify-center md:justify-center lg:justify-center">
              <div className="w-full md:max-w-md lg:max-w-none">
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
};

export default Hero;