import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import Nav from '../components/layout/Nav';
import GlitchGrid from '../components/ui/GlitchGrid';

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  if (!project) {
    return (
      <div
        style={{
          minHeight: '100vh',
          background: 'var(--void)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '24px',
          padding: '32px',
        }}
      >
        <Nav />
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 6vw, 6rem)',
            fontWeight: 900,
            color: 'var(--paper)',
            lineHeight: 1,
            letterSpacing: '-0.04em',
            textAlign: 'center',
          }}
        >
          THIS PAGE DOESN'T EXIST.<br />
          <span style={{ color: 'var(--acid)' }}>MOST THINGS DON'T.</span>
        </div>
        <Link
          to="/"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1rem',
            fontWeight: 700,
            color: 'var(--void)',
            background: 'var(--acid)',
            border: '4px solid var(--void)',
            boxShadow: '6px 6px 0px var(--void)',
            padding: '14px 28px',
            letterSpacing: '0.1em',
            textDecoration: 'none',
          }}
        >
          ← GO HOME
        </Link>
      </div>
    );
  }

  return (
    <main style={{ background: 'var(--void)', minHeight: '100vh' }}>
      <Nav />
      <GlitchGrid opacity={0.025} density={60} />

      {/* Hero */}
      <section
        style={{
          minHeight: '90vh',
          background: 'var(--void)',
          borderBottom: '4px solid var(--chalk)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: 'clamp(80px, 10vw, 140px) var(--container-px) clamp(32px, 4vw, 64px)',
          position: 'relative',
          overflow: 'hidden',
        }}
        aria-label={`${project.title} hero`}
      >
        {/* Background pattern */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, ${project.color}08 40px, ${project.color}08 41px)`,
            zIndex: 0,
          }}
        />

        {/* Large BG title */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            right: '-0.05em',
            bottom: '-0.15em',
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(6rem, 18vw, 22rem)',
            fontWeight: 900,
            color: project.color,
            opacity: 0.06,
            lineHeight: 1,
            userSelect: 'none',
            letterSpacing: '-0.05em',
            zIndex: 0,
          }}
        >
          {project.title}
        </div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              color: 'var(--acid)',
              letterSpacing: '0.15em',
              marginBottom: '24px',
              opacity: 0.8,
            }}
          >
            PROJECT {project.number} / {projects.length}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(4rem, 10vw, 12rem)',
              fontWeight: 900,
              color: 'var(--paper)',
              lineHeight: 0.95,
              letterSpacing: '-0.04em',
              marginBottom: '24px',
            }}
          >
            {project.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(0.875rem, 1.5vw, 1.1rem)',
              color: 'var(--paper)',
              opacity: 0.7,
              maxWidth: '600px',
              lineHeight: 1.6,
            }}
          >
            {project.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Meta Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        style={{
          background: 'var(--acid)',
          borderBottom: '4px solid var(--void)',
          padding: 'clamp(20px, 3vw, 32px) var(--container-px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px',
        }}
        className="meta-bar"
        aria-label="Project metadata"
      >
        {[
          { label: 'CLIENT', value: project.client },
          { label: 'YEAR', value: project.year },
          { label: 'CATEGORY', value: project.tags.join(', ') },
          { label: 'ROLE', value: project.role },
        ].map((item) => (
          <div key={item.label}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                color: 'var(--void)',
                opacity: 0.5,
                letterSpacing: '0.1em',
                marginBottom: '6px',
              }}
            >
              {item.label}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-sm)',
                color: 'var(--void)',
                fontWeight: 500,
                lineHeight: 1.4,
              }}
            >
              {item.value}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Challenge */}
      <section
        style={{
          padding: 'var(--section-py) var(--container-px)',
          borderBottom: '2px solid var(--concrete)',
        }}
      >
        <div style={{ maxWidth: '720px' }}>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-xs)',
              fontWeight: 600,
              letterSpacing: '0.15em',
              color: 'var(--acid)',
              opacity: 0.8,
              marginBottom: '32px',
            }}
          >
            THE CHALLENGE
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
              color: 'var(--paper)',
              opacity: 0.85,
              lineHeight: 1.7,
            }}
          >
            {project.challenge}
          </motion.p>
        </div>
      </section>

      {/* Process Images — Asymmetric grid */}
      <section
        style={{
          padding: 'var(--section-py) var(--container-px)',
          borderBottom: '2px solid var(--concrete)',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-xs)',
            fontWeight: 600,
            letterSpacing: '0.15em',
            color: 'var(--acid)',
            opacity: 0.8,
            marginBottom: '32px',
          }}
        >
          THE WORK
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gridTemplateRows: 'auto auto',
            gap: '16px',
          }}
          className="process-grid"
        >
          {[
            { col: '1 / 2', row: '1 / 3', height: '500px' },
            { col: '2 / 3', row: '1 / 2', height: '240px' },
            { col: '2 / 3', row: '2 / 3', height: '240px' },
          ].map((layout, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              style={{
                gridColumn: layout.col,
                gridRow: layout.row,
                background: 'var(--concrete)',
                border: '2px solid var(--concrete)',
                minHeight: layout.height,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Visual placeholder */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `repeating-linear-gradient(${i * 30}deg, transparent, transparent ${8 + i * 4}px, ${project.color}${i === 0 ? '20' : '10'} ${8 + i * 4}px, ${project.color}${i === 0 ? '20' : '10'} ${9 + i * 4}px)`,
                }}
              />
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.5rem, 4vw, 4rem)',
                  fontWeight: 900,
                  color: project.color,
                  opacity: 0.3,
                  letterSpacing: '-0.05em',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {project.title}
              </div>
              <div
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  right: '16px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-xs)',
                  color: 'var(--paper)',
                  opacity: 0.3,
                  letterSpacing: '0.1em',
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>
            </motion.div>
          ))}
        </div>

        <style>{`
          @media (max-width: 640px) {
            .process-grid {
              grid-template-columns: 1fr !important;
            }
            .process-grid > div {
              grid-column: 1 / 2 !important;
              grid-row: auto !important;
              min-height: 200px !important;
            }
          }
        `}</style>
      </section>

      {/* Outcome */}
      <section
        style={{
          padding: 'var(--section-py) var(--container-px)',
          borderBottom: '4px solid var(--concrete)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(32px, 5vw, 80px)',
          alignItems: 'center',
        }}
        className="outcome-grid"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-xs)',
              fontWeight: 600,
              letterSpacing: '0.15em',
              color: 'var(--acid)',
              opacity: 0.8,
              marginBottom: '32px',
            }}
          >
            THE OUTCOME
          </div>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(0.875rem, 1.2vw, 1rem)',
              color: 'var(--paper)',
              opacity: 0.8,
              lineHeight: 1.7,
              maxWidth: '560px',
            }}
          >
            {project.outcome}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          style={{
            background: project.color === 'var(--chalk)' ? 'var(--concrete)' : 'transparent',
            border: `4px solid ${project.color}`,
            padding: 'clamp(24px, 4vw, 56px)',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(4rem, 8vw, 8rem)',
              fontWeight: 900,
              color: project.color,
              lineHeight: 1,
              letterSpacing: '-0.04em',
            }}
          >
            {project.stat}
          </div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-sm)',
              color: 'var(--paper)',
              opacity: 0.6,
              letterSpacing: '0.1em',
              marginTop: '16px',
            }}
          >
            {project.statLabel}
          </div>
        </motion.div>

        <style>{`
          .outcome-grid {
            @media (max-width: 640px) {
              grid-template-columns: 1fr !important;
            }
          }
          .meta-bar {
            @media (max-width: 640px) {
              grid-template-columns: 1fr 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* Next Project */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        style={{
          padding: 'clamp(32px, 5vw, 80px) var(--container-px)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTop: '2px solid var(--concrete)',
          cursor: 'none',
          flexWrap: 'wrap',
          gap: '24px',
        }}
        onClick={() => navigate(`/work/${nextProject.slug}`)}
        className="next-project"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && navigate(`/work/${nextProject.slug}`)}
        aria-label={`Next project: ${nextProject.title}`}
      >
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-xs)',
            color: 'var(--paper)',
            opacity: 0.4,
            letterSpacing: '0.15em',
          }}
        >
          NEXT PROJECT
        </div>
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 6vw, 6rem)',
            fontWeight: 900,
            color: 'var(--paper)',
            letterSpacing: '-0.04em',
            lineHeight: 1,
          }}
          className="next-title"
        >
          {nextProject.title} →
        </div>

        <style>{`
          .next-project:hover .next-title {
            color: var(--acid);
          }
          .next-project {
            transition: none;
          }
        `}</style>
      </motion.div>
    </main>
  );
}
