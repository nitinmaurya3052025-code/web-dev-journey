import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import EcosystemPage from './pages/EcosystemPage';
import SecurityPage from './pages/SecurityPage';
import ClimatePage from './pages/ClimatePage';
import EnergyPage from './pages/EnergyPage';
import ConnectedWorldPage from './pages/ConnectedWorldPage';
import FloatingCar from './components/FloatingCar';

function App() {
  const [activeTab, setActiveTab] = useState('ecosystem');

  // Intersection Observer to update Navbar active tab based on scroll position
  useEffect(() => {
    const sections = ['ecosystem', 'security', 'climate', 'energy', 'connected'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Trigger when section is in the upper middle area of viewport
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleSmoothScroll = (tabId) => {
    setActiveTab(tabId);
    const element = document.getElementById(tabId);
    if (element) {
      const offset = 80; // Offset for header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-surface-container-lowest text-on-surface">
      {/* Top Navbar */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Viewport Content - All sections stacked for natural vertical scroll */}
      <main className="min-h-screen">
        <div id="ecosystem" className="page-section min-h-screen">
          <EcosystemPage setActiveTab={handleSmoothScroll} />
        </div>
        <div id="security" className="page-section min-h-screen">
          <SecurityPage />
        </div>
        <div id="climate" className="page-section min-h-screen">
          <ClimatePage />
        </div>
        <div id="energy" className="page-section min-h-screen">
          <EnergyPage />
        </div>
        <div id="connected" className="page-section min-h-screen">
          <ConnectedWorldPage />
        </div>
      </main>

      {/* Shared Footer */}
      <footer className="bg-surface-container-lowest border-t border-outline-variant/10 w-full relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <div className="font-display-lg text-headline-md text-primary font-bold text-xl">
              Future Smart Living
            </div>
            <p className="font-body-sm text-label-sm text-on-surface-variant text-xs">
              © 2024 Future Smart Living. High-end autonomous architecture.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-xs text-on-surface-variant">
            <a className="hover:text-primary transition-colors cursor-pointer" onClick={() => handleSmoothScroll('ecosystem')}>Ecosystem</a>
            <a className="hover:text-primary transition-colors cursor-pointer" onClick={() => handleSmoothScroll('security')}>Security</a>
            <a className="hover:text-primary transition-colors cursor-pointer" onClick={() => handleSmoothScroll('climate')}>Climate</a>
            <a className="hover:text-primary transition-colors cursor-pointer" onClick={() => handleSmoothScroll('energy')}>Energy</a>
            <a className="hover:text-primary transition-colors cursor-pointer" onClick={() => handleSmoothScroll('connected')}>Connected</a>
          </div>
        </div>
      </footer>

      {/* Floating Action Button (FAB) - Quick energy flow trigger */}
      <button 
        onClick={() => handleSmoothScroll('energy')}
        title="Quick-Access Neural Energy Core"
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-primary-container text-on-primary-container shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-40 group overflow-hidden border border-primary/20 cursor-pointer"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <span className="material-symbols-outlined relative z-10 text-3xl">bolt</span>
      </button>

      {/* Floating 3D/Isometric Car Companion */}
      <FloatingCar />
    </div>
  );
}

export default App;
