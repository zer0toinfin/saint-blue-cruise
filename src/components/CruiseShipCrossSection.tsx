import React from 'react';

interface CruiseShipCrossSectionProps {
  activeFloor?: number;
  onSelectFloor?: (floor: number) => void;
}

export const CruiseShipCrossSection: React.FC<CruiseShipCrossSectionProps> = ({
  activeFloor,
  onSelectFloor,
}) => {
  // 10 Decks data from top (10F) to bottom (1F)
  const deckTiers = [
    { floor: 10, name: '10F', label: '함교 · 전망대 · 선셋 테라스', y: 32, h: 22, xStart: 28, xEnd: 92 },
    { floor: 9, name: '9F', label: 'VIP 스위트 · 오너스 구역', y: 56, h: 20, xStart: 22, xEnd: 94 },
    { floor: 8, name: '8F', label: '스파 · 피트니스 · 웰니스', y: 78, h: 20, xStart: 18, xEnd: 96 },
    { floor: 7, name: '7F', label: '메인 수영장 · 야외 레저', y: 100, h: 20, xStart: 14, xEnd: 97 },
    { floor: 6, name: '6F', label: '대극장 · 연회장 · 공식 행사', y: 122, h: 20, xStart: 10, xEnd: 98 },
    { floor: 5, name: '5F', label: '카지노 · 피아노 바 · 그랜드 라운지', y: 144, h: 20, xStart: 8, xEnd: 98 },
    { floor: 4, name: '4F', label: '메인 & 시그니처 레스토랑', y: 166, h: 20, xStart: 6, xEnd: 98 },
    { floor: 3, name: '3F', label: '메인 로비 · 아트리움 · 부티크', y: 188, h: 22, xStart: 5, xEnd: 98 },
    { floor: 2, name: '2F', label: '객실 복도 · 선내 의무실', y: 212, h: 22, xStart: 6, xEnd: 96 },
    { floor: 1, name: '1F', label: '선박 운영 · 승무원 전용 구역', y: 236, h: 24, xStart: 10, xEnd: 92 },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-[#050b17] via-[#030712] to-[#02050c] rounded-2xl p-4 sm:p-7 border border-[#b38f53]/30 shadow-2xl mb-12 relative overflow-hidden">
      {/* Ocean depth ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-48 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-2 mb-6 relative z-10">
        <div>
          <span className="text-[10px] sm:text-xs font-mono tracking-widest text-[#c5a880] uppercase block">
            SAINT BLUE DECK GUIDE
          </span>
          <h3 className="text-lg sm:text-2xl font-cinzel text-white">
            세인트 블루 층별 안내
          </h3>
        </div>
        <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-[#d8b885]" />
            <span>선택된 층</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-white/10" />
            <span>선내 구역</span>
          </span>
        </div>
      </div>

      {/* Interactive SVG Diagram representing the mega cruise ship */}
      <div className="relative z-10 w-full overflow-hidden rounded-xl bg-black/60 p-2 sm:p-4 border border-white/5">
        <svg viewBox="0 0 680 300" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="masterHullGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0b172a" />
              <stop offset="50%" stopColor="#070e1b" />
              <stop offset="100%" stopColor="#020409" />
            </linearGradient>
            <linearGradient id="activeDeckGold" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fbf3e4" />
              <stop offset="25%" stopColor="#dfc699" />
              <stop offset="60%" stopColor="#b38f53" />
              <stop offset="100%" stopColor="#fbf3e4" />
            </linearGradient>
          </defs>

          {/* Grand Ship Hull Silhouette */}
          <path
            d="M 80 270 L 640 270 C 660 270 670 245 665 200 L 655 85 C 650 70 640 60 625 60 L 290 60 L 280 26 L 190 26 L 180 60 L 150 60 L 120 100 L 90 150 L 50 215 C 40 235 50 270 80 270 Z"
            fill="url(#masterHullGrad)"
            stroke="rgba(197, 168, 128, 0.4)"
            strokeWidth="1.5"
          />

          {/* Radar Mast & Funnels (Chimney / Top Superstructure) */}
          <rect x="260" y="8" width="18" height="20" rx="3" fill="#1e293b" stroke="#64748b" strokeWidth="0.8" />
          <line x1="269" y1="2" x2="269" y2="8" stroke="#94a3b8" strokeWidth="1.5" />
          <line x1="262" y1="4" x2="276" y2="4" stroke="#94a3b8" strokeWidth="1" />

          {/* 10 Deck Level Cutaways */}
          {deckTiers.map((d) => {
            const isSelected = activeFloor === d.floor;
            const x = d.xStart * 6.6;
            const width = (d.xEnd - d.xStart) * 6.6;

            return (
              <g
                key={d.floor}
                onClick={() => onSelectFloor && onSelectFloor(d.floor)}
                className="cursor-pointer transition-all duration-300 group"
              >
                {/* Deck Rectangle */}
                <rect
                  x={x}
                  y={d.y}
                  width={width}
                  height={d.h}
                  rx="3"
                  fill={isSelected ? 'url(#activeDeckGold)' : 'rgba(255, 255, 255, 0.04)'}
                  stroke={isSelected ? '#f5ebd7' : 'rgba(255, 255, 255, 0.12)'}
                  strokeWidth={isSelected ? '1.5' : '0.6'}
                  className={isSelected ? 'filter drop-shadow-[0_0_12px_rgba(216,184,133,0.8)]' : 'group-hover:fill-white/10'}
                />

                {/* Deck Number Badge on Left */}
                <rect
                  x={x + 4}
                  y={d.y + 3}
                  width="28"
                  height={d.h - 6}
                  rx="2"
                  fill={isSelected ? '#030712' : 'rgba(0, 0, 0, 0.6)'}
                />
                <text
                  x={x + 18}
                  y={d.y + d.h / 2 + 3.5}
                  textAnchor="middle"
                  fill={isSelected ? '#dfc699' : '#94a3b8'}
                  fontSize="9.5"
                  fontWeight="bold"
                  fontFamily="var(--font-cinzel), serif"
                >
                  {d.name}
                </text>

                {/* Deck Description Label */}
                <text
                  x={x + 38}
                  y={d.y + d.h / 2 + 3.5}
                  fill={isSelected ? '#0a0f1d' : '#cbd5e1'}
                  fontSize="8.5"
                  fontWeight={isSelected ? 'bold' : 'normal'}
                >
                  {d.label}
                </text>
              </g>
            );
          })}

          {/* Water Surface Line */}
          <path
            d="M 20 272 C 120 276 220 268 320 272 C 420 276 520 268 660 272"
            stroke="#2563eb"
            strokeWidth="2.5"
            strokeOpacity="0.5"
            fill="none"
          />
        </svg>
      </div>

      <div className="text-center mt-3 font-serif-luxury space-y-1">
        <p className="text-[11px] sm:text-xs text-slate-300">
          * 푸른 지중해의 물결과 밤하늘의 별빛 아래, 세인트 블루가 선사하는 가장 우아하고 낭만적인 여정.
        </p>
        <p className="text-[10px] sm:text-[11px] text-[#dfc699] font-sans">
          단면도에서 원하는 층을 클릭하면 해당 덱의 상세 안내로 이동합니다.
        </p>
      </div>
    </div>
  );
};
