"use client";

import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import SoftSkills from "./components/SoftSkills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GetinTouch from "./components/GetinTouch";

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 text-foreground">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <SoftSkills />
      <Education />
      <Projects />
      <Experience />
      <Contact />
      <GetinTouch />
      <Footer />
    </main>
  );
}
