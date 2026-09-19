"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import type { Memory } from '../../types';

export function MemoryModal({ memory, onClose }: { memory: Memory; onClose: () => void }) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={onClose}>
      <div className="glass rounded p-4 max-w-4xl w-full max-h-[90vh] overflow-auto transform-gpu" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="font-semibold text-lg gradient-text">{memory.title}</h3>
            <div className="text-sm text-white/70">{memory.date}</div>
          </div>
          <div>
            <button onClick={onClose} className="px-3 py-1 bg-white/6 rounded shadow-sm">Close</button>
          </div>
        </div>

        {memory.video ? (
          <video src={memory.video} controls poster={memory.images?.[0] ?? ''} className="w-full rounded mb-3" />
        ) : memory.images && memory.images.length > 0 ? (
          <div className="w-full h-96 relative mb-3">
            <Image src={memory.images[0]} alt={memory.title} fill style={{ objectFit: 'cover' }} />
          </div>
        ) : memory.image ? (
          <div className="w-full h-96 relative mb-3">
            <Image src={memory.image} alt={memory.title} fill style={{ objectFit: 'cover' }} />
          </div>
        ) : null}

        {memory.description ? <p className="text-sm text-white/80">{memory.description}</p> : null}
        {memory.caption ? <div className="text-xs mt-2 text-white/60">{memory.caption}</div> : null}
      </div>
    </div>
  );
}
