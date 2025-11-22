import React from 'react';
import { Section } from '../ui/Section';
import { GlassCard } from '../ui/GlassCard';
import { FaPaperPlane } from 'react-icons/fa6';

export const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Get In Touch">
      <GlassCard className="max-w-2xl mx-auto text-center py-12">
        <h3 className="text-2xl font-bold mb-4">Let&apos;s Connect</h3>
        <p className="text-text-secondary mb-8 text-lg">
          I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, 
          I&apos;ll try my best to get back to you!
        </p>
        <a 
          href="mailto:2022krutkarsh@gmail.com" 
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-accent-primary text-bg-primary font-bold hover:bg-accent-secondary transition-colors duration-300"
        >
          <FaPaperPlane /> Say Hello
        </a>
      </GlassCard>
    </Section>
  );
};
