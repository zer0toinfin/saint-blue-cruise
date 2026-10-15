import React, { useState } from 'react';
import { DECK_DATA } from '../data/cruiseData';
import { CruiseShipCrossSection } from './CruiseShipCrossSection';
import { DeckHorizontalFloorPlan } from './DeckHorizontalFloorPlan';
import { Compass, Crown, Briefcase, ShieldAlert, Users, Key, ChevronDown, ChevronUp, Layers } from 'lucide-react';

export const ShipLayoutSection: React.FC = () => {
  // Sequential order: 10F down to 1F (top deck to bottom deck)
  const sequentialDecks = [...DECK_DATA].reverse();

  // State to track which decks are expanded. Default: 10F and 3F expanded initially for immediate rich content
  const [expandedDecks, setExpandedDecks] = useState<Record<number, boolean>>({
    10: true,
    9: false,
    8: false,
    7: false,
    6: false,
    5: false,
    4: false,
    3: true,
    2: false,
    1: false
  });

  const toggleDeck = (floor: number) => {
    setExpandedDecks((prev) => ({
      ...prev,
      [floor]: !prev[floor]
    }));
  };

  const expandAll = () => {
    const allOpen: Record<number, boolean> = {};
    sequentialDecks.forEach((d) => (allOpen[d.floor] = true));
    setExpandedDecks(allOpen);
  };

  const collapseAll = () => {
    const allClosed: Record<number, boolean> = {};
    sequentialDecks.forEach((d) => (allClosed[d.floor] = false));
    setExpandedDecks(allClosed);
  };

  const handleMasterSelectFloor = (floor: number) => {
    setExpandedDecks((prev) => ({
      ...prev,
      [floor]: true
    }));
    const element = document.getElementById(`deck-${floor}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="ship-layout" className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto scroll-mt-16">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
        <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono tracking-[0.25em] text-[#c5a880] uppercase mb-2">
          <span>HANYOUNG CRUISE VESSEL SCHEMATICS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-cinzel tracking-widest text-white mb-2">
          SHIP LAYOUT
        </h2>
        <p className="text-xs sm:text-sm text-[#dfc699] tracking-wider uppercase font-mono">
          세인트 블루 선내 시설 안내
        </p>
        <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-[#b38f53] to-transparent mt-3" />
      </div>

      {/* 1. Master Vertical Cross-Sectional Illustration of the Cruise Ship */}
      <div className="mb-10 sm:mb-14">
        <CruiseShipCrossSection onSelectFloor={handleMasterSelectFloor} />
      </div>

      {/* Guide Controls: Expand / Collapse All Toggles */}
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10 text-xs text-slate-400">
        <div className="flex items-center gap-2 font-mono">
          <Layers className="w-4 h-4 text-[#c5a880]" />
          <span>10F ➔ 1F 층별 안내</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={expandAll}
            className="px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
          >
            모두 펼치기
          </button>
          <button
            type="button"
            onClick={collapseAll}
            className="px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
          >
            모두 접기
          </button>
        </div>
      </div>

      {/* 2. Sequential Deck-by-Deck Guide with Expandable Toggles */}
      <div className="space-y-6">
        {sequentialDecks.map((deck) => {
          const isOpen = !!expandedDecks[deck.floor];

          return (
            <div
              key={deck.floor}
              id={`deck-${deck.floor}`}
              className={`rounded-2xl transition-all duration-300 border scroll-mt-20 overflow-hidden ${
                isOpen
                  ? 'bg-gradient-to-b from-slate-950/90 via-[#060c18] to-slate-950/90 border-[#b38f53]/50 shadow-xl'
                  : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700'
              }`}
            >
              {/* Deck Toggle Header Bar */}
              <button
                type="button"
                onClick={() => toggleDeck(deck.floor)}
                className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none transition-colors"
              >
                <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                  {/* Deck Floor Badge */}
                  <span className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center font-mono text-sm sm:text-base font-bold shrink-0 transition-all ${
                    isOpen
                      ? 'metallic-gold-btn text-slate-950 shadow-md'
                      : 'bg-white/5 text-[#dfc699] border border-white/10'
                  }`}>
                    {deck.floor}F
                  </span>

                  {/* Deck Title & Subtitle */}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-0.5">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono metallic-gold-badge">
                        {deck.category}
                      </span>
                      <span className="text-[11px] text-slate-400 font-mono hidden sm:inline">
                        {deck.subtitle}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-xl font-cinzel font-bold text-white truncate">
                      {deck.name}
                    </h3>
                  </div>
                </div>

                {/* Toggle Icon Indicator */}
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[11px] text-slate-400 font-mono hidden md:inline">
                    {isOpen ? '닫기' : '자세히 보기'}
                  </span>
                  <div className={`p-2 rounded-lg bg-white/5 text-slate-300 border border-white/10 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-[#b38f53]/20 text-[#dfc699]' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </button>

              {/* Expandable Deck Content */}
              {isOpen && (
                <div className="px-4 sm:px-6 pb-6 pt-2 border-t border-white/10 animate-fade-deck space-y-6">
                  {/* Horizontal Architectural Floor Plan */}
                  <div className="mt-2">
                    <DeckHorizontalFloorPlan floor={deck.floor} />
                  </div>

                  {/* Deck Overview */}
                  <div className="p-4 sm:p-6 rounded-xl bg-black/40 border border-white/5">
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-serif-luxury">
                      {deck.overview}
                    </p>
                  </div>

                  {/* Facilities Grid */}
                  <div>
                    <h4 className="text-xs font-mono text-[#c5a880] uppercase tracking-wider mb-3">
                      {deck.floor}F 주요 시설 목록 ({deck.facilities.length}개)
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                      {deck.facilities.map((fac) => {
                        return (
                          <div
                            key={fac.id}
                            className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-[#b38f53]/40 transition-all duration-300 flex flex-col justify-between"
                          >
                            <div>
                              <div className="flex items-start justify-between gap-2 mb-2">
                                <h5 className="text-sm font-bold text-white flex items-center gap-1.5">
                                  <span>{fac.name}</span>
                                </h5>

                                {/* Access Tag */}
                                <span className={`px-2 py-0.5 rounded text-[10px] font-medium border flex items-center gap-1 shrink-0 ${
                                  fac.accessType === 'VIP 전용'
                                    ? 'bg-purple-950/50 border-purple-500/30 text-purple-300'
                                    : fac.accessType === '승무원 전용'
                                    ? 'bg-blue-950/50 border-blue-500/30 text-blue-300'
                                    : fac.accessType === '제한 구역'
                                    ? 'bg-rose-950/50 border-rose-500/30 text-rose-300'
                                    : fac.accessType === '예약제'
                                    ? 'bg-amber-950/50 border-[#b38f53]/40 text-[#dfc699]'
                                    : 'bg-slate-900 border-slate-700 text-slate-300'
                                }`}>
                                  {fac.accessType === 'VIP 전용' && <Crown className="w-3 h-3" />}
                                  {fac.accessType === '승무원 전용' && <Briefcase className="w-3 h-3" />}
                                  {fac.accessType === '제한 구역' && <ShieldAlert className="w-3 h-3" />}
                                  {fac.accessType === '승객 공용' && <Users className="w-3 h-3" />}
                                  {fac.accessType === '예약제' && <Key className="w-3 h-3" />}
                                  <span>{fac.accessType}</span>
                                </span>
                              </div>

                              <p className="text-xs text-slate-300 leading-relaxed">
                                {fac.description}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
