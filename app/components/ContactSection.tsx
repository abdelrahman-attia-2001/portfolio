import React from "react";
import Button from "./Button";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center bg-[#11151c]  pt-40 text-gray-200"
    >
      <div className="max-w-xl mx-auto w-full text-center ">
        <span className="text-[#64ffda] font-mono text-sm md:text-base ">
          04. What’s Next?
        </span>
        <h2 className="text-gray-200 text-2xl md:text-4xl font-bold mr-4 whitespace-nowrap mt-6 mb-6">
          Some Things I’ve Built
        </h2>
        <p className="text-gray-400 mb-4 text-lg ">
          I’m currently open to new job opportunities, especially in frontend
          development.If you think I’d be a good fit for your team or project,
          feel free to reach out — I’d love to connect!
        </p>
        <Button href="https://mail.google.com/mail/?view=cm&fs=1&to=bedo8293@gmail.com"  className="px-10 py-5 mt-20 ml-0">
          Say Hello
        </Button>


        <a href="https://github.com/abdelrahman-attia-2001/portfolio" target="_blank" className="block mt-40 mb-10 text-gray-500 hover:text-[#64ffda] ransition-all duration-300  text-sm">
          Designed & Built by Abdelrahman Attia
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
