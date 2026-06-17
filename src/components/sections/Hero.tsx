import { motion } from 'framer-motion';
import GlitchGrid from '../ui/GlitchGrid';

const words = [
  { text: 'WE BUILD', color: 'var(--paper)' },
  { text: 'THINGS', color: 'var(--acid)', shadow: '8px 8px 0px var(--blood)' },
  { text: 'THAT HURT.', color: 'var(--paper)' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const wordVariants = {
  hidden: {
    y: '110%',
    clipPath: 'inset(0 0 100% 0)',
  },
  visible: {
    y: 0,
    clipPath: 'inset(0 0 0% 0)',
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: 'var(--void)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: 'clamp(16px, 4vw, 64px)',
        paddingTop: '80px',
        overflow: 'hidden',
      }}
      aria-label="Hero section"
    >
      <GlitchGrid opacity={0.03} density={50} />

      {/* Main Headline */}
      <div style={{ position: 'relative', zIndex: 1, marginBottom: 'clamp(32px, 4vw, 64px)' }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ overflow: 'visible' }}
        >
          {words.map((word, i) => (
            <div
              key={i}
              style={{
                overflow: 'hidden',
                lineHeight: 1,
                marginBottom: '0.05em',
              }}
            >
              <motion.div
                variants={wordVariants}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(4rem, 13vw, 15rem)',
                  fontWeight: 900,
                  lineHeight: 0.95,
                  color: word.color,
                  textShadow: word.shadow || 'none',
                  display: 'block',
                  letterSpacing: '-0.03em',
                }}
              >
                {word.text}
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          borderTop: '2px solid rgba(255,255,255,0.15)',
          paddingTop: '24px',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        {/* System Status */}
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-xs)',
            color: 'var(--acid)',
            opacity: 0.8,
            lineHeight: 1.8,
          }}
        >
          <div>SYSTEM: ONLINE</div>
          <div>CLIENTS: 47 // PROJECTS: 183</div>
          <div>STATUS: BUILDING</div>
        </div>

        {/* Right Info */}
        <div style={{ textAlign: 'right' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              color: 'var(--paper)',
              opacity: 0.5,
              letterSpacing: '0.1em',
              marginBottom: '4px',
            }}
          >
            EST. 2019 / NYC
          </div>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-sm)',
              fontWeight: 700,
              color: 'var(--acid)',
              letterSpacing: '0.05em',
            }}
          >
            ★ AWWWARDS WINNER ×3
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          zIndex: 1,
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-xs)',
            color: 'var(--paper)',
            opacity: 0.4,
            letterSpacing: '0.15em',
          }}
        >
          SCROLL ↓
        </motion.div>
      </motion.div>

      {/* Large decorative BG text */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: '-2vw',
          top: '50%',
          transform: 'translateY(-50%)',
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(8rem, 18vw, 20rem)',
          fontWeight: 900,
          color: 'var(--chalk)',
          opacity: 0.02,
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
          zIndex: 0,
          letterSpacing: '-0.05em',
        }}
      >
        VOID
      </div>
    </section>
  );
}
