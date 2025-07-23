import React from "react";
import StudyAbroadCard from "../../../components/client/Home/StudyAbrodCard";
import { services_data } from "../../../data/services_data";
import AffiliatedUniversities from "../../../components/client/Home/AffilatedUniversities";
import StudyAbroadCTA from "../../../components/client/Home/StudyAbroadCTA";

export default function OurServices() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">
          Our Services
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {services_data.map((service, index) => (
            <StudyAbroadCard
              key={index}
              title={service.title}
              image={service.imageSrc}      // remapped here
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

