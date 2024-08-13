import React from "react";
import Header from "./components/header";
import About from "./components/about";
import HardSkills from "./components/hard-skills";
import SoftSkills from "./components/soft-skills";
import Projects from "./components/proyects";
import Contact from "./components/contact";
import Footer from "./components/footer";
import "./styles.css";
const App: React.FC = () => {
  return (
    <div className="text-black">
      <Header />
      <main className="container mx-auto py-8">
        <About />
        <hr className="my-5 border-t border-gray-300 w-full" />
        <HardSkills />
        <SoftSkills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
