"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import Confetti from 'canvas-confetti';
import { Sparkles, RotateCcw, PartyPopper } from 'lucide-react';

interface GrandFinaleSectionProps {
  onRestart: () => void;
}

export function GrandFinaleSection({ onRestart }: GrandFinaleSectionProps) {
  useEffect(() => {
    try {
      Confetti({
        particleCount: 100,
        spread: 90,
        origin: { y: 0.5 },
        colors: ['#a855f7', '#ec4899', '#06b6d4', '#f59e0b', '#10b981'],
      });
    } catch {
      // ignore
    }
  }, []);

  const blastConfetti = () => {
    try {
      Confetti({
        particleCount: 120,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#a855f7', '#ec4899', '#06b6d4', '#f59e0b', '#10b981'],
      });
    } catch {
      // ignore
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6 md:space-y-8 text-center px-2">
      {/* Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass text-[11px] tracking-widest uppercase text-amber-400 font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          Level 20 Unlocked 🔓
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black gradient-text-gold leading-tight">
          Happy 20th Birthday, Buddy! 🎂
        </h2>

        <p className="text-sm sm:text-base text-white/80 max-w-lg mx-auto font-medium leading-relaxed">
          &ldquo;You&apos;re not a teen anymore, so have fun in life, always make people laugh and keep laughing yourself!&rdquo;
        </p>
      </div>

      {/* Hero Centerpiece: Photo with Responsive Floating Badges */}
      <div className="relative max-w-sm mx-auto py-6">
        {/* Glow backdrop */}
        <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/30 via-pink-600/30 to-amber-500/30 rounded-full filter blur-2xl pointer-events-none" />

        {/* Featured Photo Frame */}
        <div className="relative mx-auto w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden glass-card p-1.5 border-2 border-amber-400/40 shadow-xl shadow-amber-500/20">
          <div className="relative w-full h-full rounded-xl overflow-hidden">
            <Image
              src="/mahi_turning20.jpeg"
              alt="Mahi turning 20"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Floating Sticker 1: Top Left */}
        <div className="absolute top-2 -left-2 sm:-left-6 glass px-2.5 py-1 rounded-xl border border-pink-500/40 text-pink-300 font-bold text-[10px] sm:text-xs shadow-lg shadow-pink-900/30 animate-float-1 whitespace-nowrap">
          <span>👴 Officially 20</span>
        </div>

        {/* Floating Sticker 2: Top Right */}
        <div className="absolute top-6 -right-2 sm:-right-6 glass px-2.5 py-1 rounded-xl border border-amber-500/40 text-amber-300 font-bold text-[10px] sm:text-xs shadow-lg shadow-amber-900/30 animate-float-2 whitespace-nowrap">
          <span>🧠 0 Braincells</span>
        </div>

        {/* Floating Sticker 3: Bottom Left */}
        <div className="absolute bottom-10 -left-2 sm:-left-6 glass px-2.5 py-1 rounded-xl border border-cyan-500/40 text-cyan-300 font-bold text-[10px] sm:text-xs shadow-lg shadow-cyan-900/30 animate-float-3 whitespace-nowrap">
          <span>👑 The Legend</span>
        </div>

        {/* Floating Sticker 4: Bottom Right */}
        <div className="absolute bottom-2 -right-2 sm:-right-6 glass px-2.5 py-1 rounded-xl border border-violet-500/40 text-violet-300 font-bold text-[10px] sm:text-xs shadow-lg shadow-violet-900/30 animate-float-4 whitespace-nowrap">
          <span>🔥 Trio MVP</span>
        </div>
      </div>

      {/* Birthday Wish Card */}
      <div className="glass-card rounded-2xl p-4 sm:p-6 max-w-lg mx-auto space-y-2 border border-white/15">
        <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
          From the whole squad — <strong>Prajin</strong>, <strong>Abhi</strong>, and <strong>Yuvasri</strong>:
        </p>
        <p className="text-pink-200/80 text-xs sm:text-sm italic">
          &ldquo;Thank you for being the most dependable, hilarious, and wholesome guy in our lives. May your 20s be filled with endless victories, good health, and peak happiness.&rdquo;
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
        <button
          onClick={blastConfetti}
          className="px-6 py-3 rounded-full font-bold text-xs sm:text-sm bg-gradient-to-r from-amber-500 via-pink-500 to-violet-600 text-white hover:scale-105 transition-all shadow-lg shadow-amber-500/30 flex items-center gap-1.5 glow-btn"
        >
          <PartyPopper className="w-4 h-4" />
          Blast More Confetti! 🎉
        </button>

        <button
          onClick={onRestart}
          className="px-5 py-3 rounded-full font-semibold text-xs sm:text-sm bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-all flex items-center gap-1.5 border border-white/15"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Replay Journey ↺
        </button>
      </div>
    </div>
  );
}
