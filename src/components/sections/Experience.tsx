import React from 'react';
import { Section } from '../ui/Section';
import { GlassCard } from '../ui/GlassCard';
import { FaBriefcase } from 'react-icons/fa6';

export const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Experience" className="bg-bg-secondary">
      <GlassCard className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-accent-primary flex items-center gap-2">
              <FaBriefcase /> Frontend Developer Intern
            </h3>
            <p className="text-lg font-semibold text-text-primary mt-1">Easy Webs</p>
          </div>
          <p className="text-text-muted mt-2 md:mt-0 bg-white/5 px-3 py-1 rounded-full text-sm">Nov 2022 – Dec 2022</p>
        </div>
        <ul className="space-y-3">
          <li className="flex items-start gap-3 text-text-secondary">
            <span className="text-accent-primary mt-1.5">▸</span>
            <span>Led web application development (HTML, CSS, React), boosting conversion by 50% and revenue by 20%.</span>
          </li>
          <li className="flex items-start gap-3 text-text-secondary">
            <span className="text-accent-primary mt-1.5">▸</span>
            <span>Utilized user feedback and data-driven insights to optimize user engagement, resulting in a significant 20% improvement.</span>
          </li>
        </ul>
      </GlassCard>
    </Section>
  );
};
