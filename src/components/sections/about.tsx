import React, { useState } from "react";
import TypingTitle from "../effects/typing-effect";
import { Link } from "react-scroll";
import { FaArrowRight, FaCode, FaTerminal, FaDownload } from "react-icons/fa";

const About: React.FC = () => {
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
    <section
      id="about"
      className="relative w-full py-16 md:py-24 px-6 md:px-16 bg-slate-50 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12"
    >
      <div
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      ></div>

      <div className="absolute top-10 right-10 text-9xl text-gray-200 font-mono opacity-20 rotate-12 select-none -z-10">
        {"{ }"}
      </div>

      <div className="w-full md:w-1/2 z-10 text-center md:text-left order-2 md:order-1">
        <div className="inline-flex items-center gap-2 py-2 px-4 rounded-md bg-[#1e1e1e] text-green-400 text-xs md:text-sm font-mono mb-6 shadow-lg border border-gray-700">
          <FaTerminal className="text-xs text-gray-400" />
          <span className="text-blue-400 font-bold">root@karcabcas</span>
          <span className="text-white">:</span>
          <span className="text-yellow-400">~/portfolio</span>
          <span className="text-white">$</span>
          <span className="animate-pulse">_</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-gray-800 leading-tight">
          La lógica detrás de <br className="hidden md:block" />
          <span className="text-custom-pink font-mono bg-pink-50 px-2 rounded-lg decoration-wavy underline decoration-pink-300">
            &lt;KarCabCas /&gt;
          </span>
        </h2>

        <div className="mb-6 text-xl md:text-2xl font-medium text-gray-600 h-8 md:h-auto font-mono">
          <TypingTitle />
        </div>

        <p className="text-base md:text-lg leading-relaxed text-gray-600 mb-8 max-w-2xl mx-auto md:mx-0">
          Cuento con{" "}
          <span className="text-gray-900 font-bold border-b-2 border-custom-pink/50">
            más de 3 años de experiencia
          </span>{" "}
          escribiendo código limpio y escalable.
          <br className="hidden md:block mb-3" />
          Mi stack principal es <b>React & Next.js</b>, pero actualmente diseño
          arquitecturas <b>Full Stack</b> robustas integrando{" "}
          <b>Java y WebLogic</b> para el sector bancario. ⭐
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <Link
            to="projects"
            smooth={true}
            duration={800}
            offset={-50}
            className="group relative w-full sm:w-56 inline-flex items-center justify-center bg-gray-900 text-white font-bold py-3 px-6 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-custom-pink/40 hover:-translate-y-1 cursor-pointer"
          >
            <span className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-custom-pink to-purple-500"></span>
            <span>Ver Proyectos</span>
            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300 text-custom-pink" />
          </Link>

          <a
            href="/CV-KARLA-CABANAS-2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="CV-Karla-Cabanas-FullStack.pdf"
            className="w-full sm:w-56 inline-flex items-center justify-center bg-white text-gray-700 border border-gray-300 font-bold py-3 px-6 rounded-lg hover:bg-gray-50 hover:border-custom-pink hover:text-custom-pink transition-all duration-300 shadow-sm cursor-pointer"
          >
            <FaDownload className="mr-2 text-sm" />
            <span>Descargar CV</span>
          </a>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center relative mt-4 md:mt-0 order-1 md:order-2 mb-8 md:mb-0">
        <div className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0">
          <div className="absolute inset-0 border-2 border-dashed border-gray-300 rounded-full animate-spin-slow"></div>

          <div className="absolute inset-0 bg-gradient-to-br from-custom-pink/20 to-purple-500/20 rounded-full blur-xl transform translate-x-2 translate-y-2"></div>

          {isImageLoading && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-full border-4 border-white shadow-2xl z-20"></div>
          )}

          <img
            src="img/profile.jpeg"
            alt="Karla Cabañas"
            onLoad={() => setIsImageLoading(false)}
            className={`relative w-full h-full rounded-full object-cover shadow-2xl z-10 border-4 border-white transition-opacity duration-700
            ${isImageLoading ? "opacity-0" : "opacity-100"} 
        `}
          />
          <div className="absolute -bottom-2 -left-2 md:bottom-4 md:-left-6 bg-white/95 backdrop-blur-md border border-white/50 p-3 rounded-xl shadow-xl z-20 flex items-center gap-3">
            <div className="bg-gray-900 p-2 rounded-lg text-custom-pink font-mono text-xl">
              <FaCode />
            </div>
            <div className="text-left">
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider font-mono">
                Role
              </p>
              <p className="text-sm font-bold text-gray-800 font-mono">
                Full Stack Eng.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
