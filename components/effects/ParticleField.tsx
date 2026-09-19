"use client";
import React, { useEffect, useRef } from 'react';

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let rafId = 0;

    const particles: { x: number; y: number; r: number; vx: number; vy: number }[] = [];
    const count = Math.floor(Math.min(window.innerWidth / 15, 80));

    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch || window.innerWidth < 600) {
      canvas.style.display = 'none';
      return;
    }

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
    }

    function init() {
      particles.length = 0;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas!.width,
          y: Math.random() * canvas!.height,
          r: Math.random() * 2 + 0.5,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
        });
      }
    }

    function tick() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const grd = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      grd.addColorStop(0, 'rgba(124,58,237,0.06)');
      grd.addColorStop(0.5, 'rgba(6,182,212,0.05)');
      grd.addColorStop(1, 'rgba(244,114,182,0.04)');
      ctx.fillStyle = grd;
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas!.width;
        if (p.x > canvas!.width) p.x = 0;
        if (p.y < 0) p.y = canvas!.height;
        if (p.y > canvas!.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
      rafId = requestAnimationFrame(tick);
    }

    function burst(x: number, y: number) {
      for (let i = 0; i < 40; i++) {
        particles.push({ x, y, r: Math.random() * 2 + 0.5, vx: (Math.random() - 0.5) * 6, vy: (Math.random() - 0.5) * 6 });
      }
      setTimeout(() => { particles.splice(60); }, 1200);
    }

    function onEnter() { burst(window.innerWidth / 2, window.innerHeight / 2); }

    window.addEventListener('archive:enter', onEnter as EventListener);
    resize();
    init();
    window.addEventListener('resize', resize);
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('archive:enter', onEnter as EventListener);
    };
  }, []);

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 -z-20 opacity-40" />;
}
