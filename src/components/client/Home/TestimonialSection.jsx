import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    quote: "This platform helped me achieve my goals faster than I imagined!",
    name: "Anjali Shrestha",
    role: "Student",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    quote: "Outstanding support and well-structured content. Highly recommended!",
    name: "Ramesh Karki",
    role: "Parent",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    quote: "Professional and friendly team. I feel confident about my future now.",
    name: "Sneha Thapa",
    role: "Test Prep Student",
    image: "https://randomuser.me/api/portraits/women/75.jpg",
  },
];

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-gradient-to-r from-blue-200 via-white to-blue-300 py-12">
      <div className="max-w-6xl mx-auto px-4 text-center relative">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">STUDENT TESTIMONIALS</h2>
        <Swiper
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
          navigation={true}
          modules={[Pagination, Autoplay, Navigation]}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
          }}
        >
          {testimonials.map((item, index) => {
            // Determine if the slide is "main" or "secondary"
            const isLarge = index === activeIndex % testimonials.length;

            return (
              <SwiperSlide key={index}>
                <div
                  className={`p-6 md:p-8 rounded-2xl shadow-md bg-white mx-2 transition-all duration-300 transform`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 mx-auto rounded-full mb-4 object-cover"
                  />
                  <p className="text-gray-600 italic mb-4">"{item.quote}"</p>
                  <h3 className="font-semibold text-gray-800">{item.name}</h3>
                  <span className="text-sm text-gray-500">{item.role}</span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Style Swiper Navigation Arrows */}
        <style>{`
          .swiper-button-next,
          .swiper-button-prev {
            color: #1e40af; /* Tailwind's blue-900 */
            top: 40%;
          }
          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 1.5rem;
            font-weight: bold;
          }
        `}</style>
      </div>
    </section>
  );
}
