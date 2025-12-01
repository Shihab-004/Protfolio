import React, { useState, useEffect } from "react";
import ParticleBackground from "../components/ParticleBackground";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import avator from "../assets/avator.png";

const skills = [
    "Web Development",
    "Frontend",
    "Backend",
    "Machine Learning",
    "Deep Learning",
];

const AnimatedSkills = () => {
    const [currentSkill, setCurrentSkill] = useState("");
    const [skillIndex, setSkillIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const typeSpeed = 120;
        const pauseTime = 1000;

        const timeout = setTimeout(() => {
            if (charIndex < skills[skillIndex].length) {
                setCurrentSkill((prev) => prev + skills[skillIndex][charIndex]);
                setCharIndex(charIndex + 1);
            } else {
                setTimeout(() => {
                    setCurrentSkill("");
                    setCharIndex(0);
                    setSkillIndex((skillIndex + 1) % skills.length);
                }, pauseTime);
            }
        }, typeSpeed);

        return () => clearTimeout(timeout);
    }, [charIndex, skillIndex]);

    return (
        <p className="text-gray-300 text-xl md:text-4xl mb-8">
            <span className="text-amber-50 font-semibold">{currentSkill}</span>
            <span className="text-cyan-400 font-semibold animate-pulse">|</span>
        </p>
    );
};

const Home = () => {
    return (
        <div className="w-full h-screen relative overflow-hidden">

            <ParticleBackground />

            <div className="absolute inset-0"></div>

            <div className="relative z-10 w-full h-full flex flex-col md:flex-row items-center justify-center px-8 md:px-20">

                {/* LEFT TEXT */}
                <div className="flex-1 text-left mb-10 md:mb-0 m-10">
                    <h1 className="text-white text-6xl md:text-7xl font-extrabold mb-6 animate-fadeInUp">
                        Hi, I’m <span className="text-cyan-400">Shihab</span>
                    </h1>

                    <AnimatedSkills />

                    <div className="flex gap-6 animate-fadeInUp delay-200 mb-8">
                        <a
                            href="/Shihab_Resume.pdf"
                            className="px-8 py-4 rounded-4xl bg-cyan-400 hover:bg-cyan-400 text-white font-semibold text-lg md:text-xl transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105"
                        >
                            My Resume
                        </a>
                    </div>

                    <div className="flex gap-6 text-white text-3xl md:text-4xl animate-fadeInUp delay-400">
                        <a
                            href="https://www.linkedin.com/in/shihab-ruet/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="animate-float hover:text-blue-700 transition-all duration-500 transform hover:scale-125 hover:-translate-y-2"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://github.com/Shihab-004"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="animate-float transition-all duration-500 transform hover:scale-125 hover:-translate-y-2"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://wa.me/8801761732465"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="animate-float hover:text-green-400 transition-all duration-500 transform hover:scale-125 hover:-translate-y-2"
                        >
                            <FaWhatsapp />
                        </a>
                    </div>
                </div>

                {/* RIGHT AVATAR */}
                <div className="flex-1 flex justify-center md:justify-end relative m-10 md:m-40">
                    <div className="absolute top-1/2 left-1/2 w-80 h-80 md:w-96 md:h-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500 opacity-10 blur-3xl animate-pulse"></div>

                    <img
                        src={avator}
                        alt="Shihab Avatar"
                        className="relative w-72 h-72 md:w-96 md:h-136 animate-fadeIn delay-600 object-cover hover:scale-105 transition-transform duration-500"
                    />
                </div>

            </div>

        </div>
    );
};

export default Home;
