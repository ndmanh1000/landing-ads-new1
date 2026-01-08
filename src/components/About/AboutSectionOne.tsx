"use client";

import Image from "next/image";
import Button from "@/components/Common/Button";
import { useLogin } from "@/contexts/LoginContext";

const AboutSectionOne = () => {
  const { openLoginModal } = useLogin();
  const features = [
    {
      title: "AI chuyên sâu tài liệu giáo dục",
      image: "/images/all/aichuyensau.svg",
      gradient: "from-blue-500 to-purple-500",
      delay: 0,
    },
    {
      title: "Tạo đề thi tự động",
      image: "/images/all/taodethitudong.svg",
      gradient: "from-purple-500 to-pink-500",
      delay: 100,
    },
    {
      title: "Số hóa tài liệu cực nhanh",
      image: "/images/all/sohoatailieucucnhanh.svg",
      gradient: "from-green-500 to-emerald-500",
      delay: 200,
    },
    {
      title: "Dễ dùng cho giáo viên cá nhân",
      image: "/images/all/dedungchogvcanhan.svg",
      gradient: "from-orange-500 to-red-500",
      delay: 300,
    },
    {
      title: "Báo cáo tiến độ học sinh",
      image: "/images/all/baocaotiendohocsinh.svg",
      gradient: "from-cyan-500 to-blue-500",
      delay: 400,
    },
    {
      title: "Khả năng mở rộng lên hệ thống lớn",
      image: "/images/all/khanangmoronghethonglon.svg",
      gradient: "from-indigo-500 to-purple-500",
      delay: 500,
    },
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 py-12 dark:from-gray-dark dark:via-gray-900 dark:to-gray-dark md:py-16 lg:py-20">
      {/* Background decorative elements */}
      <div className="absolute right-0 top-0 -z-0 animate-float-slow opacity-10">
        <div className="h-96 w-96 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 left-0 -z-0 animate-float-slow-reverse opacity-10">
        <div className="h-96 w-96 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 -z-0 opacity-5 dark:opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(rgba(74, 108, 247, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(74, 108, 247, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      <div className="container relative z-10">
        {/* Section Title */}
        <div className="mb-12 text-center animate-fade-in-down">
          <h2 className="mb-4 text-xl font-extrabold leading-tight text-black dark:text-white sm:text-2xl md:text-3xl">
            <span className="bg-gradient-to-r from-primary via-purple-600 to-primary bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
              Vì sao nên chọn Blue Edu
            </span>
          </h2>
        </div>

        {/* Features Grid - 3 columns, 2 rows */}
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group animate-fade-in-up transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{ animationDelay: `${feature.delay}ms` }}
              >
                <div className="relative h-full overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-lg transition-all duration-300 dark:border-gray-700 dark:bg-gray-800 group-hover:border-primary/50 dark:group-hover:border-primary/50">
                  {/* Decorative gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-5`}></div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center text-center">
                    {/* Icon */}
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-purple-500/10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 dark:from-primary/20 dark:to-purple-500/20">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-semibold text-black dark:text-white sm:text-lg">
                      {feature.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlight Box */}
        <div className="mx-auto mt-12 max-w-4xl animate-fade-in-up animation-delay-600">
          <div className="relative overflow-hidden rounded-xl border-2 border-primary/20 bg-gradient-to-br from-primary/10 via-purple-500/10 to-primary/10 p-6 shadow-xl dark:border-primary/30 sm:p-7">
            {/* Decorative elements */}
            <div className="absolute -right-10 -top-10 h-32 w-32 animate-float rounded-full bg-primary/20 blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 h-40 w-40 animate-float-delayed rounded-full bg-purple-500/20 blur-2xl"></div>

            <div className="relative z-10 text-center">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl">
                Blue Edu - Giải pháp toàn diện cho giáo viên
              </h3>
              <p className="mb-6 text-base leading-relaxed text-black dark:text-body-color-dark sm:text-lg md:text-base mx-auto">
                Tất cả những gì bạn cần trong một nền tảng duy nhất, được thiết kế đặc biệt cho giáo viên Việt Nam
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mx-auto mt-12 max-w-3xl text-center animate-fade-in-up animation-delay-800">
          <Button
            onClick={openLoginModal}
            variant="primary"
            icon="🚀"
            className="inline-block"
            fullWidth={false}
          >
            Bắt đầu ngay - miễn phí
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
