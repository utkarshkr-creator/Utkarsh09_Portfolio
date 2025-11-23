import React from 'react';
import { Section } from '../ui/Section';
import { GlassCard } from '../ui/GlassCard';
import { FaBrain, FaRocket, FaBookOpen, FaUsers } from 'react-icons/fa6';

export const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Who I Am */}
        <GlassCard className="relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent-primary to-accent-secondary"></div>
          <h3 className="text-2xl font-bold text-accent-primary dark:text-[#03DAC6] mb-4">Who I Am</h3>
          <p className="text-lg leading-relaxed text-text-secondary dark:text-gray-300 mb-4">
            I'm a passionate software developer currently pursuing my Master's in Technology at <strong className="text-text-primary dark:text-white">IIIT Allahabad</strong>, where I'm maintaining a CGPA of 9.20. My journey in tech started during my undergraduate years at MIT Muzaffarpur, and since then, I've been driven by the challenge of building high-performance, scalable applications that solve real-world problems.
          </p>
          <p className="text-lg leading-relaxed text-text-secondary dark:text-gray-300">
            With a strong foundation in <strong className="text-text-primary dark:text-white">full-stack development</strong> and <strong className="text-text-primary dark:text-white">competitive programming</strong>, I specialize in creating real-time distributed systems, implementing advanced cryptographic solutions, and designing microservices architectures. I'm equally comfortable working with cutting-edge technologies like WebRTC and WebSockets as I am diving deep into zero-knowledge proofs and blockchain development.
          </p>
        </GlassCard>

        {/* The Way I Am */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-accent-primary dark:text-[#03DAC6]">
            The Way I Am
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GlassCard className="flex items-start gap-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <div className="p-3 rounded-lg bg-accent-primary/10 text-accent-primary text-2xl">
                <FaBrain />
              </div>
              <div>
                <h4 className="text-xl font-bold text-accent-primary dark:text-[#BB86FC] mb-2">Problem Solver</h4>
                <p className="text-text-secondary dark:text-gray-300">
                  I thrive on tackling complex algorithmic challenges. My competitive programming journey, with achievements like qualifying for Meta Hacker Cup Round 2 and reaching Knight status on LeetCode, reflects my analytical mindset.
                </p>
              </div>
            </GlassCard>

            <GlassCard className="flex items-start gap-4 hover:bg-white/5 transition-colors">
              <div className="p-3 rounded-lg bg-accent-primary/10 text-accent-primary text-2xl">
                <FaRocket />
              </div>
              <div>
                <h4 className="text-xl font-bold text-accent-primary dark:text-[#BB86FC] mb-2">Builder</h4>
                <p className="text-text-secondary dark:text-gray-300">
                  From real-time trading engines to zero-knowledge authentication systems, I love building projects that push technical boundaries. Each project is an opportunity to learn and implement something new.
                </p>
              </div>
            </GlassCard>

            <GlassCard className="flex items-start gap-4 hover:bg-white/5 transition-colors">
              <div className="p-3 rounded-lg bg-accent-primary/10 text-accent-primary text-2xl">
                <FaBookOpen />
              </div>
              <div>
                <h4 className="text-xl font-bold text-accent-primary dark:text-[#BB86FC] mb-2">Continuous Learner</h4>
                <p className="text-text-secondary dark:text-gray-300">
                  Technology evolves rapidly, and so do I. Whether it's mastering a new framework, exploring blockchain technology, or diving into distributed systems, I'm always expanding my knowledge.
                </p>
              </div>
            </GlassCard>

            <GlassCard className="flex items-start gap-4 hover:bg-white/5 transition-colors">
              <div className="p-3 rounded-lg bg-accent-primary/10 text-accent-primary text-2xl">
                <FaUsers />
              </div>
              <div>
                <h4 className="text-xl font-bold text-accent-primary dark:text-[#BB86FC] mb-2">Team Player</h4>
                <p className="text-text-secondary dark:text-gray-300">
                  As a Placement Coordinator at IIIT Allahabad and former Senior Coordinator at MOXIE, I've learned the value of collaboration, leadership, and helping others succeed.
                </p>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </Section>
  );
};
