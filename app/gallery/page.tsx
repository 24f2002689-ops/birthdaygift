"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const allPhotos = [
  { src: '/mahi5.jpeg', section: 'abhi-prajin', caption: 'Feb 2025 — The beginning' },
  { src: '/mahi3.jpeg', section: 'abhi-prajin', caption: 'Finding our vibe' },
  { src: '/mahi7.jpeg', section: 'abhi-prajin', caption: 'Nov 2025 — 3rd sem era' },
  { src: '/mahi1.jpeg', section: 'abhi-prajin', caption: 'Feb 2026 — Going out' },
  { src: '/mahi8.jpeg', section: 'abhi-prajin', caption: 'Ride or die season' },
  { src: '/mahi9.jpeg', section: 'abhi-prajin', caption: 'Sept 2026 — Still strong' },
  { src: '/mahi2.jpeg', section: 'abhi-prajin', caption: 'Memories' },
  { src: '/mahi4.jpeg', section: 'abhi-prajin', caption: 'Vibing' },
  { src: '/mahi6.jpeg', section: 'abhi-prajin', caption: 'Good times' },
  { src: '/mahi10.jpeg', section: 'abhi-prajin', caption: 'Always' },
  { src: '/yuvasri1.jpeg', section: 'yuvasri', caption: 'From Yuvasri' },
  { src: '/yuvasri2.jpeg', section: 'yuvasri', caption: 'Moments together' },
  { src: '/yuvasri3.jpeg', section: 'yuvasri', caption: 'Always there' },
  { src: '/yuvasri4.jpeg', section: 'yuvasri', caption: 'The best of us' },
];

const filters = [
  { key: 'all', label: 'All Photos' },
  { key: 'abhi-prajin', label: 'Abhi & Prajin' },
  { key: 'yuvasri', label: 'Yuvasri' },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState('all');
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const filtered = filter === 'all' ? allPhotos : allPhotos.filter((p) => p.section === filter);

  const goNext = () => {
    if (lightboxIdx === null) return;
    setLightboxIdx((lightboxIdx + 1) % filtered.length);
  };
  const goPrev = () => {
    if (lightboxIdx === null) return;
    setLightboxIdx((lightboxIdx - 1 + filtered.length) % filtered.length);
  };

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
            <Link key={href} href={href} className={`px-4 py-1.5 rounded-full text-sm transition-all duration-200 ${href === '/gallery' ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white hover:bg-white/8'}`}>
              {label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <div className="relative pt-40 pb-12 px-6 text-center">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 20%, rgba(6,182,212,0.1) 0%, transparent 70%)' }}
        />
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6">
          <span className="text-cyan-400 text-sm">🖼️</span>
          <span className="section-label">The Memory Vault</span>
        </div>
        <h1
          className="text-5xl md:text-7xl font-black mb-4"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <span className="gradient-text">Gallery</span>
        </h1>
        <p className="text-white/40 text-base max-w-md mx-auto mb-10">
          Every photo is a moment we lived. Click to explore.
        </p>

        {/* Filters */}
        <div className="flex gap-2 justify-center flex-wrap">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-200"
              style={{
                background: filter === f.key ? 'linear-gradient(135deg, rgba(124,58,237,0.5), rgba(6,182,212,0.5))' : 'rgba(255,255,255,0.05)',
                color: filter === f.key ? 'white' : 'rgba(255,255,255,0.5)',
                border: `1px solid ${filter === f.key ? 'rgba(124,58,237,0.4)' : 'rgba(255,255,255,0.08)'}`,
              }}
              data-hover
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry-style grid */}
      <div className="max-w-6xl mx-auto px-6 pb-32">
        <div
          className="grid gap-3"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}
        >
          {filtered.map((photo, i) => (
            <div
              key={photo.src + i}
              className="reveal relative rounded-2xl overflow-hidden group"
              style={{
                aspectRatio: i % 5 === 0 ? '1/1.2' : i % 3 === 0 ? '1/0.8' : '4/3',
                transitionDelay: `${i * 0.05}s`,
              }}
              onClick={() => setLightboxIdx(i)}
              data-hover
            >
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col justify-end p-4"
                style={{ background: 'linear-gradient(to top, rgba(4,5,8,0.85) 0%, transparent 60%)' }}
              >
                <div className="text-white text-sm font-medium">{photo.caption}</div>
                <div className="text-white/40 text-xs mt-0.5">
                  {photo.section === 'yuvasri' ? 'Yuvasri' : 'Abhi & Prajin'}
                </div>
              </div>
              {/* Section badge */}
              <div
                className="absolute top-3 right-3 text-xs px-2 py-0.5 rounded-full"
                style={{
                  background: photo.section === 'yuvasri' ? 'rgba(244,114,182,0.3)' : 'rgba(124,58,237,0.3)',
                  color: photo.section === 'yuvasri' ? '#f472b6' : '#a78bfa',
                  border: `1px solid ${photo.section === 'yuvasri' ? 'rgba(244,114,182,0.3)' : 'rgba(124,58,237,0.3)'}`,
                }}
              >
                {photo.section === 'yuvasri' ? 'Yuvasri' : 'A&P'}
              </div>
            </div>
          ))}
        </div>

        {/* Count */}
        <div className="text-center mt-8 text-white/30 text-sm">
          {filtered.length} {filtered.length === 1 ? 'photo' : 'photos'} · tap any to zoom
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: 'rgba(0,0,0,0.94)' }}
          onClick={() => setLightboxIdx(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] w-full mx-6"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filtered[lightboxIdx].src}
              alt={filtered[lightboxIdx].caption}
              width={1200}
              height={900}
              className="object-contain w-full h-full rounded-2xl max-h-[80vh]"
            />
            <div className="text-center mt-4 text-white/60 text-sm">{filtered[lightboxIdx].caption}</div>
          </div>

          {/* Nav buttons */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 glass rounded-full flex items-center justify-center text-white/60 hover:text-white transition-colors text-xl"
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
          >
            ‹
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 glass rounded-full flex items-center justify-center text-white/60 hover:text-white transition-colors text-xl"
            onClick={(e) => { e.stopPropagation(); goNext(); }}
          >
            ›
          </button>
          <button
            className="absolute top-4 right-4 w-10 h-10 glass rounded-full flex items-center justify-center text-white/60 hover:text-white transition-colors"
            onClick={() => setLightboxIdx(null)}
          >
            ×
          </button>
          <div className="absolute bottom-4 left-0 right-0 text-center text-white/30 text-xs">
            {lightboxIdx + 1} / {filtered.length}
          </div>
        </div>
      )}
    </main>
  );
}
