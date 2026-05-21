export interface Skill {
    id: string;
    name: string;
    iconName: string;
    category: 'languages' | 'backend' | 'database' | 'infrastructure' | 'core';
}

export const skillsData: Skill[] = [
    // Languages
    { id: 'cpp', name: 'C/C++', iconName: 'SiCplusplus', category: 'languages' },
    { id: 'go', name: 'Go', iconName: 'SiGo', category: 'languages' },
    { id: 'typescript', name: 'TypeScript', iconName: 'SiTypescript', category: 'languages' },
    { id: 'python', name: 'Python', iconName: 'SiPython', category: 'languages' },
    { id: 'java', name: 'Java', iconName: 'FaJava', category: 'languages' },

    // Backend & Systems
    { id: 'nodejs', name: 'Node.js', iconName: 'SiNodedotjs', category: 'backend' },
    { id: 'expressjs', name: 'Express', iconName: 'SiExpress', category: 'backend' },
    { id: 'redis', name: 'Redis (Streams/PubSub)', iconName: 'SiRedis', category: 'backend' },
    { id: 'websockets', name: 'WebSockets', iconName: 'SiSocketdotio', category: 'backend' },
    { id: 'webrtc', name: 'WebRTC', iconName: 'SiWebrtc', category: 'backend' },

    // Databases
    { id: 'postgresql', name: 'PostgreSQL', iconName: 'SiPostgresql', category: 'database' },
    { id: 'timescaledb', name: 'TimescaleDB', iconName: 'SiTimescale', category: 'database' },
    { id: 'mongodb', name: 'MongoDB', iconName: 'SiMongodb', category: 'database' },

    // Infrastructure
    { id: 'docker', name: 'Docker', iconName: 'SiDocker', category: 'infrastructure' },
    { id: 'aws', name: 'AWS (EC2, S3)', iconName: 'SiAmazon', category: 'infrastructure' },
    { id: 'github-actions', name: 'GitHub Actions', iconName: 'SiGithubactions', category: 'infrastructure' },

    // Core
    { id: 'distributed-systems', name: 'Distributed Systems', iconName: 'FaServer', category: 'core' },
    { id: 'low-latency', name: 'Low-Latency Systems', iconName: 'FaCloud', category: 'core' },
    { id: 'system-design', name: 'System Design', iconName: 'FaCode', category: 'core' },
];

export const skillCategories = {
    languages: 'Languages',
    backend: 'Backend & Systems',
    database: 'Databases',
    infrastructure: 'Infrastructure',
    core: 'Core',
};
