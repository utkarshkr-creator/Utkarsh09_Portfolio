'use client';

import React, { useEffect, useState } from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope, FaFileArrowDown } from 'react-icons/fa6';
import { FaChartLine } from 'react-icons/fa6';
import { 
  SiNodedotjs, SiTypescript, SiReact, SiDocker, SiPostgresql, 
  SiMongodb, SiRedis, SiNextdotjs, SiPython, SiGo 
} from 'react-icons/si';

const floatingSkills = [
  { icon: SiNodedotjs, top: '10%', left: '5%', delay: '0s', duration: '6s' },
  { icon: SiTypescript, top: '20%', right: '8%', delay: '1s', duration: '7s' },
  { icon: SiReact, bottom: '25%', left: '10%', delay: '2s', duration: '5s' },
  { icon: SiDocker, top: '60%', right: '5%', delay: '0.5s', duration: '8s' },
  { icon: SiPostgresql, top: '35%', left: '3%', delay: '1.5s', duration: '6s' },
  { icon: SiMongodb, bottom: '15%', right: '12%', delay: '2.5s', duration: '7s' },
  { icon: SiRedis, top: '15%', right: '15%', delay: '3s', duration: '5s' },
  { icon: SiNextdotjs, bottom: '35%', left: '8%', delay: '0.8s', duration: '6s' },
  { icon: SiPython, top: '45%', right: '3%', delay: '1.2s', duration: '7s' },
  { icon: SiGo, bottom: '10%', left: '15%', delay: '2s', duration: '8s' },
];

export const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const roles = ['Backend Engineer', 'Competitive Programmer', 'Systems Engineer'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [highlightedIndices, setHighlightedIndices] = useState<number[]>([]);

  // Typing animation effect
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

  // Random skill highlight effect - random number of skills
  useEffect(() => {
    const interval = setInterval(() => {
      const count = Math.floor(Math.random() * 4) + 1; // 1 to 4 skills
      const indices: number[] = [];
      while (indices.length < count) {
        const randomIndex = Math.floor(Math.random() * floatingSkills.length);
        if (!indices.includes(randomIndex)) {
          indices.push(randomIndex);
        }
      }
      setHighlightedIndices(indices);
      
      // Remove highlight after 1.5 seconds
      setTimeout(() => setHighlightedIndices([]), 1500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background Paint Splashes */}
      <div className="hidden md:block absolute top-1/4 left-1/4 w-96 h-96 bg-accent-primary/10 dark:bg-[#BFA181]/30 rounded-full blur-[120px] -z-10"></div>
      <div className="hidden md:block absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-secondary/10 dark:bg-[#D4A574]/30 rounded-full blur-[120px] -z-10"></div>
      <div className="hidden md:block absolute top-1/2 left-1/2 w-72 h-72 bg-transparent dark:bg-[#E8D5B7]/20 rounded-full blur-[100px] -z-10"></div>

      {/* Floating Skill Icons with Random Highlight */}
      {floatingSkills.map((skill, index) => {
        const IconComponent = skill.icon;
        const isHighlighted = highlightedIndices.includes(index);
        return (
          <div
            key={index}
            className={`hidden md:block absolute pointer-events-none transition-all duration-500 text-gray-300/50 dark:text-gray-700/50 md:text-gray-300 md:dark:text-gray-700 ${
              isHighlighted 
                ? 'md:text-gray-800 md:dark:text-gray-200 md:scale-125' 
                : ''
            }`}
            style={{
              top: skill.top,
              left: skill.left,
              right: skill.right,
              bottom: skill.bottom,
              animation: `float ${skill.duration} ease-in-out infinite`,
              animationDelay: skill.delay,
            }}
          >
            <IconComponent size={28} />
          </div>
        );
      })}

      {/* CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
      `}</style>

      {/* Hero Layout: Image left, content right */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-8 relative z-10">
        {/* Profile Image */}
        <div className="w-48 h-48 md:w-80 md:h-80 rounded-lg p-1 bg-gradient-to-br from-accent-primary to-accent-secondary group">
          <div className="w-full h-full rounded-lg bg-bg-secondary overflow-hidden relative">
            <img src="/profile.png" alt="Utkarsh Kumar" className="w-full h-full object-cover object-[0%_1px]" />
            <div className="absolute inset-0 bg-accent-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-text-primary dark:text-gray-100">
            Hi, I&apos;m Utkarsh Kumar
          </h1>
          {/* Typing Animation */}
          <div className="h-12 mb-8">
            <p className="text-2xl md:text-3xl font-medium text-accent-primary dark:text-accent-secondary">
              {typedText}
              <span className="inline-block w-1 h-8 ml-1 bg-accent-primary dark:bg-accent-secondary align-middle animate-blink"></span>
            </p>
          </div>
          <p className="text-xl md:text-2xl text-text-secondary dark:text-gray-300 mb-10 leading-relaxed">
            M.Tech @ <strong className="text-text-primary dark:text-gray-100">IIIT Allahabad</strong> <br className="hidden md:block" />
            Scale AI · Expert @Codeforces · Knight @LeetCode
          </p>
          {/* CTA + Social Icons */}
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-2">
            <a 
              href="https://drive.google.com/file/d/17_-JWOKj5VKlpFWogRP2QD1Xk5JAK9U1/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-bold rounded-full hover:shadow-lg hover:shadow-accent-primary/25 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <FaFileArrowDown size={18} /> Download Resume
            </a>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <a href="https://github.com/utkarshkr-creator" target="_blank" rel="noopener noreferrer" className="text-text-secondary dark:text-gray-400 hover:text-accent-primary hover:-translate-y-1 transition-all duration-300">
                <FaGithub size={28} />
              </a>
              <a href="https://www.linkedin.com/in/utkarshkr09/" target="_blank" rel="noopener noreferrer" className="text-text-secondary dark:text-gray-400 hover:text-accent-primary hover:-translate-y-1 transition-all duration-300">
                <FaLinkedin size={28} />
              </a>
              <a href="https://twitter.com/Utkarsh9401" target="_blank" rel="noopener noreferrer" className="text-text-secondary dark:text-gray-400 hover:text-accent-primary hover:-translate-y-1 transition-all duration-300">
                <FaTwitter size={28} />
              </a>
              <a href="mailto:2022krutkarsh@gmail.com" className="text-text-secondary dark:text-gray-400 hover:text-accent-primary hover:-translate-y-1 transition-all duration-300">
                <FaEnvelope size={28} />
              </a>
              <a href="https://codolio.com/profile/DarkGradiator" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-text-secondary dark:text-gray-400 hover:text-accent-primary hover:-translate-y-1 transition-all duration-300 font-semibold">
                <FaChartLine size={24} />
                <span className="text-lg">Codolio</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
