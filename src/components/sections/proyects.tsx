import React from "react";
const projects = [
  {
    name: "Listado de Pokemones",
    description:
      "Aplicación web desarrollada con Next.js que permite listar, buscar y filtrar Pokemones utilizando la API de PokeAPI. Diseñada con un enfoque en velocidad y responsividad.",
    img: "img/proyectos/ListPokemon.png",
    url: "https://nextjs-pokedex-chi.vercel.app/",
    category: "Frontend",
  },
  {
    name: "OpenJira",
    description:
      "Sistema de gestión de tareas inspirado en Jira, creado con Next.js y TypeScript. Permite organizar y priorizar proyectos mediante un tablero interactivo y funcional.",
    img: "img/proyectos/Openjira.png",
    url: "https://next-open-jira-rho.vercel.app/",
    category: "Fullstack",
  },
  {
    name: "Pokedex",
    description:
      "Proyecto en React y TypeScript para explorar y consultar información detallada de Pokemones. Implementa una interfaz interactiva y responsiva con soporte para API.",
    img: "img/proyectos/PokemonList2.png",
    url: "https://pokedex-react-ts-rosy.vercel.app/",
    category: "Frontend",
  },
  {
    name: "Proyecto con CSS",
    description:
      "Página web diseñada exclusivamente con CSS para demostrar técnicas avanzadas de diseño y responsividad. Ideal para aprender sobre la estructura y maquetación visual.",
    img: "img/proyectos/ProyectoCss.png",
    url: "https://page-post-3-1e6rzc3qc-karlacabanas01s-projects.vercel.app/",
    category: "Frontend",
  },
  {
    name: "Skeleton",
    description:
      "Ejemplo práctico de implementación de componentes Skeleton en React. Mejora la experiencia del usuario durante la carga de contenido con animaciones fluidas.",
    img: "img/proyectos/Skeleton.png",
    url: "https://skeleton-ten-rho.vercel.app/",
    category: "Frontend",
  },
  {
    name: "Harry Potter App",
    description:
      "Bienvenido a My Harry Potter App, una aplicación web interactiva inspirada en el universo de Harry Potter. Este proyecto ha sido desarrollado con Next.js 14, React 18, TypeScript y Tailwind CSS, ofreciendo una experiencia mágica y moderna para los fanáticos de la saga.",
    img: "img/proyectos/harry-potter.png",
    url: "https://my-harry-potter-app.vercel.app/",
    category: "Frontend",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="text-center py-16 bg-custom-white">
      <h2 className="text-4xl font-bold mb-8 text-custom-pink">PROYECTOS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="flex flex-col items-center p-4 border border-gray-300 shadow-lg rounded-lg bg-white transition transform hover:scale-105 hover:shadow-lg h-full">
              <div className="w-full aspect-square mb-4 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-full object-cover border-none"
                  style={{ borderRadius: "0" }}
                />
              </div>
              <span className="text-sm font-semibold text-custom-pink uppercase mb-2">
                {project.category}
              </span>
              <h3 className="text-xl font-bold mb-2">{project.name}</h3>
              <p className="text-base text-gray-700 text-center">
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
