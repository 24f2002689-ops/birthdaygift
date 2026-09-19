"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function TimelineItem({ index = 0, year, title, image, description }: { index?: number; year: string; title: string; image?: string; description?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const from = { y: 40, opacity: 0 };
    const to = { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 80%' } };

    // Alternate horizontal offset for visual variety
    if (index % 2 === 0) {
      gsap.fromTo(el, { x: -40, ...from }, { x: 0, ...to });
    } else {
      gsap.fromTo(el, { x: 40, ...from }, { x: 0, ...to });
    }
    return () => ScrollTrigger.getAll().forEach((s) => s.kill());
  }, []);

  return (
    <>
      <div
        ref={ref}
        className={`glass p-6 rounded-2xl mb-6 flex gap-4 items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
      >
        <div className="w-20 flex-shrink-0 text-center">
          <div className="text-2xl font-display">{year}</div>
        </div>
        <div className="max-w-[60%]">
          <div className="font-semibold text-lg">{title}</div>
          {description ? <p className="text-sm mt-2 text-white/80">{description}</p> : null}
        </div>
        {image ? (
          <button aria-label={`Open ${title}`} onClick={() => setOpen(true)} className="ml-auto w-36 h-24 bg-white/4 rounded overflow-hidden">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </button>
        ) : null}
      </div>
      {open ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={() => setOpen(false)}>
          <img src={image} alt={title} className="max-w-[90%] max-h-[90%]" />
        </div>
      ) : null}
    </>
  );
}
