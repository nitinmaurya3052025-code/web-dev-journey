import React from 'react';

export default function Navbar({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'ecosystem', label: 'Ecosystem' },
    { id: 'security', label: 'Security' },
    { id: 'climate', label: 'Climate' },
    { id: 'energy', label: 'Energy' },
    { id: 'connected', label: 'Connected' },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    const element = document.getElementById(tabId);
    if (element) {
      const offset = 80; // Offset for fixed header
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
    <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-16 py-4 z-50 bg-surface/40 backdrop-blur-xl border-b border-outline-variant/20 shadow-2xl shadow-primary/10 transition-all duration-300">
      <div 
        className="font-display-lg text-headline-md font-bold tracking-tight text-primary cursor-pointer hover:opacity-80 transition-opacity"
        onClick={() => handleTabClick('ecosystem')}
      >
        Future Smart Living
      </div>
      
      <nav className="hidden md:flex items-center gap-8">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`font-body-md text-body-md transition-all cursor-pointer pb-1 border-b-2 ${
                isActive
                  ? 'text-primary font-bold border-primary'
                  : 'text-on-surface-variant hover:text-primary border-transparent'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </nav>
      
      <div className="flex items-center gap-4">
        <button 
          className="hidden md:block px-6 py-2 bg-primary-container text-on-primary-container rounded-full font-bold hover:scale-95 transition-transform cursor-pointer"
          onClick={() => handleTabClick('ecosystem')}
        >
          Get Started
        </button>
        <button 
          className="material-symbols-outlined text-primary text-3xl hover:bg-white/5 p-1 rounded-full transition-colors cursor-pointer" 
          data-icon="account_circle"
        >
          account_circle
        </button>
      </div>
    </header>
  );
}
