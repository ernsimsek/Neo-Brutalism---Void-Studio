export interface Service {
  number: string;
  title: string;
  description: string;
  details: string;
  relatedProject: string;
  relatedSlug: string;
}

export const services: Service[] = [
  {
    number: '01',
    title: 'Brand Identity & Strategy',
    description: 'We build brands that survive contact with the market. Not mood boards. Not moodboard-adjacent decks. Systems that work under pressure.',
    details: 'Logo systems. Typography hierarchies. Color systems. Verbal identity. Brand guidelines that designers actually follow. Motion principles. Applications across print, digital, environmental.',
    relatedProject: 'FAULT',
    relatedSlug: 'fault',
  },
  {
    number: '02',
    title: 'Digital Experience Design',
    description: 'Websites that do something. Not brochures. Not scrolljacking nightmares. Functional, fast, confrontational in their clarity.',
    details: 'Information architecture. Interaction design. Prototyping. Design systems. Handoff. We design and we stay until it ships correctly.',
    relatedProject: 'SURGE',
    relatedSlug: 'surge',
  },
  {
    number: '03',
    title: 'Art Direction & Visual Systems',
    description: 'Campaign direction. Photography art direction. Visual language systems that scale. From one poster to a thousand touchpoints.',
    details: 'Creative direction. Photographer and illustrator briefing. Set design. Post-production direction. Visual systems documentation.',
    relatedProject: 'HOLLOWAY',
    relatedSlug: 'holloway',
  },
  {
    number: '04',
    title: 'Motion & Interactive',
    description: 'Animation with a reason. Every frame earns its existence. Motion that communicates, not motion that decorates.',
    details: 'Brand motion principles. UI animation. Interactive installations. Title sequences. Social content systems.',
    relatedProject: 'NULL/NULL',
    relatedSlug: 'null-null',
  },
  {
    number: '05',
    title: 'Product UI/UX',
    description: 'Dense, functional, precise. For products where every click is a decision and every second of confusion costs money.',
    details: 'User research. Journey mapping. Interface design. Design systems. Accessibility audits. Developer collaboration.',
    relatedProject: 'OPERATOR',
    relatedSlug: 'operator',
  },
  {
    number: '06',
    title: 'Print & Environmental',
    description: 'Physical objects in a world that forgot how to make them. Packaging, signage, books, posters. The stuff that lasts.',
    details: 'Publication design. Packaging systems. Wayfinding. Exhibition design. Production management. We stay through the press check.',
    relatedProject: 'BRINE',
    relatedSlug: 'brine',
  },
];
