import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#02050c] border-t border-slate-800/80 text-slate-400 py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 text-center md:text-left">
        <div>
          <div className="flex items-center justify-center md:justify-start gap-2 text-white font-cinzel text-base sm:text-lg tracking-wider mb-1">
            <span className="text-[#c5a880]">✦</span>
            <span>SAINT BLUE CRUISE</span>
          </div>
          <p className="text-xs text-slate-500 font-serif-luxury">
            한영그룹 초호화 크루즈 「세인트 블루」 공식 가이드
          </p>
        </div>

        <div className="flex items-center justify-center gap-6 sm:gap-8 text-xs text-slate-400 font-medium">
          <a href="#ship-layout" className="hover:text-[#dfc699] transition-colors">
            선내 층별 안내
          </a>
          <a href="#characters" className="hover:text-[#dfc699] transition-colors">
            MAIN CHARACTER
          </a>
        </div>

        <div className="text-center md:text-right text-[11px] text-slate-500 font-mono">
          <p>© Hanyoung Maritime Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
