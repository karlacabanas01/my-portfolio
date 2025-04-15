import React, { useState } from "react";
import { FaLaptopCode, FaServer } from "react-icons/fa";
import { BiBarChartAlt2 } from "react-icons/bi";

const icons = [<FaLaptopCode />, <FaServer />, <BiBarChartAlt2 />];

const sections = [
  {
    title: "FRONT - END",
    date: "Enero 2023 - Actualidad",
    roles: [
      {
        title: "Software Engineer - Kranio",
        description:
          "Desarrollo en React, Next.js y TypeScript con enfoque en escalabilidad. Optimización de código para mejorar el rendimiento y eficiencia del equipo. Uso de Docker y bases de datos MongoDB y Neo4j.",
      },
      {
        title: "Frontend Developer - Crazy Bet",
        description:
          "Creación de front-end con React, Next.js y TypeScript. Optimización del rendimiento y estilizado con Styled Components, Tailwind y Emotion Styled.",
      },
      {
        title: "Frontend Developer - Blue Express",
        description:
          "Desarrollo de páginas web responsivas bajo design system de la compañía. Implementación de HTML5, CSS Módulos, React, Next.js y TypeScript.",
      },
    ],
  },
  {
    title: "BACK - END",
    date: "Marzo 2024 - Septiembre 2024",
    roles: [
      {
        title: "Software Engineer - TalentOps",
        description:
          "Integraciones backend-frontend para una comunicación eficiente entre servicios. Desarrollo de APIs y optimización de procesos para mejorar la interoperabilidad de sistemas.",
      },
    ],
  },
  {
    title: "DATA ANALYTICS",
    date: "2023 - Actualidad",
    roles: [
      {
        title: "Data Analyst - Banco Popular",
        description:
          "Desarrollo de reportes financieros con SAS Guide y SAS Data Integration. Optimización de procesos de análisis de datos para la toma de decisiones estratégicas.",
      },
    ],
  },
];

const ExperienceTimeline = () => {
  const [activeSection, setActiveSection] = useState(0);

  return (
    <div className="border border-slate-200 rounded-lg p-8 my-10 bg-white transition-all duration-700 ease-in-out flex flex-col items-center">
      <h2 className="text-center text-2xl font-bold text-custom-pink mb-8">
        EXPERIENCE
      </h2>

      <div className="flex justify-center items-center mb-8 w-full">
        <div className="relative w-3/5 mb-8">
          <div className="absolute top-8 w-full h-1 bg-gray-300 rounded-full"></div>
          {sections.map((_, index) => (
            <div
              key={sections[index].title}
              className="absolute flex flex-col items-center"
              style={{
                left: `${(index / (sections.length - 1)) * 100}%`,
                transform: "translateX(-50%)",
              }}
            >
              <div
                className="text-2xl cursor-pointer mb-4"
                onClick={() => setActiveSection(index)}
              >
                {icons[index]}
              </div>
              <div
                className={`w-4 h-4 rounded-full cursor-pointer border-2 border-gray-300 transition-transform duration-300 ease-in-out hover:scale-125 ${
                  activeSection === index ? "bg-pink-500" : "bg-gray-400"
                }`}
                style={{ marginTop: "-10px" }}
                onClick={() => setActiveSection(index)}
              ></div>
            </div>
          ))}
        </div>
      </div>

      {/* Card interior mejorada */}
      <div
        className={`w-11/12 sm:w-2/3 mx-auto bg-white border border-slate-100 shadow-2xl shadow-black/20 rounded-xl p-6 transition-all duration-700 ease-in-out transform overflow-hidden ${
          activeSection !== null
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        }`}
      >
        <h3 className="text-custom-pink text-xl font-semibold mb-2">
          {sections[activeSection].title}
        </h3>
        <p className="text-gray-500 italic">{sections[activeSection].date}</p>

        {sections[activeSection].roles.map((role, idx) => (
          <div className="mt-4" key={idx}>
            <h4 className="font-bold text-gray-800">{role.title}</h4>
            <p className="text-gray-600">{role.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
