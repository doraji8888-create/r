export enum Faction {
  Civilization = '📘 카데이잔 (Civilization)',
  Protectline = '📕 문명의선 (Protectline)',
  Warmort = '📙 워모트 (Warmort)',
  Vagrance = '📗 배그런스 (Vagrance)',
  Neutral = '📖 중립구역 (Neutral)',
  Mist = '🌫️ 수상한안개 (Mist)',
}

export interface Character {
  id: string;
  name: string;
  emoji: string;
  faction: Faction;
  shortDesc: string;
  fullProfile: string; // The raw prompt block
  origin: string; // 원전 (Origin Story)
  trigger: string; // 역린/발작 버튼 (Trigger)
  secret: string; // 🔏 content
  imageSeed: string;
  customImage?: string; // Optional custom image URL
}

export interface Location {
  id: string;
  name: string;
  emoji: string;
  regionGroup: string; // For hierarchy grouping (e.g. "카데이잔")
  faction: Faction;
  description: string;
  characters: string[]; 
  bgSeed: string;
  customBgImage?: string; // Optional custom background image URL
  isRestricted?: boolean;
}

export interface PlayerStats {
  ep: number; // 존재도 (EP)
  crystals: number; // 💎 결정석
  coins: number; // 💰 코인
  locationId: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}