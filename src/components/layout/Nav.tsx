import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'WORK', href: '#work' },
  { label: 'PROCESS', href: '#process' },
  { label: 'SERVICES', href: '#services' },
  { label: 'ABOUT', href: '#about' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleAnchor = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 clamp(16px, 4vw, 64px)',
          height: '64px',
          backgroundColor: scrolled ? 'rgba(10,10,10,0.97)' : 'transparent',
          borderBottom: scrolled ? '2px solid var(--acid)' : '2px solid transparent',
          transition: 'background-color 300ms ease, border-color 300ms ease',
          backdropFilter: scrolled ? 'blur(8px)' : 'none',
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.1rem',
            fontWeight: 800,
            color: 'var(--acid)',
            letterSpacing: '0.1em',
            textDecoration: 'none',
          }}
          aria-label="VOID STUDIO — Home"
        >
          VOID<span style={{ color: 'var(--paper)' }}>STUDIO</span>
        </Link>

        {/* Desktop Nav */}
        <div
          style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleAnchor(link.href)}
              style={{
                background: 'none',
                border: 'none',
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-sm)',
                fontWeight: 600,
                color: 'var(--paper)',
                letterSpacing: '0.1em',
                cursor: 'none',
                padding: '4px 0',
                position: 'relative',
              }}
              className="nav-link-btn"
            >
              {link.label}
            </button>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleAnchor('#contact'); }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-sm)',
              fontWeight: 700,
              color: 'var(--void)',
              background: 'var(--acid)',
              border: '2px solid var(--void)',
              boxShadow: '4px 4px 0px var(--void)',
              padding: '8px 16px',
              letterSpacing: '0.1em',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'transform 80ms ease, box-shadow 80ms ease',
            }}
            className="nav-cta"
          >
            START PROJECT →
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'none',
            color: 'var(--paper)',
            flexDirection: 'column',
            gap: '5px',
            padding: '4px',
          }}
          className="mobile-menu-btn"
        >
          <span
            style={{
              display: 'block',
              width: '28px',
              height: '2px',
              background: mobileOpen ? 'var(--acid)' : 'var(--paper)',
              transform: mobileOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
              transition: 'transform 200ms ease, background 200ms ease',
            }}
          />
          <span
            style={{
              display: 'block',
              width: '28px',
              height: '2px',
              background: mobileOpen ? 'var(--acid)' : 'var(--paper)',
              opacity: mobileOpen ? 0 : 1,
              transition: 'opacity 200ms ease',
            }}
          />
          <span
            style={{
              display: 'block',
              width: '28px',
              height: '2px',
              background: mobileOpen ? 'var(--acid)' : 'var(--paper)',
              transform: mobileOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
              transition: 'transform 200ms ease, background 200ms ease',
            }}
          />
        </button>
      </nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'var(--void)',
              zIndex: 999,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              padding: 'clamp(24px, 8vw, 64px)',
              gap: '2rem',
            }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.label}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => handleAnchor(link.href)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 8vw, 4rem)',
                  fontWeight: 800,
                  color: 'var(--paper)',
                  cursor: 'none',
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                }}
                whileHover={{ color: '#C8FF00', x: 8 }}
              >
                {link.label}
              </motion.button>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                color: 'var(--paper)',
                opacity: 0.4,
                marginTop: '2rem',
              }}
            >
              VOID STUDIO // NYC / ISTANBUL / BERLIN
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        .nav-cta:hover {
          transform: translate(-2px, -2px);
          box-shadow: 6px 6px 0px var(--void) !important;
        }
        .nav-link-btn::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--acid);
          transition: width 150ms ease;
        }
        .nav-link-btn:hover::after {
          width: 100%;
        }
      `}</style>
    </>
  );
}
