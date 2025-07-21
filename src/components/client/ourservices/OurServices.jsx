import React from "react";
import { Link } from "react-router-dom";

export default function OurServices({ data = [], title = "Our Services" }) {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-16">
          {title}
        </h2>

        {/* Services stacked vertically */}
        <div className="space-y-24">
          {data.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Image */}
              <img
                src={service.imageSrc}
                alt={service.title}
                className="w-full max-w-4xl rounded-lg shadow-md object-cover mb-6"
              />

              {/* Title */}
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 text-base leading-relaxed max-w-3xl mb-6">
                {service.description}
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
