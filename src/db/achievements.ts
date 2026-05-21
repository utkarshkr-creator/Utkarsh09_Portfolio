import { FaMeta, FaTrophy, FaChartLine, FaCode } from 'react-icons/fa6';
import { SiCodeforces, SiLeetcode } from 'react-icons/si';
import { IconType } from 'react-icons';

export interface Achievement {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    icon: IconType;
    iconColor: string;
    hoverBorderColor: string;
    featured?: boolean; // Show on homepage
}

export const achievementsData: Achievement[] = [
    {
        id: 'codeforces',
        title: 'Codeforces',
        subtitle: 'Expert (Max: 1647)',
        description: 'Achieved Expert rating with a peak of 1647. Best global rank: #804 in Codeforces Round 1062.',
        icon: SiCodeforces,
        iconColor: 'text-red-500',
        hoverBorderColor: 'hover:border-red-500/50',
        featured: true,
    },
    {
        id: 'leetcode',
        title: 'LeetCode',
        subtitle: 'Knight (Max: 2010)',
        description: 'Reached Knight rating with a peak of 2010. Top 2.38% globally. Best rank: #976 in Weekly Contest 463.',
        icon: SiLeetcode,
        iconColor: 'text-yellow-500',
        hoverBorderColor: 'hover:border-yellow-500/50',
        featured: true,
    },
    {
        id: 'meta-hacker-cup',
        title: 'Meta Hacker Cup 2025',
        subtitle: 'Advanced to Round 2',
        description: 'Advanced to Round 2 of Meta Hacker Cup 2025. Ranked #670 globally in Round 2.',
        icon: FaMeta,
        iconColor: 'text-blue-500',
        hoverBorderColor: 'hover:border-blue-500/50',
        featured: true,
    },
    {
        id: 'acm-icpc',
        title: 'ACM-ICPC 2020',
        subtitle: 'Regional Qualifier',
        description: 'Qualified for ACM-ICPC 2020 Regionals. Secured Rank #86 at the Kanpur site.',
        icon: FaTrophy,
        iconColor: 'text-purple-500',
        hoverBorderColor: 'hover:border-purple-500/50',
        featured: false,
    },
    {
        id: 'atcoder',
        title: 'AtCoder',
        subtitle: '4-Kyu (Max: 1204)',
        description: 'Achieved 4-Kyu rating with a peak of 1204. Best global rank: #1241 in ABC 442.',
        icon: FaCode,
        iconColor: 'text-gray-400',
        hoverBorderColor: 'hover:border-gray-500/50',
        featured: false,
    },
    {
        id: 'rank-1-specialization',
        title: 'Rank 1 in Specialization',
        subtitle: 'Aug 2024 – Jun 2026',
        description: 'Secured Rank 1 in M.Tech IT Specialization at IIIT Allahabad.',
        icon: FaTrophy,
        iconColor: 'text-amber-400',
        hoverBorderColor: 'hover:border-amber-400/50',
        featured: false,
    },
    {
        id: 'codolio',
        title: 'Codolio',
        subtitle: 'C Score: 1514',
        description: '14 Badges including 100 Days Badge 2025, Problem Solving, and multiple language badges.',
        icon: FaChartLine,
        iconColor: 'text-green-500',
        hoverBorderColor: 'hover:border-green-500/50',
        featured: false,
    },
];

// Helper functions
export const getFeaturedAchievements = () => achievementsData.filter(a => a.featured);
export const getAllAchievements = () => achievementsData;
