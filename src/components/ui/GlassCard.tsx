import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  hoverEffect = true,
  onClick
}) => {
  return (
    <div 
      className={`
        bg-bg-primary rounded-lg p-6 shadow-material-1 border border-transparent
        dark:bg-[#1a1a1a] dark:border-l-4 dark:border-l-[#6200EE] dark:border-t dark:border-t-[#1a1a1a] dark:shadow-2xl
        ${hoverEffect ? 'transition-all duration-300 hover:shadow-material-3 dark:hover:border-l-[#03DAC6] dark:hover:shadow-[0_0_30px_rgba(98,0,238,0.3)] hover:-translate-y-1' : ''}
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
