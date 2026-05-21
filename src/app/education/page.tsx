import type { Metadata } from "next";
import React from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { GlassCard } from '@/components/ui/GlassCard';
import { FaArrowLeft, FaGraduationCap, FaSchool } from 'react-icons/fa6';
import { higherEducationData, schoolingData } from '@/db';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Education",
  description: "Educational background of Utkarsh Kumar - M.Tech at IIIT Allahabad (CGPA: 9.20), B.Tech at MIT Muzaffarpur.",
};

export default function EducationPage() {
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
                Education
              </span>
            </h1>
            <p className="text-text-secondary dark:text-gray-400 text-lg max-w-2xl mx-auto">
              My academic journey and educational background.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Higher Education */}
            <div>
              <h2 className="text-2xl font-bold text-accent-primary dark:text-[#D4A574] mb-6 flex items-center gap-3">
                <FaGraduationCap /> Higher Education
              </h2>
              <div className="space-y-6">
                {higherEducationData.map((edu) => {
                  const gradientClass = edu.gradientFrom === 'primary' 
                    ? 'from-accent-primary to-accent-secondary' 
                    : 'from-accent-secondary to-accent-primary';
                  return (
                    <GlassCard key={edu.id} className="flex items-start gap-4">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${gradientClass} flex items-center justify-center text-xl font-bold text-white shrink-0`}>
                        {edu.shortName}
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-text-primary dark:text-white">{edu.degree}</h3>
                        <p className="text-text-secondary dark:text-gray-300">{edu.institution}</p>
                        <div className="flex justify-between items-center mt-2">
                          <p className="text-text-muted">{edu.period}</p>
                          <p className="font-bold text-accent-secondary dark:text-[#E8D5B7]">CGPA: {edu.cgpa}</p>
                        </div>
                      </div>
                    </GlassCard>
                  );
                })}
              </div>
            </div>
            
            {/* Schooling */}
            <div>
              <h2 className="text-2xl font-bold text-accent-primary dark:text-[#D4A574] mb-6 flex items-center gap-3">
                <FaSchool /> Schooling
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {schoolingData.map((school) => (
                  <GlassCard key={school.id} className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-accent-primary/10 text-accent-primary">
                      <FaGraduationCap size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-text-primary dark:text-white">{school.level}</h4>
                      <p className="text-text-secondary dark:text-gray-300">{school.school}, {school.board}</p>
                      <p className="text-sm text-accent-secondary font-semibold mt-1">{school.score}</p>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
