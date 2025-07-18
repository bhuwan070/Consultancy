import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const universityLogos = [
  {
    name: "Harvard University",
    logo: "https://upload.wikimedia.org/wikipedia/en/2/29/Harvard_shield_wreath.svg",
  },
  {
    name: "Oxford University",
    logo: "https://upload.wikimedia.org/wikipedia/en/d/d5/Oxford_University_Circlet.svg",
  },
  {
    name: "MIT",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg",
  },
  {
    name: "Cambridge University",
    logo: "https://upload.wikimedia.org/wikipedia/en/e/e0/Cambridge_University_Press_logo.svg",
  },
  {
    name: "TU Nepal",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/75/TU_logo_nepal.svg/640px-TU_logo_nepal.svg.png",
  },
  {
    name: "Stanford University",
    logo: "https://upload.wikimedia.org/wikipedia/en/b/b7/Stanford_University_seal_2003.svg",
  },
  {
    name: "Yale University",
    logo: "https://upload.wikimedia.org/wikipedia/en/4/47/Yale_University_Shield_1.svg",
  },
  {
    name: "Princeton University",
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7e/Princeton_U_Shield.svg",
  },
  {
    name: "Kathmandu University",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/Kathmandu_University_logo.svg/1024px-Kathmandu_University_logo.svg.png",
  },
  {
    name: "Pokhara University",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cb/Pokhara_University_logo.svg/1200px-Pokhara_University_logo.svg.png",
  },
];

export default function AffiliatedUniversities() {
  return (
    <section className="bg-gradient-to-r from-white to-blue-50 py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">
          Our Affiliated Colleges & Universities
        </h2>

        <div className="relative">
          {/* Swiper */}
          <Swiper
            spaceBetween={20}
            centeredSlides={true}
            loop={true}
            speed={2000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
            modules={[Autoplay, Navigation]}
          >
            {universityLogos.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center items-center px-6">
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition duration-300 ease-in-out"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Arrows */}
          <div className="swiper-button-prev text-gray-500 hover:text-gray-800 absolute left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer">
            ❮
          </div>
          <div className="swiper-button-next text-gray-500 hover:text-gray-800 absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer">
            ❯
          </div>
        </div>
      </div>
    </section>
  );
}
