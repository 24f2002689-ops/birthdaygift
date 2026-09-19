"use client";

import React, { useEffect } from 'react';
import { gsap } from 'gsap';

export function AmbientBlobs() {
  useEffect(() => {
    const nodes = document.querySelectorAll('.ambient-blob');
    nodes.forEach((n, i) => {
      gsap.to(n, {
        x: (i % 2 === 0 ? 24 : -24),
        y: (i % 3 === 0 ? 12 : -12),
        scale: 1.06,
        duration: 8 + i * 2,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut'
      });
    });
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      <div className="ambient-blob absolute w-72 h-72 rounded-full opacity-40 blur-3xl" style={{ left: '6%', top: '6%', background: 'radial-gradient(circle at 30% 30%, rgba(244,114,182,0.55), rgba(124,58,237,0.25))' }} />
      <div className="ambient-blob absolute w-96 h-96 rounded-full opacity-32 blur-3xl" style={{ right: '4%', bottom: '8%', background: 'radial-gradient(circle at 70% 40%, rgba(6,182,212,0.45), rgba(59,130,246,0.18))' }} />
      <div className="ambient-blob absolute w-56 h-56 rounded-full opacity-28 blur-3xl" style={{ left: '40%', bottom: '20%', background: 'radial-gradient(circle at 40% 40%, rgba(99,102,241,0.42), rgba(244,114,182,0.12))' }} />
    </div>
  );
}

export default AmbientBlobs;
