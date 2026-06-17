import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import CustomCursor from './components/ui/CustomCursor';
import PageTransition from './components/ui/PageTransition';
import Home from './pages/Home';
import WorkAll from './pages/WorkAll';
import CaseStudy from './pages/CaseStudy';
import './styles/globals.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/work"
          element={
            <PageTransition>
              <WorkAll />
            </PageTransition>
          }
        />
        <Route
          path="/work/:slug"
          element={
            <PageTransition>
              <CaseStudy />
            </PageTransition>
          }
        />
        <Route
          path="*"
          element={
            <PageTransition>
              <NotFound />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <HashRouter>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <CustomCursor />
      <ScrollToTop />
      <AnimatedRoutes />
    </HashRouter>
  );
}

function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--void)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(24px, 5vw, 80px)',
        gap: '24px',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-xs)',
          color: 'var(--acid)',
          letterSpacing: '0.15em',
          opacity: 0.7,
        }}
      >
        404 // NOT FOUND
      </div>
      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 6vw, 6rem)',
          fontWeight: 900,
          color: 'var(--paper)',
          lineHeight: 1,
          letterSpacing: '-0.04em',
        }}
      >
        THIS PAGE DOESN'T EXIST.<br />
        <span style={{ color: 'var(--acid)' }}>MOST THINGS DON'T.</span>
      </h1>
      <a
        href="/"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1rem',
          fontWeight: 700,
          color: 'var(--void)',
          background: 'var(--acid)',
          border: '4px solid var(--void)',
          boxShadow: '8px 8px 0px var(--void)',
          padding: '16px 32px',
          letterSpacing: '0.1em',
          textDecoration: 'none',
          display: 'inline-block',
          transition: 'transform 80ms ease, box-shadow 80ms ease',
        }}
      >
        ← BACK TO HOME
      </a>
    </div>
  );
}
