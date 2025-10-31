import React from "react";
import Button from "./Button";

const HeroSection: React.FC = () => {
  return (
    // استخدام Tailwind CSS لضبط الخلفية والتباعد
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#11151c] text-gray-300 p-4 pt-40">
      <div className="max-w-4xl mx-auto">
        <p className="text-lg font-mono text-[#eee] drop-shadow-[0_0_1px_#aaa] mb-4">
          Hi, my name is
        </p>

        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-200 mb-2">
          Abdelrahman Attia
        </h1>

        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-400 mb-8">
          I build things for the web.
        </h2>

        <p className="max-w-xl text-lg text-gray-400 leading-relaxed">
          {`I'm a software engineer specializing in building and designing modern, responsive, and user-friendly web applications.
I'm passionate about creating digital experiences that are fast, accessible, and visually appealing. `}
          .
        </p>

        <Button href="#contact" className="px-15 py-5 mt-8 ml-0">
          Get In My CV
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
