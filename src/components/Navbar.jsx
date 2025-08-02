import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <nav className="hidden lg:flex justify-around items-center h-[17vh]">
      <div className="text-3xl hover:cursor-default">Abdelileh Louhichi</div>
      <div>
        <ul className="flex gap-8 text-xl">
          <li>
            <a
              href="#about"
              className="text-black hover:text-gray-500 hover:underline hover:underline-offset-4 hover:decoration-gray-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="text-black hover:text-gray-500 hover:underline hover:underline-offset-4 hover:decoration-gray-300"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-black hover:text-gray-500 hover:underline hover:underline-offset-4 hover:decoration-gray-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-black hover:text-gray-500 hover:underline hover:underline-offset-4 hover:decoration-gray-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
