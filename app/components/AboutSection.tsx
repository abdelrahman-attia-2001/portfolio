"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutSection: React.FC = () => {
  const profileImageUrl = "/imgs/Picsart_25-06-05_04-18-47-392.jpg";
  const [isClicked, setIsClicked] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  // ✅ لما تضغط بره الصورة تشيل التأثير
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        imageRef.current &&
        !imageRef.current.contains(event.target as Node)
      ) {
        setIsClicked(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center bg-[#11151c] text-gray-300 px-6 sm:px-10 lg:px-20 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-6xl w-full"
      >
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-2xl sm:text-3xl font-bold mb-12 flex items-center whitespace-nowrap"
        >
          <span className="text-[#64ffda] font-mono text-sm md:text-base mr-3">
            01.
          </span>
          <span className="text-gray-200">About Me</span>
          <div className="flex-grow ml-4 border-t border-gray-700"></div>
        </motion.h2>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2 text-base sm:text-lg space-y-5 leading-relaxed"
          >
            <p className="text-gray-200">
              Hello! {`I'm`}{" "}
              <span className="text-white font-semibold">
                Abdelrahman Attia
              </span>
              , a passionate <strong>Frontend Developer</strong> based in Egypt.
              I graduated in <strong>2023</strong> and have been deeply focused
              on crafting clean, modern, and responsive web experiences ever
              since.
            </p>

            <p>
              I specialize in building elegant{" "}
              <strong>E-commerce websites</strong>, engaging{" "}
              <strong>landing pages</strong>, and personal{" "}
              <strong>portfolio sites</strong> that not only look great but also
              perform efficiently. I love turning ideas into interactive,
              visually appealing digital products using technologies like{" "}
              <strong>React</strong>, <strong>Next.js</strong>,{" "}
              <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>.
            </p>

            <p>
              I’m always eager to learn new tools, explore animation libraries,
              and apply best UI/UX practices to create delightful user
              experiences. My goal is to keep improving my craft and collaborate
              on projects that make a real impact.
            </p>

            <p>
              When I’m not coding, I enjoy exploring new design trends,
              enhancing my UI skills, and experimenting with creative layouts
              that push the limits of what’s possible on the web.
            </p>
          </motion.div>

          {/* ✅ Image Section (نفس تأثير experience بالضبط) */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center items-center"
          >
            <div
              ref={imageRef}
              className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 group cursor-pointer"
              onClick={() => setIsClicked((prev) => !prev)}
            >
              {/* Frame */}
              <div
                className={`absolute w-full h-full rounded-md border-2 border-[#eee]
                translate-x-3 translate-y-3 transition-all duration-300
                ${
                  isClicked
                    ? "translate-x-4 translate-y-4"
                    : "group-hover:translate-x-4 group-hover:translate-y-4"
                }`}
              ></div>

              {/* Image */}
              <div
                className={`relative w-full h-full rounded-md overflow-hidden transition-all duration-300
                ${
                  isClicked
                    ? "-translate-x-2 -translate-y-2"
                    : "group-hover:-translate-x-2 group-hover:-translate-y-2"
                }`}
              >
                <Image
                  src={profileImageUrl}
                  alt="Abdelrahman Attia - Frontend Developer"
                  fill
                  className={`object-cover contrast-100 transition-all duration-500 
                    ${
                      isClicked
                        ? "grayscale-0"
                        : "grayscale group-hover:grayscale-0"
                    }`}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
