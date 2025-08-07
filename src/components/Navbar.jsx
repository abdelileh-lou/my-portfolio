// import { Link } from "react-router-dom";
// import React from "react";

// const Navbar = () => {
//   return (
//     <nav className="hidden lg:flex justify-around items-center h-[17vh]">
//       <div className="text-3xl hover:cursor-default">Abdelileh Louhichi</div>
//       <div>
//         <ul className="flex gap-8 text-xl">
//           <li>
//             <a
//               href="#about"
//               className="text-black hover:text-gray-500 hover:underline hover:underline-offset-4 hover:decoration-gray-300"
//             >
//               About
//             </a>
//           </li>
//           <li>
//             <a
//               href="#experience"
//               className="text-black hover:text-gray-500 hover:underline hover:underline-offset-4 hover:decoration-gray-300"
//             >
//               Experience
//             </a>
//           </li>
//           <li>
//             <a
//               href="#projects"
//               className="text-black hover:text-gray-500 hover:underline hover:underline-offset-4 hover:decoration-gray-300"
//             >
//               Projects
//             </a>
//           </li>
//           <li>
//             <a
//               href="#contact"
//               className="text-black hover:text-gray-500 hover:underline hover:underline-offset-4 hover:decoration-gray-300"
//             >
//               Contact
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = ({ scrollToSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "projects", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Let's Talk" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-stone-100/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="font-bold text-2xl text-gray-900 italic">
            Abdelileh°
          </div>

          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors duration-200 hover:text-gray-600 text-lg ${
                  activeSection === item.id
                    ? "text-gray-900 font-medium"
                    : "text-gray-700"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-gray-900"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left py-3 px-4 rounded-lg ${
                  activeSection === item.id
                    ? "text-gray-900 font-medium bg-gray-200"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
