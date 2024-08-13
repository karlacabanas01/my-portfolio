import React from "react";

const skills = [
  { name: "React", level: "Intermediate", percentage: 50 },
  { name: "JavaScript", level: "Advanced", percentage: 70 },
  { name: "Laravel", level: "Basic", percentage: 20 },
  { name: "Typescript", level: "Master", percentage: 100 },
  { name: "NodeJS", level: "Basic", percentage: 10 },
];

const HardSkills: React.FC = () => {
  return (
    <section id="skills" className="text-center mt-8">
      <h2 className="text-4xl font-bold mb-4 text-custom-pink">HARD SKILLS</h2>
      <div className="flex justify-center items-center gap-4 flex-wrap">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill bg-gray-300 p-2 rounded-lg w-72 h-72 flex flex-col items-center justify-center"
          >
            <h3 className="text-lg font-bold text-black mb-2">{skill.name}</h3>
            <div className="circular-chart flex items-center justify-center">
              <svg viewBox="0 0 36 36" className="w-24 h-24">
                <path
                  className="circle-bg"
                  d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                  stroke="#eee"
                  strokeWidth="3.8"
                  fill="none"
                ></path>
                <path
                  className="circle"
                  strokeDasharray={`${skill.percentage}, 100`}
                  d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                  stroke="#ff69b4"
                  strokeWidth="3.8"
                  fill="none"
                ></path>
                <text
                  x="18"
                  y="18"
                  className="percentage"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="4"
                  fill="#333"
                >{`${skill.percentage}%`}</text>
              </svg>
            </div>
            <div className="text-lg text-black mt-2">{skill.level}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HardSkills;
