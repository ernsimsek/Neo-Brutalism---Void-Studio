import type { TeamMember } from '../../data/team';

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <article
      style={{
        background: member.bgColor,
        border: '2px solid var(--chalk)',
        boxShadow: '6px 6px 0px var(--chalk)',
        transform: `rotate(${member.rotation}deg)`,
        padding: '0',
        overflow: 'hidden',
        transition: 'transform 200ms ease',
        maxWidth: '280px',
        width: '100%',
      }}
      className="team-card"
    >
      {/* Photo placeholder — high contrast initial block */}
      <div
        style={{
          width: '100%',
          aspectRatio: '1',
          background: `linear-gradient(135deg, #111 0%, #333 100%)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          filter: 'grayscale(100%) contrast(1.3)',
        }}
        aria-hidden="true"
      >
        {/* Abstract person silhouette using CSS */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* Head */}
          <div
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'rgba(240,235,225,0.9)',
              margin: '0 auto 8px',
            }}
          />
          {/* Body */}
          <div
            style={{
              width: '90px',
              height: '70px',
              background: 'rgba(240,235,225,0.7)',
              margin: '0 auto',
              clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)',
            }}
          />
        </div>
        {/* Initials overlay */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontFamily: 'var(--font-display)',
            fontSize: '4rem',
            fontWeight: 900,
            color: 'rgba(200,255,0,0.15)',
            letterSpacing: '-0.05em',
            zIndex: 2,
            userSelect: 'none',
          }}
        >
          {member.initials}
        </div>
        {/* Scan lines */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.15) 3px, rgba(0,0,0,0.15) 4px)',
            zIndex: 3,
          }}
        />
      </div>

      {/* Info */}
      <div
        style={{
          padding: '16px',
          borderTop: '2px solid var(--chalk)',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1rem',
            fontWeight: 800,
            color: 'var(--paper)',
            letterSpacing: '-0.01em',
            marginBottom: '4px',
          }}
        >
          {member.name}
        </div>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-xs)',
            color: 'var(--acid)',
            letterSpacing: '0.05em',
            marginBottom: '8px',
          }}
        >
          {member.role}
        </div>
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-xs)',
            color: 'var(--paper)',
            opacity: 0.5,
            lineHeight: 1.5,
          }}
        >
          {member.bio}
        </p>
      </div>

      <style>{`
        .team-card:hover {
          transform: rotate(0deg) !important;
          z-index: 10;
        }
      `}</style>
    </article>
  );
}
