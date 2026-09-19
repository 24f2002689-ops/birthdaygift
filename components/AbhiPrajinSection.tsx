"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Mail, Play, VolumeX, ArrowRight, Sparkles, ZoomIn, X, Flame } from 'lucide-react';
import { LetterModal } from './LetterModal';

interface AbhiPrajinSectionProps {
  onNext: () => void;
}

const squadPhotos = [
  { src: '/mahi2.jpeg', title: 'The Unfiltered Brotherhood', caption: 'Never a dull moment' },
  { src: '/mahi3.jpeg', title: 'Late Night Squad Sessions', caption: 'Tea, talk & infinite plans' },
  { src: '/mahi4.jpeg', title: 'Campus Shenanigans', caption: 'Roaming around with zero stress' },
  { src: '/mahi6.jpeg', title: 'Pure Chaos & Comedy', caption: 'The face of zero limits' },
  { src: '/mahi7.jpeg', title: 'Semester Survival Trio', caption: 'Passing exams together' },
  { src: '/mahi8.jpeg', title: 'Unbreakable Bond', caption: 'Through every high and low' },
  { src: '/mahi9.jpeg', title: 'The Modern Era', caption: 'Leveling up together' },
  { src: '/mahi10.jpeg', title: 'Day 1 Energy', caption: 'Still as crazy as day one' },
];

const ABHI_PRAJIN_LETTER = [
  "Yo Mahi da,",
  "HAPPY 20TH BIRTHDAY MACHA! 🎂🔥",
  "Where do we even start with you? You walked into our college lives and somehow turned every single ordinary day into a comedy show. Half the time we're laughing at your jokes, and the other half we're laughing at whatever unhinged stuff you just did.",
  "From Prajin: 'Bro, you're the brother I never knew I needed. From sitting together on random benches in 1st sem to planning outings, fighting over canteen bills, and surviving 3rd sem exams together, you've been a rock solid friend. Thanks for always being there and keeping it 100% real.'",
  "From Abhi: 'Mahi, you are genuinely the life of the group. The energy drops to zero when you're not around. Thanks for the endless roasts, the late-night talks, and always making sure everyone is having a good time.'",
  "Turning 20 is a big milestone — you're officially leaving the teen years behind. But whatever happens, don't ever change your energy, your humor, or your kindness.",
  "We got your back for life, da. Here's to twenty more years of madness, road trips, and conquering everything you set your mind to!",
  "Much love and respect from your brothers."
];

export function AbhiPrajinSection({ onNext }: AbhiPrajinSectionProps) {
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <div className="w-full max-w-3xl mx-auto space-y-6 md:space-y-8">
      {/* Header */}
      <div className="text-center space-y-1.5">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass text-[11px] tracking-widest uppercase text-violet-400 font-semibold">
          <Flame className="w-3 h-3 text-violet-400 fill-violet-400" />
          The Trio Brotherhood
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black gradient-text">
          Abhi & Prajin&apos;s Vault
        </h2>
        <p className="text-white/60 text-xs sm:text-sm max-w-md mx-auto">
          Our joint letter to Mahi, the trio video archives, and memories.
        </p>
      </div>

      {/* Letter Trigger Box */}
      <div 
        onClick={() => setIsLetterOpen(true)}
        className="glass-card rounded-2xl p-5 sm:p-6 text-center cursor-pointer border border-violet-500/30 hover:border-violet-500/60 transition-all hover:scale-[1.01] relative overflow-hidden group shadow-xl shadow-violet-900/20"
        style={{
          background: 'linear-gradient(135deg, rgba(20, 15, 35, 0.6), rgba(10, 15, 30, 0.8))'
        }}
      >
        <div className="flex flex-col items-center gap-3 relative z-10">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-violet-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-violet-500/40 group-hover:scale-105 transition-transform animate-float-2">
            <Mail className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
          </div>

          <div className="space-y-0.5">
            <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-violet-300 transition-colors">
              Open Abhi & Prajin&apos;s Letter ✉️
            </h3>
            <p className="text-xs text-violet-200/70">
              Tap to open and read our joint letter
            </p>
          </div>

          <span className="px-4 py-1.5 rounded-full bg-violet-500/20 border border-violet-500/40 text-violet-300 text-xs font-semibold uppercase tracking-wider group-hover:bg-violet-600 group-hover:text-white transition-all">
            Read Joint Letter 🔥
          </span>
        </div>
      </div>

      {/* Videos Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Main Trio Video */}
        <div className="glass-card rounded-2xl p-4 space-y-2.5 border border-white/10 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-violet-400 font-bold text-xs uppercase tracking-wider">
              <Play className="w-3.5 h-3.5 fill-violet-400" />
              The Trio Memory
            </div>
            <span className="text-[10px] text-white/40">Abhi, Prajin & Mahi</span>
          </div>

          <div className="relative w-full rounded-xl overflow-hidden bg-black/60 border border-white/10 aspect-video">
            <video
              src="/trio_memory_vid.mp4"
              controls
              playsInline
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-[11px] text-white/50 text-center">
            A real candid capture of our madness
          </p>
        </div>

        {/* Secondary Muted Video */}
        <div className="glass-card rounded-2xl p-4 space-y-2.5 border border-white/10 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-cyan-400 font-bold text-xs uppercase tracking-wider">
              <VolumeX className="w-3.5 h-3.5" />
              Behind the Scenes (Muted)
            </div>
            <span className="text-[10px] text-white/40">Vibes only</span>
          </div>

          <div className="relative w-full rounded-xl overflow-hidden bg-black/60 border border-white/10 aspect-video">
            <video
              src="/abhi_prajin_muted_vid.mp4"
              controls
              muted
              playsInline
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-[11px] text-white/50 text-center">
            Muted reel — unmute if you dare!
          </p>
        </div>
      </div>

      {/* Squad Photo Vault */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-violet-400" />
            Squad Moments Gallery
          </h3>
          <span className="text-[11px] text-white/40">8 Highlights</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {squadPhotos.map((photo, index) => (
            <div
              key={index}
              onClick={() => setSelectedPhoto(photo.src)}
              className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group border border-white/10 glass-card"
            >
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-2">
                <p className="text-white font-bold text-[11px] line-clamp-1">{photo.title}</p>
                <p className="text-violet-200/70 text-[9px] line-clamp-1">{photo.caption}</p>
              </div>
              <div className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-3 h-3 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Next Step Action */}
      <div className="pt-4 text-center">
        <button
          onClick={onNext}
          className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-white font-bold text-xs sm:text-sm md:text-base bg-gradient-to-r from-amber-500 via-pink-500 to-violet-600 hover:scale-105 transition-all shadow-lg shadow-amber-500/30"
        >
          <span>Next: Grand Birthday Tribute 🎂</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Letter Modal */}
      <LetterModal
        isOpen={isLetterOpen}
        onClose={() => setIsLetterOpen(false)}
        title="Joint Letter for Mahendran"
        sender="Abhi & Prajin"
        type="letter"
        content={ABHI_PRAJIN_LETTER}
        signature="Abhi & Prajin 🔥"
      />

      {/* Photo Lightbox */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-2xl max-h-[80vh] w-full h-full flex items-center justify-center">
            <Image
              src={selectedPhoto}
              alt="Zoomed Photo"
              fill
              className="object-contain rounded-2xl"
            />
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-2 right-2 w-9 h-9 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/40"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
