'use client';

import React, { useEffect, useState } from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa6';
import { FaChartLine } from 'react-icons/fa6';

export const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const roles = ['Full Stack Developer', 'Competitive Programmer', 'Software Engineer'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typedText.length < currentRole.length) {
          setTypedText(currentRole.substring(0, typedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(currentRole.substring(0, typedText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, roleIndex]);

  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-primary/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-secondary/20 rounded-full blur-[100px] -z-10 animate-pulse delay-1000"></div>

      {/* Hero Layout: Image left, content right */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Profile Image */}
        <div className="w-48 h-48 md:w-80 md:h-80 rounded-lg p-1 bg-gradient-to-br from-accent-primary to-accent-secondary group">
          <div className="w-full h-full rounded-lg bg-bg-secondary overflow-hidden relative">
            <img src="/profile.png" alt="Utkarsh Kumar" className="w-full h-full object-cover object-[0%_1px]" />
            <div className="absolute inset-0 bg-accent-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
            Hi, I'm Utkarsh Kumar
          </h1>
          {/* Typing Animation */}
          <div className="h-12 mb-8">
            <p className="text-2xl md:text-3xl font-medium text-accent-primary">
              {typedText}
              <span className="inline-block w-1 h-8 ml-1 bg-accent-primary align-middle animate-blink"></span>
            </p>
          </div>
          <p className="text-xl md:text-2xl text-text-secondary mb-10 leading-relaxed">
            M.Tech student at <strong className="text-text-primary">IIIT Allahabad</strong> <br className="hidden md:block" />
            Competitive Programmer | Full Stack Developer
          </p>
          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-6">
            <a href="https://github.com/utkarshkr-creator" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent-primary hover:-translate-y-1 transition-all duration-300">
              <FaGithub size={28} />
            </a>
            <a href="https://twitter.com/Utkarsh9401" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent-primary hover:-translate-y-1 transition-all duration-300">
              <FaTwitter size={28} />
            </a>
            <a href="mailto:2022krutkarsh@gmail.com" className="text-text-secondary hover:text-accent-primary hover:-translate-y-1 transition-all duration-300">
              <FaEnvelope size={28} />
            </a>
            <a href="https://www.linkedin.com/in/utkarshkr09/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent-primary hover:-translate-y-1 transition-all duration-300">
              <FaLinkedin size={28} />
            </a>
            <a href="https://codolio.com/profile/DarkGradiator" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-text-secondary hover:text-accent-primary hover:-translate-y-1 transition-all duration-300 font-semibold">
              <FaChartLine size={24} />
              <span className="text-lg">Codolio</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
