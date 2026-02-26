export interface EcosystemProject {
    id: string;               // URL slug, e.g. 'scaffold-stylus'
    name: string;
    tagline: string;          // short one-liner shown on card
    description: string;      // longer "About" text for detail page
    url: string;              // project website
    docsUrl?: string;
    githubUrl?: string;
    logo?: string;            // path to logo in /public/images/projects/
    categories: string[];     // at least one required
    language: string[];       // Rust | Move | C/C++
    fundingSource?: 'Stylus Sprint' | 'D.A.O Program' | 'Community' | 'None';
    status: 'live' | 'building';
    tags: string[];
    highlights?: string[];    // up to 5 bullet points for detail page
    stylusUsage?: string;     // "How does this project use Stylus?"
    socials?: {
        twitter?: string;
        discord?: string;
        telegram?: string;
    };
}

export const CATEGORIES = [
    'DeFi',
    'Infrastructure',
    'Dev Tools',
    'Gaming & NFTs',
    'Cryptography',
    'Bridges & Oracles',
] as const;

export const LANGUAGES = ['Rust', 'Move', 'C/C++'] as const;

export const FUNDING_SOURCES = [
    'Stylus Sprint',
    'D.A.O Program',
    'Community',
    'None',
] as const;

export const ecosystemProjects: EcosystemProject[] = [
    // ── Dev Tools ──────────────────────────────────────────────
    {
        id: 'scaffold-stylus',
        name: 'Scaffold Stylus',
        tagline: 'Blazing-fast tooling to build, test & deploy Stylus contracts',
        description:
            'Scaffold Stylus is a batteries-included starter kit for Arbitrum Stylus. Inspired by Scaffold-ETH, it provides a Hardhat-based development environment, Rust contract templates, and a Next.js front-end wired up to your local Stylus node — so you can go from zero to deployed in minutes.',
        url: 'https://github.com/rkdud007/scaffold-stylus',
        githubUrl: 'https://github.com/rkdud007/scaffold-stylus',
        categories: ['Dev Tools'],
        language: ['Rust'],
        fundingSource: 'Community',
        status: 'live',
        tags: ['tools', 'framework', 'sdk', 'development'],
        stylusUsage:
            'Provides pre-configured Cargo workspaces for writing Stylus smart contracts in Rust, with built-in deployment scripts targeting Arbitrum chains.',
    },
    {
        id: 'stylus-by-example',
        name: 'Stylus by Example',
        tagline: 'Learn Stylus through annotated, runnable code examples',
        description:
            'Stylus by Example is an open-source repository of annotated Rust code snippets that demonstrate core Stylus concepts — from storage and events to ERC-20/ERC-721 implementations and cryptographic primitives.',
        url: 'https://github.com/OffchainLabs/stylus-by-example',
        githubUrl: 'https://github.com/OffchainLabs/stylus-by-example',
        categories: ['Dev Tools'],
        language: ['Rust'],
        fundingSource: 'None',
        status: 'live',
        tags: ['examples', 'tutorials', 'learning'],
        stylusUsage:
            'Every example is a compilable Stylus contract written in Rust, covering the full Stylus ABI and storage model.',
    },
    {
        id: 'wizard',
        name: 'The Wizard',
        tagline: 'Project wizard & scaffolding tool for Stylus contracts',
        description:
            'The Wizard provides an interactive web interface to generate a ready-to-deploy Stylus project. Choose your language, contract template, and chain target; download a pre-configured ZIP in seconds.',
        url: 'https://thewizard.app/',
        categories: ['Dev Tools'],
        language: ['Rust', 'C/C++'],
        fundingSource: 'Stylus Sprint',
        status: 'live',
        tags: ['wizard', 'scaffolding', 'tools'],
        stylusUsage:
            'Generates Cargo or CMake projects pre-wired to the Stylus SDK, ready to cargo-stylus check and deploy.',
    },
    {
        id: 'bobcat-sdk',
        name: 'Bobcat SDK',
        tagline: 'SDK for building high-performance Stylus applications',
        description:
            'Bobcat SDK is a Rust library that extends the Stylus SDK with higher-level abstractions for common DeFi patterns, including vaults, AMMs, and price-feed integrations.',
        url: 'https://github.com/Bobcat-BCAT/bobcat-sdk',
        githubUrl: 'https://github.com/Bobcat-BCAT/bobcat-sdk',
        categories: ['Dev Tools', 'DeFi'],
        language: ['Rust'],
        fundingSource: 'Stylus Sprint',
        status: 'building',
        tags: ['sdk', 'tools', 'development'],
        stylusUsage:
            'Built on top of stylus-sdk-rs, exposes Stylus-native storage slots and call patterns to power complex DeFi composability.',
    },
    {
        id: 'awesome-stylus',
        name: 'Awesome Stylus',
        tagline: 'Curated list of Stylus resources, tools & libraries',
        description:
            'A community-maintained GitHub repository listing every notable Stylus project, SDK, tutorial, and tooling resource — the starting point for any Stylus developer.',
        url: 'https://github.com/OffchainLabs/awesome-stylus',
        githubUrl: 'https://github.com/OffchainLabs/awesome-stylus',
        categories: ['Dev Tools'],
        language: ['Rust'],
        fundingSource: 'None',
        status: 'live',
        tags: ['resources', 'curated-list', 'tools'],
        stylusUsage:
            'Aggregates the ecosystem by linking to Rust, AssemblyScript, and C/C++ Stylus projects.',
    },
    {
        id: 'cargo-stylus',
        name: 'cargo-stylus',
        tagline: 'Official Cargo subcommand for Stylus contract development',
        description:
            'cargo-stylus is the canonical CLI tool for compiling, checking, and deploying Rust smart contracts to Arbitrum Stylus. It handles WASM compilation, ABI export, activation, and gas estimation in one unified workflow.',
        url: 'https://github.com/OffchainLabs/cargo-stylus-walnut',
        githubUrl: 'https://github.com/OffchainLabs/cargo-stylus-walnut',
        categories: ['Dev Tools', 'Infrastructure'],
        language: ['Rust'],
        fundingSource: 'None',
        status: 'live',
        tags: ['cargo', 'tools', 'rust'],
        stylusUsage:
            'The primary deployment path for every Stylus Rust contract: cargo stylus check, deploy, verify.',
        highlights: [
            'One-command WASM compilation and deployment',
            'Built-in ABI generation',
            'Gas estimation before deployment',
            'Contract activation via cargo stylus activate',
        ],
    },

    // ── DeFi ────────────────────────────────────────────────────
    {
        id: '9lives',
        name: '9lives.so',
        tagline: 'High-performance DeFi protocol built with Stylus',
        description:
            '9lives is a cutting-edge DeFi protocol that leverages Stylus\'s computational headroom to run complex on-chain trading logic — including options pricing and liquidity management — that would be cost-prohibitive in solidity.',
        url: 'https://9lives.so',
        categories: ['DeFi'],
        language: ['Rust'],
        fundingSource: 'Stylus Sprint',
        status: 'live',
        tags: ['defi', 'protocol', 'finance'],
        stylusUsage:
            'Core pricing and settlement logic is written in Rust Stylus contracts, enabling on-chain Black-Scholes calculations without prohibitive gas costs.',
    },
    {
        id: 'longtail',
        name: 'Longtail',
        tagline: 'Rewards-based AMM powered by Stylus',
        description:
            'Longtail is an automated market maker built on Fluidity Money\'s Superposition testnet. It adds a rewards layer on top of standard AMM mechanics, incentivising both LPs and traders with fluid assets.',
        url: 'https://github.com/fluidity-money/long.so',
        githubUrl: 'https://github.com/fluidity-money/long.so',
        categories: ['DeFi'],
        language: ['Rust'],
        fundingSource: 'Community',
        status: 'live',
        tags: ['defi', 'amm', 'rewards'],
        stylusUsage:
            'Swap math and liquidity management are Stylus Rust contracts, replacing Uniswap v3 Solidity with Rust for improved gas efficiency.',
    },
    {
        id: 'renegade',
        name: 'Renegade',
        tagline: 'On-chain dark pool with ZK-proof privacy via Stylus',
        description:
            'Renegade is a fully on-chain dark pool where trades are matched inside zero-knowledge proofs and settled on Arbitrum. By running ZK verifiers as Stylus contracts, Renegade achieves private, trust-minimised order matching at scale.',
        url: 'https://renegade.fi',
        githubUrl: 'https://github.com/renegade-fi/renegade-stylus-contracts',
        categories: ['DeFi', 'Cryptography'],
        language: ['Rust'],
        fundingSource: 'D.A.O Program',
        status: 'building',
        tags: ['defi', 'privacy', 'zk-proofs', 'dark-pool'],
        stylusUsage:
            'ZK proof verifiers that are too gas-heavy for Solidity are implemented as Stylus Rust contracts, cutting verification cost by orders of magnitude.',
        highlights: [
            'Fully on-chain ZK-powered order matching',
            'Stylus Rust verifier contracts reduce gas by >90%',
            'Privacy-preserving trade settlement on Arbitrum One',
        ],
    },

    // ── Cryptography ─────────────────────────────────────────────
    {
        id: 'arkworks',
        name: 'Arkworks',
        tagline: 'Rust ecosystem for zkSNARK programming on Stylus',
        description:
            'Arkworks is a modular Rust library suite for zkSNARK-based cryptography. Several teams are porting arkworks primitives to run inside Stylus contracts, enabling efficient on-chain proof verification.',
        url: 'https://github.com/arkworks-rs',
        githubUrl: 'https://github.com/arkworks-rs',
        categories: ['Cryptography'],
        language: ['Rust'],
        fundingSource: 'Community',
        status: 'live',
        tags: ['cryptography', 'zk-snarks', 'rust'],
        stylusUsage:
            'Arkworks crates can be imported directly into Stylus Rust contracts for on-chain elliptic curve and pairing operations.',
    },
    {
        id: 'bellman',
        name: 'Bellman',
        tagline: 'zkSNARK library for Rust, compatible with Stylus',
        description:
            'Bellman is a Rust crate for building and verifying zkSNARK circuits. As a pure-Rust library it compiles to WASM and can run Groth16 verifications inside Stylus contracts.',
        url: 'https://github.com/zkcrypto/bellman',
        githubUrl: 'https://github.com/zkcrypto/bellman',
        categories: ['Cryptography'],
        language: ['Rust'],
        fundingSource: 'None',
        status: 'live',
        tags: ['cryptography', 'zk-snarks', 'library'],
        stylusUsage:
            'Bellman Groth16 verifiers compile to WASM and are deployable as Stylus contracts for trustless proof verification on-chain.',
    },
    {
        id: 'ed25519-dalek',
        name: 'ed25519-dalek on Stylus',
        tagline: 'Ed25519 signature primitives running inside Stylus contracts',
        description:
            'A port of the ed25519-dalek Rust library to Stylus, enabling on-chain ED25519 signature verification — crucial for interop with non-EVM chains like Solana and cross-chain bridges.',
        url: 'https://github.com/fluidity-money/superposition-precompiles',
        githubUrl: 'https://github.com/fluidity-money/superposition-precompiles',
        categories: ['Cryptography', 'Bridges & Oracles'],
        language: ['Rust'],
        fundingSource: 'Stylus Sprint',
        status: 'live',
        tags: ['cryptography', 'ed25519', 'signatures'],
        stylusUsage:
            'Exposes precompile-level ED25519 verification in Rust, deployed as a Stylus contract since EVM has no native ED25519 precompile.',
    },
    {
        id: 'secp256k1-stylus',
        name: 'secp256k1 on Stylus',
        tagline: 'Rust secp256k1 for Bitcoin-compatible signature verification',
        description:
            'Brings the rust-secp256k1 library to Arbitrum as a Stylus contract, enabling on-chain verification of Bitcoin-style signatures and enabling new Bitcoin-Layer2 cross-chain use cases.',
        url: 'https://github.com/rust-bitcoin/rust-secp256k1',
        githubUrl: 'https://github.com/rust-bitcoin/rust-secp256k1',
        categories: ['Cryptography', 'Bridges & Oracles'],
        language: ['Rust'],
        fundingSource: 'Community',
        status: 'live',
        tags: ['cryptography', 'secp256k1', 'bitcoin'],
        stylusUsage:
            'Pure-Rust secp256k1 operations compiled to WASM and deployed as Stylus contracts — vastly cheaper than Solidity ecrecover for batch verification.',
    },

    // ── Bridges & Oracles ────────────────────────────────────────
    {
        id: 'redstone-oracles',
        name: 'RedStone Oracles',
        tagline: 'Cross-chain oracle data feeds for Stylus contracts',
        description:
            'RedStone delivers modular, low-latency price feeds and arbitrary off-chain data to Arbitrum. By providing Stylus-compatible push and pull oracle integrations, RedStone enables DeFi protocols to get accurate, manipulation-resistant price data in their Rust contracts.',
        url: 'https://redstone.finance',
        categories: ['Bridges & Oracles', 'Infrastructure'],
        language: ['Rust'],
        fundingSource: 'None',
        status: 'live',
        tags: ['oracle', 'cross-chain', 'data-feeds'],
        stylusUsage:
            'Provides Rust SDK bindings so Stylus contracts can verify RedStone data on-chain without EVM-level gas penalties.',
        highlights: [
            'Pull-based oracle with sub-second data freshness',
            'Rust SDK for seamless Stylus integration',
            'Supports 1,000+ price feeds',
        ],
    },
    {
        id: 'wormhole',
        name: 'Wormhole',
        tagline: 'Cross-chain messaging and token bridging for Stylus',
        description:
            'Wormhole is a generic cross-chain messaging protocol that connects Arbitrum to 30+ blockchains. Teams are building Stylus-native Wormhole message parsers and token bridge implementations as Rust contracts for improved throughput.',
        url: 'https://wormhole.com',
        categories: ['Bridges & Oracles'],
        language: ['Rust'],
        fundingSource: 'None',
        status: 'live',
        tags: ['bridge', 'cross-chain', 'messaging'],
        stylusUsage:
            'Wormhole VAA verification logic is ported to Stylus Rust, enabling cheaper message parsing compared to equivalent Solidity.',
    },

    // ── Infrastructure ───────────────────────────────────────────
    {
        id: 'stylus-sdk-rs',
        name: 'Stylus SDK (Rust)',
        tagline: 'The official Rust SDK for writing Stylus smart contracts',
        description:
            'stylus-sdk-rs is the foundation of the Stylus ecosystem. It provides the #[entrypoint] macro, storage types, ABI generation, and error handling that all Rust Stylus contracts build on. Maintained by Offchain Labs.',
        url: 'https://github.com/OffchainLabs/stylus-sdk-rs',
        githubUrl: 'https://github.com/OffchainLabs/stylus-sdk-rs',
        categories: ['Infrastructure', 'Dev Tools'],
        language: ['Rust'],
        fundingSource: 'None',
        status: 'live',
        tags: ['sdk', 'rust', 'official'],
        stylusUsage:
            'IS the Stylus SDK — every Rust Stylus contract depends on this crate for the core macros and runtime.',
        highlights: [
            'Official Offchain Labs SDK',
            '#[entrypoint] macro for zero-boilerplate contracts',
            'Type-safe Solidity ABI generation',
            'Storage: sol_storage! for structured on-chain state',
        ],
    },
    {
        id: 'arbitrum-stylus-starter-c',
        name: 'Stylus C Starter',
        tagline: 'C starter template for Arbitrum Stylus contracts',
        description:
            'An official Offchain Labs template for writing Stylus contracts in C, using the Stylus WASM runtime directly. A perfect entry point for systems programmers who want to bring existing C codebases on-chain.',
        url: 'https://github.com/OffchainLabs/arbitrum-stylus-starter-c',
        githubUrl: 'https://github.com/OffchainLabs/arbitrum-stylus-starter-c',
        categories: ['Dev Tools', 'Infrastructure'],
        language: ['C/C++'],
        fundingSource: 'None',
        status: 'live',
        tags: ['starter', 'template', 'c'],
        stylusUsage:
            'Demonstrates how to target the Stylus ABI from C code compiled to WASM via Emscripten or wasi-sdk.',
    },

    // ── Gaming & NFTs ────────────────────────────────────────────
    {
        id: 'stylus-erc721',
        name: 'Stylus ERC-721',
        tagline: 'Gas-efficient NFT standard written in Rust for Stylus',
        description:
            'A full ERC-721 implementation in Rust targeting the Stylus VM. By moving NFT minting and transfer logic to Rust, this library achieves 10–30% gas savings over equivalent Solidity on Arbitrum.',
        url: 'https://github.com/OffchainLabs/stylus-by-example',
        githubUrl: 'https://github.com/OffchainLabs/stylus-by-example',
        categories: ['Gaming & NFTs', 'Infrastructure'],
        language: ['Rust'],
        fundingSource: 'None',
        status: 'live',
        tags: ['nft', 'erc721', 'standard'],
        stylusUsage:
            'Complete ERC-721 contract written with stylus-sdk-rs macros, deployable on any Arbitrum chain.',
    },
];
