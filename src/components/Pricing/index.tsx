"use client";

import { useLogin } from "@/contexts/LoginContext";
import { trackCTAClick } from "@/lib/posthog";

const Pricing = () => {
  const { openLoginModal } = useLogin();
  const pricingPlans = [
    {
      id: "free",
      title: "Free",
      price: "0",
      priceNote: "VNĐ",
      description: "Thử xem Blue Edu có thể làm gì",
      buttonText: "Dùng thử miễn phí",
      buttonStyle: "bg-gray-200 text-gray-700 hover:bg-gray-300",
      isCurrent: false,
      features: [
        {
          text: "Tạo lớp học",
        },
        {
          text: "Giới hạn 50 học sinh/ lớp",
        },
        {
          text: "Thống kê kết quả học tập",
        },
        {
          text: "Tạo Ma trận, tạo phiếu, chấm bài tự động",
        },
        {
          text: "Số lượt giao bài: 10 lượt",
        },
        {
          text: "Tải xuống đề bài: 1 lần",
        },
        {
          text: "Báo cáo kết quả",
        },
        {
          text: "100MB dung lượng lưu trữ",
        },
        {
          text: "Tặng 5.000 Point AI",
        },
      ],
      footnote: "",
    },
    {
      id: "premium",
      title: "Premium",
      price: "139.000",
      priceNote: "VNĐ/ tháng",
      description: "Làm việc chuyên nghiệp hơn với nhiều tính năng không giới hạn",
      buttonText: "Nâng cấp lên Premium",
      buttonStyle: "bg-primary text-white hover:bg-primary/90",
      isCurrent: false,
      features: [
        {
          text: "Tạo lớp học",
        },
        {
          text: "Không giới hạn số lượng học sinh",
        },
        {
          text: "Thống kê kết quả học tập tự động",
        },
        {
          text: "Tạo Ma trận, tạo phiếu, chấm bài tự động",
        },
        {
          text: "Số lượt giao bài: không giới hạn",
        },
        {
          text: "Tải xuống đề bài: không giới hạn",
        },
        {
          text: "Báo cáo kết quả tự động",
        },
        {
          text: "5GB dung lượng lưu trữ",
        },
        {
          text: "Tặng 20.000 Point AI",
        },
      ],
      footnote: "",
    },
    {
      id: "premium-plus",
      title: "Premium +",
      price: "990.000",
      priceNote: "VNĐ/ năm",
      savings: "Tiết kiệm 41%",
      description: "Phục vụ công việc lâu dài và chi phí tối ưu",
      buttonText: "Chuyển sang Premium +",
      buttonStyle: "bg-black text-white hover:bg-gray-900 shadow-md",
      isHighlighted: true,
      isCurrent: false,
      features: [
        {
          text: "Tạo lớp học",
        },
        {
          text: "Không giới hạn số lượng học sinh",
        },
        {
          text: "Thống kê kết quả học tập tự động",
        },
        {
          text: "Tạo Ma trận, tạo phiếu, chấm bài tự động",
        },
        {
          text: "Số lượt giao bài: không giới hạn",
        },
        {
          text: "Tải xuống đề bài: không giới hạn",
        },
        {
          text: "Báo cáo kết quả tự động",
        },
        {
          text: "5GB dung lượng lưu trữ",
        },
        {
          text: "Tặng 50.000 Point AI",
        },
      ],
      footnote: "",
    },
  ];

  return (
    <section id="pricing" className="overflow-hidden bg-white py-12 dark:bg-gray-dark md:py-16 lg:py-20">
      <div className="container">
        {/* Section Title */}
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-xl font-bold !leading-tight text-black dark:text-white sm:text-2xl md:text-3xl">
            Đề Xuất Gói tính năng BlueEdu
          </h2>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid gap-6 md:grid-cols-3 md:items-stretch">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.id}
              className={`flex flex-col rounded-lg border bg-white p-5 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-[#f5f5ff] dark:bg-gray-800 dark:hover:bg-gray-800/50 sm:p-6 ${plan.isHighlighted
                ? "border-gray-200 shadow-lg dark:border-gray-700"
                : "border-gray-200 dark:border-gray-700"
                }`}
            >
              {/* Header */}
              <div className="mb-4 min-h-[120px]">
                <div className="mb-2 flex items-center gap-2">
                  <h3 className="text-xl font-bold text-black dark:text-white">
                    {plan.title}
                  </h3>
                  {plan.savings && (
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary dark:bg-primary/20 dark:text-primary">
                      {plan.savings}
                    </span>
                  )}
                </div>
                <div className="mb-2">
                  <span className="text-3xl font-light text-black dark:text-gray-400">
                    {plan.price}
                  </span>
                  <span className="ml-1 text-sm text-black dark:text-gray-500">
                    {plan.priceNote}
                  </span>
                </div>
                <p className="text-sm text-black dark:text-gray-400">
                  {plan.description}
                </p>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => {
                  trackCTAClick(plan.buttonText, `pricing-${plan.id}`);
                  openLoginModal();
                }}
                className={`group/button relative mb-4 w-full overflow-hidden rounded-full px-4 py-2.5 text-center text-sm font-semibold transition-colors ${plan.buttonStyle}`}
              >
                {/* Animated Shadow Running Effect */}
                <span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent blur-xl"
                  style={{
                    animation: `shadowRun 3s ease-in-out infinite`,
                    animationDelay: `${index * 0.6}s`
                  }}
                ></span>
                <span className="relative z-10">{plan.buttonText}</span>
              </button>

              {/* Features List */}
              <div className="mb-4 flex-1 space-y-2.5">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <svg
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-sm text-black dark:text-gray-300">
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Footnote */}
              {plan.footnote && (
                <p className="mt-2 text-xs text-gray-500 dark:text-gray-500">
                  {plan.footnote}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
