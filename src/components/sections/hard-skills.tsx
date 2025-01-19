import React from "react";
import { SkillCard } from "../common/skills-card";

const frontendSkills = [
  { name: "React", level: "Intermediate", percentage: 60 },
  { name: "Next.js", level: "Intermediate", percentage: 60 },
  { name: "Tailwind CSS", level: "Advanced", percentage: 80 },
  { name: "Styled Components", level: "Intermediate", percentage: 50 },
  { name: "HTML5", level: "Advanced", percentage: 80 },
  { name: "CSS3", level: "Advanced", percentage: 80 },
  { name: "Material UI", level: "Intermediate", percentage: 60 },
];

const backendSkills = [
  { name: "NodeJS", level: "Basic", percentage: 30 },
  { name: "Docker", level: "Intermediate", percentage: 50 },
  { name: "MongoDB", level: "Intermediate", percentage: 50 },
  { name: "Neo4j", level: "Basic", percentage: 30 },
  { name: "Firebase", level: "Intermediate", percentage: 40 },
  { name: "Laravel", level: "Basic", percentage: 20 },
];

const toolsSkills = [
  { name: "Git", level: "Advanced", percentage: 80 },
  { name: "Jest", level: "Basic", percentage: 30 },
  { name: "Cypress", level: "Basic", percentage: 30 },
  { name: "React Testing Library", level: "Basic", percentage: 30 },
  { name: "SCRUM", level: "Intermediate", percentage: 50 },
  { name: "Jira", level: "Intermediate", percentage: 50 },
  { name: "ClickUp", level: "Intermediate", percentage: 40 },
  { name: "Postman", level: "Intermediate", percentage: 60 },
];

const HardSkills: React.FC = () => {
  return (
    <section id="skills" className="text-center mt-8">
      <h2 className="text-4xl font-bold mb-4 text-custom-pink">HARD SKILLS</h2>

      <h3 className="text-2xl font-semibold mb-4">Frontend</h3>
      <div className="flex justify-center items-center gap-4 flex-wrap">
        {frontendSkills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>

      <h3 className="text-2xl font-semibold mb-4 mt-8">Backend</h3>
      <div className="flex justify-center items-center gap-4 flex-wrap">
        {backendSkills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>

      <h3 className="text-2xl font-semibold mb-4 mt-8">Herramientas</h3>
      <div className="flex justify-center items-center gap-4 flex-wrap">
        {toolsSkills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default HardSkills;
