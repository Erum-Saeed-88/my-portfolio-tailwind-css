import React from 'react'
import '../app/globals.css';
import Navbar from "@/app/components/Navbar/Navbar";
import Home from "@/app/components/Home/Home";
import About from "@/app/components/About/About";
import Skills from "@/app/components/Skills/Skills";
import Projects from "@/app/components/Projects/Projects";
import Footer from "@/app/components/Footer/Footer";

export default function page () {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden" >
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}
