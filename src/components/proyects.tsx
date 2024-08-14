import React from "react";

const projects = [
  {
    name: "Listado de Pokemones",
    description:
      "Aplicación web para listar y buscar Pokemones usando la API de PokeAPI, desarrollada con Next.js.",
    img: "img/proyectos/ListPokemon.png",
    url: "https://nextjs-pokedex-chi.vercel.app/",
  },
  {
    name: "OpenJira",
    description:
      "Sistema de gestión de tareas inspirado en Jira, desarrollado con Next.js y TypeScript para una mejor organización de proyectos.",
    img: "img/proyectos/Openjira.png",
    url: "https://next-open-jira-rho.vercel.app/",
  },
  {
    name: "Pokedex",
    description:
      "Otra implementación de una Pokedex, desarrollada en React y TypeScript, que permite visualizar información detallada de cada Pokemon.",
    img: "img/proyectos/PokemonList2.png",
    url: "https://pokedex-react-ts-rosy.vercel.app/",
  },
  {
    name: "Proyecto con CSS",
    description:
      "Página web demostrativa que exhibe el uso avanzado de CSS para crear layouts atractivos y responsivos.",
    img: "img/proyectos/ProyectoCss.png",
    url: "https://page-post-3-1e6rzc3qc-karlacabanas01s-projects.vercel.app/",
  },
  {
    name: "Skeleton",
    description:
      "Proyecto de ejemplo que muestra cómo crear y utilizar componentes Skeleton en aplicaciones React para mejorar la experiencia del usuario durante la carga de contenido.",
    img: "img/proyectos/Skeleton.png",
    url: "https://skeleton-ten-rho.vercel.app/",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="text-center mt-36">
      <h2 className="text-3xl font-bold mb-4 text-custom-pink">PROJECTS</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-1/4"
          >
            <div className="flex flex-col items-center p-4 border border-gray-300 shadow-lg rounded-lg bg-gray-200 transition transform hover:scale-105 min-h-[400px]">
              <img
                src={project.img}
                alt={project.name}
                className="w-50 h-40 mb-4 rounded-lg"
              />
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
