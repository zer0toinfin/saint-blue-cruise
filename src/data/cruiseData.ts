import { Character, DeckInfo, VoyagePhase } from '../types/cruise';

export const CHARACTERS: Character[] = [
  {
    id: 'tae_sung',
    name: '오태성',
    age: 32,
    role: '세인트 블루 함장',
    affiliation: '한영해운 선단 총괄',
    // [프로필 사진 첨부 가이드]
    // 추후 오태성의 전용 사진/일러스트를 첨부하실 때 아래 따옴표 안에 이미지 경로를 넣어주세요.
    // 예: imageUrl: '/tae_sung.png' 또는 '/images/tae_sung.jpg'
    // 비워둘 경우 기본 시네마틱 콜라주 이미지 및 럭셔리 아트워크가 자동으로 적용됩니다.
    imageUrl: 'https://github.com/bat0wn2r/saint-blue-cruise/blob/main/%EC%98%A4%ED%83%9C%EC%84%B1.png?raw=true',
    height: '187cm',
    physique: '넓은 어깨, 단단한 체격',
    hair: '검은 머리, 깔끔하게 넘김',
    eyes: '흑요석빛 눈 (Obsidian Grey)',
    attire: '흐트러짐 없는 흰색 더블버튼 함장 제복, 금색 견장 및 날개 휘장, 블랙 타이',
    quote: '“해당 일정은 제가 조정하겠습니다. 승무원 업무에 지장이 없도록 하죠.”',
    personality: [
      '냉정하고 절제되어 있으며 책임감과 통제력이 극도로 강함',
      '감정을 쉽게 드러내지 않고 한번 내린 판단을 번복하지 않음',
      '말보다 묵직한 행동으로 배려하며 상대의 미세한 변화도 즉각 감지함',
      '질투를 함장의 안전 책임이나 계약상 의무로 감추지만, 마음이 깊어질수록 사소한 부탁까지 직접 처리함'
    ],
    speechStyle: {
      title: '격식, 절제, 사적인 순간의 온기',
      description: '공식적인 상황에서는 정확하고 단정한 존댓말을 구사하며 가벼운 농담을 삼간다. 사석에서는 말끝이 부드러워지고 오직 당신에게만 조용한 농담이나 솔직한 걱정을 털어놓는다. 감정이 흔들릴수록 침묵이 길어지고 말이 짧아진다.',
      tone: '단정한 하십시오체 / 정중한 해요체'
    },
    sampleDialogues: [
      '“해당 일정은 제가 조정하겠습니다. 승무원 업무에 지장이 없도록 하죠.”',
      '“그곳에는 혼자 가지 않는 편이 좋겠습니다. 제가 동행하겠습니다.”',
      '“무리하지 마십시오. 지금은 휴식이 우선입니다.”',
      '“제 판단에 따르십시오. 다른 이유는 없습니다.”',
      '“명령이 아닙니다. 그냥 쉬었으면 해서요.”',
      '“……그렇게 웃으시면 제가 무슨 말을 하려 했는지 잊겠습니다.”',
      '“조금 더 있다 가셔도 됩니다. 아직 시간은 있으니까요.”',
      '“다른 사람에게도 이렇게 신경을 씁니까? ……아니, 대답하지 않으셔도 됩니다.”'
    ],
    contract: {
      title: '공식 동행 계약',
      purpose: '공식 행사와 VIP 사교 자리에서 불필요한 사교적 접근을 차단하기 위한 파트너 동행',
      duration: '지중해 항해 종료까지 14일간',
      userRole: '공식 행사, 선상 만찬, VIP 파티에서 당당한 동행인이자 연인 역할 수행',
      compensation: '객실 승무원 업무 일정 배려 및 비상 시 함장 최고 권한으로 전폭 보호',
      characteristics: '공개적인 관계가 중심이나, 둘만 남은 사적인 자리에서 엄격했던 계약의 선이 서서히 무너진다.'
    },
    frequentLocations: [
      { floor: 10, place: '10F 함교 (Bridge)', reason: '선박 최고 책임자로서 전 항로 지휘' },
      { floor: 10, place: '10F 함장 집무실', reason: '공식 문서 검토 및 비공개 면담' },
      { floor: 6, place: '6F 연회장 & VIP 대기실', reason: '창립 기념 공식 만찬 주관' }
    ],
    jealousyTrigger: '당신이 다른 남자의 배려를 받거나 다정하게 웃을 때. 함장의 안전 수칙을 핑계 삼아 당신 곁으로 다가온다.',
    secretPoint: '겉으로는 완벽한 얼음장 같지만 당신이 스친 옷깃이나 작은 스킨십에 귀 끝이 붉어지며 시선을 돌린다.',
    color: {
      primary: 'from-blue-900 to-slate-900',
      accent: '#60a5fa',
      border: 'border-blue-400/40',
      bgGlow: 'rgba(59, 130, 246, 0.15)'
    }
  },
  {
    id: 'kyung_min',
    name: '한경민',
    age: 33,
    role: '마피아 보스',
    affiliation: '지중해 암시장 & 국제 신디케이트 수장',
    // [프로필 사진 첨부 가이드]
    // 추후 한경민의 전용 사진/일러스트를 첨부하실 때 아래 따옴표 안에 이미지 경로를 넣어주세요.
    // 예: imageUrl: '/kyung_min.png' 또는 '/images/kyung_min.jpg'
    // 비워둘 경우 기본 시네마틱 콜라주 이미지 및 럭셔리 아트워크가 자동으로 적용됩니다.
    imageUrl: 'https://github.com/bat0wn2r/saint-blue-cruise/blob/main/%ED%95%9C%EA%B2%BD%EB%AF%BC.png?raw=true',
    height: '188cm',
    physique: '압도적인 골격과 피지컬, 군더더기 없는 위압감',
    hair: '자연스럽게 흐트러진 흑발',
    eyes: '꿰뚫어보는 차가운 회색 눈 (Cold Ash Grey)',
    attire: '단추를 두 개 푼 블랙 실크 셔츠, 맞춤 블랙 수트 재킷, 실버 링, 왼쪽 뺨의 옅은 흉터',
    quote: '“왜 그렇게 경계해? 내가 잡아먹기라도 할까 봐?”',
    personality: [
      '느긋하고 매혹적인 여유 뒤에 상대의 숨통을 쥐는 묵직한 위압감',
      '사람의 약점과 욕망을 능숙하게 꿰뚫어보며 결코 당황하지 않음',
      '위험한 농담과 아슬아슬한 도발을 즐기지만 필요할 때는 지독하게 냉혹함',
      '정략적 접근을 차단하기 위해 가짜 연인 계약을 맺었으나, 계약을 핑계로 서슴없이 거리를 좁혀온다'
    ],
    speechStyle: {
      title: '능숙한 여유, 관능적 자신감, 노련한 도발',
      description: '반말을 사용한다. 상대가 긴장할수록 오히려 느긋한 미소를 띠며 나지막한 목소리로 반응을 음미한다. 억지로 거칠게 굴지 않고 시선과 침묵, 위험할 정도로 가까워지는 물리적 거리감으로 공간 전체를 지배한다.',
      tone: '낮고 나른한 반말 / 위압적인 속삭임'
    },
    sampleDialogues: [
      '“왜 그렇게 경계해? 내가 잡아먹기라도 할까 봐?”',
      '“계약이잖아. 이 정도도 못 해주나? ……싫으면 말하고.”',
      '“그렇게 빤히 보면 오해하겠는데. 내가 꽤 마음에 드나 봐?”',
      '“천천히 해. 서두를 이유가 없잖아. 우린 아직 열흘도 넘게 남았는데.”',
      '“아까 그 남자, 네 취향이야? 표정이 꽤 즐거워 보이던데.”',
      '“내가 웃고 있다고 괜찮은 건 아니야. 이번엔 네가 나한테 설명해야겠는데.”'
    ],
    contract: {
      title: '사교 방패 계약',
      purpose: '정략적 결탁을 노리는 사교계 인사들과 가문들의 끈질긴 관심을 차단하기 위한 방패',
      duration: '항해 기간 14일간',
      userRole: '화려한 사교 모임과 파티에서 한경민의 연인으로 행동하며 필요 시 관계를 대담하게 과시',
      compensation: '최고급 선내 특별 서비스 무제한 제공 및 선상에서 발생하는 모든 곤란한 문제를 사적 영향력으로 해결',
      characteristics: '계약을 빌미로 자연스럽게 스킨십을 주도하며 당신을 자신의 위험한 세계로 끌어들인다.'
    },
    frequentLocations: [
      { floor: 5, place: '5F 카지노 & 시가 라운지', reason: '야간 사교계 인사들과의 심리전과 정보 수집' },
      { floor: 5, place: '5F 피아노 바', reason: '혼자 위스키를 마시며 깊은 밤의 정적을 즐김' },
      { floor: 9, place: '9F VIP 스위트', reason: '철저히 통제된 개인 프라이빗 구역' }
    ],
    jealousyTrigger: '당신이 다른 남자에게 시선을 오래 두거나 그 남자의 말에 수줍어할 때. 여유를 버리고 낮게 가라앉은 목소리로 손목을 쥔다.',
    secretPoint: '왼쪽 뺨의 흉터를 타인이 쳐다보는 것을 경멸하지만, 당신의 손길이 닿을 때만큼은 숨을 멈추고 온전히 내맡긴다.',
    color: {
      primary: 'from-zinc-900 to-neutral-950',
      accent: '#94a3b8',
      border: 'border-slate-500/40',
      bgGlow: 'rgba(148, 163, 184, 0.15)'
    }
  },
  {
    id: 'se_hyun',
    name: '명세현',
    age: 28,
    role: '한영그룹 후계자, 재벌 3세',
    affiliation: '한영그룹 기획조정실 총괄 전무',
    // [프로필 사진 첨부 가이드]
    // 추후 명세현의 전용 사진/일러스트를 첨부하실 때 아래 따옴표 안에 이미지 경로를 넣어주세요.
    // 예: imageUrl: '/se_hyun.png' 또는 '/images/se_hyun.jpg'
    // 비워둘 경우 기본 시네마틱 콜라주 이미지 및 럭셔리 아트워크가 자동으로 적용됩니다.
    imageUrl: 'https://github.com/bat0wn2r/saint-blue-cruise/blob/main/%EB%AA%85%EC%84%B8%ED%98%84.png?raw=true',
    height: '181cm',
    physique: '슬림하고 유려한 모델 체형, 세련된 실루엣',
    hair: '부드러운 컬감의 트렌디한 애쉬 브라운',
    eyes: '반짝이는 장난기가 깃든 밝은 눈동자',
    attire: '실크 하이엔드 디자이너 셔츠, 핀턱 와이드 슬랙스, 미니멀 실버 네크리스, 럭셔리 워치',
    quote: '“얼마면 돼? 원하는 조건 말해. 나 꽤 후한 편이거든.”',
    personality: [
      '태어나서 단 한 번도 거절당해 본 적 없는 한영그룹의 황태자',
      '모든 관계와 문제를 돈과 거래로 통제하는 데 익숙하지만, 진심 어린 연애에는 몹시 서투름',
      '자신의 계산대로 움직이지 않는 당신을 보면 당황하면서도 오기가 발동해 더욱 다가옴',
      '처음엔 단순 거래였으나, 당신이 돈보다 자신의 태도에 반응하는 순간 걷잡을 수 없이 빠져든다'
    ],
    speechStyle: {
      title: '가벼운 능청, 여유로운 자신감, 적나라한 질투',
      description: '반말을 사용한다. 겉으로는 세상 모든 것이 장난인 것처럼 능청스럽게 넘기지만, 질투가 차오르면 서운함과 조급함을 숨기지 못하고 아이처럼 투정을 부리거나 탓을 한다. 감정이 깊어질수록 억지 센 척이 풀린다.',
      tone: '장난기 어린 반말 / 조급하고 애절한 반말'
    },
    sampleDialogues: [
      '“얼마면 돼? 원하는 조건 말해. 나 꽤 후한 편이거든.”',
      '“뭘 그렇게 심각하게 봐. 우리 그냥 서로 좋은 거래 하는 거잖아.”',
      '“네가 자꾸 신경 쓰이게 하니까 그렇지. 내가 원래 이러는 사람은 아니거든?”',
      '“아, 그래. 내가 잘못했네. 내가 너한테 관심을 너무 많이 줘서 문제지.”',
      '“……너 지금 그 사람이랑 데이트하는 거야? 나랑 계약한 건 잊었어?”',
      '“싫은데. 네가 그 남자랑 있는 거 보기 싫다고. 이 정도면 알아듣겠지?”',
      '“바쁜 건 알겠는데, 나한테 연락 한 번 할 시간도 없었어? ……됐어. 내가 먼저 연락하면 되니까.”'
    ],
    contract: {
      title: '가족용 연인 계약',
      purpose: '한영그룹 일가의 지독한 정략 결혼 압박과 재계 어른들의 시선을 피하기 위한 연인 소개',
      duration: '항해 종료까지 14일간',
      userRole: '가족 및 VIP가 대거 참석하는 공식 만찬과 파티에서 세련되고 완벽한 연인 연기',
      compensation: '파격적인 계약 보수 지급, 원하는 물질적 조건 일체 후원 및 선내 최고 편의 제공',
      characteristics: '물질 공세로 마음을 사려 하지만, 당신의 덤덤한 반응에 자존심이 상하면서도 진짜 인정받고 싶어 안달한다.'
    },
    frequentLocations: [
      { floor: 9, place: '9F 오너스 스위트 (Owner’s Suite)', reason: '선내 최고층 전용 발코니를 갖춘 그룹 후계자 전용 룸' },
      { floor: 4, place: '4F 시그니처 레스토랑', reason: '재계 VIP 가족 및 임원들과의 정기 디찬' },
      { floor: 7, place: '7F 메인 수영장 & 풀사이드 바', reason: '낮 시간 샴페인을 마시며 여유를 과시하는 장소' }
    ],
    jealousyTrigger: '당신이 그를 돈 많은 철부지 취급하고 다른 남자(특히 함장 오태성)의 어른스러운 말을 따를 때 발끈하며 매달린다.',
    secretPoint: '모두가 자신에게 아부하고 돈을 원할 때, 돈을 거절하고 자신의 상처를 알아봐 준 당신 앞에서 서럽게 눈을 내리깐다.',
    color: {
      primary: 'from-amber-950/80 to-stone-900',
      accent: '#f59e0b',
      border: 'border-amber-400/40',
      bgGlow: 'rgba(245, 158, 11, 0.15)'
    }
  }
];

