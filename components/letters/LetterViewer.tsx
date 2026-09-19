"use client";
import React, { useEffect } from 'react';
import type { Letter } from '../../types';

export function LetterViewer({ letter, onClose }: { letter: Letter; onClose: () => void }) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={onClose}>
      <div className="glass rounded p-6 max-w-3xl w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-display">{letter.title}</h3>
            {letter.subtitle ? <div className="text-sm text-white/70">{letter.subtitle}</div> : null}
          </div>
          <div>
            <button onClick={onClose} className="px-3 py-1 bg-white/6 rounded">Close</button>
          </div>
        </div>

        {letter.image ? <img src={letter.image} alt={letter.title} className="w-full rounded mb-4 object-cover" /> : null}

        <div className="prose prose-invert max-w-none text-sm" dangerouslySetInnerHTML={{ __html: letter.content ?? '' }} />
      </div>
    </div>
  );
}
