"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const photos = [
  { src: '/mahi1.jpeg', caption: 'February outing 2026' },
  { src: '/mahi2.jpeg', caption: 'Memories' },
  { src: '/mahi3.jpeg', caption: 'The squad' },
  { src: '/mahi4.jpeg', caption: 'Vibing' },
  { src: '/mahi5.jpeg', caption: 'First semester days' },
  { src: '/mahi6.jpeg', caption: 'Good times' },
  { src: '/mahi7.jpeg', caption: '3rd sem era' },
  { src: '/mahi8.jpeg', caption: 'The chaos' },
  { src: '/mahi9.jpeg', caption: 'Sept 2026' },
  { src: '/mahi10.jpeg', caption: 'Always' },
];

const LETTER = `Mahi da,

Where do we even start.

You walked into our lives and somehow made everything more chaotic, more fun, and weirdly — more meaningful. That's a rare quality, bro. Most people add noise. You added something different.

From Prajin: You're the guy I didn't expect to become this close with but here we are. Every memory from this year has you in it somewhere. Thanks for being real when it mattered.

From Abhi: Mahi — the amount of times you've made me actually laugh out loud in the most boring situations is criminal. You're the energy in the room. Don't ever lose that.

Together we're saying this: You deserve every good thing. Every laugh, every win, every random good day that hits different. You deserve to be celebrated — properly.

So here we are. Doing exactly that.

Happy Birthday, da. 🔥

– Abhi & Prajin`;

const videos = [
  { label: 'Video 1 — A memory', src: '/vid1.mp4' },
  { label: 'Video 2 — Squad moment', src: '/vid2.mp4' },
  { label: 'Video 3 — Highlight reel', src: '/vid3.mp4' },
];

export default function AbhiPrajinPage() {
  const [letterOpen, setLetterOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
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
            <Link key={href} href={href} className={`px-4 py-1.5 rounded-full text-sm transition-all duration-200 ${href === '/abhiprajin' ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white hover:bg-white/8'}`}>
              {label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <div className="relative pt-40 pb-16 px-6 text-center">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 20%, rgba(124,58,237,0.12) 0%, transparent 70%)' }}
        />
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6">
          <span className="text-violet-400 text-sm">🔥</span>
          <span className="section-label">From us, for you</span>
        </div>
        <h1
          className="text-6xl md:text-8xl font-black mb-4"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <span className="gradient-text">Abhi</span>
          <span className="text-white/30 mx-4 font-light">&</span>
          <span className="gradient-text">Prajin</span>
        </h1>
        <p className="text-white/40 text-base max-w-md mx-auto">
          Two people, one message, zero chill about how much we appreciate you
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-32 space-y-20">

        {/* Letter */}
        <section className="reveal">
          <div className="flex items-center gap-4 mb-8">
            <div className="section-line flex-1" />
            <span className="section-label">our letter to mahi</span>
            <div className="section-line flex-1" />
          </div>

          {!letterOpen ? (
            <div
              className="glass rounded-2xl p-12 flex flex-col items-center gap-6 cursor-pointer hover:scale-[1.01] transition-all duration-300"
              style={{ borderColor: 'rgba(124,58,237,0.2)', background: 'linear-gradient(135deg, rgba(124,58,237,0.05), rgba(6,182,212,0.05))' }}
              onClick={() => setLetterOpen(true)}
              data-hover
            >
              <div className="text-6xl">📝</div>
              <div className="text-center">
                <div className="text-white font-semibold text-xl mb-1">From Abhi & Prajin</div>
                <div className="text-white/40 text-sm">A letter for Mahi — tap to open</div>
              </div>
              <div
                className="px-6 py-2.5 rounded-full text-sm font-medium"
                style={{ background: 'rgba(124,58,237,0.2)', color: '#a78bfa', border: '1px solid rgba(124,58,237,0.3)' }}
              >
                Open Letter
              </div>
            </div>
          ) : (
            <div
              className="rounded-2xl relative overflow-hidden"
              style={{
                background: 'rgba(12, 10, 22, 0.95)',
                border: '1px solid rgba(124,58,237,0.15)',
                boxShadow: '0 40px 80px rgba(124,58,237,0.1)',
              }}
            >
              <div className="absolute left-16 top-0 bottom-0 w-px" style={{ background: 'rgba(99,102,241,0.2)' }} />
              <div className="pt-6 px-20 pb-8">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-1/3 h-px mb-3" style={{ background: 'rgba(124,58,237,0.1)' }} />
                ))}
              </div>
              <div className="px-20 pb-10">
                <div
                  className="whitespace-pre-wrap leading-loose text-white/80"
                  style={{ fontFamily: "'Caveat', cursive", fontSize: '1.15rem' }}
                >
                  {LETTER}
                </div>
              </div>
              <div className="pb-6 px-20">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-full h-px mb-3" style={{ background: 'rgba(124,58,237,0.06)' }} />
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Photos */}
        <section className="reveal">
          <div className="flex items-center gap-4 mb-8">
            <div className="section-line flex-1" />
            <span className="section-label">photos from our era</span>
            <div className="section-line flex-1" />
          </div>

          <div className="photo-grid">
            {photos.map((photo, i) => (
              <div
                key={i}
                className="photo-card reveal"
                style={{ transitionDelay: `${i * 0.07}s` }}
                onClick={() => setLightboxImg(photo.src)}
                data-hover
              >
                <Image src={photo.src} alt={photo.caption} fill className="object-cover" />
                <div
                  className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                  style={{ background: 'linear-gradient(to top, rgba(124,58,237,0.6) 0%, transparent 60%)' }}
                >
                  <span className="text-white text-sm font-medium">{photo.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Videos */}
        <section className="reveal">
          <div className="flex items-center gap-4 mb-8">
            <div className="section-line flex-1" />
            <span className="section-label">video memories</span>
            <div className="section-line flex-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {videos.map((v, i) => (
              <div key={i} className="reveal" style={{ transitionDelay: `${i * 0.15}s` }}>
                <video
                  src={v.src}
                  controls
                  playsInline
                  className="w-full rounded-2xl"
                  style={{
                    background: '#0a0a14',
                    border: '1px solid rgba(124,58,237,0.2)',
                  }}
                />
                <div className="text-white/40 text-xs mt-2 text-center">{v.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Extra video from Yuvasri section */}
        <section className="reveal">
          <div className="flex items-center gap-4 mb-8">
            <div className="section-line flex-1" />
            <span className="section-label">bonus video</span>
            <div className="section-line flex-1" />
          </div>
          <div className="max-w-lg mx-auto">
            <video
              src="/vid4.mp4"
              controls
              playsInline
              className="w-full rounded-2xl"
              style={{
                background: '#0a0a14',
                border: '1px solid rgba(244,114,182,0.2)',
              }}
            />
            <div className="text-white/40 text-xs mt-2 text-center">Another memory</div>
          </div>
        </section>

      </div>

      {/* Lightbox */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: 'rgba(0,0,0,0.92)' }}
          onClick={() => setLightboxImg(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full mx-6">
            <Image
              src={lightboxImg}
              alt="Photo"
              width={1200}
              height={800}
              className="object-contain w-full h-full rounded-2xl"
            />
          </div>
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-white text-3xl transition-colors"
            onClick={() => setLightboxImg(null)}
          >
            ×
          </button>
        </div>
      )}
    </main>
  );
}
