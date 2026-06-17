import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Project } from '../../data/projects';

interface WorkCardProps {
  project: Project;
  style?: React.CSSProperties;
}

// Generate a pseudo-image using CSS patterns based on project
function ProjectVisual({ project }: { project: Project }) {
  const patterns: Record<string, string> = {
    fault: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,34,0,0.3) 10px, rgba(255,34,0,0.3) 11px), repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(200,255,0,0.1) 10px, rgba(200,255,0,0.1) 11px)`,
    holloway: `repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 21px), repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(255,255,255,0.05) 20px, rgba(255,255,255,0.05) 21px)`,
    surge: `repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(200,255,0,0.15) 30px, rgba(200,255,0,0.15) 31px)`,
    'null-null': `repeating-linear-gradient(15deg, transparent, transparent 5px, rgba(200,255,0,0.2) 5px, rgba(200,255,0,0.2) 6px), repeating-linear-gradient(-15deg, transparent, transparent 5px, rgba(255,34,0,0.1) 5px, rgba(255,34,0,0.1) 6px)`,
    brine: `radial-gradient(circle at 30% 30%, rgba(200,255,0,0.2) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(255,34,0,0.2) 0%, transparent 50%)`,
    operator: `repeating-linear-gradient(0deg, transparent, transparent 12px, rgba(255,255,255,0.08) 12px, rgba(255,255,255,0.08) 13px)`,
  };

  return (
    <div
      style={{
        width: '100%',
        paddingBottom: '65%',
        position: 'relative',
        background: `#1A1A1A ${patterns[project.slug] || ''}`,
        overflow: 'hidden',
        filter: 'grayscale(100%)',
        transition: 'filter 0ms',
      }}
      className={`card-visual card-visual-${project.slug}`}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 900,
            color: project.color,
            opacity: 0.6,
            letterSpacing: '-0.05em',
          }}
        >
          {project.title}
        </span>
      </div>
      <div
        style={{
          position: 'absolute',
          top: '16px',
          left: '16px',
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-xs)',
          color: 'var(--chalk)',
          opacity: 0.4,
          letterSpacing: '0.1em',
        }}
      >
        {project.number}
      </div>
    </div>
  );
}

export default function WorkCard({ project, style }: WorkCardProps) {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <article
      onClick={() => navigate(`/work/${project.slug}`)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--concrete)',
        border: 'var(--border)',
        cursor: 'none',
        transform: hovered ? 'translate(-4px, -4px)' : 'translate(0, 0)',
        boxShadow: hovered ? '12px 12px 0px var(--chalk)' : '4px 4px 0px var(--chalk)',
        transition: 'transform 80ms ease, box-shadow 80ms ease',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        ...style,
      }}
      role="button"
      tabIndex={0}
      aria-label={`View case study: ${project.title}`}
      onKeyDown={(e) => e.key === 'Enter' && navigate(`/work/${project.slug}`)}
    >
      {/* Visual */}
      <div
        style={{
          flex: 1,
          overflow: 'hidden',
        }}
        className={`work-card-image ${hovered ? 'color' : ''}`}
      >
        <ProjectVisual project={project} />
      </div>

      {/* Info Strip */}
      <div
        style={{
          borderTop: '2px solid var(--chalk)',
          padding: '12px 16px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '8px',
          flexWrap: 'wrap',
          background: hovered ? 'var(--void)' : 'var(--concrete)',
          transition: 'background 0ms',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            fontWeight: 800,
            color: hovered ? 'var(--acid)' : 'var(--paper)',
            transition: 'color 0ms',
            letterSpacing: '-0.02em',
          }}
        >
          {project.title}
        </div>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-xs)',
            color: 'var(--paper)',
            opacity: 0.6,
            letterSpacing: '0.08em',
          }}
        >
          {project.tags[0].toUpperCase()}
        </div>
      </div>

      <style>{`
        .work-card-image .card-visual {
          filter: grayscale(100%);
          transition: filter 0ms;
        }
        .work-card-image.color .card-visual {
          filter: grayscale(0%);
        }
      `}</style>
    </article>
  );
}
