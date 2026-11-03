import React from 'react';

export const BackgroundEffects: React.FC = () => {
  // Keep the ambient background decorative and CSS-driven.
  // A continuously running canvas animation was doing work on the main thread
  // throughout the visit without adding meaningful content or interaction.
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[#050507]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_50%_-20%,rgba(139,61,255,0.18),transparent_70%)]" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      <div className="absolute top-[-10%] left-[20%] w-[650px] h-[650px] rounded-full bg-[#4B147F]/20 blur-[130px] animate-pulse-slow" />
      <div
        className="absolute top-[35%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#35105C]/25 blur-[150px] animate-pulse-slow"
        style={{ animationDelay: '3s' }}
      />
      <div
        className="absolute top-[65%] left-[-10%] w-[700px] h-[700px] rounded-full bg-[#8B3DFF]/10 blur-[160px] animate-pulse-slow"
        style={{ animationDelay: '1.5s' }}
      />
      <div className="absolute bottom-[-10%] right-[20%] w-[800px] h-[600px] rounded-full bg-[#4B147F]/20 blur-[160px]" />
    </div>
  );
};
