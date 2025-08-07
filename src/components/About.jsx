// import React from "react";
// import { GraduationCap, BadgeCheck, Briefcase, ArrowDown } from "lucide-react";
// import aboutPic from "../assets/yyy.jpg";

// const About = () => {
//   return (
//     <section
//       id="about"
//       className="min-h-screen flex flex-col items-center justify-center px-4 py-10 lg:py-20 relative"
//     >
//       {/* Title Section */}
//       <div className="flex flex-col items-center mt-4 !mb-20">
//         <p className="mb-4 text-center text-gray-500 text-lg !mb-4">
//           Get To Know More
//         </p>
//         <h1 className="text-5xl font-bold text-center text-gray-900">
//           About Me
//         </h1>
//       </div>

//       {/* Main Content */}
//       <div className="flex flex-col lg:flex-row gap-12 mt-12 items-center justify-center">
//         {/* Profile Image */}
//         <img
//           src={aboutPic}
//           alt="Profile"
//           className="rounded-3xl h-[400px] w-[400px] object-cover shadow-xl"
//         />

//         {/* Cards + Description */}
//         <div className="flex flex-col items-center space-y-16">
//           {/* Cards */}
//           <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
//             <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-8 w-80 h-48 flex flex-col items-center justify-center text-center">
//               <div className="flex justify-center items-center mb-3">
//                 <Briefcase className="h-10 w-10 text-blue-600" />
//               </div>
//               <h3 className="text-xl font-semibold !mb-2">Experience</h3>
//               <p className="text-gray-600">
//                 3 Years Frontend <br />1 Year Backend (Spring Boot)
//               </p>
//             </div>

//             <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-8 w-80 h-48 flex flex-col items-center justify-center text-center">
//               <div className="flex justify-center items-center mb-3">
//                 <GraduationCap className="h-10 w-10 text-green-600 !mb-2" />
//               </div>
//               <h3 className="text-xl font-semibold !mb-2">Education</h3>
//               <p className="text-gray-600">
//                 Bachelor's degree in Computer Science
//               </p>
//             </div>

//             {/* <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-8 w-80 h-48 text-center flex flex-col justify-center">
//               <BadgeCheck className="h-10 w-10 mx-auto text-purple-600 mb-3" />
//               <h3 className="text-xl font-semibold mb-2">Certificates</h3>
//               <p className="text-gray-600">React, JavaScript, Git</p>
//             </div> */}
//           </div>

//           {/* Description */}
//           <p className="mt-6 text-gray-700 text-center leading-relaxed max-w-2xl !mt-10">
//             I'm a full-stack developer with 3 years of experience in frontend
//             technologies like React, HTML, CSS, and JavaScript, and 1 year of
//             hands-on experience with backend development using Spring Boot. I
//             have a strong foundation in Java, and I enjoy building responsive,
//             secure, and scalable web applications that deliver excellent user
//             experiences.
//           </p>
//         </div>
//       </div>

//       {/* Arrow Down */}
//       <ArrowDown
//         className="h-8 w-8 text-gray-500 absolute right-10 bottom-50 cursor-pointer hidden lg:block"
//         onClick={() => (window.location.href = "#experience")}
//       />
//     </section>
//   );
// };

// export default About;
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
          <div className="w-full h-96 bg-gradient-to-br from-orange-200 via-yellow-200 to-orange-300 rounded-3xl overflow-hidden flex items-center justify-center">
            <User size={80} className="text-gray-600" />
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
            {[
              "Java",
              "Spring Boot",
              "Spring Security",
              "MySQL",
              "PostgreSQL",
              "Docker",
            ].map((skill) => (
              <div
                key={skill}
                className="p-3 bg-gray-100 rounded-lg text-center font-medium text-gray-800 hover:bg-gray-200"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
