import React from "react";

const softSkills = [
  { name: "Comunicación", img: "img/comunicacion.avif" },
  { name: "Trabajo en equipo", img: "img/trabajo.avif" },
  { name: "Liderazgo", img: "img/lider.avif" },
  { name: "Adaptabilidad", img: "img/adaptabilidad.jpg" },
  { name: "Resolución de problemas", img: "img/resolucion.avif" },
  { name: "Creatividad", img: "img/creatividad.avif" },
];

const SoftSkills: React.FC = () => {
  return (
    <section id="soft-skills" className="text-center py-16 bg-custom-white">
      <h2 className="text-4xl font-bold mb-8 text-custom-pink">SOFT SKILLS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {softSkills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 border border-gray-200 shadow-md rounded-lg bg-white transition transform hover:scale-105 hover:shadow-lg"
          >
            <div className="flex items-center justify-center w-24 h-24 mb-4 rounded-full bg-gray-100">
              <img
                src={skill.img}
                alt={skill.name}
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-custom-black">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SoftSkills;
