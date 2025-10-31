"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiCss3,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiFirebase,
  SiGithub,
  SiHtml5,
} from "react-icons/si";
import { MdOutlinePlayArrow } from "react-icons/md";

interface JobDetails {
  title: string;
  company: string;
  duration: string;
  descriptionPoints: string[];
}

const creativeTechnologistData: JobDetails = {
  title: "Frontend Developer Intern",
  company: "ITI",
  duration: "July – November 2025",
  descriptionPoints: [
    "Learned and practiced modern front-end development using React.js, Next.js, and advanced JavaScript (ES6+).",
    "Built responsive and visually appealing interfaces with Tailwind CSS, focusing on usability and performance.",
    "Developed real-world projects such as a recycling platform and a home furniture e-commerce website.",
  ],
};

const ExperienceSection: React.FC = () => {
  const { title, company, duration, descriptionPoints } =
    creativeTechnologistData;

  const [isClicked, setIsClicked] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  // لما تضغط بره الصورة، تشيل التأثير
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

  const skills = [
    { icon: <SiJavascript />, color: "#F7DF1E", name: "JavaScript" },
    { icon: <SiTypescript />, color: "#3178C6", name: "TypeScript" },
    { icon: <SiReact />, color: "#61DAFB", name: "React" },
    { icon: <SiNextdotjs />, color: "#FFFFFF", name: "Next.js" },
    { icon: <SiTailwindcss />, color: "#38BDF8", name: "Tailwind" },
    { icon: <SiCss3 />, color: "#1572B6", name: "CSS3" },
    { icon: <SiHtml5 />, color: "#fd4a36", name: "HTML5" },
    { icon: <SiFirebase />, color: "#FFCA28", name: "Firebase" },
    { icon: <SiGithub />, color: "#EAEAEA", name: "GitHub" },
  ];

  // أنيميشن الظهور من فوق لتحت
  const fadeInFromTop = (delay = 0) => ({
    initial: { opacity: 0, y: -60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: "easeOut" as const},
    viewport: { once: true },
  });

  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center bg-[#11151c] px-6 sm:px-10 lg:px-20 py-20"
    >
      <div className="w-full max-w-5xl mx-auto">
        {/* العنوان */}
        <motion.div {...fadeInFromTop(0.1)} className="flex items-center mb-12">
          <span className="text-[#64ffda] font-mono text-sm md:text-base mr-3">
            02.
          </span>
          <h2 className="text-gray-200 text-2xl md:text-3xl font-bold mr-4 whitespace-nowrap">
            My Experiences
          </h2>
          <div className="flex-grow h-[1px] bg-gray-700 opacity-60"></div>
        </motion.div>

        {/* المحتوى */}
        <motion.div
          {...fadeInFromTop(0.3)}
          className="flex flex-col lg:flex-row justify-center items-start gap-12"
        >
          {/* الصورة */}
          <motion.div {...fadeInFromTop(0.4)} className="flex justify-center">
            <div
              ref={imageRef}
              className="relative w-40 h-40 group cursor-pointer"
              onClick={() => setIsClicked((prev) => !prev)}
            >
              {/* الإطار */}
              <div
                className={`absolute w-full h-full rounded border-2 border-[#eee]
                translate-x-3 translate-y-3 transition-all duration-300
                ${
                  isClicked
                    ? "translate-x-4 translate-y-4"
                    : "group-hover:translate-x-4 group-hover:translate-y-4"
                }`}
              ></div>

              {/* الصورة */}
              <div
                className={`relative w-full h-full rounded-md overflow-hidden transition-all duration-300
                ${
                  isClicked
                    ? "-translate-x-2 -translate-y-2"
                    : "group-hover:-translate-x-2 group-hover:-translate-y-2"
                }`}
              >
                <Image
                  src="/imgs/iti.png"
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

          {/* النص */}
          <motion.div {...fadeInFromTop(0.5)} className="flex-1">
            <h3 className="text-xl sm:text-2xl font-bold mb-1">
              {title} <span className="text-[#64ffda]">@ {company}</span>
            </h3>
            <p className="text-sm font-mono text-gray-400 mb-6">{duration}</p>
            <ul className="space-y-4">
              {descriptionPoints.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start text-base sm:text-lg leading-relaxed"
                >
                  <span className="text-[#64ffda] text-lg leading-none mr-3 mt-1 select-none">
                    <MdOutlinePlayArrow />
                  </span>
                  <p className="flex-1">{point}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Skills */}
        <motion.div {...fadeInFromTop(0.7)} className="mt-20 text-center">
          <div className="flex items-center justify-center mb-10">
            <h3 className="text-gray-200 text-xl md:text-2xl font-bold mr-4 whitespace-nowrap">
              Technologies I Learned
            </h3>
            <div className="flex-grow max-w-[120px] h-[1px] bg-gray-700 opacity-60"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                {...fadeInFromTop(0.9 + index * 0.1)}
                whileHover={{
                  scale: 1.15,
                  color: skill.color,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
                className="text-5xl text-gray-400 transition-colors duration-300 cursor-pointer"
                title={skill.name}
              >
                {skill.icon}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
