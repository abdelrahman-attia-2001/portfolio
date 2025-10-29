"use client";

import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { TbBrandGmail } from "react-icons/tb";
interface SocialLink {
  icon: React.ElementType;
  url: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  { icon: FiGithub, url: "https://github.com/yourusername", label: "GitHub" },
    {
    icon: TbBrandGmail,
    url: "https://Gmail.com/in/yourusername",
    label: "Gmail",
  },
  {
    icon: FiLinkedin,
    url: "https://linkedin.com/in/yourusername",
    label: "LinkedIn",
  },
];

const SocialSidebar: React.FC = () => {
  return (
    <div className="hidden md:block fixed bottom-0 pl-30 z-10 w-10">
      <ul className="flex flex-col items-center">
        {socialLinks.map((link) => (
          <li key={link.label} className="mb-5">
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-2 text-gray-400 hover:text-[#fff] transition-all duration-300 hover:drop-shadow-[0_0_2px_#66d1ff] transform hover:-translate-y-1"
              aria-label={link.label}
            >
              <link.icon className="w-6 h-6" />
            </a>
          </li>
        ))}
        <li>
          <div className="w-px h-24 bg-gray-400"></div>
        </li>
      </ul>
    </div>
  );
};

export default SocialSidebar;
