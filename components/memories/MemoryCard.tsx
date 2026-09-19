"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Memory } from '../../types';

export function MemoryCard({ memory, onOpen }: { memory: Memory; onOpen: (m: Memory) => void }) {
  const ref = useRef<HTMLDivElement | null>(null);

  function handleMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width / 2)) / rect.width;
    const dy = (e.clientY - (rect.top + rect.height / 2)) / rect.height;
    el.style.transform = `perspective(600px) rotateX(${(-dy * 6).toFixed(2)}deg) rotateY(${(dx * 6).toFixed(2)}deg) translateZ(6px)`;
  }

  function handleLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = '';
  }

  return (
    <motion.div
      ref={ref}
      className="glass rounded-lg overflow-hidden cursor-pointer transform-gpu will-change-transform"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={() => onOpen(memory)}
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 130, damping: 14 }}
    >
      {memory.image ? (
        <div className="relative w-full h-60">
          <Image src={memory.image} alt={memory.title} fill style={{ objectFit: 'cover' }} />
        </div>
      ) : null}
      <div className="p-4">
        <div className="text-sm text-white/70">{memory.date}</div>
        <div className="font-semibold text-lg gradient-text">{memory.title}</div>
        {memory.caption ? <div className="text-sm mt-2 text-white/80">{memory.caption}</div> : null}
      </div>
    </motion.div>
  );
}
