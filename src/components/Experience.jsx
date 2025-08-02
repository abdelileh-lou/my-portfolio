import React from "react";
import { ArrowDown, CheckCircle } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="relative py-12 !mb-60">
      <div className="flex flex-col items-center mb-8">
        <p className="text-center text-gray-500 text-lg !mb-6">Explore My</p>
        <h1 className="text-4xl font-bold text-center text-gray-900">
          Experience
        </h1>
      </div>
      {/* flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-20 px-4 py-10 lg:py-20 */}
      <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6 !px-8 !md:px-16 !lg:px-24 !py-10 !lg:py-20">
        {/* Frontend Development Card */}
        <div className="w-full lg:w-1/2 p-6 bg-white rounded-3xl border-2 border-gray-200 shadow-lg flex flex-col">
          <h2 className="text-2xl text-gray-700 font-semibold mb-6 text-center">
            Frontend Development
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow">
            <article className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-black flex-shrink-0" />
              <div>
                <h3 className="text-lg font-medium text-gray-800">HTML</h3>
                <p className="text-sm text-gray-600">Experienced</p>
              </div>
            </article>

            <article className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-black flex-shrink-0" />
              <div>
                <h3 className="text-lg font-medium text-gray-800">CSS</h3>
                <p className="text-sm text-gray-600">Experienced</p>
              </div>
            </article>

            <article className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-black flex-shrink-0" />
              <div>
                <h3 className="text-lg font-medium text-gray-800">SASS</h3>
                <p className="text-sm text-gray-600">Intermediate</p>
              </div>
            </article>

            <article className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-black flex-shrink-0" />
              <div>
                <h3 className="text-lg font-medium text-gray-800">
                  JavaScript
                </h3>
                <p className="text-sm text-gray-600">Basic</p>
              </div>
            </article>

            <article className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-black flex-shrink-0" />
              <div>
                <h3 className="text-lg font-medium text-gray-800">
                  TypeScript
                </h3>
                <p className="text-sm text-gray-600">Basic</p>
              </div>
            </article>

            <article className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-black flex-shrink-0" />
              <div>
                <h3 className="text-lg font-medium text-gray-800">
                  Material UI
                </h3>
                <p className="text-sm text-gray-600">Intermediate</p>
              </div>
            </article>
          </div>
        </div>

        {/* Backend Development Card */}
        <div className="w-full lg:w-1/2 p-6 bg-white rounded-3xl border-2 border-gray-200 shadow-lg flex flex-col">
          <h2 className="text-2xl text-gray-700 font-semibold mb-6 text-center">
            Backend Development
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow">
            <article className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-black flex-shrink-0" />
              <div>
                <h3 className="text-lg font-medium text-gray-800">
                  PostgreSQL
                </h3>
                <p className="text-sm text-gray-600">Basic</p>
              </div>
            </article>

            <article className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-black flex-shrink-0" />
              <div>
                <h3 className="text-lg font-medium text-gray-800">Node JS</h3>
                <p className="text-sm text-gray-600">Intermediate</p>
              </div>
            </article>

            <article className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-black flex-shrink-0" />
              <div>
                <h3 className="text-lg font-medium text-gray-800">
                  Express JS
                </h3>
                <p className="text-sm text-gray-600">Intermediate</p>
              </div>
            </article>

            <article className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-black flex-shrink-0" />
              <div>
                <h3 className="text-lg font-medium text-gray-800">Git</h3>
                <p className="text-sm text-gray-600">Intermediate</p>
              </div>
            </article>
          </div>
        </div>
      </div>

      <ArrowDown
        className="h-8 w-8 text-gray-500 absolute right-10 bottom-0 cursor-pointer hidden lg:block"
        onClick={() => (window.location.href = "#projects")}
      />
    </section>
  );
};

export default Experience;
