import React, { useState, useRef } from 'react';
import { MapPin, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

interface DeckHorizontalFloorPlanProps {
  floor: number;
}

interface ArchitecturalZone {
  id: string;
  name: string;
  subTitle: string;
  category: 'public' | 'vip' | 'crew' | 'service';
  type: 'path' | 'rect' | 'circle' | 'g';
  d?: string;
  x?: number;
  y?: number;
  w?: number;
  h?: number;
  cx?: number;
  cy?: number;
  r?: number;
  labelX: number;
  labelY: number;
  code: string;
  desc: string;
}

export const DeckHorizontalFloorPlan: React.FC<DeckHorizontalFloorPlanProps> = ({ floor }) => {
  const [selectedZoneId, setSelectedZoneId] = useState<string | null>(null);
  const [zoom, setZoom] = useState<number>(100);

  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef<boolean>(false);
  const hasDraggedRef = useRef<boolean>(false);
  const startPosRef = useRef<{ x: number; y: number; scrollLeft: number; scrollTop: number }>({
    x: 0,
    y: 0,
    scrollLeft: 0,
    scrollTop: 0
  });

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 25, 250));
  };

  const handleZoomOut = () => {
    setZoom((prev) => {
      const next = Math.max(prev - 25, 100);
      if (next === 100 && containerRef.current) {
        containerRef.current.scrollLeft = 0;
        containerRef.current.scrollTop = 0;
      }
      return next;
    });
  };

  const handleResetZoom = () => {
    setZoom(100);
    if (containerRef.current) {
      containerRef.current.scrollLeft = 0;
      containerRef.current.scrollTop = 0;
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom <= 100 || !containerRef.current) return;
    isDraggingRef.current = true;
    hasDraggedRef.current = false;
    startPosRef.current = {
      x: e.clientX,
      y: e.clientY,
      scrollLeft: containerRef.current.scrollLeft,
      scrollTop: containerRef.current.scrollTop
    };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !containerRef.current) return;
    e.preventDefault();
    const dx = e.clientX - startPosRef.current.x;
    const dy = e.clientY - startPosRef.current.y;
    if (Math.abs(dx) > 4 || Math.abs(dy) > 4) {
      hasDraggedRef.current = true;
    }
    containerRef.current.scrollLeft = startPosRef.current.scrollLeft - dx;
    containerRef.current.scrollTop = startPosRef.current.scrollTop - dy;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  // Realistic architectural layouts for each deck (10F to 1F)
  // Rendered on a 880 x 260 architectural blueprint canvas
  const getDeckArchitecture = (f: number): { zones: ArchitecturalZone[]; features: React.ReactNode } => {
    switch (f) {
      case 10:
        return {
          zones: [
            {
              id: '10-bridge',
              name: '함교 (Navigation Bridge)',
              subTitle: '최첨단 항법 콘솔 및 선박 통제 중추',
              category: 'crew',
              type: 'path',
              d: 'M 75 130 C 95 80, 140 60, 200 58 L 200 202 C 140 200, 95 180, 75 130 Z',
              labelX: 135,
              labelY: 130,
              code: 'BRIDGE',
              desc: '함장과 항해 당직자가 24시간 항로를 지휘하는 신성한 통제실. 파노라마 270도 통유리 뷰.'
            },
            {
              id: '10-office',
              name: '함장 집무실',
              subTitle: '오태성 함장의 개인 집무실 및 면담실',
              category: 'crew',
              type: 'rect',
              x: 206,
              y: 58,
              w: 95,
              h: 68,
              labelX: 253,
              labelY: 92,
              code: 'CAPT. OFFICE',
              desc: '해도와 운항 기록이 정돈된 오태성의 사적 집무 공간. 비공개 면담과 휴식이 이루어집니다.'
            },
            {
              id: '10-watch',
              name: '항해 당직실',
              subTitle: '해상 레이더 및 통신 모니터링 룸',
              category: 'crew',
              type: 'rect',
              x: 206,
              y: 134,
              w: 95,
              h: 68,
              labelX: 253,
              labelY: 168,
              code: 'WATCH ROOM',
              desc: '항해 당직 항해사들이 기상도와 주변 해역 선박 레이더를 24시간 교대 감시하는 공간.'
            },
            {
              id: '10-security',
              name: '제한 구역 출입 통제문',
              subTitle: '함교 보안 격벽 및 카드키 게이트',
              category: 'service',
              type: 'rect',
              x: 307,
              y: 85,
              w: 42,
              h: 90,
              labelX: 328,
              labelY: 130,
              code: 'SECURITY',
              desc: '일반 승객 구역과 함교 구역을 차단하는 생체 인식 보안 출입 격벽.'
            },
            {
              id: '10-lift',
              name: '최상층 중앙 승강기 코어',
              subTitle: '초고속 전망 엘리베이터 홀',
              category: 'public',
              type: 'rect',
              x: 355,
              y: 92,
              w: 68,
              h: 76,
              labelX: 389,
              labelY: 130,
              code: 'LIFT CORE',
              desc: '전 층을 연결하는 중앙 통유리 엘리베이터 및 비상 탈출 계단실.'
            },
            {
              id: '10-open',
              name: '야외 전망 데크',
              subTitle: '최상층 개방형 티크목 갑판',
              category: 'public',
              type: 'path',
              d: 'M 428 50 L 575 50 L 575 210 L 428 210 Z',
              labelX: 501,
              labelY: 130,
              code: 'OPEN DECK',
              desc: '탁 트인 지중해 바다와 푸른 하늘을 360도로 조망할 수 있는 최상층 메인 야외 데크.'
            },
            {
              id: '10-obs',
              name: '전망 라운지 (Sky Observatory)',
              subTitle: '실내 돔 천장 천문 전망 라운지',
              category: 'public',
              type: 'path',
              d: 'M 582 65 C 650 65, 690 90, 705 130 C 690 170, 650 195, 582 195 Z',
              labelX: 635,
              labelY: 130,
              code: 'OBSERVATORY',
              desc: '원형 유리 돔으로 밤하늘의 은하수를 감상하며 칵테일을 즐길 수 있는 고요한 라운지.'
            },
            {
              id: '10-sunset',
              name: '선셋 테라스 (Sunset Horizon)',
              subTitle: '선미 야외 일몰 뷰포인트',
              category: 'public',
              type: 'path',
              d: 'M 712 90 C 740 95, 770 110, 775 130 C 770 150, 740 165, 712 170 Z',
              labelX: 742,
              labelY: 130,
              code: 'SUNSET TERRACE',
              desc: '지중해의 붉은 노을이 바다를 황금빛으로 물들이는 가장 낭만적인 선미 테라스.'
            }
          ],
          features: (
            <>
              {/* Outer Deck Promenade Rails */}
              <path d="M 120 40 L 780 40 C 820 40, 840 70, 840 130 C 840 190, 820 220, 780 220 L 120 220" fill="none" stroke="rgba(197, 168, 128, 0.25)" strokeDasharray="3 3" />
              {/* Bridge Wing Balconies */}
              <rect x="180" y="32" width="28" height="22" rx="2" fill="none" stroke="#b38f53" strokeWidth="1" />
              <rect x="180" y="206" width="28" height="22" rx="2" fill="none" stroke="#b38f53" strokeWidth="1" />
            </>
          )
        };

      case 9:
        return {
          zones: [
            {
              id: '9-owner',
              name: '오너스 스위트 (The Owner’s Penthouse)',
              subTitle: '한영그룹 후계자 명세현 전용 펜트하우스',
              category: 'vip',
              type: 'path',
              d: 'M 85 130 C 105 85, 145 62, 235 60 L 235 200 C 145 198, 105 175, 85 130 Z',
              labelX: 160,
              labelY: 130,
              code: "OWNER'S PENTHOUSE",
              desc: '선내 최고급 마호가니와 대리석, 개인 바, 180도 통유리 개인 발코니가 완비된 최고층 펜트하우스.'
            },
            {
              id: '9-suite-1',
              name: 'VIP 로열 스위트 901호 (한경민)',
              subTitle: '단독 거실 및 프라이빗 발코니',
              category: 'vip',
              type: 'rect',
              x: 242,
              y: 58,
              w: 110,
              h: 68,
              labelX: 297,
              labelY: 92,
              code: 'ROYAL SUITE 901',
              desc: '한경민이 머무는 프라이빗 스위트. 철저한 방음과 개인 금고, 넓은 테라스를 갖추고 있습니다.'
            },
            {
              id: '9-suite-2',
              name: 'VIP 로열 스위트 902호',
              subTitle: '최상위 귀빈용 침실 및 응접실',
              category: 'vip',
              type: 'rect',
              x: 242,
              y: 134,
              w: 110,
              h: 68,
              labelX: 297,
              labelY: 168,
              code: 'ROYAL SUITE 902',
              desc: '정재계 VIP 인사를 위한 호화 스위트룸. 최고급 이집트 코튼 침구와 자쿠지 욕조 완비.'
            },
            {
              id: '9-lift',
              name: 'VIP 전용 직통 승강기',
              subTitle: '보안 생체 인식 엘리베이터',
              category: 'vip',
              type: 'rect',
              x: 358,
              y: 92,
              w: 65,
              h: 76,
              labelX: 390,
              labelY: 130,
              code: 'VIP LIFT',
              desc: '일반 구역과 차단된 VIP 전용 직통 고속 엘리베이터 로비.'
            },
            {
              id: '9-suite-3',
              name: 'VIP 프레스티지 스위트 903호',
              subTitle: '오션뷰 발코니 객실',
              category: 'vip',
              type: 'rect',
              x: 430,
              y: 58,
              w: 105,
              h: 68,
              labelX: 482,
              labelY: 92,
              code: 'SUITE 903',
              desc: '바다 전망을 바로 마주하는 고급 발코니 스위트룸.'
            },
            {
              id: '9-suite-4',
              name: 'VIP 프레스티지 스위트 904호',
              subTitle: '오션뷰 발코니 객실',
              category: 'vip',
              type: 'rect',
              x: 430,
              y: 134,
              w: 105,
              h: 68,
              labelX: 482,
              labelY: 168,
              code: 'SUITE 904',
              desc: '독립된 리빙 공간과 드레스룸을 갖춘 프레스티지 스위트룸.'
            },
            {
              id: '9-lounge',
              name: 'VIP 프라이빗 라운지',
              subTitle: '최고급 샴페인 및 캐비아 바',
              category: 'vip',
              type: 'rect',
              x: 542,
              y: 60,
              w: 120,
              h: 70,
              labelX: 602,
              labelY: 95,
              code: 'VIP LOUNGE',
              desc: '9층 승객만을 위해 24시간 최고급 샴페인과 핑거푸드를 제공하는 전용 사교 라운지.'
            },
            {
              id: '9-dining',
              name: 'VIP 다이닝룸',
              subTitle: '비공개 셰프 전담 만찬실',
              category: 'vip',
              type: 'rect',
              x: 542,
              y: 132,
              w: 120,
              h: 70,
              labelX: 602,
              labelY: 167,
              code: 'PRIVATE DINING',
              desc: '전담 셰프의 코스 요리가 제공되는 프라이빗 독립 식사 룸.'
            },
            {
              id: '9-balcony',
              name: 'VIP 전용 선미 테라스',
              subTitle: '프라이빗 오션뷰 갑판',
              category: 'vip',
              type: 'path',
              d: 'M 668 75 C 730 80, 770 105, 775 130 C 770 155, 730 180, 668 185 Z',
              labelX: 718,
              labelY: 130,
              code: 'VIP BALCONY',
              desc: '선내 소수의 VIP 승객만이 출입할 수 있는 전용 야외 전망 발코니.'
            }
          ],
          features: (
            <>
              {/* Central Private Corridor Spine */}
              <rect x="240" y="127" width="425" height="6" fill="#1e1628" stroke="rgba(192, 132, 252, 0.4)" strokeWidth="0.8" />
            </>
          )
        };

      case 8:
        return {
          zones: [
            {
              id: '8-fitness',
              name: '피트니스 센터 (Ocean Gym)',
              subTitle: '지중해 수평선 전망 테크노짐 장비',
              category: 'public',
              type: 'path',
              d: 'M 95 130 C 115 90, 150 68, 230 65 L 230 128 L 95 130 Z',
              labelX: 165,
              labelY: 98,
              code: 'FITNESS CENTER',
              desc: '바다를 마주보며 러닝과 웨이트 트레이닝을 즐길 수 있는 최첨단 피트니스 구역.'
            },
            {
              id: '8-yoga',
              name: '요가 & 필라테스 스튜디오',
              subTitle: '원목 마루 스트레칭 스튜디오',
              category: 'public',
              type: 'path',
              d: 'M 95 130 L 230 132 L 230 195 C 150 192, 115 170, 95 130 Z',
              labelX: 165,
              labelY: 162,
              code: 'YOGA STUDIO',
              desc: '일출과 일몰 시간대 명상과 필라테스 클래스가 진행되는 조용한 목재 스튜디오.'
            },
            {
              id: '8-lift',
              name: '중앙 승강기 & 로비',
              subTitle: '엘리베이터 타워 및 쉼터',
              category: 'public',
              type: 'rect',
              x: 238,
              y: 92,
              w: 68,
              h: 76,
              labelX: 272,
              labelY: 130,
              code: 'LIFT LOBBY',
              desc: '중앙 승강기 홀 및 스파 전용 안내 로비.'
            },
            {
              id: '8-spa-reception',
              name: '스파 리셉션 (Thalasso Reception)',
              subTitle: '해수 테라피 예약 및 상담실',
              category: 'public',
              type: 'rect',
              x: 312,
              y: 65,
              w: 115,
              h: 130,
              labelX: 369,
              labelY: 130,
              code: 'SPA RECEPTION',
              desc: '전문 테라피스트의 1:1 피부 및 바디 컨디션 상담이 이루어지는 웰니스 데스크.'
            },
            {
              id: '8-salon',
              name: '미용실 및 뷰티 살롱',
              subTitle: '헤어 스타일링 및 메이크업 룸',
              category: 'public',
              type: 'rect',
              x: 434,
              y: 60,
              w: 105,
              h: 68,
              labelX: 486,
              labelY: 94,
              code: 'BEAUTY SALON',
              desc: '선상 파티와 만찬 전 헤어 스타일링과 네일 케어를 받을 수 있는 뷰티 살롱.'
            },
            {
              id: '8-sauna',
              name: '사우나 및 한증막',
              subTitle: '통유리 오션뷰 핀란드식 사우나',
              category: 'public',
              type: 'rect',
              x: 434,
              y: 132,
              w: 105,
              h: 68,
              labelX: 486,
              labelY: 166,
              code: 'OCEAN SAUNA',
              desc: '창밖으로 펼쳐진 수평선을 감상하며 땀을 흘릴 수 있는 통유리 건식 사우나 및 습식 한증막.'
            },
            {
              id: '8-massage',
              name: '마사지룸 (Private Therapy Suites)',
              subTitle: '개인 욕실 완비 1:1 마사지실 6실',
              category: 'vip',
              type: 'rect',
              x: 546,
              y: 60,
              w: 135,
              h: 70,
              labelX: 613,
              labelY: 95,
              code: 'MASSAGE SUITES',
              desc: '프라이빗 발코니와 욕조를 갖춘 최고급 아로마 해수 마사지 스위트.'
            },
            {
              id: '8-lounge',
              name: '실내 휴식 라운지',
              subTitle: '디톡스 티 & 릴랙스 리클라이너',
              category: 'public',
              type: 'rect',
              x: 546,
              y: 132,
              w: 135,
              h: 70,
              labelX: 613,
              labelY: 167,
              code: 'RELAXATION',
              desc: '마사지 후 잔잔한 음악과 함께 유기농 허브 티를 마시며 쉬는 릴랙스 라운지.'
            },
            {
              id: '8-terrace',
              name: '웰니스 힐링 테라스',
              subTitle: '바닷바람을 쐬는 야외 데크',
              category: 'public',
              type: 'path',
              d: 'M 688 75 C 740 80, 775 105, 780 130 C 775 155, 740 180, 688 185 Z',
              labelX: 734,
              labelY: 130,
              code: 'SPA TERRACE',
              desc: '스파 이용 승객들을 위한 조용한 야외 바다 전망 테라스.'
            }
          ],
          features: null
        };

      case 7:
        return {
          zones: [
            {
              id: '7-sports',
              name: '스포츠 데크',
              subTitle: '미니 골프 및 패들 테니스 코트',
              category: 'public',
              type: 'path',
              d: 'M 100 130 C 120 90, 160 70, 240 68 L 240 192 C 160 190, 120 170, 100 130 Z',
              labelX: 175,
              labelY: 130,
              code: 'SPORTS COURT',
              desc: '바닷바람 속에서 미니 골프 퍼팅과 패들 테니스를 즐길 수 있는 선수 야외 레저 구역.'
            },
            {
              id: '7-shower',
              name: '야외 샤워실 및 탈의실',
              subTitle: '풀사이드 라커룸',
              category: 'public',
              type: 'rect',
              x: 248,
              y: 75,
              w: 75,
              h: 110,
              labelX: 285,
              labelY: 130,
              code: 'LOCKER & SHOWER',
              desc: '수영장 진입 전후 이용하는 샤워 시설 및 비치타월 수령처.'
            },
            {
              id: '7-pool',
              name: '메인 수영장 (Infinity Pool)',
              subTitle: '수평선과 맞닿은 초대형 인피니티 풀',
              category: 'public',
              type: 'rect',
              x: 332,
              y: 65,
              w: 195,
              h: 130,
              labelX: 429,
              labelY: 130,
              code: 'INFINITY POOL',
              desc: '지중해 수평선과 시각적으로 이어지는 야외 해수 인피니티 풀. 낮 시간대 가장 활기찬 명소.'
            },
            {
              id: '7-whirlpool-1',
              name: '월풀 욕조 (좌현)',
              subTitle: '온수 제트 스파 팟',
              category: 'public',
              type: 'circle',
              cx: 430,
              cy: 42,
              r: 18,
              labelX: 430,
              labelY: 42,
              code: 'JACUZZI 1',
              desc: '따뜻한 온수 버블 제트가 피로를 풀어주는 원형 스파 욕조.'
            },
            {
              id: '7-whirlpool-2',
              name: '월풀 욕조 (우현)',
              subTitle: '온수 제트 스파 팟',
              category: 'public',
              type: 'circle',
              cx: 430,
              cy: 218,
              r: 18,
              labelX: 430,
              labelY: 218,
              code: 'JACUZZI 2',
              desc: '따뜻한 온수 버블 제트가 피로를 풀어주는 원형 스파 욕조.'
            },
            {
              id: '7-pool-bar',
              name: '풀사이드 바',
              subTitle: '수중 바 스툴 & 트로피컬 음료',
              category: 'public',
              type: 'rect',
              x: 535,
              y: 75,
              w: 75,
              h: 110,
              labelX: 572,
              labelY: 130,
              code: 'POOLSIDE BAR',
              desc: '물속에 앉아 프로즌 칵테일과 신선한 과일 음료를 주문할 수 있는 아일랜드 바 카운터.'
            },
            {
              id: '7-sunbed',
              name: '선베드 및 카바나 구역',
              subTitle: '티크목 일광욕 갑판',
              category: 'public',
              type: 'path',
              d: 'M 618 60 L 780 60 C 810 80, 815 180, 780 200 L 618 200 Z',
              labelX: 700,
              labelY: 130,
              code: 'SUNBED CABANAS',
              desc: '최고급 가죽 쿠션 선베드와 그늘막 카바나가 늘어선 평화로운 일광욕 테라스.'
            }
          ],
          features: (
            <>
              {/* Pool Ripple Pattern */}
              <rect x="345" y="78" width="168" height="104" rx="4" fill="none" stroke="#60a5fa" strokeWidth="1" strokeDasharray="5 3" />
            </>
          )
        };

      case 6:
        return {
          zones: [
            {
              id: '6-theater',
              name: '대극장 (Saint Blue Opera House)',
              subTitle: '2개 층 복층 웅장한 오페라 및 갈라 쇼 무대',
              category: 'public',
              type: 'path',
              d: 'M 100 130 C 120 85, 160 60, 260 55 L 260 205 C 160 200, 120 175, 100 130 Z',
              labelX: 185,
              labelY: 130,
              code: 'OPERA THEATER',
              desc: '창립 기념 갈라 쇼와 정통 오페라가 상연되는 2개 층 규모의 웅장한 극장.'
            },
            {
              id: '6-conf',
              name: '회의실 (Executive Boardroom)',
              subTitle: '한영그룹 임원 및 재계 인사 전용',
              category: 'vip',
              type: 'rect',
              x: 270,
              y: 58,
              w: 110,
              h: 68,
              labelX: 325,
              labelY: 92,
              code: 'BOARDROOM',
              desc: '그룹 주요 임원들과 정재계 인사들의 해운 전략 회의가 열리는 방음 회의실.'
            },
            {
              id: '6-vip-lounge',
              name: 'VIP 대기실',
              subTitle: '공식 만찬 의전 대기실',
              category: 'vip',
              type: 'rect',
              x: 270,
              y: 134,
              w: 110,
              h: 68,
              labelX: 325,
              labelY: 168,
              code: 'VIP WAITING',
              desc: '공식 파티와 무도회 전 주요 인사들이 옷매무새를 가다듬고 휴식을 취하는 공간.'
            },
            {
              id: '6-lift',
              name: '중앙 승강기 및 로비',
              subTitle: '대형 연회장 진입 홀',
              category: 'public',
              type: 'rect',
              x: 388,
              y: 92,
              w: 68,
              h: 76,
              labelX: 422,
              labelY: 130,
              code: 'LIFT LOBBY',
              desc: '무도회장과 대극장으로 이어지는 넓은 대리석 로비.'
            },
            {
              id: '6-small-banquet',
              name: '소연회실',
              subTitle: '가문 및 비공개 사교 모임 공간',
              category: 'vip',
              type: 'rect',
              x: 464,
              y: 58,
              w: 95,
              h: 68,
              labelX: 511,
              labelY: 92,
              code: 'PRIVATE BANQUET',
              desc: '소규모 정략 모임과 프라이빗 축하 만찬에 사용되는 독립된 연회실.'
            },
            {
              id: '6-ballroom',
              name: '연회장 (Grand Ballroom)',
              subTitle: '초호화 샹들리에와 무도회 플로어',
              category: 'vip',
              type: 'rect',
              x: 566,
              y: 55,
              w: 160,
              h: 150,
              labelX: 646,
              labelY: 130,
              code: 'GRAND BALLROOM',
              desc: '골드 리프 장식과 샹들리에로 뒤덮인 초대형 무도회장. 공식적인 연인으로서의 등장이 이루어지는 무대.'
            },
            {
              id: '6-prep',
              name: '행사 준비실 (Backstage)',
              subTitle: '음향·조명 및 의전 소품 준비실',
              category: 'service',
              type: 'path',
              d: 'M 732 75 C 770 85, 785 110, 790 130 C 785 150, 770 175, 732 185 Z',
              labelX: 760,
              labelY: 130,
              code: 'BACKSTAGE',
              desc: '공식 행사의 무대 기술과 의전 서빙이 조율되는 스태프 전용 백스테이지.'
            }
          ],
          features: null
        };

      case 5:
        return {
          zones: [
            {
              id: '5-theater-stage',
              name: '공연장 (Revue Hall)',
              subTitle: '팝 콘서트 & 마술 쇼 스테이지',
              category: 'public',
              type: 'path',
              d: 'M 100 130 C 120 90, 160 65, 240 60 L 240 200 C 160 195, 120 170, 100 130 Z',
              labelX: 175,
              labelY: 130,
              code: 'REVUE HALL',
              desc: '매일 밤 화려한 라이브 쇼와 음악 공연이 펼쳐지는 300석 규모의 라이브 홀.'
            },
            {
              id: '5-backstage',
              name: '공연장 대기실',
              subTitle: '출연진 분장 및 준비 공간',
              category: 'service',
              type: 'rect',
              x: 248,
              y: 60,
              w: 70,
              h: 68,
              labelX: 283,
              labelY: 94,
              code: 'GREEN ROOM',
              desc: '공연 출연진과 음향 스태프 전용 분장실.'
            },
            {
              id: '5-lift',
              name: '중앙 승강기 로비',
              subTitle: '나이트 라이프 구역 진입부',
              category: 'public',
              type: 'rect',
              x: 248,
              y: 132,
              w: 70,
              h: 68,
              labelX: 283,
              labelY: 166,
              code: 'LIFT LOBBY',
              desc: '5층 유흥 및 라운지 층으로 내려오는 엘리베이터 홀.'
            },
            {
              id: '5-grand-lounge',
              name: '그랜드 라운지',
              subTitle: '라이브 재즈 콰르텟 무대 & 소파',
              category: 'public',
              type: 'rect',
              x: 326,
              y: 55,
              w: 160,
              h: 85,
              labelX: 406,
              labelY: 97,
              code: 'GRAND LOUNGE',
              desc: '낮에는 차와 다과를, 저녁에는 라이브 재즈를 감상하는 사교의 중심 공간.'
            },
            {
              id: '5-piano-bar',
              name: '피아노 바 (Midnight Keys)',
              subTitle: '블루 조명 속 바 카운터 & 피아노',
              category: 'public',
              type: 'rect',
              x: 326,
              y: 144,
              w: 160,
              h: 60,
              labelX: 406,
              labelY: 174,
              code: 'PIANO BAR',
              desc: '그랜드 피아노 주변의 바 카운터. 은은한 블루 조명 속에서 늦은 밤 진솔한 대화가 오가는 곳.'
            },
            {
              id: '5-casino',
              name: '카지노 (Le Casino Royal)',
              subTitle: '룰렛, 바카라, 블랙잭 테이블',
              category: 'public',
              type: 'rect',
              x: 494,
              y: 120,
              w: 160,
              h: 84,
              labelX: 574,
              labelY: 162,
              code: 'CASINO ROYAL',
              desc: '턱시도와 드레스를 차려입은 VIP 승객들이 칩을 던지는 밤의 전장. 한경민이 주로 머무는 무대.'
            },
            {
              id: '5-cigar',
              name: '시가 라운지 (Havana Club)',
              subTitle: '가죽 소파와 삼나무 휴미더',
              category: 'vip',
              type: 'rect',
              x: 660,
              y: 120,
              w: 75,
              h: 84,
              labelX: 697,
              labelY: 162,
              code: 'CIGAR ROOM',
              desc: '어두운 조명과 고급 시가 연기가 흐르는 성인 전용 독립 라운지.'
            },
            {
              id: '5-night-bar',
              name: '나이트 바 (Stern Lounge)',
              subTitle: '칵테일 바 & 댄스 플로어',
              category: 'public',
              type: 'path',
              d: 'M 494 55 L 735 55 L 735 114 L 494 114 Z',
              labelX: 614,
              labelY: 84,
              code: 'NIGHT BAR',
              desc: '선미 바다 전망과 신나는 음악, 야간의 친밀한 사교 분위기가 절정에 달하는 바.'
            },
            {
              id: '5-terrace',
              name: '선미 야외 테라스',
              subTitle: '밤바람을 맞는 야외 발코니',
              category: 'public',
              type: 'path',
              d: 'M 742 75 C 775 85, 790 110, 795 130 C 790 150, 775 175, 742 185 Z',
              labelX: 768,
              labelY: 130,
              code: 'STERN DECK',
              desc: '나이트 바와 연결되어 칵테일을 들고 밤바다를 바라보는 야외 테라스.'
            }
          ],
          features: null
        };

      case 4:
        return {
          zones: [
            {
              id: '4-sig',
              name: '시그니처 레스토랑 (L’Étoile)',
              subTitle: '미슐랭 스타 프렌치 파인다이닝',
              category: 'vip',
              type: 'path',
              d: 'M 100 130 C 120 85, 160 60, 260 55 L 260 140 L 100 130 Z',
              labelX: 185,
              labelY: 100,
              code: "L'ÉTOILE DINING",
              desc: '격식 있는 정장 드레스코드가 요구되는 최고급 예약제 프렌치 코스 요리 레스토랑.'
            },
            {
              id: '4-priv-dining',
              name: '프라이빗 다이닝룸',
              subTitle: '독립 VIP 만찬 및 비공개 룸',
              category: 'vip',
              type: 'path',
              d: 'M 100 130 L 260 140 L 260 205 C 160 200, 120 175, 100 130 Z',
              labelX: 185,
              labelY: 170,
              code: 'PRIVATE DINING',
              desc: '시그니처 레스토랑 안쪽의 독립 식사 공간. 외부 시선 없이 은밀한 대화가 가능합니다.'
            },
            {
              id: '4-galley',
              name: '메인 주방 및 서비스 통로',
              subTitle: '셰프 조리실 및 승무원 전용 통로',
              category: 'service',
              type: 'rect',
              x: 268,
              y: 58,
              w: 130,
              h: 85,
              labelX: 333,
              labelY: 100,
              code: 'CENTRAL GALLEY',
              desc: '선내 모든 레스토랑의 코스 요리를 준비하는 대규모 전문 주방 및 서비스 백도어.'
            },
            {
              id: '4-lift',
              name: '중앙 승강기 & 대리석 계단',
              subTitle: '로비와 연결된 대형 계단실',
              category: 'public',
              type: 'rect',
              x: 268,
              y: 147,
              w: 130,
              h: 55,
              labelX: 333,
              labelY: 174,
              code: 'GRAND STAIRS',
              desc: '3층 메인 로비에서 레드 카펫을 밟고 우아하게 걸어 올라오는 곡선 계단 홀.'
            },
            {
              id: '4-main-dining',
              name: '메인 레스토랑 (The Azure Ocean)',
              subTitle: '270도 파노라마 오션뷰 대형 식당',
              category: 'public',
              type: 'rect',
              x: 406,
              y: 55,
              w: 230,
              h: 150,
              labelX: 521,
              labelY: 130,
              code: 'THE AZURE OCEAN',
              desc: '중앙에서 선미로 이어지는 넓은 식당. 창밖으로 바다를 보며 뷔페와 코스 요리를 즐깁니다.'
            },
            {
              id: '4-wine',
              name: '와인 다이닝룸 (Wine Cellar)',
              subTitle: '빈티지 와인 셀러로 둘러싸인 아늑한 룸',
              category: 'vip',
              type: 'path',
              d: 'M 644 65 C 730 70, 780 100, 785 130 C 780 160, 730 190, 644 195 Z',
              labelX: 714,
              labelY: 130,
              code: 'WINE CELLAR',
              desc: '수석 소믈리에의 와인 추천과 함께 깊은 대화를 나누기에 적합한 조용한 분위기의 다이닝 룸.'
            }
          ],
          features: null
        };

      case 3:
        return {
          zones: [
            {
              id: '3-cafe',
              name: '소규모 카페 (Atrium Café)',
              subTitle: '이탈리안 에스프레소 & 디저트',
              category: 'public',
              type: 'path',
              d: 'M 95 130 C 115 90, 150 70, 220 65 L 220 195 C 150 190, 115 170, 95 130 Z',
              labelX: 165,
              labelY: 130,
              code: 'ATRIUM CAFÉ',
              desc: '고급 커피와 차, 프랑스식 디저트를 즐길 수 있는 안락한 좌석 공간.'
            },
            {
              id: '3-reception',
              name: '리셉션 데스크',
              subTitle: '승객 체크인 및 안내 데스크',
              category: 'public',
              type: 'rect',
              x: 228,
              y: 60,
              w: 105,
              h: 68,
              labelX: 280,
              labelY: 94,
              code: 'RECEPTION',
              desc: '승무원들이 승객 체크인을 돕고 객실 열쇠 발급과 선내 문의를 처리하는 안내 데스크.'
            },
            {
              id: '3-concierge',
              name: '컨시어지 데스크',
              subTitle: 'VIP 전담 일정 조율 및 서비스',
              category: 'vip',
              type: 'rect',
              x: 228,
              y: 132,
              w: 105,
              h: 68,
              labelX: 280,
              labelY: 166,
              code: 'VIP CONCIERGE',
              desc: 'VIP 승객의 특별 기항지 투어 및 프라이빗 서비스 예약을 전담하는 의전 데스크.'
            },
            {
              id: '3-lobby',
              name: '메인 로비 (Grand Atrium)',
              subTitle: '대형 샹들리에와 대리석 바닥',
              category: 'public',
              type: 'rect',
              x: 341,
              y: 55,
              w: 185,
              h: 150,
              labelX: 433,
              labelY: 130,
              code: 'GRAND ATRIUM',
              desc: '선내 이동과 만남의 중심이 되는 상징적 로비. 3층 높이의 크리스털 샹들리에가 반짝입니다.'
            },
            {
              id: '3-boutique-1',
              name: '명품 주얼리 & 워치 부티크',
              subTitle: '하이엔드 명품 브랜드 쇼룸',
              category: 'public',
              type: 'rect',
              x: 534,
              y: 60,
              w: 135,
              h: 68,
              labelX: 601,
              labelY: 94,
              code: 'BOUTIQUE ARCADE',
              desc: '최고급 보석, 시계, 지중해 에디션 기념품을 판매하는 화려한 쇼핑 구역.'
            },
            {
              id: '3-boutique-2',
              name: '디자이너 패션 갤러리',
              subTitle: '럭셔리 의류 및 액세서리 숍',
              category: 'public',
              type: 'rect',
              x: 534,
              y: 132,
              w: 135,
              h: 68,
              labelX: 601,
              labelY: 166,
              code: 'FASHION GALLERY',
              desc: '선상 파티용 드레스와 명품 캐주얼 의류를 선보이는 편집 부티크.'
            },
            {
              id: '3-board',
              name: '디지털 안내 게시판 & 승강장',
              subTitle: '당일 행사 및 항로 안내 보드',
              category: 'public',
              type: 'path',
              d: 'M 677 75 C 730 80, 770 105, 775 130 C 770 155, 730 180, 677 185 Z',
              labelX: 726,
              labelY: 130,
              code: 'INFO & GANGWAY',
              desc: '기항지 일정과 일몰 시간, 선내 프로그램이 실시간 고지되는 인터랙티브 보드.'
            }
          ],
          features: (
            <>
              {/* Grand Atrium Center Chandelier Circle */}
              <circle cx="433" cy="130" r="28" fill="none" stroke="#dfc699" strokeWidth="1" strokeDasharray="3 3" />
            </>
          )
        };

      case 2:
        return {
          zones: [
            {
              id: '2-staterooms-1',
              name: '일반 승객 객실 (선수 오션뷰)',
              subTitle: '오션뷰 발코니 객실 201~230호',
              category: 'public',
              type: 'path',
              d: 'M 90 130 C 110 90, 150 68, 240 65 L 240 125 L 90 130 Z',
              labelX: 175,
              labelY: 98,
              code: 'OCEANVIEW 201-230',
              desc: '바다 전망 발코니를 갖춘 일반 승객 객실 복도 구역.'
            },
            {
              id: '2-staterooms-2',
              name: '일반 승객 객실 (내부 캐빈)',
              subTitle: '실속형 아늑한 객실 231~250호',
              category: 'public',
              type: 'path',
              d: 'M 90 130 L 240 135 L 240 195 C 150 192, 110 170, 90 130 Z',
              labelX: 175,
              labelY: 162,
              code: 'INTERIOR 231-250',
              desc: '차분하고 조용한 휴식이 가능한 내부 객실 복도.'
            },
            {
              id: '2-lift',
              name: '중앙 엘리베이터 및 리넨 비품실',
              subTitle: '승객 이동 및 객실 서비스 거점',
              category: 'service',
              type: 'rect',
              x: 248,
              y: 85,
              w: 75,
              h: 90,
              labelX: 285,
              labelY: 130,
              code: 'LIFT & LINEN',
              desc: '객실 담당 승무원이 청소 비품과 깨끗한 침구를 수령하는 층별 비품 스테이션.'
            },
            {
              id: '2-staterooms-3',
              name: '일반 승객 객실 (중앙 구역)',
              subTitle: '오션뷰 객실 251~280호',
              category: 'public',
              type: 'rect',
              x: 331,
              y: 60,
              w: 185,
              h: 68,
              labelX: 423,
              labelY: 94,
              code: 'STATEROOMS 251-280',
              desc: '조용하고 사적인 마주침이 일어나는 카펫 복도.'
            },
            {
              id: '2-clinic',
              name: '선내 의무실 (Medical Bay)',
              subTitle: '진료실 및 응급 처치실',
              category: 'public',
              type: 'rect',
              x: 331,
              y: 132,
              w: 120,
              h: 68,
              labelX: 391,
              labelY: 166,
              code: 'MEDICAL BAY',
              desc: '간단한 진료와 응급 처치를 담당하는 최신 의료 장비가 구비된 선내 병원.'
            },
            {
              id: '2-med-staff',
              name: '의료진 대기실',
              subTitle: '의무관 및 간호 인력 상주 구역',
              category: 'crew',
              type: 'rect',
              x: 457,
              y: 132,
              w: 59,
              h: 68,
              labelX: 486,
              labelY: 166,
              code: 'STAFF ONLY',
              desc: '의무관 및 간호 인력이 24시간 상주하며 응급 상황에 대비하는 대기 공간.'
            },
            {
              id: '2-corridor',
              name: '승객용 보조 통로',
              subTitle: '상층 공용 구역 직통 계단',
              category: 'public',
              type: 'rect',
              x: 524,
              y: 60,
              w: 65,
              h: 140,
              labelX: 556,
              labelY: 130,
              code: 'STAIRS & SUB-HALL',
              desc: '3F 메인 로비와 빠르게 연결되는 보조 통로.'
            },
            {
              id: '2-staterooms-4',
              name: '일반 승객 객실 (선미 구역)',
              subTitle: '오션뷰 발코니 객실 281~310호',
              category: 'public',
              type: 'path',
              d: 'M 597 65 L 775 65 C 785 85, 785 175, 775 195 L 597 195 Z',
              labelX: 686,
              labelY: 130,
              code: 'STATEROOMS 281-310',
              desc: '선미 쪽 발코니 객실 군. 탁 트인 바다 전망 제공.'
            }
          ],
          features: (
            <>
              {/* Central Stateroom Corridor Line */}
              <line x1="120" y1="130" x2="770" y2="130" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" strokeDasharray="4 4" />
            </>
          )
        };

      case 1:
      default:
        return {
          zones: [
            {
              id: '1-office',
              name: '승무원 사무실 및 관리실',
              subTitle: '근무 배정표 및 객실 관리 행정실',
              category: 'crew',
              type: 'path',
              d: 'M 105 130 C 120 90, 160 70, 240 68 L 240 125 L 105 130 Z',
              labelX: 180,
              labelY: 98,
              code: 'CREW ADMIN',
              desc: '근무 일정, 객실 관리, 업무 인수인계 및 승무원 보고를 처리하는 행정 사무실.'
            },
            {
              id: '1-emergency',
              name: '비상 대응 시설',
              subTitle: '선내 안전 및 비상 통제 구역',
              category: 'service',
              type: 'path',
              d: 'M 105 130 L 240 135 L 240 192 C 160 190, 120 170, 105 130 Z',
              labelX: 180,
              labelY: 162,
              code: 'SAFETY CONTROL',
              desc: '비상 소화 설비, 구명정 진수 통제 시스템 및 안전 장비 점검 센터.'
            },
            {
              id: '1-laundry',
              name: '세탁실 및 린넨실',
              subTitle: '침구류 및 승무원 유니폼 관리',
              category: 'crew',
              type: 'rect',
              x: 248,
              y: 60,
              w: 135,
              h: 68,
              labelX: 315,
              labelY: 94,
              code: 'CENTRAL LAUNDRY',
              desc: '대형 산업용 세탁기 및 프레스 다림질 설비로 승객용 최고급 린넨을 관리하는 곳.'
            },
            {
              id: '1-storage',
              name: '물품 보관실',
              subTitle: '청소 비품 및 객실 예비 어메니티',
              category: 'crew',
              type: 'rect',
              x: 248,
              y: 132,
              w: 135,
              h: 68,
              labelX: 315,
              labelY: 166,
              code: 'PROVISION STORE',
              desc: '객실 담당 승무원이 청소용품과 고급 소모품을 수령하는 대규모 창고.'
            },
            {
              id: '1-mess',
              name: '승무원 식당 (Crew Mess)',
              subTitle: '승무원 전용 24시간 식당',
              category: 'crew',
              type: 'rect',
              x: 391,
              y: 60,
              w: 125,
              h: 68,
              labelX: 453,
              labelY: 94,
              code: 'CREW MESS',
              desc: '선박을 운항하는 수백 명의 승무원들을 위해 교대 식단을 제공하는 전용 뷔페 식당.'
            },
            {
              id: '1-lounge',
              name: '승무원 휴게실',
              subTitle: '교대 전후 휴식 안식처',
              category: 'crew',
              type: 'rect',
              x: 391,
              y: 132,
              w: 125,
              h: 68,
              labelX: 453,
              labelY: 166,
              code: 'CREW LOUNGE',
              desc: '소파와 TV, 커피 머신이 구비되어 교대 근무 전후 피로를 푸는 승무원만의 휴식 공간.'
            },
            {
              id: '1-engine',
              name: '기관·정비 구역 (엔진룸 & 추진 터빈)',
              subTitle: '선박 추진 기관 및 주 발전 설비',
              category: 'service',
              type: 'path',
              d: 'M 524 60 L 775 60 C 790 90, 790 170, 775 200 L 524 200 Z',
              labelX: 650,
              labelY: 130,
              code: 'ENGINE & PROPULSION',
              desc: '선박 하부의 거대한 디젤-전기 추진 터빈과 발전 설비. 일반 승객의 접근이 엄격히 통제됩니다.'
            }
          ],
          features: (
            <>
              {/* Mechanical Bulkhead Lines */}
              <line x1="524" y1="50" x2="524" y2="210" stroke="#fb7185" strokeWidth="1.5" strokeDasharray="3 3" />
            </>
          )
        };
    }
  };

  const { zones, features } = getDeckArchitecture(floor);
  const selectedZone = zones.find((z) => z.id === selectedZoneId) || null;

  return (
    <div className="w-full my-4 bg-gradient-to-b from-[#040814] via-[#02050c] to-[#040814] rounded-2xl p-4 sm:p-6 border border-[#b38f53]/35 shadow-2xl relative overflow-hidden">
      {/* Blueprint Ambient Grid */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#b38f53_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Header bar: displays only the relevant deck number without extra classification labels */}
      <div className="relative z-10 flex flex-wrap items-center justify-between pb-3 mb-3 border-b border-white/10 gap-2">
        <div className="flex items-center gap-3">
          <h4 className="text-xl sm:text-2xl font-cinzel font-bold text-white flex items-center gap-2">
            <span className="text-[#dfc699] font-mono">{floor}F</span>
          </h4>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-[10px] sm:text-[11px] font-mono text-slate-400">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-sm bg-[#dfc699]/30 border border-[#dfc699]" />
            <span>승객 공용</span>
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-sm bg-purple-500/30 border border-purple-400" />
            <span>VIP 전용</span>
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-sm bg-blue-500/30 border border-blue-400" />
            <span>승무원 전용</span>
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-sm bg-rose-500/30 border border-rose-400" />
            <span>제한·기관</span>
          </span>
        </div>
      </div>

      {/* Interactive Top-Down SVG Architectural Blueprint Viewing Area */}
      <div className="relative z-10 w-full rounded-xl bg-[#03060f]/95 p-2 sm:p-4 border border-white/10 shadow-inner overflow-hidden">
        {/* Scrollable / Draggable Viewport */}
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className={`w-full overflow-auto rounded-lg select-none ${
            zoom > 100 ? 'cursor-grab active:cursor-grabbing' : ''
          }`}
        >
          {/* Sized wrapper: 100% fits entire diagram without scrolling; zooms smoothly when requested */}
          <div
            style={{
              width: `${zoom}%`,
              minWidth: '100%',
              margin: '0 auto',
              transition: isDraggingRef.current ? 'none' : 'width 0.22s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <svg viewBox="0 0 880 260" className="w-full h-auto block select-none" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="blueprintPublic" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#152136" />
                  <stop offset="100%" stopColor="#0b1322" />
                </linearGradient>
                <linearGradient id="blueprintVip" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#281738" />
                  <stop offset="100%" stopColor="#140b1e" />
                </linearGradient>
                <linearGradient id="blueprintCrew" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0f2238" />
                  <stop offset="100%" stopColor="#071220" />
                </linearGradient>
                <linearGradient id="blueprintService" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#281318" />
                  <stop offset="100%" stopColor="#14070a" />
                </linearGradient>
                <linearGradient id="hullEdgeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#dfc699" />
                  <stop offset="50%" stopColor="#b38f53" />
                  <stop offset="100%" stopColor="#dfc699" />
                </linearGradient>
              </defs>

              {/* Grand Cruise Top-Down Outer Hull (Realistic streamlined curved naval architecture) */}
              <path
                d="M 60 130 C 85 75, 160 35, 270 30 L 760 30 C 810 30, 835 60, 835 130 C 835 200, 810 230, 760 230 L 270 230 C 160 225, 85 185, 60 130 Z"
                fill="#050a14"
                stroke="url(#hullEdgeGrad)"
                strokeWidth="2.2"
              />

              {/* Promenade Balcony Deck Line */}
              <path
                d="M 75 130 C 98 85, 172 45, 275 42 L 755 42 C 795 42, 815 70, 815 130 C 815 190, 795 218, 755 218 L 275 218 C 172 215, 98 175, 75 130 Z"
                fill="none"
                stroke="rgba(255, 255, 255, 0.12)"
                strokeWidth="0.8"
                strokeDasharray="4 3"
              />

              {/* Additional architectural features per deck */}
              {features}

              {/* Render Architectural Rooms & Spaces */}
              {zones.map((z) => {
                const isSelected = selectedZoneId === z.id;

                let fill = 'url(#blueprintPublic)';
                let stroke = '#dfc699';
                if (z.category === 'vip') {
                  fill = 'url(#blueprintVip)';
                  stroke = '#c084fc';
                } else if (z.category === 'crew') {
                  fill = 'url(#blueprintCrew)';
                  stroke = '#60a5fa';
                } else if (z.category === 'service') {
                  fill = 'url(#blueprintService)';
                  stroke = '#fb7185';
                }

                return (
                  <g
                    key={z.id}
                    onClick={() => {
                      if (hasDraggedRef.current) return;
                      setSelectedZoneId(z.id === selectedZoneId ? null : z.id);
                    }}
                    className="cursor-pointer transition-all duration-300"
                  >
                    {/* Room Geometry */}
                    {z.type === 'rect' && (
                      <rect
                        x={z.x}
                        y={z.y}
                        width={z.w}
                        height={z.h}
                        rx="4"
                        fill={fill}
                        stroke={isSelected ? '#ffffff' : stroke}
                        strokeWidth={isSelected ? '2.2' : '1'}
                        strokeOpacity={isSelected ? 1 : 0.65}
                        className={isSelected ? 'filter drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]' : ''}
                      />
                    )}
                    {z.type === 'path' && (
                      <path
                        d={z.d}
                        fill={fill}
                        stroke={isSelected ? '#ffffff' : stroke}
                        strokeWidth={isSelected ? '2.2' : '1'}
                        strokeOpacity={isSelected ? 1 : 0.65}
                        className={isSelected ? 'filter drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]' : ''}
                      />
                    )}
                    {z.type === 'circle' && (
                      <circle
                        cx={z.cx}
                        cy={z.cy}
                        r={z.r}
                        fill={fill}
                        stroke={isSelected ? '#ffffff' : stroke}
                        strokeWidth={isSelected ? '2.2' : '1'}
                        strokeOpacity={isSelected ? 1 : 0.65}
                        className={isSelected ? 'filter drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]' : ''}
                      />
                    )}

                    {/* Architectural Room Code */}
                    <text
                      x={z.labelX}
                      y={z.labelY - 5}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fill={isSelected ? '#ffffff' : '#f8fafc'}
                      fontSize="8.5"
                      fontWeight="bold"
                      fontFamily="var(--font-cinzel), serif"
                    >
                      {z.code}
                    </text>

                    {/* Short Korean Room Label */}
                    <text
                      x={z.labelX}
                      y={z.labelY + 8}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fill={isSelected ? '#dfc699' : '#94a3b8'}
                      fontSize="7.5"
                      fontFamily="sans-serif"
                    >
                      {z.name.replace(/\s*\(.*\)/, '')}
                    </text>

                    {/* Selected Beacon */}
                    {isSelected && (
                      <circle cx={z.labelX} cy={z.labelY - 14} r="2.5" fill="#f5ebd7" />
                    )}
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Discreet Floating Luxury Zoom Controls in bottom-right corner */}
        <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 flex items-center gap-0.5 sm:gap-1 bg-[#050b17]/90 backdrop-blur-md border border-[#b38f53]/40 rounded-lg p-1 sm:p-1.5 shadow-2xl select-none">
          {/* Zoom Out Button */}
          <button
            type="button"
            onClick={handleZoomOut}
            disabled={zoom <= 100}
            aria-label="축소"
            title="도면 축소"
            className={`p-1 sm:p-1.5 rounded transition-all flex items-center justify-center ${
              zoom <= 100
                ? 'text-slate-600 cursor-not-allowed opacity-40'
                : 'text-slate-300 hover:text-white hover:bg-white/10 active:scale-95 cursor-pointer'
            }`}
          >
            <ZoomOut className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>

          {/* Zoom Percentage Display / Reset */}
          <button
            type="button"
            onClick={handleResetZoom}
            title="100% 기본 전체 화면으로 초기화"
            className="px-1.5 sm:px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-mono font-semibold text-[#dfc699] hover:bg-white/10 transition-colors cursor-pointer"
          >
            {zoom}%
          </button>

          {/* Zoom In Button */}
          <button
            type="button"
            onClick={handleZoomIn}
            disabled={zoom >= 250}
            aria-label="확대"
            title="도면 확대"
            className={`p-1 sm:p-1.5 rounded transition-all flex items-center justify-center ${
              zoom >= 250
                ? 'text-slate-600 cursor-not-allowed opacity-40'
                : 'text-slate-300 hover:text-white hover:bg-white/10 active:scale-95 cursor-pointer'
            }`}
          >
            <ZoomIn className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>

          {/* Quick Reset Button visible when zoomed in */}
          {zoom > 100 && (
            <button
              type="button"
              onClick={handleResetZoom}
              aria-label="전체 화면 복원"
              title="기본 배율(100%)로 복원"
              className="p-1 sm:p-1.5 rounded text-slate-400 hover:text-[#dfc699] hover:bg-white/10 transition-colors border-l border-white/10 ml-0.5 cursor-pointer"
            >
              <RotateCcw className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Selected Room Detail Card (Click instruction updated as requested) */}
      <div className="relative z-10 mt-3 p-3.5 rounded-xl bg-black/60 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-[#dfc699] shrink-0" />
          {selectedZone ? (
            <div className="flex flex-wrap items-center gap-2">
              <strong className="text-white text-sm">{selectedZone.name}</strong>
              <span className="text-[#dfc699] font-medium font-serif-luxury">{selectedZone.subTitle}</span>
              <span className="text-slate-300 text-[11px] block sm:inline">· {selectedZone.desc}</span>
            </div>
          ) : (
            <span className="text-slate-400 font-serif-luxury">
              평면도 상의 각 구역을 클릭하면 상세 명칭과 위치가 표시됩니다.
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
