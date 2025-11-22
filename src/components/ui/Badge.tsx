import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, className = '' }) => {
  return (
    <span className={`
      px-3 py-1 rounded-full text-xs font-medium 
      bg-accent-primary/10 text-accent-primary border border-accent-primary/20
      ${className}
    `}>
      {children}
    </span>
  );
};
