import { motion } from 'framer-motion';
import ServiceRow from '../ui/ServiceRow';
import { services } from '../../data/services';

export default function Services() {
  return (
    <section
      id="services"
      style={{
        background: 'var(--void)',
        padding: 'var(--section-py) 0',
        position: 'relative',
        zIndex: 1,
      }}
      aria-label="Services"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.4 }}
        style={{
          padding: '0 var(--container-px)',
          marginBottom: '56px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 5vw, 5rem)',
            fontWeight: 900,
            color: 'var(--paper)',
            lineHeight: 1,
            letterSpacing: '-0.03em',
          }}
        >
          WHAT WE<br />DO.
        </h2>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-sm)',
            color: 'var(--paper)',
            opacity: 0.4,
            maxWidth: '280px',
            lineHeight: 1.6,
          }}
        >
          Six disciplines. One studio. No middlemen, no freelancers, no excuses.
        </div>
      </motion.div>

      {/* Services list */}
      <div style={{ borderTop: '4px solid var(--chalk)' }}>
        {services.map((service, i) => (
          <motion.div
            key={service.number}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
          >
            <ServiceRow service={service} index={i} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
