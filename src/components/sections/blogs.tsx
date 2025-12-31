import { useState } from "react";

const localBlogs = [
  {
    id: 1,
    title: "Optimización_React_Hooks",
    date: "24 Oct 2025",
    content: (
      <>
        <h3 className="text-xl font-bold mb-4">
          ¿Cuándo usar useMemo y useCallback?
        </h3>
        <p className="mb-4">
          Uno de los errores más comunes al trabajar con React es el uso
          excesivo de los hooks de optimización. No todo necesita ser
          memorizado. De hecho, usar <code>useMemo</code> en cálculos simples
          puede ser más costoso que volver a ejecutar la función.
        </p>
        <h4 className="font-bold mt-4">La Regla de Oro:</h4>
        <ul className="list-disc list-inside mb-4 ml-4">
          <li>
            Usa <b>useMemo</b> solo para cálculos computacionalmente costosos.
          </li>
          <li>
            Usa <b>useCallback</b> cuando pases funciones como props a
            componentes hijos memorizados.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 2,
    title: "Estructura_Carpetas_NextJS",
    date: "10 Nov 2025",
    content: (
      <>
        <h3 className="text-xl font-bold mb-4">
          Organizando un proyecto escalable
        </h3>
        <p className="mb-4">
          Con la llegada del <b>App Router</b> en Next.js 13+, la estructura
          cambió drásticamente. Una estructura recomendada para proyectos
          grandes:
        </p>
        <div className="bg-gray-100 p-4 rounded-md font-mono text-sm mb-4 border border-gray-300">
          src/
          <br />
          ├── app/ (Rutas)
          <br />
          ├── components/ (UI)
          <br />
          ├── lib/ (Lógica)
          <br />
          └── types/ (TS)
        </div>
      </>
    ),
  },
  {
    id: 3,
    title: "CSS_Moderno_vs_Legacy",
    date: "05 Dic 2025",
    content: (
      <>
        <h3 className="text-xl font-bold mb-4">Tailwind CSS vs CSS Modules</h3>
        <p className="mb-4">
          <b>¿Por qué Tailwind?</b> La principal ventaja no es escribir menos
          código, sino dejar de inventar nombres de clases. Sin embargo, CSS
          Modules sigue siendo excelente para animaciones complejas.
        </p>
      </>
    ),
  },
];

const MacFolderIcon = () => (
  <svg
    viewBox="0 0 100 100"
    className="w-24 h-24 drop-shadow-md transition-all duration-300 transform group-hover:scale-110 group-hover:drop-shadow-xl"
  >
    <path
      d="M10,25 L40,25 L50,15 L90,15 C95.5,15 100,19.5 100,25 L100,85 C100,90.5 95.5,95 90,95 L10,95 C4.5,95 0,90.5 0,85 L0,35 C0,29.5 4.5,25 10,25 Z"
      fill="#4B5563"
      className="transition-colors duration-300 group-hover:fill-gray-700"
    />

    <path
      d="M0,40 L100,40 L100,85 C100,90.5 95.5,95 90,95 L10,95 C4.5,95 0,90.5 0,85 Z"
      fill="url(#grayGradient)"
      opacity="0.9"
    />
    <defs>
      <linearGradient id="grayGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop
          offset="0%"
          stopColor="#9CA3AF"
          className="transition-all duration-300"
        />
        <stop
          offset="100%"
          stopColor="#1F2937"
          className="transition-all duration-300"
        />
      </linearGradient>
    </defs>
  </svg>
);

export default function BlogSection() {
  const [selectedBlog, setSelectedBlog] = useState<
    (typeof localBlogs)[0] | null
  >(null);

  return (
    <section id="blog" className="bg-gray-50 py-20 px-6 md:px-12 min-h-[600px]">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Artículos & Recursos
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
          Compartiendo aprendizajes, guías y buenas prácticas sobre desarrollo
          Full Stack.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 justify-items-center">
        {localBlogs.map((blog) => (
          <div
            key={blog.id}
            onClick={() => setSelectedBlog(blog)}
            className="group flex flex-col items-center cursor-pointer w-32"
          >
            <MacFolderIcon />
            <div className="mt-3 text-center w-full">
              <span className="text-gray-700 font-medium text-sm px-2 py-1 rounded-md group-hover:bg-custom-pink group-hover:text-white transition-colors duration-200 block truncate">
                {blog.title}
              </span>
              <span className="text-gray-400 text-xs mt-1 block">
                {blog.date}
              </span>
            </div>
          </div>
        ))}
      </div>

      {selectedBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setSelectedBlog(null)}
          ></div>
          <div className="relative bg-white w-full max-w-2xl rounded-lg shadow-2xl overflow-hidden animate-fade-in-up">
            <div className="bg-gray-100 border-b border-gray-300 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedBlog(null)}
                  className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
                ></button>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-xs font-bold text-gray-600 font-mono">
                {selectedBlog.title}.md
              </div>
              <div className="w-10"></div>
            </div>
            <div className="p-8 max-h-[70vh] overflow-y-auto text-gray-800 leading-relaxed">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {selectedBlog.title.replace(/_/g, " ")}
              </h1>
              <p className="text-sm text-gray-400 mb-6 border-b pb-4">
                Publicado el {selectedBlog.date}
              </p>
              <div className="prose prose-blue max-w-none">
                {selectedBlog.content}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
