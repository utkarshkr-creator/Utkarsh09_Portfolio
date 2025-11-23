import React from 'react';
import { Section } from '../ui/Section';
import { GlassCard } from '../ui/GlassCard';
import { FaUserTie, FaUsers } from 'react-icons/fa6';

export const Leadership: React.FC = () => {
  return (
    <Section id="leadership" title="Leadership Roles">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <GlassCard className="hover:border-accent-primary/30 transition-colors">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-accent-primary dark:text-[#03DAC6] flex items-center gap-2 mb-1">
              <FaUserTie /> Placement Coordinator
            </h3>
            <p className="text-lg font-semibold text-text-primary dark:text-gray-100">IIITA&apos;26</p>
            <p className="text-sm text-text-muted dark:text-gray-400 mt-1">May 2025 - Present</p>
          </div>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-text-secondary dark:text-gray-300 text-sm">
              <span className="text-accent-primary mt-1">▸</span>
              <span>Spearheaded outreach to 75+ new companies, expanding the recruiter pool by 30%</span>
            </li>
            <li className="flex items-start gap-2 text-text-secondary dark:text-gray-300 text-sm">
              <span className="text-accent-primary mt-1">▸</span>
              <span>Analyzed placement statistics, contributing to a 15% increase in average salary package</span>
            </li>
          </ul>
        </GlassCard>
        <GlassCard className="hover:border-accent-secondary/30 transition-colors">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-accent-primary flex items-center gap-2 mb-1">
              <FaUsers /> Senior Coordinator
            </h3>
            <p className="text-lg font-semibold text-text-primary">MOXIE (Technical Club of MIT)</p>
            <p className="text-sm text-text-muted mt-1">May 2021 - Aug 2023</p>
          </div>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-text-secondary dark:text-gray-300 text-sm">
              <span className="text-accent-primary mt-1">▸</span>
              <span>Led the organization & execution of various technical events and played a pivotal role in orchestrating a successful Tech-Fest</span>
            </li>
          </ul>
        </GlassCard>
      </div>
    </Section>
  );
};
