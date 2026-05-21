'use client';

import React from 'react';
import { Section } from '../ui/Section';
import { getFeaturedAchievements, Achievement } from '@/db';
import { FaArrowRight } from 'react-icons/fa6';
import Link from 'next/link';
import { ScrollReveal } from '../ui/ScrollReveal';

// Enhanced AchievementCard component with gradient border
interface AchievementCardProps {
  achievement: Achievement;
  index: number;
}

export const AchievementCard: React.FC<AchievementCardProps> = ({ achievement, index }) => {
  const IconComponent = achievement.icon;
  
  return (
    <ScrollReveal delay={index * 100}>
      <div className="relative group h-full">
        {/* Gradient border effect */}
        <div className={`absolute -inset-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500`}></div>
        
        <div className="relative bg-white dark:bg-[#121212] rounded-2xl p-6 border border-gray-200 dark:border-gray-800 group-hover:border-transparent transition-all duration-300 h-full">
          <div className="flex items-center gap-4 mb-4">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 dark:from-[#BFA181]/30 dark:to-[#D4A574]/30 flex items-center justify-center`}>
              <IconComponent className={`text-2xl ${achievement.iconColor}`} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-text-primary dark:text-white group-hover:text-accent-primary dark:group-hover:text-[#D4A574] transition-colors">
                {achievement.title}
              </h3>
              <p className="text-sm font-semibold text-accent-primary dark:text-[#E8D5B7]">{achievement.subtitle}</p>
            </div>
          </div>
          <p className="text-text-secondary dark:text-gray-400 text-sm leading-relaxed">{achievement.description}</p>
        </div>
      </div>
    </ScrollReveal>
  );
};

export const Achievements: React.FC = () => {
  const featuredAchievements = getFeaturedAchievements();
  
  return (
    <Section id="achievements" title="Achievements" className="bg-transparent">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredAchievements.map((achievement, index) => (
          <AchievementCard key={achievement.id} achievement={achievement} index={index} />
        ))}
      </div>
      <div className="text-center mt-10">
        <Link 
          href="/achievements"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-bold rounded-full hover:shadow-lg hover:shadow-accent-primary/25 transition-all duration-300 transform hover:-translate-y-0.5"
        >
          View All Achievements <FaArrowRight />
        </Link>
      </div>
    </Section>
  );
};
