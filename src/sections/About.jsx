import React from "react";
import myself from "../assets/myself.jpeg";
import ruet from "../assets/ruet.webp";
import ndc from "../assets/ndc.webp";

const About = () => {
  return (
    <div className="w-full min-h-screen relative flex flex-col md:flex-row items-center justify-center px-8 md:px-20 gap-12 bg-gradient-to-b from-gray-900 via-black to-gray-900 py-20">
      
      {/* Left: Profile */}
      <div className="flex-1 flex flex-col items-center text-center md:text-left md:items-start gap-4 animate-fadeInUp">
        {/* Glow behind avatar */}
        <div className="relative">
          <div className=""></div>
          <img
            src={myself}
            alt="Shihab"
            className="w-64 h-64 md:w-72 md:h-72 rounded-3xl shadow-2xl object-cover animate-fadeIn delay-200 hover:scale-105 transition-transform duration-500"
          />
        </div>
        <h2 className="text-white text-3xl md:text-4xl font-bold mt-4">
          Md Shihabul Islam Shihab
        </h2>
        <p className="text-gray-300 text-lg md:text-xl">
          Web Developer | ML/Deep Learning Enthusiast
        </p>
      </div>

      {/* Right: Education / Cards */}
      <div className="flex-1 flex flex-col gap-8">
        {/* University Card */}
        <div className="flex items-center gap-4 bg-gray-800/50 backdrop-blur-xl rounded-2xl p-4 md:p-6 shadow-xl animate-fadeInUp delay-400 hover:scale-105 transition-transform duration-500">
          <img src={ruet} alt="RUET" className="w-20 h-20 rounded-lg shadow-md object-cover" />
          <div className="text-white">
            <h3 className="text-xl md:text-2xl font-semibold">Rajshahi University of Engineering & Technology</h3>
            <p className="text-gray-400">2023 - Present</p>
          </div>
        </div>

        {/* College Card */}
        <div className="flex items-center gap-4 bg-gray-800/50 backdrop-blur-xl rounded-2xl p-4 md:p-6 shadow-xl animate-fadeInUp delay-600 hover:scale-105 transition-transform duration-500">
          <img src={ndc} alt="NDC" className="w-20 h-20 rounded-lg shadow-md object-cover" />
          <div className="text-white">
            <h3 className="text-xl md:text-2xl font-semibold">Notre Dame College, Dhaka</h3>
            <p className="text-gray-400">2020 - 2022</p>
          </div>
        </div>
      </div>

      {/* Tailwind Animations */}
      <style>
        {`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(30px);}
            100% { opacity: 1; transform: translateY(0);}
          }
          .animate-fadeInUp { animation: fadeInUp 1s forwards; }
          .animate-fadeInUp.delay-200 { animation-delay: 0.2s; }
          .animate-fadeInUp.delay-400 { animation-delay: 0.4s; }
          .animate-fadeInUp.delay-600 { animation-delay: 0.6s; }

          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
          .animate-float { animation: float 3s ease-in-out infinite; }
        `}
      </style>
    </div>
  );
};

export default About;

