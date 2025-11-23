import React from 'react';
import { Section } from '../ui/Section';
import { GlassCard } from '../ui/GlassCard';
import { FaFlask } from 'react-icons/fa6';

export const Research: React.FC = () => {
  return (
    <Section id="research" title="Research & Works" className="bg-transparent">
      <GlassCard className="max-w-4xl mx-auto">
        <h3 className="text-xl font-bold text-accent-primary dark:text-[#03DAC6] mb-4 flex items-center gap-2">
          <FaFlask /> Decentralized ZK Identity Framework
        </h3>
        <p className="text-text-secondary dark:text-gray-300 leading-relaxed">
          Designed and developed a decentralized identity framework using zk-SNARKs (Groth16) and ERC-735, 
          enabling selective disclosure and on-chain verification of user credentials while preserving privacy 
          for DeFi applications.
        </p>
        <p className="text-text-secondary dark:text-gray-300 leading-relaxed">
          The Decentralized ZK Identity Framework (DZKIF) successfully demonstrates a practical architecture for self-
sovereign identity in Web3.
        </p>
      </GlassCard>
    </Section>
  );
};
