import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="flex flex-col-reverse md:flex-row justify-center items-center text-center md:text-left py-12 px-4 md:px-16 bg-custom-white"
    >
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold mb-4 text-custom-pink">Conóceme</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          👩‍💻 ¡Hola! Soy Karla
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-custom-text-dark">
          Desarrolladora de software con 2 años de experiencia en React,
          TypeScript y Tailwind CSS. Me apasiona crear aplicaciones web
          optimizadas y aprender continuamente. 🌟
        </p>
        <a
          href="#projects"
          className="inline-block bg-custom-pink text-white font-bold py-2 px-4 rounded-full mt-4 hover:bg-pink-600"
        >
          Ver Proyectos
        </a>
      </div>

      <div className="flex justify-center md:justify-end md:w-1/2 mb-8 md:mb-0">
        <img
          src="img/profile.jpeg"
          alt="Karla Cabañas"
          className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover shadow-lg border-4 border-custom-pink"
        />
      </div>
    </section>
  );
};

export default About;
