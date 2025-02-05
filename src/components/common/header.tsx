import React from "react";
import { Link } from "react-scroll";

const Header: React.FC = () => {
  return (
    <header className="bg-custom-black p-4 sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-4">
          <li>
            <Link
              to="about"
              smooth={true}
              duration={800}
              offset={-50}
              className="cursor-pointer text-white bg-transparent hover:bg-custom-pink px-4 py-3 rounded"
            >
              Sobre Mi
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={800}
              offset={-50}
              className="cursor-pointer text-white bg-transparent hover:bg-custom-pink px-4 py-3 rounded"
            >
              Mis habilidades
            </Link>
          </li>

          <li>
            <Link
              to="projects"
              smooth={true}
              duration={800}
              offset={-50}
              className="cursor-pointer text-white bg-transparent hover:bg-custom-pink px-4 py-3 rounded"
            >
              Proyectos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
