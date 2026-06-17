import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'LISTEN',
    lines: ['We shut up', 'and actually', 'listen.'],
    detail:
      "Most agencies start talking immediately. We start by asking one question and then being quiet until the answer is finished. You'd be surprised what you learn.",
  },
  {
    number: '02',
    title: 'DIAGNOSE',
    lines: ['We find the', 'real problem.', 'Not the one', 'you described.'],
    detail:
      "The brief is a symptom. We diagnose the actual condition. Sometimes it's brand. Sometimes it's positioning. Often it's something nobody wanted to say out loud.",
  },
  {
    number: '03',
    title: 'DETONATE',
    lines: ['We build the', 'thing that', 'solves it.', 'Brutally.'],
    detail:
      "No rounds of beige. No 'let's see three directions.' One direction, fully executed, with the receipts to prove why. Take it or leave it.",
  },
  {
    number: '04',
    title: 'SHIP',
    lines: ['We launch hard,', 'measure harder,', 'and never say', '"it\'s done."'],
    detail:
      "Launch is day one, not the finish line. We stay through implementation, measure what matters, and iterate until the numbers agree with the design.",
  },
];

export default function Process() {
  const outerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const onScroll = () => {
      const outer = outerRef.current;
      if (!outer) return;

      const rect = outer.getBoundingClientRect();
      const totalScrollable = outer.offsetHeight - window.innerHeight;
      const scrolled = Math.max(0, -rect.top);
      const p = Math.min(1, scrolled / totalScrollable);

      setProgress(p);
      setActiveStep(Math.min(steps.length - 1, Math.floor(p * steps.length)));

      if (trackRef.current) {
        const maxTranslate = (steps.length - 1) * window.innerWidth;
        trackRef.current.style.transform = `translateX(-${p * maxTranslate}px)`;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isMobile]);

  if (isMobile) {
    return (
      <section
        id="process"
        style={{
          background: 'var(--void)',
          padding: 'var(--section-py) var(--container-px)',
          borderTop: '4px solid var(--concrete)',
        }}
        aria-label="Our process"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '48px' }}
        >
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-xs)',
              fontWeight: 600,
              letterSpacing: '0.15em',
              color: 'var(--acid)',
              opacity: 0.8,
              marginBottom: '16px',
            }}
          >
            HOW WE WORK
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 8vw, 4rem)',
              fontWeight: 900,
              color: 'var(--paper)',
              letterSpacing: '-0.03em',
              lineHeight: 1,
            }}
          >
            THE PROCESS.
          </h2>
        </motion.div>

        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.08 }}
            style={{
              borderTop: '2px solid var(--concrete)',
              padding: '32px 0',
              display: 'grid',
              gridTemplateColumns: '64px 1fr',
              gap: '24px',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2.5rem',
                fontWeight: 900,
                color: 'var(--acid)',
                lineHeight: 1,
              }}
            >
              {step.number}
            </div>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.5rem',
                  fontWeight: 800,
                  color: 'var(--paper)',
                  marginBottom: '12px',
                  letterSpacing: '-0.02em',
                }}
              >
                {step.title}
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-sm)',
                  color: 'var(--paper)',
                  opacity: 0.65,
                  lineHeight: 1.65,
                }}
              >
                {step.detail}
              </p>
            </div>
          </motion.div>
        ))}
      </section>
    );
  }

  // Desktop: horizontal scroll-driven
  return (
    <div
      ref={outerRef}
      id="process"
      style={{
        position: 'relative',
        height: `${(steps.length + 1) * 100}vh`,
        borderTop: '4px solid var(--concrete)',
      }}
      aria-label="Our process"
    >
      {/* Sticky viewport */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflow: 'hidden',
          background: 'var(--void)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Top label bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '20px var(--container-px)',
            borderBottom: '2px solid var(--concrete)',
            flexShrink: 0,
            background: 'var(--void)',
            zIndex: 2,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-xs)',
                fontWeight: 600,
                letterSpacing: '0.15em',
                color: 'var(--paper)',
                opacity: 0.5,
              }}
            >
              HOW WE WORK
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                color: 'var(--acid)',
                opacity: 0.7,
              }}
            >
              STEP {String(activeStep + 1).padStart(2, '0')} / {String(steps.length).padStart(2, '0')}
            </span>
          </div>

          {/* Progress bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <div
              style={{
                width: '180px',
                height: '2px',
                background: 'var(--concrete)',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: '100%',
                  width: `${progress * 100}%`,
                  background: 'var(--acid)',
                  transition: 'width 30ms linear',
                }}
              />
            </div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                color: 'var(--paper)',
                opacity: 0.4,
                minWidth: '30px',
              }}
            >
              {Math.round(progress * 100)}%
            </span>
          </div>
        </div>

        {/* Horizontal panel track */}
        <div
          style={{
            flex: 1,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            ref={trackRef}
            style={{
              display: 'flex',
              height: '100%',
              willChange: 'transform',
            }}
          >
            {steps.map((step, i) => (
              <ProcessPanel
                key={step.number}
                step={step}
                index={i}
                activeStep={activeStep}
                isLast={i === steps.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProcessPanel({
  step,
  index,
  activeStep,
  isLast,
}: {
  step: (typeof steps)[0];
  index: number;
  activeStep: number;
  isLast: boolean;
}) {
  const isActive = activeStep === index;

  return (
    <div
      style={{
        minWidth: '100vw',
        height: '100%',
        background: isActive ? 'var(--concrete)' : '#161616',
        borderRight: isLast ? 'none' : '2px solid var(--concrete)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 'clamp(32px, 5vw, 100px)',
        overflow: 'hidden',
        transition: 'background 300ms ease',
      }}
    >
      {/* Background watermark number */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: '-0.08em',
          bottom: '-0.12em',
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(10rem, 22vw, 26rem)',
          fontWeight: 900,
          color: 'var(--chalk)',
          opacity: 0.03,
          lineHeight: 1,
          userSelect: 'none',
          letterSpacing: '-0.05em',
          pointerEvents: 'none',
        }}
      >
        {step.number}
      </div>

      {/* Step number + title label */}
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-sm)',
          color: isActive ? 'var(--acid)' : 'rgba(200,255,0,0.4)',
          letterSpacing: '0.15em',
          marginBottom: '32px',
          transition: 'color 300ms',
        }}
      >
        {step.number} / {step.title}
      </div>

      {/* Main headline lines */}
      <div style={{ marginBottom: '40px' }}>
        {step.lines.map((line, i) => (
          <div
            key={i}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 6vw, 7rem)',
              fontWeight: 900,
              lineHeight: 0.98,
              color: 'var(--paper)',
              letterSpacing: '-0.03em',
            }}
          >
            {line}
          </div>
        ))}
      </div>

      {/* Detail text */}
      <div
        style={{
          maxWidth: '520px',
          borderLeft: '3px solid var(--acid)',
          paddingLeft: '24px',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(0.8rem, 1vw, 1rem)',
            color: 'var(--paper)',
            opacity: 0.65,
            lineHeight: 1.75,
          }}
        >
          {step.detail}
        </p>
      </div>

      {/* Step dots */}
      <div
        style={{
          position: 'absolute',
          bottom: '40px',
          left: 'clamp(32px, 5vw, 100px)',
          display: 'flex',
          gap: '8px',
          alignItems: 'center',
        }}
      >
        {steps.map((_, i) => (
          <div
            key={i}
            style={{
              width: i === index ? '32px' : '8px',
              height: '4px',
              background: i === index ? 'var(--acid)' : 'rgba(255,255,255,0.15)',
              transition: 'width 200ms ease, background 200ms ease',
            }}
          />
        ))}
      </div>
    </div>
  );
}
