import type { Metadata } from "next";
import React from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { GlassCard } from '@/components/ui/GlassCard';
import { FaArrowLeft, FaFlask } from 'react-icons/fa6';
import { researchData } from '@/db';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Research",
  description: "Research work by Utkarsh Kumar - Decentralized ZK Identity Framework using zk-SNARKs for DeFi applications.",
};

export default function ResearchPage() {
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
                Research & Works
              </span>
            </h1>
            <p className="text-text-secondary dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Contributions in cryptography, blockchain, and distributed systems.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {researchData.map((research) => (
              <GlassCard key={research.id}>
                <h3 className="text-xl font-bold text-accent-primary dark:text-[#D4A574] mb-4 flex items-center gap-2">
                  <FaFlask /> {research.title}
                </h3>
                <div className="space-y-3">
                  {research.description.map((paragraph, index) => (
                    <p key={index} className="text-text-secondary dark:text-gray-300 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
