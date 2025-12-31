import {
  FaLaptopCode,
  FaServer,
  FaTools,
  FaTerminal,
  FaUsers,
} from "react-icons/fa";

interface Skill {
  name: string;
  level: "Básico" | "Intermedio" | "Avanzado" | "Nativo";
}

const frontendSkills: Skill[] = [
  { name: "React", level: "Avanzado" },
  { name: "Next.js", level: "Avanzado" },
  { name: "TypeScript", level: "Avanzado" },
  { name: "Tailwind CSS", level: "Avanzado" },
  { name: "HTML5 / CSS3", level: "Avanzado" },
  { name: "Storybook", level: "Intermedio" },
];

const backendSkills: Skill[] = [
  { name: "NodeJS", level: "Intermedio" },
  { name: "Java 8", level: "Intermedio" },
  { name: "WebLogic", level: "Intermedio" },
  { name: "Maven", level: "Intermedio" },
  { name: "REST APIs", level: "Avanzado" },
  { name: "Docker", level: "Intermedio" },
];

const toolsSkills: Skill[] = [
  { name: "Git & GitHub", level: "Avanzado" },
  { name: "Jira / SCRUM", level: "Avanzado" },
  { name: "Postman", level: "Avanzado" },
  { name: "Jest / RTL", level: "Intermedio" },
  { name: "Cypress", level: "Intermedio" },
  { name: "GitHub Actions", level: "Intermedio" },
];

const softSkills: Skill[] = [
  { name: "Comunicación Efectiva", level: "Nativo" },
  { name: "Trabajo en Equipo", level: "Nativo" },
  { name: "Pensamiento Crítico", level: "Nativo" },
  { name: "Resolución Problemas", level: "Nativo" },
  { name: "Adaptabilidad", level: "Nativo" },
  { name: "Gestión del Tiempo", level: "Nativo" },
];

// --- COMPONENTE DE ETIQUETA ---
const SkillTag = ({ skill }: { skill: Skill }) => {
  const isHighlight = skill.level === "Avanzado" || skill.level === "Nativo";

  return (
    <div
      className={`
      group flex items-center justify-between px-4 py-3 rounded-lg border transition-all duration-300
      ${
        isHighlight
          ? "bg-white border-gray-200 hover:border-custom-pink hover:shadow-md hover:shadow-pink-100"
          : "bg-gray-50 border-gray-100 hover:bg-white hover:border-gray-300"
      }
    `}
    >
      <span
        className={`font-semibold ${
          isHighlight
            ? "text-gray-800 group-hover:text-custom-pink"
            : "text-gray-600"
        }`}
      >
        {skill.name}
      </span>

      <span
        className={`
        text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wider
        ${
          isHighlight
            ? "bg-pink-50 text-custom-pink border border-pink-100"
            : "bg-gray-200 text-gray-600 border border-gray-300"
        }
      `}
      >
        {skill.level}
      </span>
    </div>
  );
};

const SkillCategory = ({
  title,
  subtitle,
  skills,
  icon,
}: {
  title: string;
  subtitle: string;
  skills: Skill[];
  icon: JSX.Element;
}) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl shadow-gray-100 border border-gray-100 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-500 h-full">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full -z-0 transition-colors group-hover:bg-pink-50"></div>
      <div className="relative z-10 mb-8 flex items-start justify-between">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 group-hover:text-custom-pink transition-colors">
            {title}
          </h3>
          <p className="text-sm text-gray-400 font-mono mt-1">{subtitle}</p>
        </div>
        <div className="p-3 bg-gray-50 rounded-xl text-custom-pink text-2xl group-hover:scale-110 transition-transform shadow-sm">
          {icon}
        </div>
      </div>
      <div className="relative z-10 grid grid-cols-1 gap-3">
        {skills.map((skill) => (
          <SkillTag key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
};

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="w-full py-24 px-4 bg-white relative">
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* --- CAMBIO DE TÍTULO --- */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-mono mb-4 border border-gray-200">
            <FaTerminal className="text-custom-pink" />
            <span>$ list stack --verbose</span>
          </div>
          {/* Título más profesional */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Stack <span className="text-custom-pink">Tecnológico</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Herramientas, lenguajes y metodologías que utilizo para construir
            software de calidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SkillCategory
            title="Frontend Core"
            subtitle="Ui / Ux & Architecture"
            skills={frontendSkills}
            icon={<FaLaptopCode />}
          />
          <SkillCategory
            title="Backend & Cloud"
            subtitle="Server / API / Deploy"
            skills={backendSkills}
            icon={<FaServer />}
          />
          <SkillCategory
            title="DevOps & Tools"
            subtitle="Workflow / QA / Agile"
            skills={toolsSkills}
            icon={<FaTools />}
          />
          <SkillCategory
            title="Soft Skills"
            subtitle="Leadership / Communication"
            skills={softSkills}
            icon={<FaUsers />}
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
