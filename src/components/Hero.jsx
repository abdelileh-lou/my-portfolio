// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-4">
      <div className="text-center max-w-2xl">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={[
              "Crafting Scalable and Secure Backend Solutions with Java & Spring Boot",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ display: "inline-block" }}
            repeat={Infinity}
          />
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Building modern and responsive applications with clean code and strong
          security.
        </motion.p>
      </div>
    </section>
  );
}
