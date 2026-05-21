import type { Metadata } from "next";
import React from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { GlassCard } from '@/components/ui/GlassCard';
import { FaArrowLeft, FaBriefcase } from 'react-icons/fa6';
import { experienceData } from '@/db';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Experience",
  description: "Work experience of Utkarsh Kumar - Frontend Developer Intern at Easy Webs, boosting conversion by 50%.",
};

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-bg-primary dark:bg-[#0a0a0a]">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-accent-primary dark:text-[#D4A574] hover:text-accent-secondary mb-8 transition-colors"
          >
            <FaArrowLeft /> Back to Home
          </Link>
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-primary to-accent-secondary">
                Work Experience
              </span>
            </h1>
            <p className="text-text-secondary dark:text-gray-400 text-lg max-w-2xl mx-auto">
              My professional journey and contributions.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {experienceData.map((experience) => (
              <GlassCard key={experience.id}>
                <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-accent-primary dark:text-[#D4A574] flex items-center gap-2">
                      <FaBriefcase /> {experience.role}
                    </h3>
                    <p className="text-lg font-semibold text-text-primary dark:text-gray-100 mt-1">{experience.company}</p>
                  </div>
                  <p className="text-text-muted mt-2 md:mt-0 bg-white/5 px-3 py-1 rounded-full text-sm">{experience.period}</p>
                </div>
                <ul className="space-y-3">
                  {experience.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-3 text-text-secondary dark:text-gray-300">
                      <span className="text-accent-primary mt-1.5">▸</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
