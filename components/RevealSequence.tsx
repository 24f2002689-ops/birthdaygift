"use client";
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { gsap } from 'gsap';
import Confetti from 'canvas-confetti';
import { useRouter } from 'next/navigation';
import LoadingSequence from './LoadingSequence';

export default function RevealSequence() {
  const controls = useAnimation();
  const [loading, setLoading] = React.useState(true);
  const router = useRouter();

  useEffect(() => {
    async function seq() {
      if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        // If user prefers reduced motion, skip heavy reveal
        try {
          router.push('/beginning');
        } catch (e) {
          window.location.href = '/beginning';
        }
        return;
      }
      await controls.start({ scale: 1.02, transition: { duration: 0.5 } });
      gsap.fromTo('body', { backgroundColor: '#05060b' }, { backgroundColor: '#0b1020', duration: 1.2 });
      // confetti burst
      Confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
      // letter-by-letter reveal for name
      const name = document.querySelector('.reveal-name');
      if (name) {
        const text = (name.textContent || '').trim();
        name.innerHTML = '';
        text.split('').forEach((ch, i) => {
          const span = document.createElement('span');
          span.textContent = ch;
          span.style.display = 'inline-block';
          span.style.opacity = '0';
          span.style.transform = 'translateY(14px)';
          name.appendChild(span);
          gsap.to(span, { opacity: 1, y: 0, delay: 0.06 * i, duration: 0.45, ease: 'power2.out' });
        });
      }
      // add subtle light rays
      const rays = document.createElement('div');
      rays.className = 'reveal-rays pointer-events-none';
      rays.style.position = 'fixed';
      rays.style.inset = '0';
      rays.style.backgroundImage = 'radial-gradient(closest-side at 50% 40%, rgba(255,255,255,0.06), transparent 30%)';
      rays.style.mixBlendMode = 'screen';
      document.body.appendChild(rays);

      // photo float animation
      try {
        const container = document.createElement('div');
        container.className = 'reveal-photos pointer-events-none';
        document.body.appendChild(container);
        const photoCount = 8;
        const photos: HTMLImageElement[] = [];
        for (let i = 0; i < photoCount; i++) {
          const img = document.createElement('img');
          img.src = '/images/memory-001.webp';
          img.style.position = 'absolute';
          img.style.width = `${80 + Math.floor(Math.random() * 120)}px`;
          img.style.left = `${50 + Math.random() * 400}px`;
          img.style.top = `${50 + Math.random() * 200}px`;
          img.style.opacity = '0';
          img.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 30 - 15}deg)`;
          img.className = 'rounded shadow-xl';
          container.appendChild(img);
          photos.push(img);
        }
        photos.forEach((p, i) => {
          gsap.to(p, { opacity: 1, y: -120 - i * 6, x: (i - 4) * 18, scale: 1, duration: 1.1 + i * 0.06, delay: 0.05 * i, ease: 'power3.out' });
        });
        setTimeout(() => {
          gsap.to(photos, { opacity: 0, duration: 0.9, stagger: 0.03 });
          setTimeout(() => container.remove(), 1200);
          if (rays && rays.parentNode) rays.parentNode.removeChild(rays);
        }, 1200);
      } catch (e) {
        /* ignore DOM errors */
      }

      await controls.start({ opacity: 0, transition: { duration: 0.8 } });
      // small wait for loading sequence
      setTimeout(() => {
        setLoading(false);
        try {
          router.push('/beginning');
        } catch (e) {
          window.location.href = '/beginning';
        }
      }, 900);
    }
    seq();
  }, []);

  return (
    <>
      {loading ? <LoadingSequence onComplete={() => setLoading(false)} /> : null}
      <motion.div initial={{ opacity: 0 }} animate={controls} className="fixed inset-0 z-40 flex items-center justify-center pointer-events-none">
        <div className="text-center text-white pointer-events-none">
          <motion.h2 initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.9 }} className="text-6xl font-display gradient-text">HAPPY BIRTHDAY</motion.h2>
        </div>
      </motion.div>
    </>
  );
}
