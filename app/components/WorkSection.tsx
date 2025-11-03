"use client";
import React, { useState } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import Image from "next/image";
import { motion } from "framer-motion";

const WorkSection: React.FC = () => {
  const projects = [
    {
      title: "Furniture-Store",
      description:
        "An educational JavaScript project created during ITI training, featuring interactive mini apps and hands-on examples.",
      tech: ["JavaScript", "HTML", "CSS", "API"],
      image: "proj(1).png",
      github: "https://github.com/abdelrahman-attia-2001/Furniture-Store",
      live: "https://abdelrahman-attia-2001.github.io/Furniture-Store/",
    },
    {
      title: "ChatBot",
      description:
        "An intelligent chatbot built with Next.js and OpenAI API, featuring real-time conversation, voice input, and smooth UI animations. Designed to provide an interactive and natural chat experience using modern web technologies.",
      tech: ["Next.js", "React", "TypeScript", "OpenAI API", "Framer Motion"],
      image: "proj(3).png",
      github: "https://github.com/abdelrahman-attia-2001/chat-bot",
      live: "https://chat-bot-2001-pts1naknm-abdelrahman-attia-2001s-projects.vercel.app/",
    },

    {
      title: "Lookscout",
      description:
        "A responsive website built using Bootstrap to showcase grid layouts, components, and UI styling skills.",
      tech: ["Bootstrap", "HTML", "CSS"],
      image: "proj(2).png",
      github: "https://github.com/abdelrahman-attia-2001/Lookscout",
      live: "https://abdelrahman-attia-2001.github.io/Lookscout/",
    },
    {
      title: "Kabab Restaurant",
      description:
        "A modern restaurant landing page for a Kabab restaurant, featuring menu sections, offers, and smooth animations.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "Kabab.png",
      github: "https://github.com/abdelrahman-attia-2001/kabab",
      live: "https://abdelrahman-attia-2001.github.io/kabab/",
    },
  ];

  // Animation variant
  const fadeDown = {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  };

  // state for showing limited projects
  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section
      id="work"
      className="flex flex-col items-center justify-center bg-[#11151c] p-4 pt-40 text-gray-200"
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          variants={fadeDown}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex items-center mb-16"
        >
          <span className="text-[#64ffda] font-mono text-sm md:text-base mr-3">
            03.
          </span>
          <h2 className="text-gray-200 text-2xl md:text-3xl font-bold mr-4 whitespace-nowrap">
            Some Things I’ve Built
          </h2>
          <div className="flex-grow h-[1px] bg-gray-700 opacity-60"></div>
        </motion.div>

        {/* Featured Projects */}
        {projects.slice(0, visibleCount).map((project, idx) => (
          <motion.div
            key={idx}
            variants={fadeDown}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="relative flex flex-col md:flex-row-reverse items-start justify-between mb-24"
          >
            {/* Description Card */}
            <div
              className={`md:w-1/2 z-10 md:mt-16 ${
                idx % 2 === 0
                  ? "md:text-right md:order-2"
                  : "md:text-left md:order-1 md:absolute left-0 top-0"
              }`}
            >
              <p className="text-[#64ffda] text-sm uppercase tracking-widest mb-2">
                Featured Project
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-100 mb-4">
                {project.title}
              </h3>
              <div className="bg-[#1a202c] p-6 rounded-md shadow-xl hidden md:block">
                <p className="text-gray-400 mb-4">{project.description}</p>
              </div>
              <ul
                className={`hidden md:flex flex-wrap gap-4 text-sm text-gray-500 my-4 ${
                  idx % 2 === 0 ? "md:justify-end" : "md:justify-start"
                }`}
              >
                {project.tech.map((techItem, i) => (
                  <li key={i}>{techItem}</li>
                ))}
              </ul>
              <div
                className={`hidden md:flex gap-5 text-xl ${
                  idx % 2 === 0 ? "md:justify-end" : "md:justify-start"
                }`}
              >
                <a
                  href={project.github}
                  target="_blank"
                  className="hover:text-[#64ffda] transition"
                >
                  <FiGithub />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  className="hover:text-[#64ffda] transition"
                >
                  <FiExternalLink />
                </a>
              </div>
            </div>

            {/* Image with overlay for mobile */}
            <motion.div
              variants={fadeDown}
              initial="hidden"
              whileInView="visible"
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: idx * 0.2 + 0.1,
              }}
              viewport={{ once: true }}
              className={`relative md:w-[60%] w-full rounded-lg shadow-lg cursor-pointer ${
                idx % 2 === 0 ? "md:order-1 md:absolute left-0 top-0" : ""
              }`}
              onClick={() => window.open(project.live, "_blank")}
            >
              <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-lg">
                <Image
                  src={`/imgs/${project.image}`}
                  alt={project.title}
                  fill
                  className="object-cover contrast-100 transition-all duration-500"
                />
                {/* Overlay for mobile */}
                <motion.div
                  initial={{ opacity: 0, y: -30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="absolute inset-0 bg-[#0b1622]/70 flex flex-col justify-center items-center text-center p-6 text-gray-300 md:hidden"
                >
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-sm mb-4">{project.description}</p>
                  <div className="flex gap-4 text-xl">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#64ffda] transition"
                    >
                      <FiGithub />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#64ffda] transition"
                    >
                      <FiExternalLink />
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        ))}

        {/* Load More Button */}
        {visibleCount < projects.length && (
          <div className="flex justify-center ">
            <button
              onClick={handleLoadMore}
              className="mt-20 px-16 py-4 inline-block text-[13px] font-mono text-neon-green
        border border-neon-green rounded-sm  leading-none no-underline
        transition-all duration-300 ease-out
        hover:shadow-[5px_5px_0_0_#eee]
        hover:-translate-x-[4px] hover:-translate-y-[4px]
        focus-visible:-translate-x-[4px] focus-visible:-translate-y-[4px]
        outline-none"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default WorkSection;
