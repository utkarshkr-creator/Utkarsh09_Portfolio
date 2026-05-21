import type { Metadata } from "next";
import React from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { FaGithub, FaArrowRight, FaArrowLeft } from 'react-icons/fa6';
import { FiExternalLink } from 'react-icons/fi';
import { getAllProjects, Project } from '@/db';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Projects",
  description: "Backend projects by Utkarsh Kumar - Real-Time Trading Engine, Microservices Architecture, Payment Systems, and more.",
};

const renderPoint = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="font-bold text-text-primary dark:text-white">{part.slice(2, -2)}</strong>;
    }
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="relative group h-full">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
      
      <div className="relative bg-white dark:bg-[#121212] rounded-2xl p-6 border border-gray-200 dark:border-gray-800 group-hover:border-transparent transition-all duration-300 h-full flex flex-col">
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
              >
                <FiExternalLink size={16} />
              </a>
            )}
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-accent-primary/10 dark:bg-[#BFA181]/20 flex items-center justify-center text-accent-primary dark:text-[#E8D5B7] hover:bg-accent-primary hover:text-white dark:hover:bg-[#BFA181] dark:hover:text-white transition-all"
            >
              <FaGithub size={18} />
            </a>
          </div>
        </div>

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

        <ul className="space-y-3 mb-6 flex-grow">
          {project.points.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-text-secondary dark:text-gray-300 leading-relaxed">
              <span className="text-accent-primary dark:text-[#D4A574] mt-0.5 text-lg">▹</span>
              <span>{renderPoint(point)}</span>
            </li>
          ))}
        </ul>

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
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent-primary dark:text-[#E8D5B7] hover:underline"
          >
            View Code <FaArrowRight size={12} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default function ProjectsPage() {
  const allProjects = getAllProjects();
  
  return (
    <main className="min-h-screen bg-bg-primary dark:bg-[#0a0a0a]">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-accent-primary dark:text-[#D4A574] hover:text-accent-secondary mb-8 transition-colors"
          >
            <FaArrowLeft /> Back to Home
          </Link>
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-primary to-accent-secondary">
                All Projects
              </span>
            </h1>
            <p className="text-text-secondary dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Backend systems, distributed architectures, and full-stack applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {allProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
