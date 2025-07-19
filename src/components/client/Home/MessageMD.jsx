import React from "react";
import { md_card_data } from "../../../data/md_card_data";

function MessageMD() {
  return (
    <section className="flex justify-center bg-gray-100 py-16 px-2">
      <div className="bg-blue-50 shadow-2xl rounded-2xl p-6 md:p-10 max-w-7xl w-full flex flex-col md:flex-row gap-10">
        {/* LEFT CONTAINER – Image + Name */}
        <div className="flex flex-col items-center md:w-1/2">
          <div className="w-full max-w-sm">
            <img
              src={md_card_data.photo}
              alt="Md. Sunil Khadka"
              className="w-full h-auto object-cover rounded-2xl shadow-lg"
            />
          </div>
          <p className="mt-4 text-xl md:text-2xl font-semibold text-center text-cyan-900">
            Md. Sunil Khadka
          </p>
        </div>

        {/* RIGHT CONTAINER – Title + Message */}
        <div className="flex flex-col justify-center md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
            {md_card_data.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            {md_card_data.message}
          </p>
        </div>
      </div>
    </section>
  );
}

export default MessageMD;
