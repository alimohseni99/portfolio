"use client";
import { useState } from "react";

export function Nav() {
  const navItems = ["About", "Projects", "Experience"];
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const onClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <nav className=" top-1/2 transform -translate-y-1/2">
      {navItems.map((item, index) => (
        <div
          key={index}
          className={`flex items-center my-5 cursor-pointer ${
            activeSection === item ? "text-white" : "text-gray-500"
          }`}
          onClick={() => onClick(item)}
        >
          <div
            className={`w-[1.1vh] h-[1.1vh] rounded-full transition-all duration-300 ease-in-out ${
              activeSection === item ? "bg-white scale-150" : "bg-gray-500"
            }`}
          ></div>
          <span
            className={`ml-[1.1vh] text-[1.6vh] transition-colors duration-300 ease-in-out ${
              activeSection === item ? "text-white" : "text-gray-500"
            }`}
          >
            {item}
          </span>
        </div>
      ))}
    </nav>
  );
}