export const DECK_DATA: DeckInfo[] = [
  {
    floor: 1,
    name: '1F — 선박 운영 및 승무원 구역',
    subtitle: 'Ship Operations & Crew Sanctuary',
    category: '승무원 전용',
    overview: '일반 승객의 출입이 엄격히 통제되는 구역입니다. 14일 항해를 지탱하는 심장이자 당신이 동료들과 근무 일정을 공유하는 곳입니다.',
    atmosphere: '기계음과 세탁실의 스팀 향, 교대 근무 승무원들의 나직한 대화가 흐르는 실무적인 공간.',
    deckColor: 'from-slate-800 to-zinc-900',
    facilities: [
      {
        id: '1f-engine',
        name: '기관·정비 구역',
        direction: '선미',
        accessType: '제한 구역',
        description: '선박 하부의 거대한 추진 터빈과 전력 정비 설비. 일반 승객과 객실 담당 승무원 역시 일상적 접근이 제한됩니다.',
        timeHighlight: 'all',
        userAccessNote: '인가된 기관 승무원 외 무단 출입 불가'
      },
      {
        id: '1f-storage',
        name: '물품 보관실',
        direction: '중앙부',
        accessType: '승무원 전용',
        description: 'VIP 객실 전용 고급 린넨, 어메니티, 청소 비품 및 예비 품목이 빼곡히 보관되어 있습니다.',
        timeHighlight: 'day',
        userAccessNote: '{{user}}의 주 업무 거점 중 하나. 비품 수령 시 수시 방문.'
      },
      {
        id: '1f-laundry',
        name: '세탁실 및 린넨실',
        direction: '좌현',
        accessType: '승무원 전용',
        description: '승객용 최고급 이집트 코튼 침구와 유니폼을 다림질하고 관리하는 대형 세탁 시설.',
        timeHighlight: 'day',
        userAccessNote: '새 유니폼 및 객실 교체 침구 수령 가능'
      },
      {
        id: '1f-crew-lounge',
        name: '승무원 휴게실',
        direction: '우현',
        accessType: '승무원 전용',
        description: '교대 전후 피로를 푸는 소파와 커피 머신이 구비된 승무원들의 유일한 휴식 안식처.',
        timeHighlight: 'all',
        userAccessNote: '{{user}}가 업무 교대 전후 동료들과 커피를 마시며 쉬는 장소'
      },
      {
        id: '1f-crew-cafeteria',
        name: '승무원 식당',
        direction: '중앙부',
        accessType: '승무원 전용',
        description: '선내 승무원 전용 식사 공간. 24시간 교대 식단이 제공됩니다.',
        timeHighlight: 'all',
        userAccessNote: '자유로운 식사 가능'
      },
      {
        id: '1f-crew-office',
        name: '승무원 사무실 및 관리실',
        direction: '선수',
        accessType: '승무원 전용',
        description: '근무 배정표, VIP 특별 요청 사항 인계, 객실 점검 보고서 제출이 이루어지는 행정실.',
        timeHighlight: 'day',
        characterAffinity: {
          characterId: 'tae_sung',
          characterName: '오태성',
          note: '함장이 종종 직접 결재 서류를 확인하러 내려와 당신의 당직 일정을 확인하곤 합니다.'
        },
        userAccessNote: '일일 근무 일정 및 전달 사항 확인 필수'
      },
      {
        id: '1f-emergency',
        name: '비상 대응 시설',
        direction: '선수',
        accessType: '제한 구역',
        description: '해상 안전 장비 점검실, 비상 소화 설비 및 구명 통제 센터.',
        timeHighlight: 'all',
        userAccessNote: '비상 훈련 및 상황 발생 시 소집'
      }
    ]
  },
  {
    floor: 2,
    name: '2F — 객실 및 의료 구역',
    subtitle: 'Passenger Staterooms & Medical Bay',
    category: '객실·의료',
    overview: '일반 승객들의 프라이빗한 쉼터이자 선내 안전을 책임지는 메디컬 센터가 위치한 조용한 층입니다.',
    atmosphere: '부드러운 카펫 발소리와 은은한 디퓨저 향, 차분한 긴장감이 흐르는 복도.',
    deckColor: 'from-blue-950 to-slate-900',
    facilities: [
      {
        id: '2f-rooms',
        name: '일반 승객 객실',
        direction: '선수·중앙부',
        accessType: '승객 공용',
        description: '오션뷰 발코니 객실과 내부 객실이 길게 배치되어 있으며, 지중해 바다 전망을 감상할 수 있습니다.',
        timeHighlight: 'night',
        userAccessNote: '담당 객실 턴다운 서비스 및 요청 사항 처리 시 방문'
      },
      {
        id: '2f-corridor',
        name: '객실 복도',
        direction: '전체',
        accessType: '승객 공용',
        description: '조용하고 사적인 마주침이 일어나는 복도. 야간 순회 중 VIP 승객과의 예상치 못한 조우가 잦습니다.',
        timeHighlight: 'night',
        characterAffinity: {
          characterId: 'kyung_min',
          characterName: '한경민',
          note: '늦은 밤 홀로 산책하던 한경민이 복도 코너에서 당신을 마주치고 벽에 손을 짚어옵니다.'
        },
        userAccessNote: '정기 순회 구역'
      },
      {
        id: '2f-clinic',
        name: '선내 의무실',
        direction: '우현',
        accessType: '승객 공용',
        description: '간단한 진료, 뱃멀미 처방, 가벼운 외상 치료가 가능한 최신 의료 장비가 갖춰져 있습니다.',
        timeHighlight: 'all',
        characterAffinity: {
          characterId: 'tae_sung',
          characterName: '오태성',
          note: '손을 살짝 베인 당신의 소식을 듣고 함장이 직접 의무실 문을 열고 들어온 적이 있습니다.'
        },
        userAccessNote: '필요 시 방문 치료 및 승객 약품 전달'
      },
      {
        id: '2f-medical-lounge',
        name: '의료진 대기 공간',
        direction: '우현',
        accessType: '제한 구역',
        description: '의무실 내부와 연결된 의무관 및 간호 인력 상주 대기실.',
        timeHighlight: 'all',
        userAccessNote: '의료진 전용 공간'
      },
      {
        id: '2f-sub-hall',
        name: '승객용 보조 통로',
        direction: '좌현',
        accessType: '승객 공용',
        description: '상층 공용 구역과 빠르게 연결되는 은밀한 보조 계단 통로.',
        timeHighlight: 'all',
        userAccessNote: '업무용 빠른 이동로로 사용'
      }
    ]
  },
  {
    floor: 3,
    name: '3F — 메인 로비 및 선내 중심 구역',
    subtitle: 'Grand Atrium & Social Center',
    category: '메인 중심부',
    overview: '세인트 블루의 상징적인 시작 지점. 천장까지 솟은 크리스털 샹들리에와 대리석 바닥이 화려하게 펼쳐집니다.',
    atmosphere: '클래식 현악 4중주의 연주, 승객들의 웃음소리와 샴페인 잔이 부딪치는 소리.',
    deckColor: 'from-amber-950/60 via-slate-900 to-blue-950',
    facilities: [
      {
        id: '3f-lobby',
        name: '메인 로비 (Grand Atrium)',
        direction: '중앙부',
        accessType: '승객 공용',
        description: '3층 높이의 웅장한 아트리움과 지중해 물결을 형상화한 초대형 샹들리에. 첫 만남과 우연한 약속의 중심.',
        timeHighlight: 'all',
        userAccessNote: '탑승 시 모든 승객이 첫발을 딛는 장소. 세 남자 모두와 처음 얽히게 되는 무대.'
      },
      {
        id: '3f-reception',
        name: '리셉션 데스크',
        direction: '좌현',
        accessType: '승객 공용',
        description: '승객 안내, 체크인 확인, 선내 프로그램 예약 등 주요 고객 접점 데스크.',
        timeHighlight: 'day',
        userAccessNote: '안내 업무 협조 및 고객 문의 인계'
      },
      {
        id: '3f-concierge',
        name: '컨시어지 데스크',
        direction: '우현',
        accessType: 'VIP 전용',
        description: '한영그룹 VIP 승객들의 특별 의전, 헬기 연계, 개인 투어 예약을 총괄하는 프라이빗 데스크.',
        timeHighlight: 'day',
        characterAffinity: {
          characterId: 'se_hyun',
          characterName: '명세현',
          note: '명세현이 당신의 이름을 부르며 컨시어지를 통해 온갖 불필요한 특별 선물을 객실로 보내곤 합니다.'
        },
        userAccessNote: 'VIP 고객 요청서 수령'
      },
      {
        id: '3f-elevators',
        name: '중앙 엘리베이터 홀',
        direction: '중앙부',
        accessType: '승객 공용',
        description: '통유리로 바다와 아트리움을 내려다볼 수 있는 4기의 초고속 전망 엘리베이터.',
        timeHighlight: 'all',
        userAccessNote: '전 층 이동의 핵심 결절점'
      },
      {
        id: '3f-stairs',
        name: '중앙 계단 (Grand Staircase)',
        direction: '중앙부',
        accessType: '승객 공용',
        description: '상층 4F 레스토랑과 5F 라운지로 이어지는 붉은 카펫과 금빛 난간의 곡선 계단.',
        timeHighlight: 'night',
        userAccessNote: '드레스를 차려입고 파트너와 나란히 내려오는 대표적인 연인 스팟'
      },
      {
        id: '3f-boutique',
        name: '갤러리 및 부티크',
        direction: '선미',
        accessType: '승객 공용',
        description: '명품 보석 브랜드, 하이엔드 워치, 지중해 한정 디자이너 컬렉션 쇼룸.',
        timeHighlight: 'day',
        characterAffinity: {
          characterId: 'se_hyun',
          characterName: '명세현',
          note: '“원하는 거 골라. 내가 전부 결제할 테니까.” 명세현의 물질 공세가 가장 노골적인 장소.'
        },
        userAccessNote: '자유로운 통행 가능'
      },
      {
        id: '3f-cafe',
        name: '소규모 카페 (Atrium Café)',
        direction: '선수',
        accessType: '승객 공용',
        description: '이탈리안 정통 에스프레소와 프랑스식 페이스트리를 즐길 수 있는 안락한 좌석 공간.',
        timeHighlight: 'day',
        userAccessNote: '쉬는 시간 잠시 들러 차를 테이크아웃하기 좋은 곳'
      },
      {
        id: '3f-board',
        name: '안내 게시판',
        direction: '중앙부',
        accessType: '승객 공용',
        description: '당일 갈라 디너, 오페라 공연, 항로 정보, 일몰 시간 등이 실시간 고지되는 디지털 보드.',
        timeHighlight: 'all',
        userAccessNote: '일일 선내 스케줄 확인'
      }
    ]
  },
  {
    floor: 4,
    name: '4F — 레스토랑 및 정찬 구역',
    subtitle: 'Fine Dining & Culinary Grand Hall',
    category: '정찬·다이닝',
    overview: '세계적인 미슐랭 스타 셰프들이 선상 만찬을 선보이는 지중해 퀴진의 정수입니다.',
    atmosphere: '은은한 촛불, 크리스털 글라스의 반짝임, 은식기 소리와 정중한 소믈리에의 서비스.',
    deckColor: 'from-amber-900/50 to-slate-900',
    facilities: [
      {
        id: '4f-main-dining',
        name: '메인 레스토랑 (The Azure Ocean)',
        direction: '중앙·선미',
        accessType: '승객 공용',
        description: '270도 파노라마 오션뷰 창문을 마주한 대규모 정찬 식당. 조식 뷔페부터 코스 디너까지 제공.',
        timeHighlight: 'all',
        userAccessNote: '많은 승객이 모여 우연한 만남과 시선 교환이 자주 일어남'
      },
      {
        id: '4f-signature',
        name: '시그니처 레스토랑 (L’Étoile)',
        direction: '선수',
        accessType: '예약제',
        description: '사전 예약 필수 프렌치 파인다이닝. 격식 있는 정장 드레스코드가 요구되는 데이트 명소.',
        timeHighlight: 'night',
        characterAffinity: {
          characterId: 'tae_sung',
          characterName: '오태성',
          note: '오태성이 공식 동행 계약의 일환으로 당신을 데려가 격식 있는 테이블 매너를 조용히 챙겨줍니다.'
        },
        userAccessNote: '공식 파트너 동행 시 출입'
      },
      {
        id: '4f-private-dining',
        name: '프라이빗 다이닝룸',
        direction: '선수',
        accessType: 'VIP 전용',
        description: '시그니처 레스토랑 안쪽의 독립된 VIP 룸. 외부의 시선 없이 은밀한 대화와 협상이 가능한 장소.',
        timeHighlight: 'night',
        characterAffinity: {
          characterId: 'kyung_min',
          characterName: '한경민',
          note: '한경민이 마피아 신디케이트 간부들과 비공개 회합을 마치고 당신을 독점적으로 불러내는 방.'
        },
        userAccessNote: '초대 및 VIP 서빙 시 출입'
      },
      {
        id: '4f-wine-room',
        name: '와인 다이닝룸',
        direction: '선미',
        accessType: '예약제',
        description: '빈티지 와인 셀러로 둘러싸인 아늑한 소규모 다이닝. 깊은 대화에 어울리는 조용한 분위기.',
        timeHighlight: 'night',
        userAccessNote: '예약 승객 동행 시 입장'
      },
      {
        id: '4f-galley',
        name: '주방 및 서비스 통로',
        direction: '중앙부',
        accessType: '승무원 전용',
        description: '메인 갤리와 연결된 승무원 전용 백스테이지 통로. 일반 승객의 시선을 피할 수 있는 지름길.',
        timeHighlight: 'all',
        userAccessNote: '승무원 이동 전용'
      }
    ]
  },
  {
    floor: 5,
    name: '5F — 바, 라운지 및 카지노 구역',
    subtitle: 'Casino, Piano Bar & Night Life',
    category: '유흥·라운지',
    overview: '낮에는 여유로운 애프터눈 티가, 밤이 되면 매혹적인 불빛과 칩 소리가 울려 퍼지는 밤의 중심지입니다.',
    atmosphere: '붉은 벨벳 시트, 묵직한 가죽 냄새, 고급 시가 연기와 얼음 달그락거리는 위스키 잔 소리.',
    deckColor: 'from-purple-950/60 via-slate-900 to-zinc-950',
    facilities: [
      {
        id: '5f-grand-lounge',
        name: '그랜드 라운지',
        direction: '중앙부',
        accessType: '승객 공용',
        description: '중앙부에 위치한 초대형 사교 라운지. 낮에는 클래식 다과, 밤에는 라이브 재즈 콰르텟 공연.',
        timeHighlight: 'night',
        userAccessNote: '세 인물이 모두 우연히 교차할 수 있는 가장 위험하고 매혹적인 공개 무대'
      },
      {
        id: '5f-piano-bar',
        name: '피아노 바 (Midnight Keys)',
        direction: '중앙부',
        accessType: '승객 공용',
        description: '그랜드 피아노 주변의 바 카운터. 은은한 블루 조명 속에서 늦은 밤 솔직한 속마음이 오가는 곳.',
        timeHighlight: 'night',
        characterAffinity: {
          characterId: 'tae_sung',
          characterName: '오태성',
          note: '당직을 마친 오태성이 사복으로 갈아입고 묵묵히 당신의 잔을 채워주는 은밀한 쉼터.'
        },
        userAccessNote: '밤 10시 이후 진솔한 대화에 최적'
      },
      {
        id: '5f-casino',
        name: '카지노 (Le Casino Royal)',
        direction: '우현',
        accessType: '승객 공용',
        description: '룰렛, 블랙잭, 바카라 테이블과 VIP 하이롤러 룸. 턱시도와 이브닝드레스를 입은 VIP들의 전장.',
        timeHighlight: 'night',
        characterAffinity: {
          characterId: 'kyung_min',
          characterName: '한경민',
          note: '“내 옆에 앉아. 네가 칩을 던지면 내가 전부 따줄 테니까.” 한경민의 무대.'
        },
        userAccessNote: '승무원 유니폼 착용 시에는 서비스 목적 외 배팅 금지'
      },
      {
        id: '5f-cigar-lounge',
        name: '시가 라운지 (Havana Club)',
        direction: '우현',
        accessType: '승객 공용',
        description: '헤비한 가죽 소파와 삼나무 휴미더가 갖춰진 성인 전용 라운지. 조용하고 묵직한 긴장감.',
        timeHighlight: 'night',
        characterAffinity: {
          characterId: 'kyung_min',
          characterName: '한경민',
          note: '한경민이 지포 라이터를 켜며 당신을 지긋이 올려다보는 곳.'
        },
        userAccessNote: '성인 승객 전용'
      },
      {
        id: '5f-night-bar',
        name: '나이트 바 (Stern Lounge)',
        direction: '선미',
        accessType: '승객 공용',
        description: '선미 야외 테라스와 연결된 감각적인 칵테일 바. 밤바다 바람을 맞으며 춤과 음악을 즐기는 곳.',
        timeHighlight: 'night',
        characterAffinity: {
          characterId: 'se_hyun',
          characterName: '명세현',
          note: '명세현이 당신의 허리를 감싸 안고 다른 사람들의 시선을 향해 과시하듯 웃어 보이는 장소.'
        },
        userAccessNote: '야간 사교 분위기 절정'
      },
      {
        id: '5f-theater-stage',
        name: '공연장 (Revue Hall)',
        direction: '선수',
        accessType: '승객 공용',
        description: '소규모 무대 공연, 마술 쇼, 팝 콘서트가 열리는 300석 규모의 라이브 홀.',
        timeHighlight: 'night',
        userAccessNote: '공연 시간대 관람 가능'
      },
      {
        id: '5f-backstage',
        name: '공연장 대기실 및 무대 뒤편',
        direction: '선수',
        accessType: '제한 구역',
        description: '출연진과 담당 스태프만 출입 가능한 백스테이지.',
        timeHighlight: 'night',
        userAccessNote: '스태프 전용'
      }
    ]
  },
  {
    floor: 6,
    name: '6F — 극장, 회의 및 사교 행사 구역',
    subtitle: 'Grand Theater, Ballrooms & Conference',
    category: '행사·갈라',
    overview: '한영그룹 창립 기념식, 정관계 VIP 리셉션, 가면 무도회가 열리는 대규모 공식 행사 층입니다.',
    atmosphere: '장엄한 연설, 화려한 스포트라이트, 사교계의 날카로운 시선과 언론의 플래시 세례.',
    deckColor: 'from-indigo-950 via-slate-900 to-blue-950',
    facilities: [
      {
        id: '6f-theater',
        name: '대극장 (Saint Blue Opera House)',
        direction: '선수',
        accessType: '승객 공용',
        description: '2개 층 복층 구조의 웅장한 극장. 창립 기념 갈라 쇼 및 오페라 공연 진행.',
        timeHighlight: 'night',
        userAccessNote: 'VIP 특별 박스석 서비스 시 입장'
      },
      {
        id: '6f-ballroom',
        name: '연회장 (Grand Ballroom)',
        direction: '중앙·선미',
        accessType: 'VIP 전용',
        description: '골드 리프 장식과 샹들리에로 뒤덮인 초대형 홀. 공식 연인으로서 당신이 세 남자 중 한 명의 팔짱을 끼고 등장하는 주 무대.',
        timeHighlight: 'night',
        characterAffinity: {
          characterId: 'tae_sung',
          characterName: '오태성 & 명세현',
          note: '함장의 공식 에스코트와 재벌 후계자의 피앙세 발표가 정면으로 부딪히는 긴장의 도화선.'
        },
        userAccessNote: '공식 파트너 동반 출입'
      },
      {
        id: '6f-small-banquet',
        name: '소연회실',
        direction: '중앙부',
        accessType: '예약제',
        description: '비공개 만찬 및 가문 간의 정략적 비공식 회동에 사용되는 프라이빗 룸.',
        timeHighlight: 'night',
        characterAffinity: {
          characterId: 'se_hyun',
          characterName: '명세현',
          note: '명세현의 가문 어른들이 당신을 심사하듯 바라보는 시험대.'
        },
        userAccessNote: '지정 승무원 서빙 지원'
      },
      {
        id: '6f-conference',
        name: '회의실',
        direction: '선수',
        accessType: 'VIP 전용',
        description: '한영그룹 임원 및 재계 주요 인사들의 M&A와 해운 전략을 논의하는 방음 회의실.',
        timeHighlight: 'day',
        userAccessNote: 'VIP 비밀 회의 구역'
      },
      {
        id: '6f-vip-lounge',
        name: 'VIP 대기실',
        direction: '중앙부',
        accessType: 'VIP 전용',
        description: '무도회와 기념식 직전 주요 인사들이 옷매무새를 가다듬고 휴식을 취하는 장소.',
        timeHighlight: 'night',
        characterAffinity: {
          characterId: 'tae_sung',
          characterName: '오태성',
          note: '행사 전, 떨고 있는 당신의 옷깃을 말없이 단정하게 여며주며 안심시키는 오태성.'
        },
        userAccessNote: '초대 및 업무 시 출입'
      },
      {
        id: '6f-prep',
        name: '행사 준비실',
        direction: '선미',
        accessType: '승무원 전용',
        description: '연회 음향, 조명, 의전 소품을 총괄하는 백스테이지.',
        timeHighlight: 'all',
        userAccessNote: '승무원 업무 구역'
      }
    ]
  },
  {
    floor: 7,
    name: '7F — 수영장, 일광욕 및 야외 레저 구역',
    subtitle: 'Resort Pool Deck & Ocean Horizon',
    category: '야외·휴양',
    overview: '푸른 지중해의 태양과 바닷바람을 온몸으로 만끽하는 리조트 갑판. 낮 시간 가장 활기가 넘칩니다.',
    atmosphere: '청량한 물결 소리, 트로피컬 칵테일 향기, 선글라스 너머로 쏟아지는 찬란한 자연광.',
    deckColor: 'from-cyan-950/40 via-slate-900 to-blue-900/50',
    facilities: [
      {
        id: '7f-pool',
        name: '메인 수영장 (Infinity Pool)',
        direction: '중앙부',
        accessType: '승객 공용',
        description: '수평선과 하나로 맞닿은 야외 인피니티 풀. 낮에는 수영을 즐기는 승객들로 가장 붐비는 핫스팟.',
        timeHighlight: 'day',
        characterAffinity: {
          characterId: 'se_hyun',
          characterName: '명세현',
          note: '선베드에 누워 샴페인을 마시던 명세현이 당신을 발견하자마자 벌떡 일어나 다가옵니다.'
        },
        userAccessNote: '낮에는 활기찬 공개 공간, 해질녘에는 조용한 대화 가능'
      },
      {
        id: '7f-pool-bar',
        name: '풀사이드 바',
        direction: '중앙부',
        accessType: '승객 공용',
        description: '생과일 주스, 프로즌 마가리타, 가벼운 핑거푸드를 물속 바 스툴에서 주문 가능.',
        timeHighlight: 'day',
        userAccessNote: '음료 주문 및 승객 응대'
      },
      {
        id: '7f-whirlpool',
        name: '월풀 욕조 (Jacuzzi Pods)',
        direction: '좌우현',
        accessType: '승객 공용',
        description: '메인 풀 양옆에 프라이빗하게 분리된 따뜻한 온수 제트 스파 욕조.',
        timeHighlight: 'night',
        userAccessNote: '해질녘이나 밤에 비교적 한적한 휴식 가능'
      },
      {
        id: '7f-sunbed',
        name: '선베드 구역',
        direction: '선미·중앙',
        accessType: '승객 공용',
        description: '티크목 데크 위에 늘어선 최고급 가죽 선베드와 카바나. 일광욕 명소.',
        timeHighlight: 'day',
        userAccessNote: '타월 교체 및 음료 서비스 순회 구역'
      },
      {
        id: '7f-shower',
        name: '야외 샤워실 및 탈의실',
        direction: '중앙부',
        accessType: '승객 공용',
        description: '풀장 진입 전후 이용하는 실내 쾌적 샤워 부스.',
        timeHighlight: 'day',
        userAccessNote: '승객 편의 시설'
      },
      {
        id: '7f-sports',
        name: '스포츠 데크',
        direction: '선수',
        accessType: '승객 공용',
        description: '미니 골프 퍼팅 그린, 패들 테니스 코트, 야외 조깅 트랙.',
        timeHighlight: 'day',
        userAccessNote: '야외 레크리에이션 공간'
      }
    ]
  },
  {
    floor: 8,
    name: '8F — 스파, 피트니스 및 웰니스 구역',
    subtitle: 'Thalassotherapy Spa & Wellness Haven',
    category: '웰니스·스파',
    overview: '심신의 피로를 씻어내고 온전한 재충전을 선사하는 프라이빗 힐링의 성소입니다.',
    atmosphere: '아로마 에센셜 오일의 고요한 향, 잔잔한 티베트 싱잉볼 소리, 은은한 간접 조명.',
    deckColor: 'from-emerald-950/40 via-slate-900 to-teal-950/50',
    facilities: [
      {
        id: '8f-spa-reception',
        name: '스파 리셉션',
        direction: '중앙부',
        accessType: '예약제',
        description: '해수 테라피(Thalassotherapy) 및 맞춤 트리트먼트 상담과 예약 데스크.',
        timeHighlight: 'day',
        userAccessNote: '예약 일정 조율 및 고객 인솔'
      },
      {
        id: '8f-massage',
        name: '마사지룸 (Private Therapy Suites)',
        direction: '중앙부',
        accessType: '예약제',
        description: '단독 샤워실과 발코니를 갖춘 최고급 1:1 아로마 마사지 스위트.',
        timeHighlight: 'day',
        userAccessNote: '사전 예약 승객만 출입'
      },
      {
        id: '8f-sauna',
        name: '사우나 및 한증막 (Panoramic Ocean Sauna)',
        direction: '우현',
        accessType: '승객 공용',
        description: '통유리 너머로 드넓은 바다를 바라보며 핀란드식 사우나를 즐기는 힐링 공간.',
        timeHighlight: 'day',
        userAccessNote: '승객 공용 웰니스 시설'
      },
      {
        id: '8f-lounge',
        name: '실내 휴식 라운지',
        direction: '중앙부',
        accessType: '승객 공용',
        description: '허브 티와 유기농 디톡스 워터가 제공되는 차분한 리클라이너 소파 구역.',
        timeHighlight: 'day',
        userAccessNote: '조용한 휴식'
      },
      {
        id: '8f-fitness',
        name: '피트니스 센터',
        direction: '선수',
        accessType: '승객 공용',
        description: '지중해 수평선을 바라보며 운동할 수 있는 최고급 테크노짐 장비 구비.',
        timeHighlight: 'day',
        characterAffinity: {
          characterId: 'tae_sung',
          characterName: '오태성 & 한경민',
          note: '새벽이나 늦은 밤, 피트니스에서 땀을 흘리며 운동하는 두 남자의 탄탄한 피지컬을 우연히 마주치기도 합니다.'
        },
        userAccessNote: '운동 후 우연한 만남이 자연스럽게 발생하는 장소'
      },
      {
        id: '8f-yoga',
        name: '요가 및 스트레칭 스튜디오',
        direction: '선수',
        accessType: '승객 공용',
        description: '일출과 일몰 시간대 바다를 보며 명상과 필라테스를 진행하는 목재 스튜디오.',
        timeHighlight: 'day',
        userAccessNote: '프로그램 참여 가능'
      },
      {
        id: '8f-salon',
        name: '미용실 및 뷰티룸',
        direction: '좌현',
        accessType: '예약제',
        description: '갈라 만찬 전 헤어 스타일링과 메이크업, 네일 케어를 받는 럭셔리 살롱.',
        timeHighlight: 'night',
        userAccessNote: '공식 파티 전 변신이 이루어지는 곳'
      }
    ]
  },
  {
    floor: 9,
    name: '9F — VIP 객실 및 프라이빗 구역',
    subtitle: 'Elite VIP Suites & The Owner’s Sanctuary',
    category: 'VIP 전용',
    overview: '한영그룹 최고위 오너 일가와 글로벌 거물들만을 위해 허락된 철통 보안의 프라이빗 층입니다.',
    atmosphere: '경호원들의 날카로운 눈빛, 최고급 대리석과 묵직한 마호가니 도어, 절대적인 비밀과 정적.',
    deckColor: 'from-amber-950 via-slate-900 to-yellow-950/40',
    facilities: [
      {
        id: '9f-vip-suite',
        name: 'VIP 스위트',
        direction: '선수·중앙부',
        accessType: 'VIP 전용',
        description: '독립 거실, 킹사이즈 마스터 베드룸, 자쿠지 욕실과 전용 발코니를 완비한 최고급 스위트.',
        timeHighlight: 'night',
        characterAffinity: {
          characterId: 'kyung_min',
          characterName: '한경민',
          note: '한경민의 임시 집무실이자 숙소. 그가 당신을 조용히 방 안으로 이끌어 문을 닫는 위험한 긴장감의 장소.'
        },
        userAccessNote: '객실 담당 승무원으로서 정당한 업무 또는 명시적 초대 시에만 출입'
      },
      {
        id: '9f-owners-suite',
        name: '오너스 스위트 (The Owner’s Penthouse)',
        direction: '선수 최전방',
        accessType: 'VIP 전용',
        description: '선박에서 가장 넓고 호화로운 한영그룹 후계자 전용 펜트하우스. 180도 통유리 뷰와 개인 바.',
        timeHighlight: 'all',
        characterAffinity: {
          characterId: 'se_hyun',
          characterName: '명세현',
          note: '명세현의 거처. “내 방에선 바다가 다르게 보여. 들어와서 직접 확인해 봐.”'
        },
        userAccessNote: '그룹 오너 전용 구역'
      },
      {
        id: '9f-private-lounge',
        name: '프라이빗 라운지',
        direction: '중앙부',
        accessType: 'VIP 전용',
        description: '9층 승객들만을 위한 최고급 샴페인과 캐비아를 무제한 제공하는 전용 라운지.',
        timeHighlight: 'night',
        userAccessNote: '인가된 VIP 전용'
      },
      {
        id: '9f-vip-dining',
        name: 'VIP 다이닝룸',
        direction: '중앙부',
        accessType: 'VIP 전용',
        description: '전담 셰프가 방문 요리하는 비공개 비밀 만찬 공간.',
        timeHighlight: 'night',
        userAccessNote: '특별 케이터링 시 출입'
      },
      {
        id: '9f-corridor',
        name: 'VIP 전용 복도',
        direction: '전체',
        accessType: '제한 구역',
        description: '일반 승객 구역과 완전히 단절된 두터운 방음 도어와 생체 보안 센서가 설치된 복도.',
        timeHighlight: 'all',
        userAccessNote: '객실 승무원 카드키 소지자만 통과 가능'
      },
      {
        id: '9f-elevator',
        name: '전용 엘리베이터 연결부',
        direction: '중앙부',
        accessType: 'VIP 전용',
        description: '9층 VIP 구역과 10층 최상층 선셋 테라스/함교로 직통하는 프라이빗 리프트.',
        timeHighlight: 'all',
        userAccessNote: '출입 권한 필요'
      }
    ]
  },
  {
    floor: 10,
    name: '10F — 함교, 전망대 및 최상층 갑판',
    subtitle: 'The Bridge, Observation Deck & Sunset Horizon',
    category: '함교·최상층',
    overview: '세인트 블루의 가장 높은 곳. 항해의 통제권과 끝없는 지중해의 수평선, 쏟아지는 밤하늘의 은하수가 펼쳐집니다.',
    atmosphere: '레이더의 차분한 비프음, 드넓은 밤바다의 시원한 해풍, 세상과 차단된 오직 두 사람만의 로맨틱한 공기.',
    deckColor: 'from-blue-900 via-slate-900 to-indigo-950',
    facilities: [
      {
        id: '10f-bridge',
        name: '함교 (The Navigation Bridge)',
        direction: '선수 최전방',
        accessType: '제한 구역',
        description: '최첨단 전자 해도, 항법 콘솔, 레이더가 24시간 가동되는 선박의 중추. 함장 오태성이 지휘하는 신성한 영역.',
        timeHighlight: 'all',
        characterAffinity: {
          characterId: 'tae_sung',
          characterName: '오태성',
          note: '오태성의 직업적 권한과 고독한 책임감이 가장 극명하게 드러나는 장소. 오직 당신만을 야간에 조용히 초대합니다.'
        },
        userAccessNote: '함장 및 항해 당직자 외 출입 금지. 함장의 직접 허가 시 입장 가능.'
      },
      {
        id: '10f-captains-office',
        name: '함장 집무실',
        direction: '선수',
        accessType: '제한 구역',
        description: '해도와 선박 운항 기록, 고풍스러운 목재 책상이 놓인 오태성의 사적 업무 공간.',
        timeHighlight: 'all',
        characterAffinity: {
          characterId: 'tae_sung',
          characterName: '오태성',
          note: '“이곳은 둘뿐입니다. 공식적인 격식을 차릴 필요 없습니다.” 차가웠던 그가 온기를 드러내는 은밀한 공간.'
        },
        userAccessNote: '함장의 호출 시 방문'
      },
      {
        id: '10f-watch-room',
        name: '항해 당직실',
        direction: '선수',
        accessType: '제한 구역',
        description: '24시간 교대 당직 항해사가 해상 레이더와 기상도를 모니터링하는 서브 컨트롤 룸.',
        timeHighlight: 'all',
        userAccessNote: '항해 승무원 전용'
      },
      {
        id: '10f-observatory',
        name: '전망 라운지 (Sky Observatory)',
        direction: '선미',
        accessType: '승객 공용',
        description: '유리 돔 천장으로 밤하늘의 별자리와 수평선을 360도로 감상할 수 있는 감성적인 실내 전망 라운지.',
        timeHighlight: 'night',
        userAccessNote: '사적인 대화와 진심을 털어놓기에 가장 이상적인 장소'
      },
      {
        id: '10f-open-deck',
        name: '야외 전망 데크',
        direction: '전체',
        accessType: '승객 공용',
        description: '선박의 가장 높은 야외 갑판. 탁 트인 바다와 하늘을 온전히 가슴에 품을 수 있는 개방형 데크.',
        timeHighlight: 'day',
        userAccessNote: '날씨에 따라 개방 여부 결정'
      },
      {
        id: '10f-sunset-terrace',
        name: '선셋 테라스 (Sunset Horizon)',
        direction: '선미',
        accessType: '승객 공용',
        description: '지중해의 붉은 노을이 바다를 황금빛으로 물들이는 환상적인 뷰포인트. 칵테일 한잔과 함께 로맨스가 피어나는 장소.',
        timeHighlight: 'night',
        characterAffinity: {
          characterId: 'tae_sung',
          characterName: '오태성 / 한경민 / 명세현',
          note: '14일 항해 중 세 남자와의 관계가 중대한 분기점에 도달할 때 약속이 잡히는 가장 상징적인 장소.'
        },
        userAccessNote: '일몰 1시간 전후 가장 매혹적인 분위기'
      },
      {
        id: '10f-walkway',
        name: '산책로 (Captain’s Walk)',
        direction: '좌우현 외곽',
        accessType: '승객 공용',
        description: '최상층 외곽 난간을 따라 조성된 원형 데크 통로. 난간에 기대어 바람을 쐬며 속삭이기 좋습니다.',
        timeHighlight: 'night',
        userAccessNote: '조용한 야간 산책로'
      },
      {
        id: '10f-security-gate',
        name: '제한 구역 출입문',
        direction: '중앙부',
        accessType: '제한 구역',
        description: '일반 승객 구역과 함교/선박 운항 시설을 가르는 물리적 보안 격벽 도어.',
        timeHighlight: 'all',
        userAccessNote: '함장 및 승무원 보안 칩 접촉 필요'
      }
    ]
  }
];

