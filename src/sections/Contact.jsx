import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-16">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-10 animate-fadeInUp">
        Contact Me
      </h1>

      {/* Contact Container */}
      <div className="w-full max-w-2xl bg-gray-800/60 backdrop-blur-md p-8 rounded-2xl shadow-xl animate-fadeInUp">
        {/* Gmail */}
        <div className="text-center mb-8">
          <p className="text-gray-300 text-lg">Write Anything</p>
          <a
            href="mailto:shihabul.islam.shihab.004@gmail.com"
            className="text-cyan-400 text-2xl font-semibold hover:text-cyan-300 transition"
          >
            
          </a>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="p-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-cyan-400"
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 mt-2 bg-cyan-400 hover:bg-cyan-300 text-black font-semibold rounded-lg transition transform hover:scale-105"
          >
            Send Message
          </button>
        </form>

        {/* Social Icons */}
        <div className="flex justify-center gap-8 mt-10 text-3xl text-white">
          <a
            href="https://github.com/"
            className="hover:text-cyan-400 transition transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/"
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
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.6s forwards;
          }
        `}
      </style>
    </div>
  );
};

export default Contact;
