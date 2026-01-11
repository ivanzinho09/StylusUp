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
          name: 'Stylus Workshop',
          url: '#',
          description: 'Interactive learning platform'
        }
      ]
    },
    {
      title: 'Tutorials',
      resources: [
        {
          name: 'Quick Start Guide',
          url: '#',
          description: 'Get started in minutes'
        },
        {
          name: 'Building a Counter',
          url: '#',
          description: 'Your first Stylus contract'
        },
        {
          name: 'Advanced Patterns',
          url: '#',
          description: 'Deep dive into best practices'
        }
      ]
    },
    {
      title: 'Books',
      resources: [
        {
          name: 'The Stylus Book',
          url: '#',
          description: 'Comprehensive guide to Stylus development'
        }
      ]
    },
    {
      title: 'Case Studies',
      resources: [
        {
          name: 'Featured Projects',
          url: '#',
          description: 'Monthly spotlight from Stylus Saturdays'
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
          url: '#',
          description: 'Online IDE for Stylus'
        },
        {
          name: 'VSCode Extension',
          url: '#',
          description: 'Stylus syntax highlighting'
        }
      ]
    },
    {
      title: 'Debuggers',
      resources: [
        {
          name: 'Stylus Debugger',
          url: '#',
          description: 'Debug your contracts'
        }
      ]
    },
    {
      title: 'Auditors',
      resources: [
        {
          name: 'Security Tools',
          url: '#',
          description: 'Audit your Stylus code'
        }
      ]
    },
    {
      title: 'Templates',
      resources: [
        {
          name: 'Rust Template',
          url: '#',
          description: 'Quick start Rust template'
        },
        {
          name: 'AssemblyScript Template',
          url: '#',
          description: 'Quick start AS template'
        }
      ]
    }
  ],
  projects: [
    {
      title: 'Defi',
      resources: [
        {
          name: 'Sample DEX',
          url: '#',
          description: 'Decentralized exchange built with Stylus'
        },
        {
          name: 'Lending Protocol',
          url: '#',
          description: 'High-performance lending'
        }
      ]
    },
    {
      title: 'Gaming',
      resources: [
        {
          name: 'On-chain Game',
          url: '#',
          description: 'Fully on-chain gaming example'
        }
      ]
    },
    {
      title: 'NFTs',
      resources: [
        {
          name: 'NFT Collection',
          url: '#',
          description: 'Gas-efficient NFT contracts'
        }
      ]
    },
    {
      title: 'Infrastructure',
      resources: [
        {
          name: 'Oracle System',
          url: '#',
          description: 'Decentralized oracle network'
        }
      ]
    }
  ]
};
