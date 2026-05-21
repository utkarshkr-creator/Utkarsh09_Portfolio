export interface Project {
    id: string;
    title: string;
    subtitle: string;
    tech: string[];
    points: string[];
    github: string;
    demo: string | null;
    architectureImage?: string;
    featured?: boolean; // Show on homepage
}

// Ordered with backend-heavy projects first for SDE roles
export const projectsData: Project[] = [
    // Backend-heavy projects first
    {
        id: 'real-time-trading-platform',
        title: 'High-Frequency Trading Engine',
        subtitle: '5,000+ orders/sec, <2ms latency',
        tech: ['Go', 'Node.js', 'Express', 'React', 'Next.js', 'Redis', 'TimescaleDB', 'Docker', 'WebSockets'],
        points: [
            'Engineered a deterministic, in-memory Limit Order Book (LOB) in **Go**, achieving raw matching speeds of **~1.8 million ops/sec** (sub-microsecond latency).',
            'Designed a decoupled event-driven architecture utilizing **Redis** for Pub/Sub, allowing horizontal scaling of **Node.js/Express** API and WebSocket servers.',
            'Implemented Write-Ahead Logging (WAL) and periodic state snapshotting in the core engine to ensure zero data loss and rapid crash recovery.',
            'Built comprehensive load-testing suites, validating an end-to-end network throughput of **~5,000 orders/sec** across the entire stack.',
            'Integrated **TimescaleDB / PostgreSQL** with a dedicated background worker to asynchronously consume trade events, keeping the critical path unblocked.',
            'Developed a custom **Node.js WebSocket server** with intelligent message batching (100ms aggregation) to route live market data to thousands of clients.'
        ],
        github: 'https://github.com/utkarshkr-creator/REAL-TIME-TRADING-ENGINE',
        demo: null,
        architectureImage: '/tradingArch.png',
        featured: true,
    },
    {
        id: 'finpay-wallet',
        title: 'FinPAY – Wallet & Payments Platform',
        subtitle: 'P2P Wallet & Merchant Dashboard',
        tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Turborepo'],
        points: [
            'Developed dual-frontend P2P wallet and merchant dashboard on a Turborepo monorepo sharing typed API contracts.',
            'Reduced CI/CD build times by 30% via shared build cache across apps.',
            'Integrated robust authentication and transaction logging for financial security compliance.',
        ],
        github: 'https://github.com/utkarshkr-creator/FinPay-Wallet',
        demo: null,
        architectureImage: '/finpayArch.png',
        featured: true,
    },
    {
        id: 'peerstream',
        title: 'PeerStream – Video Conferencing App',
        subtitle: 'Full-Mesh WebRTC Video Conferencing',
        tech: ['WebRTC', 'Socket.io', 'Node.js', 'React', 'TypeScript'],
        points: [
            'Engineered full-mesh WebRTC video conferencing achieving sub-100ms P2P latency without a media relay server.',
            'Custom signaling server (Socket.io + Node.js) handles SDP negotiation and ICE candidate exchange for reliable NAT traversal.',
        ],
        github: 'https://github.com/utkarshkr-creator/PeerStream',
        demo: null,
        featured: true,
    },
    {
        id: 'airline-management',
        title: 'Airline Management System',
        subtitle: 'Microservices-based Airline Platform',
        tech: ['Node.js', 'Express.js', 'MySQL', 'Sequelize', 'Microservices', 'REST API'],
        points: [
            'Comprehensive microservices ecosystem for airline operations management.',
            'RESTful APIs for flight search, booking management, and seat reservation.',
            'Database modeling with Sequelize ORM and transaction handling.',
        ],
        github: 'https://github.com/utkarshkr-creator/Airline-Service',
        demo: null,
        featured: true,
    },
    {
        id: 'quizzeria',
        title: 'Quizzeria',
        subtitle: 'Real-time Quiz Platform',
        tech: ['Node.js', 'Socket.IO', 'Redis', 'React'],
        points: [
            'Developed an interactive quiz platform supporting concurrent users with real-time score updates.',
            'Implemented admin dashboard for quiz management and live leaderboard functionality.',
            'Utilized Redis for caching active game states to ensure high performance.',
        ],
        github: 'https://github.com/utkarshkr-creator/Quizzeria',
        demo: null,
        featured: false,
    },
    {
        id: 'zk-fingerprint',
        title: 'ZK-FingerPrint Verification',
        subtitle: 'Zero-Knowledge Biometric Authentication',
        tech: ['Circom', 'SnarkJS', 'Node.js', 'React', 'Zero-Knowledge Proofs'],
        points: [
            'Implements zk-SNARKs (Groth16) for privacy-preserving fingerprint verification.',
            'Biometric authentication without revealing actual fingerprint data.',
            'Circom circuits with Powers of Tau ceremony integration.',
        ],
        github: 'https://github.com/utkarshkr-creator/ZK-FingerPrintVerification',
        demo: null,
        featured: false,
    },
    {
        id: 'alumconnect',
        title: 'AlumConnect',
        subtitle: 'Alumni Networking Platform',
        tech: ['MongoDB', 'Express', 'React', 'Node.js'],
        points: [
            'Platform for connecting alumni with students and professionals.',
            'Full-stack application with user authentication and profiles.',
            'Network building and professional connection features.',
        ],
        github: 'https://github.com/utkarshkr-creator/AlumConnect',
        demo: null,
        featured: false,
    },
    {
        id: 'medium-clone',
        title: 'Medium Clone',
        subtitle: 'Full-Stack Blogging Platform',
        tech: ['Hono', 'Cloudflare Workers', 'PostgreSQL', 'TypeScript', 'React'],
        points: [
            'Serverless blogging platform deployed on Cloudflare Workers.',
            'Rich text editor with markdown support and user authentication.',
            'Edge-optimized architecture for global low-latency content delivery.',
        ],
        github: 'https://github.com/utkarshkr-creator/Medium',
        demo: 'https://master--medium-utkarsh09.netlify.app/',
        featured: false,
    },
    {
        id: 'plinko-game',
        title: 'Plinko Game',
        subtitle: 'Physics-based Betting Game',
        tech: ['Canvas API', 'React', 'Node.js', 'Physics Engine'],
        points: [
            'Created a Stake.com inspired betting game with custom physics engine for ball collisions.',
            'Implemented provably fair algorithm to ensure game transparency and user trust.',
            'Designed responsive UI with smooth animations for engaging user experience.',
        ],
        github: 'https://github.com/utkarshkr-creator/Plinko',
        demo: null,
        featured: false,
    },
];

// Helper functions
export const getFeaturedProjects = () => projectsData.filter(p => p.featured);
export const getAllProjects = () => projectsData;
