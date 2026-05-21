import React from 'react';
import { Section } from '../ui/Section';
import { GlassCard } from '../ui/GlassCard';
import { FaFlask } from 'react-icons/fa6';
import { researchData, ResearchItem } from '@/db';

// Reusable ResearchCard component
interface ResearchCardProps {
  research: ResearchItem;
}

const ResearchCard: React.FC<ResearchCardProps> = ({ research }) => {
  return (
    <GlassCard className="max-w-4xl mx-auto">
      <h3 className="text-xl font-bold text-accent-primary dark:text-[#D4A574] mb-4 flex items-center gap-2">
        <FaFlask /> {research.title}
      </h3>
      {research.description.map((paragraph, index) => (
        <p key={index} className="text-text-secondary dark:text-gray-300 leading-relaxed">
          {paragraph}
        </p>
      ))}
    </GlassCard>
  );
};

export const Research: React.FC = () => {
  return (
    <Section id="research" title="Research & Works" className="bg-transparent">
      {researchData.map((research) => (
        <ResearchCard key={research.id} research={research} />
      ))}
    </Section>
  );
};
