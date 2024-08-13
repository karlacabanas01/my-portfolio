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
    <section id="soft-skills" className="text-center mt-36">
      <h2 className="text-3xl font-bold mb-4 text-custom-pink">SOFT SKILLS</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {softSkills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-1/4 p-4 border border-gray-300 shadow-lg rounded-lg bg-white transition transform hover:scale-105"
          >
            <div className="soft-skill">
              <img
                src={skill.img}
                alt={skill.name}
                className="w-50 h-40 mb-4 rounded-full"
              />
              <h3 className="text-xl font-bold">{skill.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SoftSkills;
