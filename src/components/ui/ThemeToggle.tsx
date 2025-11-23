'use client';

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa6';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-bg-tertiary dark:bg-[#1a1a1a] hover:bg-accent-primary/10 dark:hover:bg-[#2a1a4a] transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <FaMoon className="text-xl text-text-primary" />
      ) : (
        <FaSun className="text-xl text-yellow-400" />
      )}
    </button>
  );
};
