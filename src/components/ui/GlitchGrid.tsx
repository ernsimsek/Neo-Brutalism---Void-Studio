import { useEffect, useRef } from 'react';

interface GlitchGridProps {
  opacity?: number;
  density?: number;
}

export default function GlitchGrid({ opacity = 0.04, density = 40 }: GlitchGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollRef = useRef(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    resize();

    const drawGrid = () => {
      const scroll = scrollRef.current;
      const offsetX = (scroll * 0.08) % density;
      const offsetY = (scroll * 0.03) % density;

      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 0.5;
      ctx.globalAlpha = opacity;

      // Vertical lines
      for (let x = -density + offsetX; x < width + density; x += density) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = -density + offsetY; y < height + density; y += density) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Dot intersections
      ctx.globalAlpha = opacity * 2;
      ctx.fillStyle = '#C8FF00';
      for (let x = -density + offsetX; x < width + density; x += density) {
        for (let y = -density + offsetY; y < height + density; y += density) {
          ctx.beginPath();
          ctx.arc(x, y, 1, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;
    };

    const onScroll = () => {
      scrollRef.current = window.scrollY;
    };

    const loop = () => {
      drawGrid();
      rafRef.current = requestAnimationFrame(loop);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', resize);
    loop();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(rafRef.current);
    };
  }, [opacity, density]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
      aria-hidden="true"
    />
  );
}
