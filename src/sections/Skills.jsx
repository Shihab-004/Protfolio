import React from "react";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Framer Motion",
  "GSAP",
  "Node.js",
  "Express",
  "MongoDB",
  "Machine Learning",
  "Deep Learning",
  "Computer Vision",
  "Git",
  "GitHub",
  "Linux",
  "Windows",
];

const Skills = () => {
  return (
    <div className="w-full min-h-screen  flex flex-col items-center justify-center px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 animate-fadeInUp">
        My Skills
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full max-w-4xl">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-4 bg-gray-800/80 rounded-lg text-white font-medium text-center transform transition-all duration-300 hover:scale-105 hover:bg-cyan-500 animate-fadeInUp"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {skill}
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(20px);}
            100% { opacity: 1; transform: translateY(0);}
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.5s forwards;
          }
        `}
      </style>
    </div>
  );
};

export default Skills;
