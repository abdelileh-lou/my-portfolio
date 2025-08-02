import React from "react";

const Footer = () => {
  const handleNavClick = (section) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="flex flex-col items-center justify-center  !py-20 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        {/* Navigation Links */}
        <nav className="text-center !mb-16">
          <ul className="flex justify-center items-center !gap-16 text-3xl">
            {["About", "Experience", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <button
                  onClick={() => handleNavClick(item)}
                  className="text-black hover:text-gray-700 transition-colors duration-200 font-medium cursor-pointer !px-4 !py-2"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-500 text-base">
            Copyright © 2025 Abdelileh Louhichi. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
