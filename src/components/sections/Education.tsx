'use client';

import React from 'react';
import { Section } from '../ui/Section';
import { GlassCard } from '../ui/GlassCard';
import { FaGraduationCap, FaSchool } from 'react-icons/fa6';
import { higherEducationData, schoolingData, HigherEducation, Schooling } from '@/db';

// Desktop Education Card component
interface DesktopEducationCardProps {
  education: HigherEducation;
  isLeft: boolean;
}

const DesktopEducationCard: React.FC<DesktopEducationCardProps> = ({ education, isLeft }) => {
  const gradientClass = education.gradientFrom === 'primary' 
    ? 'from-accent-primary to-accent-secondary' 
    : 'from-accent-secondary to-accent-primary';
  const hoverClass = education.gradientFrom === 'primary'
    ? 'hover:border-accent-primary/50'
    : 'hover:border-accent-secondary/50';
  
  if (isLeft) {
    return (
      <div className="pr-8 pb-12 text-right">
        <GlassCard className={`inline-block w-full text-left relative group ${hoverClass} transition-colors`}>
          <div className="flex items-center gap-4 mb-4">
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradientClass} flex items-center justify-center text-xl font-bold text-white shadow-lg shrink-0`}>
              {education.shortName}
            </div>
            <div>
              <h3 className="text-xl font-bold text-accent-primary dark:text-[#D4A574]">{education.degree}</h3>
              <p className="text-lg font-semibold text-text-primary dark:text-gray-100">{education.institution}</p>
            </div>
          </div>
          <div className="flex justify-between items-center text-sm">
            <p className="text-text-muted">{education.period}</p>
            <p className="font-bold text-accent-secondary dark:text-[#E8D5B7]">CGPA: {education.cgpa}</p>
          </div>
        </GlassCard>
      </div>
    );
  }
  
  return (
    <div className="pl-8">
      <GlassCard className={`inline-block w-full relative group ${hoverClass} transition-colors`}>
        <div className="flex items-center gap-4 mb-4">
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradientClass} flex items-center justify-center text-xl font-bold text-white shadow-lg shrink-0`}>
            {education.shortName}
          </div>
          <div>
            <h3 className="text-xl font-bold text-accent-primary">{education.degree}</h3>
            <p className="text-lg font-semibold text-text-primary">{education.institution}</p>
          </div>
        </div>
        <div className="flex justify-between items-center text-sm">
          <p className="text-text-muted">{education.period}</p>
          <p className="font-bold text-accent-secondary">CGPA: {education.cgpa}</p>
        </div>
      </GlassCard>
    </div>
  );
};

// Mobile Education Card component
interface MobileEducationCardProps {
  education: HigherEducation;
}

const MobileEducationCard: React.FC<MobileEducationCardProps> = ({ education }) => {
  const gradientClass = education.gradientFrom === 'primary' 
    ? 'from-accent-primary to-accent-secondary' 
    : 'from-accent-secondary to-accent-primary';
  const markerClass = education.gradientFrom === 'primary' ? 'bg-accent-primary' : 'bg-accent-secondary';
  
  return (
    <div className="relative">
      <div className={`absolute -left-[39px] top-6 w-5 h-5 rounded-full ${markerClass} border-4 border-bg-secondary dark:border-[#0a0a0a] shadow-[0_0_0_4px_#F5F5F5] dark:shadow-[0_0_0_4px_#0a0a0a]`}></div>
      <GlassCard>
        <div className="flex items-center gap-4 mb-4">
          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${gradientClass} flex items-center justify-center text-lg font-bold text-white shrink-0`}>
            {education.shortName}
          </div>
          <div>
            <h3 className="text-lg font-bold text-accent-primary">{education.degree}</h3>
            <p className="font-semibold text-text-primary">{education.institution}</p>
          </div>
        </div>
        <div className="flex justify-between items-center text-sm">
          <p className="text-text-muted">{education.period}</p>
          <p className="font-bold text-accent-secondary">CGPA: {education.cgpa.split('/')[0]}</p>
        </div>
      </GlassCard>
    </div>
  );
};

// Schooling Card component
interface SchoolingCardProps {
  school: Schooling;
}

const SchoolingCard: React.FC<SchoolingCardProps> = ({ school }) => {
  return (
    <GlassCard className="flex items-center gap-4 hover:bg-white/5">
      <div className="p-3 rounded-full bg-accent-primary/10 text-accent-primary">
        <FaGraduationCap size={24} />
      </div>
      <div>
        <h4 className="text-lg font-bold text-text-primary">{school.level}</h4>
        <p className="text-text-secondary dark:text-gray-300">{school.school}, {school.board}</p>
        <p className="text-sm text-text-muted mt-1">{school.score}</p>
      </div>
    </GlassCard>
  );
};

export const Education: React.FC = () => {
  return (
    <Section id="education" title="Education" className="bg-transparent">
      <div className="max-w-5xl mx-auto relative">
        {/* Timeline Container - Desktop */}
        <div className="hidden md:grid grid-cols-[1fr_60px_1fr] gap-0">
          
          {/* Master's Degree */}
          <DesktopEducationCard education={higherEducationData[0]} isLeft={true} />

          {/* Timeline Marker 1 */}
          <div className="flex flex-col items-center relative">
            <div className="w-5 h-5 rounded-full bg-accent-primary border-4 border-bg-secondary dark:border-[#0a0a0a] z-10 shadow-[0_0_0_4px_#F5F5F5,0_0_20px_#BFA181] dark:shadow-[0_0_0_4px_#0a0a0a,0_0_20px_#BFA181] mt-8"></div>
            <div className="w-0.5 bg-gradient-to-b from-accent-primary to-accent-secondary flex-grow absolute top-8 bottom-[-2rem]"></div>
          </div>

          <div className="pl-8 pb-12"></div>

          {/* Bachelor's Degree */}
          <div className="pr-8"></div>

          {/* Timeline Marker 2 */}
          <div className="flex flex-col items-center relative">
            <div className="w-5 h-5 rounded-full bg-accent-secondary border-4 border-bg-secondary dark:border-[#0a0a0a] z-10 shadow-[0_0_0_4px_#F5F5F5,0_0_20px_#D4A574] dark:shadow-[0_0_0_4px_#0a0a0a,0_0_20px_#D4A574] mt-8"></div>
          </div>

          <DesktopEducationCard education={higherEducationData[1]} isLeft={false} />
        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-8 relative pl-8 border-l-2 border-accent-primary/30 ml-4">
          {higherEducationData.map((education) => (
            <MobileEducationCard key={education.id} education={education} />
          ))}
        </div>

        {/* Previous Education */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-text-secondary dark:text-[#D4A574] flex items-center justify-center gap-3">
            <FaSchool /> Schooling
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {schoolingData.map((school) => (
              <SchoolingCard key={school.id} school={school} />
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
};
