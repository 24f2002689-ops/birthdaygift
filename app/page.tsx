"use client";
import React, { useState, useEffect } from 'react';
import { Sparkles, Gift, ArrowRight, ArrowLeft, Heart, Flame, Calendar, Trophy } from 'lucide-react';
import Confetti from 'canvas-confetti';
import { FriendshipQuiz } from '../components/FriendshipQuiz';
import { TimelineSection } from '../components/TimelineSection';
import { YuvasriSection } from '../components/YuvasriSection';
import { AbhiPrajinSection } from '../components/AbhiPrajinSection';
import { GrandFinaleSection } from '../components/GrandFinaleSection';

const STAGES = [
  { id: 0, title: 'Home', icon: Gift },
  { id: 1, title: 'Quiz', icon: Sparkles },
  { id: 2, title: 'Story', icon: Calendar },
  { id: 3, title: 'Yuvasri', icon: Heart },
  { id: 4, title: 'A&P', icon: Flame },
  { id: 5, title: 'Finale', icon: Trophy },
];

export default function MasterBirthdayExperience() {
  const [currentStage, setCurrentStage] = useState(0);
  const [heroMounted, setHeroMounted] = useState(false);

  useEffect(() => {
    setHeroMounted(true);
    try {
      const saved = sessionStorage.getItem('mahi_current_stage');
      if (saved) {
        setCurrentStage(Number(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  const goToStage = (stageNum: number) => {
    setCurrentStage(stageNum);
    try {
      sessionStorage.setItem('mahi_current_stage', String(stageNum));
    } catch {
      // ignore
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  const handleOpenGift = () => {
    try {
      Confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#a855f7', '#ec4899', '#06b6d4', '#f59e0b'],
      });
    } catch {
      // ignore
    }
    goToStage(1);
  };

  return (
    <main className="min-h-screen relative flex flex-col items-center justify-start text-white overflow-x-hidden pt-4 sm:pt-6 md:pt-8 pb-24 px-3 sm:px-4">
      {/* Background ambient glow */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div 
          className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[350px] sm:w-[600px] md:w-[800px] h-[350px] sm:h-[500px] rounded-full filter blur-[90px] opacity-35"
          style={{
            background: currentStage === 3 
              ? 'radial-gradient(circle, rgba(236,72,153,0.3) 0%, rgba(139,92,246,0.1) 50%, transparent 80%)'
              : currentStage === 4
              ? 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, rgba(6,182,212,0.15) 50%, transparent 80%)'
              : 'radial-gradient(circle, rgba(124,58,237,0.3) 0%, rgba(236,72,153,0.15) 50%, transparent 80%)',
          }}
        />
      </div>

      {/* Main Container */}
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
        
        {/* STAGE 0: HERO LANDING */}
        {currentStage === 0 && (
          <div className="w-full text-center space-y-6 sm:space-y-8 py-4 sm:py-6">
            {/* Top Badge */}
            <div className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full glass border border-amber-400/30 text-amber-300 font-bold text-[11px] sm:text-xs uppercase tracking-wider transition-all duration-500 ${heroMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>September 19, 2026 · Level 20</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            </div>

            {/* Single clean line for HAPPY BIRTHDAY */}
            <div className="space-y-1 sm:space-y-2">
              <h1 className="w-full flex justify-center items-center">
                <span 
                  className={`whitespace-nowrap font-black text-3xl sm:text-5xl md:text-7xl lg:text-8xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-300 transition-all duration-700 drop-shadow-xl ${heroMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  HAPPY BIRTHDAY
                </span>
              </h1>

              <div>
                <span 
                  className="text-4xl sm:text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-pink-500 to-violet-400 leading-tight inline-block"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  MAHENDRAN
                </span>
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-white/70 text-xs sm:text-base max-w-md mx-auto font-medium px-2">
              Curated with pure love & endless roasts by{' '}
              <span className="text-violet-300 font-bold">Prajin</span>,{' '}
              <span className="text-cyan-300 font-bold">Abhi</span>, and{' '}
              <span className="text-pink-300 font-bold">Yuvasri</span>.
            </p>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 max-w-2xl mx-auto pt-2">
              <div className="glass-card rounded-xl p-3.5 border border-violet-500/20 text-left space-y-0.5 animate-float-1">
                <div className="text-xl">⏳</div>
                <div className="font-bold text-white text-xs sm:text-sm">Chronicles 2025–2026</div>
                <div className="text-[11px] text-white/50">Our journey from day one</div>
              </div>

              <div className="glass-card rounded-xl p-3.5 border border-pink-500/20 text-left space-y-0.5 animate-float-2">
                <div className="text-xl">💌</div>
                <div className="font-bold text-white text-xs sm:text-sm">Personal Letter Vault</div>
                <div className="text-[11px] text-white/50">Messages from the squad</div>
              </div>

              <div className="glass-card rounded-xl p-3.5 border border-cyan-500/20 text-left space-y-0.5 animate-float-3">
                <div className="text-xl">🎬</div>
                <div className="font-bold text-white text-xs sm:text-sm">Memory Reels</div>
                <div className="text-[11px] text-white/50">Photos & video archives</div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-2">
              <button
                onClick={handleOpenGift}
                className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-base sm:text-lg bg-gradient-to-r from-violet-600 via-pink-600 to-amber-500 hover:scale-105 transition-all shadow-xl shadow-pink-600/30 glow-btn"
              >
                <Gift className="w-5 h-5 animate-bounce" />
                <span>Open Your Birthday Gift 🎁</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        )}

        {/* STAGE 1: FRIENDSHIP QUIZ */}
        {currentStage === 1 && (
          <div className="w-full modal-pop">
            <FriendshipQuiz onComplete={() => goToStage(2)} />
          </div>
        )}

        {/* STAGE 2: TIMELINE */}
        {currentStage === 2 && (
          <div className="w-full modal-pop">
            <TimelineSection onNext={() => goToStage(3)} />
          </div>
        )}

        {/* STAGE 3: YUVASRI SECTION */}
        {currentStage === 3 && (
          <div className="w-full modal-pop">
            <YuvasriSection onNext={() => goToStage(4)} />
          </div>
        )}

        {/* STAGE 4: ABHI & PRAJIN SECTION */}
        {currentStage === 4 && (
          <div className="w-full modal-pop">
            <AbhiPrajinSection onNext={() => goToStage(5)} />
          </div>
        )}

        {/* STAGE 5: GRAND FINALE */}
        {currentStage === 5 && (
          <div className="w-full modal-pop">
            <GrandFinaleSection onRestart={() => goToStage(0)} />
          </div>
        )}
      </div>

      {/* Persistent Bottom Stepper */}
      <footer className="fixed bottom-3 left-0 right-0 z-40 flex justify-center px-2 pointer-events-none">
        <div className="glass-card pointer-events-auto px-3 sm:px-4 py-2 rounded-full flex items-center gap-1.5 sm:gap-3 shadow-2xl border border-white/15 backdrop-blur-xl max-w-full">
          {/* Back Step Button */}
          {currentStage > 0 && (
            <button
              onClick={() => goToStage(currentStage - 1)}
              className="p-1 sm:p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors flex items-center justify-center flex-shrink-0"
              title="Previous section"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
          )}

          {/* Stepper Dots & Labels */}
          <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto no-scrollbar">
            {STAGES.map((s) => {
              const isActive = currentStage === s.id;
              const isPassed = currentStage > s.id;
              const Icon = s.icon;
              return (
                <button
                  key={s.id}
                  onClick={() => s.id <= currentStage && goToStage(s.id)}
                  disabled={s.id > currentStage}
                  className={`flex items-center gap-1 px-2 sm:px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all flex-shrink-0 ${
                    isActive
                      ? 'bg-gradient-to-r from-violet-600 to-pink-600 text-white shadow-md shadow-pink-600/30'
                      : isPassed
                      ? 'bg-white/10 text-white/70 hover:bg-white/20 cursor-pointer'
                      : 'text-white/30 cursor-not-allowed'
                  }`}
                >
                  <Icon className="w-3 h-3" />
                  <span className={isActive ? 'inline' : 'hidden md:inline'}>{s.title}</span>
                </button>
              );
            })}
          </div>

          {/* Next Step Button (if already completed or on story/letter stages) */}
          {currentStage > 1 && currentStage < 5 && (
            <button
              onClick={() => goToStage(currentStage + 1)}
              className="p-1 sm:p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors flex items-center justify-center flex-shrink-0"
              title="Next section"
            >
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </footer>
    </main>
  );
}
