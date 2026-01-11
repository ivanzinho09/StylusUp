import { useState } from 'react';
import { Menu, X, ExternalLink, Github, Twitter } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    closeMobileMenu();

    // Small delay to allow mobile menu to close
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 80; // Height of sticky header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, mobileMenuOpen ? 100 : 0);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <img src="/logo.svg" alt="StylusUp Logo" className="h-10 w-10" />
              <span style={{ fontFamily: "'Unica77 LL', sans-serif" }} className="text-[28px] font-normal tracking-tight leading-none mt-0.5 ml-1">
                <span className="text-[#5F4DED]">Stylus</span>
                <span className="text-[#0F172A] italic">Up</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a
                href="#get-started"
                onClick={(e) => handleNavClick(e, 'get-started')}
                className="text-gray-600 hover:text-[#5F4DED] transition-colors cursor-pointer"
              >
                Get Started
              </a>
              <a
                href="#projects"
                onClick={(e) => handleNavClick(e, 'projects')}
                className="text-gray-600 hover:text-[#5F4DED] transition-colors cursor-pointer"
              >
                Projects
              </a>
              <a
                href="#learn"
                onClick={(e) => handleNavClick(e, 'learn')}
                className="text-gray-600 hover:text-[#5F4DED] transition-colors cursor-pointer"
              >
                Learn
              </a>
              <a
                href="#build"
                onClick={(e) => handleNavClick(e, 'build')}
                className="text-gray-600 hover:text-[#5F4DED] transition-colors cursor-pointer"
              >
                Build
              </a>
              <a
                href="#community"
                onClick={(e) => handleNavClick(e, 'community')}
                className="text-gray-600 hover:text-[#5F4DED] transition-colors cursor-pointer"
              >
                Community
              </a>
              <a
                href="https://docs.arbitrum.io/stylus/stylus-gentle-introduction"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#5F4DED] to-[#7B68EE] text-white hover:opacity-90 transition-opacity shadow-sm"
              >
                Docs
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-gray-900 hover:text-[#5F4DED] transition-colors"
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Light background */}
          <div className="absolute inset-0 bg-white" />

          {/* Menu content */}
          <div className="relative h-full flex flex-col">
            {/* Header with close button */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <img src="/logo.svg" alt="StylusUp Logo" className="h-10 w-10" />
                <span style={{ fontFamily: "'Unica77 LL', sans-serif" }} className="text-[28px] font-normal tracking-tight leading-none mt-0.5 ml-1">
                  <span className="text-[#5F4DED]">Stylus</span>
                  <span className="text-[#0F172A] italic">Up</span>
                </span>
              </div>
              <button
                onClick={closeMobileMenu}
                className="p-2 text-gray-900 hover:text-[#5F4DED] transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 flex flex-col px-6 py-12 gap-6">
              <a
                href="#get-started"
                onClick={(e) => handleNavClick(e, 'get-started')}
                className="text-2xl text-gray-900 hover:text-[#5F4DED] transition-colors cursor-pointer"
              >
                Get Started
              </a>
              <a
                href="#projects"
                onClick={(e) => handleNavClick(e, 'projects')}
                className="text-2xl text-gray-900 hover:text-[#5F4DED] transition-colors cursor-pointer"
              >
                Projects
              </a>
              <a
                href="#learn"
                onClick={(e) => handleNavClick(e, 'learn')}
                className="text-2xl text-gray-900 hover:text-[#5F4DED] transition-colors cursor-pointer"
              >
                Learn
              </a>
              <a
                href="#build"
                onClick={(e) => handleNavClick(e, 'build')}
                className="text-2xl text-gray-900 hover:text-[#5F4DED] transition-colors cursor-pointer"
              >
                Build
              </a>
              <a
                href="#community"
                onClick={(e) => handleNavClick(e, 'community')}
                className="text-2xl text-gray-900 hover:text-[#5F4DED] transition-colors cursor-pointer"
              >
                Community
              </a>

              <div className="pt-6 border-t border-gray-200">
                <a
                  href="https://docs.arbitrum.io/stylus/stylus-gentle-introduction"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xl text-gray-900 hover:text-[#5F4DED] transition-colors"
                  onClick={closeMobileMenu}
                >
                  Docs
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </nav>

            {/* Social Links */}
            <div className="p-6 border-t border-gray-200">
              <div className="flex items-center gap-6">
                <a
                  href="https://github.com/OffchainLabs/stylus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-[#5F4DED] transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://twitter.com/arbitrum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-[#5F4DED] transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Tap to close hint */}

          </div>
        </div>
      )}
    </>
  );
}
