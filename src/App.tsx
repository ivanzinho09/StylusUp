import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ResourceGrid } from './components/ResourceGrid';
import { CommunityBanner } from './components/CommunityBanner';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="overflow-hidden">
        <HeroSection />
        <ResourceGrid />
        <CommunityBanner />
      </main>
      <Footer />
    </div>
  );
}

