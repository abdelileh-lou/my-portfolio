import React from "react";
import { GraduationCap, BadgeCheck, Briefcase, ArrowDown } from "lucide-react";
import aboutPic from "../assets/yyy.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-10 lg:py-20 relative"
    >
      {/* Title Section */}
      <div className="flex flex-col items-center mt-4 !mb-20">
        <p className="mb-4 text-center text-gray-500 text-lg !mb-4">
          Get To Know More
        </p>
        <h1 className="text-5xl font-bold text-center text-gray-900">
          About Me
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-12 mt-12 items-center justify-center">
        {/* Profile Image */}
        <img
          src={aboutPic}
          alt="Profile"
          className="rounded-3xl h-[400px] w-[400px] object-cover shadow-xl"
        />

        {/* Cards + Description */}
        <div className="flex flex-col items-center space-y-16">
          {/* Cards */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
            <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-8 w-80 h-48 flex flex-col items-center justify-center text-center">
              <div className="flex justify-center items-center mb-3">
                <Briefcase className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold !mb-2">Experience</h3>
              <p className="text-gray-600">
                3 Years Frontend <br />1 Year Backend (Spring Boot)
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-8 w-80 h-48 flex flex-col items-center justify-center text-center">
              <div className="flex justify-center items-center mb-3">
                <GraduationCap className="h-10 w-10 text-green-600 !mb-2" />
              </div>
              <h3 className="text-xl font-semibold !mb-2">Education</h3>
              <p className="text-gray-600">
                Bachelor's degree in Computer Science
              </p>
            </div>

            {/* <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-8 w-80 h-48 text-center flex flex-col justify-center">
              <BadgeCheck className="h-10 w-10 mx-auto text-purple-600 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Certificates</h3>
              <p className="text-gray-600">React, JavaScript, Git</p>
            </div> */}
          </div>

          {/* Description */}
          <p className="mt-6 text-gray-700 text-center leading-relaxed max-w-2xl !mt-10">
            I'm a full-stack developer with 3 years of experience in frontend
            technologies like React, HTML, CSS, and JavaScript, and 1 year of
            hands-on experience with backend development using Spring Boot. I
            have a strong foundation in Java, and I enjoy building responsive,
            secure, and scalable web applications that deliver excellent user
            experiences.
          </p>
        </div>
      </div>

      {/* Arrow Down */}
      <ArrowDown
        className="h-8 w-8 text-gray-500 absolute right-10 bottom-50 cursor-pointer hidden lg:block"
        onClick={() => (window.location.href = "#experience")}
      />
    </section>
  );
};

export default About;
