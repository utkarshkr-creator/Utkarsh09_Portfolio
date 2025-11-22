import React from 'react';
import { Section } from '../ui/Section';
import { GlassCard } from '../ui/GlassCard';
import { FaMeta, FaCode, FaTrophy, FaChartLine } from 'react-icons/fa6';
import { SiCodechef, SiCodeforces, SiLeetcode } from 'react-icons/si';

export const Achievements: React.FC = () => {
  return (
    <Section id="achievements" title="Achievements" className="bg-bg-secondary">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <GlassCard className="hover:border-blue-500/50 transition-colors group">
          <div className="flex items-center gap-3 mb-3">
            <FaMeta className="text-2xl text-blue-500 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-accent-primary">Meta Hacker Cup 2025</h3>
          </div>
          <p className="text-lg font-semibold mb-2">Round 2 Qualifier</p>
          <p className="text-text-secondary text-sm">
            Qualified for Round 2 after securing global rank 2772 in Round 1 and 719 in Round 2.
          </p>
        </GlassCard>

        <GlassCard className="hover:border-red-500/50 transition-colors group">
          <div className="flex items-center gap-3 mb-3">
            <SiCodeforces className="text-2xl text-red-500 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-accent-primary">Codeforces</h3>
          </div>
          <p className="text-lg font-semibold mb-2">Specialist (Max 1484)</p>
          <p className="text-text-secondary text-sm">
            Ranked 953rd (top 3.4%) in Round 952 with 28k participants.
          </p>
        </GlassCard>

        <GlassCard className="hover:border-yellow-500/50 transition-colors group">
          <div className="flex items-center gap-3 mb-3">
            <SiLeetcode className="text-2xl text-yellow-500 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-accent-primary">LeetCode</h3>
          </div>
          <p className="text-lg font-semibold mb-2">Knight (Max 1866)</p>
          <p className="text-text-secondary text-sm">
            Secured 976th global rank in Weekly Contest 463. Solved 500+ problems.
          </p>
        </GlassCard>

        <GlassCard className="hover:border-orange-500/50 transition-colors group">
          <div className="flex items-center gap-3 mb-3">
            <SiCodechef className="text-2xl text-orange-500 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-accent-primary">CodeChef</h3>
          </div>
          <p className="text-lg font-semibold mb-2">Max 1660</p>
          <p className="text-text-secondary text-sm">
            Consistently participated in contests, achieving strong ratings in competitive programming.
          </p>
        </GlassCard>

        <GlassCard className="hover:border-purple-500/50 transition-colors group">
          <div className="flex items-center gap-3 mb-3">
            <FaTrophy className="text-2xl text-purple-500 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-accent-primary">ACM-ICPC 2020</h3>
          </div>
          <p className="text-lg font-semibold mb-2">Regional Qualifier</p>
          <p className="text-text-secondary text-sm">
            Successfully qualified for ACM-ICPC 2020 regional, securing 86th rank in Kanpur region.
          </p>
        </GlassCard>

        <GlassCard className="hover:border-purple-500/50 transition-colors group">
          <div className="flex items-center gap-3 mb-3">
            <FaTrophy className="text-2xl text-purple-500 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-accent-primary">Global Coding Challenge</h3>
          </div>
          <p className="text-lg font-semibold mb-2">Global Rank 166</p>
          <p className="text-text-secondary text-sm">
            Achieved 166th Global rank in the Global Coding Challenge 2022 hosted by Credit Suisse.
          </p>
        </GlassCard>

        <GlassCard className="hover:border-green-500/50 transition-colors group">
          <div className="flex items-center gap-3 mb-3">
            <FaChartLine className="text-2xl text-green-500 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-accent-primary">Codolio</h3>
          </div>
          <p className="text-lg font-semibold mb-2">C Score: 1514</p>
          <p className="text-text-secondary text-sm">
            14 Badges including 100 Days Badge 2025, Problem Solving, and multiple language badges.
          </p>
        </GlassCard>
      </div>
    </Section>
  );
};
