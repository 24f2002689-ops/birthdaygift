"use client";
import React, { useEffect } from 'react';

export default function ConfettiLoader() {
  useEffect(() => {
    // dynamically import canvas-confetti if available
    let mounted = true;
    (async () => {
      try {
        const mod = await import('canvas-confetti');
        if (!mounted) return;
        const confetti = mod.default;
        confetti({ particleCount: 110, spread: 72, scalar: 1.2, origin: { y: 0.6 } });
        // small follow-up burst
        setTimeout(() => confetti({ particleCount: 40, spread: 50, origin: { x: 0.3, y: 0.5 } }), 350);
        setTimeout(() => confetti({ particleCount: 40, spread: 50, origin: { x: 0.7, y: 0.55 } }), 700);
      } catch (e) {
        // ignore if not installed
      }
    })();
    return () => { mounted = false; };
  }, []);

  return null;
}
