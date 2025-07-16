import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const images = ["/images/japan.jpg", "/images/usa.jpg"];

const cardData = {
  photo: "/images/md1.jpg",
  name: "Md. Sunil Khadka",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec tincidunt egestas, nisl nunc aliquam nunc, eget tincidunt nunc nunc eget nunc. Vivamus at ante eget lorem tincidunt dapibus. Integer vehicula, nunc non dignissim sollicitudin, sem purus cursus libero, sit amet egestas.",
};

export default function Home() {
  return (
    <>
      {/* Slider section */}
      <section className="relative w-full h-screen overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="w-full h-full z-0"
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={img}
                alt={`slide-${idx}`}
                className="w-full h-screen object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Overlay Text */}
        <div className="absolute inset-0 z-10 bg-black/50 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-lg">
            Welcome to Our Website
          </h1>
          <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-cyan-300 drop-shadow-md">
            We provide the best solutions for your needs.
          </p>
        </div>
      </section>

      <section className="flex justify-center bg-gray-100 py-10 px-4">
        <div className="bg-pink-200		 shadow-lg rounded-xl p-6 sm:p-8 max-w-md w-full text-center space-y-4">
          {/* MD's Photo */}
          <img
            src="/images/md1.jpg"
            alt="Md. Sunil Khadka"
            className="w-36 h-36 sm:w-32 sm:h-32 md:w-36 md:h-36 mx-auto rounded-2xl object-cover shadow-md"
          />
          
          {/* Name or Signature */}
          <p className="text-lg md:text-xl font-bold text-gray-800 max-w-xl mx-auto">
             Message From MD
          </p>

          {/* MD's Message */}
          <p className="text-base sm:text-lg md:text-xl text-gray-700">
              {cardData.message}
          </p>


        </div>
      </section>
    </>
  );
}
