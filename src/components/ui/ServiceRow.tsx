import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import type { Service } from '../../data/services';

interface ServiceRowProps {
  service: Service;
  index?: number;
  open: boolean;
  onToggle: () => void;
}

export default function ServiceRow({ service, open, onToggle }: ServiceRowProps) {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      style={{
        borderBottom: '4px solid var(--chalk)',
        borderLeft: open ? '4px solid var(--blood)' : '4px solid transparent',
        transition: 'border-left-color 150ms ease',
      }}
    >
      {/* Header Row */}
      <button
        onClick={onToggle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 'clamp(16px, 2vw, 28px) clamp(16px, 3vw, 40px)',
          background: hovered ? 'var(--concrete)' : 'transparent',
          border: 'none',
          cursor: 'none',
          textAlign: 'left',
          transition: 'background 0ms',
          gap: '16px',
        }}
        aria-expanded={open}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(16px, 3vw, 48px)', flex: 1 }}>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-sm)',
              color: 'var(--acid)',
              opacity: 0.7,
              letterSpacing: '0.1em',
              minWidth: '2rem',
            }}
          >
            {service.number}
          </span>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.1rem, 2.5vw, 2.5rem)',
              fontWeight: 800,
              color: hovered ? 'var(--acid)' : 'var(--paper)',
              letterSpacing: '-0.02em',
              lineHeight: 1,
              transition: 'color 0ms',
            }}
          >
            {service.title.toUpperCase()}
          </span>
        </div>
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.2rem, 2vw, 1.75rem)',
            fontWeight: 800,
            color: open ? 'var(--acid)' : 'var(--paper)',
            transition: 'color 150ms, transform 150ms',
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
            lineHeight: 1,
            flexShrink: 0,
          }}
        >
          +
        </div>
      </button>

      {/* Expanded Content */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div
              style={{
                padding: 'clamp(16px, 2vw, 24px) clamp(16px, 3vw, 40px)',
                paddingTop: 0,
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: '32px',
                alignItems: 'start',
              }}
              className="service-content"
            >
              <div style={{ paddingLeft: 'clamp(2rem, 7vw, 6rem)' }}>
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-base)',
                    color: 'var(--paper)',
                    opacity: 0.8,
                    lineHeight: 1.7,
                    marginBottom: '16px',
                  }}
                >
                  {service.description}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-sm)',
                    color: 'var(--paper)',
                    opacity: 0.5,
                    lineHeight: 1.6,
                  }}
                >
                  {service.details}
                </p>
              </div>

              {/* Related project thumbnail */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/work/${service.relatedSlug}`);
                }}
                style={{
                  background: 'var(--concrete)',
                  border: '2px solid var(--chalk)',
                  padding: '16px',
                  cursor: 'none',
                  textAlign: 'left',
                  minWidth: '140px',
                  boxShadow: '4px 4px 0px var(--chalk)',
                  transition: 'transform 80ms ease, box-shadow 80ms ease',
                }}
                className="related-thumb"
                aria-label={`View ${service.relatedProject} case study`}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-xs)',
                    color: 'var(--paper)',
                    opacity: 0.4,
                    letterSpacing: '0.1em',
                    marginBottom: '8px',
                  }}
                >
                  RELATED
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.1rem',
                    fontWeight: 800,
                    color: 'var(--acid)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {service.relatedProject}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-xs)',
                    color: 'var(--paper)',
                    opacity: 0.5,
                    marginTop: '4px',
                  }}
                >
                  VIEW →
                </div>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .related-thumb:hover {
          transform: translate(-2px, -2px);
          box-shadow: 6px 6px 0px var(--chalk) !important;
        }
        @media (max-width: 768px) {
          .service-content {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
