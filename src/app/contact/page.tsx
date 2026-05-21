import type { Metadata } from "next";
import React from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { GlassCard } from '@/components/ui/GlassCard';
import { FaArrowLeft, FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaLocationDot } from 'react-icons/fa6';
import { SiLeetcode, SiCodeforces } from 'react-icons/si';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Utkarsh Kumar - Get in touch via email, GitHub, LinkedIn, or other platforms.",
};

const contactLinks = [
  {
    id: 'email',
    label: 'Email',
    value: '2022krutkarsh@gmail.com',
    href: 'mailto:2022krutkarsh@gmail.com',
    icon: FaEnvelope,
    color: 'text-red-500',
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'Utkarsh',
    href: 'https://github.com/utkarshkr-creator',
    icon: FaGithub,
    color: 'text-gray-400',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'Utkarsh',
    href: 'https://linkedin.com/in/utkarshkr09',
    icon: FaLinkedin,
    color: 'text-blue-500',
  },
  {
    id: 'twitter',
    label: 'Twitter / X',
    value: '@utkarsh',
    href: 'https://twitter.com/utkarsh9401',
    icon: FaTwitter,
    color: 'text-sky-400',
  },
  {
    id: 'leetcode',
    label: 'LeetCode',
    value: 'Utkarsh',
    href: 'https://leetcode.com/u0904',
    icon: SiLeetcode,
    color: 'text-yellow-500',
  },
  {
    id: 'codeforces',
    label: 'Codeforces',
    value: 'Utkarsh',
    href: 'https://codeforces.com/profile/utkarsh_09',
    icon: SiCodeforces,
    color: 'text-red-400',
  },
];

export default function ContactPage() {
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
                Contact Me
              </span>
            </h1>
            <p className="text-text-secondary dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Feel free to reach out through any of these platforms!
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <GlassCard className="mb-8 text-center">
              <div className="flex items-center justify-center gap-3 text-xl">
                <FaLocationDot className="text-accent-primary dark:text-[#D4A574]" />
                <span className="text-text-secondary dark:text-gray-300">
                  <strong className="text-text-primary dark:text-white">IIIT Allahabad</strong>, Prayagraj, India
                </span>
              </div>
            </GlassCard>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contactLinks.map((contact) => {
                const IconComponent = contact.icon;
                return (
                  <a
                    key={contact.id}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <GlassCard className="flex items-center gap-4 hover:border-accent-primary/50 transition-all group">
                      <div className={`text-3xl ${contact.color} group-hover:scale-110 transition-transform`}>
                        <IconComponent />
                      </div>
                      <div>
                        <p className="text-sm text-text-muted dark:text-gray-400">{contact.label}</p>
                        <p className="font-semibold text-text-primary dark:text-white group-hover:text-accent-primary dark:group-hover:text-[#D4A574] transition-colors">
                          {contact.value}
                        </p>
                      </div>
                    </GlassCard>
                  </a>
                );
              })}
            </div>
            
            <div className="text-center mt-12">
              <a 
                href="mailto:2022krutkarsh@gmail.com" 
                className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-bold text-lg hover:shadow-lg transition-all"
              >
                <FaEnvelope /> Send me an Email
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
