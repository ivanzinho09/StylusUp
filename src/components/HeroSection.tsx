import { CodeEditor } from './CodeEditor';
import { Zap, Shield, Code2, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Code2,
    title: 'One Chain, Many Languages',
    description: 'Build in Rust, C, C++, and more. Anything that compiles to WASM.'
  },
  {
    icon: Zap,
    title: 'No Rust, No Problem',
    description: 'Import existing Rust modules into your Solidity contracts seamlessly.'
  },
  {
    icon: Shield,
    title: 'Safer by Design',
    description: 'Build safer with affordability, reentrancy detection by the Rust SDK.'
  },
  {
    icon: Sparkles,
    title: 'Full EVM Compatibility',
    description: 'Go beyond Solidity and seamlessly interoperate with EVM contracts.'
  }
];

export function HeroSection() {
  return (
    <section id="get-started" className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-br from-[#5F4DED]/10 via-[#7B68EE]/10 to-transparent blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5F4DED]/10 border border-[#5F4DED]/20 text-[#5F4DED] text-sm">
              <span className="w-2 h-2 bg-[#5F4DED] rounded-full animate-pulse" />
              Community Developers Guild
            </div>
            
            <h1 className="text-5xl lg:text-7xl tracking-tight text-gray-900">
              Do more,{' '}
              <span className="bg-gradient-to-r from-[#5F4DED] to-[#7B68EE] bg-clip-text text-transparent">
                with Stylus.
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Build with Rust, AssemblyScript, Move, and Zig, on any Arbitrum chain.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#learn"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#5F4DED] to-[#7B68EE] text-white hover:opacity-90 transition-all shadow-lg shadow-[#5F4DED]/20"
              >
                Read Docs
              </a>
              <a
                href="#build"
                className="px-6 py-3 rounded-lg bg-white text-gray-900 border border-gray-200 hover:border-[#5F4DED] hover:text-[#5F4DED] transition-all shadow-sm"
              >
                Start Building
              </a>
            </div>
          </div>

          {/* Right side - Code editor */}
          <div className="relative">
            <CodeEditor />
          </div>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="relative group bg-white border border-gray-200 rounded-xl p-6 hover:border-[#5F4DED] hover:shadow-lg transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#5F4DED]/0 to-[#7B68EE]/0 group-hover:from-[#5F4DED]/5 group-hover:to-[#7B68EE]/5 rounded-xl transition-all" />
              <div className="relative">
                <feature.icon className="w-8 h-8 text-[#5F4DED] mb-4" />
                <h3 className="text-lg text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
