import { resourceCategories } from '../data/resources';
import { CategoryCard } from './CategoryCard';
import { WhatsPossible } from './WhatssPossible';

import { QuickStart } from './QuickStart';
import { BookOpen, Code, Rocket, Users } from 'lucide-react';

const sections = [
  {
    id: 'projects',
    title: 'Projects built with Stylus',
    subtitle: 'Explore what the community is building on Arbitrum Stylus',
    icon: Rocket,
    categories: resourceCategories.projects,
  },
  {
    id: 'learn',
    title: 'Learn Stylus',
    subtitle: 'Educational resources to get you started with building on Stylus',
    icon: BookOpen,
    categories: resourceCategories.learn,
  },
  {
    id: 'build',
    title: 'Build with Stylus',
    subtitle: 'Tools, templates, and frameworks for Stylus development',
    icon: Code,
    categories: resourceCategories.build,
  },
];

export function ResourceGrid() {
  const ProjectsIcon = sections[0].icon;

  return (
    <div className="bg-white">
      {/* Quick Start Section */}


      {/* What's Possible Section */}
      <WhatsPossible />

      {/* Projects Section */}


      {/* Project Showcase Section - Right after Projects */}


      {/* Learn and Build Sections */}
      {sections.slice(1).map((section, sectionIndex) => (
        <section
          key={section.id}
          id={section.id}
          className={`py-20 ${sectionIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'
            }`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Section header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#5F4DED] to-[#7B68EE] mb-4 shadow-sm">
                <section.icon className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl text-gray-900 mb-3">
                {section.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {section.subtitle}
              </p>
            </div>

            {/* Category grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {section.categories.map((category) => (
                <CategoryCard key={category.title} category={category} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section id="community" className="py-20 relative overflow-hidden bg-gradient-to-br from-[#5F4DED] via-[#7B68EE] to-[#5F4DED]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center text-white">
          <Users className="w-12 h-12 mx-auto mb-6 opacity-90" />
          <h2 className="text-4xl mb-4">
            Join the Stylus Community
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Contribute to the ecosystem. Share your projects, write tutorials, or help others get started.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://github.com/OffchainLabs/stylus"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-white text-[#5F4DED] hover:bg-gray-100 transition-colors shadow-lg"
            >
              Contribute on GitHub
            </a>
            <a
              href="#"
              className="px-6 py-3 rounded-lg bg-transparent text-white border-2 border-white hover:bg-white/10 transition-colors"
            >
              Submit your project
            </a>
          </div>

          {/* Community stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20">
            <div>
              <div className="text-3xl mb-1">500+</div>
              <div className="text-sm opacity-75">Developers</div>
            </div>
            <div>
              <div className="text-3xl mb-1">15+</div>
              <div className="text-sm opacity-75">Projects</div>
            </div>
            <div>
              <div className="text-3xl mb-1">50+</div>
              <div className="text-sm opacity-75">Resources</div>
            </div>
            <div>
              <div className="text-3xl mb-1">5+</div>
              <div className="text-sm opacity-75">Languages</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
