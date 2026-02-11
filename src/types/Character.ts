export interface Weapon {
  id: string;
  name: string;
  type: string;
  rarity: number;
  description: string;
  baseAttack: number;
  subStat?: string;
  subStatValue?: number;
}

export interface Echo {
  id: string;
  name: string;
  rarity: number;
  cost: number;
  skill: string;
  sonataEffect?: string;
}

export interface Build {
  id: string;
  name: string;
  description: string;
  recommendedWeapons: string[];
  recommendedEchoes: string[];
  mainStats: {
    slot: string;
    stat: string;
  }[];
  subStats: string[];
}

export interface Constellation {
  id: string;
  level: number;
  name: string;
  description: string;
  icon?: string;
}

export interface Character {
  id: string;
  name: string;
  element: string;
  weapon: string;
  rarity: number;
  description: string;
  avatar?: string;
  wallpapers: string[];
  builds: Build[];
  weapons: Weapon[];
  echoes: Echo[];
  constellations: Constellation[];
}
