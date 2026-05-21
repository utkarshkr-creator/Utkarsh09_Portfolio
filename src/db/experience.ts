export interface ExperienceItem {
    id: string;
    role: string;
    company: string;
    period: string;
    location: string;
    points: string[];
}

export const experienceData: ExperienceItem[] = [
    {
        id: 'scale-ai',
        role: 'Software Engineer',
        company: 'Scale AI',
        period: 'Oct 2023 – July 2024',
        location: 'Remote',
        points: [
            'Engineered automated validation scripts in Python and C++ for RLHF pipelines, resolving hallucination patterns for 300+ algorithmic solutions and achieving a 25% reduction in semantic errors.',
            'Shipped production-grade full-stack features by architecting reusable React components and optimizing Express backend services, improving overall model output quality by 15–20%.',
            'Developed high-performance data processing scripts to analyze thousands of model responses, conducting root-cause analysis to ensure production-level code quality for core LLM training workflows.',
        ],
    },
    {
        id: 'easy-webs',
        role: 'Frontend Developer Intern',
        company: 'Easy Webs',
        period: 'Nov 2022 – Dec 2022',
        location: 'Remote',
        points: [
            'Enhanced a React web application, resulting in a 50% increase in conversion rate and 20% growth in revenue within one month by implementing a data-driven UX redesign and analyzing session data.',
        ],
    },
];
