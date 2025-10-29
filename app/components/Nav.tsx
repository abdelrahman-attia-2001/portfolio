"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "../../public/logo.png";
import Image from "next/image";
import Button from "./Button";

interface NavLink {
  id: string;
  number: string;
  title: string;
  href: string;
}

const navLinks: NavLink[] = [
  { id: "about", number: "01.", title: "About", href: "#about" },
  { id: "experience", number: "02.", title: "Experience", href: "#experience" },
  { id: "work", number: "03.", title: "Work", href: "#work" },
  { id: "contact", number: "04.", title: "Contact", href: "#contact" },
];

const Nav: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) =>
        document.querySelector(link.href)
      );

      let currentSection = "";
      sections.forEach((section, index) => {
        if (section) {
          const top = section.getBoundingClientRect().top;
          if (top <= 150) currentSection = navLinks[index].id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-100/30 backdrop-blur-2xl ">
      <nav className="flex items-center justify-between h-20 px-6 sm:px-12 lg:px-20">
        {/* Logo */}
        <div className="flex items-center">
          <Link
            href="/"
            className="block transition-all duration-300 hover:scale-105"
          >
            <Image
              src={Logo}
              alt="Site Logo"
              width={80}
              priority
              className="transition-all duration-300"
            />
          </Link>
        </div>

        {/* Links */}
        <div className="flex items-center space-x-8">
          <ul className="flex items-center space-x-6 hidden md:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className={`block p-2 transition-all duration-300 ${
                      isActive
                        ? "text-[#64ffda] "
                        : "text-gray-400 hover:text-[#fff] "
                    }`}
                  >
                    <span className="text-[#fff]">{link.number}</span>{" "}
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Resume Button */}
          <Button
            href="#"
            className="px-6 py-4 ml-4 "
          >
            Resume
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
