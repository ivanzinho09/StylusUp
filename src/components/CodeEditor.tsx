import { useState } from 'react';
import { Play, Copy, Check, Terminal, AlertCircle, CheckCircle } from 'lucide-react';

const codeExamples = {
  Rust: `// Stylus Counter Contract
#![cfg_attr(not(feature = "export-abi"), no_main)]
extern crate alloc;

use stylus_sdk::prelude::*;
use stylus_sdk::storage::{StorageU256};

#[storage]
#[entrypoint]
pub struct Counter {
    count: StorageU256,
}

#[public]
impl Counter {
    pub fn increment(&mut self) {
        let count = self.count.get() + U256::from(1);
        self.count.set(count);
    }

    pub fn get(&self) -> U256 {
        self.count.get()
    }
}`,
  C: `// C to WASM with Stylus
#include <stdint.h>

uint256_t counter = 0;

void increment() {
    counter++;
}

uint256_t get_count() {
    return counter;
}`,
  Zig: `// Zig Counter Contract
const std = @import("std");

var counter: u256 = 0;

pub fn increment() void {
    counter += 1;
}

pub fn getCount() u256 {
    return counter;
}`
};

type CompileStatus = 'idle' | 'compiling' | 'success' | 'error';

export function CodeEditor() {
  const [selectedLang, setSelectedLang] = useState<keyof typeof codeExamples>('Rust');
  const [code, setCode] = useState(codeExamples.Rust);
  const [copied, setCopied] = useState(false);
  const [compileStatus, setCompileStatus] = useState<CompileStatus>('idle');
  const [output, setOutput] = useState('');

  const handleLanguageChange = (lang: keyof typeof codeExamples) => {
    setSelectedLang(lang);
    setCode(codeExamples[lang]);
    setCompileStatus('idle');
    setOutput('');
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const compileCode = async () => {
    setCompileStatus('compiling');
    setOutput('Compiling...');
    
    // Simulate compilation
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mock compilation success
    setCompileStatus('success');
    setOutput(`✓ Compiled successfully!

WASM size: 1.2 KB (optimized)
Gas estimate: ~45,000 gas
Deployment cost: ~0.000012 ETH

Contract ready for deployment to Arbitrum Stylus.

Example deployment:
cargo stylus deploy --private-key <key>`);
  };

  return (
    <div className="relative">
      <div className="bg-[#1E1E1E] rounded-2xl shadow-2xl border border-gray-700 overflow-hidden">
        {/* Editor header */}
        <div className="bg-[#252526] px-4 py-3 border-b border-gray-700 flex items-center justify-between">
          <div className="flex gap-2">
            {(Object.keys(codeExamples) as Array<keyof typeof codeExamples>).map((lang) => (
              <button
                key={lang}
                onClick={() => handleLanguageChange(lang)}
                className={`px-3 py-1.5 text-sm rounded-lg transition-all ${
                  selectedLang === lang
                    ? 'bg-gradient-to-r from-[#FF1F8F] to-[#9945FF] text-white shadow-sm'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
          <button
            onClick={copyCode}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            title="Copy code"
          >
            {copied ? (
              <Check className="w-4 h-4 text-green-400" />
            ) : (
              <Copy className="w-4 h-4 text-gray-400" />
            )}
          </button>
        </div>

        {/* Code editor */}
        <div className="relative">
          <div className="absolute top-2 left-2 text-xs text-gray-500">
            Press Esc to exit editor
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-[400px] bg-[#1E1E1E] text-gray-100 p-6 pt-8 font-mono text-sm leading-relaxed resize-none focus:outline-none focus:ring-2 focus:ring-[#5F4DED]/50"
            spellCheck={false}
          />
        </div>

        {/* Output section */}
        {output && (
          <div className="border-t border-gray-700 bg-[#252526]">
            <div className="px-4 py-2 border-b border-gray-700 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-400">Output</span>
            </div>
            <div className="p-4 font-mono text-sm text-gray-300 whitespace-pre-wrap max-h-[200px] overflow-y-auto">
              {output}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="bg-[#252526] px-4 py-3 border-t border-gray-700 flex items-center justify-between">
          <span className="text-sm text-gray-500">counter.rs</span>
          <button 
            onClick={compileCode}
            disabled={compileStatus === 'compiling'}
            className="flex items-center gap-2 px-4 py-2 text-sm bg-gradient-to-r from-[#FF1F8F] to-[#9945FF] text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {compileStatus === 'compiling' ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Compiling...
              </>
            ) : compileStatus === 'success' ? (
              <>
                <CheckCircle className="w-4 h-4" />
                Run Again
              </>
            ) : (
              <>
                <Play className="w-4 h-4" />
                Compile & Run
              </>
            )}
          </button>
        </div>
      </div>

      {/* Floating info badges */}
      <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-[#5F4DED] to-[#7B68EE] rounded-xl shadow-lg px-4 py-3">
        <div className="text-xs text-white/80">Powered by</div>
        <div className="text-sm text-white">WebAssembly</div>
      </div>
      

    </div>
  );
}
