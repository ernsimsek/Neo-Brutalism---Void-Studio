import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import WorkCard from '../ui/WorkCard';
import { projects } from '../../data/projects';

export default function Work() {
  const navigate = useNavigate();

  return (
    <section
      id="work"
      style={{
        background: 'var(--void)',
        padding: 'var(--section-py) var(--container-px)',
        position: 'relative',
        zIndex: 1,
      }}
      aria-label="Selected work"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '48px',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
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
              SELECTED<br />WORK.
            </h2>
            <button
              onClick={() => navigate('/work')}
              style={{
                background: 'none',
                border: 'var(--border)',
                color: 'var(--paper)',
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-sm)',
                fontWeight: 700,
                padding: '10px 20px',
                cursor: 'none',
                letterSpacing: '0.1em',
                alignSelf: 'flex-start',
                marginTop: '8px',
                transition: 'background 0ms, color 0ms',
              }}
              className="view-all-btn"
            >
              → VIEW ALL
            </button>
          </div>

          <div
            style={{
              borderTop: '2px solid var(--paper)',
              marginTop: '16px',
              paddingTop: '8px',
              display: 'flex',
              gap: '16px',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                color: 'var(--paper)',
                opacity: 0.4,
                letterSpacing: '0.1em',
              }}
            >
              2019–2025
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                color: 'var(--acid)',
                opacity: 0.7,
                letterSpacing: '0.1em',
              }}
            >
              06 PROJECTS FEATURED
            </span>
          </div>
        </div>
      </motion.div>

      {/* Asymmetric Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'auto',
          gap: '16px',
        }}
        className="work-grid"
      >
        {/* [01] LARGE — spans 2 cols, 2 rows */}
        <motion.div
          style={{ gridColumn: '1 / 3', gridRow: '1 / 3' }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <WorkCard project={projects[0]} style={{ height: '100%' }} />
        </motion.div>

        {/* [02] Medium */}
        <motion.div
          style={{ gridColumn: '3 / 4', gridRow: '1 / 2' }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <WorkCard project={projects[1]} style={{ height: '100%' }} />
        </motion.div>

        {/* [03] Small */}
        <motion.div
          style={{ gridColumn: '3 / 4', gridRow: '2 / 3' }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <WorkCard project={projects[2]} style={{ height: '100%' }} />
        </motion.div>

        {/* [04] Small */}
        <motion.div
          style={{ gridColumn: '1 / 2', gridRow: '3 / 4' }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <WorkCard project={projects[3]} style={{ height: '100%' }} />
        </motion.div>

        {/* [05] LARGE — spans 2 cols */}
        <motion.div
          style={{ gridColumn: '2 / 4', gridRow: '3 / 4' }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <WorkCard project={projects[4]} style={{ height: '100%' }} />
        </motion.div>

        {/* [06] Full width */}
        <motion.div
          style={{ gridColumn: '1 / 4', gridRow: '4 / 5' }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <WorkCard project={projects[5]} />
        </motion.div>
      </div>

      <style>{`
        .view-all-btn:hover {
          background: var(--acid) !important;
          color: var(--void) !important;
        }
        @media (max-width: 768px) {
          .work-grid {
            grid-template-columns: 1fr !important;
          }
          .work-grid > div {
            grid-column: 1 / 2 !important;
            grid-row: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
