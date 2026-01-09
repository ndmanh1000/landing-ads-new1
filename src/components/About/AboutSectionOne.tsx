"use client";

import Image from "next/image";

const AboutSectionOne = () => {
  const cards = [
    {
      id: 1,
      image: "/images/logo/tap1.jpeg",
      title: "Không rườm rà hành chính",

    },
    {
      id: 2,
      image: "/images/logo/tap2.png",
      title: "Không phức tạp quản trị",

    },
    {
      id: 3,
      image: "/images/logo/tap1.jpeg",
      title: "Không cần IT hỗ trợ",

    },
    {
      id: 4,
      image: "/images/logo/tap1.jpeg",
      title: "Giáo viên chỉ cần dạy – việc còn lại để Blue Edu lo",

    },
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/20 to-purple-50/20 py-12 md:py-16 lg:py-20">
      {/* Subtle background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-1/4 h-64 w-64 rounded-full bg-blue-200/20 blur-3xl"></div>
        <div className="absolute left-0 bottom-1/4 h-64 w-64 rounded-full bg-purple-200/20 blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        {/* Section Title */}
        <div className="mb-12 text-center animate-fade-in-down">
          <p className="mb-4 text-xl font-extrabold leading-tight text-black dark:text-white sm:text-2xl md:text-2xl">
            <span className="bg-gradient-to-r from-primary via-purple-600 to-primary bg-clip-text text-transparent">
              TẠI SAO GIÁO VIÊN DẠY THÊM PHÙ HỢP VỚI BLUE EDU?
            </span>
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-4 lg:gap-6">
            {cards.map((card, index) => (
              <div
                key={card.id}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-full rounded-xl border-2 border-gray-200 bg-gradient-to-br from-blue-50/50 to-purple-50/50 p-4 transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-lg md:p-5">
                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden rounded-lg md:h-64 lg:h-72">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>

                  {/* Text Box Overlay - Chèn lên ảnh với chiều cao bằng nhau */}
                  <div className="relative -mt-10 mx-2 flex flex-col rounded-xl bg-white p-4 shadow-xl transition-all duration-300 group-hover:shadow-2xl md:mx-2 md:p-5 lg:p-6">
                    <h3 className="flex min-h-[3rem] items-center justify-center text-center text-sm font-bold leading-tight text-gray-900 md:min-h-[3.5rem] md:text-base lg:min-h-[4rem] lg:text-sm">
                      {card.title}
                    </h3>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
