import {
  FaComments,
  FaLightbulb,
  FaUsers,
  FaClock,
  FaTasks,
  FaBrain,
} from "react-icons/fa";

const softSkills = [
  {
    name: "Comunicación",
    icon: <FaComments className="text-blue-500 text-2xl" />,
  },
  {
    name: "Creatividad",
    icon: <FaLightbulb className="text-yellow-500 text-2xl" />,
  },
  {
    name: "Trabajo en Equipo",
    icon: <FaUsers className="text-green-500 text-2xl" />,
  },
  {
    name: "Gestión del Tiempo",
    icon: <FaClock className="text-purple-500 text-2xl" />,
  },
  { name: "Organización", icon: <FaTasks className="text-red-500 text-2xl" /> },
  {
    name: "Pensamiento Crítico",
    icon: <FaBrain className="text-indigo-500 text-2xl" />,
  },
];

const SoftSkillsTags: React.FC = () => {
  return (
    <section className="w-screen flex flex-col  px-4">
      <div className="flex flex-wrap gap-4  w-full ">
        {softSkills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-800 text- font-semibold rounded-full 
            shadow-md hover:bg-custom-pink hover:text-white transition duration-300"
          >
            {skill.icon}
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SoftSkillsTags;
