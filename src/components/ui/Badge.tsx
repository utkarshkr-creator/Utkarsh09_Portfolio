import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, className = '' }) => {
  return (
    <span className={`
      px-3 py-1 rounded-full text-sm font-medium 
      bg-gray-200 text-text-primary
      ${className}
    `}>
      {children}
    </span>
  );
};
