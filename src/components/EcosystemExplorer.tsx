import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, LayoutGrid, List } from 'lucide-react';
import { EcosystemProject } from '../data/ecosystemData';
import { useProjects } from '../hooks/useProjects';
import { FilterSidebar, FilterState } from './FilterSidebar';
import { ProjectCard } from './ProjectCard';
import { SubmitProjectCTA } from './SubmitProjectCTA';
import { Footer } from './Footer';

const DEFAULT_FILTERS: FilterState = {
    keyword: '',
    categories: [],
    languages: [],
    fundingSources: [],
    status: 'all',
};

function applyFilters(projects: EcosystemProject[], f: FilterState) {
    return projects.filter((p) => {
        if (f.keyword) {
            const q = f.keyword.toLowerCase();
            const match =
                p.name.toLowerCase().includes(q) ||
                p.tagline.toLowerCase().includes(q) ||
                p.description.toLowerCase().includes(q) ||
                p.tags.some((t) => t.toLowerCase().includes(q));
            if (!match) return false;
        }
        if (f.categories.length && !f.categories.some((c) => p.categories.includes(c)))
            return false;
        if (f.languages.length && !f.languages.some((l) => p.language.includes(l)))
            return false;
        if (f.fundingSources.length && !f.fundingSources.includes(p.fundingSource ?? 'None'))
            return false;
        if (f.status !== 'all' && p.status !== f.status) return false;
        return true;
    });
}

export function EcosystemExplorer() {
    const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);
    const [view, setView] = useState<'grid' | 'list'>('grid');
    const { projects, loading, error } = useProjects();

    const filtered = useMemo(() => applyFilters(projects, filters), [projects, filters]);

    return (
        <div className="min-h-screen bg-[#F8F7FF]">
            {/* Hero banner */}
            <div className="relative overflow-hidden bg-gradient-to-br from-[#5F4DED] via-[#7B5CF0] to-[#4338CA] text-white">
                {/* Background glow orbs */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-300/10 rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20 relative z-10">
                    {/* Back link */}
                    <Link
                        to="/"
                        className="inline-flex items-center gap-1.5 text-purple-200 hover:text-white transition-colors text-sm mb-6"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to StylusUp
                    </Link>

                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-semibold uppercase tracking-widest text-purple-200 mb-4">
                                🌐 Ecosystem Directory
                            </div>
                            <h1
                                style={{ fontFamily: "'Unica77 LL', sans-serif" }}
                                className="text-4xl md:text-5xl font-bold leading-tight"
                            >
                                Explore the{' '}
                                <span className="italic font-normal">Stylus</span> Ecosystem
                            </h1>
                            <p className="mt-3 text-purple-200 text-lg max-w-2xl leading-relaxed">
                                Discover projects, developer tools, protocols, and resources
                                built with Arbitrum Stylus.
                            </p>
                        </div>

                        <Link
                            to="/ecosystem/submit"
                            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-[#5F4DED] font-semibold hover:bg-purple-50 transition-colors shadow-lg self-start md:self-auto"
                        >
                            + Submit a Project
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main content */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar */}
                    <div className="lg:w-72 xl:w-80 flex-shrink-0">
                        <div className="sticky top-20 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                            <FilterSidebar
                                filters={filters}
                                onFilterChange={setFilters}
                                projects={projects}
                            />
                        </div>
                    </div>

                    {/* Grid area */}
                    <div className="flex-1 min-w-0">
                        {/* Result bar */}
                        <div className="flex items-center justify-between mb-6">
                            <p className="text-sm text-gray-500">
                                {loading ? 'Loading projects…' : error ? (
                                    <span className="text-red-500">{error}</span>
                                ) : (
                                    <>
                                        Displaying{' '}
                                        <span className="font-semibold text-gray-700">{filtered.length}</span>{' '}
                                        of{' '}
                                        <span className="font-semibold text-gray-700">{projects.length}</span>{' '}
                                        results
                                    </>
                                )}
                            </p>
                            <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-lg p-0.5">
                                <button
                                    onClick={() => setView('grid')}
                                    className={`p-1.5 rounded-md transition-colors ${view === 'grid'
                                        ? 'bg-[#5F4DED] text-white'
                                        : 'text-gray-400 hover:text-gray-600'
                                        }`}
                                    title="Grid view"
                                >
                                    <LayoutGrid className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => setView('list')}
                                    className={`p-1.5 rounded-md transition-colors ${view === 'list'
                                        ? 'bg-[#5F4DED] text-white'
                                        : 'text-gray-400 hover:text-gray-600'
                                        }`}
                                    title="List view"
                                >
                                    <List className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Cards */}
                        {filtered.length === 0 ? (
                            <div className="flex flex-col items-center justify-center py-24 text-center">
                                <div className="text-5xl mb-4">🔍</div>
                                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                                    No projects found
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    Try adjusting your filters or search term.
                                </p>
                            </div>
                        ) : (
                            <div
                                className={
                                    view === 'grid'
                                        ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5'
                                        : 'flex flex-col gap-4'
                                }
                            >
                                {filtered.map((project) => (
                                    <ProjectCard key={project.id} project={project} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <SubmitProjectCTA />
            <Footer />
        </div>
    );
}
