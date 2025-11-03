"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.png";

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 3000); // 3 ثواني
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 2.2 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#11151c]"
    >
      <motion.div
        initial={{ rotate: 0, opacity: 0, scale: 0.8 }}
        animate={{
          rotate: 360,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
      >
        <Image
          src={logo}
          alt="Logo"
          className="w-32 h-32 object-contain"
          priority
        />
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;
