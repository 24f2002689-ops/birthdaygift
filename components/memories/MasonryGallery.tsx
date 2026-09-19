"use client";
import React from 'react';
import { MemoryCard } from './MemoryCard';
import { memories } from '../../data/memories';
import type { Memory } from '../../types';
import { useState } from 'react';
import { MemoryModal } from './MemoryModal';

export function MasonryGallery({ onOpen }: { onOpen?: (m: Memory) => void }) {
  const [selected, setSelected] = useState<Memory | null>(null);

  // group memories by category for distinct sections
  const groups = memories.reduce((acc: Record<string, Memory[]>, m) => {
    acc[m.category] = acc[m.category] || [];
    acc[m.category].push(m);
    return acc;
  }, {} as Record<string, Memory[]>);

  // listen for quiz completion to show subtle highlight on gallery (example usage)
  React.useEffect(() => {
    function onComplete() {
      // simple visual pulse: add a class to body and remove after timeout
      document.body.classList.add('quiz-complete-pulse');
      setTimeout(() => document.body.classList.remove('quiz-complete-pulse'), 1600);
    }
    window.addEventListener('quiz:completed', onComplete as EventListener);
    return () => window.removeEventListener('quiz:completed', onComplete as EventListener);
  }, []);

  return (
    <>
      <div className="p-4">
        {Object.keys(groups).map((category) => (
          <section key={category} className="mb-8">
            <h3 className="mb-4 font-semibold text-xl gradient-text">{category.replace('-', ' ').toUpperCase()}</h3>
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
              {groups[category].map((m) => (
                <div key={m.id} className="break-inside-avoid mb-4">
                  <MemoryCard memory={m} onOpen={(mm) => { setSelected(mm); onOpen && onOpen(mm); }} />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
      {selected ? <MemoryModal memory={selected} onClose={() => setSelected(null)} /> : null}
    </>
  );
}
