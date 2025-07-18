import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">What Our Students Say</h2>
        <Swiper
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
          modules={[Pagination, Autoplay]}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-8 rounded-2xl shadow-md mx-4">
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
          ))}
        </Swiper>
      </div>
    </section>
  );
}
