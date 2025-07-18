import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import StudyAbroadCard from "../../components/client/Home/StudyAbrodHomeCard";
import { NavLink } from "react-router-dom";
import { md_card_data } from "../../data/md_card_data";
import { study_card_data } from "../../data/study_card_data";
import TestimonialSection from "../../components/client/Home/TestimonialSection";
import StudyBlogSection from "../../components/client/Home/StuduBlog";
import AffiliatedUniversities from "../../components/client/Home/AffilatedUniversities";
import StudyAbroadCTA from "../../components/client/Home/StudyAbroadCTA";
import MessageMD from "../../components/client/Home/MessageMD";

const SliderImages = study_card_data.map((item) => item.image);

export default function Home() {
  return (
    <>
      {/* Slider section */}
      <section className="relative w-full h-screen overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 10000 }}
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
          <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-white drop-shadow-md">
            We provide the best solutions for your needs.
          </p>
        </div>
      </section>

      <MessageMD />

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
              className="bg-[#8B4513] hover:bg-blue-900 text-white  px-3 py-2 rounded-md transition"
            >
              View All Destination
            </NavLink>
          </div>
        </div>
        <section className="mt-5">
          <TestimonialSection />
        </section>

        <section className="mt-5">
          <StudyBlogSection />
        </section>

        <section className="mt-5">
          <AffiliatedUniversities />
        </section>

        <section>
          <StudyAbroadCTA />
        </section>
      </section>
    </>
  );
}
