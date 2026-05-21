import type { Metadata } from "next";
import React from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { GlassCard } from '@/components/ui/GlassCard';
import { getAllAchievements, Achievement } from '@/db';
import { FaArrowLeft } from 'react-icons/fa6';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Achievements",
  description: "Competitive programming achievements - Meta Hacker Cup Round 2, Codeforces Expert (1606), LeetCode Knight (1890), ACM-ICPC Regional Qualifier.",
};

const AchievementCard: React.FC<{ achievement: Achievement }> = ({ achievement }) => {
  const IconComponent = achievement.icon;
  
  return (
    <GlassCard className={`${achievement.hoverBorderColor} transition-colors group`}>
      <div className="flex items-center gap-3 mb-3">
        <IconComponent className={`text-2xl ${achievement.iconColor} group-hover:scale-110 transition-transform`} />
        <h3 className="text-xl font-bold text-accent-primary dark:text-[#D4A574]">{achievement.title}</h3>
      </div>
      <p className="text-lg font-semibold mb-2 dark:text-gray-100">{achievement.subtitle}</p>
      <p className="text-text-secondary dark:text-gray-300 text-sm">{achievement.description}</p>
    </GlassCard>
  );
};

export default function AchievementsPage() {
  const allAchievements = getAllAchievements();
  
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
                All Achievements
              </span>
            </h1>
            <p className="text-text-secondary dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Competitive programming journey across various platforms and contests.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allAchievements.map((achievement) => (
              <AchievementCard key={achievement.id} achievement={achievement} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
