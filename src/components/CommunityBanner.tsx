import { Users } from 'lucide-react';

export function CommunityBanner() {
    return (
        <div className="w-full bg-[#1A0B2E] py-16">
            <div className="max-w-[1200px] mx-auto px-4">
                <div
                    className="relative w-full rounded-3xl overflow-hidden min-h-[500px] flex flex-col items-center justify-center text-center px-6 py-20"
                    style={{
                        backgroundImage: 'url(/images/community-card.svg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    {/* Content */}
                    <div className="relative z-10 max-w-4xl mx-auto w-full">
                        <div className="space-y-4 mb-12">
                            <div className="flex justify-center mb-6">
                                <Users className="w-12 h-12 text-white" strokeWidth={1.5} />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white font-['Unica77_LL'] tracking-tight">
                                Join the Stylus Community
                            </h2>
                            <p className="text-lg text-white/90 font-light max-w-2xl mx-auto">
                                Contribute to the ecosystem. Share your projects, write tutorials, or help others get started.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                                <button className="px-8 py-3 bg-white text-[#5F4DED] font-semibold rounded-[8px] hover:bg-gray-100 transition-colors w-full sm:w-auto text-[15px]">
                                    Contribute on GitHub
                                </button>
                                <button className="px-8 py-3 bg-[#5F4DED] border border-white text-white font-semibold rounded-[8px] hover:bg-[#4C3DCD] transition-colors w-full sm:w-auto backdrop-blur-sm text-[15px]">
                                    Submit your project
                                </button>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-white/20 mb-12" />

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
                            <div className="space-y-1">
                                <div className="text-4xl font-light font-['Unica77_LL']">500+</div>
                                <div className="text-sm text-white/80 font-normal">Developers</div>
                            </div>
                            <div className="space-y-1">
                                <div className="text-4xl font-light font-['Unica77_LL']">15+</div>
                                <div className="text-sm text-white/80 font-normal">Projects</div>
                            </div>
                            <div className="space-y-1">
                                <div className="text-4xl font-light font-['Unica77_LL']">50+</div>
                                <div className="text-sm text-white/80 font-normal">Resources</div>
                            </div>
                            <div className="space-y-1">
                                <div className="text-4xl font-light font-['Unica77_LL']">5+</div>
                                <div className="text-sm text-white/80 font-normal">Languages</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
