import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ResourceGrid } from './components/ResourceGrid';
import { CommunityBanner } from './components/CommunityBanner';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { EcosystemExplorer } from './components/EcosystemExplorer';
import { ProjectDetailPage } from './components/ProjectDetailPage';
import { SubmitProjectPage } from './components/SubmitProjectPage';
import { useState } from 'react';

function LandingPage({ onSearchClick }: { onSearchClick: () => void }) {
  return (
    <div className="min-h-screen bg-white">
      <main className="overflow-hidden">
        <HeroSection onSearchClick={onSearchClick} />
        <ResourceGrid />
        <CommunityBanner />
      </main>
      <Footer />
    </div>
  );
}

function ProjectDetailRoute() {
  const { projectId } = useParams<{ projectId: string }>();
  return <ProjectDetailPage projectId={projectId ?? ''} />;
}

export default function App() {
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  return (
    <BrowserRouter>
      <Header onSearchClick={() => setSearchModalOpen(true)} />
      <Routes>
        <Route path="/" element={<LandingPage onSearchClick={() => setSearchModalOpen(true)} />} />
        <Route path="/ecosystem" element={<EcosystemExplorer />} />
        <Route path="/ecosystem/submit" element={<SubmitProjectPage />} />
        <Route path="/ecosystem/:projectId" element={<ProjectDetailRoute />} />
      </Routes>
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
      />
    </BrowserRouter>
  );
}
