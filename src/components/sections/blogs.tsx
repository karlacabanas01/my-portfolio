import React from "react";

const blogs = [
  {
    title: "Introducción al Testing E2E",
    link: "https://www.kranio.io/blog/introduccion-al-testing-e2e",
    description:
      "Una guía práctica para comenzar con pruebas de extremo a extremo en tus aplicaciones frontend.",
  },
  {
    title: "CSS Parte 2: Flexbox, Grid y Media Queries",
    link: "https://www.kranio.io/blog/introduccion-a-css-parte-2-flexbox-grid-layout-y-media-queries-para-profesionales-del-diseno-web",
    description:
      "Profundiza en las técnicas de maquetación modernas con CSS para mejorar tus diseños web.",
  },
  {
    title: "Tailwind: Más allá del CSS tradicional",
    link: "https://www.kranio.io/blog/tailwind-mas-alla-del-css",
    description:
      "Explora el poder de Tailwind CSS y cómo puede optimizar tu flujo de trabajo en desarrollo frontend.",
  },
];

export default function BlogSection() {
  return (
    <section className="bg-white py-12 px-6 md:px-12">
      <h2 className="text-3xl font-bold text-center mb-8">📝 Blogs Técnicos</h2>
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
