import React from "react";
import Header from "./components/common/header";
import About from "./components/sections/about";
import HardSkills from "./components/sections/skills";
import SoftSkills from "./components/sections/soft-skills";
import Projects from "./components/sections/proyects";
import Contact from "./components/sections/contact";
import Footer from "./components/sections/footer";
import "./styles.css";
const App: React.FC = () => {
  return (
    <div className="text-black">
      <Header />
      <main className="container mx-auto py-8">
        <div>
          <About />
        </div>

        <HardSkills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
