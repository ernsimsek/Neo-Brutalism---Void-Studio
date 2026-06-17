import { useState } from 'react';
import { motion } from 'framer-motion';
import { clients } from '../../data/team';

export default function Clients() {
  return (
    <section
      id="clients"
      style={{
        background: 'var(--void)',
        padding: 'var(--section-py) var(--container-px)',
        borderTop: '2px solid var(--concrete)',
        position: 'relative',
        zIndex: 1,
      }}
      aria-label="Our clients"
    >
      {/* Label */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--text-xs)',
          fontWeight: 600,
          letterSpacing: '0.15em',
          color: 'var(--paper)',
          opacity: 0.4,
          marginBottom: '40px',
        }}
      >
        WE'VE WORKED WITH
      </motion.div>

      {/* Client Grid */}
      <div className="clients-grid">
        {clients.map((name, i) => (
          <ClientCell key={i} name={name} index={i} />
        ))}
      </div>

      <style>{`
        .clients-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          border-top: 1px solid rgba(255,255,255,0.15);
          border-left: 1px solid rgba(255,255,255,0.15);
        }
        @media (max-width: 1024px) {
          .clients-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        @media (max-width: 640px) {
          .clients-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </section>
  );
}

function ClientCell({ name, index }: { name: string; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: (index % 6) * 0.05, duration: 0.3 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: 'clamp(16px, 2vw, 28px) clamp(8px, 1.5vw, 20px)',
        borderRight: '1px solid rgba(255,255,255,0.15)',
        borderBottom: '1px solid rgba(255,255,255,0.15)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: hovered ? 'var(--acid)' : 'transparent',
        transition: 'background 0ms',
        cursor: 'default',
        minHeight: '72px',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'clamp(0.6rem, 1vw, 0.875rem)',
          color: hovered ? 'var(--void)' : 'var(--paper)',
          letterSpacing: '0.08em',
          textAlign: 'center',
          transition: 'color 0ms',
          userSelect: 'none',
        }}
      >
        {name}
      </span>
    </motion.div>
  );
}
