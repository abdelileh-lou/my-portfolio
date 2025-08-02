import React from "react";
import { Mail, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center h-[70vh] pt-10 px-4"
    >
      <p className="text-gray-600 text-center !mb-8">Get in Touch</p>
      <h1 className="text-4xl md:text-5xl font-bold text-center !mb-12 text-black">
        Contact Me
      </h1>

      <div className="flex flex-wrap justify-center items-center !gap-16 !py-12 px-8 rounded-3xl border border-gray-300 bg-gray-50 w-full max-w-4xl">
        <div className="flex items-center gap-3 px-6 !py-6">
          <div className="bg-gray-200 rounded-full p-3">
            <Mail className="h-6 w-6 text-gray-700" />
          </div>
          <a
            href="mailto:example@gmail.com"
            className="text-lg text-gray-800 hover:text-blue-600 transition-colors"
          >
            Example@gmail.com
          </a>
        </div>

        <div className="flex items-center gap-3 px-6 !py-6">
          <div className="bg-gray-200 rounded-full p-3">
            <Linkedin className="h-6 w-6 text-gray-700" />
          </div>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-gray-800 hover:text-blue-600 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
