import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="p-4 flex justify-center space-x-4 mt-32">
      <a
        href="mailto:your.email@example.com"
        className="flex items-center bg-custom-black text-white rounded-full px-4 py-2 space-x-2 hover:bg-custom-pink"
      >
        <i className="fas fa-envelope"></i>
        <span>Contacto</span>
      </a>
      <a
        href="https://linkedin.com/in/your-profile"
        className="flex items-center bg-custom-pink text-white rounded-full px-4 py-2 space-x-2 hover:bg-custom-black"
      >
        <i className="fab fa-linkedin"></i>
        <span>LinkedIn</span>
      </a>
      <a
        href="https://github.com/your-username"
        className="flex items-center bg-custom-black text-white rounded-full px-4 py-2 space-x-2 hover:bg-custom-pink"
      >
        <i className="fab fa-github"></i>
        <span>GitHub</span>
      </a>
    </div>
  );
};

export default Contact;
