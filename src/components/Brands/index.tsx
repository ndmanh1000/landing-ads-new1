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
      order: "order-1 md:order-1", // Bước 1: order 1 trên mobile, order 1 trên desktop (cột trái - order lẻ)
    },
    {
      icon: "/images/logo/setting1.svg",
      text: "Không cần cài đặt",
      order: "order-5 md:order-2", // "Không cần cài đặt": order 5 trên mobile, order 2 trên desktop (cột phải - order chẵn)
    },
    {
      icon: "/images/logo/setting1.svg",
      text: (
        <>
          Bước 2: Đăng nhập bằng <span className="font-bold text-black">tài khoản Gmail</span> để truy cập thư viện Blue Edu
        </>
      ),
      order: "order-2 md:order-3", // Bước 2: order 2 trên mobile, order 3 trên desktop (cột trái - order lẻ)
    },
    {
      icon: "/images/logo/setting1.svg",
      text: "Giao diện đơn giản, dễ thao tác",
      order: "order-6 md:order-4", // "Giao diện đơn giản": order 6 trên mobile, order 4 trên desktop (cột phải - order chẵn)
    },
    {
      icon: "/images/logo/setting1.svg",
      text: (
        <>
          Bước 3: Ấn vào mục &quot;<span className="font-bold text-black">Học liệu</span>&quot; bên phải và bắt đầu sử dụng miễn phí
        </>
      ),
      order: "order-3 md:order-5", // Bước 3: order 3 trên mobile, order 5 trên desktop (cột trái - order lẻ)
    },
  ];

  return (
    <section id="pricing" className="bg-header relative py-20">
      <div className="container px-4">
        <h1 className="text-center text-2xl md:text-2xl">
          Hướng dẫn Đăng ký để nhận & lưu trữ thư viện miễn phí.
        </h1>

        {/* Yearly/Monthly Toggle Buttons */}
        <div className="mt-6 relative">
          <div className="bg-white rounded-2xl p-6 shadow-md mx-auto">

            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mt-5
            "
            >
              {benefits.map((item, index) => (
                <div key={index} className={`flex items-center gap-3 ${item.order}`}>
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
              <div className="mt-6 flex justify-center md:justify-start order-7 md:order-6">
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


