import React from "react";
import SkillsSection from "./hard-skills";
import SoftSkillsTags from "./soft-skills";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="pt-10">
      <SkillsSection />
      <SoftSkillsTags />
    </section>
  );
};

export default Skills;
