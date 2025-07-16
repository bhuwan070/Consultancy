import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";

export default function NavbarLink({ to, label, dropdownItems }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <NavLink
        to={to}
        className="hover:text-orange-700 transition duration-150 ease-in-out"
      >
        {label}
      </NavLink>

      {dropdownItems && (
        <div
          className={`transition-all duration-300 ease-in-out origin-top ${
            isHovered
              ? "opacity-100 scale-100 visible"
              : "opacity-0 scale-95 invisible"
          } absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50`}
        >
          <DropdownMenu items={dropdownItems} />
        </div>
      )}
    </li>
  );
}
