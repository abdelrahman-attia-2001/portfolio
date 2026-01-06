"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Logo from "../../public/logo.png";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import { VscListSelection } from "react-icons/vsc";

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
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // 🔹 تحديد القسم النشط عند التمرير
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

  // 🔹 Blur + منع التمرير عند فتح القائمة
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("menu-blur");
    } else {
      document.body.style.overflow = "";
      document.body.classList.remove("menu-blur");
    }
  }, [menuOpen]);

  // 🔹 إغلاق القائمة عند الضغط خارجها
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const navVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, staggerChildren: 0.1 },
    },
  };

  return (
    <>
      {/* ✅ Navbar */}
      <header className="fixed top-0 left-0 right-0 z-[60] backdrop-blur-2xl">
        <motion.nav
          initial="hidden"
          animate="visible"
          variants={navVariants}
          className="flex items-center justify-between h-20 px-6 sm:px-12 lg:px-20"
        >
          {/* Logo */}
          <motion.div variants={navVariants} className="flex items-center">
            <Link
              href="#top"
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
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex items-center space-x-6">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <motion.li key={link.id} variants={navVariants}>
                    <Link
                      href={link.href}
                      className={`block p-2 transition-all duration-300 ${
                        isActive
                          ? "text-[#64ffda]"
                          : "text-gray-400 hover:text-[#fff]"
                      }`}
                    >
                      <span className="text-[#fff]">{link.number}</span>{" "}
                      {link.title}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(true)}
              className="text-white text-3xl focus:outline-none"
            >
              <VscListSelection />
            </button>
          </div>
        </motion.nav>
      </header>

      {/* ✅ Fullscreen Menu + Blur + Close on outside click */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="menu-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[55] bg-[#11151c]/90 backdrop-blur-sm flex items-center justify-center md:hidden"
          >
            {/* القائمة نفسها */}
            <motion.div
              ref={menuRef}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative flex flex-col items-center justify-center space-y-8 px-6 py-10 w-3/4 sm:w-2/3 bg-[#11151c]/95 border border-white/10 rounded-2xl shadow-2xl z-[60]"
            >
              {/* Close Button */}
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-4 right-4 text-white text-3xl"
              >
                <FiX />
              </button>

              {/* Links */}
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <Link
                    key={link.id}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`text-2xl transition-all duration-300 text-center ${
                      isActive
                        ? "text-[#64ffda]"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    <span className="text-[#64ffda] block text-sm">
                      {link.number}
                    </span>{" "}
                    {link.title}
                  </Link>
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ✅ Blur Style - بدون تعطيل القائمة */}
      <style jsx global>{`
        body.menu-blur main,
        body.menu-blur section {
          filter: blur(2px);
        }
      `}</style>
    </>
  );
};

export default Nav;
