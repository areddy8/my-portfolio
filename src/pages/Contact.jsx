import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6">
      <motion.h1
        className="text-5xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Get in Touch
      </motion.h1>
      <motion.p
        className="text-lg text-gray-400 mt-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Feel free to reach out to me!
      </motion.p>

      {/* Contact Links */}
      <div className="mt-8 space-y-6">
        {/* LinkedIn */}
        <motion.a
          href="https://www.linkedin.com/in/akired24/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 text-blue-400 text-xl hover:text-blue-300 transition"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <FaLinkedin className="text-2xl" />
          <span>linkedin.com/in/akired24</span>
        </motion.a>

        {/* Email */}
        <motion.a
          href="mailto:areddyakhil8@gmail.com"
          className="flex items-center space-x-3 text-green-400 text-xl hover:text-green-300 transition"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <FaEnvelope className="text-2xl" />
          <span>areddyakhil8@gmail.com</span>
        </motion.a>

        {/* Phone (Click to Reveal) */}
        <motion.div
          className="flex items-center space-x-3 text-yellow-400 text-xl cursor-pointer hover:text-yellow-300 transition"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <FaPhone className="text-2xl" />
          <span>408-981-4131</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
