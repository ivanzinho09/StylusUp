import { ArrowRight } from 'lucide-react';

const tools = [
    {
        title: 'Editors',
        description: 'Stylus Playground\nOnline IDE for Stylus',
        icon: '/images/icons/editor.png',
    },
    {
        title: 'Debuggers',
        description: 'Stylus Debugger\nDebug your contracts',
        icon: '/images/icons/debugger.png',
    },
    {
        title: 'Auditors',
        description: 'Security Tools\nAudit your Stylus code',
        icon: '/images/icons/auditor.png',
    },
    {
        title: 'Templates',
        description: 'Rust Template\nQuick start Rust template\n\nAssemblyScript Template\nRecommend Run Rust',
        icon: '/images/icons/template.png',
    },
];

export function BuildTools() {
    return (
        <div className="w-full max-w-[1200px] mx-auto px-4 py-16">
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-[#0F172A] mb-2 font-['Unica77_LL']">Build with Stylus</h2>
                <p className="text-[#64748B]">Tools, templates, and frameworks for a Stylus development</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {tools.map((tool, index) => (
                    <div
                        key={index}
                        className="group relative p-6 bg-white border border-gray-100 rounded-2xl hover:shadow-lg hover:border-[#5F4DED]/20 transition-all duration-300 overflow-hidden cursor-pointer"
                        style={{
                            backgroundImage: 'url(/images/card-texture.png)',
                            backgroundSize: '200px',
                            backgroundBlendMode: 'multiply',
                        }}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-[#0F172A] font-['Unica77_LL']">{tool.title}</h3>
                            <ArrowRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#5F4DED] transition-colors" />
                        </div>

                        {/* Content */}
                        <div className="space-y-4 mb-16">
                            {tool.description.split('\n\n').map((block, i) => (
                                <div key={i} className="space-y-1">
                                    {block.split('\n').map((line, j) => (
                                        <p key={j} className={`text-sm ${j === 0 ? 'font-medium text-[#0F172A]' : 'text-[#64748B]'}`}>
                                            {line}
                                        </p>
                                    ))}
                                </div>
                            ))}
                        </div>

                        {/* Icon */}
                        <div className="absolute bottom-4 right-4 transition-transform duration-300 group-hover:scale-110">
                            <img src={tool.icon} alt={tool.title} className="w-16 h-16 object-contain" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
