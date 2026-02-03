import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ResourceGrid } from './components/ResourceGrid';
import { CommunityBanner } from './components/CommunityBanner';
import { Footer } from './components/Footer';
import { useState } from 'react';
import { SearchModal } from './components/SearchModal';

export default function App() {
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header onSearchClick={() => setSearchModalOpen(true)} />
      <main className="overflow-hidden">
        <HeroSection onSearchClick={() => setSearchModalOpen(true)} />
        <ResourceGrid />
        <CommunityBanner />
      </main>
      <Footer />
      <SearchModal isOpen={searchModalOpen} onClose={() => setSearchModalOpen(false)} />
    </div>
  );
}

