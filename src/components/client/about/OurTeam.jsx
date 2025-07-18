import React from "react";

export default function OurTeam({ members }) {
  return (
    <section className="bg-gray-300 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-orange-900 mb-10">
          Our Team
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {members.map(({ id, photo, name, role, phone }) => (
            <div
              key={id}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center"
            >
              <img
                src={photo}
                alt={name}
                className="w-32 h-32 rounded-full object-cover mb-4 shadow-sm"
              />
              <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
              <p className="text-blue-900 font-medium mb-2">{role}</p>
              {phone && (
                <p className="text-gray-600 text-sm leading-relaxed">{phone}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


