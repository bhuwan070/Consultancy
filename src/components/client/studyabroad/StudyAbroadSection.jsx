import React, { useState } from "react";

export default function StudyAbroadSection({
  imageSrc,
  introductionText,
  whyCountryText,
  country,
}) {
  const [activeTab, setActiveTab] = useState("introduction");

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row gap-12 bg-gray-50 rounded-lg shadow-lg">
      {/* LEFT SECTION */}
      <div className="md:w-1/2 flex flex-col">
        {/* Buttons */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setActiveTab("introduction")}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              activeTab === "introduction"
                ? "bg-blue-900 text-white"
                : "bg-white text-blue-900 border border-blue-900 hover:bg-blue-900 hover:text-white"
            }`}
          >
            Introduction
          </button>
          <button
            onClick={() => setActiveTab("whyCountry")}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              activeTab === "whyCountry"
                ? "bg-blue-900 text-white"
                : "bg-white text-blue-900 border border-blue-900 hover:bg-blue-900 hover:text-white"
            }`}
          >
            {`Why ${country}`}
          </button>
        </div>

        {/* Paragraph Text */}
        <p className="text-gray-700 text-lg leading-relaxed">
          {activeTab === "introduction" ? introductionText : whyCountryText}
        </p>
      </div>

      {/* RIGHT SECTION */}
      <div className="md:w-1/2 flex justify-center items-center">
        <img
          src={imageSrc}
          alt={`Study Abroad Visual - ${country}`}
          className="rounded-lg shadow-md max-w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}
