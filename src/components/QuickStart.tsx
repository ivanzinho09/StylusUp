import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

type Language = 'rust' | 'typescript' | 'move';

interface LanguageConfig {
  label: string;
  description: string;
  command: string;
  available: boolean;
}

const languages: Record<Language, LanguageConfig> = {
  rust: {
    label: 'Rust',
    description: 'Build smart contracts in Rust on any Arbitrum chain.',
    command: 'curl -s https://stylusup.sh/install.sh | sh',
    available: true,
  },
  typescript: {
    label: 'TypeScript',
    description: 'Build smart contracts in TypeScript on any Arbitrum chain.',
    command: 'npx @wakeuplabs/as-stylus generate stylus-hello-world',
    available: true,
  },
  move: {
    label: 'Move',
    description: 'Build smart contracts in Move on any Arbitrum chain.',
    command: 'coming soon :)',
    available: false,
  },
};

export function QuickStart() {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('rust');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(languages[selectedLanguage].command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl text-white mb-4">
            Get Started in Seconds
          </h2>
          <p className="text-lg text-gray-400">
            Choose your language and start building with Stylus
          </p>
        </div>

        {/* Language tabs */}
        <div className="flex justify-center gap-2 mb-6">
          {(Object.keys(languages) as Language[]).map((lang) => {
            const isRust = lang === 'rust';
            const isTypeScript = lang === 'typescript';
            const isMove = lang === 'move';
            
            let bgColor = 'bg-gray-700';
            let hoverColor = 'hover:bg-gray-600';
            let textColor = 'text-white';
            
            if (selectedLanguage === lang) {
              if (isRust) {
                bgColor = 'bg-[#4D4D4D]';
                hoverColor = 'hover:bg-[#3D3D3D]';
              } else if (isTypeScript) {
                bgColor = 'bg-[#E07020]';
                hoverColor = 'hover:bg-[#D06010]';
              } else if (isMove) {
                bgColor = 'bg-[#9945FF]';
                hoverColor = 'hover:bg-[#8935EF]';
              }
            } else {
              bgColor = 'bg-gray-800';
              hoverColor = 'hover:bg-gray-700';
            }

            return (
              <button
                key={lang}
                onClick={() => setSelectedLanguage(lang)}
                className={`px-6 py-2.5 rounded-lg transition-all ${bgColor} ${hoverColor} ${textColor}`}
              >
                {languages[lang].label}
              </button>
            );
          })}
        </div>

        {/* Description */}
        <p className="text-center text-gray-400 mb-8">
          {languages[selectedLanguage].description}
        </p>

        {/* Command box */}
        <div className="relative bg-[#1A1A1A] rounded-xl p-6 border border-gray-800">
          <div className="flex items-center justify-between">
            <code className="text-white font-mono text-sm lg:text-base flex-1 pr-4">
              {languages[selectedLanguage].command}
            </code>
            {languages[selectedLanguage].available && (
              <button
                onClick={handleCopy}
                className="flex-shrink-0 p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-colors"
                aria-label="Copy command"
              >
                {copied ? (
                  <Check className="w-5 h-5 text-green-400" />
                ) : (
                  <Copy className="w-5 h-5" />
                )}
              </button>
            )}
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-6 text-center">
          <a
            href="https://docs.arbitrum.io/stylus/stylus-gentle-introduction"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5F4DED] hover:text-[#7B68EE] transition-colors"
          >
            Read the full documentation →
          </a>
        </div>
      </div>
    </div>
  );
}
