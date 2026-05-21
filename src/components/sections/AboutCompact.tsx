import React from 'react';
import { FaArrowRight, FaFlask, FaUserTie, FaBrain, FaUsers } from 'react-icons/fa6';
import Link from 'next/link';

export const AboutCompact: React.FC = () => {
  return (
    <div className="h-full">
      <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-accent-primary to-accent-secondary">
        About Me
      </h2>
      
      <div className="relative group h-[calc(100%-60px)]">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-2xl opacity-30 group-hover:opacity-100 blur transition-all duration-500"></div>
        
        <div className="relative bg-white dark:bg-[#121212] rounded-2xl p-6 border border-gray-200 dark:border-gray-800 group-hover:border-transparent transition-all duration-300 h-full flex flex-col">
          <p className="text-base leading-relaxed text-text-secondary dark:text-gray-300 mb-5">
            Backend Engineer pursuing M.Tech at <strong className="text-text-primary dark:text-white">IIIT Allahabad</strong> (CGPA: 9.20). 
            I specialize in building high-performance distributed systems and microservices.
          </p>
          
          <div className="grid grid-cols-2 gap-2 mb-5 flex-grow">
            <span className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 dark:from-[#BFA181]/20 dark:to-[#D4A574]/20 text-accent-primary dark:text-[#D4A574] text-sm font-medium border border-accent-primary/20 dark:border-[#BFA181]/30">
              <FaBrain /> Problem Solver
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 dark:from-[#BFA181]/20 dark:to-[#D4A574]/20 text-accent-primary dark:text-[#D4A574] text-sm font-medium border border-accent-primary/20 dark:border-[#BFA181]/30">
              <FaUsers /> Team Player
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 dark:from-[#BFA181]/20 dark:to-[#D4A574]/20 text-accent-primary dark:text-[#D4A574] text-sm font-medium border border-accent-primary/20 dark:border-[#BFA181]/30">
              <FaUserTie /> Placement Coord
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 dark:from-[#BFA181]/20 dark:to-[#D4A574]/20 text-accent-primary dark:text-[#D4A574] text-sm font-medium border border-accent-primary/20 dark:border-[#BFA181]/30">
              <FaFlask /> ZK Research
            </span>
          </div>
          
          <Link 
            href="/about"
            className="inline-flex items-center gap-2 text-accent-primary dark:text-[#D4A574] hover:text-accent-secondary font-semibold transition-colors group/link mt-auto"
          >
            Learn more about me 
            <FaArrowRight className="group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};
