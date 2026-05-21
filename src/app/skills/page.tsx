import type { Metadata } from "next";
import React from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { 
  SiNodedotjs, SiTypescript, SiDocker, SiPostgresql, SiMongodb, 
  SiRedis, SiCplusplus, SiAmazon, SiPython, SiGo,
  SiSocketdotio, SiWebrtc, SiExpress, SiGithubactions
} from 'react-icons/si';
import { FaCode, FaServer, FaCloud, FaArrowLeft, FaJava } from 'react-icons/fa6';
import { skillsData, skillCategories, Skill } from '@/db';
import Link from 'next/link';
import { IconType } from 'react-icons';

export const metadata: Metadata = {
  title: "Skills",
  description: "Technical skills of Utkarsh Kumar - C++, Go, TypeScript, Node.js, PostgreSQL, Redis, Docker, AWS, Distributed Systems, and more.",
};

const iconMap: Record<string, IconType> = {
  SiNodedotjs, SiTypescript, SiDocker, SiPostgresql, SiMongodb,
  SiRedis, SiPython, SiCplusplus, SiAmazon, SiGo,
  SiSocketdotio, SiWebrtc, SiExpress, SiGithubactions,
  FaCode, FaServer, FaCloud, FaJava,
};

const SkillBadge: React.FC<{ skill: Skill }> = ({ skill }) => {
  const IconComponent = iconMap[skill.iconName];
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-[#1a1a2e] border border-gray-200 dark:border-[#BFA181]/30 hover:border-accent-primary dark:hover:border-[#D4A574] transition-all group">
      <span className="text-xl text-accent-primary dark:text-[#D4A574]">
        {IconComponent && <IconComponent />}
      </span>
      <span className="font-medium text-text-primary dark:text-gray-100 text-sm">{skill.name}</span>
    </div>
  );
};

const SkillCategory: React.FC<{ title: string; skills: Skill[] }> = ({ title, skills }) => {
  if (skills.length === 0) return null;
  return (
    <div className="mb-8">
      <h3 className="text-lg font-bold text-accent-primary dark:text-[#E8D5B7] uppercase tracking-wider mb-4">
        {title}
      </h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <SkillBadge key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default function SkillsPage() {
  const languages = skillsData.filter(s => s.category === 'languages');
  const backend = skillsData.filter(s => s.category === 'backend');
  const database = skillsData.filter(s => s.category === 'database');
  const infrastructure = skillsData.filter(s => s.category === 'infrastructure');
  const core = skillsData.filter(s => s.category === 'core');

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
                Technical Skills
              </span>
            </h1>
            <p className="text-text-secondary dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Expertise across backend systems, low-latency infrastructure, and distributed architecture.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <SkillCategory title={skillCategories.languages} skills={languages} />
            <SkillCategory title={skillCategories.backend} skills={backend} />
            <SkillCategory title={skillCategories.database} skills={database} />
            <SkillCategory title={skillCategories.infrastructure} skills={infrastructure} />
            <SkillCategory title={skillCategories.core} skills={core} />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
