import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope, FaChartLine } from 'react-icons/fa6';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-glass-border text-center bg-bg-primary">
      <div className="container mx-auto px-6">
        <div className="flex justify-center gap-8 mb-6 flex-wrap">
          <a href="https://github.com/utkarshkr-creator" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-text-secondary hover:text-accent-primary transition-colors">
            <FaGithub /> GitHub
          </a>
          <a href="https://twitter.com/Utkarsh9401" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-text-secondary hover:text-accent-primary transition-colors">
            <FaTwitter /> Twitter
          </a>
          <a href="https://www.linkedin.com/in/utkarshkr09/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-text-secondary hover:text-accent-primary transition-colors">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="mailto:2022krutkarsh@gmail.com" className="flex items-center gap-2 text-text-secondary hover:text-accent-primary transition-colors">
            <FaEnvelope /> Email
          </a>
          <a href="https://codolio.com/profile/DarkGradiator" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-text-secondary hover:text-accent-primary transition-colors">
            <FaChartLine /> Codolio
          </a>
        </div>
        <p className="text-sm text-text-muted">
          © 2025 Utkarsh Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
