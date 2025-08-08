import React from "react";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Floating circle animation variants
  const floatingCircle = {
    initial: { y: 0, opacity: 0 },
    animate: {
      y: [-10, -30, -10],
      opacity: [0.3, 0.8, 0.3],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <footer className="relative py-12 bg-white border-t border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left side - Copyright */}
          <motion.p
            className="text-gray-600 mb-4 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            © 2024 <span className="font-bold">ABDELILEH LOUHICHI</span>. All
            rights reserved.
          </motion.p>

          {/* Center - Design credit */}
          <motion.div
            className="hidden md:flex items-center text-gray-500 mb-4 md:mb-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span>Site designed and coded with</span>
            <motion.span
              className="ml-1 text-gray-900 font-medium"
              whileHover={{ scale: 1.1 }}
            >
              @
            </motion.span>
          </motion.div>

          {/* Right side - Back to Top */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors group"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="mr-2 font-medium">BACK TO TOP</span>
            <motion.div
              className="p-2 bg-gray-100 rounded-full group-hover:bg-gray-200 transition-colors"
              whileHover={{ rotate: -10 }}
            >
              <ArrowUp className="w-5 h-5" />
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Animated floating circles */}
      <motion.div
        className="absolute bottom-20 left-1/4 w-2 h-2 bg-gray-300 rounded-full"
        variants={floatingCircle}
        initial="initial"
        animate="animate"
      />
      <motion.div
        className="absolute top-10 right-1/3 w-3 h-3 bg-gray-400 rounded-full"
        variants={floatingCircle}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-32 right-20 w-2 h-2 bg-gray-200 rounded-full"
        variants={floatingCircle}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.8 }}
      />
      <motion.div
        className="absolute top-16 left-20 w-1.5 h-1.5 bg-gray-300 rounded-full"
        variants={floatingCircle}
        initial="initial"
        animate="animate"
        transition={{ delay: 1.2 }}
      />
      <motion.div
        className="absolute bottom-24 left-40 w-2.5 h-2.5 bg-gray-400 rounded-full"
        variants={floatingCircle}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.3 }}
      />
    </footer>
  );
};

export default Footer;
