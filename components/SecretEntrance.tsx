"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MagneticButton } from './MagneticButton';
import RevealSequence from './RevealSequence';

export default function SecretEntrance() {
  const [start, setStart] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center relative text-white overflow-hidden">
      <div className="absolute inset-0 gradient-shift -z-10" />
      <div className="max-w-3xl text-center p-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="text-sm uppercase tracking-widest text-white/70 mb-4">A very important file has been discovered.</div>
          <motion.h1 className="text-6xl font-display gradient-text mb-6" initial={{ filter: 'blur(6px)', opacity: 0 }} animate={{ filter: 'blur(0px)', opacity: 1 }} transition={{ duration: 1.2, delay: 0.2 }}>ENTER THE ARCHIVE</motion.h1>
          <p className="mb-8 text-lg text-white/80">Click to begin the journey. Sound and visual effects are optional.</p>
          <div className="mt-6">
            <div className="text-2xl reveal-name mb-3">[FRIEND_NAME]</div>
            <MagneticButton
            className="px-6 py-3 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 text-white shadow-xl"
            onClick={() => {
              // trigger small DOM event for particle burst
              window.dispatchEvent(new CustomEvent('archive:enter'));
              setStart(true);
            }}
          >
            Enter the Archive
          </MagneticButton>
          </div>
        </motion.div>
      </div>

      {start ? <RevealSequence /> : null}
    </div>
  );
}
