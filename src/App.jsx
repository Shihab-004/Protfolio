import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './sections/Home'
import About from './sections/About'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Testimonial from './sections/Testimonial'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import ParticleBackground from './components/ParticleBackground'
import CustomCursor from './components/CustomCursor'
import Projects from './sections/Projects';

const App = () => {
  return (
    <div className=''>
      <CustomCursor />
      {/* <ParticleBackground /> */}

        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        {/* <Experience />
        <Testimonial /> */}
        <Contact />
        <Footer />
    </div>
  )
}

export default App