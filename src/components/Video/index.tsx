"use client";

import { Rocket, GraduationCap, MonitorCheck, Briefcase } from 'lucide-react';

export default function Video() {
  const cards = [
    {
      id: 1,
      icon: Rocket,
      title: "Giáo viên muốn tiết kiệm thời gian soạn bài và ra đề mỗi ngày",
      desc: "Cần lộ trình học bài bản, học từ cơ bản đến nâng cao.",
      isDark: true, // Card này có màu tối
    },
    {
      id: 2,
      icon: GraduationCap,
      title: "Giáo viên cần nguồn câu hỏi ổn định để dùng lâu dài cho nhiều lớp",
      desc: "Muốn thực hành, ứng dụng kiến thức vào công việc với sự hướng dẫn từ giảng viên.",
      isDark: false,
    },
    {
      id: 3,
      icon: MonitorCheck,
      title: "Giáo viên muốn dạy hiệu quả hơn ở lớp nhỏ, lớp dạy thêm hoặc online",
      desc: "Cập nhật xu hướng, tối ưu kỹ năng để thăng tiến sự nghiệp.",
      isDark: false,
    },
    {
      id: 4,
      icon: Briefcase,
      title: "Giáo viên quản lý đề và bài giảng gọn gàng, không lo thất lạc",
      desc: "Tự làm, tự tối ưu thay vì thuê ngoài, mở rộng dịch vụ & tăng thu nhập.",
      isDark: false,
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header Title */}
        <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-12 uppercase">
          Thư viện Blue Edu phù hợp với ai?
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">

          {/* Left Column: Grid of Cards */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((card) => (
              <div
                key={card.id}
                className={`flex flex-col items-center text-center p-8 rounded-2xl shadow-sm transition-transform hover:-translate-y-1 duration-300 ${card.isDark
                  ? 'bg-[#1a2e35] text-white'
                  : 'bg-gray-200 text-slate-800'
                  }`}
              >
                {/* Icon */}
                <div className="mb-4">
                  <card.icon
                    size={48}
                    strokeWidth={1.5}
                    className={card.isDark ? 'text-white' : 'text-slate-800'}
                  />
                </div>

                {/* Title */}
                <h3 className={`text-lg font-bold mb-3 ${card.isDark ? 'text-[#D6EB00]' : 'text-slate-900'
                  }`}>
                  {card.title}
                </h3>

                {/* Description */}
                {/* <p className={`text-sm leading-relaxed ${card.isDark ? 'text-gray-300' : 'text-slate-600'
                  }`}>
                  {card.desc}
                </p> */}
              </div>
            ))}
          </div>

          {/* Right Column: Image with Decorations */}
          <div className="w-full lg:w-1/2 relative flex items-center justify-center mt-8 lg:mt-0">
            {/* Decorative Circle Top-Right (Lime Green) */}
            <div className="absolute -top-10 -right-10 w-40 h-40 md:w-64 md:h-64 bg-[#ffc600] rounded-full z-0 hidden md:block"></div>

            {/* Decorative Semi-Circle Bottom-Left (Green) */}
            <div className="absolute -bottom-6 left-0 md:left-10 w-24 h-24 md:w-40 md:h-40 bg-[#053cc0] rounded-full z-0"></div>

            {/* Main Image Container */}
            <div className="relative z-10 w-full h-full max-h-[500px] rounded-[40px] overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
                alt="Digital Growth Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
