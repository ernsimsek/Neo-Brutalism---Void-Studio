import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [btnHovered, setBtnHovered] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      style={{
        background: 'var(--void)',
        borderTop: '4px solid var(--concrete)',
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden',
      }}
      aria-label="Contact VOID STUDIO"
    >
      {/* Main CTA Block */}
      <div
        style={{
          padding: 'var(--section-py) var(--container-px)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(32px, 5vw, 80px)',
          alignItems: 'center',
          minHeight: '80vh',
        }}
        className="contact-grid"
      >
        {/* Left — CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
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
            LET'S WORK
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 6vw, 7rem)',
              fontWeight: 900,
              color: 'var(--paper)',
              lineHeight: 1.0,
              letterSpacing: '-0.04em',
              marginBottom: '48px',
            }}
          >
            READY TO BUILD<br />
            SOMETHING<br />
            <span style={{ color: 'var(--acid)' }}>UNFORGETTABLE?</span>
          </h2>

          {/* CTA Button */}
          <a
            href="mailto:hello@voidstudio.com"
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
            style={{
              display: 'inline-block',
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
              fontWeight: 700,
              color: 'var(--void)',
              background: 'var(--acid)',
              border: '4px solid var(--void)',
              boxShadow: btnHovered
                ? '12px 12px 0px var(--void)'
                : '8px 8px 0px var(--void)',
              padding: 'clamp(14px, 2vw, 20px) clamp(24px, 3vw, 40px)',
              letterSpacing: '0.1em',
              transform: btnHovered ? 'translate(-4px, -4px)' : 'translate(0, 0)',
              transition: 'transform 80ms ease, box-shadow 80ms ease',
              textDecoration: 'none',
              marginBottom: '24px',
              whiteSpace: 'nowrap',
            }}
            aria-label="Start a project — email hello@voidstudio.com"
          >
            START A PROJECT →
          </a>

          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-sm)',
              color: 'var(--paper)',
              opacity: 0.5,
              letterSpacing: '0.05em',
              display: 'block',
              marginTop: '16px',
            }}
          >
            hello@voidstudio.com
          </div>

          {/* Availability badge */}
          <div
            style={{
              marginTop: '48px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <div
              style={{
                width: '10px',
                height: '10px',
                background: 'var(--acid)',
                borderRadius: '0',
                animation: 'blink 2s step-end infinite',
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                color: 'var(--paper)',
                opacity: 0.6,
                letterSpacing: '0.1em',
              }}
            >
              ACCEPTING NEW PROJECTS — Q1 2026
            </span>
          </div>
        </motion.div>

        {/* Right — Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {submitted ? (
            <div
              style={{
                border: '4px solid var(--acid)',
                padding: '48px',
                background: 'var(--concrete)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  fontWeight: 900,
                  color: 'var(--acid)',
                  letterSpacing: '-0.03em',
                  marginBottom: '16px',
                }}
              >
                MESSAGE<br />RECEIVED.
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-sm)',
                  color: 'var(--paper)',
                  opacity: 0.7,
                  lineHeight: 1.6,
                }}
              >
                We respond within 24 hours. If we don't, something is wrong.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                border: '2px solid var(--concrete)',
                padding: 'clamp(24px, 3vw, 48px)',
                background: 'var(--concrete)',
              }}
              noValidate
            >
              <div style={{ borderBottom: '2px solid rgba(255,255,255,0.1)', paddingBottom: '16px' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-xs)',
                    color: 'var(--paper)',
                    opacity: 0.4,
                    letterSpacing: '0.1em',
                    marginBottom: '24px',
                  }}
                >
                  // INTAKE FORM
                </div>
              </div>

              <div>
                <label
                  htmlFor="name"
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-xs)',
                    color: 'var(--acid)',
                    letterSpacing: '0.1em',
                    marginBottom: '8px',
                    opacity: 0.8,
                  }}
                >
                  NAME
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  required
                  style={{
                    width: '100%',
                    background: 'var(--void)',
                    border: '2px solid rgba(255,255,255,0.15)',
                    borderRadius: 0,
                    color: 'var(--paper)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-sm)',
                    padding: '12px 16px',
                    outline: 'none',
                    cursor: 'none',
                  }}
                  className="form-input"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-xs)',
                    color: 'var(--acid)',
                    letterSpacing: '0.1em',
                    marginBottom: '8px',
                    opacity: 0.8,
                  }}
                >
                  EMAIL
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  required
                  style={{
                    width: '100%',
                    background: 'var(--void)',
                    border: '2px solid rgba(255,255,255,0.15)',
                    borderRadius: 0,
                    color: 'var(--paper)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-sm)',
                    padding: '12px 16px',
                    outline: 'none',
                    cursor: 'none',
                  }}
                  className="form-input"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-xs)',
                    color: 'var(--acid)',
                    letterSpacing: '0.1em',
                    marginBottom: '8px',
                    opacity: 0.8,
                  }}
                >
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us what's broken"
                  required
                  rows={5}
                  style={{
                    width: '100%',
                    background: 'var(--void)',
                    border: '2px solid rgba(255,255,255,0.15)',
                    borderRadius: 0,
                    color: 'var(--paper)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-sm)',
                    padding: '12px 16px',
                    outline: 'none',
                    resize: 'vertical',
                    cursor: 'none',
                  }}
                  className="form-input"
                />
              </div>

              <button
                type="submit"
                style={{
                  background: 'var(--acid)',
                  border: '4px solid var(--void)',
                  boxShadow: '4px 4px 0px var(--void)',
                  color: 'var(--void)',
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-base)',
                  fontWeight: 700,
                  padding: '16px 24px',
                  cursor: 'none',
                  letterSpacing: '0.1em',
                  transition: 'transform 80ms ease, box-shadow 80ms ease',
                  alignSelf: 'flex-start',
                }}
                className="submit-btn"
              >
                SEND MESSAGE →
              </button>
            </form>
          )}
        </motion.div>
      </div>

      {/* Footer Strip */}
      <footer
        style={{
          borderTop: '4px solid var(--concrete)',
          padding: '24px var(--container-px)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          background: 'var(--void)',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-xs)',
            color: 'var(--paper)',
            opacity: 0.5,
            letterSpacing: '0.08em',
          }}
        >
          VOID STUDIO © 2025
        </div>

        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-xs)',
            color: 'var(--paper)',
            opacity: 0.4,
            letterSpacing: '0.08em',
          }}
        >
          NYC / ISTANBUL / BERLIN
        </div>

        <div
          style={{
            display: 'flex',
            gap: '20px',
          }}
        >
          {['IG', 'TW', 'LI', 'DRB'].map((social) => (
            <a
              key={social}
              href="#"
              aria-label={social}
              onClick={(e) => e.preventDefault()}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-xs)',
                fontWeight: 700,
                color: 'var(--paper)',
                opacity: 0.5,
                letterSpacing: '0.1em',
                textDecoration: 'none',
                transition: 'opacity 0ms, color 0ms',
              }}
              className="social-link"
            >
              [{social}]
            </a>
          ))}
        </div>
      </footer>

      <style>{`
        .form-input:focus {
          border-color: var(--acid) !important;
          outline: none !important;
        }
        .form-input::placeholder {
          color: rgba(240,235,225,0.25);
        }
        .submit-btn:hover {
          transform: translate(-2px, -2px);
          box-shadow: 6px 6px 0px var(--void) !important;
        }
        .social-link:hover {
          opacity: 1 !important;
          color: var(--acid) !important;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
