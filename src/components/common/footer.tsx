import React from "react";
import Contact from "../sections/contact";
import { FaCode } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-custom-pink to-purple-600"></div>

      <div className="container mx-auto px-6 py-12 flex flex-col items-center">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-white tracking-widest uppercase">
            KarCabCas
          </h2>
          <p className="text-sm text-gray-400 mt-2 font-light">
            Soluciones Digitales & Desarrollo Full Stack
          </p>
        </div>

        <div className="mb-8 w-full flex justify-center">
          <div className="bg-gray-800/50 px-8 py-4 rounded-full backdrop-blur-sm border border-gray-700 hover:border-custom-pink transition-colors duration-300">
            <Contact />
          </div>
        </div>

        <div className="w-24 h-px bg-gray-700 mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-4xl text-sm opacity-80">
          <p className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-white font-semibold">KarCabCas</span>. Todos
            los derechos reservados.
          </p>

          <div className="flex items-center gap-2">
            <FaCode className="text-custom-pink" />
            <span>Creado con</span>
            <span className="text-white font-medium">Next.js</span>
            <span>&</span>
            <span className="text-white font-medium">Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
