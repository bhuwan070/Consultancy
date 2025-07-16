import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const images = [
  "/images/japan.jpg",
  "/images/usa.jpg",
];

export default function Home() {
  return (
    <section className="relative w-full h-[100vh] overflow-hidden">
      {/* Swiper Background Slider */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="w-full h-full z-0"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div className="w-full h-[100vh]">
              <img
                src={img}
                alt={`slide-${idx}`}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay Text */}
      <div className="absolute inset-0 z-10 bg-black/50 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-lg">
          Welcome to Our Website
        </h1>
        <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-white drop-shadow-md">
          We provide the best solutions for your needs.
        </p>
      </div>
    </section>
  );
}
