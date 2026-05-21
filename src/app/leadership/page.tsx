import type { Metadata } from "next";
import React from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { GlassCard } from '@/components/ui/GlassCard';
import { FaArrowLeft, FaUserTie, FaUsers } from 'react-icons/fa6';
import { leadershipData } from '@/db';
import Link from 'next/link';
import { IconType } from 'react-icons';

export const metadata: Metadata = {
  title: "Leadership",
  description: "Leadership roles of Utkarsh Kumar - Placement Coordinator at IIIT Allahabad, Senior Coordinator at MOXIE Technical Club.",
};

const iconMap: Record<string, IconType> = {
  userTie: FaUserTie,
  users: FaUsers,
};

export default function LeadershipPage() {
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
                Leadership Roles
              </span>
            </h1>
            <p className="text-text-secondary dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Experience and contributions to organizations.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {leadershipData.map((role) => {
                const IconComponent = iconMap[role.iconType];
                return (
                  <GlassCard key={role.id} className={`${role.hoverBorderColor} transition-colors`}>
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-accent-primary dark:text-[#D4A574] flex items-center gap-2 mb-1">
                        {IconComponent && <IconComponent />} {role.title}
                      </h3>
                      <p className="text-lg font-semibold text-text-primary dark:text-gray-100">{role.organization}</p>
                      <p className="text-sm text-text-muted dark:text-gray-400 mt-1">{role.period}</p>
                    </div>
                    <ul className="space-y-2">
                      {role.points.map((point, index) => (
                        <li key={index} className="flex items-start gap-2 text-text-secondary dark:text-gray-300 text-sm">
                          <span className="text-accent-primary mt-1">▸</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
