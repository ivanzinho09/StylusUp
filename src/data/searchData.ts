import { Coins, Gamepad2, Code, Network, Lock, Wrench } from 'lucide-react';

export interface SearchItem {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    tags: string[];
    icon: any; // Lucide icon component
}

// Aggregate all searchable content from use cases
export const searchData: SearchItem[] = [
    // Development Tools & SDKs
    {
        id: 'scaffold-stylus',
        name: 'scaffold-stylus',
        description: 'Blazing fast tooling and frameworks to build, test, and deploy Stylus smart contracts',
        url: 'https://github.com/rkdud007/scaffold-stylus',
        category: 'Development Tools & SDKs',
        tags: ['tools', 'framework', 'sdk', 'development'],
        icon: Code,
    },
    {
        id: 'stylus-by-example',
        name: 'stylus-by-example',
        description: 'Code examples and tutorials for Stylus development',
        url: 'https://github.com/OffchainLabs/stylus-by-example',
        category: 'Development Tools & SDKs',
        tags: ['examples', 'tutorials', 'learning'],
        icon: Code,
    },
    {
        id: 'wizard',
        name: 'wizard',
        description: 'Stylus project wizard and scaffolding tool',
        url: 'https://thewizard.app/',
        category: 'Development Tools & SDKs',
        tags: ['wizard', 'scaffolding', 'tools'],
        icon: Code,
    },
    {
        id: 'bobcat-sdk',
        name: 'bobcat-sdk',
        description: 'SDK for building Stylus applications',
        url: 'https://github.com/Bobcat-BCAT/bobcat-sdk',
        category: 'Development Tools & SDKs',
        tags: ['sdk', 'tools', 'development'],
        icon: Code,
    },
    {
        id: 'awesome-stylus',
        name: 'awesome-stylus',
        description: 'Curated list of Stylus resources, tools, and libraries',
        url: 'https://github.com/OffchainLabs/awesome-stylus',
        category: 'Development Tools & SDKs',
        tags: ['resources', 'curated-list', 'tools'],
        icon: Code,
    },

    // DeFi Protocols
    {
        id: '9lives',
        name: '9lives.so',
        description: 'High-performance DeFi protocol built with Stylus',
        url: 'https://9lives.so',
        category: 'DeFi Protocols',
        tags: ['defi', 'protocol', 'finance'],
        icon: Coins,
    },
    {
        id: 'longtail',
        name: 'longtail',
        description: 'Rewards based AMM built with Stylus',
        url: 'https://github.com/fluidity-money/long.so',
        category: 'DeFi Protocols',
        tags: ['defi', 'amm', 'rewards'],
        icon: Coins,
    },
    {
        id: 'renegade',
        name: 'renegade',
        description: 'On-chain dark pool utilizing ZK-proofs for privacy',
        url: 'https://github.com/renegade-fi/renegade-stylus-contracts',
        category: 'DeFi Protocols',
        tags: ['defi', 'privacy', 'zk-proofs', 'dark-pool'],
        icon: Coins,
    },
    {
        id: 'stylus-sdk-defi',
        name: 'stylus-sdk',
        description: 'Rust SDK for building DeFi applications on Stylus',
        url: 'https://github.com/OffchainLabs/stylus-sdk-rs',
        category: 'DeFi Protocols',
        tags: ['sdk', 'rust', 'defi'],
        icon: Coins,
    },

    // Developer Experience
    {
        id: 'cargo-stylus-walnut',
        name: 'cargo-stylus-walnut',
        description: 'Enhanced cargo tooling for Stylus development',
        url: 'https://github.com/OffchainLabs/cargo-stylus-walnut',
        category: 'Developer Experience',
        tags: ['cargo', 'tools', 'rust'],
        icon: Wrench,
    },
    {
        id: 'arbitrum-stylus-starter-c',
        name: 'arbitrum-stylus-starter-c',
        description: 'C starter template for Arbitrum Stylus',
        url: 'https://github.com/OffchainLabs/arbitrum-stylus-starter-c',
        category: 'Developer Experience',
        tags: ['starter', 'template', 'c'],
        icon: Wrench,
    },
    {
        id: 'stylus-sdk-rs',
        name: 'stylus-sdk-rs',
        description: 'Official Rust SDK for Stylus smart contracts',
        url: 'https://github.com/OffchainLabs/stylus-sdk-rs',
        category: 'Developer Experience',
        tags: ['sdk', 'rust', 'official'],
        icon: Wrench,
    },

    // Advanced Cryptography
    {
        id: 'arkworks',
        name: 'arkworks',
        description: 'Rust ecosystem for zkSNARK programming',
        url: 'https://github.com/arkworks-rs',
        category: 'Advanced Cryptography',
        tags: ['cryptography', 'zk-snarks', 'rust'],
        icon: Lock,
    },
    {
        id: 'bellman',
        name: 'bellman',
        description: 'zkSNARK library for Rust',
        url: 'https://github.com/zkcrypto/bellman',
        category: 'Advanced Cryptography',
        tags: ['cryptography', 'zk-snarks', 'library'],
        icon: Lock,
    },
    {
        id: 'ed25519-dalek',
        name: 'ed25519-dalek',
        description: 'Ed25519 signature recovery and cryptographic primitives',
        url: 'https://github.com/fluidity-money/superposition-precompiles',
        category: 'Advanced Cryptography',
        tags: ['cryptography', 'ed25519', 'signatures'],
        icon: Lock,
    },
    {
        id: 'secp256k1',
        name: 'secp256k1',
        description: 'Rust secp256k1 library for cryptographic operations',
        url: 'https://github.com/rust-bitcoin/rust-secp256k1',
        category: 'Advanced Cryptography',
        tags: ['cryptography', 'secp256k1', 'bitcoin'],
        icon: Lock,
    },
    {
        id: 'bulletproofs',
        name: 'bulletproofs',
        description: 'Zero-knowledge proofs implementation in Rust',
        url: 'https://github.com/dalek-cryptography/bulletproofs',
        category: 'Advanced Cryptography',
        tags: ['cryptography', 'zero-knowledge', 'proofs'],
        icon: Lock,
    },

    // Bridges & Oracles
    {
        id: 'redstone-oracles',
        name: 'redstone-oracles',
        description: 'Cross-chain oracle network for Stylus',
        url: 'https://redstone.finance',
        category: 'Bridges & Oracles',
        tags: ['oracle', 'cross-chain', 'data-feeds'],
        icon: Network,
    },
    {
        id: 'wormhole',
        name: 'wormhole',
        description: 'Cross-chain messaging protocol',
        url: 'https://wormhole.com',
        category: 'Bridges & Oracles',
        tags: ['bridge', 'cross-chain', 'messaging'],
        icon: Network,
    },

    // Gaming & NFTs
    {
        id: 'stylus-by-example-gaming',
        name: 'stylus-by-example',
        description: 'Gaming and NFT examples for Stylus',
        url: 'https://github.com/OffchainLabs/stylus-by-example',
        category: 'Gaming & NFTs',
        tags: ['gaming', 'nft', 'examples'],
        icon: Gamepad2,
    },
    {
        id: 'erc721',
        name: 'erc721',
        description: 'NFT standard implementation documentation',
        url: 'https://docs.openzeppelin.com/contracts/4.x/erc721',
        category: 'Gaming & NFTs',
        tags: ['nft', 'erc721', 'standard'],
        icon: Gamepad2,
    },
];
