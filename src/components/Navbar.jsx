import React, { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // 🔥 added for mobile toggle

const Navbar = () => {
  const [showNav, setShowNav] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false); // 🔥 added
  const lastScroll = useRef(0);
  let timer = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll < 50) {
        setShowNav(true);
        return;
      }

      if (currentScroll < lastScroll.current) {
        setShowNav(true);
        if (timer.current) clearTimeout(timer.current);
        timer.current = setTimeout(() => {
          setShowNav(false);
        }, 3000);
      }

      if (currentScroll > lastScroll.current) {
        setShowNav(false);
      }

      lastScroll.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  return (
    <nav
      className={`fixed top-5 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50 
        transition-all duration-500
        ${showNav ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}
      `}
    >
      <div
        className="
          bg-white/10 backdrop-blur-xl px-6 py-3 rounded-2xl border 
          border-white/20 shadow-lg flex justify-between items-center
        "
      >
        <h1 className="text-white text-xl font-semibold tracking-wide">
          Shihab<span className="text-blue-400">.</span>
        </h1>

        {/* 🔥 DESKTOP MENU (unchanged) */}
        <ul className="hidden md:flex gap-8 text-white font-medium">
          {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
            <li key={item} className="cursor-pointer relative group">
              {item}
              <span className="block h-0.5 w-0 bg-blue-400 transition-all group-hover:w-full absolute bottom-0 left-0"></span>
            </li>
          ))}
        </ul>

        {/* 🔥 MOBILE MENU ICON */}
        <div
          className="md:hidden text-white text-3xl cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* 🔥 MOBILE MENU DROPDOWN */}
      {mobileOpen && (
        <div className="md:hidden bg-white/10 backdrop-blur-xl border border-white/20 mt-3 rounded-xl p-4 text-white flex flex-col gap-4 text-lg font-medium">
          {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
            <div
              key={item}
              className="cursor-pointer"
              onClick={() => setMobileOpen(false)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
