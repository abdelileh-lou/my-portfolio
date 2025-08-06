import React from "react";
import { Github, Linkedin, Download, Mail, ArrowDown } from "lucide-react";
import profilePic from "../assets/yyy.jpg";

const Profile = () => {
  return (
    <section
      id="profile"
      className="min-h-screen flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-20 px-4 py-10 lg:py-20 relative"
    >
      {/* Profile Photo */}
      <div className="relative group">
        <div className="h-[300px] w-[300px] lg:h-[400px] lg:w-[400px] rounded-full overflow-hidden shadow-2xl transform transition-transform duration-300 group-hover:scale-105">
          <img
            src={profilePic}
            alt="Abdelileh Louhichi - Frontend Developer"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="absolute inset-0 rounded-full border-4 border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
      </div>

      {/* Text Content */}
      <div className="text-center lg:text-left max-w-lg">
        <div className="mb-6">
          <p className="text-lg lg:text-xl font-medium text-gray-600 mb-2">
            Hello, I'm
          </p>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight !mt-5">
            Abdelileh Louhichi
          </h1>
          <p className="text-xl lg:text-2xl text-blue-600 font-semibold !mt-5">
            Full Stack Developer
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start !mt-5">
          <button
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full font-semibold transition-all duration-300 hover:bg-gray-700 hover:shadow-lg transform hover:-translate-y-1 min-w-[160px]"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "../src/assets/cv.pdf";
              link.download = "cv.pdf";
              link.click();
            }}
          >
            <Download size={18} />
            Download CV
          </button>
          <button
            className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-full font-semibold transition-all duration-300 hover:bg-gray-900 hover:text-white hover:shadow-lg transform hover:-translate-y-1 min-w-[160px]"
            onClick={() => {
              const contactSection = document.getElementById("contact");
              contactSection?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <Mail size={18} />
            Contact Info
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 justify-center lg:justify-start !mt-5">
          <button
            className="p-3 bg-white rounded-full shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl hover:bg-blue-600 hover:text-white transform hover:-translate-y-1 group"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/abdelileh-louhichi-4a0b7431a/",
                "_blank"
              )
            }
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={24} className="group-hover:text-white" />
          </button>
          <button
            className="p-3 bg-white rounded-full shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl hover:bg-gray-900 hover:text-white transform hover:-translate-y-1 group"
            onClick={() =>
              window.open("https://github.com/abdelileh-lou", "_blank")
            }
            aria-label="GitHub Profile"
          >
            <Github size={24} className="group-hover:text-white" />
          </button>
        </div>

        {/* Availability */}
        <div className="mt-8 flex items-center justify-center lg:justify-start gap-2 !mt-5">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-600 font-medium">
            Available for new opportunities
          </span>
        </div>
      </div>

      {/* Arrow Down to About */}
      <ArrowDown
        className="h-8 w-8 text-gray-500 absolute right-10 bottom-50 cursor-pointer hidden lg:block"
        onClick={() => {
          const aboutSection = document.getElementById("about");
          aboutSection?.scrollIntoView({ behavior: "smooth" });
        }}
      />
    </section>
  );
};

export default Profile;
