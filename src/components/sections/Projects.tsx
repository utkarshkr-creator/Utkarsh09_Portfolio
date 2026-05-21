'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Section } from '../ui/Section';
import { Badge } from '../ui/Badge';
import { FaGithub, FaArrowRight, FaImage, FaXmark } from 'react-icons/fa6';
import { FiExternalLink } from 'react-icons/fi';
import { getFeaturedProjects, Project } from '@/db';
import Link from 'next/link';
import { ScrollReveal } from '../ui/ScrollReveal';

// Enhanced ProjectCard component with better styling
const renderPoint = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="font-bold text-text-primary dark:text-white">{part.slice(2, -2)}</strong>;
    }
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
};

interface ProjectCardProps {
  project: Project;
  index: number;
  onViewArchitecture: (imagePath: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onViewArchitecture }) => {
  return (
    <ScrollReveal delay={index * 150}>
      <div className="relative group h-full">
        {/* Gradient border effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
        
        <div className="relative bg-white dark:bg-[#121212] rounded-2xl p-6 border border-gray-200 dark:border-gray-800 group-hover:border-transparent transition-all duration-300 h-full flex flex-col">
          {/* Header with gradient accent */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center text-white font-bold text-lg">
                  {project.title.charAt(0)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary dark:text-white group-hover:text-accent-primary dark:group-hover:text-[#D4A574] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-text-muted dark:text-gray-500">{project.subtitle}</p>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              {project.demo && (
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-accent-secondary/10 dark:bg-[#D4A574]/10 flex items-center justify-center text-accent-secondary dark:text-[#D4A574] hover:bg-accent-secondary hover:text-white dark:hover:bg-[#D4A574] dark:hover:text-black transition-all"
                  title="Live Demo"
                >
                  <FiExternalLink size={16} />
                </a>
              )}
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-accent-primary/10 dark:bg-[#BFA181]/20 flex items-center justify-center text-accent-primary dark:text-[#E8D5B7] hover:bg-accent-primary hover:text-white dark:hover:bg-[#BFA181] dark:hover:text-white transition-all"
                title="View Source"
              >
                <FaGithub size={18} />
              </a>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tech.slice(0, 5).map((tech) => (
              <span 
                key={tech} 
                className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 dark:from-[#BFA181]/20 dark:to-[#D4A574]/20 text-accent-primary dark:text-[#E8D5B7] border border-accent-primary/20 dark:border-[#BFA181]/30"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 5 && (
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-text-muted">
                +{project.tech.length - 5} more
              </span>
            )}
          </div>

          {/* Description Points */}
          <ul className="space-y-3 mb-6 flex-grow">
            {project.points.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-text-secondary dark:text-gray-300 leading-relaxed">
                <span className="text-accent-primary dark:text-[#D4A574] mt-0.5 text-lg">▹</span>
                <span>{renderPoint(point)}</span>
              </li>
            ))}
          </ul>

          {/* Footer Actions */}
          <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100 dark:border-gray-800 mt-auto">
            {project.demo && (
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent-secondary dark:text-[#D4A574] hover:underline"
              >
                Live Demo <FiExternalLink size={14} />
              </a>
            )}
            {project.architectureImage && (
              <button 
                onClick={() => onViewArchitecture(project.architectureImage!)}
                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                <FaImage size={12} /> Architecture
              </button>
            )}
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent-primary dark:text-[#E8D5B7] hover:underline ml-auto"
            >
              View Code <FaArrowRight size={12} />
            </a>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

export const Projects: React.FC = () => {
  const featuredProjects = getFeaturedProjects();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);
  
  return (
    <Section id="projects" title="Featured Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featuredProjects.map((project, index) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            index={index} 
            onViewArchitecture={setSelectedImage}
          />
        ))}
      </div>
      <div className="text-center mt-10">
        <Link 
          href="/projects"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-bold rounded-full hover:shadow-lg hover:shadow-accent-primary/25 transition-all duration-300 transform hover:-translate-y-0.5"
        >
          View All Projects <FaArrowRight />
        </Link>
      </div>

      {/* Global Fullscreen Image Modal via Portal */}
      {mounted && selectedImage && createPortal(
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-6xl h-full flex items-center justify-center" onClick={e => e.stopPropagation()}>
            <button 
              className="absolute top-0 right-0 text-white hover:text-accent-primary transition-colors bg-black/80 p-3 rounded-full z-50 hover:bg-black"
              onClick={() => setSelectedImage(null)}
            >
              <FaXmark size={24} />
            </button>
            <img 
              src={selectedImage} 
              alt="Architecture Diagram" 
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>,
        document.body
      )}
    </Section>
  );
};
