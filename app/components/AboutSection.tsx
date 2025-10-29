import React from "react";
import Image from "next/image";

interface AboutSectionProps {
  profileImageUrl?: string;
}

const AboutSection: React.FC<AboutSectionProps> = () => {
  const profileImageUrl = "/imgs/Picsart_25-06-05_04-18-47-392.jpg";

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center bg-[#11151c]  p-4 pl-20"
    >
      <div className="max-w-200 mx-auto">
        {/* Section Header */}
        <h2 className="text-3xl font-bold mb-12 flex items-center whitespace-nowrap">
          <span className="text-[#64ffda] font-mono text-sm md:text-base mr-3">01.</span>
          <span className="text-gray-200">About Me</span>
          <div className="flex-grow ml-4 border-t border-gray-700 h-0"></div>
        </h2>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Side - Text */}
          <div className="lg:col-span-2 text-ls space-y-4">
            <p className="text-gray-200">
              Hello! {`I'm`}{" "}
              <span className="text-white font-semibold">
                Abdelrahman Attia
              </span>
              , a passionate <strong>Frontend Developer</strong> based in Egypt.
              I graduated in <strong>2023</strong> and have been deeply focused
              on crafting clean, modern, and responsive web experiences ever
              since.
            </p>

            <p>
              I specialize in building elegant{" "}
              <strong>E-commerce websites</strong>, engaging{" "}
              <strong>landing pages</strong>, and personal{" "}
              <strong>portfolio sites</strong> that not only look great but also
              perform efficiently. I love turning ideas into interactive,
              visually appealing digital products using technologies like{" "}
              <strong>React</strong>, <strong>Next.js</strong>,{" "}
              <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>.
            </p>

            <p>
              I’m always eager to learn new tools, explore animation libraries,
              and apply best UI/UX practices to create delightful user
              experiences. My goal is to keep improving my craft and collaborate
              on projects that make a real impact.
            </p>

            <p>
              When I’m not coding, I enjoy exploring new design trends,
              enhancing my UI skills, and experimenting with creative layouts
              that push the limits of what’s possible on the web.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center items-start pt-4 lg:pt-0">
            <div className="relative w-64 h-64 lg:w-72 lg:h-72 group">
              {/* Background Frame */}
              <div
                className="absolute w-full h-full rounded-md border-2 border-[#eee]
               translate-x-3 translate-y-3 transition-all duration-300
               group-hover:translate-x-4 group-hover:translate-y-4"
              ></div>

              {/* Image */}
              <div
                className="relative w-full h-full rounded-md overflow-hidden
               transition-all duration-300 group-hover:-translate-x-2 group-hover:-translate-y-2"
              >
                <Image
                  src={profileImageUrl}
                  alt="Abdelrahman Attia - Frontend Developer"
                  fill
                  className="object-cover grayscale contrast-100 transition-all duration-500 group-hover:grayscale-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
