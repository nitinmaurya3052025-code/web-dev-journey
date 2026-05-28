import React, { useEffect, useState } from 'react';

export default function EcosystemPage({ setActiveTab }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  // Parallax micro-interaction effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX - window.innerWidth / 2) / 100;
      const y = (e.clientY - window.innerHeight / 2) / 100;
      setCoords({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-surface-container-lowest">
      {/* Hero Cinematic Section */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        {/* Background Spline 3D */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <iframe 
            src="https://my.spline.design/reededliquidglassprismherosectionconcept-U91aALHxyh0rXP9O3FaU3Q4D/" 
            frameBorder="0" 
            width="100%" 
            height="100%"
            title="Spline Reeded Liquid Glass Prism"
            className="w-full h-full object-cover scale-105 opacity-50"
          ></iframe>
          {/* Atmospheric Layers */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface-container-lowest/20 to-surface-container-lowest"></div>
          {/* Energy Flow Lines */}
          <div className="energy-line top-1/4 left-0"></div>
          <div className="energy-line top-1/2 left-0" style={{ animationDelay: '1s' }}></div>
          <div className="energy-line top-3/4 left-0" style={{ animationDelay: '2.5s' }}></div>
        </div>

        {/* Floating Holographic Elements */}
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
          {/* HVAC Panel */}
          <div 
            className="hologram-float absolute top-[22%] right-[8%] glass-panel p-6 rounded-xl w-64 hero-glow border-l-2 border-primary hidden md:block"
            style={{
              transform: `translate(${coords.x * 2}px, ${coords.y * 2}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <div className="flex justify-between items-start mb-4">
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">HVAC SYSTEM</span>
              <span className="material-symbols-outlined text-primary" data-icon="thermostat">thermostat</span>
            </div>
            <div className="font-display-lg text-headline-lg text-on-surface">22.5°C</div>
            <div className="h-1.5 w-full bg-surface-container-highest rounded-full mt-4 overflow-hidden">
              <div className="h-full bg-primary w-2/3"></div>
            </div>
          </div>

          {/* Energy Flow Panel */}
          <div 
            className="hologram-float absolute bottom-[18%] left-[8%] glass-panel p-6 rounded-xl w-72 hero-glow border-r-2 border-secondary hidden md:block"
            style={{
              transform: `translate(${coords.x * 3}px, ${coords.y * 3}px)`,
              transition: 'transform 0.1s ease-out',
              animationDelay: '-3s'
            }}
          >
            <div className="flex justify-between items-start mb-4">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">ENERGY FLOW</span>
              <span className="material-symbols-outlined text-secondary" data-icon="bolt">bolt</span>
            </div>
            <div className="flex items-end gap-2">
              <span className="font-display-lg text-headline-lg text-on-surface">4.8</span>
              <span className="font-label-sm text-label-sm pb-2">kWh</span>
            </div>
            {/* Sparkline simulation */}
            <div className="mt-4 flex items-end gap-1 h-12">
              <div className="w-full bg-secondary/20 h-4 rounded-t-sm"></div>
              <div className="w-full bg-secondary/40 h-8 rounded-t-sm"></div>
              <div className="w-full bg-secondary h-12 rounded-t-sm"></div>
              <div className="w-full bg-secondary/60 h-6 rounded-t-sm"></div>
              <div className="w-full bg-secondary/30 h-10 rounded-t-sm"></div>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center max-w-5xl px-6 flex flex-col items-center">
          <div className="mb-6 inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass-panel border-primary/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="font-label-sm text-label-sm text-primary tracking-widest uppercase">System Online: v4.2 Autonomous</span>
          </div>
          <h1 className="font-display-lg text-headline-lg text-[42px] leading-tight md:text-[88px] md:leading-[96px] text-on-surface mb-8 tracking-tighter">
            Welcome to the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-fixed to-secondary">Future of Smart Living</span>
          </h1>
          <p className="font-body-lg text-body-lg md:text-2xl text-on-surface-variant max-w-2xl mb-12">
            AI-powered home automation and immersive lifestyle technology that transforms architecture into an intelligent companion.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button 
              onClick={() => setActiveTab('climate')}
              className="px-10 py-5 bg-primary text-on-primary rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(0,218,243,0.4)] transition-all transform hover:scale-105 cursor-pointer"
            >
              Explore Ecosystem
            </button>
            <button 
              onClick={() => setActiveTab('security')}
              className="px-10 py-5 glass-panel rounded-full font-bold text-lg border-white/10 hover:bg-white/10 transition-all cursor-pointer"
            >
              Virtual Tour
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 z-20 flex flex-col items-center gap-3 opacity-60">
          <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-primary">Discover More</span>
          <div className="w-[2px] h-12 bg-outline-variant/30 relative overflow-hidden rounded-full">
            <div className="scroll-indicator-pulse absolute top-0 left-0 w-full h-1/3 bg-primary rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Bento Grid Section Preview */}
      <section className="relative py-20 bg-surface-container-lowest overflow-hidden border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="mb-16">
            <h2 className="font-display-lg text-headline-lg text-primary mb-4">Unrivaled Intelligence</h2>
            <div className="h-1 w-24 bg-primary"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Bento Item 1: Security */}
            <div 
              onClick={() => setActiveTab('security')}
              className="md:col-span-8 glass-panel rounded-3xl p-8 relative overflow-hidden group cursor-pointer hover:border-primary/40 transition-all duration-500 min-h-[280px]"
            >
              <div className="relative z-10">
                <span className="material-symbols-outlined text-4xl text-primary mb-4" data-icon="security">security</span>
                <h3 className="font-display-lg text-headline-lg text-on-surface mb-4">Neural Security</h3>
                <p className="text-on-surface-variant max-w-md">Biometric recognition and predictive threat detection working in absolute silence.</p>
              </div>
              <img 
                className="absolute top-0 right-0 h-full w-1/2 object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-500" 
                alt="Security Interface"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9GmrN2se_Q70ju86zQ-dqkdgnl-LCuGYLeMwfRrICderRMSkA2lwTwK9nVY23J0QpJJi_U0dvcKfg0AqE2Eg_b81FShqyC9dYNSWamxKOgbB0GkN3a6nNCnb4BqT-Dc9KPJxm1HHYfWMrtBa3U9MqqqIbO3Cpq9_79l1xJiVT6cC-n-Fz7z4jz9-ETaYsnf-agv-eIMgXjwLRbQ4Ok3RQMvKmOE53DrfR6RGOWQ1A4fB51XEbkn8qQK3e4JutN1RIzxVfaw1HyIA"
              />
            </div>

            {/* Bento Item 2: Climate */}
            <div 
              onClick={() => setActiveTab('climate')}
              className="md:col-span-4 glass-panel rounded-3xl p-8 border-l-2 border-secondary flex flex-col justify-between cursor-pointer hover:border-secondary/60 transition-all duration-500 min-h-[280px]"
            >
              <div>
                <span className="material-symbols-outlined text-4xl text-secondary mb-4" data-icon="ac_unit">ac_unit</span>
                <h3 className="font-headline-lg text-on-surface">Bio-Climate</h3>
              </div>
              <div className="mt-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-label-sm font-label-sm">PURITY</span>
                  <span className="text-secondary font-bold">99.8%</span>
                </div>
                <div className="h-2 w-full bg-surface-container-highest rounded-full">
                  <div className="h-full bg-secondary w-[99.8%] shadow-[0_0_10px_rgba(209,188,255,0.5)]"></div>
                </div>
              </div>
            </div>

            {/* Bento Item 3: Energy */}
            <div 
              onClick={() => setActiveTab('energy')}
              className="md:col-span-5 glass-panel rounded-3xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:border-primary/40 transition-all duration-500 min-h-[280px]"
            >
              <div className="w-24 h-24 rounded-full border-4 border-primary/20 flex items-center justify-center mb-6 relative">
                <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
                <span className="material-symbols-outlined text-4xl text-primary" data-icon="energy_savings_leaf">energy_savings_leaf</span>
              </div>
              <h3 class="font-headline-lg text-on-surface mb-2">Net-Zero</h3>
              <p className="text-on-surface-variant max-w-xs">Self-sustaining power through integrated solar-glass and kinetic flooring.</p>
            </div>

            {/* Bento Item 4: Ecosystem overview */}
            <div 
              onClick={() => setActiveTab('energy')}
              className="md:col-span-7 gradient-border-focus rounded-3xl p-8 relative overflow-hidden group flex items-end cursor-pointer hover:opacity-90 transition-all duration-500 min-h-[280px]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent z-10"></div>
              <img 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-30 group-hover:scale-110 transition-transform duration-700" 
                alt="Minimalist Architecture"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyjSkZupk5KDa-l79ncXK7XT0DyXSPM68MNbHQXZpKfiwLZRRzrTnawAnmuOZPz0_wpxJDgJjcGgRUC387SSupLgehQ3GszGJ62-YSRJsKjAx2ur68YMi88SNBpnqEDnkPyzEMQ9vzxlMA6bEPhsd0L1Zm7puWE2cNfNEyiDnLgkmm8FVkvkf2jzDlezbYD4hcqXgtIVcjy841MfaVMDAkQ6lSk5brn7L-QGtaYT2XiAeQmFFCIMgDlxEuLL6yY_a5n465IbmS5vw"
              />
              <div className="relative z-20">
                <h3 className="font-display-lg text-headline-lg text-on-surface mb-2">Omni-Channel Control</h3>
                <p className="text-on-surface-variant">Your home, synchronized across every device in your life.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
