import React, { useState, useEffect } from 'react';

export default function SecurityPage() {
  // Toggle states
  const [toggles, setToggles] = useState({
    mainHouse: true,
    garageVault: true,
    outerPerimeter: false,
    guestEntry: false
  });

  // Camera tilt coordinate states
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (window.innerWidth / 2 - e.clientX) / 50;
      const y = (window.innerHeight / 2 - e.clientY) / 50;
      setCoords({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleToggle = (key) => {
    setToggles(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const activities = [
    { time: '14:22:10', title: 'Owner Recognized', detail: 'Primary Entry • Verified', type: 'primary' },
    { time: '13:45:02', title: 'Package Delivered', detail: 'Drone Zone B • Secured', type: 'default' },
    { time: '11:10:48', title: 'Perimeter Check', detail: 'System Automated • Clear', type: 'default' },
    { time: '09:04:15', title: 'Arrival Sync Prep', detail: 'EV detected within 2km', type: 'primary' },
    { time: '07:30:00', title: 'Night Mesh Disarmed', detail: 'Schedule Routine Activated', type: 'default' }
  ];

  // If main house or garage is active, status is "Secured". If all off, "Disarmed".
  const isAnySecured = toggles.mainHouse || toggles.garageVault || toggles.outerPerimeter;

  return (
    <div className="pt-32 pb-20 px-6 md:px-16 max-w-7xl mx-auto space-y-20 grid-bg">
      {/* Hero Section & Facial Recognition */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary">
            <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              verified_user
            </span>
            <span className="font-label-sm text-label-sm tracking-wider uppercase">BIOMETRIC AUTHENTICATION ACTIVE</span>
          </div>
          <h1 className="font-display-lg text-4xl leading-tight md:text-6xl text-on-background max-w-xl">
            Autonomous <span className="text-primary">Perimeter</span> Control.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
            Experience peace of mind with 360-degree environmental awareness. Our AI-driven security ecosystem identifies threats before they arrive.
          </p>
          <div className="flex gap-4">
            <div className="glass-panel p-4 rounded-xl flex items-center gap-4 active-glass">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">
                  {isAnySecured ? 'lock' : 'lock_open'}
                </span>
              </div>
              <div>
                <p className="font-label-sm text-label-sm text-on-surface-variant">System Status</p>
                <p className="font-headline-md text-headline-md text-on-background">
                  {isAnySecured ? 'Secured' : 'Disarmed'}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center items-center py-8">
          {/* Scanner Interface */}
          <div className="relative w-[320px] h-[440px] glass-panel rounded-[40px] overflow-hidden border border-primary/30 p-2 shadow-2xl shadow-primary/5">
            <div className="absolute inset-0 scan-line"></div>
            <iframe
              src="https://my.spline.design/holographicearthwithdynamiclines-Nk8wTZtKHjjPyH3od38TYR57/"
              frameBorder="0"
              width="100%"
              height="100%"
              title="Spline Holographic Earth"
              className="w-full h-full object-cover rounded-[32px] opacity-80 pointer-events-none scale-105"
            ></iframe>
            {/* Scanner Overlays */}
            <div className="absolute top-12 left-1/2 -translate-x-1/2 w-48 h-48 border-2 border-primary/40 rounded-full border-dashed animate-[spin_12s_linear_infinite]"></div>
            <div className="absolute bottom-10 left-6 right-6 glass-panel p-4 rounded-2xl border-primary/20">
              <div className="flex justify-between items-center mb-2">
                <span className="font-label-sm text-label-sm text-primary">ANALYZING BIOMETRICS</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">98% MATCH</span>
              </div>
              <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                <div className="bg-primary h-full w-[98%]"></div>
              </div>
            </div>
          </div>

          {/* Floating Camera Feeds (3D effect) */}
          <div 
            className="absolute -right-4 top-8 w-44 h-28 glass-panel rounded-xl overflow-hidden hologram-tilt border-primary/10 shadow-xl hidden md:block"
            style={{
              transform: `perspective(1000px) rotateY(${coords.x}deg) rotateX(${coords.y}deg)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <img 
              alt="Security feed of main entrance" 
              className="w-full h-full object-cover grayscale opacity-60"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUITGwODo7vTBq1mWzTfynjT9viWGLGlcToRRquh5sNZzuFpNZVlLB3wABlk0HTXWZzGEt1ko74AnSHYsQP02QVjXniMraUEZy-TW5PrQGcjDID5k2S71DxQ6-F5lWLMfd93APOGVXaoJ1pb4eA1g-DqGQ_uRB77ZuHnzaNWEJ3zapB8jRKoaNmwaBFWtIu7Bh8sTvepxzP1zQ3rHZ60QVxOAn2TsrIbF8AylEleBjm_Jo1sI--a3ZsXtPQHewsDkcC1oZDpwntqs"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
            <div className="absolute top-2 left-2 flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-error pulse-glow"></div>
              <span className="font-label-sm text-[10px] text-white">LIVE: GATEWAY</span>
            </div>
          </div>

          <div 
            className="absolute -left-6 bottom-8 w-48 h-32 glass-panel rounded-xl overflow-hidden hologram-tilt border-primary/10 shadow-xl hidden md:block"
            style={{
              transform: `perspective(1000px) rotateY(${coords.x}deg) rotateX(${coords.y}deg)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <img 
              alt="Security feed of living area" 
              className="w-full h-full object-cover grayscale opacity-60"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuALCjuhVFqYLF8DIR9pT2LqD-BgCQCTpLB5X_IUVGoPYPl1gJTiiMhdfLiA7AexCQD2UtSt-vEoQEwFRVNgKPCc0t84LuWEJ3i9skBiXn4p85MrEETu20X7TLgKxBTGWHbCqQOSa0xVWsqfpHzDPIgFMIM87NG0WONOVvG3HKTs8VYWmyhdXFk1CbuToOPIbBJ5b8wPh4gCyl1WeTFRIhigIDoBBSwqSBThseJAFcaODDzhZFO_Cw6ixaac8VpW5BMjCbj0dv6SBGA"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
            <div className="absolute top-2 left-2 flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-error pulse-glow"></div>
              <span className="font-label-sm text-[10px] text-white">LIVE: ATRIUM</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Stats & Controls */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Large Control Panel */}
        <div className="md:col-span-2 glass-panel p-8 rounded-3xl space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <span className="material-symbols-outlined text-[120px]">shield_with_heart</span>
          </div>
          <div className="relative z-10">
            <h3 className="font-headline-lg text-headline-lg text-on-background mb-2">Neural Defense</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">The AI system manages 14 sensor nodes and 6 biometric access points in real-time.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
            <div className="glass-panel p-6 rounded-2xl border-white/5 space-y-4">
              <div className="flex justify-between items-start">
                <span className="material-symbols-outlined text-primary text-3xl">fingerprint</span>
                <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-[10px] font-bold">ACTIVE</div>
              </div>
              <div>
                <p className="font-headline-md text-headline-md text-on-background">Biometrics</p>
                <p className="font-body-md text-body-md text-on-surface-variant">Retinal & Palm ID synced</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-full bg-white/5 rounded-full">
                  <div className="h-full bg-primary w-[100%] rounded-full shadow-[0_0_10px_#00daf3]"></div>
                </div>
              </div>
            </div>
            
            <div className="glass-panel p-6 rounded-2xl border-white/5 space-y-4">
              <div className="flex justify-between items-start">
                <span className="material-symbols-outlined text-secondary text-3xl">radar</span>
                <div className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-[10px] font-bold">READY</div>
              </div>
              <div>
                <p className="font-headline-md text-headline-md text-on-background">LiDAR Mesh</p>
                <p className="font-body-md text-body-md text-on-surface-variant">42m perimeter coverage</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-full bg-white/5 rounded-full">
                  <div className="h-full bg-secondary w-[85%] rounded-full shadow-[0_0_10px_rgba(209,188,255,0.5)]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical Activity Log */}
        <div className="glass-panel p-6 rounded-3xl flex flex-col min-h-[360px]">
          <h3 className="font-headline-md text-headline-md text-on-background mb-6">Recent Activity</h3>
          <div className="space-y-6 flex-1 overflow-y-auto pr-2 custom-scrollbar">
            {activities.map((item, index) => (
              <div key={index} className="flex gap-4 items-start border-l-2 border-primary/30 pl-4">
                <div className={`mt-1.5 w-2 h-2 rounded-full ${
                  item.type === 'primary' ? 'bg-primary shadow-[0_0_8px_#00daf3]' : 'bg-outline-variant'
                }`}></div>
                <div>
                  <p className={`font-label-sm text-label-sm ${
                    item.type === 'primary' ? 'text-primary' : 'text-on-surface-variant'
                  }`}>{item.time}</p>
                  <p className="font-body-md text-body-md text-on-background">{item.title}</p>
                  <p className="font-label-sm text-[11px] text-on-surface-variant">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Access Controls Section */}
      <section className="space-y-10">
        <div className="text-center space-y-4">
          <h2 className="font-headline-lg text-headline-lg text-on-background">Command & Control</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
            Toggle secure zones and manage guest access through the high-contrast holographic interface.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Toggle Items */}
          {[
            { key: 'mainHouse', label: 'Main House', icon: 'home_iot_device' },
            { key: 'garageVault', label: 'Garage Vault', icon: 'garage_home' },
            { key: 'outerPerimeter', label: 'Outer Perimeter', icon: 'outdoor_garden' },
            { key: 'guestEntry', label: 'Guest Entry', icon: 'door_front' }
          ].map((zone) => {
            const active = toggles[zone.key];
            return (
              <div 
                key={zone.key}
                onClick={() => handleToggle(zone.key)}
                className={`glass-panel p-6 rounded-2xl flex flex-col items-center gap-4 group cursor-pointer transition-all hover:border-primary/40 ${
                  active ? 'active-glass' : 'hover:bg-white/5'
                }`}
              >
                <span className={`material-symbols-outlined text-4xl transition-colors ${
                  active ? 'text-primary' : 'text-on-surface-variant group-hover:text-primary'
                }`}>
                  {zone.icon}
                </span>
                <p className="font-label-sm text-label-sm text-on-surface-variant">{zone.label}</p>
                <div className={`w-12 h-6 rounded-full relative p-1 flex items-center transition-all ${
                  active ? 'bg-primary/20' : 'bg-white/10'
                }`}>
                  <div className={`w-4 h-4 rounded-full transition-transform duration-300 ${
                    active 
                      ? 'bg-primary translate-x-6 shadow-[0_0_10px_#00daf3]' 
                      : 'bg-on-surface-variant translate-x-0'
                  }`}></div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
