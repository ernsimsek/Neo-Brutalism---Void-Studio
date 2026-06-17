import { motion } from 'framer-motion';
import TeamCard from '../ui/TeamCard';
import { team } from '../../data/team';

export default function About() {
  return (
    <section
      id="about"
      style={{
        background: 'var(--void)',
        padding: 'var(--section-py) var(--container-px)',
        borderTop: '4px solid var(--concrete)',
        position: 'relative',
        zIndex: 1,
      }}
      aria-label="About VOID STUDIO"
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '3fr 2fr',
          gap: 'clamp(32px, 5vw, 80px)',
          alignItems: 'start',
        }}
        className="about-grid"
      >
        {/* Left — Manifesto Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          {/* Section label */}
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
            THE STUDIO
          </div>

          {/* Manifesto headline */}
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 3.5vw, 4rem)',
              fontWeight: 900,
              color: 'var(--paper)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              marginBottom: '40px',
            }}
          >
            VOID STUDIO IS A DESIGN FIRM<br />
            FOR PEOPLE WHO ARE DONE<br />
            <span style={{ color: 'var(--acid)' }}>WITH PLAYING IT SAFE.</span>
          </h2>

          {/* Body copy */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              maxWidth: '640px',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-base)',
                color: 'var(--paper)',
                opacity: 0.8,
                lineHeight: 1.7,
              }}
            >
              Founded in 2019 by two people who kept getting hired to fix other agencies' mistakes. We got tired of cleaning up. We started building clean from the start.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-sm)',
                color: 'var(--paper)',
                opacity: 0.6,
                lineHeight: 1.7,
              }}
            >
              We are based in New York. We work globally. We take on 8 clients per year, maximum. Not because we're precious — because that's what it takes to do it right.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-sm)',
                color: 'var(--paper)',
                opacity: 0.6,
                lineHeight: 1.7,
              }}
            >
              We don't have a "design philosophy." We have a standard. If it makes you comfortable, we haven't gone far enough.
            </p>

            {/* Pull quote */}
            <blockquote
              style={{
                borderLeft: '4px solid var(--acid)',
                paddingLeft: '24px',
                margin: '8px 0',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                  fontWeight: 900,
                  fontStyle: 'italic',
                  color: 'var(--paper)',
                  lineHeight: 1.3,
                  letterSpacing: '-0.02em',
                }}
              >
                "We don't decorate. We detonate."
              </p>
            </blockquote>
          </div>

          {/* Offices */}
          <div
            style={{
              marginTop: '48px',
              display: 'flex',
              gap: '40px',
              flexWrap: 'wrap',
            }}
          >
            {['NEW YORK', 'ISTANBUL', 'BERLIN'].map((city) => (
              <div key={city}>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--text-xs)',
                    fontWeight: 600,
                    letterSpacing: '0.15em',
                    color: 'var(--acid)',
                    opacity: 0.7,
                    marginBottom: '4px',
                  }}
                >
                  OFFICE
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-base)',
                    color: 'var(--paper)',
                    letterSpacing: '0.05em',
                  }}
                >
                  {city}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — Team Cards */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-xs)',
              fontWeight: 600,
              letterSpacing: '0.15em',
              color: 'var(--paper)',
              opacity: 0.4,
              alignSelf: 'flex-start',
              marginBottom: '8px',
            }}
          >
            THE TEAM
          </div>
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.2 }}
              style={{
                alignSelf: i % 2 === 0 ? 'flex-start' : 'flex-end',
                zIndex: team.length - i,
              }}
            >
              <TeamCard member={member} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