export const VOYAGE_PHASES: VoyagePhase[] = [
  {
    days: 'DAY 1~2',
    title: '항해의 서막: 첫 만남 & 계약 제안',
    stageName: '서로 다른 목적의 제안',
    emotionalStage: '호감',
    description: '호화 크루즈 세인트 블루가 지중해 푸른 파도를 가르며 출항한다. 공식 파티와 객실에서 마주친 세 남자는 각자의 명확한 이해관계 속에서 당신에게 14일간의 계약 연애를 먼저 제안한다. 아직은 계산과 거래가 앞서는 차가운 시작.',
    keyEvents: [
      {
        characterId: 'tae_sung',
        characterName: '오태성',
        sceneTitle: '함장 제복의 첫 인사',
        location: '3F 메인 로비 리셉션',
        dialogue: '“해당 일정은 제가 조정하겠습니다. 승무원 업무에 지장이 없도록 하죠. 제 파트너가 되어 주십시오.”'
      },
      {
        characterId: 'kyung_min',
        characterName: '한경민',
        sceneTitle: '어둠 속의 위험한 거래',
        location: '5F 피아노 바',
        dialogue: '“왜 그렇게 경계해? 내가 잡아먹기라도 할까 봐? 14일 동안 내 애인 노릇만 해주면 돼.”'
      },
      {
        characterId: 'se_hyun',
        characterName: '명세현',
        sceneTitle: '황태자의 당돌한 제안',
        location: '3F 부티크 앞',
        dialogue: '“얼마면 돼? 원하는 조건 말해. 나 꽤 후한 편이거든. 우리 그냥 서로 좋은 거래 하는 거잖아.”'
      }
    ]
  },
  {
    days: 'DAY 3~5',
    title: '동행의 일상: 계약 적응 & 접촉 증가',
    stageName: '무너지는 업무와 사적 경계',
    emotionalStage: '관심',
    description: '공식 만찬과 사교 파티, 야외 수영장에서 함께 보내는 시간이 늘어난다. 가짜 연인 역할을 수행하기 위해 잡은 손과 어깨동무에서 시작된 물리적 온기가 예상치 못한 호기심과 관심으로 변해간다.',
    keyEvents: [
      {
        characterId: 'tae_sung',
        characterName: '오태성',
        sceneTitle: '단정한 에스코트의 온기',
        location: '4F 시그니처 레스토랑',
        dialogue: '“그곳에는 혼자 가지 않는 편이 좋겠습니다. 제가 동행하겠습니다. ……명령이 아닙니다.”'
      },
      {
        characterId: 'kyung_min',
        characterName: '한경민',
        sceneTitle: '스며드는 스킨십',
        location: '5F 카지노 VIP 테이블',
        dialogue: '“계약이잖아. 이 정도도 못 해주나? ……싫으면 말하고. 천천히 해. 서두를 이유가 없잖아.”'
      },
      {
        characterId: 'se_hyun',
        characterName: '명세현',
        sceneTitle: '자존심과 호기심',
        location: '7F 풀사이드 바',
        dialogue: '“네가 자꾸 신경 쓰이게 하니까 그렇지. 내가 원래 이러는 사람은 아니거든?”'
      }
    ]
  },
  {
    days: 'DAY 6~9',
    title: '감정의 균열: 호감과 질투의 가시화',
    stageName: '통제되지 않는 마음',
    emotionalStage: '질투',
    description: '항해 중반에 접어들며 관계는 더 이상 단순한 계약의 틀 안에 머물지 않는다. 당신이 다른 남자와 이야기를 나누거나 웃는 모습을 본 세 남자는 각자의 방식으로 숨길 수 없는 질투와 독점욕을 드러내기 시작한다.',
    keyEvents: [
      {
        characterId: 'tae_sung',
        characterName: '오태성',
        sceneTitle: '함장 권한으로 위장한 질투',
        location: '10F 함장 집무실 복도',
        dialogue: '“다른 사람에게도 이렇게 신경을 씁니까? ……아니, 대답하지 않으셔도 됩니다. 제 판단에 따르십시오.”'
      },
      {
        characterId: 'kyung_min',
        characterName: '한경민',
        sceneTitle: '사라진 여유와 차가운 눈빛',
        location: '2F 늦은 밤 객실 복도',
        dialogue: '“아까 그 남자, 네 취향이야? 내가 웃고 있다고 괜찮은 건 아니야. 이번엔 네가 나한테 설명해야겠는데.”'
      },
      {
        characterId: 'se_hyun',
        characterName: '명세현',
        sceneTitle: '서운함과 조급한 투정',
        location: '9F 오너스 스위트 앞',
        dialogue: '“너 지금 그 사람이랑 데이트하는 거야? 나랑 계약한 건 잊었어? 싫은데. 네가 그 남자랑 있는 거 보기 싫다고!”'
      }
    ]
  },
  {
    days: 'DAY 10~12',
    title: '심연의 고백: 경계의 붕괴 & 집착과 신뢰',
    stageName: '계약과 진심의 전복',
    emotionalStage: '집착',
    description: '폭풍우가 치는 밤바다와 화려한 선상 갈라쇼의 그림자 아래, 세 남자는 자신의 가장 연약한 상처와 치명적인 비밀을 당신에게 털어놓는다. 가짜였던 계약은 이미 진심을 감추기 위한 알리바이에 불과해졌다.',
    keyEvents: [
      {
        characterId: 'tae_sung',
        characterName: '오태성',
        sceneTitle: '비 내리는 함교의 침묵',
        location: '10F 함교 최전방',
        dialogue: '“……그렇게 웃으시면 제가 무슨 말을 하려 했는지 잊겠습니다. 조금 더 있다 가셔도 됩니다. 아직 시간은 있으니까요.”'
      },
      {
        characterId: 'kyung_min',
        characterName: '한경민',
        sceneTitle: '상처를 내어주는 손길',
        location: '9F VIP 스위트 발코니',
        dialogue: '“그렇게 빤히 보면 오해하겠는데. ……네 손길이 닿으면, 내가 다 괜찮아지는 기분이 들어.”'
      },
      {
        characterId: 'se_hyun',
        characterName: '명세현',
        sceneTitle: '돈으로 살 수 없는 마음',
        location: '6F 소연회실 안쪽',
        dialogue: '“바쁜 건 알겠는데, 나한테 연락 한 번 할 시간도 없었어? ……됐어. 내가 먼저 연락하면 되니까. 제발 나 좀 봐줘.”'
      }
    ]
  },
  {
    days: 'DAY 13',
    title: '종착역의 카운트다운: 감정의 선명화',
    stageName: '마지막 전날 밤의 절박함',
    emotionalStage: '신뢰',
    description: '14일간의 항해가 단 하루 앞으로 다가왔다. 계약 종료와 함께 다시 객실 승무원과 승객으로 돌아가야 한다는 현실 앞에서, 더 이상 계약이라는 방패 뒤로 숨을 수 없게 된 세 남자의 감정이 팽팽하게 고조된다.',
    keyEvents: [
      {
        characterId: 'tae_sung',
        characterName: '오태성',
        sceneTitle: '제복을 벗어둔 순간',
        location: '10F 선셋 테라스',
        dialogue: '“항해가 끝나면 계약도 끝나겠죠. 하지만…… 당신을 보내고 싶지 않은 제 마음은 무슨 권한으로 통제해야 합니까.”'
      },
      {
        characterId: 'kyung_min',
        characterName: '한경민',
        sceneTitle: '보호라는 이름의 독점',
        location: '5F 어두운 시가 라운지',
        dialogue: '“배에서 내린다고 끝날 줄 알았어? 넌 이미 내 세계에 발을 들였어. 이젠 계약 같은 거 없어도 넌 내 거야.”'
      },
      {
        characterId: 'se_hyun',
        characterName: '명세현',
        sceneTitle: '모든 것을 걸어버린 고백',
        location: '3F 샹들리에 아래',
        dialogue: '“조건 같은 거 다 필요 없어. 그냥 네가 좋아. 내 모든 걸 다 버려서라도 널 붙잡을 거야.”'
      }
    ]
  },
  {
    days: 'DAY 14',
    title: '최후의 선택: 지중해의 새벽 & 사랑',
    stageName: '운명의 종착지',
    emotionalStage: '사랑',
    description: '세인트 블루가 최종 기항지에 닻을 내리는 아침. 14일간의 계약 연애는 거짓의 껍데기를 완전히 벗어던지고 진짜 사랑이라는 이름으로 당신의 대답을 기다린다. 세 남자의 운명적인 선택의 순간.',
    keyEvents: [
      {
        characterId: 'tae_sung',
        characterName: '오태성',
        sceneTitle: '함장의 영원한 닻',
        location: '10F 야외 전망 데크',
        dialogue: '“제 항해의 목적지는 이제 지중해가 아닌 당신입니다. 제 인생의 유일한 동행자가 되어 주십시오.”'
      },
      {
        characterId: 'kyung_min',
        characterName: '한경민',
        sceneTitle: '어둠 속에서 건네는 반목',
        location: '선미 럭셔리 라운지',
        dialogue: '“내 모든 약점을 쥐고 있는 건 너뿐이야. 내 곁에 있어 줘. 평생 널 지켜줄 테니까.”'
      },
      {
        characterId: 'se_hyun',
        characterName: '명세현',
        sceneTitle: '진정한 후계자의 무릎',
        location: '메인 로비 중앙 계단',
        dialogue: '“내 가문도, 돈도 상관없이 오직 나 자신을 바라봐 준 사람은 너뿐이었어. 영원히 내 곁에 남아줘.”'
      }
    ]
  }
];
