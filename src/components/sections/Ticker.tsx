import './Ticker.css';

const row1 = 'BRAND IDENTITY ✦ WEB DESIGN ✦ ART DIRECTION ✦ MOTION ✦ UI/UX ✦ STRATEGY ✦ PRINT ✦ PACKAGING ✦ ';
const row2 = 'WE ARE NOT DECORATORS ✦ STRUCTURE IS MEANING ✦ UGLY IS HONEST ✦ FUNCTION IS FASHION ✦ ';

export default function Ticker() {
  return (
    <section
      aria-label="Manifesto ticker"
      style={{
        background: 'var(--acid)',
        overflow: 'hidden',
        borderTop: '4px solid var(--void)',
        borderBottom: '4px solid var(--void)',
      }}
    >
      {/* Row 1 — Scrolls Left */}
      <div className="ticker-row ticker-left" style={{ borderBottom: '4px solid var(--void)' }}>
        <div className="ticker-track">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="ticker-content">{row1}</span>
          ))}
        </div>
      </div>

      {/* Row 2 — Scrolls Right */}
      <div className="ticker-row ticker-right">
        <div className="ticker-track">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="ticker-content">{row2}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
