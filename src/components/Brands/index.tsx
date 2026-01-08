"use client";

import Image from "next/image";
import { useLogin } from "@/contexts/LoginContext";

const Brands = () => {
  const { openLoginModal } = useLogin();
  const benefits = [
    {
      icon: "/images/logo/setting1.svg",
      text: (
        <>
          Bước 1: Thầy/cô ấn vào nút &quot;<span className="font-bold text-black">Nhận tài liệu miễn phí</span>&quot;
        </>
      ),
    },

    {
      icon: "/images/logo/setting1.svg",
      text: "Không cần cài đặt",
    },

    {
      icon: "/images/logo/setting1.svg",
      text: (
        <>
          Bước 2: Đăng nhập bằng <span className="font-bold text-black">tài khoản Gmail</span> để truy cập thư viện Blue Edu
        </>
      ),
    },
    {
      icon: "/images/logo/setting1.svg",
      text: "Giao diện đơn giản, dễ thao tác",
    },

    {
      icon: "/images/logo/setting1.svg",
      text: (
        <>
          Bước 3: Ấn vào mục &quot;<span className="font-bold text-black">Học liệu</span>&quot; bên phải và bắt đầu sử dụng miễn phí
        </>
      ),
    },
  ];

  return (
    <section id="pricing" className="bg-header relative py-20">
      <div className="container px-4">
        <h1 className="text-center text-3xl md:text-2xl">
          Hướng dẫn Đăng ký để nhận & lưu trữ thư viện miễn phí.
        </h1>

        {/* Yearly/Monthly Toggle Buttons */}
        <div className="mt-6 relative">
          <div className="bg-white rounded-2xl p-6 shadow-md mx-auto">
            <p className="text-center text-2xl font-medium">
              Học phí đã bao gồm
            </p>
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mt-5
            "
            >
              {benefits.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Image
                    src={item.icon}
                    alt="benefit icon"
                    width={24}
                    height={24}
                    className="mt-1 border border-gray-100 h-10 w-10 flex items-center justify-center rounded-2xl bg-gray-100"
                  />
                  <p className="text-base lg:text-md text-gray-700 leading-6">
                    {item.text}
                  </p>
                </div>
              ))}
              <div className="mt-6 flex justify-center md:justify-start">
                <button
                  onClick={openLoginModal}
                  className="bg-lime-400 cursor-pointer hover:bg-lime-500 text-black font-bold text-base lg:text-lg p-2 rounded-xl transition"
                >
                  Nhận tài liệu miễn phí
                </button>

              </div>
            </div>

            {/* BUTTON */}
          </div>
        </div>
      </div>
    </section>
  );

};

export default Brands;


