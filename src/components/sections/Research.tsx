import React from 'react';
import { Section } from '../ui/Section';
import { GlassCard } from '../ui/GlassCard';
import { FaFlask } from 'react-icons/fa6';

export const Research: React.FC = () => {
  return (
    <Section id="research" title="Research & Works" className="bg-bg-secondary">
      <GlassCard className="max-w-4xl mx-auto">
        <h3 className="text-xl font-bold text-accent-primary mb-4 flex items-center gap-2">
          <FaFlask /> Privacy Preserving Identity Verification in Web3 for DeFi
        </h3>
        <p className="text-text-secondary leading-relaxed">
          Designed and developed a decentralized identity framework using zk-SNARKs (Groth16) and ERC-735, 
          enabling selective disclosure and on-chain verification of user credentials while preserving privacy 
          for DeFi applications.
        </p>
      </GlassCard>
    </Section>
  );
};
