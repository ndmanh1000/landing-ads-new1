


"use client";

import Image from "next/image";
import { useLogin } from "@/contexts/LoginContext";

export default function Media() {
  const { openLoginModal } = useLogin();


  return (
    <>
      <section id="media" className="w-full bg-white py-16">
        <p className="text-center text-2xl font-bold uppercase ">Đội ngũ hỗ trợ Giáo viên</p>
        <div className="container mx-auto px-4 md:mt-10 mt-4">
          <div className="relative">


            {/* Image */}
            <div className="relative w-full h-[420px] overflow-visible">
              <div className="absolute left-0 top-0 w-full lg:w-[60%] h-full overflow-hidden rounded-md md:rounded-tr-[40px]">
                <Image
                  src="/images/hero/52.jpg"
                  alt="Classroom"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Decorative Circle */}
            <div className="hidden lg:block absolute right-10 top-8 translate-x-1/2 z-10">
              <div className="w-32 h-32 bg-green-500 rounded-full"></div>
            </div>

            {/* Content Box - Chèn lên ảnh và giới hạn chiều rộng */}
            <div className="relative -right-4 -top-20 md:-top-0 md:-right-0 lg:absolute lg:right-0 z-30 lg:top-1/2 lg:-translate-y-1/2 lg:-translate-x-8 mt-8 lg:mt-0 w-full lg:w-[45%] max-w-[calc(100%-2rem)] lg:max-w-[600px]" id="media-content">
              <div className="bg-gradient-to-b from-lime-300 to-emerald-200 rounded-3xl p-8 lg:p-10 shadow-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  EDU luôn sẵn sàng đồng hành 24/7 cùng Thầy/Cô
                </h3>



                <ul className="space-y-4 text-gray-900">
                  <li className="flex gap-3">
                    <span className="text-xl">•</span>
                    <span>
                      Tạo đề nhanh hơn từ thư viện có sẵn
                    </span>
                  </li>

                  <li className="flex gap-3">
                    <span className="text-xl">•</span>
                    <span>
                      Chấm bài tự động bằng AI
                    </span>
                  </li>

                  <li className="flex gap-3">
                    <span className="text-xl">•</span>
                    <span>
                      Quản lý bài tập & kết quả học sinh
                    </span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/* Button - Đặt giữa trang */}
          <div className="flex justify-center mt-12">
            <button
              onClick={openLoginModal}
              className="bg-primary cursor-pointer hover:bg-primary/90 text-white font-bold text-base lg:text-lg px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary/50 focus:ring-offset-2 active:scale-95"
            >
              Trải nghiệm EDU để thấy sự khác biệt
            </button>
          </div>
        </div>
      </section>


    </>
  );
};
