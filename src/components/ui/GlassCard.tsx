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
        bg-glass-bg backdrop-blur-md border border-glass-border rounded-2xl p-6 shadow-lg
        ${hoverEffect ? 'transition-all duration-300 hover:border-accent-primary/30 hover:shadow-accent-primary/10 hover:-translate-y-1' : ''}
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
