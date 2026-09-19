"use client";
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const timelineEvents = [
  {
    id: 1,
    date: 'Feb 2025',
    title: 'The Beginning',
    subtitle: 'First semester, new faces',
    description: "College starts and three strangers walk into the same classroom. Prajin spots this guy — Mahendran — trying to figure out which bench to sit at. Little did anyone know, that random seating arrangement would be the start of something that'd last way beyond college.",
    emoji: '🌱',
    image: '/mahi5.jpeg',
    side: 'right',
    color: '#7c3aed',
    tags: ['First meeting', '1st Semester'],
  },
  {
    id: 2,
    date: 'Mid 2025',
    title: 'Finding Our Vibe',
    subtitle: 'Late nights & random plans',
    description: "That weird phase where you're not quite friends but also not strangers. Random canteen trips, group study sessions that turned into meme sharing sessions. Mahi's humor hit different — the kind that makes you laugh even when you're trying to focus.",
    emoji: '☕',
    image: '/mahi3.jpeg',
    side: 'left',
    color: '#06b6d4',
    tags: ['Growing bond', 'Canteen trips'],
  },
  {
    id: 3,
    date: 'Nov 2025',
    title: 'Getting Close',
    subtitle: '3rd Semester — the real era',
    description: "3rd sem hit different. The group got closer. We started having actual conversations — not just class talk. Mahi became someone you'd call just to talk about nothing. That's when you know it's real. Abhi, Prajin, Mahi — the trio was forming.",
    emoji: '💫',
    image: '/mahi7.jpeg',
    side: 'right',
    color: '#ec4899',
    tags: ['3rd Semester', 'Trio era'],
  },
  {
    id: 4,
    date: 'Feb 2026',
    title: 'Going Out Together',
    subtitle: 'First big outing with Yuvasri',
    description: "February 2026 — the legendary outing. Mahi, Abhi, Prajin, and Yuvasri stepping out together for real. Turned what started as a casual hangout into a full-day adventure. These are the days you screenshot in your memory and never delete.",
    emoji: '🎮',
    image: '/mahi1.jpeg',
    side: 'left',
    color: '#f59e0b',
    tags: ['Group outing', 'Core memory'],
  },
  {
    id: 5,
    date: 'Mid 2026',
    title: 'Ride or Die Season',
    subtitle: 'Through the chaos together',
    description: "Exams, deadlines, random crises — Mahi was always there. Not just for the fun stuff but through the actually hard parts too. That's what separates a friend from a guy you just know. Mahi's the first category, always has been.",
    emoji: '🔥',
    image: '/mahi8.jpeg',
    side: 'right',
    color: '#10b981',
    tags: ['Support system', 'Real ones'],
  },
  {
    id: 6,
    date: 'Sept 2026',
    title: 'Still Going Strong',
    subtitle: 'And it\'s only getting better',
    description: "Today — September 20, 2026 — Mahi's birthday. And here we are, still going stronger than ever. The friendship didn't fade, it leveled up. From strangers to family. This is for you, da. Happy birthday.",
    emoji: '🎂',
    image: '/mahi9.jpeg',
    side: 'left',
    color: '#7c3aed',
    tags: ['Birthday 2026', 'Forever'],
  },
];

