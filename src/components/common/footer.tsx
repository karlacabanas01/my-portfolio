import React from "react";
import Contact from "../sections/contact";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <div className="mb-4">
          <Contact />
        </div>

        <div className="mt-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Karla. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
