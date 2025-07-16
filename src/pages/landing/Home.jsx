import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import StudyAbroadCard from "../../components/client/Home/StudyAbrodHomeCard";
import { NavLink } from "react-router-dom";
import { md_card_data } from "../../data/md_card_data";
import { study_card_data } from "../../data/study_card_data";

const SliderImages = study_card_data.map(item => item.image);

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
          {SliderImages.map((img, idx) => (
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
        <div className="bg-[#F5F1E9] shadow-lg rounded-xl p-6 sm:p-8 max-w-md w-full text-center space-y-4">
          {/* MD's Photo */}
          <img
            src={md_card_data.photo}
            alt={"Md. Sunil Khadka"}
            className="w-36 h-36 sm:w-32 sm:h-32 md:w-36 md:h-36 mx-auto rounded-2xl object-cover shadow-md"
          />

          {/* Name or Signature */}
          <p className="text-lg md:text-xl font-bold text-gray-800 max-w-xl mx-auto">
           {md_card_data.title}
          </p>

          {/* MD's Message */}
          <p className="text-base sm:text-lg md:text-xl text-gray-700">
            {md_card_data.message}
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-[#8B4513]">
            STUDY ABROAD SERVICES
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {study_card_data.map((card, idx) => (
              <StudyAbroadCard key={idx} {...card} />
            ))}
          </div>
          {/* View All Destinations Button */}
          <div className="flex justify-center mt-10">
            <NavLink
              to="/studyabroad"
              className="bg-[#8B4513] hover:bg-cyan-700 text-white  px-3 py-2 rounded-md transition"
            >
              View All Destination
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
}
