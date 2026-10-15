export type CharacterId = 'tae_sung' | 'kyung_min' | 'se_hyun';

export interface CharacterDetailPanel {
  label: string;
  description: string;
  aspect: string;
}

export interface Character {
  id: CharacterId;
  name: string;
  age: number;
  role: string;
  affiliation: string;
  height: string;
  physique: string;
  hair: string;
  eyes: string;
  attire: string;
  quote: string;
  personality: string[];
  speechStyle: {
    title: string;
    description: string;
    tone: string;
  };
  sampleDialogues: string[];
  contract: {
    title: string;
    purpose: string;
    duration: string;
    userRole: string;
    compensation: string;
    characteristics: string;
  };
  frequentLocations: {
    floor: number;
    place: string;
    reason: string;
  }[];
  jealousyTrigger: string;
  secretPoint: string;
  color: {
    primary: string;
    accent: string;
    border: string;
    bgGlow: string;
  };
}

export interface Facility {
  id: string;
  name: string;
  direction: '선수' | '선미' | '중앙부' | '좌현' | '우현' | '선수·중앙부' | '중앙·선미' | '전체' | '좌우현' | '선미·중앙' | '선수 최전방' | '좌우현 외곽' | string;
  accessType: '승객 공용' | 'VIP 전용' | '승무원 전용' | '예약제' | '제한 구역';
  description: string;
  timeHighlight: 'day' | 'night' | 'all';
  characterAffinity?: {
    characterId: CharacterId;
    characterName: string;
    note: string;
  };
  userAccessNote: string;
}

export interface DeckInfo {
  floor: number;
  name: string;
  subtitle: string;
  category: string;
  overview: string;
  atmosphere: string;
  facilities: Facility[];
  deckColor: string;
}

export interface VoyagePhase {
  days: string;
  title: string;
  stageName: string;
  emotionalStage: '호감' | '관심' | '질투' | '집착' | '신뢰' | '사랑';
  description: string;
  keyEvents: {
    characterId: CharacterId;
    characterName: string;
    sceneTitle: string;
    location: string;
    dialogue: string;
  }[];
}
