import React, { useState } from 'react';
import { Star } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [coverImgFailed, setCoverImgFailed] = useState(false);

  return (
    <section className="relative min-h-[58vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden pt-20 sm:pt-24 pb-12 sm:pb-16">
      {/* Background Cover Image with measured contrast scrim */}
      {!coverImgFailed && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/세 남자의 럭셔리 크루즈 나이트.png"
            alt="Saint Blue Cruise Cover"
            referrerPolicy="no-referrer"
            onError={() => setCoverImgFailed(true)}
            className="w-full h-full object-cover object-top filter brightness-[0.72] contrast-[1.05] transition-transform duration-1000 scale-105"
          />
          {/* Measured deep midnight ocean gradient scrim for AA contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/75 to-[#030712]/40" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#030712]/50 to-[#030712]" />
        </div>
      )}

      {/* Fallback Ambient Atmosphere (If cover image fails or whilst loading) */}
      {coverImgFailed && (
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#061226] via-[#030814] to-[#02050d]">
          {/* Subtle star particle field */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#dfc699_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[300px] bg-[#b38f53]/10 rounded-full blur-[120px] pointer-events-none" />
        </div>
      )}

      {/* Decorative Star Constellation Accent */}
      <div className="absolute top-24 sm:top-28 right-6 sm:right-12 md:right-24 opacity-30 pointer-events-none hidden xs:block">
        <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#dfc699] animate-pulse" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        {/* Editorial Subtitle Kicker */}
        <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[#c5a880] font-cinzel mb-3 sm:mb-4">
          <span>HANYOUNG LUXURY MARITIME</span>
          <span aria-hidden="true" className="text-[#b38f53]">✦</span>
          <span>SAINT BLUE CRUISE</span>
        </div>

        {/* Grand Cinematic Title matching the cover art with Metallic Gold */}
        <div className="relative my-1 sm:my-2 w-full">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight font-cinzel text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-[#dfc699] drop-shadow-2xl">
            SAINT BLUE
          </h1>
          <div className="flex items-center justify-center gap-2 sm:gap-3 mt-1">
            <span className="h-px w-8 sm:w-16 md:w-24 bg-gradient-to-r from-transparent via-[#b38f53]/60 to-transparent" />
            <span className="text-xl sm:text-3xl md:text-4xl font-cinzel tracking-[0.25em] sm:tracking-[0.35em] font-semibold metallic-gold-text">
              CRUISE
            </span>
            <span className="h-px w-8 sm:w-16 md:w-24 bg-gradient-to-l from-transparent via-[#b38f53]/60 to-transparent" />
          </div>
        </div>

        {/* Brief, romantic description of Saint Blue Cruise owned by Hanyoung Group */}
        <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-slate-200 font-serif-luxury max-w-2xl leading-relaxed">
          한영그룹 소유의 초대형 초호화 크루즈선 <strong className="text-[#dfc699] font-normal">「세인트 블루」</strong>.
          <br className="hidden sm:inline" />
          끝없이 펼쳐지는 지중해의 푸른 파도와 밤하늘을 수놓은 별빛 아래, 낭만적인 항해가 시작됩니다.
        </p>
      </div>
    </section>
  );
};
