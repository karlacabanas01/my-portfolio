"use client";
import { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <span className="text-2xl font-bold text-custom-pink">
                karcabcas
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="text-white hover:text-pink-500 transition duration-300 cursor-pointer"
            >
              Sobre Mi
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="text-white hover:text-pink-500 transition duration-300 cursor-pointer"
            >
              Mis habilidades
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="text-white hover:text-pink-500 transition duration-300 cursor-pointer"
            >
              Proyectos
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-white hover:text-pink-500 transition duration-300 cursor-pointer"
            >
              Contacto
            </Link>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-pink-500 focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md transition-all duration-500 ease-in-out">
          <nav className="px-4 pt-2 pb-4 space-y-2">
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="block text-gray-600 hover:text-pink-500 transition duration-300 cursor-pointer"
            >
              Sobre Mi
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="block text-gray-600 hover:text-pink-500 transition duration-300 cursor-pointer"
            >
              Habilidades
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="block text-gray-600 hover:text-pink-500 transition duration-300 cursor-pointer"
            >
              Proyectos
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="block text-gray-600 hover:text-pink-500 transition duration-300 cursor-pointer"
            >
              Experiencia
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
