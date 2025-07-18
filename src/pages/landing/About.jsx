import React from "react";
import MessageMD from "../../components/client/Home/MessageMD";

const About = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-[#8B4513] mb-6">
          Welcome to Pentagon Educational Consultancy
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
          At Pentagon Educational Consultancy, we are dedicated to guiding
          students toward their academic dreams abroad. With years of
          experience, expert counseling, and a personalized approach, we make
          the journey to global education smooth, informed, and successful. Your
          ambition is our mission — let's shape your future together.
        </p>
        <button className="bg-[#8B4513] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition duration-300">
          Get In Touch
        </button>
      </div>

      {/* Message from MD */}
      <MessageMD />
    </section>
  );
};

export default About;
