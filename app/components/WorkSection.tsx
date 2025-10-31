import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import Image from "next/image";

const WorkSection: React.FC = () => {
  const projects = [
    {
      title: "ITI JS Project",
      description:
        "An educational JavaScript project created during ITI training, featuring interactive mini apps and hands-on examples.",
      tech: [, "JavaScript", "HTML", "CSS", "API"],
      image: "proj(1).png",
      github: "https://github.com/abdelrahman-attia-2001/iti-js-project",
      live: "https://abdelrahman-attia-2001.github.io/iti-js-project/", // Add your live demo link if available
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
              <div className="bg-[#1a202c] p-6 rounded-md shadow-xl">
                <p className="text-gray-400 mb-4">{project.description} </p>
              </div>

              <ul
                className={`flex flex-wrap gap-4 text-sm text-gray-500 my-4 ${
                  idx % 2 === 0 ? "md:justify-end" : "md:justify-start"
                }`}
              >
                {" "}
                {project.tech.map((techItem, i) => (
                  <li key={i} className="mr-2">
                    {" "}
                    {techItem}
                  </li>
                ))}
              </ul>

              <div
                className={`flex gap-5 text-xl ${
                  idx % 2 === 0 ? "md:justify-end" : "md:justify-start"
                }`}
              >
                <a
                  target="_blank"
                  href={`${project.github}`}
                  className="hover:text-[#64ffda] transition"
                >
                  <FiGithub />
                </a>
                <a
                  target="_blank"
                  href={`${project.live}`}
                  className="hover:text-[#64ffda] transition"
                >
                  <FiExternalLink />
                </a>
              </div>
            </div>

            {/* Image */}

            <div
              className={`relative md:w-[60%] w-full rounded-lg shadow-lg ${
                idx % 2 === 0 ? "md:order-1 md:absolute left-0 top-0" : ""
              }`}
            >
              <a
                target="_blank"
                href={`${project.live}`}
                rel="noopener noreferrer"
              >
                <div className="relative w-full h-[300px] md:h-[400px]">
                  <Image
                    src={`/imgs/${project.image}`}
                    alt="Abdelrahman Attia - Frontend Developer"
                    fill
                    className="object-cover rounded-lg contrast-100 transition-all duration-500"
                  />
                </div>

                <div className="absolute inset-0 bg-[#0b1622]/50 hover:bg-transparent transition-all duration-500 rounded-lg"></div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkSection;
