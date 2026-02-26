import { BrowserRouter, Routes, Route, useParams, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ResourceGrid } from './components/ResourceGrid';
import { CommunityBanner } from './components/CommunityBanner';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { EcosystemExplorer } from './components/EcosystemExplorer';
import { ProjectDetailPage } from './components/ProjectDetailPage';
import { SubmitProjectPage } from './components/SubmitProjectPage';
import { useState, useEffect } from 'react';

// Scroll to top on route change, unless it's a hash link
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return null;
}

// Fade transition wrapper
function PageWrapper({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState('fadeIn');

  useEffect(() => {
    if (location !== displayLocation) {
      setTransistionStage('fadeOut');
    }
  }, [location, displayLocation]);

  return (
    <div
      className={`page-transition ${transitionStage}`}
      onAnimationEnd={() => {
        if (transitionStage === 'fadeOut') {
          setTransistionStage('fadeIn');
          setDisplayLocation(location);
        }
      }}
    >
      {/* We render the saved location so it doesn't instantly snap content while fading out */}
      {/* Update: Actually React Router v6 Routes handles this natively. Let's just do a simple mounting fade. */}
    </div>
  );
}

// Simplified purely animated mount wrapper
function AnimatedRoute({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  // We use the pathname as a key so the DOM node unmounts and remounts, triggering the CSS animation
  return (
    <div key={location.pathname} className="animate-fade-in-up">
      {children}
    </div>
  );
}

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
      <ScrollManager />
      <Header onSearchClick={() => setSearchModalOpen(true)} />
      <main className="overflow-hidden bg-white min-h-screen">
        <Routes>
          <Route path="/" element={<AnimatedRoute><LandingPage onSearchClick={() => setSearchModalOpen(true)} /></AnimatedRoute>} />
          <Route path="/ecosystem" element={<AnimatedRoute><EcosystemExplorer /></AnimatedRoute>} />
          <Route path="/ecosystem/submit" element={<AnimatedRoute><SubmitProjectPage /></AnimatedRoute>} />
          <Route path="/ecosystem/:projectId" element={<AnimatedRoute><ProjectDetailRoute /></AnimatedRoute>} />
        </Routes>
      </main>
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
      />
    </BrowserRouter>
  );
}
