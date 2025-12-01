import React from "react";

const projects = [
  { name: "AI Supplier", tech: "React + Tailwind" },
  { name: "FoodZilla", tech: "React , node,express,auth" },
  { name: "Blog App", tech: "Node, Express, MongoDB" },
  { name: "Weather App", tech: "Vanila js" },
  { name: "Potato Disease Identify", tech: "Deep Learning" },
  { name: "Stroke Predict Classifier", tech: "Machine Learning" },
];

const Projects = () => {
  return (
    <div className="w-full min-h-screen text-white flex flex-col items-center py-20 px-6">
      <h1 className="text-5xl font-bold mb-10 border-b-4 border-cyan-400 pb-2">
        My Projects
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-2xl p-6 flex flex-col justify-between shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
          >
            <h2 className="text-2xl font-semibold mb-3 text-cyan-400">
              {project.name}
            </h2>
            <p className="text-gray-300 mb-4">{project.tech}</p>
            <a
              href="#"
              className="mt-auto px-4 py-2 bg-cyan-400 text-gray-900 font-medium rounded-lg text-center hover:bg-cyan-300 transition-colors"
            >
             
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
