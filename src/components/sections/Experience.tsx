'use client';

import React from 'react';
import { Section } from '../ui/Section';
import { FaBriefcase, FaArrowRight, FaLocationDot } from 'react-icons/fa6';
import { experienceData, ExperienceItem } from '@/db';
import Link from 'next/link';
import { ScrollReveal } from '../ui/ScrollReveal';

// Enhanced ExperienceCard component with gradient border
interface ExperienceCardProps {
  experience: ExperienceItem;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => {
  return (
    <ScrollReveal delay={index * 150}>
      <div className="relative group">
        {/* Gradient border effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
        
        <div className="relative bg-white dark:bg-[#121212] rounded-2xl p-6 border border-gray-200 dark:border-gray-800 group-hover:border-transparent transition-all duration-300">
          <div className="flex flex-col md:flex-row justify-between items-start mb-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center text-white">
                <FaBriefcase size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-text-primary dark:text-white group-hover:text-accent-primary dark:group-hover:text-[#D4A574] transition-colors">
                  {experience.role}
                </h3>
                <p className="text-accent-primary dark:text-[#E8D5B7] font-semibold">{experience.company}</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 mt-3 md:mt-0">
              {experience.location && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-sm font-medium border border-green-200 dark:border-green-800/30">
                  <FaLocationDot size={12} />
                  {experience.location}
                </span>
              )}
              <span className="px-4 py-1.5 rounded-full bg-accent-primary/10 dark:bg-[#BFA181]/20 text-accent-primary dark:text-[#D4A574] text-sm font-medium">
                {experience.period}
              </span>
            </div>
          </div>
          <ul className="space-y-3 mt-4">
            {experience.points.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3 text-text-secondary dark:text-gray-300">
                <span className="text-accent-primary dark:text-[#D4A574] mt-0.5 text-lg">▹</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ScrollReveal>
  );
};

export const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Experience" className="bg-transparent">
      <div className="max-w-4xl mx-auto space-y-6">
        {experienceData.map((experience, index) => (
          <ExperienceCard key={experience.id} experience={experience} index={index} />
        ))}
      </div>
      <div className="text-center mt-10">
        <Link 
          href="/experience"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-bold rounded-full hover:shadow-lg hover:shadow-accent-primary/25 transition-all duration-300 transform hover:-translate-y-0.5"
        >
          View Full Experience <FaArrowRight />
        </Link>
      </div>
    </Section>
  );
};
