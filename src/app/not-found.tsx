import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Trang không tìm thấy | BlueEdu",
  description: "Trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.",
};

const NotFound = () => {
  return (
    <>
      <section className="relative z-10 overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 pb-16 pt-36 dark:from-gray-dark dark:via-gray-900 dark:to-gray-dark md:pb-20 lg:pb-28 lg:pt-[180px]">
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

        <div className="container relative z-10">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[600px] text-center animate-fade-in-up">
                {/* 404 Number with Animation */}
                <div className="mb-8">
                  <h1 className="text-9xl font-extrabold leading-none text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-shimmer bg-[length:200%_auto] sm:text-[150px]">
                    404
                  </h1>
                </div>

                {/* Error Icon */}
                <div className="mb-8 flex justify-center">
                  <div className="relative">
                    <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-red-500/20 to-orange-500/20 text-6xl animate-bounce">
                      <span>🔍</span>
                    </div>
                    <div className="absolute -inset-2 animate-ping rounded-full bg-gradient-to-br from-red-500/30 to-orange-500/30"></div>
                  </div>
                </div>

                {/* Error Message */}
                <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-5xl">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
                    Trang không tìm thấy
                  </span>
                </h2>
                <p className="mb-10 text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg sm:leading-relaxed">
                  Xin lỗi, trang bạn đang tìm kiếm không tồn tại, đã bị di chuyển hoặc đã bị xóa.
                  <br />
                  Vui lòng kiểm tra lại đường dẫn hoặc quay về trang chủ.
                </p>

                {/* CTA Button */}
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Link
                    href="/"
                    rel="noopener"
                    className="group relative inline-block overflow-hidden rounded-xl bg-gradient-to-r from-primary via-purple-600 to-primary px-8 py-4 text-lg font-bold text-white shadow-2xl transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-primary/50 active:scale-95"
                  >
                    {/* Animated gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-primary to-purple-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                    <span className="relative z-10 flex items-center">
                      <span className="mr-3 animate-bounce text-2xl">🏠</span>
                      <span>Quay về trang chủ</span>
                      <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </span>

                    {/* Shine effect */}
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 group-hover:translate-x-full"></span>

                    {/* Shadow running effect */}
                    <span className="absolute -inset-3 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent blur-3xl transition-transform duration-1000 group-hover:translate-x-full opacity-0 group-hover:opacity-100"></span>
                    <span className="absolute -inset-2 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent blur-2xl transition-transform duration-1000 delay-75 group-hover:translate-x-full opacity-0 group-hover:opacity-100"></span>
                    <span className="absolute -inset-1 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent blur-xl transition-transform duration-1000 delay-150 group-hover:translate-x-full opacity-0 group-hover:opacity-100"></span>
                  </Link>


                </div>

                {/* Quick Links */}

              </div>
            </div>
          </div>
        </div>

        {/* Decorative SVG Elements */}
        <div className="absolute bottom-0 left-0 z-[-1] hidden sm:block">
          <svg
            width="406"
            height="286"
            viewBox="0 0 406 286"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.3">
              <rect
                opacity="0.5"
                x="56.25"
                y="110.344"
                width="116.719"
                height="116.438"
                stroke="url(#paint0_linear_404)"
              />
              <rect
                opacity="0.1"
                x="56.25"
                y="110.344"
                width="116.719"
                height="116.438"
                fill="url(#paint1_linear_404)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_404"
                x1="49.0781"
                y1="112.313"
                x2="148.922"
                y2="131.859"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_404"
                x1="179.141"
                y1="209.062"
                x2="32.6026"
                y2="145.47"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute right-0 top-0 z-[-1] hidden sm:block">
          <svg
            width="406"
            height="286"
            viewBox="0 0 406 286"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.3">
              <rect
                opacity="0.5"
                x="57.25"
                y="108.344"
                width="116.719"
                height="116.438"
                stroke="url(#paint0_linear_404_2)"
              />
              <rect
                opacity="0.1"
                x="57.25"
                y="108.344"
                width="116.719"
                height="116.438"
                fill="url(#paint1_linear_404_2)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_404_2"
                x1="50.0781"
                y1="110.313"
                x2="149.922"
                y2="129.859"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_404_2"
                x1="180.141"
                y1="207.062"
                x2="33.6026"
                y2="143.47"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default NotFound;

