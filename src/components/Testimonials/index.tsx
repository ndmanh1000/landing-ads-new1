"use client";

import { Testimonial } from "@/types/testimonial";
import { useState, useRef, useEffect } from "react";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Thầy Bun",
    designation: "Giáo viên Toán",
    content:
      "BlueEdu đã giúp tôi giảm thời gian chấm bài đáng kể và tăng độ chính xác của việc chấm bài.",
    image: "/images/testimonials/auth-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Thầy Bin",
    designation: "Giáo viên Vật Lý",
    content:
      "BlueEdu đã giúp tôi giảm thời gian chấm bài đáng kể và tăng độ chính xác của việc chấm bài.",
    image: "/images/testimonials/auth-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "Thầy Bi",
    designation: "Giáo viên Hóa Học",
    content:
      "BlueEdu đã giúp tôi giảm thời gian chấm bài đáng kể và tăng độ chính xác của việc chấm bài.",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },
  {
    id: 4,
    name: "Cô T.",
    designation: "Giáo viên",
    content: "BlueEdu đã giúp tôi giảm thời gian chấm bài đáng kể và tăng độ chính xác của việc chấm bài.",
    image: "/images/testimonials/auth-01.png",
    star: 5,
  },
  {
    id: 5,
    name: "Thầy L.",
    designation: "Giáo viên",
    content: "BlueEdu đã giúp tôi giảm thời gian chấm bài đáng kể và tăng độ chính xác của việc chấm bài.",
    image: "/images/testimonials/auth-02.png",
    star: 5,
  },
  {
    id: 6,
    name: "Cô M.",
    designation: "Giáo viên",
    content: "BlueEdu đã giúp tôi giảm thời gian chấm bài đáng kể và tăng độ chính xác của việc chấm bài.",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Cards visible at once based on screen size
  const getCardsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3; // lg: 3 cards
      if (window.innerWidth >= 768) return 2; // md: 2 cards
      return 1; // sm: 1 card
    }
    return 3;
  };

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());

  const maxIndex = Math.max(0, testimonialData.length - cardsPerView);

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Sync currentIndex with scroll position
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      const containerWidth = carousel.clientWidth;
      const cardWidth = containerWidth / cardsPerView;
      const gap = 32;
      const totalCardWidth = cardWidth + gap;
      const newIndex = Math.round(carousel.scrollLeft / totalCardWidth);
      const clampedIndex = Math.max(0, Math.min(newIndex, maxIndex));

      if (clampedIndex !== currentIndex) {
        setCurrentIndex(clampedIndex);
      }
    };

    carousel.addEventListener('scroll', handleScroll);
    return () => carousel.removeEventListener('scroll', handleScroll);
  }, [cardsPerView, maxIndex, currentIndex]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (!carouselRef.current) return;

    // Calculate which card should be in view
    const containerWidth = carouselRef.current.clientWidth;
    const cardWidth = containerWidth / cardsPerView;
    const gap = 32; // 2rem = 32px
    const totalCardWidth = cardWidth + gap;
    const newIndex = Math.round(carouselRef.current.scrollLeft / totalCardWidth);
    const clampedIndex = Math.max(0, Math.min(newIndex, maxIndex));

    setCurrentIndex(clampedIndex);

    // Smooth snap to card
    carouselRef.current.scrollTo({
      left: clampedIndex * totalCardWidth,
      behavior: 'smooth',
    });
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !carouselRef.current) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    handleMouseUp();
  };

  const goToSlide = (index: number) => {
    const clampedIndex = Math.max(0, Math.min(index, maxIndex));
    setCurrentIndex(clampedIndex);
    if (carouselRef.current) {
      const containerWidth = carouselRef.current.clientWidth;
      const cardWidth = containerWidth / cardsPerView;
      const gap = 32; // 2rem = 32px
      const totalCardWidth = cardWidth + gap;
      carouselRef.current.scrollTo({
        left: clampedIndex * totalCardWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="testimonials" className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-12 md:py-16 lg:py-20">
      <div className="container">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <h2 className="mb-4 text-xl font-bold leading-tight text-black dark:text-white sm:text-2xl md:text-3xl line-clamp-2">
            Các đánh giá của các giáo viên đã sử dụng BlueEdu
          </h2>
          <p className="text-sm leading-relaxed text-black sm:text-base md:text-lg line-clamp-2">
            Các giáo viên đã sử dụng BlueEdu và đánh giá tích cực về chất lượng và tính tiện lợi của nền tảng.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Carousel */}
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth md:gap-8"
            style={{
              cursor: isDragging ? 'grabbing' : 'grab',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {testimonialData.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0"
                style={{
                  width: `calc((100% - ${(cardsPerView - 1) * 2}rem) / ${cardsPerView})`,
                }}
              >
                <SingleTestimonial testimonial={testimonial} />
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                  ? 'w-8 bg-primary'
                  : 'w-2 bg-gray-300 dark:bg-gray-600'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => goToSlide(currentIndex - 1)}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 rounded-full bg-white p-3 shadow-lg transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 dark:bg-gray-800 lg:-translate-x-12"
            aria-label="Previous slide"
          >
            <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => goToSlide(currentIndex + 1)}
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 rounded-full bg-white p-3 shadow-lg transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 dark:bg-gray-800 lg:translate-x-12"
            aria-label="Next slide"
          >
            <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      <div className="absolute right-0 top-5 z-[-1]">
        <svg
          width="238"
          height="531"
          viewBox="0 0 238 531"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="422.819"
            y="-70.8145"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(51.2997 422.819 -70.8145)"
            fill="url(#paint0_linear_83:2)"
          />
          <rect
            opacity="0.3"
            x="426.568"
            y="144.886"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(51.2997 426.568 144.886)"
            fill="url(#paint1_linear_83:2)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_83:2"
              x1="517.152"
              y1="-251.373"
              x2="517.152"
              y2="459.865"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_83:2"
              x1="455.327"
              y1="-35.673"
              x2="455.327"
              y2="675.565"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-5 left-0 z-[-1]">
        <svg
          width="279"
          height="106"
          viewBox="0 0 279 106"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5">
            <path
              d="M-57 12L50.0728 74.8548C55.5501 79.0219 70.8513 85.7589 88.2373 79.3692C109.97 71.3821 116.861 60.9642 156.615 63.7423C178.778 65.291 195.31 69.2985 205.911 62.3533C216.513 55.408 224.994 47.7682 243.016 49.1572C255.835 50.1453 265.278 50.8936 278 45.3373"
              stroke="url(#paint0_linear_72:302)"
            />
            <path
              d="M-57 1L50.0728 63.8548C55.5501 68.0219 70.8513 74.7589 88.2373 68.3692C109.97 60.3821 116.861 49.9642 156.615 52.7423C178.778 54.291 195.31 58.2985 205.911 51.3533C216.513 44.408 224.994 36.7682 243.016 38.1572C255.835 39.1453 265.278 39.8936 278 34.3373"
              stroke="url(#paint1_linear_72:302)"
            />
            <path
              d="M-57 23L50.0728 85.8548C55.5501 90.0219 70.8513 96.7589 88.2373 90.3692C109.97 82.3821 116.861 71.9642 156.615 74.7423C178.778 76.291 195.31 80.2985 205.911 73.3533C216.513 66.408 224.994 58.7682 243.016 60.1572C255.835 61.1453 265.278 61.8936 278 56.3373"
              stroke="url(#paint2_linear_72:302)"
            />
            <path
              d="M-57 35L50.0728 97.8548C55.5501 102.022 70.8513 108.759 88.2373 102.369C109.97 94.3821 116.861 83.9642 156.615 86.7423C178.778 88.291 195.31 92.2985 205.911 85.3533C216.513 78.408 224.994 70.7682 243.016 72.1572C255.835 73.1453 265.278 73.8936 278 68.3373"
              stroke="url(#paint3_linear_72:302)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_72:302"
              x1="256.267"
              y1="53.6717"
              x2="-40.8688"
              y2="8.15715"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_72:302"
              x1="256.267"
              y1="42.6717"
              x2="-40.8688"
              y2="-2.84285"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_72:302"
              x1="256.267"
              y1="64.6717"
              x2="-40.8688"
              y2="19.1572"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_72:302"
              x1="256.267"
              y1="76.6717"
              x2="-40.8688"
              y2="31.1572"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Testimonials;
