export interface ResearchItem {
    id: string;
    title: string;
    description: string[];
}

export const researchData: ResearchItem[] = [
    {
        id: 'dzkif',
        title: 'Decentralized ZK Identity Framework',
        description: [
            'Designed and developed a decentralized identity framework using zk-SNARKs (Groth16) and ERC-735, enabling selective disclosure and on-chain verification of user credentials while preserving privacy for DeFi applications.',
            'The Decentralized ZK Identity Framework (DZKIF) successfully demonstrates a practical architecture for self-sovereign identity in Web3.',
        ],
    },
];
