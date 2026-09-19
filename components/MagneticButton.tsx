"use client";
import React, { useRef } from 'react';

export function MagneticButton({ children, className = '', onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) {
  const ref = useRef<HTMLButtonElement | null>(null);
  const isTouch = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);

  function handleMove(e: React.MouseEvent) {
    if (isTouch) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width / 2)) / rect.width;
    const dy = (e.clientY - (rect.top + rect.height / 2)) / rect.height;
    el.style.transform = `translate(${dx * 6}px, ${dy * 6}px)`;
  }

  function handleLeave() {
    if (isTouch) return;
    const el = ref.current;
    if (!el) return;
    el.style.transform = '';
  }

  return (
    <button
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
      className={`magnetic-btn focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400 ${className}`}
    >
      {children}
    </button>
  );
}
