"use client";

import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";

const fadeDown = {
  hidden: { y: -50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center bg-[#11151c] text-gray-200 py-20 px-6 sm:px-8 md:px-12"
    >
      <div className="flex flex-col items-center text-center max-w-2xl w-full space-y-6">
        {/* العنوان الصغير */}
        <motion.span
          variants={fadeDown}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-[#64ffda] font-mono text-sm mb-1"
        >
          04. What’s Next?
        </motion.span>

        {/* العنوان الرئيسي */}
        <motion.h2
          variants={fadeDown}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-gray-200 text-3xl sm:text-4xl font-bold "
        >
          Get In Touch
        </motion.h2>

        {/* الفقرة */}
        <motion.p
          variants={fadeDown}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-gray-400 text-base sm:text-lg leading-relaxed"
        >
          I’m currently open to new job opportunities, especially in frontend
          development. If you think I’d be a good fit for your team or project,
          feel free to reach out — I’d love to connect!
        </motion.p>

        {/* الزر */}
        <motion.div
          variants={fadeDown}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Button
            href="https://mail.google.com/mail/?view=cm&fs=1&to=bedo8293@gmail.com"
            className="px-8 py-4 mt-4"
          >
            Say Hello
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
