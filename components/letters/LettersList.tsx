"use client";
import React, { useEffect, useState } from 'react';
import { letters as lettersData } from '../../data/letters';
import type { Letter } from '../../types';
import { LetterViewer } from './LetterViewer';

export function LettersList() {
  const [letters, setLetters] = useState<Letter[]>([]);
  const [open, setOpen] = useState<Letter | null>(null);

  useEffect(() => {
    // copy static data and apply unlocks from localStorage
    const base = lettersData.map((l) => ({ ...l }));
    try {
      const unlocked = localStorage.getItem('quiz:completed');
      if (unlocked) {
        for (const l of base) {
          if (l.unlockRequirement === 'complete-quiz') l.locked = false;
        }
      }
    } catch (e) {
      // ignore
    }
    setLetters(base);
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {letters.map((l) => (
          <div key={l.id} className="glass p-4 rounded cursor-pointer" onClick={() => !l.locked && setOpen(l)}>
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <div className="font-semibold">{l.title}</div>
                <div className="text-sm text-white/70">{l.subtitle}</div>
              </div>
              <div>
                {l.locked ? <div className="px-3 py-1 bg-red-600/50 rounded">Locked</div> : <div className="px-3 py-1 bg-cyan-600/60 rounded">Open</div>}
              </div>
            </div>
          </div>
        ))}
      </div>

      {open ? <LetterViewer letter={open} onClose={() => setOpen(null)} /> : null}
    </div>
  );
}
