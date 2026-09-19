"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Calendar, ArrowRight, MapPin, ZoomIn, X } from 'lucide-react';

interface TimelineSectionProps {
  onNext: () => void;
}

const timelineEvents = [
  {
    id: 1,
    date: 'Feb 2025',
    title: 'The Origin Story — When We Met',
    location: 'College Campus (1st Semester)',
    description: 'Where it all began. Strangers walking into the same lecture hall, finding benches, and accidentally sparking a bond that would redefine our entire college journey.',
    images: [],
    badge: 'Day Zero 🌱',
    color: '#8b5cf6',
  },
  {
    id: 2,
    date: 'Sept 13, 2025',
    title: 'First Outing — Madrasi Movie at PVR Aerohub',
    location: 'PVR Aerohub, Chennai',
    description: 'Our very first official boys outing! Popcorn, non-stop banter, watching Madrasi movie, and laughing so hard during the ride that our stomachs hurt.',
    images: ['/timeline_madrasi1.jpeg', '/timeline_madrasi2.jpeg'],
    badge: 'First Outing 🎬',
    color: '#06b6d4',
  },
  {
    id: 3,
    date: 'Dec 2025',
    title: 'Second Outing — La Luna Rooftop',
    location: 'La Luna Rooftop Cafe',
    description: '3rd semester era in full swing. Chilling under the evening lights at La Luna rooftop, sharing deep talks, future plans, and celebrating how close the squad had become.',
    images: ['/timeline_laluna.jpeg'],
    badge: 'Rooftop Vibe 🌙',
    color: '#ec4899',
  },
  {
    id: 4,
    date: 'Feb 2026',
    title: 'Going Out With Yuvasri — The Squad Expands',
    location: 'City Outing & Hangout',
    description: 'February 2026 — An iconic full-day hangout with Yuvasri! Unfiltered laughter, group photos, teasing each other, and making memories that are etched in stone.',
    images: ['/timeline_yuva_outing.jpeg'],
    badge: 'Core Memory 💖',
    color: '#f59e0b',
  },
  {
    id: 5,
    date: 'Sept 2026',
    title: 'Onam 2026 — Still Going Strong',
    location: 'Onam Celebration 2026',
    description: 'September 2026 — Dressed up, celebrating Onam together, and standing as strong as ever. More than friends, we became a family that has each other\'s backs no matter what.',
    images: ['/timeline_onam.jpeg'],
    badge: 'Brotherhood Forever 🌾',
    color: '#10b981',
  },
  {
    id: 6,
    date: 'Future & Beyond',
    title: 'To Be Continued...',
    location: 'Everywhere life takes us',
    description: 'This is only the first volume of the archive. Many more road trips, triumphs, late-night tea talks, and unforgettable adventures are yet to be written.',
    images: [],
    badge: 'Chapter Ongoing 🚀',
    color: '#a855f7',
  },
];

export function TimelineSection({ onNext }: TimelineSectionProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <div className="w-full max-w-3xl mx-auto space-y-6 md:space-y-8">
      {/* Header */}
      <div className="text-center space-y-1.5">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass text-[11px] tracking-widest uppercase text-cyan-400 font-semibold">
          <Calendar className="w-3 h-3" />
          The Chronicles of Mahi (2025 – Present)
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black gradient-text">
          Our Story So Far
        </h2>
        <p className="text-white/60 text-xs sm:text-sm max-w-md mx-auto">
          Every memory, milestone, and moment from day one.
        </p>
      </div>

      {/* Timeline Stream */}
      <div className="relative pl-5 sm:pl-7 border-l-2 border-white/10 space-y-6 sm:space-y-8 ml-2 sm:ml-4">
        {timelineEvents.map((item) => (
          <div key={item.id} className="relative group">
            {/* Timeline Node Icon */}
            <div
              className="absolute -left-[27px] sm:-left-[35px] top-1.5 w-5 h-5 sm:w-7 sm:h-7 rounded-full border-2 flex items-center justify-center shadow-md transition-transform group-hover:scale-110"
              style={{
                borderColor: item.color,
                backgroundColor: '#05060b',
                boxShadow: `0 0 10px ${item.color}60`,
              }}
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: item.color }}
              />
            </div>

            {/* Content Card */}
            <div className="glass-card rounded-2xl p-4 sm:p-6 space-y-3 border border-white/10 hover:border-white/25 transition-all">
              <div className="flex flex-wrap items-center justify-between gap-1.5">
                <span
                  className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider"
                  style={{
                    backgroundColor: `${item.color}20`,
                    color: item.color,
                    border: `1px solid ${item.color}40`,
                  }}
                >
                  {item.badge}
                </span>
                <span className="text-[11px] text-white/50 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-white/40" />
                  {item.date}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                {item.title}
              </h3>

              <p className="text-[11px] text-white/50 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-pink-400" />
                {item.location}
              </p>

              <p className="text-white/75 text-xs sm:text-sm leading-relaxed">
                {item.description}
              </p>

              {/* Photos attached to milestone */}
              {item.images.length > 0 && (
                <div className="pt-1 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {item.images.map((imgSrc, imgIdx) => (
                    <div
                      key={imgIdx}
                      onClick={() => setSelectedPhoto(imgSrc)}
                      className="relative h-40 sm:h-44 rounded-xl overflow-hidden cursor-pointer group/img border border-white/10"
                    >
                      <Image
                        src={imgSrc}
                        alt={`${item.title} photo`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover/img:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="p-1.5 rounded-full bg-black/60 text-white flex items-center gap-1 text-[11px]">
                          <ZoomIn className="w-3.5 h-3.5" /> Tap to view
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Next Step Action */}
      <div className="pt-4 text-center">
        <button
          onClick={onNext}
          className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-white font-bold text-xs sm:text-sm md:text-base bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 hover:scale-105 transition-all shadow-lg shadow-pink-600/30"
        >
          <span>Next: Message From Yuvasri 💖</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Photo Lightbox Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-2xl max-h-[80vh] w-full h-full flex items-center justify-center">
            <Image
              src={selectedPhoto}
              alt="Timeline Zoomed"
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
