import { motion } from 'framer-motion';
import Nav from '../components/layout/Nav';
import WorkCard from '../components/ui/WorkCard';
import { projects } from '../data/projects';
import GlitchGrid from '../components/ui/GlitchGrid';

export default function WorkAll() {
  return (
    <main style={{ background: 'var(--void)', minHeight: '100vh' }}>
      <Nav />
      <GlitchGrid opacity={0.025} density={60} />

      {/* Header */}
      <section
        style={{
          paddingTop: '120px',
          padding: '120px var(--container-px) clamp(32px, 4vw, 64px)',
          borderBottom: '4px solid var(--concrete)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              color: 'var(--acid)',
              letterSpacing: '0.15em',
              marginBottom: '24px',
              opacity: 0.8,
            }}
          >
            ALL WORK
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3rem, 8vw, 10rem)',
              fontWeight: 900,
              color: 'var(--paper)',
              lineHeight: 0.95,
              letterSpacing: '-0.04em',
              marginBottom: '32px',
            }}
          >
            SELECTED<br />
            <span style={{ color: 'var(--acid)' }}>WORK.</span>
          </h1>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-sm)',
              color: 'var(--paper)',
              opacity: 0.4,
              letterSpacing: '0.05em',
            }}
          >
            2019–2025 // {projects.length} PROJECTS
          </div>
        </motion.div>
      </section>

      {/* Grid */}
      <section
        style={{
          padding: 'var(--section-py) var(--container-px)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
            gap: '16px',
          }}
          className="all-work-grid"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
            >
              <WorkCard project={project} />
            </motion.div>
          ))}
        </div>

        <style>{`
          @media (max-width: 640px) {
            .all-work-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>
    </main>
  );
}
