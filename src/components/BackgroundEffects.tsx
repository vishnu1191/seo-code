import React from 'react';

export const BackgroundEffects: React.FC = () => {
  // Use lightweight CSS radial gradients instead of huge blur-[160px] filters + continuous animations,
  // avoiding expensive mobile GPU/CPU rasterization on FCP/LCP.
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[#050507]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_50%_-20%,rgba(139,61,255,0.18),transparent_70%)]" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      <div className="absolute top-[-10%] left-[20%] w-[650px] h-[650px] rounded-full bg-[radial-gradient(circle,rgba(75,20,127,0.22)_0%,transparent_70%)]" />
      <div className="absolute top-[35%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(53,16,92,0.24)_0%,transparent_70%)]" />
      <div className="absolute top-[65%] left-[-10%] w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(139,61,255,0.12)_0%,transparent_70%)]" />
      <div className="absolute bottom-[-10%] right-[20%] w-[800px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(75,20,127,0.2)_0%,transparent_70%)]" />
    </div>
  );
};
