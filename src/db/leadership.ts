export interface LeadershipRole {
    id: string;
    title: string;
    organization: string;
    period: string;
    points: string[];
    iconType: 'userTie' | 'users';
    hoverBorderColor: string;
}

export const leadershipData: LeadershipRole[] = [
    {
        id: 'placement-coordinator',
        title: 'Placement Coordinator',
        organization: 'IIIT Allahabad',
        period: 'May 2025 – Present',
        points: [
            'Drove outreach to 75+ companies, growing the recruiter pool by 30% and securing 10+ first-time campus recruiters.',
            'Analyzed placement data to surface salary trends, contributing to a 15% increase in average package.',
        ],
        iconType: 'userTie',
        hoverBorderColor: 'hover:border-accent-primary/30',
    },
    {
        id: 'senior-coordinator-moxie',
        title: 'Senior Coordinator',
        organization: 'MOXIE (Technical Club of MIT)',
        period: 'May 2021 – Aug 2023',
        points: [
            'Led the organization & execution of various technical events and played a pivotal role in orchestrating a successful Tech-Fest.',
        ],
        iconType: 'users',
        hoverBorderColor: 'hover:border-accent-secondary/30',
    },
];
