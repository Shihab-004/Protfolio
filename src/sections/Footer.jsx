import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Left - Name */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white">Shihabul Islam Shihab</h2>
          <p className="text-gray-400">
            Full Stack Developer | ML & Deep Learning Enthusiast
          </p>
        </div>

        {/* Middle - Social Icons */}
        <div className="flex gap-8 text-3xl">
          <a
            href="https://github.com/Shihab-004"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition transform hover:scale-110"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/shihab-ruet/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition transform hover:scale-110"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:shihabul.islam.shihab.004@gmail.com"
            className="hover:text-cyan-400 transition transform hover:scale-110"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Right - Copyright */}
        <div className="text-center md:text-right text-sm text-gray-400">
          © {new Date().getFullYear()} Shihab — All Rights Reserved.
        </div>
      </div>

      {/* Divider Line */}
      <div className="w-full mt-8 border-t border-gray-700"></div>

      {/* Bottom Small Line */}
      <p className="text-center text-gray-500 text-xs mt-4">
        Designed & Developed by <span className="text-cyan-400">Shihab</span>
      </p>
    </footer>
  );
};

export default Footer;
