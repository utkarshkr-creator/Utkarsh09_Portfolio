import React from 'react';
import { Section } from '../ui/Section';
import { GlassCard } from '../ui/GlassCard';
import { Badge } from '../ui/Badge';
import { FaGithub, FaArrowRight } from 'react-icons/fa6';
import { FiExternalLink } from 'react-icons/fi';

export const Projects: React.FC = () => {
  const projects = [
    {
      title: "Real-Time Trading Engine",
      subtitle: "High-Frequency Trading System",
      tech: ['Node.js', 'Next.js','TypeScript','Docker','WebSocket','Microservices', 'Socket.IO', 'Express.js', 'PostgreSQL', 'Redis'],
      points: [
        "Engineered a high-throughput trading engine capable of processing 5000+ orders/sec with sub-millisecond latency",
        "Implemented event-driven microservices architecture using Kafka for reliable order matching and trade execution",
        "Optimized database performance handling 1500+ concurrent transactions/sec with data consistency"
      ],
      github: "https://github.com/utkarshkr-creator/REAL-TIME-TRADING-ENGINE",
      demo: null
    },
    {
      title: "FinPay Wallet",
      subtitle: "Digital Payment Solution",
      tech: ['React', 'Node.js', 'PostgreSQL', 'Turbo Repo', 'Docker'],
      points: [
        "Developed a comprehensive digital wallet with P2P payments and bank transfers using secure webhook handlers",
        "Architected a scalable monorepo system reducing build times by 30% through optimized dependency management",
        "Integrated robust authentication and transaction logging for financial security compliance"
      ],
      github: "https://github.com/utkarshkr-creator/FinPay-Wallet",
      demo: null
    },
    {
      title: "PeerStream",
      subtitle: "P2P Video Streaming",
      tech: ['WebRTC', 'Socket.IO', 'Node.js', 'React'],
      points: [
        "Built a real-time video streaming application enabling direct peer-to-peer communication",
        "Implemented signaling server using Socket.IO for seamless connection establishment",
        "Optimized media streams for low-latency transmission across varying network conditions"
      ],
      github: "https://github.com/utkarshkr-creator/PeerStream",
      demo: null
    },
    {
      title: "Quizzeria",
      subtitle: "Real-time Quiz Platform",
      tech: ['Socket.IO', 'Redis', 'Node.js', 'React'],
      points: [
        "Developed an interactive quiz platform supporting concurrent users with real-time score updates",
        "Implemented admin dashboard for quiz management and live leaderboard functionality",
        "Utilized Redis for caching active game states to ensure high performance"
      ],
      github: "https://github.com/utkarshkr-creator/Quizzeria",
      demo: null
    },
    {
      title: "Plinko Game",
      subtitle: "Physics-based Betting Game",
      tech: ['Canvas API', 'React', 'Node.js', 'Physics Engine'],
      points: [
        "Created a Stake.com inspired betting game with custom physics engine for ball collisions",
        "Implemented provably fair algorithm to ensure game transparency and user trust",
        "Designed responsive UI with smooth animations for engaging user experience"
      ],
      github: "https://github.com/utkarshkr-creator/Plinko",
      demo: null
    },
    {
      title: "AlumConnect",
      subtitle: "Alumni Networking Platform",
      tech: ['MongoDB', 'Express', 'React', 'Node.js'],
      points: [
        "Platform for connecting alumni with students and professionals",
        "Full-stack application with user authentication and profiles",
        "Network building and professional connection features"
      ],
      github: "https://github.com/utkarshkr-creator/AlumConnect",
      demo: null
    },
    {
      title: "ZK-FingerPrint Verification",
      subtitle: "Zero-Knowledge Biometric Authentication",
      tech: ['Circom', 'SnarkJS', 'Node.js', 'React', 'Zero-Knowledge Proofs'],
      points: [
        "Implements zk-SNARKs (Groth16) for privacy-preserving fingerprint verification",
        "Biometric authentication without revealing actual fingerprint data",
        "Circom circuits with Powers of Tau ceremony integration"
      ],
      github: "https://github.com/utkarshkr-creator/ZK-FingerPrintVerification",
      demo: null
    },
    {
      title: "Medium Clone",
      subtitle: "Full-Stack Blogging Platform",
      tech: ['React', 'TypeScript', 'Hono', 'Cloudflare Workers', 'PostgreSQL'],
      points: [
        "Serverless blogging platform deployed on Cloudflare Workers",
        "Rich text editor with markdown support and user authentication",
        "Edge-optimized architecture for global low-latency content delivery"
      ],
      github: "https://github.com/utkarshkr-creator/Medium",
      demo: "https://master--medium-utkarsh09.netlify.app/"
    },
    {
      title: "Airline Management System",
      subtitle: "Microservices-based Airline Platform",
      tech: ['Node.js', 'Express.js', 'MySQL', 'Sequelize', 'Microservices', 'REST API'],
      points: [
        "Comprehensive microservices ecosystem for airline operations management",
        "RESTful APIs for flight search, booking management, and seat reservation",
        "Database modeling with Sequelize ORM and transaction handling"
      ],
      github: "https://github.com/utkarshkr-creator/Airline-Service",
      demo: null
    }
  ];

  return (
    <Section id="projects" title="Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <GlassCard key={index} className="flex flex-col h-full group hover:border-accent-primary/40">
            <div className="mb-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-2">
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-text-muted hover:text-accent-secondary transition-colors"
                      title="Live Demo"
                    >
                      <FiExternalLink size={18} />
                    </a>
                  )}
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-accent-primary transition-colors"
                    title="View Source"
                  >
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>
              <p className="text-sm text-text-muted mb-3">{project.subtitle}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <Badge key={tech} className="bg-accent-primary/5 border-accent-primary/10 text-accent-primary/80">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            <ul className="space-y-2 mb-6 flex-grow">
              {project.points.map((point, i) => (
                <li key={i} className="text-sm text-text-secondary pl-4 relative">
                  <span className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-accent-primary/50"></span>
                  {point}
                </li>
              ))}
            </ul>
            <div className="flex gap-3 items-center mt-auto">
              {project.demo && (
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent-secondary hover:text-accent-primary transition-colors"
                >
                  Live Demo <FiExternalLink size={12} />
                </a>
              )}
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent-primary hover:text-accent-secondary transition-colors"
              >
                View Source <FaArrowRight size={12} />
              </a>
            </div>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
};
