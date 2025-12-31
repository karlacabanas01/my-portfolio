"use client";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa"; // Importamos el ícono de WhatsApp

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Sobre mí", to: "about" },
    { name: "Habilidades", to: "skills" },
    { name: "Proyectos", to: "projects" },
    { name: "Experiencia", to: "experience" },
  ];

  const phoneNumber = "56994955949";
  const message =
    "Hola Karla, vi tu portafolio y me gustaría conversar contigo.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link
              to="inicio"
              smooth={true}
              duration={500}
              className="cursor-pointer group"
            >
              <span
                className={`text-2xl font-mono font-bold tracking-tighter transition-colors ${
                  isScrolled ? "text-white" : "text-gray-900"
                }`}
              >
                &lt;
                <span className="text-custom-pink group-hover:text-pink-500 transition-colors">
                  KarCabCas
                </span>{" "}
                /&gt;
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                className={`relative text-sm font-medium tracking-wide transition duration-300 cursor-pointer group ${
                  isScrolled
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-700 hover:text-black"
                }`}
              >
                {link.name}
                <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-custom-pink transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-5 py-2 rounded-full border text-sm font-bold transition-all duration-300 hover:scale-105 shadow-md ${
                isScrolled
                  ? "border-green-500 text-green-400 hover:bg-green-500 hover:text-white"
                  : "border-green-600 text-green-700 hover:bg-green-600 hover:text-white bg-white/80"
              }`}
            >
              <FaWhatsapp className="text-lg" />
              <span>Hablemos</span>
            </a>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none transition-colors ${
                isScrolled ? "text-white" : "text-gray-900"
              }`}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 absolute w-full left-0 top-16 shadow-2xl h-screen">
          <nav className="px-6 pt-8 pb-8 space-y-8 flex flex-col items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="text-gray-800 hover:text-custom-pink text-xl font-medium transition duration-300 cursor-pointer"
              >
                {link.name}
              </Link>
            ))}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-green-500 text-white font-bold text-lg shadow-lg hover:bg-green-600 transition-all"
            >
              <FaWhatsapp />
              Escríbeme al WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
