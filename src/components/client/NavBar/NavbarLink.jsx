import React from 'react'
import { NavLink } from "react-router-dom";

const NavbarLink = ({ to, label }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `block py-2 pr-4 pl-3 duration-200 ${
            isActive ? "text-orange-700" : "text-white"
          } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
        }
      >
        {label}
      </NavLink>
    </li>
  );
};

export default NavbarLink;