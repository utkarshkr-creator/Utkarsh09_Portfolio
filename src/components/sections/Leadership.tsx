'use client';

import React from 'react';
import { Section } from '../ui/Section';
import { GlassCard } from '../ui/GlassCard';
import { FaUserTie, FaUsers } from 'react-icons/fa6';
import { leadershipData, LeadershipRole } from '@/db';
import { IconType } from 'react-icons';
import { ScrollReveal } from '../ui/ScrollReveal';

// Icon mapping
const iconMap: Record<string, IconType> = {
  userTie: FaUserTie,
  users: FaUsers,
};

// Reusable LeadershipCard component
interface LeadershipCardProps {
  role: LeadershipRole;
  index: number;
}

const LeadershipCard: React.FC<LeadershipCardProps> = ({ role, index }) => {
  const IconComponent = iconMap[role.iconType];
  
  return (
    <ScrollReveal delay={index * 150}>
      <GlassCard className={`${role.hoverBorderColor} transition-colors`}>
        <div className="mb-4">
          <h3 className="text-xl font-bold text-accent-primary dark:text-[#D4A574] flex items-center gap-2 mb-1">
            {IconComponent && <IconComponent />} {role.title}
          </h3>
          <p className="text-lg font-semibold text-text-primary dark:text-gray-100">{role.organization}</p>
          <p className="text-sm text-text-muted dark:text-gray-400 mt-1">{role.period}</p>
        </div>
        <ul className="space-y-2">
          {role.points.map((point, idx) => (
            <li key={idx} className="flex items-start gap-2 text-text-secondary dark:text-gray-300 text-sm">
              <span className="text-accent-primary mt-1">▸</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </GlassCard>
    </ScrollReveal>
  );
};

export const Leadership: React.FC = () => {
  return (
    <Section id="leadership" title="Leadership Roles">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {leadershipData.map((role, index) => (
          <LeadershipCard key={role.id} role={role} index={index} />
        ))}
      </div>
    </Section>
  );
};
