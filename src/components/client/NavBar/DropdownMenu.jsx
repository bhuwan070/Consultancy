import React from "react";
import { Link } from "react-router-dom";

export default function DropdownMenu({ items = [] }) {
  return (
    <div className="absolute left-0 w-30 bg-white rounded-md shadow-lg z-50">
      <ul className="text-sm text-gray-700">
        {items.map((item, idx) => (
          <li key={idx}>
            <Link
              to={item.to}
              className="block px-4 py-2 rounded-md hover:bg-orange-700 hover:text-white"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
