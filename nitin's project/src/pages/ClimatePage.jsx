import React, { useState } from 'react';

export default function ClimatePage() {
  const [lightingMode, setLightingMode] = useState('cool'); // 'cool' or 'warm'
  const [selectedPreset, setSelectedPreset] = useState('cinema'); // 'cinema', 'restorative', 'focused'
  const [circadianSync, setCircadianSync] = useState(true);

  const presets = [
    { id: 'cinema', name: 'Cinema Mode', desc: '15% Dimmed Cyan', icon: 'movie' },
    { id: 'restorative', name: 'Restorative', desc: 'Night mode', icon: 'bedtime' },
    { id: 'focused', name: 'Focused', desc: 'Natural light', icon: 'menu_book' }
  ];

  // Dynamic background style based on warm vs cool
  const getLightingStyle = () => {
    if (lightingMode === 'warm') {
      return {
        background: 'radial-gradient(circle at 20% 30%, rgba(251, 146, 60, 0.25), transparent 70%)',
        boxShadow: 'inset 0 0 100px rgba(251, 146, 60, 0.1)'
      };
    }
    return {
      background: 'radial-gradient(circle at 20% 30%, rgba(0, 218, 243, 0.2), transparent 70%)',
      boxShadow: 'none'
    };
  };

  return (
    <div className="pt-32 pb-20 px-6 md:px-16 max-w-[1600px] mx-auto">
      {/* Header Section */}
      <header className="mb-16 text-center max-w-3xl mx-auto">
        <h1 className="font-display-lg text-headline-lg text-primary mb-4 text-4xl md:text-5xl font-bold">
          Environmental Intelligence
        </h1>
        <p className="text-on-surface-variant font-body-lg text-body-lg">
          Precision engineering for your domestic atmosphere. Control light wavelengths and thermal dynamics with effortless autonomy.
        </p>
      </header>

      {/* Main Intelligence Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left: Smart Lighting Experience */}
        <section 
          className="relative group min-h-[600px] rounded-3xl overflow-hidden glass-card flex flex-col justify-end border border-outline-variant/20" 
          id="lighting-section"
        >
          {/* Background image & gradient overlay */}
          <div 
            className="absolute inset-0 z-0 opacity-60 lighting-transition" 
            style={getLightingStyle()}
          >
            <img 
              alt="Luxury Living Room" 
              className="w-full h-full object-cover mix-blend-overlay transition-transform duration-500 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbgq-S6MgfT1Pj-xhVecQ8pApxZy-xwiRHu5LpYRrusabXTOgoRYlDI47B9rqRIOjsit6ndlzHO_UOHqYwReqQD35QbC7sydPFc_rOTdKc1OCU45paK_QRbcoKyDbJ3DV2rFw4UY59o1pRIvw2q5zRYS3wRj-JN_f_neNbMFbnBlEKNNlLGOHu4iSr6mzrUoi9dtPuRlmiqjTv6Ipr1z_IYOKunX-dssE2hlZw1ugInBpDFK4goo80Ohdi9tVYPzKOGGgr0EysHAs"
            />
          </div>

          {/* Floating Control Dashboard */}
          <div className="relative z-10 p-8 flex flex-col gap-6 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/80 to-transparent">
            <div className="flex justify-between items-end">
              <div>
                <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full mb-4 inline-block">
                  Illumination Module
                </span>
                <h2 className="font-display-lg text-headline-lg text-white text-3xl font-semibold">Lighting Experience</h2>
              </div>
              
              <div className="flex gap-2">
                <button 
                  onClick={() => setLightingMode('warm')}
                  className={`w-12 h-12 rounded-full border border-white/20 flex items-center justify-center transition-all cursor-pointer ${
                    lightingMode === 'warm' 
                      ? 'bg-orange-500/40 border-orange-400' 
                      : 'bg-orange-500/10 hover:bg-orange-500/20'
                  }`}
                >
                  <span className="material-symbols-outlined text-orange-200">wb_sunny</span>
                </button>
                <button 
                  onClick={() => setLightingMode('cool')}
                  className={`w-12 h-12 rounded-full border border-white/20 flex items-center justify-center transition-all cursor-pointer ${
                    lightingMode === 'cool' 
                      ? 'bg-primary/40 border-primary' 
                      : 'bg-primary/10 hover:bg-primary/20'
                  }`}
                >
                  <span className="material-symbols-outlined text-primary">ac_unit</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {presets.map((preset) => {
                const isActive = selectedPreset === preset.id;
                return (
                  <div 
                    key={preset.id}
                    onClick={() => setSelectedPreset(preset.id)}
                    className={`glass-card p-4 rounded-xl cursor-pointer hover:border-primary/40 transition-all ${
                      isActive ? 'active-glow-cyan border-primary/30' : 'bg-white/5'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <span className={`material-symbols-outlined ${isActive ? 'text-primary' : 'text-on-surface-variant'}`} style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}>
                        {preset.icon}
                      </span>
                      {isActive && (
                        <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(0,218,243,0.8)]"></div>
                      )}
                    </div>
                    <p className="font-body-md text-white font-semibold">{preset.name}</p>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">{preset.desc}</p>
                  </div>
                );
              })}
            </div>

            <div 
              onClick={() => setCircadianSync(!circadianSync)}
              className="glass-card p-6 rounded-2xl flex items-center justify-between cursor-pointer hover:border-primary/30"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary animate-pulse">auto_awesome</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Circadian Rhythm Sync</p>
                  <p className="text-on-surface-variant text-label-sm">
                    {circadianSync ? 'Active • Following solar path' : 'Standby • Manual override'}
                  </p>
                </div>
              </div>
              <div className={`w-12 h-6 rounded-full relative cursor-pointer p-1 flex items-center transition-all ${
                circadianSync ? 'bg-primary-container' : 'bg-white/10'
              }`}>
                <div className={`w-4 h-4 rounded-full transition-transform duration-300 ${
                  circadianSync ? 'bg-on-primary translate-x-6 shadow-[0_0_10px_rgba(0,218,243,0.5)]' : 'bg-on-surface-variant translate-x-0'
                }`}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Right: Climate Intelligence */}
        <section className="min-h-[600px] rounded-3xl overflow-hidden flex flex-col gap-6">
          
          {/* Airflow Visualization Card */}
          <div className="glass-card flex-1 rounded-3xl p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 z-10">
              <div className="flex flex-col items-end">
                <p className="font-data-display text-4xl md:text-5xl text-primary font-light">22.5°C</p>
                <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mt-1">Ambient Temp</p>
              </div>
            </div>
            
            <div className="relative z-10 max-w-md">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest bg-secondary/10 px-3 py-1 rounded-full mb-4 inline-block">
                Atmospheric Logic
              </span>
              <h2 className="font-display-lg text-headline-lg text-white text-3xl font-semibold mb-6">Climate Intelligence</h2>
              
              {/* Climate stats */}
              <div className="space-y-6">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center px-1">
                    <span className="text-label-sm text-on-surface-variant font-medium">Humidity</span>
                    <span className="text-label-sm text-white font-bold">45%</span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[45%] rounded-full shadow-[0_0_10px_rgba(0,218,243,0.5)]"></div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center px-1">
                    <span className="text-label-sm text-on-surface-variant font-medium">Air Purity</span>
                    <span className="text-label-sm text-white font-bold">99.8%</span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
                    <div className="h-full bg-secondary w-[99%] rounded-full shadow-[0_0_10px_rgba(112,0,255,0.5)]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Animated Airflow Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
              <div className="grid grid-cols-5 gap-8">
                <div className="h-64 w-[1.5px] bg-gradient-to-b from-transparent via-primary to-transparent airflow-particle" style={{ animationDelay: '0s' }}></div>
                <div className="h-64 w-[1.5px] bg-gradient-to-b from-transparent via-primary to-transparent airflow-particle" style={{ animationDelay: '0.8s' }}></div>
                <div className="h-64 w-[1.5px] bg-gradient-to-b from-transparent via-secondary to-transparent airflow-particle" style={{ animationDelay: '1.6s' }}></div>
                <div className="h-64 w-[1.5px] bg-gradient-to-b from-transparent via-primary to-transparent airflow-particle" style={{ animationDelay: '2.4s' }}></div>
                <div className="h-64 w-[1.5px] bg-gradient-to-b from-transparent via-primary to-transparent airflow-particle" style={{ animationDelay: '3.2s' }}></div>
              </div>
            </div>
          </div>

          {/* Interactive Environmental Graph */}
          <div className="glass-card h-[280px] rounded-3xl p-8 relative overflow-hidden group">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-body-md text-white font-semibold flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">trending_up</span>
                Thermal Efficiency
              </h3>
              <div className="flex gap-4">
                <span className="text-label-sm text-on-surface-variant flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary inline-block"></span> 
                  Indoor
                </span>
                <span className="text-label-sm text-on-surface-variant flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary inline-block"></span> 
                  Passive
                </span>
              </div>
            </div>

            {/* SVG Graph */}
            <div className="w-full h-32 relative">
              <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
                <path d="M0 80 Q 50 20, 100 60 T 200 40 T 300 70 T 400 30" fill="none" stroke="url(#cyanGradient)" strokeWidth="2.5"></path>
                <path d="M0 90 Q 50 50, 100 80 T 200 60 T 300 85 T 400 50" fill="none" stroke="url(#purpleGradient)" strokeWidth="2"></path>
                <defs>
                  <linearGradient id="cyanGradient" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="#00daf3"></stop>
                    <stop offset="100%" stopColor="#9cf0ff"></stop>
                  </linearGradient>
                  <linearGradient id="purpleGradient" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="#7000ff"></stop>
                    <stop offset="100%" stopColor="#d1bcff"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            
            <div className="flex justify-between mt-4">
              <span className="text-label-sm text-on-surface-variant">00:00</span>
              <span className="text-label-sm text-on-surface-variant">06:00</span>
              <span className="text-label-sm text-on-surface-variant">12:00</span>
              <span className="text-label-sm text-on-surface-variant">18:00</span>
              <span className="text-label-sm text-on-surface-variant">Now</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
