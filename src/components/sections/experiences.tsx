import React from "react";
import {
  FaCalendarAlt,
  FaBuilding,
  FaTerminal,
  FaMapMarkerAlt,
  FaProjectDiagram,
} from "react-icons/fa";

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  clients: string;
  location: string;
  period: string;
  description: string[];
  tech: string[]; // Aquí es donde mostramos todo tu arsenal técnico
  current?: boolean;
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: "Ingeniera de Software Full Stack",
    company: "ARQ-IT",
    clients: "Proyecto: Banco BiceVida",
    location: "Santiago, Chile (Híbrido)",
    period: "2024 - Presente",
    current: true,
    description: [
      "Modernización de plataformas digitales financieras, integrando servicios legacy con arquitecturas cloud en AWS.",
      "Desarrollo de microservicios robustos y seguros con Java y Spring Boot.",
      "Liderazgo en la implementación de Next.js para optimizar la experiencia de usuario en portales de seguros.",
    ],
    // Agregamos AWS y OpenShift que son claves aquí
    tech: [
      "Java",
      "Spring Boot",
      "Next.js",
      "Oracle DB",
      "OpenShift",
      "AWS Cloud",
    ],
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "Kranio",
    // Agregamos 'Factoría de Datos' a la lista de clientes destacados
    clients:
      "Proyectos: Factoría de Datos, Banco Popular, Blue Express, Casino Online",
    location: "Talca, Chile (Remoto)",
    period: "Ene 2023 - May 2025",
    current: false,
    description: [
      "Factoría de Datos: Automatización y análisis de reportes financieros críticos utilizando SAS Guide y Data Integration.",
      "Banco Popular (App Móvil): Desarrollo de interfaces nativas para visualización de datos con SwiftUI.",
      "Blue Express & TalentOps: Implementación de CI/CD con GitHub Actions y Docker, además de optimización de rendimiento frontend.",
      "Casino Online: Desarrollo Full Stack con Next.js y pruebas E2E con Cypress y Jest.",
    ],
    // Stack SUPER completo combinando Frontend, Data y DevOps según tu CV
    tech: [
      "React",
      "TypeScript",
      "Next.js",
      "SAS Guide", // <- Agregado
      "Data Integration", // <- Agregado
      "SwiftUI",
      "Docker", // <- Agregado del CV
      "GitHub Actions", // <- Agregado del CV
      "Cypress", // <- Agregado del CV
      "Jest",
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-white relative">
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      ></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-mono mb-4 border border-gray-200">
            <FaTerminal className="text-custom-pink" />
            <span>$ git log --oneline --graph --all</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Experiencia <span className="text-custom-pink">Profesional</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Trayectoria multidisciplinaria: desde desarrollo Full Stack y Móvil
            hasta Ingeniería de Datos.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative border-l-2 border-gray-200 ml-4 md:ml-6 space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-8 md:pl-12 group">
              {/* NODO DE TIEMPO */}
              <div
                className={`
                absolute -left-[9px] top-0 w-5 h-5 rounded-full border-4 border-white transition-all duration-300
                ${
                  exp.current
                    ? "bg-custom-pink shadow-[0_0_0_4px_rgba(255,105,180,0.2)] scale-110"
                    : "bg-gray-400 group-hover:bg-gray-600"
                }
              `}
              ></div>

              {/* TARJETA */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* HEADER DE LA TARJETA */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-500 mb-1">
                      {exp.role}
                    </h4>

                    <div className="flex items-center gap-2 mb-2">
                      <FaBuilding className="text-custom-pink text-xl" />
                      <h3 className="text-3xl font-bold text-gray-800">
                        {exp.company}
                      </h3>
                    </div>

                    {/* CLIENTES DESTACADOS */}
                    <div className="flex items-start gap-2 text-sm font-medium text-slate-600 bg-slate-50 px-3 py-2 rounded-lg border border-slate-100 inline-block max-w-lg">
                      <FaProjectDiagram className="mt-1 text-custom-pink flex-shrink-0" />
                      <span className="leading-tight">{exp.clients}</span>
                    </div>
                  </div>

                  {/* FECHA */}
                  <div
                    className={`
                    inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap self-start mt-2 md:mt-0
                    ${
                      exp.current
                        ? "bg-pink-50 text-custom-pink border border-pink-100"
                        : "bg-gray-100 text-gray-500"
                    }
                  `}
                  >
                    <FaCalendarAlt />
                    {exp.period}
                  </div>
                </div>

                {/* UBICACIÓN */}
                <div className="flex items-center gap-1 text-xs text-gray-400 mb-6 ml-1">
                  <FaMapMarkerAlt />
                  <span>{exp.location}</span>
                </div>

                {/* DESCRIPCIÓN */}
                <ul className="space-y-3 mb-6 text-gray-600 leading-relaxed border-l-2 border-gray-100 pl-4">
                  {exp.description.map((item, index) => (
                    <li key={index} className="relative">
                      {item}
                    </li>
                  ))}
                </ul>

                {/* STACK (Ahora con Data, DevOps y Mobile) */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-50 text-slate-700 rounded-md text-xs font-bold border border-slate-200 hover:border-custom-pink hover:text-custom-pink transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
