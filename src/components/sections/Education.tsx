'use client';

import React from 'react';
import { Section } from '../ui/Section';
import { GlassCard } from '../ui/GlassCard';
import { FaGraduationCap, FaSchool } from 'react-icons/fa6';

export const Education: React.FC = () => {
  return (
    <Section id="education" title="Education" className="bg-transparent">
      <div className="max-w-5xl mx-auto relative">
        {/* Timeline Container */}
        <div className="hidden md:grid grid-cols-[1fr_60px_1fr] gap-0">
          
          {/* Master's Degree */}
          <div className="pr-8 pb-12 text-right">
            <GlassCard className="inline-block w-full text-left relative group hover:border-accent-primary/50 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center text-xl font-bold text-white shadow-lg shrink-0">
                  IIIT
                </div>
                <div>
                  <h3 className="text-xl font-bold text-accent-primary dark:text-[#03DAC6]">M.Tech (IT)</h3>
                  <p className="text-lg font-semibold text-text-primary dark:text-gray-100">IIIT Allahabad</p>
                </div>
              </div>
              <div className="flex justify-between items-center text-sm">
                <p className="text-text-muted">2024 - 2026</p>
                <p className="font-bold text-accent-secondary dark:text-[#BB86FC]">CGPA: 9.20/10.0</p>
              </div>
            </GlassCard>
          </div>

          {/* Timeline Marker 1 */}
          <div className="flex flex-col items-center relative">
            <div className="w-5 h-5 rounded-full bg-accent-primary border-4 border-bg-secondary dark:border-[#0a0a0a] z-10 shadow-[0_0_0_4px_#F5F5F5,0_0_20px_#6200EE] dark:shadow-[0_0_0_4px_#0a0a0a,0_0_20px_#6200EE] mt-8"></div>
            <div className="w-0.5 bg-gradient-to-b from-accent-primary to-accent-secondary flex-grow absolute top-8 bottom-[-2rem]"></div>
          </div>

          <div className="pl-8 pb-12"></div>

          {/* Bachelor's Degree */}
          <div className="pr-8"></div>

          {/* Timeline Marker 2 */}
          <div className="flex flex-col items-center relative">
            <div className="w-5 h-5 rounded-full bg-accent-secondary border-4 border-bg-secondary dark:border-[#0a0a0a] z-10 shadow-[0_0_0_4px_#F5F5F5,0_0_20px_#03DAC6] dark:shadow-[0_0_0_4px_#0a0a0a,0_0_20px_#03DAC6] mt-8"></div>
            {/* No line below last item */}
          </div>

          <div className="pl-8">
            <GlassCard className="inline-block w-full relative group hover:border-accent-secondary/50 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-secondary to-accent-primary flex items-center justify-center text-xl font-bold text-white shadow-lg shrink-0">
                  MIT
                </div>
                <div>
                  <h3 className="text-xl font-bold text-accent-primary">B.Tech (IT)</h3>
                  <p className="text-lg font-semibold text-text-primary">Muzaffarpur Institute of Technology</p>
                </div>
              </div>
              <div className="flex justify-between items-center text-sm">
                <p className="text-text-muted">2019 - 2023</p>
                <p className="font-bold text-accent-secondary">CGPA: 8.21/10.0</p>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-8 relative pl-8 border-l-2 border-accent-primary/30 ml-4">
          <div className="relative">
            <div className="absolute -left-[39px] top-6 w-5 h-5 rounded-full bg-accent-primary border-4 border-bg-secondary dark:border-[#0a0a0a] shadow-[0_0_0_4px_#F5F5F5] dark:shadow-[0_0_0_4px_#0a0a0a]"></div>
            <GlassCard>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center text-lg font-bold text-white shrink-0">
                  IIIT
                </div>
                <div>
                  <h3 className="text-lg font-bold text-accent-primary">M.Tech (IT)</h3>
                  <p className="font-semibold text-text-primary">IIIT Allahabad</p>
                </div>
              </div>
              <div className="flex justify-between items-center text-sm">
                <p className="text-text-muted">2024 - 2026</p>
                <p className="font-bold text-accent-secondary">CGPA: 9.20</p>
              </div>
            </GlassCard>
          </div>

          <div className="relative">
            <div className="absolute -left-[39px] top-6 w-5 h-5 rounded-full bg-accent-secondary border-4 border-bg-secondary dark:border-[#0a0a0a] shadow-[0_0_0_4px_#F5F5F5] dark:shadow-[0_0_0_4px_#0a0a0a]"></div>
            <GlassCard>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-secondary to-accent-primary flex items-center justify-center text-lg font-bold text-white shrink-0">
                  MIT
                </div>
                <div>
                  <h3 className="text-lg font-bold text-accent-primary">B.Tech (IT)</h3>
                  <p className="font-semibold text-text-primary">Muzaffarpur Institute of Technology</p>
                </div>
              </div>
              <div className="flex justify-between items-center text-sm">
                <p className="text-text-muted">2019 - 2023</p>
                <p className="font-bold text-accent-secondary">CGPA: 8.21</p>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Previous Education */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-text-secondary dark:text-[#03DAC6] flex items-center justify-center gap-3">
            <FaSchool /> Schooling
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GlassCard className="flex items-center gap-4 hover:bg-white/5">
              <div className="p-3 rounded-full bg-accent-primary/10 text-accent-primary">
                <FaGraduationCap size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-text-primary">Intermediate (12th)</h4>
                <p className="text-text-secondary dark:text-gray-300">Gurukul Vidyapeeth, CBSE Board</p>
                <p className="text-sm text-text-muted mt-1">83.4%</p>
              </div>
            </GlassCard>
            <GlassCard className="flex items-center gap-4 hover:bg-white/5">
              <div className="p-3 rounded-full bg-accent-primary/10 text-accent-primary">
                <FaGraduationCap size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-text-primary">Matriculation (10th)</h4>
                <p className="text-text-secondary">Gurukul Vidyapeeth, CBSE Board</p>
                <p className="text-sm text-text-muted mt-1">10.0 CGPA</p>
              </div>
            </GlassCard>
          </div>
        </div>

      </div>
    </Section>
  );
};
