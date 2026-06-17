import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const stats = [
  { number: 183, suffix: '', label: 'PROJECTS\nSHIPPED', sublabel: '' },
  { number: 47, suffix: '', label: 'CLIENTS\nSERVED GLOBALLY', sublabel: '' },
  { number: 12, suffix: '', label: 'YEARS\nCOMBINED EXPERIENCE', sublabel: '' },
  { number: 3, suffix: '×', label: 'AWWWARDS\nNOMINEE', sublabel: '' },
];

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);

  return count;
}

function StatBlock({
  stat,
  index,
  active,
}: {
  stat: typeof stats[0];
  index: number;
  active: boolean;
}) {
  const count = useCountUp(stat.number, 1.8, active);
  const isLast = index === stats.length - 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      style={{
        flex: '1 1 200px',
        padding: 'clamp(32px, 4vw, 56px) clamp(24px, 3vw, 48px)',
        borderRight: isLast ? 'none' : '4px solid var(--void)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '240px',
      }}
      className="stat-block"
    >
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(4rem, 8vw, 10rem)',
          fontWeight: 900,
          color: 'var(--void)',
          lineHeight: 1,
          letterSpacing: '-0.04em',
          display: 'flex',
          alignItems: 'baseline',
          gap: '4px',
        }}
      >
        {count}
        {stat.suffix && (
          <span style={{ fontSize: '0.6em', color: 'var(--void)' }}>{stat.suffix}</span>
        )}
      </div>
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-sm)',
          color: 'var(--void)',
          letterSpacing: '0.08em',
          lineHeight: 1.5,
          opacity: 0.8,
          whiteSpace: 'pre-line',
          marginTop: '16px',
        }}
      >
        {stat.label}
      </div>
    </motion.div>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !active) {
          setActive(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [active]);

  return (
    <section
      id="stats"
      ref={sectionRef}
      style={{
        background: 'var(--acid)',
        borderTop: '4px solid var(--void)',
        borderBottom: '4px solid var(--void)',
        position: 'relative',
        zIndex: 1,
      }}
      aria-label="Studio statistics"
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
        className="stats-grid"
      >
        {stats.map((stat, i) => (
          <StatBlock key={i} stat={stat} index={i} active={active} />
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .stat-block {
            border-right: none !important;
            border-bottom: 4px solid var(--void);
            min-height: 160px !important;
            flex: 1 1 50% !important;
          }
          .stat-block:nth-child(odd) {
            border-right: 4px solid var(--void) !important;
          }
          .stat-block:last-child {
            border-bottom: none !important;
          }
        }
      `}</style>
    </section>
  );
}
