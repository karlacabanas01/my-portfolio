import React from "react";
import Header from "./components/common/header";
import About from "./components/sections/about";
import HardSkills from "./components/sections/skills";
import Projects from "./components/sections/proyects";
import Footer from "./components/common/footer";
import "./styles.css";
import ExperienceTimeline from "./components/sections/experiences";
import BlogSection from "./components/sections/blogs";
const App: React.FC = () => {
  return (
    <div className="text-black">
      <Header />
      <main className="container mx-auto py-8">
        <About />

        <HardSkills />
        <Projects />

        {/* Experiencia */}
        <ExperienceTimeline />
        
        {/* Blogs que he hecho */}
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
