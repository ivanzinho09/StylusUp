export interface Resource {
  name: string;
  url: string;
  description?: string;
}

export interface Category {
  title: string;
  resources: Resource[];
  comingSoon?: boolean;
}

export const resourceCategories = {
  learn: [
    {
      title: 'Education platforms',
      resources: [
        {
          name: 'Arbitrum Docs',
          url: 'https://docs.arbitrum.io/stylus/stylus-gentle-introduction',
          description: 'Official Stylus documentation'
        },
        {
          name: 'Stylus By Example',
          url: 'https://github.com/OffchainLabs/stylus-by-example',
          description: 'Learn Stylus through practical examples'
        }
      ]
    },
    {
      title: 'Tutorials',
      resources: [
        {
          name: 'Quick Start Guide',
          url: 'https://docs.arbitrum.io/stylus/stylus-quickstart',
          description: 'Get started in minutes'
        },
        {
          name: 'Stylus Tutorials',
          url: 'https://github.com/OffchainLabs/stylus-tutorials',
          description: 'Official tutorial repository'
        },
        {
          name: 'Awesome Stylus',
          url: 'https://github.com/OffchainLabs/awesome-stylus',
          description: 'Curated list of resources and examples'
        }
      ]
    },
    {
      title: 'SDKs',
      resources: [
        {
          name: 'Stylus Rust SDK',
          url: 'https://github.com/OffchainLabs/stylus-sdk-rs',
          description: 'Write smart contracts in Rust'
        },
        {
          name: 'Stylus C/C++ SDK',
          url: 'https://github.com/OffchainLabs/stylus-sdk-c',
          description: 'Write smart contracts in C/C++'
        }
      ]
    },
    {
      title: 'Documentation',
      resources: [
        {
          name: 'Rust SDK Docs',
          url: 'https://docs.rs/stylus-sdk/latest/stylus_sdk/',
          description: 'API reference for Rust SDK'
        }
      ]
    }
  ],
  build: [
    {
      title: 'Editors',
      resources: [
        {
          name: 'Stylus Playground',
          url: 'https://thewizard.app',
          description: 'Online IDE for Stylus'
        },
        {
          name: 'Stylus Remix Plugin',
          url: 'https://welldonestudio.io/docs/code/stylus/remix',
          description: 'Write and deploy in Remix IDE'
        }
      ]
    },
    {
      title: 'CLI Tools',
      resources: [
        {
          name: 'cargo-stylus',
          url: 'https://crates.io/crates/cargo-stylus',
          description: 'CLI tool for Stylus development'
        }
      ]
    },
    {
      title: 'VSCode Extensions',
      resources: [
        {
          name: 'Rust Analyzer',
          url: 'https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer',
          description: 'Essential Rust support for VSCode'
        }
      ]
    },
    {
      title: 'Templates',
      resources: [
        {
          name: 'Stylus Hello World',
          url: 'https://github.com/OffchainLabs/stylus-hello-world',
          description: 'Starter template for Stylus'
        },
        {
          name: 'Stylus Rust Template',
          url: 'https://github.com/OffchainLabs/stylus-sdk-rs/tree/main/examples',
          description: 'Official Rust SDK examples'
        }
      ]
    }
  ],
  projects: [
    {
      title: 'DeFi',
      resources: [
        {
          name: 'Stylus DEX Example',
          url: 'https://github.com/OffchainLabs/stylus-tutorials',
          description: 'Decentralized exchange patterns'
        }
      ]
    },
    {
      title: 'Gaming',
      resources: [
        {
          name: 'On-chain Gaming',
          url: 'https://github.com/OffchainLabs/awesome-stylus#gaming',
          description: 'Game development examples'
        }
      ]
    },
    {
      title: 'NFTs',
      resources: [
        {
          name: 'ERC-721 Example',
          url: 'https://github.com/OffchainLabs/stylus-by-example',
          description: 'NFT contracts in Stylus'
        }
      ]
    },
    {
      title: 'Infrastructure',
      resources: [
        {
          name: 'Stylus Core',
          url: 'https://github.com/OffchainLabs/stylus',
          description: 'Core Stylus VM and fraud prover'
        }
      ]
    }
  ]
};
