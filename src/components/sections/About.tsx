'use client';

import React from 'react';
import { FaArrowRight, FaFlask, FaUserTie, FaBrain, FaUsers, FaGraduationCap, FaTrophy } from 'react-icons/fa6';
import Link from 'next/link';
import { ScrollReveal } from '../ui/ScrollReveal';

const highlights = [
  { icon: FaTrophy, label: 'Rank 1 in Specialization' },
  { icon: FaBrain, label: 'CF Expert · LC Knight' },
  { icon: FaUserTie, label: 'Ex-Scale AI' },
  { icon: FaFlask, label: 'ZK Research' },
  { icon: FaGraduationCap, label: 'M.Tech @ IIITA' },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-2xl opacity-20 group-hover:opacity-60 blur transition-all duration-500"></div>
              
              <div className="relative bg-white dark:bg-[#121212] rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-800 group-hover:border-transparent transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  {/* Left: Text */}
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-accent-primary to-accent-secondary">
                      About Me
                    </h2>
                    <p className="text-text-secondary dark:text-gray-300 leading-relaxed">
                      Backend Engineer pursuing <strong className="text-text-primary dark:text-white">M.Tech at IIIT Allahabad</strong> (CGPA: 9.20 · Rank 1 in Specialization). 
                      Previously at <strong className="text-text-primary dark:text-white">Scale AI</strong>, shipping full-stack features and high-performance data processing scripts in Python, C++, React, and Express. 
                      I build fault-tolerant distributed systems and real-time applications.
                    </p>
                  </div>
                  
                  {/* Right: Link */}
                  <Link 
                    href="/about"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-bold rounded-full hover:shadow-lg hover:shadow-accent-primary/25 transition-all duration-300 whitespace-nowrap w-fit"
                  >
                    Learn More <FaArrowRight />
                  </Link>
                </div>
                
                {/* Highlights Row */}
                <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
                  {highlights.map((item, i) => (
                    <span 
                      key={i}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-primary/5 dark:bg-[#1a1a2e] text-accent-primary dark:text-[#D4A574] text-sm font-medium border border-accent-primary/10 dark:border-[#BFA181]/30"
                    >
                      <item.icon className="text-base" /> {item.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
