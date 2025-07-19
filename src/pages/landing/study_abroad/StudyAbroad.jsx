import React from "react";
import StudyAbroadCard from "../../../components/client/Home/StudyAbrodCard";
import { study_card_data } from "../../../data/study_card_data";
import AffiliatedUniversities from "../../../components/client/Home/AffilatedUniversities";
import StudyAbroadCTA from "../../../components/client/Home/StudyAbroadCTA";

function StudyAbroad() {
  return (
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
      </div>
      {/* affilated colleges/universities */}
      <AffiliatedUniversities />

      {/* study abroad CT section */}
      <StudyAbroadCTA />
    </section>
  );
}

export default StudyAbroad;
