import React from "react";
import TypingTitle from "../effects/typing-effect";
import { Link } from "react-scroll";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col md:flex-row justify-between items-center text-center md:text-left py-12 px-4 md:px-16 bg-custom-white"
    >
      {/* Contenedor de texto (50% del ancho en pantallas grandes) */}
      <div className="md:w-1/2 pb-16">
        <h1 className="text-4xl font-bold mb-4 text-custom-pink pt-10">Conóceme</h1>
        <TypingTitle />
        <p className="text-lg md:text-xl leading-relaxed text-custom-text-dark">
          Actualmente, cuento con <b>más de 2 años de experiencia</b> como
          desarrolladora frontend, especializándome en{" "}
          <b>React, TypeScript y Tailwind CSS</b>. Me apasiona crear
          aplicaciones web optimizadas y seguir aprendiendo. Actualmente, estoy
          profundizando en <b>Node.js</b> ⭐.
        </p>

        <Link
          to="projects"
          smooth={true}
          duration={800}
          offset={-50}
          className="cursor-pointer inline-block bg-custom-pink text-white font-bold py-2 px-4 rounded-full mt-4 hover:bg-pink-600"
        >
          Ver Proyectos
        </Link>
      </div>

      <div className="md:w-1/2 flex justify-center md:justify-end">
        <img
          src="img/profile.jpeg"
          alt="Karla Cabañas"
          className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover shadow-lg border-4 border-custom-pink"
        />
      </div>

      {/* Barra SVG al final */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 43.9999C106.667 43.9999 213.333 7.99994 320 7.99994C426.667 7.99994 533.333 43.9999 640 43.9999C746.667 43.9999 853.333 7.99994 960 7.99994C1066.67 7.99994 1173.33 43.9999 1280 43.9999C1386.67 43.9999 1440 19.0266 1440 9.01329V100H0V43.9999Z"
            className="fill-current text-gray-300"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default About;
