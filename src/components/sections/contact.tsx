import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <nav aria-label="Contact Links" className="flex justify-center gap-6">
      <a
        href="mailto:karlacabanas01@gmail.com"
        className="group flex items-center text-gray-300 hover:text-white transition-colors duration-300"
      >
        <span className="p-2 rounded-full bg-gray-800 group-hover:bg-custom-pink transition-all duration-300">
          <FaEnvelope className="text-lg" />
        </span>
        <span className="ml-2 font-medium hidden sm:block">Contacto</span>
      </a>

      <a
        href="https://www.linkedin.com/in/karla-a%C3%ADda-caba%C3%B1as-castillo-3548631bb/"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center text-gray-300 hover:text-white transition-colors duration-300"
      >
        <span className="p-2 rounded-full bg-gray-800 group-hover:bg-custom-pink transition-all duration-300">
          <FaLinkedin className="text-lg" />
        </span>
        <span className="ml-2 font-medium hidden sm:block">LinkedIn</span>
      </a>

      <a
        href="https://github.com/karlacabanas01"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center text-gray-300 hover:text-white transition-colors duration-300"
      >
        <span className="p-2 rounded-full bg-gray-800 group-hover:bg-custom-pink transition-all duration-300">
          <FaGithub className="text-lg" />
        </span>
        <span className="ml-2 font-medium hidden sm:block">GitHub</span>
      </a>
    </nav>
  );
};

export default Contact;
