"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Heart, Play, ArrowRight, Sparkles, ZoomIn, X } from 'lucide-react';
import { LetterModal } from './LetterModal';

interface YuvasriSectionProps {
  onNext: () => void;
}

const yuvasriPhotos = [
  { src: '/yuvasri1.jpeg', title: 'Golden Moments', caption: 'Memories filled with laughter' },
  { src: '/yuvasri2.jpeg', title: 'The Unfiltered Vibe', caption: 'Pure chaos & good times' },
  { src: '/yuvasri3.jpeg', title: 'Always There', caption: 'A friendship to cherish' },
  { src: '/yuvasri4.jpeg', title: 'Celebration Days', caption: 'Smiles that never fade' },
];

const YUVASRI_LETTER_CONTENT = [
  "Happy birthday to my lovely man I wish u go greater hights.",
  "epomae me and god will be by your side .eat well stay healthy, epomae sirichutu eru and make everyone around u happy as u do thats what my man does.",
  "cheers to 20 completing your teen ,keep rocking I have always seen u as my motivation,u have never left me alone at my low times .",
  "It's your 3rd birthday we are celebrating together every birthday beside me i will make sure it is something special.",
  "Miss that kuti mahi who I saw in school uniform a caring soul.",
  "I really wana thank you for being with me at all situations u were the reason I smiled every day u have always been my backbone guiding me all way. ❤️"
];

export function YuvasriSection({ onNext }: YuvasriSectionProps) {
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <div className="w-full max-w-3xl mx-auto space-y-6 md:space-y-8">
      {/* Section Header */}
      <div className="text-center space-y-1.5">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass text-[11px] tracking-widest uppercase text-pink-400 font-semibold">
          <Heart className="w-3 h-3 text-pink-400 fill-pink-400" />
          A Dedicated Corner
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black gradient-text-pink">
          From Yuvasri, With Love
        </h2>
        <p className="text-white/60 text-xs sm:text-sm max-w-md mx-auto">
          Personal letter, favorite moments, and our video memory.
        </p>
      </div>

      {/* Interactive Letter Trigger Box */}
      <div 
        onClick={() => setIsLetterOpen(true)}
        className="glass-card rounded-2xl p-5 sm:p-6 text-center cursor-pointer border border-pink-500/30 hover:border-pink-500/60 transition-all hover:scale-[1.01] relative overflow-hidden group shadow-xl shadow-pink-900/20"
        style={{
          background: 'linear-gradient(135deg, rgba(35, 15, 30, 0.6), rgba(20, 10, 25, 0.8))'
        }}
      >
        <div className="flex flex-col items-center gap-3 relative z-10">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-pink-500 to-rose-400 flex items-center justify-center shadow-lg shadow-pink-500/40 group-hover:scale-105 transition-transform animate-float-1">
            <Heart className="w-7 h-7 sm:w-8 sm:h-8 text-white fill-white" />
          </div>

          <div className="space-y-0.5">
            <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-pink-300 transition-colors">
              Open Yuvasri&apos;s Letter 💌
            </h3>
            <p className="text-xs text-pink-200/70">
              Tap to open and read the scrollable letter
            </p>
          </div>

          <span className="px-4 py-1.5 rounded-full bg-pink-500/20 border border-pink-500/40 text-pink-300 text-xs font-semibold uppercase tracking-wider group-hover:bg-pink-500 group-hover:text-white transition-all">
            Read Personal Message 💖
          </span>
        </div>
      </div>

      {/* Video Section: Yuvasri & Mahi */}
      <div className="glass-card rounded-2xl p-4 sm:p-6 space-y-3 border border-white/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-pink-400 font-bold text-xs sm:text-sm uppercase tracking-wider">
            <Play className="w-3.5 h-3.5 fill-pink-400" />
            Special Memory Video
          </div>
          <span className="text-[11px] text-white/40">Yuvasri & Mahi</span>
        </div>

        <div className="relative w-full rounded-xl overflow-hidden bg-black/60 border border-white/10 aspect-video max-h-[380px]">
          <video
            src="/yuva_mahi_vid.mp4"
            controls
            playsInline
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Photo Gallery Grid */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-pink-400" />
            Yuvasri & Mahi Photo Vault
          </h3>
          <span className="text-[11px] text-white/40">4 Photos</span>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
          {yuvasriPhotos.map((photo, index) => (
            <div
              key={index}
              onClick={() => setSelectedPhoto(photo.src)}
              className="relative h-44 sm:h-52 rounded-xl overflow-hidden cursor-pointer group border border-white/10 glass-card"
            >
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-2.5 sm:p-3">
                <p className="text-white font-bold text-xs sm:text-sm line-clamp-1">{photo.title}</p>
                <p className="text-pink-200/70 text-[10px] sm:text-xs line-clamp-1">{photo.caption}</p>
              </div>
              <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
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
          className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-white font-bold text-xs sm:text-sm md:text-base bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 hover:scale-105 transition-all shadow-lg shadow-violet-600/30"
        >
          <span>Next: Abhi & Prajin&apos;s Vault 🔥</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Letter Modal */}
      <LetterModal
        isOpen={isLetterOpen}
        onClose={() => setIsLetterOpen(false)}
        title="Birthday Letter for Mahendran"
        sender="Yuvasri"
        type="heart"
        content={YUVASRI_LETTER_CONTENT}
        signature="Yuvasri"
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
