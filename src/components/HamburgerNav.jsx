import React, { useState } from "react";

const HamburgerNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="lg:hidden flex justify-between items-center h-[17vh] px-4">
      <div className="text-2xl hover:cursor-default">Abdelileh Louhichi</div>
      <div className="hamburger-menu relative inline-block">
        <div
          className={`hamburger-icon flex flex-col justify-between h-6 w-8 cursor-pointer ${
            isOpen ? "open" : ""
          }`}
          onClick={toggleMenu}
        >
          <span className="w-full h-0.5 bg-black transition-all"></span>
          <span className="w-full h-0.5 bg-black transition-all"></span>
          <span className="w-full h-0.5 bg-black transition-all"></span>
        </div>
        <div
          className={`menu-links absolute top-full right-0 bg-white w-fit max-h-0 overflow-hidden transition-all ${
            isOpen ? "max-h-[300px]" : ""
          }`}
        >
          <ul>
            <li>
              <a
                href="#about"
                className="block px-4 py-2 text-xl text-black"
                onClick={handleClick}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="block px-4 py-2 text-xl text-black"
                onClick={handleClick}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block px-4 py-2 text-xl text-black"
                onClick={handleClick}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block px-4 py-2 text-xl text-black"
                onClick={handleClick}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HamburgerNav;
