import React, { useState } from 'react';
import { CharacterId } from '../types/cruise';
import { Anchor, Shield, Sparkles, Eye } from 'lucide-react';

interface CharacterArtworkProps {
  characterId: CharacterId;
  /**
   * [추후 개별 프로필 사진 연결]
   * 각 캐릭터의 개별 사진/일러스트 경로를 전달받아 렌더링합니다.
   * 비어있거나 로드 실패 시 기본 콜라주 크롭 이미지가 적용됩니다.
   */
  imageUrl?: string;
  characterName?: string;
}

export const CharacterArtwork: React.FC<CharacterArtworkProps> = ({ characterId, imageUrl, characterName }) => {
  const [customImageError, setCustomImageError] = useState(false);
  const [masterImageError, setMasterImageError] = useState(false);

  const cropSettings: Record<CharacterId, { objectPosition: string; accentColor: string }> = {
    tae_sung: {
      objectPosition: '10% 25%',
      accentColor: 'from-blue-900/30 via-slate-950 to-black'
    },
    kyung_min: {
      objectPosition: '50% 25%',
      accentColor: 'from-slate-800/30 via-zinc-950 to-black'
    },
    se_hyun: {
      objectPosition: '90% 25%',
      accentColor: 'from-[#b38f53]/20 via-stone-950 to-black'
    }
  };

  const config = cropSettings[characterId];

  // 1순위: imageUrl이 제공되고 로드 실패하지 않은 경우 해당 이미지 표시
  const hasCustomImage = Boolean(imageUrl && imageUrl.trim() !== '' && !customImageError);

  // 2순위: 개별 이미지가 없거나 실패한 경우 기본 콜라주 크롭 이미지 표시
  const showMasterCollage = !hasCustomImage && !masterImageError;

  // 3순위: 둘 다 없거나 실패한 경우 럭셔리 일러스트 폴백
  const showFallback = !hasCustomImage && masterImageError;

  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800/80 shadow-2xl group">
      {/* 1순위: 개별 전달된 프로필 사진 */}
      {hasCustomImage && (
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={imageUrl}
            alt={characterName || `${characterId} profile`}
            referrerPolicy="no-referrer"
            onError={() => setCustomImageError(true)}
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-black/20 pointer-events-none" />
        </div>
      )}

      {/* 2순위: 기본 시네마틱 콜라주 이미지 크롭 */}
      {showMasterCollage && (
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/세 남자의 시네마틱 캐릭터 프로필 콜라주.png"
            alt={characterName || `${characterId} visual`}
            referrerPolicy="no-referrer"
            onError={() => setMasterImageError(true)}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            style={{
              objectPosition: config.objectPosition,
              filter: 'contrast(1.02) saturate(1.03)'
            }}
          />
          {/* Subtle gradient vignette over the image */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-black/25 pointer-events-none" />
        </div>
      )}

      {/* 3순위: Styled luxury illustration backdrop fallback */}
      {showFallback && (
        <div className={`absolute inset-0 bg-gradient-to-b ${config.accentColor} flex flex-col justify-between p-6 select-none`}>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <div className="relative z-10 flex items-center justify-between">
            <span className="text-[11px] font-mono tracking-widest text-slate-400 uppercase">
              {characterId === 'tae_sung' && 'SAINT BLUE · CAPTAIN'}
              {characterId === 'kyung_min' && 'MEDITERRANEAN · UNDERWORLD'}
              {characterId === 'se_hyun' && 'HANYOUNG GROUP · HEIR'}
            </span>
            <div className="p-2 rounded-full bg-white/5 border border-white/10 text-[#dfc699]">
              {characterId === 'tae_sung' && <Anchor className="w-4 h-4 text-blue-400" />}
              {characterId === 'kyung_min' && <Shield className="w-4 h-4 text-slate-300" />}
              {characterId === 'se_hyun' && <Sparkles className="w-4 h-4 text-[#dfc699]" />}
            </div>
          </div>

          <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center">
            {characterId === 'tae_sung' && (
              <div className="relative w-44 h-56 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-b from-blue-900/40 to-slate-900 border border-blue-400/40 flex items-center justify-center shadow-lg">
                  <Anchor className="w-12 h-12 text-blue-200" />
                </div>
                <div className="mt-4 px-4 py-2 rounded-lg bg-slate-900/80 border border-white/10">
                  <p className="text-xs text-blue-200 font-medium">흰색 함장 제복 · 흑요석빛 눈</p>
                  <p className="text-[11px] text-slate-400 font-mono mt-0.5">187cm · 32세</p>
                </div>
              </div>
            )}

            {characterId === 'kyung_min' && (
              <div className="relative w-44 h-56 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-b from-zinc-800 to-black border border-slate-600/40 flex items-center justify-center shadow-lg">
                  <Shield className="w-12 h-12 text-slate-300" />
                </div>
                <div className="mt-4 px-4 py-2 rounded-lg bg-zinc-900/80 border border-white/10">
                  <p className="text-xs text-slate-200 font-medium">블랙 실크 셔츠 · 뺨의 흉터</p>
                  <p className="text-[11px] text-slate-400 font-mono mt-0.5">188cm · 33세</p>
                </div>
              </div>
            )}

            {characterId === 'se_hyun' && (
              <div className="relative w-44 h-56 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-b from-[#b38f53]/20 to-stone-900 border border-[#b38f53]/40 flex items-center justify-center shadow-lg">
                  <Sparkles className="w-12 h-12 text-[#dfc699]" />
                </div>
                <div className="mt-4 px-4 py-2 rounded-lg bg-stone-900/80 border border-white/10">
                  <p className="text-xs text-[#dfc699] font-medium">디자이너 셔츠 · 애쉬 브라운</p>
                  <p className="text-[11px] text-slate-400 font-mono mt-0.5">181cm · 28세</p>
                </div>
              </div>
            )}
          </div>

          <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5 text-[#dfc699]" />
              <span>세인트 블루 공식 프로필</span>
            </span>
          </div>
        </div>
      )}

      {/* Subtle frame */}
      <div className="absolute inset-0 border border-white/10 rounded-xl pointer-events-none group-hover:border-[#b38f53]/40 transition-colors duration-300" />
    </div>
  );
};
