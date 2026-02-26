import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function SubmitProjectCTA() {
    return (
        <section className="py-16 px-6">
            <div className="max-w-5xl mx-auto bg-[#0F172A] rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
                {/* Background glow */}
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#5F4DED]/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 max-w-xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug mb-3">
                        List a project on the StylusUp Ecosystem
                    </h2>
                    <p className="text-gray-400 text-base leading-relaxed">
                        Building with Stylus? Submit your project to be discovered by developers, investors, and the broader Arbitrum community.
                    </p>
                </div>

                <div className="relative z-10 flex-shrink-0">
                    <Link
                        to="/ecosystem/submit"
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#5F4DED] to-[#7B68EE] text-white font-semibold shadow-lg hover:opacity-90 transition-opacity"
                    >
                        Submit a project
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
