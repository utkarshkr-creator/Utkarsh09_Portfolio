'use client';

import React, { useState } from 'react';
import { ThemeToggle } from '../ui/ThemeToggle';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaXmark, FaFileArrowDown } from 'react-icons/fa6';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '/about' },
    { label: 'Skills', href: '/skills' },
    { label: 'Projects', href: '/projects' },
    { label: 'Achievements', href: '/achievements' },
    { label: 'Experience', href: '/experience' },
    { label: 'Contact', href: '/contact' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-glass-bg backdrop-blur-md border-b border-glass-border py-4 z-50 dark:bg-[#0a0a0a]/95 dark:border-b-2 dark:border-[#BFA181] dark:backdrop-blur-xl">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" onClick={closeMenu} className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#BFA181] to-[#D4A574] flex items-center justify-center text-white font-bold text-sm">
              UK
            </div>
          </Link>
          
          <div className="flex items-center gap-4">
            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`text-sm font-medium transition-colors relative group ${
                      isActive 
                        ? 'text-accent-primary dark:text-[#D4A574]' 
                        : 'text-text-secondary hover:text-accent-primary dark:text-gray-300'
                    }`}
                  >
                    {item.label}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent-primary transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </Link>
                );
              })}
            </div>

            {/* Resume Download - Desktop */}
            <a
              href="https://drive.google.com/file/d/17_-JWOKj5VKlpFWogRP2QD1Xk5JAK9U1/view"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-full border-2 border-accent-primary dark:border-[#D4A574] text-accent-primary dark:text-[#D4A574] hover:bg-accent-primary hover:text-white dark:hover:bg-[#D4A574] dark:hover:text-black transition-all duration-300"
            >
              <FaFileArrowDown size={14} /> Resume
            </a>
            
            <ThemeToggle />
            
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-text-primary dark:text-white hover:text-accent-primary dark:hover:text-[#D4A574] transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaXmark size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu Drawer Wrapper */}
      <div 
        className={`fixed inset-0 z-50 pointer-events-none overflow-hidden md:hidden ${isMenuOpen ? 'visible' : 'invisible'}`}
        aria-hidden={!isMenuOpen}
        style={{ transition: 'visibility 0s linear 0.3s', ...(isMenuOpen && { transition: 'visibility 0s' }) }}
      >
        <div className={`absolute top-0 right-0 h-full w-72 bg-white dark:bg-[#121212] pointer-events-auto transform transition-transform duration-300 ease-in-out shadow-2xl ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="p-6">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-lg font-bold text-accent-primary dark:text-[#D4A574]">Menu</h3>
              <button
                onClick={closeMenu}
                className="p-2 text-text-primary dark:text-white hover:text-accent-primary dark:hover:text-[#D4A574] transition-colors"
                aria-label="Close menu"
              >
                <FaXmark size={24} />
              </button>
            </div>
            
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={closeMenu}
                    className={`px-4 py-3 rounded-lg font-medium transition-all ${
                      isActive 
                        ? 'bg-accent-primary/10 text-accent-primary dark:bg-[#BFA181]/20 dark:text-[#D4A574]' 
                        : 'text-text-secondary dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Resume Download - Mobile */}
            <div className="mt-6">
              <a
                href="https://drive.google.com/file/d/17_-JWOKj5VKlpFWogRP2QD1Xk5JAK9U1/view"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-bold hover:shadow-lg transition-all"
              >
                <FaFileArrowDown size={16} /> View Resume
              </a>
            </div>
            
            {/* Home link at bottom */}
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
              <Link
                href="/"
                onClick={closeMenu}
                className="block px-4 py-3 rounded-lg font-medium text-accent-primary dark:text-[#D4A574] hover:bg-accent-primary/10 dark:hover:bg-[#BFA181]/20 transition-all"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
