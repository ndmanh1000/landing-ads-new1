"use client";

import { Settings } from 'lucide-react';
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
  const ListItem = ({ children }) => {
    return (
      <div className="flex items-start gap-4">
        {/* Icon Circle */}
        <div className="flex-shrink-0">
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
            <Settings size={20} className="text-black" strokeWidth={2} />
          </div>
        </div>

        {/* Text Content */}
        <p className="text-slate-700 text-lg leading-snug pt-1.5">
          {children}
        </p>
      </div>
    );
  };

  return (
    <section className="bg-gray-50 min-h-[600px] py-16 px-4 flex flex-col items-center justify-center font-sans">

      {/* Title Header */}
      <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-12 uppercase">
        Hướng dẫn Đăng ký để nhận & lưu trữ thư viện miễn phí.
      </h2>

      {/* Main Card */}
      <div className="bg-white rounded-3xl shadow-sm w-full max-w-6xl p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-16">

          {/* Left Column: Steps */}
          <div className="space-y-8">
            <ListItem>
              Bước 1: Thầy/cô ấn vào nút <span className="font-bold">"Nhận tài liệu miễn phí"</span>
            </ListItem>

            <ListItem>
              Bước 2: Đăng nhập bằng <span className="font-bold">tài khoản Gmail</span> để truy cập thư viện Blue Edu
            </ListItem>

            <ListItem>
              Bước 3: Ấn vào mục <span className="font-bold">"Học liệu"</span> bên phải và bắt đầu sử dụng miễn phí
            </ListItem>
          </div>

          {/* Right Column: Benefits & Button */}
          <div className="flex flex-col h-full">
            <div className="space-y-8 mb-8 md:mb-auto">
              <ListItem>
                Không cần cài đặt
              </ListItem>

              <ListItem>
                Giao diện đơn giản, dễ thao tác
              </ListItem>
            </div>

            {/* Button */}
            <div className="px-4 animate-breathe">
              <button
                onClick={openLoginModal}
                className="rounded-full bg-[#d3f901] uppercase cursor-pointer md:px-6 md:py-2.5 p-2 text-base font-bold text-black transition-all duration-300 hover:bg-primary/90"
              >
                Dùng thử miễn phí
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );

};

export default Brands;


