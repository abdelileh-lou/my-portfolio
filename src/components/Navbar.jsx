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
    { id: "about", label: "about" },
    { id: "experience", label: "services" },
    { id: "projects", label: "projects" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-50/95 backdrop-blur-md border-b border-gray-100/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Brand Logo */}
          <div className="font-bold text-xl text-gray-900">
            Abdelileh<span className="text-gray-600">*</span>
          </div>

          {/* Center Navigation Dot */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
            <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-all duration-300 hover:text-gray-900 text-sm font-medium ${
                  activeSection === item.id ? "text-gray-900" : "text-gray-600"
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Let's Talk Button */}
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Let's Talk.
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200/50">
            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left py-3 px-4 rounded-lg transition-all duration-200 text-sm ${
                    activeSection === item.id
                      ? "text-gray-900 font-medium bg-gray-100"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}

              {/* Mobile Let's Talk Button */}
              <button
                onClick={() => {
                  scrollToSection("contact");
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left py-3 px-4 mt-4 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors duration-200"
              >
                Let's Talk.
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
