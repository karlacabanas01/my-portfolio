import React, { useState } from "react";
import {
  FaExternalLinkAlt,
  FaTerminal,
  FaGithub,
  FaLaptopCode,
  FaImage,
} from "react-icons/fa";

const projects = [
  {
    name: "Academia Bluewater",
    description:
      "Plataforma educativa moderna desplegada en AWS con CloudFront.",
    url: "https://d2jkrv8a998jz9.cloudfront.net",
    category: "Cloud / Frontend",
    tags: ["AWS CloudFront", "React", "UX/UI"],
  },
  {
    name: "Acuarela App",
    description:
      "Aplicación SPA alojada en S3 con alto rendimiento y bajo costo.",
    url: "http://acuarela-app-karcabcas.s3-website-us-east-1.amazonaws.com",
    category: "Frontend / AWS",
    img: "img/proyectos/acuarela-app.png",
    tags: ["AWS S3", "React", "Tailwind"],
  },
  {
    name: "Diario de Gratitud",
    description: "App de bienestar minimalista con persistencia de datos.",
    url: "http://diario-gratitud-karla.s3-website-us-east-1.amazonaws.com",
    category: "Frontend / AWS",
    img: "img/proyectos/diario-app.png",
    tags: ["React", "LocalStorage", "AWS S3"],
  },
  {
    name: "Harry Potter App",
    description: "Experiencia mágica inmersiva. Consumo de API en tiempo real.",
    url: "https://my-harry-potter-app.vercel.app/",
    category: "Frontend",
    tags: ["Next.js 14", "Tailwind", "API"],
  },
  {
    name: "Listado de Pokemones",
    description: "Buscador optimizado consumiendo la PokeAPI con SSR.",
    url: "https://pokedex-react-ts-main.vercel.app",
    category: "Frontend",
    tags: ["Next.js", "SSR", "PokeAPI"],
  },
  {
    name: "Skeleton Loading",
    description: "Patrón de diseño para mejorar la UX y evitar el CLS.",
    url: "https://skeleton-ten-rho.vercel.app/",
    category: "UX / Tech",
    tags: ["React", "Performance", "Animations"],
  },
  {
    name: "Punto Café",
    description:
      "Página web original para cafetería, diseñada y desarrollada completamente por mí.",
    url: "https://page-coffe-gold.vercel.app/",
    category: "Frontend / UI",
    tags: ["React", "Original Design", "CSS"],
  },
  {
    name: "Milokira Plantas",
    description:
      "Página web creada para mi emprendimiento personal con una interfaz para administrador oculta.",
    url: "https://milokira-catalogo.vercel.app/",
    category: "Frontend / UI",
    tags: ["React", "Original Design", "CSS"],
  },
];

const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => {
  const [imageState, setImageState] = useState<"loading" | "loaded" | "error">(
    project.img ? "loaded" : "loading",
  );

  const imageUrl = project.img
    ? project.img
    : `https://api.microlink.io/?url=${encodeURIComponent(
        project.url,
      )}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=800&waitFor=3000`;

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-pink-500/10 transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
    >
      <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-red-400"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
        <div className="w-3 h-3 rounded-full bg-green-400"></div>
        <div className="ml-2 text-xs text-gray-500 font-mono truncate w-full opacity-70">
          {project.url
            .replace(/^https?:\/\//, "")
            .replace("www.", "")
            .substring(0, 25)}
          ...
        </div>
      </div>

      <div className="relative h-56 bg-white border-b border-gray-100 p-3 overflow-hidden">
        {imageState === "loading" && !project.img && (
          <div className="absolute inset-3 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
            <FaImage className="text-gray-400 text-3xl animate-bounce" />
          </div>
        )}

        {imageState === "error" && (
          <div className="w-full h-full bg-gray-50 rounded-lg flex flex-col items-center justify-center text-gray-400 border border-gray-100">
            <FaLaptopCode className="text-4xl mb-2 text-custom-pink opacity-50" />
            <span className="text-xs font-mono">
              Vista previa no disponible
            </span>
          </div>
        )}

        <img
          src={imageUrl}
          alt={`Preview de ${project.name}`}
          className={`w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 rounded-lg
            ${imageState === "loaded" ? "opacity-100" : "opacity-0 absolute"} 
          `}
          onLoad={() => setImageState("loaded")}
          onError={() => setImageState("error")}
          loading="lazy"
        />

        {imageState === "loaded" && (
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 rounded-lg m-3"></div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <span className="text-xs font-bold text-custom-pink uppercase tracking-wider bg-pink-50 px-2 py-1 rounded">
            {project.category}
          </span>
          <FaExternalLinkAlt className="text-gray-300 group-hover:text-custom-pink transition-colors" />
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-custom-pink transition-colors">
          {project.name}
        </h3>

        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-100">
          {project.tags?.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-50 relative">
      <div
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-600 text-sm font-mono mb-4 shadow-sm">
            <FaTerminal className="text-custom-pink" />
            <span>$ ls ./projects --mixed-mode</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Proyectos <span className="text-custom-pink">Destacados</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Despliegues en AWS y Vercel con vistas previas en tiempo real.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://github.com/karlacabanas01?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 text-white font-bold hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl"
          >
            <FaGithub className="text-xl" />
            Ver más código en GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
