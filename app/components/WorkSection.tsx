"use client";
import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import Image from "next/image";
import { motion } from "framer-motion";

const WorkSection: React.FC = () => {
  const projects = [
    {
      title: "ITI JS Project",
      description:
        "An educational JavaScript project created during ITI training, featuring interactive mini apps and hands-on examples.",
      tech: ["JavaScript", "HTML", "CSS", "API"],
      image: "proj(1).png",
      github: "https://github.com/abdelrahman-attia-2001/iti-js-project",
      live: "https://abdelrahman-attia-2001.github.io/iti-js-project/",
    },
    {
      title: "Bootstrap Project",
      description:
        "A responsive website built using Bootstrap to showcase grid layouts, components, and UI styling skills.",
      tech: ["Bootstrap", "HTML", "CSS"],
      image: "proj(2).png",
      github: "https://github.com/abdelrahman-attia-2001/bootstrab",
      live: "https://abdelrahman-attia-2001.github.io/bootstrab/",
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

  return (
    <section
      id="work"
      className="flex flex-col items-center justify-center bg-[#11151c] p-4 pt-40 text-gray-200"
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex items-center mb-16">
          <span className="text-[#64ffda] font-mono text-sm md:text-base mr-3">
            03.
          </span>
          <h2 className="text-gray-200 text-2xl md:text-3xl font-bold mr-4 whitespace-nowrap">
            Some Things I’ve Built
          </h2>
          <div className="flex-grow h-[1px] bg-gray-700 opacity-60"></div>
        </div>

        {/* Featured Projects */}
        {projects.map((project, idx) => (
          <div
            key={idx}
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
                  <li key={i} className="mr-2">
                    {techItem}
                  </li>
                ))}
              </ul>

              <div
                className={`hidden md:flex gap-5 text-xl ${
                  idx % 2 === 0 ? "md:justify-end" : "md:justify-start"
                }`}
              >
                <a
                  target="_blank"
                  href={project.github}
                  className="hover:text-[#64ffda] transition"
                >
                  <FiGithub />
                </a>
                <a
                  target="_blank"
                  href={project.live}
                  className="hover:text-[#64ffda] transition"
                >
                  <FiExternalLink />
                </a>
              </div>
            </div>

            {/* Image (clickable div instead of <a>) */}
            <div
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
                  transition={{
                    duration: 0.6,
                    ease: "easeOut" as const,
                  }}
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkSection;
