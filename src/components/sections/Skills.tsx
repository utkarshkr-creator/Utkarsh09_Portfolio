import React from 'react';
import { Section } from '../ui/Section';
import { Badge } from '../ui/Badge';
import { 
  SiNextdotjs, SiReact, SiNodedotjs, SiTypescript, SiJavascript, 
  SiSocketdotio, SiWebrtc, SiDocker, SiPostgresql, SiMongodb, 
  SiRedis, SiCplusplus, SiHtml5, SiAmazon, SiGit, SiPython 
} from 'react-icons/si';
import { FaCode, FaServer, FaDatabase, FaCloud } from 'react-icons/fa6';

export const Skills: React.FC = () => {
  const techStack = [
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'React.js', icon: <SiReact /> },
    { name: 'Node.js', icon: <SiNodedotjs /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'WebSocket', icon: <SiSocketdotio /> },
    { name: 'WebRTC', icon: <SiWebrtc /> },
    { name: 'Docker', icon: <SiDocker /> },
    { name: 'PostgreSQL', icon: <SiPostgresql /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'Redis', icon: <SiRedis /> },
    { name: 'Python', icon: <SiPython /> },
  ];

  const others = [
    { name: 'C/C++', icon: <SiCplusplus /> },
    { name: 'HTML/CSS', icon: <SiHtml5 /> },
    { name: 'AWS', icon: <SiAmazon /> },
    { name: 'Git/GitHub', icon: <SiGit /> },
    { name: 'Data Structures', icon: <FaCode /> },
    { name: 'Algorithms', icon: <FaCode /> },
    { name: 'REST API', icon: <FaServer /> },
    { name: 'System Design', icon: <FaCloud /> },
  ];

  return (
    <Section id="skills" title="Skills">
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-center mb-8 text-text-secondary">Technology Stack</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {techStack.map((skill) => (
            <div key={skill.name} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-accent-primary/50 hover:bg-accent-primary/10 transition-all duration-300 group">
              <span className="text-xl text-text-muted group-hover:text-accent-primary transition-colors">
                {skill.icon}
              </span>
              <span className="font-medium text-text-primary">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold text-center mb-8 text-text-secondary">Others</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {others.map((skill) => (
            <div key={skill.name} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-accent-secondary/50 hover:bg-accent-secondary/10 transition-all duration-300 group">
              <span className="text-xl text-text-muted group-hover:text-accent-secondary transition-colors">
                {skill.icon}
              </span>
              <span className="font-medium text-text-primary">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
