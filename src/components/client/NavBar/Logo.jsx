// src/components/TopInfoRow.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div>
      {/* Logo */}
      <Link to="/" className="flex-shrink-0">
        <img
          src="https://thomas.edu.np/storage/2023/02/Thomas-Logo.jpg"
          alt="Logo"
          className="h-20 w-auto"
        />
      </Link>
    </div>
  );
}
