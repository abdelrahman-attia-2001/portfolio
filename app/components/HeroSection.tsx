"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#11151c] text-gray-300 px-4 pb-32 pt-32 sm:pt-40">
      <motion.div
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-4xl mx-auto text-left"
      >
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-base sm:text-lg font-mono text-[#64ffda] mb-4"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-200 mb-2 leading-tight"
        >
          Abdelrahman Attia
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-400 mb-8 leading-tight"
        >
          I build things for the web.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="max-w-xl mx-auto text-base sm:text-lg text-gray-400 leading-relaxed"
        >{`     I'm a software engineer specializing in building and designing
          modern, responsive, and user-friendly web applications. I'm passionate
          about creating digital experiences that are fast, accessible, and
          visually appealing.`}
     
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <Button href="https://drive.google.com/drive/my-drive?hl=ar" className="px-10 py-4 mt-10">
            Get My CV
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
