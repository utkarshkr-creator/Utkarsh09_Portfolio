import type { Metadata } from "next";
import React from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { GlassCard } from '@/components/ui/GlassCard';
import { FaBrain, FaRocket, FaBookOpen, FaUsers, FaArrowLeft, FaGraduationCap, FaFlask, FaUserTie } from 'react-icons/fa6';
import { aboutIntro, aboutTraitsData } from '@/db';
import Link from 'next/link';
import { IconType } from 'react-icons';

export const metadata: Metadata = {
  title: "About Me",
  description: "Utkarsh Kumar - Backend Engineer at IIIT Allahabad. Passionate about distributed systems, microservices, and high-performance applications.",
};

const iconMap: Record<string, IconType> = {
  brain: FaBrain,
  rocket: FaRocket,
  book: FaBookOpen,
  users: FaUsers,
};

export default function AboutPage() {
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
                About Me
              </span>
            </h1>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <GlassCard className="relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent-primary to-accent-secondary"></div>
              <h3 className="text-2xl font-bold text-accent-primary dark:text-[#D4A574] mb-4">Who I Am</h3>
              <p className="text-lg leading-relaxed text-text-secondary dark:text-gray-300 mb-4">
                {aboutIntro.whoIAm.paragraph1}
              </p>
              <p className="text-lg leading-relaxed text-text-secondary dark:text-gray-300">
                {aboutIntro.whoIAm.paragraph2}
              </p>
            </GlassCard>

            <GlassCard>
              <h3 className="text-2xl font-bold text-accent-primary dark:text-[#D4A574] mb-6 flex items-center gap-3">
                <FaGraduationCap /> Education
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-accent-primary/5 dark:bg-[#1a1a2e]">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center text-lg font-bold text-white shrink-0">
                    IIIT
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-text-primary dark:text-white">M.Tech in Information Technology</h4>
                    <p className="text-text-secondary dark:text-gray-300">IIIT Allahabad • 2024 - 2026</p>
                    <p className="text-accent-secondary font-semibold mt-1">CGPA: 9.20/10.0 · <span className="text-amber-500 dark:text-amber-400">Rank 1 in Specialization</span></p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-accent-primary/5 dark:bg-[#1a1a2e]">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-secondary to-accent-primary flex items-center justify-center text-lg font-bold text-white shrink-0">
                    MIT
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-text-primary dark:text-white">B.Tech in Information Technology</h4>
                    <p className="text-text-secondary dark:text-gray-300">Muzaffarpur Institute of Technology • 2019 - 2023</p>
                    <p className="text-accent-secondary font-semibold mt-1">CGPA: 8.21/10.0</p>
                  </div>
                </div>
              </div>
            </GlassCard>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <GlassCard>
                <h3 className="text-xl font-bold text-accent-primary dark:text-[#D4A574] mb-4 flex items-center gap-2">
                  <FaUserTie /> Leadership
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-bold text-text-primary dark:text-white">Placement Coordinator</h4>
                    <p className="text-sm text-text-secondary dark:text-gray-400">IIITA&apos;26 • May 2025 - Present</p>
                    <ul className="mt-2 space-y-1 text-sm text-text-secondary dark:text-gray-300">
                      <li>• Spearheaded outreach to 75+ new companies</li>
                      <li>• Contributed to 15% increase in average salary package</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary dark:text-white">Senior Coordinator</h4>
                    <p className="text-sm text-text-secondary dark:text-gray-400">MOXIE (Technical Club) • 2021 - 2023</p>
                  </div>
                </div>
              </GlassCard>
              
              <GlassCard>
                <h3 className="text-xl font-bold text-accent-primary dark:text-[#D4A574] mb-4 flex items-center gap-2">
                  <FaFlask /> Research
                </h3>
                <div>
                  <h4 className="font-bold text-text-primary dark:text-white">Decentralized ZK Identity Framework</h4>
                  <p className="text-sm text-text-secondary dark:text-gray-300 mt-2">
                    Designed a decentralized identity framework using zk-SNARKs (Groth16) and ERC-735, 
                    enabling selective disclosure and on-chain verification for DeFi applications.
                  </p>
                </div>
              </GlassCard>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-center mb-8 text-accent-primary dark:text-[#D4A574]">
                The Way I Am
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aboutTraitsData.map((trait) => {
                  const IconComponent = iconMap[trait.iconType];
                  return (
                    <GlassCard key={trait.id} className="flex items-start gap-4 hover:bg-white/5 transition-colors">
                      <div className="p-3 rounded-lg bg-accent-primary/10 text-accent-primary text-2xl">
                        {IconComponent && <IconComponent />}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-accent-primary dark:text-[#E8D5B7] mb-2">{trait.title}</h4>
                        <p className="text-text-secondary dark:text-gray-300">{trait.description}</p>
                      </div>
                    </GlassCard>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
