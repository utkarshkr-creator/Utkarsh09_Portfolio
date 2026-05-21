export interface HigherEducation {
    id: string;
    degree: string;
    institution: string;
    shortName: string;
    period: string;
    cgpa: string;
    gradientFrom: 'primary' | 'secondary';
}

export interface Schooling {
    id: string;
    level: string;
    school: string;
    board: string;
    score: string;
}

export const higherEducationData: HigherEducation[] = [
    {
        id: 'mtech',
        degree: 'M.Tech (IT)',
        institution: 'IIIT Allahabad',
        shortName: 'IIIT',
        period: '2024 - 2026',
        cgpa: '9.20/10.0',
        gradientFrom: 'primary',
    },
    {
        id: 'btech',
        degree: 'B.Tech (IT)',
        institution: 'Muzaffarpur Institute of Technology',
        shortName: 'MIT',
        period: '2019 - 2023',
        cgpa: '8.21/10.0',
        gradientFrom: 'secondary',
    },
];

export const schoolingData: Schooling[] = [
    {
        id: 'intermediate',
        level: 'Intermediate (12th)',
        school: 'Gurukul Vidyapeeth',
        board: 'CBSE Board',
        score: '83.4%',
    },
    {
        id: 'matriculation',
        level: 'Matriculation (10th)',
        school: 'Gurukul Vidyapeeth',
        board: 'CBSE Board',
        score: '10.0 CGPA',
    },
];
