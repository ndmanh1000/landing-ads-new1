"use client";

import { useState } from "react";

export default function Story() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const qaItems = [
    {
      question: "Tôi có cần rành công nghệ không?",
      answer: "Không. EDU thiết kế cho giáo viên, không phải kỹ thuật.",
    },
    {
      question: "Dùng thử có mất phí không?",
      answer: "Hoàn toàn miễn phí. Không ràng buộc.",
    },
    {
      question: "Có phải nhập lại dữ liệu cũ?",
      answer: "Không. Có thể dùng ngay thư viện sẵn có.",
    },
    {
      question: "Có phù hợp dạy online / dạy thêm không?",
      answer: "EDU được thiết kế ưu tiên nhóm giáo viên này.",
    },
  ];

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section id="story" className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 py-12 dark:from-gray-dark dark:via-gray-900 dark:to-gray-dark md:py-16 lg:py-20">
        {/* Animated Background Elements */}
        <div className="absolute right-0 top-0 -z-0 animate-float-slow opacity-10">
          <div className="h-96 w-96 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 blur-3xl"></div>
        </div>
        <div className="absolute bottom-0 left-0 -z-0 animate-float-slow-reverse opacity-10">
          <div className="h-96 w-96 rounded-full bg-gradient-to-br from-cyan-400 to-blue-400 blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          {/* Section Title */}
          <div className="mb-12 text-center animate-fade-in-down">
            <h2 className="mb-4 text-xl font-extrabold leading-tight text-black dark:text-white sm:text-2xl md:text-2xl uppercase">
              <span className="bg-gradient-to-r from-primary via-purple-600 to-primary bg-clip-text text-transparent">
                Những điều giáo viên thường hỏi trước khi dùng Blue EDU
              </span>
            </h2>
          </div>

          {/* Q&A Accordion */}
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-col gap-4">
              {qaItems.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="overflow-hidden rounded-2xl border-2 border-gray-200 bg-white shadow-lg transition-all duration-300 hover:border-primary/50 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800">
                      {/* Question Button */}
                      <button
                        onClick={() => toggleItem(index)}
                        className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-700/50 md:p-8"
                      >
                        <div className="flex flex-1 items-start gap-3">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-purple-600 text-white shadow-md">
                            <span className="text-lg font-bold">❓</span>
                          </div>
                          <h3 className="flex-1 pt-1 text-base font-bold leading-tight text-gray-900 dark:text-white sm:text-lg md:text-lg">
                            {item.question}
                          </h3>
                        </div>
                        {/* Arrow Icon */}
                        <div
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                            }`}
                        >
                          <svg
                            className="h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </button>

                      {/* Answer Content - Collapsible */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                          }`}
                      >
                        <div className="border-t border-gray-200 p-6 dark:border-gray-700 md:p-8 md:pt-6">
                          <div className="flex items-start gap-3">
                            <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-500">
                              <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <p className="flex-1 text-sm leading-relaxed text-gray-700 dark:text-gray-300 sm:text-base md:text-md">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
