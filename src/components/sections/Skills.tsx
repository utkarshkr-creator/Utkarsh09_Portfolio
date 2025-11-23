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
        <h3 className="text-2xl font-bold text-center mb-8 text-text-secondary dark:text-[#03DAC6]">Technology Stack</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {techStack.map((skill) => (
            <div key={skill.name} className="flex items-center gap-2 px-5 py-3 rounded-lg bg-gray-100 dark:bg-[#1a1a1a] border-2 border-gray-200 dark:border-0 dark:border-l-4 dark:border-l-[#6200EE] hover:border-accent-primary/50 hover:bg-accent-primary/10 dark:hover:bg-[#2a1a4a] dark:hover:border-l-[#03DAC6] dark:hover:shadow-[0_0_20px_rgba(3,218,198,0.3)] transition-all duration-300 group">
              <span className="text-2xl text-text-muted dark:text-[#03DAC6] group-hover:text-accent-primary dark:group-hover:text-[#BB86FC] transition-colors">
                {skill.icon}
              </span>
              <span className="font-semibold text-text-primary dark:text-gray-100">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
