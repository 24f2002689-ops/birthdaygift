"use client";
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const yuvasriPhotos = [
  { src: '/yuvasri1.jpeg', caption: 'Yuvasri' },
  { src: '/yuvasri2.jpeg', caption: 'Moments together' },
  { src: '/yuvasri3.jpeg', caption: 'Always there' },
  { src: '/yuvasri4.jpeg', caption: 'The best of us' },
];

const LETTER = `Happy birthday to my lovely man I wish u go greater hights. epomae me and god will be by your side .eat well stay healthy, epomae sirichutu eru and make everyone around u happy as u do thats what my man does. cheers to 20 completing your teen ,keep rocking I have always seen u as my motivation,u have never left me alone at my low times . It's your 3rd birthday we are celebrating together every birthday beside me i will make sure it is something special. Miss that kuti mahi who I saw in school uniform a caring soul. I really wana thank you for being with me at all situations u were the reason I smiled every day u have always been my backbone guiding me all way. ❤️

With all my love,
Yuvasri ✨`;

export default function YuvasriPage() {
  const [letterOpen, setLetterOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.15 }
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
            <Link key={href} href={href} className={`px-4 py-1.5 rounded-full text-sm transition-all duration-200 ${href === '/yuvasri' ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white hover:bg-white/8'}`}>
              {label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <div className="relative pt-40 pb-16 px-6 text-center">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 20%, rgba(244,114,182,0.12) 0%, transparent 70%)' }}
        />
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6">
          <span className="text-pink-400 text-sm">💫</span>
          <span className="section-label">A Section for</span>
        </div>
        <h1
          className="text-6xl md:text-8xl font-black mb-4"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <span style={{ color: '#f472b6' }}>Yuvasri</span>
        </h1>
        <p className="text-white/40 text-base max-w-md mx-auto">
          Her message, her moments, her heart
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-32 space-y-16">

        {/* Letter section */}
        <section className="reveal">
          <div className="flex items-center gap-4 mb-8">
            <div className="section-line flex-1" />
            <span className="section-label">letter from yuvasri</span>
            <div className="section-line flex-1" />
          </div>

          {/* Letter envelope / click to open */}
          {!letterOpen ? (
            <div
              className="glass rounded-2xl p-12 flex flex-col items-center gap-6 cursor-pointer hover:scale-[1.01] transition-all duration-300"
              style={{ borderColor: 'rgba(244,114,182,0.2)', background: 'linear-gradient(135deg, rgba(244,114,182,0.05), rgba(124,58,237,0.05))' }}
              onClick={() => setLetterOpen(true)}
              data-hover
            >
              <div className="text-6xl">💌</div>
              <div className="text-center">
                <div className="text-white font-semibold text-xl mb-1">A Letter for Mahi</div>
                <div className="text-white/40 text-sm">from Yuvasri — tap to open</div>
              </div>
              <div
                className="px-6 py-2.5 rounded-full text-sm font-medium"
                style={{ background: 'rgba(244,114,182,0.2)', color: '#f472b6', border: '1px solid rgba(244,114,182,0.3)' }}
              >
                Open Letter
              </div>
            </div>
          ) : (
            <div className="reveal visible">
              <div
                className="rounded-2xl relative overflow-hidden"
                style={{
                  background: 'rgba(20, 12, 18, 0.95)',
                  border: '1px solid rgba(244,114,182,0.15)',
                  boxShadow: '0 40px 80px rgba(244,114,182,0.1)',
                }}
              >
                {/* Red margin line */}
                <div
                  className="absolute left-16 top-0 bottom-0 w-px"
                  style={{ background: 'rgba(244,114,182,0.2)' }}
                />
                {/* Top line decorations */}
                <div className="pt-6 px-20 pb-8">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-1/3 h-px mb-3" style={{ background: 'rgba(244,114,182,0.1)' }} />
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
                {/* Bottom lines */}
                <div className="pb-6 px-20">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-full h-px mb-3" style={{ background: 'rgba(244,114,182,0.06)' }} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Photos section */}
        <section className="reveal">
          <div className="flex items-center gap-4 mb-8">
            <div className="section-line flex-1" />
            <span className="section-label">moments from yuvasri</span>
            <div className="section-line flex-1" />
          </div>

          <div className="photo-grid">
            {yuvasriPhotos.map((photo, i) => (
              <div
                key={i}
                className="photo-card reveal"
                style={{ transitionDelay: `${i * 0.1}s` }}
                onClick={() => setLightboxImg(photo.src)}
                data-hover
              >
                <Image src={photo.src} alt={photo.caption} fill className="object-cover" />
                <div
                  className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                  style={{ background: 'linear-gradient(to top, rgba(244,114,182,0.6) 0%, transparent 60%)' }}
                >
                  <span className="text-white text-sm font-medium">{photo.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Video placeholder */}
        <section className="reveal">
          <div className="flex items-center gap-4 mb-8">
            <div className="section-line flex-1" />
            <span className="section-label">video message</span>
            <div className="section-line flex-1" />
          </div>
          <div className="video-placeholder group" data-hover>
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🎬</div>
            <div className="text-white/60 font-medium mb-1">Video from Yuvasri</div>
            <div className="text-white/30 text-sm">Coming soon</div>
            <div
              className="mt-4 px-4 py-1.5 rounded-full text-xs"
              style={{ background: 'rgba(244,114,182,0.1)', color: 'rgba(244,114,182,0.7)', border: '1px dashed rgba(244,114,182,0.3)' }}
            >
              Placeholder — add video later
            </div>
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
