import React from "react";
import { User } from "lucide-react";

const About = () => (
  <section id="about" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-700 uppercase tracking-wider">
          About Me
        </h2>
      </div>
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="w-full h-130 bg-gradient-to-br from-orange-200 via-yellow-200 to-orange-300 rounded-3xl overflow-hidden flex items-center justify-center">
            <img src="../src/assets/abdelileh.jpg" alt="" />
          </div>
        </div>
        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            I am a Computer Science Student and backend developer, specializing
            in Java Spring Boot. I build robust, scalable, and secure backend
            systems.
          </p>
          <p>When not coding, I enjoy fitness, sports, and photography. 📸</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            {["Java", "Spring Boot", "Spring Security", "MySQL", "Docker"].map(
              (skill) => (
                <div
                  key={skill}
                  className="p-3 bg-gray-100 rounded-lg text-center font-medium text-gray-800 hover:bg-gray-200"
                >
                  {skill}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
