import { FaCode, FaServer, FaTools } from "react-icons/fa";

interface Skill {
  name: string;
  level: "Basic" | "Intermediate" | "Advanced";
  percentage: number;
}

const frontendSkills: Skill[] = [
  { name: "React", level: "Intermediate", percentage: 60 },
  { name: "Next.js", level: "Intermediate", percentage: 60 },
  { name: "Tailwind CSS", level: "Advanced", percentage: 80 },
  { name: "Styled Components", level: "Intermediate", percentage: 50 },
  { name: "HTML5", level: "Advanced", percentage: 80 },
  { name: "CSS3", level: "Advanced", percentage: 80 },
  { name: "Material UI", level: "Intermediate", percentage: 60 },
];

const backendSkills: Skill[] = [
  { name: "NodeJS", level: "Basic", percentage: 30 },
  { name: "Docker", level: "Intermediate", percentage: 50 },
  { name: "MongoDB", level: "Intermediate", percentage: 50 },
  { name: "Neo4j", level: "Basic", percentage: 30 },
  { name: "Firebase", level: "Intermediate", percentage: 40 },
  { name: "Laravel", level: "Basic", percentage: 20 },
];

const toolsSkills: Skill[] = [
  { name: "Git", level: "Advanced", percentage: 80 },
  { name: "Jest", level: "Basic", percentage: 30 },
  { name: "Cypress", level: "Basic", percentage: 30 },
  { name: "React Testing Library", level: "Basic", percentage: 30 },
  { name: "SCRUM", level: "Intermediate", percentage: 50 },
  { name: "Jira", level: "Intermediate", percentage: 50 },
  { name: "ClickUp", level: "Intermediate", percentage: 40 },
  { name: "Postman", level: "Intermediate", percentage: 60 },
];

const SkillCategory: React.FC<{
  title: string;
  skills: Skill[];
  icon: JSX.Element;
}> = ({ title, skills, icon }) => {
  return (
    <div className="p-6 bg-white border border-gray-200 shadow-md rounded-lg w-full">
      <div className="flex items-center justify-center gap-2 mb-4">
        {icon}
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>

      <div className="space-y-3">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between text-gray-800 font-medium">
              <p>{skill.name}</p>
              <p className="text-sm text-gray-600">{skill.level}</p>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full">
              <div
                className="bg-custom-pink h-2 rounded-full"
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SkillsSection: React.FC = () => {
  return (
    <section className="w-full py-10 px-2.5 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-custom-pink text-center mb-8">
        Mis Habilidades
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
        <SkillCategory
          title="Front-end"
          skills={frontendSkills}
          icon={<FaCode className="text-2xl text-blue-500" />}
        />
        <SkillCategory
          title="Back-end"
          skills={backendSkills}
          icon={<FaServer className="text-2xl text-green-500" />}
        />
        <SkillCategory
          title="Herramientas"
          skills={toolsSkills}
          icon={<FaTools className="text-2xl text-yellow-500" />}
        />
      </div>
    </section>
  );
};

export default SkillsSection;
