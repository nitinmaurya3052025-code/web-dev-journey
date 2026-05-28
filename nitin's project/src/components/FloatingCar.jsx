import React, { useState, useEffect, useRef } from 'react';

export default function FloatingCar() {
  const [position, setPosition] = useState({ x: 80, y: 20, rotation: 180 });
  const prevPos = useRef({ x: 80, y: 20, rotation: 180 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) return;
      
      const p = scrollY / maxScroll; // Scroll percentage: 0 to 1

      let targetX = 80;
      let targetY = 20;

      // Add small natural sine-wave noise based on scroll depth
      const noiseX = Math.sin(scrollY * 0.015) * 3;
      const noiseY = Math.cos(scrollY * 0.015) * 3;

      if (p <= 0.25) {
        // Section 1: Ecosystem (starts right, moves down-right)
        const t = p / 0.25;
        targetX = 80 + t * 10; // 80% to 90%
        targetY = 20 + t * 40; // 20% to 60%
      } else if (p <= 0.5) {
        // Section 2: Security (moves to top left)
        const t = (p - 0.25) / 0.25;
        targetX = 90 - t * 80; // 90% to 10%
        targetY = 60 - t * 45; // 60% to 15%
      } else if (p <= 0.75) {
        // Section 3: Climate (moves left to right)
        const t = (p - 0.5) / 0.25;
        targetX = 10 + t * 75; // 10% to 85%
        targetY = 15 + t * 30; // 15% to 45%
      } else {
        // Section 4 & 5: Energy & Connected (moves random and down)
        const t = (p - 0.75) / 0.25;
        targetX = 85 - t * 50 + Math.sin(scrollY * 0.04) * 12; // oscillates towards center
        targetY = 45 + t * 35; // 45% to 80%
      }

      const finalX = targetX + noiseX;
      const finalY = targetY + noiseY;

      // Calculate travel direction (dx, dy)
      const dx = finalX - prevPos.current.x;
      const dy = finalY - prevPos.current.y;
      
      let angle = prevPos.current.rotation;
      if (Math.abs(dx) > 0.05 || Math.abs(dy) > 0.05) {
        // Calculate heading angle (top-down view where 0 deg is facing UP)
        angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
      }

      setPosition({
        x: finalX,
        y: finalY,
        rotation: angle
      });

      prevPos.current = { x: finalX, y: finalY, rotation: angle };
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial run
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="fixed z-50 pointer-events-none select-none"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transition: 'left 0.3s ease-out, top 0.3s ease-out',
        transform: `translate(-50%, -50%) rotate(${position.rotation}deg)`,
      }}
    >
      {/* Top-down Futuristic Car SVG */}
      <svg viewBox="0 0 32 64" className="w-10 h-20 filter drop-shadow-[0_0_15px_rgba(0,218,243,0.85)]">
        {/* Wheels */}
        <rect x="1" y="12" width="3" height="10" rx="2" fill="#0d0e12" stroke="#00daf3" strokeWidth="0.5" />
        <rect x="28" y="12" width="3" height="10" rx="2" fill="#0d0e12" stroke="#00daf3" strokeWidth="0.5" />
        <rect x="1" y="42" width="3" height="10" rx="2" fill="#0d0e12" stroke="#00daf3" strokeWidth="0.5" />
        <rect x="28" y="42" width="3" height="10" rx="2" fill="#0d0e12" stroke="#00daf3" strokeWidth="0.5" />

        {/* Chassis */}
        <path d="M5,14 Q5,4 16,4 Q27,4 27,14 L27,50 Q27,60 16,60 Q5,60 5,50 Z" fill="#121317" stroke="#00e5ff" strokeWidth="2.5" />
        
        {/* Cockpit Canopy */}
        <path d="M8,20 C8,12 16,12 16,12 C16,12 24,12 24,20 L24,38 C24,44 16,44 16,44 C16,44 8,44 8,38 Z" fill="rgba(0, 218, 243, 0.25)" stroke="rgba(0, 218, 243, 0.7)" strokeWidth="1" />
        
        {/* Laser center trim line */}
        <line x1="16" y1="12" x2="16" y2="44" stroke="rgba(0, 229, 255, 0.5)" strokeWidth="1.5" />

        {/* Glowing Headlights */}
        <circle cx="9" cy="6" r="3" fill="#ffffff" className="animate-pulse" />
        <circle cx="23" cy="6" r="3" fill="#ffffff" className="animate-pulse" />

        {/* Rear Neon strip */}
        <rect x="8" y="58" width="16" height="1.5" rx="0.5" fill="#ffb4ab" className="animate-pulse" />
      </svg>
    </div>
  );
}
