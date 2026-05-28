import React, { useState } from 'react';

export default function EnergyPage() {
  const [orbPulse, setOrbPulse] = useState(false);
  const [coffeeProgress, setCoffeeProgress] = useState(120); // 120 seconds left

  const triggerOrbPulse = () => {
    setOrbPulse(true);
    setTimeout(() => setOrbPulse(false), 2000);
  };

  return (
    <div className="pt-32 pb-20 overflow-x-hidden">
      {/* AI Assistant Hero Section */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center relative px-6 md:px-16 pb-16">
        {/* Neural Background SVG */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
          <svg className="w-full h-full max-h-[700px] opacity-25" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
            <circle className="neural-line" cx="720" cy="450" fill="none" r="300" stroke="url(#neural-grad)" strokeWidth="0.75"></circle>
            <path className="neural-line" d="M720,450 Q850,300 1000,450 T1280,450" fill="none" stroke="#00daf3" strokeWidth="0.75"></path>
            <path className="neural-line" d="M720,450 Q590,600 440,450 T160,450" fill="none" stroke="#00daf3" strokeWidth="0.75"></path>
            <defs>
              <linearGradient id="neural-grad" x1="0%" x2="100%" y1="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#00daf3', stopOpacity: 1 }}></stop>
                <stop offset="100%" style={{ stopColor: '#7000ff', stopOpacity: 1 }}></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Central AI Orb */}
        <div className="relative z-10 flex flex-col items-center mb-16 select-none">
          <div 
            className="w-80 h-80 rounded-full flex items-center justify-center relative transition-transform duration-500 hover:scale-105"
          >
            <iframe
              src="https://my.spline.design/logoreveal-CErk3d4v43gfPGe2mWqrlvmS/"
              frameBorder="0"
              width="100%"
              height="100%"
              title="Spline Logo Reveal"
              className="w-full h-full object-cover scale-110 pointer-events-none"
            ></iframe>
          </div>
          <h1 className="mt-12 font-display-lg text-headline-lg text-4xl md:text-6xl text-center font-bold tracking-tight">
            <span className="gradient-text">Neural Core AI</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl text-center mt-4">
            Proactive. Invisible. Personal. The central intelligence that orchestrates your high-end architectural experience through predictive biometric recognition.
          </p>
        </div>

        {/* Floating Automation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl z-10">
          
          <div className="glass-card p-8 rounded-xl relative overflow-hidden group">
            <div className="flex justify-between items-start mb-6">
              <div className="bg-primary/10 p-3 rounded-lg">
                <span className="material-symbols-outlined text-primary" data-icon="coffee_maker">coffee_maker</span>
              </div>
              <span className="font-label-sm text-label-sm bg-primary/20 text-primary px-3 py-1 rounded-full border border-primary/30 shadow-[0_0_10px_rgba(0,218,243,0.1)] font-bold">
                ACTIVE
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary mb-2">Morning Routine</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Precision brewing initiated. Temperature set to 92°C based on your roast preference.</p>
            <div className="mt-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="font-label-sm text-label-sm text-primary">In Progress: brewing coffee</span>
            </div>
          </div>

          <div className="glass-card p-8 rounded-xl relative overflow-hidden group">
            <div className="flex justify-between items-start mb-6">
              <div className="bg-secondary/10 p-3 rounded-lg">
                <span className="material-symbols-outlined text-secondary" data-icon="air_purifier_gen">air_purifier_gen</span>
              </div>
              <span className="font-label-sm text-label-sm bg-secondary/20 text-secondary px-3 py-1 rounded-full border border-secondary/30 font-bold">
                OPTIMIZED
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md text-secondary mb-2">Air Quality</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">HEPA filtration adjusted to Stage 2. Particulate count down to 3 AQI.</p>
            <div className="mt-6 h-1 w-full bg-surface-container rounded-full overflow-hidden">
              <div className="h-full bg-secondary w-3/4"></div>
            </div>
          </div>

          <div className="glass-card p-8 rounded-xl relative overflow-hidden group">
            <div className="flex justify-between items-start mb-6">
              <div className="bg-white/5 p-3 rounded-lg">
                <span className="material-symbols-outlined text-on-surface-variant" data-icon="garage_home">garage_home</span>
              </div>
              <span className="font-label-sm text-label-sm bg-surface-container-high text-on-surface-variant px-3 py-1 rounded-full border border-outline-variant font-bold">
                STANDBY
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Arrival Sync</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Detecting EV within 2km. Preparing garage lighting and entryway temperature.</p>
            <div className="mt-6 flex -space-x-2">
              <div className="w-8 h-8 rounded-full border-2 border-surface bg-surface-bright flex items-center justify-center">
                <span className="material-symbols-outlined text-xs text-primary" data-icon="electric_car">electric_car</span>
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-surface bg-surface-bright flex items-center justify-center">
                <span className="material-symbols-outlined text-xs text-primary" data-icon="light_mode">light_mode</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Energy Management Section */}
      <section className="py-20 bg-surface-container-lowest relative border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-6">
              <span className="font-label-sm text-label-sm text-primary tracking-widest uppercase block">
                Sustainable Autonomy
              </span>
              <h2 className="font-headline-lg text-headline-lg mb-8 leading-tight text-3xl md:text-5xl font-bold">
                Advanced Energy Ecosystem
              </h2>
              
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="p-4 rounded-xl bg-surface-container-high border border-outline-variant/30">
                    <span className="material-symbols-outlined text-primary text-3xl" data-icon="solar_power">solar_power</span>
                  </div>
                  <div>
                    <h4 className="font-headline-md text-headline-md text-on-surface mb-1 font-semibold">Harvesting Efficiency</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Bifacial solar array currently generating 14.2kW. Predictive weather analysis suggests 98% battery capacity by 14:00.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="p-4 rounded-xl bg-surface-container-high border border-outline-variant/30">
                    <span className="material-symbols-outlined text-secondary text-3xl" data-icon="battery_charging_90">battery_charging_90</span>
                  </div>
                  <div>
                    <h4 className="font-headline-md text-headline-md text-on-surface mb-1 font-semibold">Grid Independence</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Zero reliance on municipal power for 42 consecutive days. Smart discharging during peak hours saved $420 this month.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Energy Flow Visualization */}
            <div className="glass-card p-12 rounded-[2rem] relative overflow-hidden bg-surface/30">
              <div className="absolute top-0 right-0 p-8">
                <div className="font-label-sm text-label-sm text-primary flex items-center gap-2 font-semibold">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                  REAL-TIME FLOW
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-12 relative py-8">
                {/* Solar Hub */}
                <div className="text-center group z-10">
                  <div className="w-20 h-20 rounded-full bg-surface-container-highest border border-primary/40 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-primary text-4xl" data-icon="wb_sunny">wb_sunny</span>
                  </div>
                  <div className="font-display-lg text-headline-md text-primary font-bold text-3xl">14.2 kW</div>
                  <div className="font-label-sm text-label-sm text-on-surface-variant uppercase">Solar Yield</div>
                </div>

                {/* Connection Lines (SVG) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400" preserveAspectRatio="none">
                  {/* Top-to-center */}
                  <path className="power-flow" d="M200,90 L200,165" stroke="#00daf3" strokeWidth="2.5"></path>
                  {/* Center-to-bottom */}
                  <path className="power-flow" d="M200,235 L200,310" stroke="#00daf3" strokeWidth="2.5"></path>
                  {/* Center-to-left */}
                  <path className="power-flow" d="M165,200 L75,200" stroke="#00daf3" strokeWidth="2.5"></path>
                  {/* Center-to-right */}
                  <path className="power-flow" d="M235,200 L325,200" stroke="#00daf3" strokeWidth="2.5"></path>
                </svg>

                {/* Battery & Grid */}
                <div className="flex justify-between w-full px-4 z-10">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center mb-3">
                      <span className="material-symbols-outlined text-on-surface-variant text-2xl" data-icon="ev_station">ev_station</span>
                    </div>
                    <div className="font-headline-md text-on-surface font-semibold text-lg">3.4 kW</div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Charging</div>
                  </div>
                  
                  <div className="w-24 h-24 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center shadow-[0_0_30px_rgba(0,218,243,0.2)]">
                    <span className="material-symbols-outlined text-primary text-4xl animate-spin" style={{ animationDuration: '8s' }} data-icon="hub">hub</span>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center mb-3">
                      <span className="material-symbols-outlined text-on-surface-variant text-2xl" data-icon="bolt">bolt</span>
                    </div>
                    <div className="font-headline-md text-on-surface font-semibold text-lg">0.0 kW</div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Grid Pull</div>
                  </div>
                </div>

                {/* Storage */}
                <div className="text-center z-10">
                  <div className="w-20 h-20 rounded-full bg-surface-container-highest border border-secondary/40 flex items-center justify-center mb-4 mx-auto">
                    <span className="material-symbols-outlined text-secondary text-4xl" data-icon="battery_full">battery_full</span>
                  </div>
                  <div className="font-display-lg text-headline-md text-secondary font-bold text-3xl">96%</div>
                  <div className="font-label-sm text-label-sm text-on-surface-variant uppercase">Storage</div>
                </div>
              </div>
            </div>

          </div>

          {/* Weekly Efficiency Analysis Chart Section */}
          <div className="mt-20 glass-card p-12 rounded-[2rem] overflow-hidden bg-surface/30">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
              <div>
                <h3 className="font-headline-lg text-headline-lg text-on-surface text-3xl font-semibold">Weekly Efficiency Analysis</h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">Correlating solar production with domestic consumption trends.</p>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <span className="font-label-sm text-label-sm text-on-surface font-semibold">Production</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-secondary"></div>
                  <span className="font-label-sm text-label-sm text-on-surface font-semibold">Consumption</span>
                </div>
              </div>
            </div>
            
            <div className="relative h-64 w-full">
              {/* Chart Area */}
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 200">
                {/* Area filled for Production */}
                <path d="M0,180 Q100,160 200,80 T400,100 T600,40 T800,90 T1000,60 L1000,200 L0,200 Z" fill="url(#area-grad-production)" opacity="0.12"></path>
                {/* Production Line */}
                <path className="neural-line" d="M0,180 Q100,160 200,80 T400,100 T600,40 T800,90 T1000,60" fill="none" stroke="#00daf3" strokeWidth="3"></path>
                {/* Consumption Line */}
                <path d="M0,190 Q150,170 300,140 T500,150 T700,130 T900,160 T1000,140" fill="none" stroke="#d1bcff" strokeDasharray="8,4" strokeWidth="2.5"></path>
                <defs>
                  <linearGradient id="area-grad-production" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#00daf3', stopOpacity: 1 }}></stop>
                    <stop offset="100%" style={{ stopColor: '#00daf3', stopOpacity: 0 }}></stop>
                  </linearGradient>
                </defs>
              </svg>
              
              {/* Timeline Labels */}
              <div className="flex justify-between mt-8 font-label-sm text-label-sm text-on-surface-variant px-4">
                <span>MON</span>
                <span>TUE</span>
                <span>WED</span>
                <span>THU</span>
                <span>FRI</span>
                <span>SAT</span>
                <span>SUN</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Feature Display */}
      <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto border-t border-outline-variant/10">
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 min-h-[500px]">
          {/* Large Image Card */}
          <div className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden group border border-outline-variant/20">
            <img 
              alt="Sustainable Living" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKKrAFpDtHZGknZ1R6252XmkSet5jvKf181B1qQxt_oIWBvADL0PVmUhFUTcfjUrxCDJyUbM9UtFrCgHzTFG2uZtff6UrIxAe6x1okmiyVVTOQOb6j2XTrkPHycRVSDADhhola7dp_pzhTiprnan8RLJ79nLV6VAxUYGT4e5xmmcoqbXsS94K0b7FHJT10wE4-NYIWYXbNhwsyQv4JBZYsEiJ1ps-UoJZ64PMOCnUj22FxREdLybsaoe53ivNQVh5dp94sJTOIeKA"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-10 z-10">
              <h3 className="font-headline-lg text-headline-lg text-white mb-2 text-2xl md:text-3xl font-semibold">Sustainable Harmony</h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
                Architecture that breathes, adapts, and regenerates energy in perfect sync with your biological clock.
              </p>
            </div>
          </div>

          {/* Secondary Metric */}
          <div className="md:col-span-1 glass-card rounded-3xl p-8 flex flex-col justify-between border border-outline-variant/20 min-h-[220px]">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary" data-icon="water_drop">water_drop</span>
            </div>
            <div>
              <div className="font-data-display text-4xl text-primary font-bold">100%</div>
              <div className="font-label-sm text-label-sm text-on-surface-variant uppercase mt-1">Water Recycled</div>
            </div>
          </div>

          {/* Third Metric */}
          <div className="md:col-span-1 glass-card rounded-3xl p-8 flex flex-col justify-between border border-outline-variant/20 min-h-[220px]">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary" data-icon="thermostat">thermostat</span>
            </div>
            <div>
              <div className="font-data-display text-4xl text-secondary font-bold">22.4°C</div>
              <div className="font-label-sm text-label-sm text-on-surface-variant uppercase mt-1">Thermal Offset</div>
            </div>
          </div>

          {/* Wide Bottom Card */}
          <div className="md:col-span-2 glass-card rounded-3xl p-8 flex items-center gap-8 border border-outline-variant/20 min-h-[220px]">
            <div className="flex-1">
              <h4 className="font-headline-md text-headline-md text-on-surface mb-2 font-semibold">Neural Prediction</h4>
              <p className="font-body-md text-body-md text-on-surface-variant">
                The AI has learned your patterns and reduced energy waste by 34% this quarter.
              </p>
            </div>
            <div className="hidden sm:block">
              <button className="bg-surface-bright p-4 rounded-full border border-outline-variant hover:border-primary transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-primary" data-icon="arrow_forward">arrow_forward</span>
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
