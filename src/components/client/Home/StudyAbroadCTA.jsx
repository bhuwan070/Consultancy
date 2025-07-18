import React from "react";
import { Link } from "react-router-dom";

export default function StudyAbroadCTA() {
  return (
    <section className="bg-gradient-to-r from-blue-100 to-indigo-100 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Text */}
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center md:text-left">
            Planning to Study Abroad?
          </h2>

          {/* Button */}
          <Link
            to="/contact"
            className="px-6 py-3 bg-indigo-600 text-white rounded-full shadow hover:bg-indigo-700 transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
