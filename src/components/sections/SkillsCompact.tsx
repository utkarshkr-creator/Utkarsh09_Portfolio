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

const iconMap: Record<string, IconType> = {
  SiNodedotjs, SiTypescript, SiDocker, SiPostgresql, SiMongodb,
  SiRedis, SiPython, SiCplusplus, SiAmazon, SiGo,
  SiSocketdotio, SiWebrtc, SiExpress, SiGithubactions,
  FaCode, FaServer, FaCloud, FaJava,
};

const SkillBadge: React.FC<{ skill: Skill }> = ({ skill }) => {
  const IconComponent = iconMap[skill.iconName];
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white dark:bg-[#1a1a2e] border border-gray-200 dark:border-[#BFA181]/30 hover:border-accent-primary dark:hover:border-[#D4A574] transition-all group">
      <span className="text-lg text-accent-primary dark:text-[#D4A574]">
        {IconComponent && <IconComponent />}
      </span>
      <span className="font-medium text-text-primary dark:text-gray-100 text-xs">{skill.name}</span>
    </div>
  );
};

const SkillCategory: React.FC<{ title: string; skills: Skill[] }> = ({ title, skills }) => {
  if (skills.length === 0) return null;
  return (
    <div className="mb-4">
      <h4 className="text-xs font-bold text-accent-primary dark:text-[#E8D5B7] uppercase tracking-wider mb-2">
        {title}
      </h4>
      <div className="flex flex-wrap gap-2">
        {skills.slice(0, 6).map((skill) => (
          <SkillBadge key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export const SkillsCompact: React.FC = () => {
  const languages = skillsData.filter(s => s.category === 'languages');
  const backend = skillsData.filter(s => s.category === 'backend');
  const database = skillsData.filter(s => s.category === 'database');
  const infrastructure = skillsData.filter(s => s.category === 'infrastructure');
  const core = skillsData.filter(s => s.category === 'core');

  return (
    <div className="h-full">
      <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-accent-primary to-accent-secondary">
        Skills
      </h2>
      
      <div className="relative group h-[calc(100%-60px)]">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-2xl opacity-30 group-hover:opacity-100 blur transition-all duration-500"></div>
        
        <div className="relative bg-white dark:bg-[#121212] rounded-2xl p-6 border border-gray-200 dark:border-gray-800 group-hover:border-transparent transition-all duration-300 h-full flex flex-col">
          <div className="flex-grow">
            <SkillCategory title={skillCategories.languages} skills={languages} />
            <SkillCategory title={skillCategories.backend} skills={backend} />
            <div className="grid grid-cols-2 gap-4">
              <SkillCategory title={skillCategories.database} skills={database} />
              <SkillCategory title={skillCategories.infrastructure} skills={infrastructure} />
            </div>
            <SkillCategory title={skillCategories.core} skills={core} />
          </div>
          
          <Link 
            href="/skills"
            className="inline-flex items-center gap-2 text-accent-primary dark:text-[#D4A574] hover:text-accent-secondary font-semibold transition-colors group/link mt-4"
          >
            View all skills 
            <FaArrowRight className="group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};
