import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUp } from "lucide-react";

const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-br from-gray-100 via-gray-50 to-white overflow-hidden px-8 lg:px-16"
    >
      {/* Animated Background Shapes - Matching Hero */}
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg transform rotate-12 opacity-60"
        initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
        animate={{ opacity: 0.6, scale: 1, rotate: 12 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      <motion.div
        className="absolute bottom-40 right-60 w-80 h-80 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg transform -rotate-6 opacity-50"
        initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
        animate={{ opacity: 0.5, scale: 1, rotate: -6 }}
        transition={{ duration: 2.5, delay: 0.3, ease: "easeOut" }}
      />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title & Sentence */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Have an awesome idea?
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Let's bring it to life.
          </motion.p>
          <motion.p
            className="mt-4 text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I am currently available for freelance work. I am accepting new
            projects and ideas.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.form
            className="bg-white p-8 rounded-2xl shadow-sm space-y-5 border border-gray-200"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full p-4 bg-transparent border-b border-gray-300 focus:border-gray-900 outline-none transition"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full p-4 bg-transparent border-b border-gray-300 focus:border-gray-900 outline-none transition"
                />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <textarea
                rows="4"
                placeholder="Your message"
                className="w-full p-4 bg-transparent border-b border-gray-300 focus:border-gray-900 outline-none transition resize-none"
              ></textarea>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              <button
                type="submit"
                className="mt-6 px-8 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors font-medium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </button>
            </motion.div>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <h3 className="text-xl font-semibold text-gray-900">
                Contact Details
              </h3>
              <div className="flex items-center space-x-4 bg-white p-5 rounded-2xl border border-gray-200">
                <motion.div
                  className="p-3 rounded-full bg-gray-100 text-gray-900"
                  whileHover={{ rotate: 10 }}
                >
                  <Mail size={26} />
                </motion.div>
                <div>
                  <p className="text-gray-600 mb-2">
                    abdelilehlouhichi@gmail.com
                  </p>
                  <p className="text-gray-600">
                    abdelileh.louhichi@univ-constantine2.dz
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Digital Spaces */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <h3 className="text-xl font-semibold text-gray-900">
                My Digital Spaces
              </h3>
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com/abdelileh-lou"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition duration-300 text-gray-900"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github size={22} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/abdelileh-louhichi-4a0b7431a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition duration-300 text-gray-900"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin size={22} />
                </motion.a>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <h3 className="text-xl font-semibold text-gray-900">Location</h3>
              <p className="text-gray-600">Constantine, Algeria</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements - Matching Hero */}
      <motion.div
        className="absolute top-1/4 right-20 w-4 h-4 bg-gray-400 rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
};

export default Contact;
