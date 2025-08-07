// import React from "react";
// import { Mail, Linkedin } from "lucide-react";

// const Contact = () => {
//   return (
//     <section
//       id="contact"
//       className="flex flex-col justify-center items-center h-[70vh] pt-10 px-4"
//     >
//       <p className="text-gray-600 text-center !mb-8">Get in Touch</p>
//       <h1 className="text-4xl md:text-5xl font-bold text-center !mb-12 text-black">
//         Contact Me
//       </h1>

//       <div className="flex flex-wrap justify-center items-center !gap-16 !py-12 px-8 rounded-3xl border border-gray-300 bg-gray-50 w-full max-w-4xl">
//         <div className="flex items-center gap-3 px-6 !py-6">
//           <div className="bg-gray-200 rounded-full p-3">
//             <Mail className="h-6 w-6 text-gray-700" />
//           </div>
//           <a
//             href="mailto:abdelilehlouhichi@gmail.com"
//             className="text-lg text-gray-800 hover:text-blue-600 transition-colors"
//           >
//             abdelilehlouhichi@gmail.com
//           </a>
//         </div>

//         <div className="flex items-center gap-3 px-6 !py-6">
//           <div className="bg-gray-200 rounded-full p-3">
//             <Linkedin className="h-6 w-6 text-gray-700" />
//           </div>
//           <a
//             href="https://www.linkedin.com/in/abdelileh-louhichi-4a0b7431a/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-lg text-gray-800 hover:text-blue-600 transition-colors"
//           >
//             LinkedIn
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => (
  <section id="contact" className="py-20 bg-gray-900 text-white">
    <div className="max-w-6xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Let's Work Together
        </h2>
        <p className="text-xl text-gray-300">
          Contact me for backend projects or collaborations.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-16">
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <Mail className="text-white" />
            <div>
              <p className="font-medium">Email</p>
              <p className="text-gray-300">abdelileh@example.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Phone className="text-white" />
            <div>
              <p className="font-medium">Phone</p>
              <p className="text-gray-300">+213 XXX XXX XXX</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <MapPin className="text-white" />
            <div>
              <p className="font-medium">Location</p>
              <p className="text-gray-300">Constantine, Algeria</p>
            </div>
          </div>
        </div>
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-4 rounded bg-gray-700 border border-gray-600 text-white"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 rounded bg-gray-700 border border-gray-600 text-white"
          />
          <textarea
            rows="4"
            placeholder="Message"
            className="w-full p-4 rounded bg-gray-700 border border-gray-600 text-white resize-none"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-white text-gray-900 py-4 rounded-lg font-bold hover:bg-gray-100"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default Contact;
