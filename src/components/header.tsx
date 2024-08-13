import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-custom-black p-4 sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-4">
          <li>
            <a
              href="#about"
              className="text-white bg-transparent hover:bg-custom-pink px-4 py-3 rounded"
            >
              Sobre Mi
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="text-white bg-transparent hover:bg-custom-pink px-4 py-3 rounded"
            >
              Hard Skills
            </a>
          </li>
          <li>
            <a
              href="#soft-skills"
              className="text-white bg-transparent hover:bg-custom-pink px-4 py-3 rounded"
            >
              Soft Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-white bg-transparent hover:bg-custom-pink px-4 py-3 rounded"
            >
              Projects
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
