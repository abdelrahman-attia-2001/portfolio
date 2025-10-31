"use client";

import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { TbBrandGmail } from "react-icons/tb";
import { motion } from "framer-motion";

interface SocialLink {
  icon: React.ElementType;
  url: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  {
    icon: FiGithub,
    url: "https://github.com/abdelrahman-attia-2001",
    label: "GitHub",
  },
  {
    icon: TbBrandGmail,
    url: "https://mail.google.com/mail/?view=cm&fs=1&to=bedo8293@gmail.com",
    label: "Gmail",
  },
  {
    icon: FiLinkedin,
    url: "https://www.linkedin.com/in/--abdo22?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    label: "LinkedIn",
  },
];

const SocialSidebar: React.FC = () => {
  return (
    <>
      {/* ===== Desktop sidebar ===== */}
      <div className="hidden lg:block fixed bottom-0 pl-30 z-10 w-10">
        <ul className="flex flex-col items-center">
          {socialLinks.map((link, index) => (
            <motion.li
              key={link.label}
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-5"
            >
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-2 text-gray-400 hover:text-white transition-all duration-300 hover:drop-shadow-[0_0_2px_#66d1ff] transform hover:-translate-y-1"
                aria-label={link.label}
              >
                <link.icon className="w-6 h-6" />
              </a>
            </motion.li>
          ))}
          <li>
            <div className="w-px h-24 bg-gray-400"></div>
          </li>
        </ul>
      </div>

      {/* ===== Mobile & Tablet (bottom bar) ===== */}
      <div className="lg:hidden w-full flex justify-center gap-8 py-4 pt-10 bg-[#11151c] backdrop-blur-sm z-20">
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-all duration-300 hover:drop-shadow-[0_0_2px_#66d1ff] transform hover:-translate-y-1"
            aria-label={link.label}
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <link.icon className="w-6 h-6" />
          </motion.a>
        ))}
      </div>
    </>
  );
};

export default SocialSidebar;
