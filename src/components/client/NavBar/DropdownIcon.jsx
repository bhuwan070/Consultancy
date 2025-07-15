import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function DropdownIcon({ open = false, className = "" }) {
  return (
    <ChevronDownIcon
      className={`w-5 h-5 transform transition-transform duration-300 ${
        open ? "rotate-180" : "rotate-0"
      } ${className}`}
    />
  );
}