"use client";
import { Check } from "lucide-react";

import { useLogin } from "@/contexts/LoginContext";

const Features = () => {
  const { openLoginModal } = useLogin();
  const benefits = [
    "Hơn 5.000 đề thi câu hỏi đã được số hóa",

    "Phân loại theo cấp độ nhận thức: Nhận biết - Thông hiểu - Vận dụng",
    "Phù hợp nhiều trình độ học sinh",
    "Có thể sử dụng cho: Soạn bài - Ra đề kiểm tra - Bài tập về nhà - Ôn luyện và đánh giá",
  ];
  // Generate random positions for particles once


  return (
    <div className="min-h-screen mx-auto bg-gray-100 flex items-center justify-center p-4 font-sans">
      {/* Card Container */}
      <div className="bg-white rounded-[30px] shadow-xl max-w-6xl w-full flex flex-col lg:flex-row overflow-hidden p-4 lg:p-8 gap-8">

        {/* Left Side: Image */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="relative w-full h-64 lg:h-full min-h-[400px]">
            <img
              // Bạn có thể thay thế link này bằng ảnh local của bạn
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1472&q=80"
              alt="Programming Laptop"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-2 lg:px-6 py-4">

          {/* Title */}
          <p className="text-3xl lg:text-4xl font-extrabold text-slate-900 uppercase leading-tight mb-4 tracking-tight">
            Thư viện 5.000 câu hỏi gồm những gì?
          </p>

          {/* Subtitle */}


          {/* Benefits List */}
          <ul className="space-y-4 mb-10">
            {benefits.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center text-white">
                    <Check size={14} strokeWidth={4} />
                  </div>
                </div>
                <span className="text-gray-800 text-base font-medium leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {/* Button */}
          <div className="px-4 animate-breathe">
            <button
              onClick={openLoginModal}
              className="rounded-full bg-[#ffc600] hover:bg-primary/90 uppercase cursor-pointer md:px-6 md:py-2.5 p-2 text-base font-bold text-white transition-all duration-300 hover:bg-primary/90"
            >
              Nhận tài liệu miễn phí
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Features;
