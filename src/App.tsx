import React from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { CharacterSection } from './components/CharacterSection';
import { ShipLayoutSection } from './components/ShipLayoutSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen ocean-ambient-bg text-slate-100 flex flex-col selection:bg-[#b38f53]/30 selection:text-[#dfc699] relative">
      {/* Subtle Understated Ocean Ambient Pattern Overlay */}
      <div className="ocean-caustics-overlay" aria-hidden="true" />

      {/* Top Bar Navigation */}
      <Navigation />

      {/* Main Content Sections: Precise Order Requested */}
      <main className="flex-1 relative z-10">
        {/* 1. Brief, romantic description of Saint Blue Cruise owned by Hanyoung Group */}
        <HeroSection />

        {/* 2. The ship's deck-by-deck guide (with cruise ship cross-sectional illustrations) */}
        <ShipLayoutSection />

        {/* 3. Character introductions (MAIN CHARACTER) */}
        <CharacterSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
