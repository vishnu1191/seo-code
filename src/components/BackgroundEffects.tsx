import React, { useEffect, useRef } from 'react';

export const BackgroundEffects: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle system
    const particleCount = Math.min(Math.floor(window.innerWidth / 25), 45);
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      pulseSpeed: number;
    }> = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.6 + 0.4,
        speedX: (Math.random() - 0.5) * 0.18,
        speedY: (Math.random() - 0.5) * 0.18 - 0.05,
        opacity: Math.random() * 0.6 + 0.15,
        pulseSpeed: Math.random() * 0.015 + 0.005,
      });
    }

    let frame = 0;
    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      // Draw subtle particles
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const currentOpacity = Math.abs(Math.sin(frame * p.pulseSpeed)) * p.opacity;

        ctx.fillStyle = `rgba(177, 92, 255, ${currentOpacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Base deep obsidian background */}
      <div className="absolute inset-0 bg-[#050507]" />

      {/* Signature Artistic Flair Top Radial Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_50%_-20%,rgba(139,61,255,0.18),transparent_70%)] pointer-events-none" />

      {/* Grid texture */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      {/* Ambient violet and purple radial lighting orbs */}
      <div 
        className="absolute top-[-10%] left-[20%] w-[650px] h-[650px] rounded-full bg-[#4B147F]/20 blur-[130px] animate-pulse-slow" 
      />
      <div 
        className="absolute top-[35%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#35105C]/25 blur-[150px] animate-pulse-slow" 
        style={{ animationDelay: '3s' }}
      />
      <div 
        className="absolute top-[65%] left-[-10%] w-[700px] h-[700px] rounded-full bg-[#8B3DFF]/10 blur-[160px] animate-pulse-slow" 
        style={{ animationDelay: '1.5s' }}
      />
      <div 
        className="absolute bottom-[-10%] right-[20%] w-[800px] h-[600px] rounded-full bg-[#4B147F]/20 blur-[160px]" 
      />

      {/* Subtle star particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />
    </div>
  );
};
