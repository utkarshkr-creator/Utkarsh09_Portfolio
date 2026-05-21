import React from 'react';
import { Navbar } from '../components/sections/Navbar';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { AchievementStrip } from '../components/sections/AchievementStrip';
import { Skills } from '../components/sections/Skills';
import { Experience } from '../components/sections/Experience';

import { Projects } from '../components/sections/Projects';
import { Contact } from '../components/sections/Contact';
import { Footer } from '../components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-bg-secondary via-bg-primary to-bg-secondary dark:bg-[#0a0a0a] text-text-primary font-sans overflow-x-hidden relative w-full">
      <Navbar />
      <Hero />
      <About />
      <AchievementStrip />
      <Experience />
      <Skills />
      <Projects />

      <Contact />
      <Footer />
    </main>
  );
}