export default function TimelinePage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number((entry.target as HTMLElement).dataset.idx);
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            setActiveIndex(idx);
          }
        });
      },
      { threshold: 0.3 }
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen" style={{ background: '#040508' }}>
      {/* Nav */}
      <nav className="fixed top-6 left-0 right-0 flex justify-center z-50">
        <div className="nav-pill flex gap-1 p-1.5 rounded-full">
          {[
            { href: '/', label: 'Home' },
            { href: '/timeline', label: 'Our Story' },
            { href: '/yuvasri', label: 'Yuvasri' },
            { href: '/abhiprajin', label: 'Abhi & Prajin' },
            { href: '/gallery', label: 'Gallery' },
          ].map(({ href, label }) => (
            <Link key={href} href={href} className={`px-4 py-1.5 rounded-full text-sm transition-all duration-200 ${href === '/timeline' ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white hover:bg-white/8'}`}>
              {label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <div className="relative pt-40 pb-24 text-center px-6">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 30%, rgba(124,58,237,0.1) 0%, transparent 70%)' }}
        />
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6">
          <span className="text-yellow-400 text-sm">⏳</span>
          <span className="section-label">Our Story</span>
        </div>
        <h1
          className="text-5xl md:text-7xl font-black mb-4"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          From <span className="gradient-text">Strangers</span>
          <br />to <span className="gradient-text">Family</span>
        </h1>
        <p className="text-white/50 text-lg max-w-xl mx-auto">
          Feb 2025 → Sept 2026. Every milestone, every memory.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto px-6 pb-32">
        {/* Center line */}
        <div
          className="absolute left-1/2 top-0 bottom-0 w-px"
          style={{
            background: 'linear-gradient(to bottom, transparent, rgba(124,58,237,0.4) 10%, rgba(6,182,212,0.4) 50%, rgba(244,114,182,0.4) 90%, transparent)',
            transform: 'translateX(-50%)',
          }}
        />

        {timelineEvents.map((event, i) => (
          <div
            key={event.id}
            ref={(el) => { itemRefs.current[i] = el; }}
            data-idx={i}
            className={`reveal relative flex items-center gap-8 mb-20 ${event.side === 'left' ? 'flex-row-reverse' : 'flex-row'}`}
          >
            {/* Card */}
            <div className="flex-1 max-w-[calc(50%-40px)]">
              <div
                className="glass rounded-2xl p-6 hover:scale-[1.01] transition-all duration-500 relative overflow-hidden group"
                style={{ borderColor: event.color + '30' }}
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{ boxShadow: `inset 0 0 40px ${event.color}15` }}
                />

                {/* Image */}
                <div className="w-full aspect-video rounded-xl overflow-hidden mb-4 relative">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(to top, ${event.color}40, transparent)` }}
                  />
                </div>

                {/* Tags */}
                <div className="flex gap-2 flex-wrap mb-3">
                  {event.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-0.5 rounded-full"
                      style={{ background: event.color + '20', color: event.color, border: `1px solid ${event.color}30` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-white mb-1">{event.title}</h3>
                <p className="text-sm mb-3" style={{ color: event.color }}>{event.subtitle}</p>
                <p className="text-white/60 text-sm leading-relaxed">{event.description}</p>
              </div>
            </div>

            {/* Center node */}
            <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-xl relative"
                style={{ background: `linear-gradient(135deg, ${event.color}40, ${event.color}20)`, border: `1.5px solid ${event.color}60` }}
              >
                {event.emoji}
                {/* Pulse ring */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    border: `1px solid ${event.color}`,
                    animation: 'pulseRing 2s ease-out infinite',
                    animationDelay: `${i * 0.3}s`,
                  }}
                />
              </div>
              <div
                className="mt-2 text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap"
                style={{ background: event.color + '20', color: event.color }}
              >
                {event.date}
              </div>
            </div>

            {/* Spacer */}
            <div className="flex-1 max-w-[calc(50%-40px)]" />
          </div>
        ))}

        {/* End cap */}
        <div className="text-center relative pt-8">
          <div className="absolute left-1/2 -translate-x-1/2 -top-8 w-16 h-16 rounded-full flex items-center justify-center text-3xl"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #ec4899)', boxShadow: '0 0 40px rgba(124,58,237,0.4)' }}
          >
            🎂
          </div>
          <div className="glass inline-block px-8 py-4 rounded-2xl mt-12">
            <div className="gradient-text text-2xl font-bold mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Chapter Ongoing...
            </div>
            <div className="text-white/50 text-sm">the best is yet to come</div>
          </div>
        </div>
      </div>

      {/* Pulse keyframes */}
      <style>{`
        @keyframes pulseRing {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(2); opacity: 0; }
        }
      `}</style>
    </main>
  );
}
