"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export function ChapterIntro({ title, subtitle }: { title: string; subtitle?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    gsap.fromTo(el, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' });
    return () => {
      gsap.killTweensOf(el);
    };
  }, []);

  return (
    <div ref={ref} className="py-12">
      <div className="text-sm text-white/70">CHAPTER</div>
      <h1 className="text-4xl font-display text-white">{title}</h1>
      {subtitle ? <p className="mt-2 text-white/70">{subtitle}</p> : null}
    </div>
  );
}
