'use client';

import React from 'react';
import { ThemeToggle } from '../ui/ThemeToggle';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-glass-bg backdrop-blur-md border-b border-glass-border py-4 z-50 dark:bg-[#0a0a0a]/95 dark:border-b-2 dark:border-[#6200EE] dark:backdrop-blur-xl">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent-primary to-accent-secondary dark:bg-none dark:text-[#03DAC6] cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
          Utkarsh Kumar
        </h3>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-8">
            {['About', 'Education', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-text-secondary hover:text-accent-primary transition-colors relative group dark:text-gray-300"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};
