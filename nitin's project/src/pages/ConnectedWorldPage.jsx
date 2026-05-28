import React from 'react';

export default function ConnectedWorldPage() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-surface-container-lowest border-t border-outline-variant/10">
      
      {/* Cinematic Hero Section */}
      <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Spline 3D Distorting Typography Backdrop */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <iframe 
            src="https://my.spline.design/distortingtypography-JdWuSyb64HUUTqX6twnv52Vt/" 
            frameBorder="0" 
            width="100%" 
            height="100%"
            title="Spline Distorting Typography"
            className="w-full h-full object-cover scale-105 opacity-60"
          ></iframe>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40"></div>
          {/* Atmospheric SVG Overlay for AI Network Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-35" preserveAspectRatio="none" viewBox="0 0 1000 1000">
            <path className="network-line" d="M0,200 Q250,100 500,200 T1000,100" fill="none" stroke="#00daf3" strokeWidth="0.5"></path>
            <path className="network-line" d="M0,500 Q300,450 600,550 T1000,400" fill="none" stroke="#00daf3" strokeWidth="0.5" style={{ animationDelay: '-2s' }}></path>
            <path className="network-line" d="M0,800 Q400,850 700,750 T1000,900" fill="none" stroke="#00daf3" strokeWidth="0.5" style={{ animationDelay: '-5s' }}></path>
          </svg>
        </div>

        {/* Content Canvas */}
        <div className="relative z-10 text-center px-6 md:px-16 max-w-4xl">
          <div className="inline-block px-4 py-1 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md mb-8">
            <span className="font-label-sm text-label-sm text-primary tracking-widest uppercase">The Pinnacle of Living</span>
          </div>
          <h1 className="font-display-lg text-display-lg text-4xl md:text-8xl mb-8 font-bold drop-shadow-2xl text-white">
            Designed for Tomorrow
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
            Experience the harmony of autonomous architecture and domestic serenity. Our ecosystem anticipates your needs, securing your peace of mind before you even ask.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button 
              onClick={() => {
                const target = document.getElementById('ecosystem');
                if (target) target.scrollIntoView({ behavior: 'smooth' });
              }}
              className="glow-border group relative px-10 py-5 rounded-xl bg-surface-container-highest text-primary font-display-lg text-headline-md flex items-center justify-center gap-3 transition-all duration-500 hover:shadow-[0_0_50px_rgba(0,218,243,0.3)] cursor-pointer"
            >
              Back to Ecosystem
              <span className="material-symbols-outlined group-hover:-translate-y-1 transition-transform">arrow_upward</span>
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="font-label-sm text-[10px] uppercase tracking-widest text-primary">Key Attributes</span>
          <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent"></div>
        </div>
      </div>

      {/* Feature Bento Grid */}
      <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto w-full z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Large Feature Card */}
          <div className="md:col-span-8 glass-panel p-10 rounded-3xl group cursor-pointer overflow-hidden relative border border-outline-variant/20 min-h-[300px]">
            <div className="relative z-10">
              <span className="material-symbols-outlined text-primary text-5xl mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>
                auto_awesome
              </span>
              <h3 className="font-headline-lg text-headline-lg mb-4 text-white text-3xl font-semibold">Autonomous Intelligence</h3>
              <p className="font-body-md text-on-surface-variant max-w-md">
                Our neural network adapts to your circadian rhythm, optimizing lighting and climate for peak recovery.
              </p>
            </div>
            <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-30 group-hover:opacity-50 transition-opacity">
              <img 
                className="w-full h-full object-cover" 
                alt="Control Interface"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBq-843Har_KbYPVu2pFpCpOrve6wxZtie6Tm42M--AfX3YhyBmY6SYdBThttZcSRMaScoathJLWt2O2yJdDkDXwYH-Zg0RCkTUn5ipPU2H4Z33i3CXZNVmJp40wi5heLNvM1SlFSdAXllxFxuUdtVTm4rAyWmvNdtD7Br7SuNt7jKKCNSWItzLoxUtwuzhqSQ0j07ED_1lrtYl_J-LA1FWkwLKHIo7BVs-o-bZSnRTHNC6SWPfi-jTKl-e-TX3s6tkXfkaOyQQC2Q"
              />
            </div>
          </div>

          {/* Small Feature Card */}
          <div className="md:col-span-4 glass-panel p-10 rounded-3xl border-primary/20 bg-primary/5 min-h-[300px] flex flex-col justify-between">
            <div>
              <span className="material-symbols-outlined text-primary text-4xl mb-6">shield_with_heart</span>
              <h3 className="font-headline-md text-headline-md mb-2 text-white font-semibold">Biometric Security</h3>
              <p className="font-body-md text-on-surface-variant">Uncompromising safety through invisible perimeter sensing.</p>
            </div>
            <div className="mt-8 pt-8 border-t border-outline-variant/30 flex items-center justify-between">
              <span className="text-label-sm font-label-sm opacity-60">PERIMETER STATUS</span>
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-[10px] font-bold shadow-[0_0_15px_rgba(0,218,243,0.2)]">
                SECURED
              </span>
            </div>
          </div>
        </div>
      </section>

    </section>
  );
}
