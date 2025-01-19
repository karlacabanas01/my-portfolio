import React from "react";

const Contact: React.FC = () => {
  return (
    <nav
      aria-label="Contact Links"
      className="p-4 flex justify-center space-x-4 mt-32"
    >
      <a
        href="mailto:karlacabanas01@gmail.com"
        className="flex items-center bg-custom-black text-white rounded-full px-4 py-2 space-x-2 hover:bg-custom-pink"
      >
        <i className="fas fa-envelope" aria-hidden="true"></i>
        <span>Contacto</span>
      </a>
      <a
        href="https://www.linkedin.com/in/karla-a%C3%ADda-caba%C3%B1as-castillo-3548631bb/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center bg-custom-pink text-white rounded-full px-4 py-2 space-x-2 hover:bg-custom-black"
      >
        <i className="fab fa-linkedin" aria-hidden="true"></i>
        <span>LinkedIn</span>
      </a>
      <a
        href="https://github.com/karlacabanas01"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center bg-custom-black text-white rounded-full px-4 py-2 space-x-2 hover:bg-custom-pink"
      >
        <i className="fab fa-github" aria-hidden="true"></i>
        <span>GitHub</span>
      </a>
    </nav>
  );
};

export default Contact;
