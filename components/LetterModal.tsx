"use client";
import React from 'react';
import { X, Heart, Mail, Sparkles } from 'lucide-react';

interface LetterSection {
  from?: string;
  fontFamily?: string;
  fontSize?: string;
  textColor?: string;
  paragraphs: string[];
}

interface LetterModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  sender: string;
  type: 'heart' | 'letter';
  content?: string[];
  sections?: LetterSection[];
  signature: string;
}

export function LetterModal({
  isOpen,
  onClose,
  title,
  sender,
  type,
  content,
  sections,
  signature,
}: LetterModalProps) {
  if (!isOpen) return null;

  const isHeart = type === 'heart';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-black/85 backdrop-blur-md">
      <div 
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Mid-sized Letter Container */}
      <div 
        className="relative w-full max-w-2xl max-h-[88vh] flex flex-col rounded-3xl overflow-hidden modal-pop z-10"
        style={{
          background: isHeart 
            ? 'linear-gradient(135deg, rgba(28, 14, 26, 0.97), rgba(16, 10, 24, 0.98))'
            : 'linear-gradient(135deg, rgba(18, 16, 32, 0.97), rgba(10, 12, 22, 0.98))',
          border: isHeart 
            ? '1.5px solid rgba(244, 114, 182, 0.35)'
            : '1.5px solid rgba(139, 92, 246, 0.35)',
          boxShadow: isHeart
            ? '0 25px 70px rgba(236, 72, 153, 0.25)'
            : '0 25px 70px rgba(124, 58, 237, 0.25)',
        }}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 sm:px-6 sm:py-4 border-b border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div 
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-lg flex-shrink-0"
              style={{
                background: isHeart 
                  ? 'linear-gradient(135deg, #f472b6, #db2777)'
                  : 'linear-gradient(135deg, #8b5cf6, #6366f1)',
              }}
            >
              {isHeart ? <Heart className="w-5 h-5 text-white fill-white" /> : <Mail className="w-5 h-5 text-white" />}
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white tracking-wide">{title}</h3>
              <p className="text-[11px] sm:text-xs text-white/50">From: {sender}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Scrollable Letter Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-7 md:p-8 space-y-6 text-white/90 leading-relaxed relative">
          <div className="absolute right-6 top-8 opacity-5 pointer-events-none">
            {isHeart ? <Heart className="w-48 h-48" /> : <Sparkles className="w-48 h-48" />}
          </div>

          {/* If structured sections exist (e.g. Prajin & Abhi) */}
          {sections && sections.map((sec, secIdx) => (
            <div 
              key={secIdx}
              className="space-y-3 p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/5 relative z-10"
            >
              {sec.from && (
                <div className="inline-block px-3 py-1 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-300 text-xs font-bold tracking-wider uppercase mb-1">
                  {sec.from}
                </div>
              )}
              {sec.paragraphs.map((p, pIdx) => (
                <p
                  key={pIdx}
                  style={{
                    fontFamily: sec.fontFamily || (isHeart ? "'Caveat', cursive" : "'Inter', sans-serif"),
                    fontSize: sec.fontSize || (isHeart ? '1.3rem' : '1rem'),
                    lineHeight: '1.75',
                    color: sec.textColor || (isHeart ? '#fed7e2' : '#e2e8f0'),
                  }}
                >
                  {p}
                </p>
              ))}
            </div>
          ))}

          {/* Simple array content fallback */}
          {!sections && content && content.map((paragraph, index) => (
            <p 
              key={index}
              className="relative z-10"
              style={{
                fontFamily: isHeart ? "'Caveat', cursive, sans-serif" : "'Inter', sans-serif",
                fontSize: isHeart ? '1.35rem' : '1.05rem',
                lineHeight: isHeart ? '1.8' : '1.7',
                color: isHeart ? '#fed7e2' : '#e2e8f0',
              }}
            >
              {paragraph}
            </p>
          ))}

          {/* Signature section */}
          <div className="pt-5 border-t border-white/10 mt-6 flex justify-end">
            <div className="text-right">
              <p className="text-xs uppercase tracking-widest text-white/50 mb-0.5">With love,</p>
              <p 
                className="text-2xl font-bold gradient-text"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                {signature}
              </p>
            </div>
          </div>
        </div>

        {/* Footer info & close */}
        <div className="px-5 py-2.5 sm:px-6 sm:py-3 bg-white/[0.02] border-t border-white/10 flex justify-between items-center text-[11px] sm:text-xs text-white/40">
          <span>Scroll to read full message</span>
          <button
            onClick={onClose}
            className="px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
