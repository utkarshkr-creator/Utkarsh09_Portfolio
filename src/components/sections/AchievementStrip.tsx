'use client';

import React from 'react';
import { SiCodeforces, SiLeetcode } from 'react-icons/si';
import { FaMeta } from 'react-icons/fa6';
import { ScrollReveal } from '../ui/ScrollReveal';

const stats = [
  {
    icon: SiCodeforces,
    iconColor: 'text-red-500',
    bg: 'bg-red-500/8 dark:bg-red-500/10 border-red-500/20 dark:border-red-500/20',
    label: 'Codeforces',
    value: '1647 (Max. 1647)',
    sub: 'Best rank #804 globally',
  },
  {
    icon: SiLeetcode,
    iconColor: 'text-yellow-500',
    bg: 'bg-yellow-500/8 dark:bg-yellow-500/10 border-yellow-500/20 dark:border-yellow-500/20',
    label: 'LeetCode',
    value: '2010 (Max. 2010)',
    sub: 'Top 2.38% · #976 globally',
  },
  {
    icon: FaMeta,
    iconColor: 'text-blue-500',
    bg: 'bg-blue-500/8 dark:bg-blue-500/10 border-blue-500/20 dark:border-blue-500/20',
    label: 'Meta Hacker Cup 2025',
    value: 'Round 2 Qualifier',
    sub: 'Ranked #670 globally',
  },
];

export const AchievementStrip: React.FC = () => {
  return (
    <ScrollReveal>
      <div className="container mx-auto px-6 mb-2">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl border ${stat.bg} transition-all duration-300 hover:-translate-y-0.5`}
                >
                  <Icon className={`${stat.iconColor} text-2xl shrink-0`} />
                  <div className="min-w-0">
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <span className="text-xs font-semibold text-text-muted dark:text-gray-500 uppercase tracking-wide">{stat.label}</span>
                    </div>
                    <p className="font-bold text-text-primary dark:text-white text-sm leading-tight">{stat.value}</p>
                    <p className="text-xs text-text-muted dark:text-gray-500 truncate">{stat.sub}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};
