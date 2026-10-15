import React from 'react';
import { CHARACTERS } from '../data/cruiseData';
import { CharacterArtwork } from './CharacterArtwork';
import { Eye, Compass, Sparkles, Star } from 'lucide-react';

export const CharacterSection: React.FC = () => {
  return (
    <section id="characters" className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto scroll-mt-16">
      {/* Refined, Sophisticated & Visually Balanced Header */}
      <div className="relative mb-12 sm:mb-16 flex flex-col items-center text-center">
        {/* Subtle Decorative Aura */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-28 bg-[#b38f53]/10 rounded-full blur-[80px] pointer-events-none" />

        {/* Top Editorial Kicker with Star Insignia */}
        <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono tracking-[0.25em] text-[#c5a880] uppercase mb-3">
          <Star className="w-3.5 h-3.5 text-[#dfc699]" />
          <span>SAINT BLUE DRAMATIS PERSONAE</span>
          <Star className="w-3.5 h-3.5 text-[#dfc699]" />
        </div>

        {/* Refined Main Heading Lockup */}
        <div className="relative flex items-center justify-center gap-3 sm:gap-6 w-full max-w-xl">
          <span className="hidden sm:block h-px flex-1 bg-gradient-to-r from-transparent via-[#b38f53]/50 to-transparent" />
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-cinzel tracking-[0.18em] text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-[#dfc699] font-bold drop-shadow-md">
            MAIN CHARACTER
          </h2>
          <span className="hidden sm:block h-px flex-1 bg-gradient-to-l from-transparent via-[#b38f53]/50 to-transparent" />
        </div>

        {/* Delicate Underline Accent */}
        <div className="flex items-center gap-2 mt-3">
          <span className="h-px w-8 bg-[#b38f53]/40" />
          <span className="text-[#dfc699] text-xs">✦</span>
          <span className="h-px w-8 bg-[#b38f53]/40" />
        </div>

        {/* Subtitle Line */}
        <p className="mt-3 text-xs sm:text-sm text-slate-300 font-serif-luxury max-w-md leading-relaxed">
          지중해의 푸른 파도 위, 세인트 블루에서 마주할 세 사람의 공식 인물 기록
        </p>
      </div>

      {/* 3-Column Character Showcase (Matching 2nd Image Layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {CHARACTERS.map((char) => {
          return (
            <div
              key={char.id}
              className="relative rounded-2xl p-4 sm:p-6 bg-slate-950/70 border border-slate-800/80 hover:border-[#b38f53]/50 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Character Name & Role Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                      <span>{char.name}</span>
                      <span className="text-xs px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300 font-mono font-normal">
                        {char.age}세
                      </span>
                    </h3>
                    <p className="text-xs text-[#dfc699] font-medium mt-1">
                      {char.role}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-mono text-slate-400 block">
                      {char.id === 'tae_sung' && '01 / CAPTAIN'}
                      {char.id === 'kyung_min' && '02 / UNDERWORLD'}
                      {char.id === 'se_hyun' && '03 / HEIR'}
                    </span>
                  </div>
                </div>

                {/* Specs Box (키, 체격, 머리, 눈, 복장) */}
                <div className="space-y-1.5 py-3 px-3.5 rounded-lg bg-black/50 border border-white/5 text-xs text-slate-300 mb-5">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 w-12">키</span>
                    <span className="font-mono text-white text-right">{char.height}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 w-12">체격</span>
                    <span className="text-white text-right truncate max-w-[200px]">{char.physique}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 w-12">머리</span>
                    <span className="text-white text-right truncate max-w-[200px]">{char.hair}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 w-12">눈</span>
                    <span className="text-white text-right truncate max-w-[200px]">{char.eyes}</span>
                  </div>
                  <div className="flex items-start justify-between pt-0.5 border-t border-white/5">
                    <span className="text-slate-400 w-12 shrink-0">복장</span>
                    <span className="text-[#e6ceaa] text-right text-[11px] leading-tight max-w-[200px]">
                      {char.attire}
                    </span>
                  </div>
                </div>

                {/* Main Visual Artwork with Crop & Fallback */}
                <div className="mb-5 h-[340px]">
                  <CharacterArtwork characterId={char.id} />
                </div>

                {/* Detail Inspection Panels (눈 / 측면 / 디테일) */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                    <div className="flex items-center gap-1.5 text-[#dfc699] font-mono text-[10px] mb-1">
                      <Eye className="w-3 h-3" />
                      <span>눈 (EYES)</span>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-tight">
                      {char.id === 'tae_sung' && '깊고 서늘한 흑요석빛 눈동자'}
                      {char.id === 'kyung_min' && '꿰뚫어보는 차가운 회색 눈'}
                      {char.id === 'se_hyun' && '호기심 가득한 반짝이는 시선'}
                    </p>
                  </div>

                  <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                    <div className="flex items-center gap-1.5 text-[#dfc699] font-mono text-[10px] mb-1">
                      <Compass className="w-3 h-3" />
                      <span>측면 (PROFILE)</span>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-tight">
                      {char.id === 'tae_sung' && '단정하고 곧은 턱선과 콧대'}
                      {char.id === 'kyung_min' && '뺨의 옅은 흉터와 날카로운 선'}
                      {char.id === 'se_hyun' && '자연스러운 웨이브와 세련된 선'}
                    </p>
                  </div>

                  <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 col-span-2">
                    <div className="flex items-center gap-1.5 text-[#dfc699] font-mono text-[10px] mb-1">
                      <Sparkles className="w-3 h-3" />
                      <span>
                        {char.id === 'tae_sung' && '제복 디테일 (UNIFORM)'}
                        {char.id === 'kyung_min' && '흉터 & 수트 (SCAR & SUIT)'}
                        {char.id === 'se_hyun' && '헤어 & 셔츠 (HAIR & SILK)'}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-tight">
                      {char.id === 'tae_sung' && '금빛 견장 4선, 황금빛 날개 흉장, 단정한 블랙 타이'}
                      {char.id === 'kyung_min' && '왼쪽 뺨의 옅은 상처, 언버튼 블랙 실크 셔츠, 맞춤 자켓'}
                      {char.id === 'se_hyun' && '애쉬 브라운 레이어드 헤어, 실버 펜던트 목걸이, 루즈핏 셔츠'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
