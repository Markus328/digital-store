import React from "react";
import IconLoader from "./IconLoader.jsx";

const categories = [
  { label: "Camisetas", icon: "shirt", active: true },
  { label: "Calças", icon: "pants" },
  { label: "Bonés", icon: "hat" },
  { label: "Headphones", icon: "headphone" },
  { label: "Tênis", icon: "shoe" },
];

export default function CategoryIcons() {
  return (
    <div className="flex justify-center gap-6 py-6">
      {categories.map((cat, idx) => {
        const Icon = cat.icon;

        return (
          <div
            key={idx}
            className="flex flex-col items-center text-center group cursor-pointer"
          >
            <div className="w-20 h-20 flex items-center justify-center rounded-full shadow-md text-[#8F8F8F] group-hover:text-pink-600 transition-colors duration-300">
              <IconLoader name={Icon} className="w-8 h-8" />
            </div>
            <span className="mt-2 text-sm font-medium text-[#8F8F8F] group-hover:text-pink-600 transition-colors duration-300">
              {cat.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
