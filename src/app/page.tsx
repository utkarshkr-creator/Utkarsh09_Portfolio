import React from 'react';
import { Navbar } from '../components/sections/Navbar';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Education } from '../components/sections/Education';
import { Skills } from '../components/sections/Skills';
import { Experience } from '../components/sections/Experience';
import { Leadership } from '../components/sections/Leadership';
import { Achievements } from '../components/sections/Achievements';
import { Projects } from '../components/sections/Projects';
import { Research } from '../components/sections/Research';
import { Contact } from '../components/sections/Contact';
import { Footer } from '../components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-bg-secondary via-bg-primary to-bg-secondary dark:bg-[#0a0a0a] text-text-primary font-sans">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Leadership />
      <Achievements />
      <Projects />
      <Research />
      <Contact />
      <Footer />
    </main>
  );
}
