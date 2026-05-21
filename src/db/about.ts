export interface AboutTrait {
    id: string;
    title: string;
    description: string;
    iconType: 'brain' | 'rocket' | 'book' | 'users';
}

export const aboutIntro = {
    whoIAm: {
        paragraph1: `Backend Engineer and Systems developer, currently pursuing M.Tech at IIIT Allahabad (CGPA: 9.20, Rank 1 in Specialization). Previously at Scale AI, shipping full-stack features and high-performance data processing scripts across Python, C++, React, and Express.`,
        paragraph2: `I architect fault-tolerant distributed systems — from real-time trading engines with event sourcing and Go concurrency to WebRTC conferencing with custom signaling. I compete seriously on Codeforces (Expert, 1647) and LeetCode (Knight, 2010).`,
        highlights: {
            institution: 'IIIT Allahabad',
            skills: ['distributed systems', 'competitive programming'],
        },
    },
};

export const aboutTraitsData: AboutTrait[] = [
    {
        id: 'problem-solver',
        title: 'Problem Solver',
        description: `Codeforces Expert (1647) · LeetCode Knight (2010, top 2.38%) · Meta Hacker Cup Round 2 · ACM-ICPC Regionals`,
        iconType: 'brain',
    },
    {
        id: 'builder',
        title: 'Builder',
        description: `High-frequency trading engines, event-driven architectures, real-time WebSocket systems, P2P video conferencing.`,
        iconType: 'rocket',
    },
    {
        id: 'continuous-learner',
        title: 'Continuous Learner',
        description: `From Go concurrency patterns to Redis Streams event sourcing — always going deeper into systems internals.`,
        iconType: 'book',
    },
    {
        id: 'team-player',
        title: 'Team Player',
        description: `Placement Coordinator at IIIT Allahabad. Drove outreach to 75+ companies, grew recruiter pool by 30%.`,
        iconType: 'users',
    },
];
