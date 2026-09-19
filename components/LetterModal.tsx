"use client";
import React from 'react';
import { X, Heart, Mail, Sparkles } from 'lucide-react';

interface LetterModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  sender: string;
  type: 'heart' | 'letter';
  content: string[];
  signature: string;
}

export function LetterModal({
  isOpen,
  onClose,
  title,
  sender,
  type,
  content,
  signature,
}: LetterModalProps) {
  if (!isOpen) return null;

  const isHeart = type === 'heart';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-md">
      <div 
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Mid-sized Letter Container */}
      <div 
        className="relative w-full max-w-2xl max-h-[85vh] flex flex-col rounded-3xl overflow-hidden modal-pop z-10"
        style={{
          background: isHeart 
            ? 'linear-gradient(135deg, rgba(30, 15, 28, 0.95), rgba(15, 10, 25, 0.98))'
            : 'linear-gradient(135deg, rgba(20, 18, 35, 0.95), rgba(10, 12, 22, 0.98))',
          border: isHeart 
            ? '1.5px solid rgba(244, 114, 182, 0.3)'
            : '1.5px solid rgba(139, 92, 246, 0.3)',
          boxShadow: isHeart
            ? '0 25px 70px rgba(236, 72, 153, 0.25)'
            : '0 25px 70px rgba(124, 58, 237, 0.25)',
        }}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
              style={{
                background: isHeart 
                  ? 'linear-gradient(135deg, #f472b6, #db2777)'
                  : 'linear-gradient(135deg, #8b5cf6, #6366f1)',
              }}
            >
              {isHeart ? <Heart className="w-5 h-5 text-white fill-white" /> : <Mail className="w-5 h-5 text-white" />}
            </div>
            <div>
              <h3 className="text-lg font-bold text-white tracking-wide">{title}</h3>
              <p className="text-xs text-white/50">From: {sender}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Letter Body */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-4 text-white/85 text-base md:text-lg leading-relaxed relative">
          {/* Subtle watermark / decor */}
          <div className="absolute right-6 top-8 opacity-5 pointer-events-none">
            {isHeart ? <Heart className="w-48 h-48" /> : <Sparkles className="w-48 h-48" />}
          </div>

          {/* Letter text formatted nicely */}
          {content.map((paragraph, index) => (
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
          <div className="pt-6 border-t border-white/10 mt-6 flex justify-end">
            <div className="text-right">
              <p className="text-xs uppercase tracking-widest text-white/40 mb-1">With Love & Respect,</p>
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
        <div className="px-6 py-3 bg-white/[0.02] border-t border-white/10 flex justify-between items-center text-xs text-white/40">
          <span>Scroll to read entire letter</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all font-medium"
          >
            Close Letter
          </button>
        </div>
      </div>
    </div>
  );
}
