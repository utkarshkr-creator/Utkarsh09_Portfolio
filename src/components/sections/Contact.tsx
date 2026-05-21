'use client';

import React from 'react';
import { Section } from '../ui/Section';
import { FaPaperPlane, FaArrowRight } from 'react-icons/fa6';
import Link from 'next/link';
import { ScrollReveal } from '../ui/ScrollReveal';

export const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Get In Touch">
      <ScrollReveal>
        <div className="relative group max-w-2xl mx-auto">
          {/* Gradient border effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-2xl opacity-50 group-hover:opacity-100 blur transition-all duration-500"></div>
          
          <div className="relative bg-white dark:bg-[#121212] rounded-2xl p-12 border border-gray-200 dark:border-gray-800 group-hover:border-transparent transition-all duration-300 text-center">
            <h3 className="text-2xl font-bold mb-4 text-text-primary dark:text-[#D4A574]">Let&apos;s Connect</h3>
            <p className="text-text-secondary dark:text-gray-300 mb-8 text-lg">
              I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, 
              I&apos;ll try my best to get back to you!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="mailto:2022krutkarsh@gmail.com" 
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-bold hover:shadow-lg hover:shadow-accent-primary/25 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <FaPaperPlane /> Say Hello
              </a>
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-transparent border-2 border-accent-primary dark:border-[#D4A574] text-accent-primary dark:text-[#D4A574] font-bold rounded-full hover:bg-accent-primary/10 dark:hover:bg-[#D4A574]/10 transition-all duration-300"
              >
                All Contact Info <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
};
