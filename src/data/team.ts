export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  rotation: number;
  initials: string;
  bgColor: string;
}

export const team: TeamMember[] = [
  {
    name: 'MAL VOSS',
    role: 'Co-Founder, Creative Director',
    bio: 'Formerly at Wolff Olins, Pentagram. 14 years breaking things on purpose.',
    rotation: -2,
    initials: 'MV',
    bgColor: '#2A2A2A',
  },
  {
    name: 'SABLE KIM',
    role: 'Co-Founder, Design Director',
    bio: 'Formerly at IDEO, R/GA. Spent a decade making other agencies\' work look worse by comparison.',
    rotation: 1.5,
    initials: 'SK',
    bgColor: '#1A1A1A',
  },
  {
    name: 'OREN MALIK',
    role: 'Head of Digital',
    bio: 'Product design background. Now allergic to rounded corners.',
    rotation: -1,
    initials: 'OM',
    bgColor: '#0F0F0F',
  },
  {
    name: 'PETRA CROSS',
    role: 'Senior Motion Designer',
    bio: 'Animation is a argument. She always wins.',
    rotation: 2,
    initials: 'PC',
    bgColor: '#2A2A2A',
  },
];

export const clients: string[] = [
  'ADOBE', 'DEPOP', 'ROMAN & WILLIAMS', 'THE BELIEVER',
  'AESOP', 'ARC\'TERYX', 'SSENSE', 'DEZEEN',
  'OPENAI', 'STRIPE', 'FIGMA', 'VERCEL',
  'WALLPAPER*', 'MONOCLE', 'PHAIDON', 'TASCHEN',
  'ACE HOTEL', 'SOHO HOUSE', 'AMAN', 'NOBU',
  'BALENCIAGA', 'LEMAIRE', 'OUR LEGACY', 'PORTFOLIO',
];
