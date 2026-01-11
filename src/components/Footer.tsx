import { Github, MessageCircle, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-600 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.svg" alt="StylusUp Logo" className="h-10 w-10" />
              <span style={{ fontFamily: "'Unica77 LL', sans-serif" }} className="text-[28px] font-normal tracking-tight leading-none mt-0.5 ml-1">
                <span className="text-[#5F4DED]">Stylus</span>
                <span className="text-[#0F172A] italic">Up</span>
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              A community-owned resource hub for developers building with Stylus on Arbitrum.
              Built by developers, for developers.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/OffchainLabs/stylus"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white hover:bg-[#5F4DED] text-gray-600 hover:text-white transition-all flex items-center justify-center border border-gray-200 shadow-sm"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/arbitrum"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white hover:bg-[#5F4DED] text-gray-600 hover:text-white transition-all flex items-center justify-center border border-gray-200 shadow-sm"
                aria-label="X (formerly Twitter)"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://discord.gg/arbitrum"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white hover:bg-[#5F4DED] text-gray-600 hover:text-white transition-all flex items-center justify-center border border-gray-200 shadow-sm"
                aria-label="Discord"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white hover:bg-[#5F4DED] text-gray-600 hover:text-white transition-all flex items-center justify-center border border-gray-200 shadow-sm"
                aria-label="Newsletter"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#learn" className="text-gray-600 hover:text-[#5F4DED] transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#learn" className="text-gray-600 hover:text-[#5F4DED] transition-colors">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-600 hover:text-[#5F4DED] transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@Arbitrum/search?query=stylus%20saturdays" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#5F4DED] transition-colors">
                  Stylus Saturdays
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-gray-900 mb-4">Community</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#community" className="text-gray-600 hover:text-[#5F4DED] transition-colors">
                  Contribute
                </a>
              </li>
              <li>
                <a href="https://github.com/OffchainLabs/awesome-stylus" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#5F4DED] transition-colors">
                  Submit a Project
                </a>
              </li>
              <li>
                <a href="https://github.com/OffchainLabs/stylus" className="text-gray-600 hover:text-[#5F4DED] transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://docs.arbitrum.io/stylus/stylus-gentle-introduction" className="text-gray-600 hover:text-[#5F4DED] transition-colors">
                  Official Docs
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">
            © 2025 Stylusup. Community-owned and maintained.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-600 hover:text-[#5F4DED] transition-colors">
              Privacy
            </a>
            <a href="#" className="text-gray-600 hover:text-[#5F4DED] transition-colors">
              Terms
            </a>
            <a href="#" className="text-gray-600 hover:text-[#5F4DED] transition-colors">
              License
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
