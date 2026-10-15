import React from 'react';

export const Navigation: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#030712]/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 sm:gap-8 px-4 sm:px-6 py-3 sm:py-4">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="/" 
          className="text-base sm:text-xl font-cinzel font-bold tracking-widest text-white whitespace-nowrap shrink-0 flex items-center gap-1.5 sm:gap-2 group"
        >
          <span className="text-[#c5a880] text-xs sm:text-sm">✦</span>
          <span className="group-hover:text-[#dfc699] transition-colors">SAINT BLUE</span>
        </a>

        {/* Zone 2: Concise single-line text navigation links matching section order */}
        <nav className="flex items-center gap-4 sm:gap-8 text-xs sm:text-sm font-medium text-slate-300">
          <a href="#ship-layout" className="py-1 hover:text-[#dfc699] transition-colors whitespace-nowrap shrink-0">
            선내 층별 안내
          </a>
          <a href="#characters" className="py-1 hover:text-[#dfc699] transition-colors whitespace-nowrap shrink-0">
            MAIN CHARACTER
          </a>
        </nav>

        {/* Zone 3: Subtle Brand Identity Tag */}
        <div className="hidden sm:flex items-center shrink-0">
          <span className="text-[11px] font-mono tracking-widest text-[#b38f53] uppercase">
            LUXURY CRUISE GUIDE
          </span>
        </div>
      </div>
    </header>
  );
};
