import React from "react";
import { ArrowDown } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="relative pt-20 pb-28 bg-white">
      {/* Title Section */}
      <div className="text-center !mb-16">
        <p className="text-gray-600 text-lg">Browse My Recent</p>
        <h1 className="text-5xl font-bold mt-2">Projects</h1>
      </div>

      {/* Cards Container */}
      <div className="flex flex-wrap justify-center gap-10 px-4">
        {/* Banking System Project */}
        <div className="w-[300px] min-h-[500px] flex flex-col justify-between p-6 bg-gray-50 rounded-3xl border border-gray-300 shadow-md">
          <div>
            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1588776814546-ec7e4df8bcdf?auto=format&fit=crop&w=800&q=80"
                alt="Banking System"
                className="rounded-3xl w-full h-48 object-cover"
              />
            </div>
            <h2 className="text-2xl text-center my-4 font-semibold">
              Banking System
            </h2>
          </div>
          <div>
            <div className="flex justify-center gap-4">
              <button
                className="btn font-semibold transition-all py-2 w-28 rounded-full border border-gray-300 hover:bg-gray-700 hover:text-white"
                onClick={() => window.open("https://github.com/")}
              >
                Github
              </button>
              <button
                className="btn font-semibold transition-all py-2 w-28 rounded-full border border-gray-300 hover:bg-gray-700 hover:text-white"
                onClick={() => window.open("https://demo.example.com/")}
              >
                Live Demo
              </button>
            </div>
          </div>
        </div>

        {/* E-commerce Project */}
        <div className="w-[300px] min-h-[500px] flex flex-col justify-between p-6 bg-gray-50 rounded-3xl border border-gray-300 shadow-md">
          <div>
            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1607082349250-468c8c9a23c0?auto=format&fit=crop&w=800&q=80"
                alt="E-commerce"
                className="rounded-3xl w-full h-48 object-cover"
              />
            </div>
            <h2 className="text-2xl text-center my-4 font-semibold">
              E-Commerce Platform
            </h2>
          </div>
          <div>
            <div className="flex justify-center gap-4">
              <button
                className="btn font-semibold transition-all py-2 w-28 rounded-full border border-gray-300 hover:bg-gray-700 hover:text-white"
                onClick={() => window.open("https://github.com/")}
              >
                Github
              </button>
              <button
                className="btn font-semibold transition-all py-2 w-28 rounded-full border border-gray-300 hover:bg-gray-700 hover:text-white"
                onClick={() => window.open("https://demo.example.com/")}
              >
                Live Demo
              </button>
            </div>
          </div>
        </div>

        {/* Analytics Project */}
        <div className="w-[300px] min-h-[500px] flex flex-col justify-between p-6 bg-gray-50 rounded-3xl border border-gray-300 shadow-md">
          <div>
            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1581092334496-8a1b2123c76c?auto=format&fit=crop&w=800&q=80"
                alt="Analytics Dashboard"
                className="rounded-3xl w-full h-48 object-cover"
              />
            </div>
            <h2 className="text-2xl text-center my-4 font-semibold">
              Analytics Dashboard
            </h2>
          </div>
          <div>
            <div className="flex justify-center gap-4">
              <button
                className="btn font-semibold transition-all py-2 w-28 rounded-full border border-gray-300 hover:bg-gray-700 hover:text-white"
                onClick={() => window.open("https://github.com/")}
              >
                Github
              </button>
              <button
                className="btn font-semibold transition-all py-2 w-28 rounded-full border border-gray-300 hover:bg-gray-700 hover:text-white"
                onClick={() => window.open("https://demo.example.com/")}
              >
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Arrow Icon */}
      <ArrowDown
        className="h-8 w-8 text-gray-500 absolute right-10 bottom-0 cursor-pointer hidden lg:block"
        onClick={() => (window.location.href = "#contact")}
      />
    </section>
  );
};

export default Projects;
