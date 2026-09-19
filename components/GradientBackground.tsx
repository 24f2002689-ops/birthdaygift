import React from 'react';

export function GradientBackground() {
  return (
      <div aria-hidden className="mesh-gradient">
        <div className="absolute inset-0 -z-40" style={{background: 'radial-gradient(circle at 10% 20%, rgba(124,58,237,0.08), transparent 20%), radial-gradient(circle at 85% 30%, rgba(6,182,212,0.06), transparent 25%), linear-gradient(180deg, rgba(2,6,23,1), rgba(4,8,40,0.9))'}} />
      </div>
  );
}
