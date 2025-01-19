export const SkillCard: React.FC<{
  skill: { name: string; level: string; percentage: number };
}> = ({ skill }) => {
  return (
    <div className="skill bg-custom-white shadow-lg p-6 rounded-lg w-72 h-72 flex flex-col items-center justify-center transition-transform transform hover:scale-105">
      <h3 className="text-xl font-bold text-custom-black mb-4">{skill.name}</h3>
      <div className="circular-chart flex items-center justify-center">
        <svg viewBox="0 0 36 36" className="w-24 h-24">
          <path
            className="circle-bg"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            stroke="var(--custom-gray)"
            strokeWidth="3.8"
            fill="none"
          ></path>
          <path
            className="circle"
            strokeDasharray={`${skill.percentage}, 100`}
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            stroke="var(--custom-pink)"
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
      <div className="text-lg font-medium text-custom-text-dark mt-4">
        {skill.level}
      </div>
    </div>
  );
};
