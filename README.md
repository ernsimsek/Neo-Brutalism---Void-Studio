# VOID STUDIO

> We don't decorate. We detonate.

Brand identity, web design, art direction, motion.

## Stack

React 19 / TypeScript / Vite 7 / Tailwind CSS 4 / React Router v7

## Commands

```bash
npm run dev
npm run build
npm run preview
```

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/work` | Work gallery |
| `/work/:slug` | Case study |

## Structure

```
src/
├── App.tsx / main.tsx
├── styles/globals.css    # Tokens, reset, @font-face
├── pages/                # Home, WorkAll, CaseStudy
├── components/
│   ├── ui/               # WorkCard, TeamCard, ServiceRow, InView
│   ├── sections/         # Hero, Services, Work, Team, Contact
│   └── layout/           # Nav, Footer
├── data/                 # projects, services, team
└── utils/cn.ts
```

## Notes

- framer-motion removed — replaced with CSS transitions and IntersectionObserver
- All fonts self-hosted (no Google Fonts network requests)
- Route-level code splitting, vendor chunking
- All images in WebP format
- Lighthouse performance: 87
