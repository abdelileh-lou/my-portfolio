import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-between bg-gradient-to-br from-gray-100 via-gray-50 to-white overflow-hidden px-8 lg:px-16">
      {/* Animated Background Shapes */}
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg transform rotate-12 opacity-60"
        initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
        animate={{ opacity: 0.6, scale: 1, rotate: 12 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      <motion.div
        className="absolute top-40 right-60 w-80 h-80 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg transform -rotate-6 opacity-50"
        initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
        animate={{ opacity: 0.5, scale: 1, rotate: -6 }}
        transition={{ duration: 2.5, delay: 0.3, ease: "easeOut" }}
      />

      <motion.div
        className="absolute bottom-32 right-32 w-64 h-64 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg transform rotate-45 opacity-40"
        initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
        animate={{ opacity: 0.4, scale: 1, rotate: 45 }}
        transition={{ duration: 2.2, delay: 0.6, ease: "easeOut" }}
      />

      {/* Main Content */}
      <div className="flex-1 max-w-2xl z-10">
        {/* Greeting */}
        <motion.p
          className="text-lg text-gray-600 mb-4 font-medium"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Hello! I'm Abdelileh.
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <span className="block mb-2">
            <TypeAnimation
              sequence={[
                "Building Robust and",
                700,
                "Building Robust and Secure",
                700,
                "Designing High-Performance",
                700,
                "Designing High-Performance APIs",
                700,
                "Engineering Enterprise-Grade",
                700,
                "Engineering Enterprise-Grade Backends",
                700,
                "Developing Resilient and",
                700,
                "Developing Resilient and Scalable Systems",
                700,
              ]}
              wrapper="span"
              speed={45}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
          </span>
          <span className="block text-gray-700">
            Backend Solutions with{" "}
            <span className="text-gray-900 font-extrabold">
              Java & Spring Boot
            </span>
          </span>
        </motion.h1>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          <motion.button
            className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-all duration-300 shadow-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            Let's Talk. →
          </motion.button>
        </motion.div>
      </div>

      {/* Right Side Content */}
      <motion.div
        className="hidden lg:flex flex-col items-end text-right max-w-md z-10"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        <motion.p
          className="text-lg text-gray-600 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          Building modern and responsive applications with clean code and strong
          security.
        </motion.p>

        <motion.p
          className="text-sm text-gray-500 mt-4 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          A multidisciplinary innovator leveraging computer science and
          creativity to craft transformative solutions.
        </motion.p>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-20 w-4 h-4 bg-gray-400 rounded-full"
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

      <motion.div
        className="absolute bottom-1/3 left-32 w-3 h-3 bg-gray-500 rounded-full"
        animate={{
          y: [0, -15, 0],
          opacity: [0.4, 0.9, 0.4],
        }}
        transition={{
          duration: 2.5,
          delay: 0.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Navigation Dots */}
      <motion.div
        className="absolute top-1/2 left-8 flex flex-col gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <motion.div
          className="w-2 h-2 bg-gray-900 rounded-full"
          whileHover={{ scale: 1.5 }}
        />
        <motion.div
          className="w-2 h-2 bg-gray-400 rounded-full"
          whileHover={{ scale: 1.5 }}
        />
        <motion.div
          className="w-2 h-2 bg-gray-400 rounded-full"
          whileHover={{ scale: 1.5 }}
        />
      </motion.div>

      {/* Top Navigation */}
      <motion.nav
        className="absolute top-6 right-8 flex items-center gap-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <motion.a
          href="#about"
          className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
          whileHover={{ y: -2 }}
        >
          about
        </motion.a>
        <motion.a
          href="#services"
          className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
          whileHover={{ y: -2 }}
        >
          services
        </motion.a>
        <motion.a
          href="#projects"
          className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
          whileHover={{ y: -2 }}
        >
          projects
        </motion.a>
        <motion.button
          className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition-colors duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Let's Talk.
        </motion.button>
      </motion.nav>

      {/* Brand Name */}
      <motion.div
        className="absolute top-6 left-8 text-2xl font-bold text-gray-900"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        7afed<span className="text-gray-600">*</span>
      </motion.div>
    </section>
  );
}
