"use client";

import Image from "next/image";

export default function Video() {
  const items = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 8L32 16L24 24L16 16L24 8Z" fill="#93C5FD" />
          <path d="M40 16L32 24L40 32L48 24L40 16Z" fill="#93C5FD" />
          <path d="M8 16L16 24L8 32L0 24L8 16Z" fill="#93C5FD" />
          <path d="M24 24L32 32L24 40L16 32L24 24Z" fill="#93C5FD" />
          <path d="M24 8L32 16L24 24L16 16L24 8Z" stroke="#60A5FA" strokeWidth="2" fill="none" />
          <path d="M24 24L32 32L24 40L16 32L24 24Z" stroke="#60A5FA" strokeWidth="2" fill="none" />
        </svg>
      ),
      text: "Giáo viên dạy thêm ngoài giờ hoặc lớp nhỏ",
      bgColor: "bg-white",
      iconBg: "bg-blue-50",
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="12" y="32" width="8" height="8" fill="#FCA5A5" rx="2" />
          <rect x="20" y="22" width="8" height="18" fill="#F87171" rx="2" />
          <rect x="28" y="14" width="8" height="26" fill="#EF4444" rx="2" />
        </svg>
      ),
      text: "Giáo viên dạy tại trung tâm",
      bgColor: "bg-white",
      iconBg: "bg-red-50",
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="20" r="12" fill="#E9D5FF" />
          <circle cx="24" cy="20" r="8" fill="#C084FC" />
          <path d="M24 28V36" stroke="#A855F7" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M24 36H28" stroke="#A855F7" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      ),
      text: "Thầy/Cô muốn có nguồn câu hỏi ổn định để dùng lâu dài",
      bgColor: "bg-white",
      iconBg: "bg-purple-50",
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="8" fill="#DBEAFE" />
          <circle cx="24" cy="24" r="3" fill="#3B82F6" />
          <circle cx="8" cy="24" r="4" fill="#93C5FD" />
          <circle cx="40" cy="24" r="4" fill="#93C5FD" />
          <circle cx="24" cy="8" r="4" fill="#93C5FD" />
          <circle cx="24" cy="40" r="4" fill="#93C5FD" />
        </svg>
      ),
      text: "Thầy/Cô muốn tiết kiệm thời gian soạn bài, ra đề",
      bgColor: "bg-white",
      iconBg: "bg-blue-50",
    },
  ];

  return (
    <>
      <section id="video" className="relative overflow-hidden py-12 dark:from-gray-dark dark:via-gray-900 dark:to-gray-dark md:py-16 lg:py-20">
        {/* Animated Background with Blur and Colors */}
        <div className="absolute inset-0 backdrop-blur-md">
          {/* Base Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-50/80 to-cyan-100/60 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>

          {/* Animated Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-200/40 via-purple-200/30 to-cyan-200/40 animate-gradient-xy opacity-80"></div>

          {/* Floating Animated Shapes - Large */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/25 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/25 rounded-full blur-3xl animate-float-slow-reverse"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-400/20 rounded-full blur-3xl animate-pulse-slow"></div>

          {/* Additional Animated Particles - Medium */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-300/35 rounded-full blur-2xl animate-float-delayed"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-300/30 rounded-full blur-2xl animate-float-delayed" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-cyan-300/35 rounded-full blur-2xl animate-float-delayed" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-28 h-28 bg-indigo-300/30 rounded-full blur-2xl animate-float-delayed" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="container relative z-10">
          {/* Section Title */}
          <div className="mb-10 text-center md:mb-12 lg:mb-16">
            <h2 className=" font-bold leading-tight text-blue-900 dark:text-white sm:text-3xl text-3xl md:text-3xl">
              Thư viện Blue Edu phù hợp với ai?
            </h2>
          </div>

          {/* Content Grid */}
          <div className="flex flex-col lg:flex-row lg:items-stretch lg:gap-8 xl:gap-12">
            {/* Left Side - Cards Grid */}
            <div className="mb-8 w-full lg:mb-0 lg:w-2/3">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 h-full">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className={`${item.bgColor} dark:bg-gray-800 rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md flex flex-col items-center justify-center text-center`}
                  >
                    <div className={`${item.iconBg} dark:bg-gray-700 mb-4 flex items-center justify-center rounded-lg p-3`}>
                      {item.icon}
                    </div>
                    <p className="text-base font-medium leading-relaxed text-gray-800 dark:text-white sm:text-lg">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="w-full lg:w-1/3">
              <div className="relative h-96 w-full overflow-hidden rounded-lg lg:h-full">
                <Image
                  src="/images/logo/tap1.jpeg"
                  alt="Giáo viên trong lớp học"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
