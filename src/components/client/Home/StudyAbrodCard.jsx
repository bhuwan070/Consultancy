import React from "react";
import { Link } from "react-router-dom";

export default function StudyAbroadCard({ title, image, description, link }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group flex flex-col">
      {/* Image with zoom on hover */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#8B4513] transition duration-200 mb-2">
            {title}
          </h3>
          <p className="text-gray-600 text-sm mb-4">{description}</p>
        </div>

        {/* Learn More Button */}
        <Link
          to={link}
          className="self-center bg-blue-700 text-white text-sm px-4 py-2 rounded hover:bg-[#8B4513] transition"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
