export interface Project {
  id: string;
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  tags: string[];
  year: string;
  client: string;
  role: string;
  challenge: string;
  outcome: string;
  stat: string;
  statLabel: string;
  color: string;
  size: 'large' | 'medium' | 'small';
  images?: string[];
  thumbnail?: string;
}

export const projects: Project[] = [
  {
    id: '01',
    slug: 'fault',
    number: '01',
    title: 'FAULT',
    subtitle: 'Seismic data startup identity built from fault-line cartography.',
    tags: ['Brand Identity', 'Motion', 'Web'],
    year: '2024',
    client: 'Fault Inc.',
    role: 'Creative Direction, Brand Identity, Web Design',
    challenge: 'A SF-based seismic data startup needed an identity as inevitable as a fault line. Bold, technical, confrontational. Built entirely from fault-line cartography. Every glyph derived from geological notation.',
    outcome: 'Identity launched across 4 markets. Series A secured 3 months post-launch. Press coverage in Wired, FastCo, Eye Magazine.',
    stat: '+340%',
    statLabel: 'BRAND AWARENESS',
    color: '#FF2200',
    size: 'large',
    images: ['/images/fault-1.png', '/images/fault-2.png', '/images/fault-3.png'],
  },
  {
    id: '02',
    slug: 'holloway',
    number: '02',
    title: 'HOLLOWAY',
    subtitle: 'Campaign identity for an independent architectural practice in Berlin.',
    tags: ['Print', 'Brand', 'Art Direction'],
    year: '2023',
    client: 'Holloway Architektur',
    role: 'Art Direction, Print Design, Brand System',
    challenge: 'A Berlin architectural firm needed a typography system derived from floor plan notation. Precise. Cold. Exact. No warmth. No welcome. Just architecture.',
    outcome: 'Shortlisted for D&AD. Feature in Dezeen. New business pipeline tripled in 6 months.',
    stat: '3×',
    statLabel: 'NEW BUSINESS',
    color: '#C8FF00',
    size: 'medium',
    images: ['/images/holloway-1.png', '/images/holloway-2.png', '/images/holloway-3.png'],
  },
  {
    id: '03',
    slug: 'surge',
    number: '03',
    title: 'SURGE',
    subtitle: 'E-commerce redesign for a streetwear label doing $40M annually.',
    tags: ['UI/UX', 'Web', 'Strategy'],
    year: '2023',
    client: 'Surge Apparel',
    role: 'UX Strategy, UI Design, Development Direction',
    challenge: 'A streetwear label at $40M revenue had a checkout flow built by interns in 2018. Broken. Slow. Ugly in the wrong way. We rebuilt it from the transaction backward.',
    outcome: 'Checkout conversion +34% post-launch. Cart abandonment down 28%. Mobile revenue up 61%.',
    stat: '+34%',
    statLabel: 'CONVERSION',
    color: '#FFFFFF',
    size: 'small',
    images: ['/images/surge-1.png', '/images/surge-2.png', '/images/surge-3.png'],
  },
  {
    id: '04',
    slug: 'null-null',
    number: '04',
    title: 'NULL/NULL',
    subtitle: 'Exhibition identity for a digital art collective. Glitch aesthetics.',
    tags: ['Identity', 'Print', 'Motion'],
    year: '2024',
    client: 'NULL Collective',
    role: 'Identity Design, Motion, Print Production',
    challenge: 'A digital art collective needed an identity that could self-destruct. Glitch aesthetics, procedural pattern system, posters designed to degrade over time. Anti-archive.',
    outcome: 'Exhibited at 7 international venues. Identity itself acquired as artwork by MoMA library.',
    stat: '7',
    statLabel: 'VENUES',
    color: '#C8FF00',
    size: 'small',
    images: ['/images/null-null-1.png', '/images/null-null-2.png', '/images/null-null-3.png'],
    thumbnail: '/images/null-null-hero.png',
  },
  {
    id: '05',
    slug: 'brine',
    number: '05',
    title: 'BRINE',
    subtitle: 'Esports team identity and tournament branding for a competitive gaming organization.',
    tags: ['Identity', 'Motion', 'Web'],
    year: '2023',
    client: 'Brine Esports',
    role: 'Brand Identity, Motion Design, Tournament Visual System',
    challenge: 'A competitive gaming org needed an identity as aggressive as their playstyle. Neon-drenched, glitch-infected, tournament-ready. Every element designed to intimidate opponents before the match even starts.',
    outcome: 'Brand recognition +280% across Twitch and YouTube. Merch sales tripled. Featured in IGN and Kotaku.',
    stat: '+280%',
    statLabel: 'BRAND REACH',
    color: '#FF2200',
    size: 'large',
    images: ['/images/brine-1.png', '/images/brine-2.png', '/images/brine-3.png'],
    thumbnail: '/images/brine-hero.png',
  },
  {
    id: '06',
    slug: 'operator',
    number: '06',
    title: 'OPERATOR',
    subtitle: 'SaaS dashboard for infrastructure engineers. Dense, monospace, zero decoration.',
    tags: ['Product Design', 'UI/UX'],
    year: '2024',
    client: 'Operator Systems',
    role: 'Product Design, Design System, UX Research',
    challenge: 'Infrastructure engineers hate Figma-brain UI. They want density. Precision. Monospace. The anti-dashboard. Every pixel earns its place or gets deleted.',
    outcome: 'NPS score 71 (industry avg: 31). Onboarding time reduced by 67%. Raised $12M Series A.',
    stat: '71',
    statLabel: 'NPS SCORE',
    color: '#FFFFFF',
    size: 'medium',
    images: ['/images/operator-1.png', '/images/operator-2.png', '/images/operator-3.png'],
  },
];
