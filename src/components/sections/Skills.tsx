'use client';

import React from 'react';
import { 
  SiNodedotjs, SiTypescript, SiDocker, SiPostgresql, SiMongodb, 
  SiRedis, SiCplusplus, SiAmazon, SiPython, SiGo,
  SiSocketdotio, SiWebrtc, SiExpress, SiGithubactions
} from 'react-icons/si';
import { FaCode, FaServer, FaCloud, FaArrowRight, FaJava } from 'react-icons/fa6';
import { skillsData, skillCategories, Skill } from '@/db';
import { IconType } from 'react-icons';
import Link from 'next/link';
import { ScrollReveal } from '../ui/ScrollReveal';

const iconMap: Record<string, IconType> = {
  SiNodedotjs, SiTypescript, SiDocker, SiPostgresql, SiMongodb,
  SiRedis, SiPython, SiCplusplus, SiAmazon, SiGo,
  SiSocketdotio, SiWebrtc, SiExpress, SiGithubactions,
  FaCode, FaServer, FaCloud, FaJava,
};

const SkillBadge: React.FC<{ skill: Skill }> = ({ skill }) => {
  const IconComponent = iconMap[skill.iconName];
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white dark:bg-[#1a1a2e] border border-gray-200 dark:border-[#BFA181]/30 hover:border-accent-primary dark:hover:border-[#D4A574] transition-all">
      <span className="text-lg text-accent-primary dark:text-[#D4A574]">
        {IconComponent && <IconComponent />}
      </span>
      <span className="font-medium text-text-primary dark:text-gray-100 text-sm">{skill.name}</span>
    </div>
  );
};

export const Skills: React.FC = () => {
  const languages = skillsData.filter(s => s.category === 'languages');
  const backend = skillsData.filter(s => s.category === 'backend');
  const database = skillsData.filter(s => s.category === 'database');
  const infrastructure = skillsData.filter(s => s.category === 'infrastructure');
  const core = skillsData.filter(s => s.category === 'core');

  return (
    <section id="skills" className="py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-2xl opacity-20 group-hover:opacity-60 blur transition-all duration-500"></div>
              
              <div className="relative bg-white dark:bg-[#121212] rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-800 group-hover:border-transparent transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent-primary to-accent-secondary">
                    Technical Skills
                  </h2>
                  <Link 
                    href="/skills"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-bold rounded-full hover:shadow-lg transition-all whitespace-nowrap w-fit"
                  >
                    View All <FaArrowRight />
                  </Link>
                </div>
                
                {/* Skills Grid - 5 categories */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Languages */}
                  <div>
                    <h4 className="text-xs font-bold text-accent-primary dark:text-[#E8D5B7] uppercase tracking-wider mb-3">
                      {skillCategories.languages}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {languages.map(s => <SkillBadge key={s.id} skill={s} />)}
                    </div>
                  </div>
                  
                  {/* Backend & Systems */}
                  <div>
                    <h4 className="text-xs font-bold text-accent-primary dark:text-[#E8D5B7] uppercase tracking-wider mb-3">
                      {skillCategories.backend}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {backend.map(s => <SkillBadge key={s.id} skill={s} />)}
                    </div>
                  </div>

                  {/* Databases + Infrastructure */}
                  <div>
                    <h4 className="text-xs font-bold text-accent-primary dark:text-[#E8D5B7] uppercase tracking-wider mb-3">
                      {skillCategories.database}
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {database.map(s => <SkillBadge key={s.id} skill={s} />)}
                    </div>
                    <h4 className="text-xs font-bold text-accent-primary dark:text-[#E8D5B7] uppercase tracking-wider mb-3">
                      {skillCategories.infrastructure}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {infrastructure.map(s => <SkillBadge key={s.id} skill={s} />)}
                    </div>
                  </div>
                </div>

                {/* Core - full width row */}
                <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
                  <h4 className="text-xs font-bold text-accent-primary dark:text-[#E8D5B7] uppercase tracking-wider mb-3">
                    {skillCategories.core}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {core.map(s => <SkillBadge key={s.id} skill={s} />)}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
