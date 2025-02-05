import React from "react";
import SkillsSection from "./hard-skills";
import SoftSkillsTags from "./soft-skills";

const Skills: React.FC = () => {
  return (
    <section id="skills">
      <SkillsSection />
      <SoftSkillsTags />
    </section>
  );
};

export default Skills;
