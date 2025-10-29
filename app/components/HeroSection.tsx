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
          {`I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products at `}
          <a
            href="https://www.upstatement.com"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block text-[#0060a5] font-semibold 
         after:content-[''] after:absolute after:left-0 after:bottom-0 
         after:h-[2px] after:w-0 after:bg-[#0060a5] 
         after:transition-all after:duration-500 
         hover:after:w-full"
          >
            Upstatement.
          </a>
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
