import React from "react";

const blogs = [
  {
    title: "Aprendiendo Frontend Parte 2: Herramientas, estilos y buenas prácticas",
    link: "https://www.kranio.io/blog/aprendiendo-front-end-parte-2-herramientas-estilos-y-buenas-practicas",
    description:
      "Descubre herramientas clave, consejos de estilos y buenas prácticas esenciales para mejorar tu desarrollo frontend.",
  },
  {
    title: "Guía básica para comenzar en Frontend (JS, React, TypeScript, Next.js)",
    link: "https://www.kranio.io/blog/inicia-tu-camino-en-el-front-end-guia-basica-para-javascript-react-typescript-y-next-js",
    description:
      "Una guía completa para quienes inician en el mundo frontend usando tecnologías modernas como React y Next.js.",
  },
  {
    title: "Errores comunes al comenzar como Frontend Developer",
    link: "https://www.kranio.io/blog/errores-comunes-al-empezar-como-front-end",
    description:
      "Evita estos errores frecuentes que muchos desarrolladores enfrentan al comenzar su carrera en frontend.",
  },
  {
    title: "Componentes reutilizables con Tailwind CSS y CSS",
    link: "https://www.kranio.io/blog/componentes-reutilizables-con-tailwind-css-y-css-comparativa-y-usos-practicos",
    description:
      "Aprende a crear componentes reutilizables y escalables usando Tailwind CSS y técnicas modernas de CSS.",
  },
  {
    title: "Tailwind: Más allá del CSS tradicional",
    link: "https://www.kranio.io/blog/tailwind-mas-alla-del-css",
    description:
      "Explora el poder de Tailwind CSS y cómo puede optimizar tu flujo de trabajo en desarrollo frontend.",
  },
  {
    title: "CSS Parte 4: Preprocesadores y frameworks",
    link: "https://www.kranio.io/blog/introduccion-a-css-parte-4-preprocesadores-y-frameworks-para-un-desarrollo-web-eficiente",
    description:
      "Conoce los preprocesadores CSS como Sass y los frameworks más utilizados para mejorar la eficiencia en tus estilos.",
  },
  {
    title: "CSS Parte 3: Animaciones para mejorar la UX",
    link: "https://www.kranio.io/blog/introduccion-a-css-parte-3-animaciones-css-para-mejorar-la-experiencia-del-usuario",
    description:
      "Implementa animaciones efectivas con CSS para ofrecer una experiencia de usuario más atractiva y fluida.",
  },
  {
    title: "CSS Parte 2: Flexbox, Grid y Media Queries",
    link: "https://www.kranio.io/blog/introduccion-a-css-parte-2-flexbox-grid-layout-y-media-queries-para-profesionales-del-diseno-web",
    description:
      "Profundiza en las técnicas de maquetación modernas con CSS para mejorar tus diseños web.",
  },
  {
    title: "CSS Parte 1: Todo lo que necesitas saber para empezar",
    link: "https://www.kranio.io/blog/introduccion-a-css-todo-lo-que-necesitas-saber-para-empezar-a-disenar",
    description:
      "Inicia tu camino en el mundo del CSS con los conceptos fundamentales que todo desarrollador debe dominar.",
  },
  {
    title: "Testing unitario en Frontend",
    link: "https://www.kranio.io/blog/testing-unitario-frontend",
    description:
      "Aprende a implementar pruebas unitarias para asegurar el correcto funcionamiento de tus componentes frontend.",
  },
  {
    title: "Introducción al Testing E2E",
    link: "https://www.kranio.io/blog/introduccion-al-testing-e2e",
    description:
      "Una guía práctica para comenzar con pruebas de extremo a extremo en tus aplicaciones frontend.",
  },
  {
    title: "Docker Parte 2: Automatiza tus contenedores",
    link: "https://www.kranio.io/blog/domina-docker-compose-parte-2-automatiza-tus-contenedores-facilmente",
    description:
      "Optimiza tu flujo de trabajo automatizando contenedores con Docker en proyectos frontend y fullstack.",
  },
  {
    title: "Guía rápida de Docker: comandos y conceptos clave",
    link: "https://www.kranio.io/blog/guia-rapida-de-docker-comandos-y-conceptos-claves",
    description:
      "Domina los comandos esenciales de Docker y comprende los conceptos base para comenzar con contenedores.",
  },
];


export default function BlogSection() {
  return (
    <section id="blog" className="bg-white py-12 px-6 md:px-12">
      <h2 className="text-3xl font-bold text-center mb-8 pt-10">📝 Blogs Técnicos</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between h-full"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-600 mb-4">{blog.description}</p>
            </div>
            <a
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium mt-auto"
            >
              Leer más
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
