import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="flex flex-row justify-center items-center text-center md:space-x-8 py-8"
    >
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold mb-4 text-custom-pink">SOBRE MÍ</h1>
        <h2 className="text-3xl mb-4">¡Hola! Soy Karla</h2>
        <p className="text-xl mb-4">
          Mi nombre es Karla Cabañas Castillo, tengo 24 años y estoy muy
          emocionada por conseguir mi primer trabajo en una empresa. Soy una
          joven responsable, honesta, autodidacta y organizada. Actualmente vivo
          en Talca.
        </p>
      </div>
      <div className="flex justify-center md:justify-end">
        <img src="img/profile.jpeg" alt="Tu Nombre" className="w-40 h-50" />
      </div>
    </section>
  );
};

export default About;
