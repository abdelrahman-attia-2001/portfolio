import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, href, className = "" }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={` inline-block text-[13px] font-mono text-neon-green
        border border-neon-green rounded-sm  leading-none no-underline
        transition-all duration-300 ease-out
        hover:shadow-[5px_5px_0_0_#eee]
        hover:-translate-x-[4px] hover:-translate-y-[4px]
        focus-visible:-translate-x-[4px] focus-visible:-translate-y-[4px]
        outline-none ${className}`}
    >
      {children}
    </a>
  );
};

export default Button;
