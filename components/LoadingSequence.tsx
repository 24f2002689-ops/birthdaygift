"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function LoadingSequence({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let t = 0;
    const id = setInterval(() => {
      t += Math.random() * 12;
      setProgress((p) => Math.min(100, p + Math.random() * 10 + 4));
      if (t > 80) {
        clearInterval(id);
        setTimeout(() => {
          setProgress(100);
          onComplete && onComplete();
        }, 600);
      }
    }, 180);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div className="p-8 glass rounded-lg text-center">
        <div className="mb-4">LOADING MEMORIES...</div>
        <div className="w-72 bg-white/6 rounded-full h-3 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-violet-500 to-pink-500" style={{ width: `${progress}%`, transition: 'width 200ms linear' }} />
        </div>
        <div className="mt-3 text-sm">PREPARING THE ARCHIVE...</div>
      </div>
    </motion.div>
  );
}
