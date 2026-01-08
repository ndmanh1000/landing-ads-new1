"use client";

import Image from "next/image";

export default function Story() {
  return (
    <>
      <section id="story" className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 py-12 dark:from-gray-dark dark:via-gray-900 dark:to-gray-dark md:py-16 lg:py-20">
        {/* Animated Background Elements */}
        <div className="absolute right-0 top-0 -z-0 animate-float-slow opacity-20">
          <div className="h-96 w-96 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 blur-3xl"></div>
        </div>
        <div className="absolute bottom-0 left-0 -z-0 animate-float-slow-reverse opacity-20">
          <div className="h-96 w-96 rounded-full bg-gradient-to-br from-cyan-400 to-blue-400 blur-3xl"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 -z-0 opacity-5 dark:opacity-10">
          <div className="h-full w-full" style={{
            backgroundImage: `linear-gradient(rgba(74, 108, 247, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(74, 108, 247, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 -z-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute h-2 w-2 rounded-full bg-primary/20 animate-float-delayed"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="container relative z-10">
          <div className="grid gap-8 lg:grid-cols-5 lg:items-center lg:gap-12">
            {/* Content Section - Left */}
            <div className="animate-fade-in-up lg:col-span-2">
              {/* Title */}
              <div className="mb-8">
                <div className="relative inline-block">
                  <h2 className="relative text-xl font-extrabold leading-tight text-black dark:text-white sm:text-2xl md:text-3xl">
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
                      BlueEdu là gì ?
                    </span>
                    {/* Animated Underline */}
                    <span className="absolute -bottom-3 left-0 h-1.5 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-50">
                      <span className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white to-transparent"></span>
                    </span>
                  </h2>
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-4">
                <p className="text-base leading-relaxed text-black dark:text-body-color-dark sm:text-lg">
                  BlueEdu được sinh ra từ <span className="font-semibold text-primary">Blue Rise</span> – giải pháp chuyển đổi số giáo dục đang được sử dụng bởi nhiều đơn vị, trường học và trung tâm lớn tại Việt Nam.
                </p>

                <p className="text-base leading-relaxed text-black dark:text-body-color-dark sm:text-lg">
                  Chúng tôi tách BlueEdu ra để giáo viên cá nhân có thể sở hữu một công cụ <span className="font-semibold text-primary">LMS thực thụ</span>, dễ dùng, nhỏ gọn, nhưng vẫn mang sức mạnh từ nền tảng lớn.
                </p>

                <div className="relative rounded-lg border-2 border-primary/20 bg-gradient-to-br from-blue-50/50 to-purple-50/50 p-4 dark:from-gray-800/50 dark:to-gray-900/50 sm:p-5">
                  <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 opacity-0 blur transition-opacity duration-500 group-hover:opacity-100"></div>

                  <p className="relative text-base font-medium leading-relaxed text-black dark:text-body-color-dark sm:text-lg">
                    <span className="mr-2 text-lg">✨</span>
                    Bạn không dùng công cụ rời rạc. Bạn đang dùng một <span className="font-bold text-primary">mảnh ghép chuyên nghiệp</span> trong một <span className="font-bold text-primary">hệ sinh thái giáo dục hoàn chỉnh</span>.
                  </p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="mt-8 flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 animate-pulse rounded-full bg-primary"></div>
                  <span className="text-sm font-medium text-black dark:text-body-color-dark">Hệ sinh thái hoàn chỉnh</span>
                </div>
                <div className="h-4 w-px bg-gray-300 dark:bg-gray-600"></div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 animate-pulse rounded-full bg-purple-500"></div>
                  <span className="text-sm font-medium text-black dark:text-body-color-dark">Nền tảng mạnh mẽ</span>
                </div>
              </div>
            </div>

            {/* Visual Section - Right - Image */}
            <div className="relative animate-fade-in-up lg:col-span-3" style={{ animationDelay: '200ms' }}>
              <div className="relative w-full">
                <div className="relative mx-auto w-full max-w-full overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-primary/20 dark:shadow-gray-800">
                  <div className="relative aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] lg:aspect-[4/3]">
                    <Image
                      src="/images/all/mockupy.webp"
                      alt="Blue Edu - Đa nền tảng và đa thiết bị"
                      fill
                      className="object-contain object-center"
                    // priority
                    // sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                    />
                    {/* Overlay gradient for better text readability if needed */}
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none"></div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
