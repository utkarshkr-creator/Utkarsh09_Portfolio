import React from 'react';

interface SectionProps {
  id: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
  return (
    <section id={id} className={`py-20 relative ${className}`}>
      <div className="container mx-auto px-6">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-accent-primary dark:text-accent-secondary">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};
