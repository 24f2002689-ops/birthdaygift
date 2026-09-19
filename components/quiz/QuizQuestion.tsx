"use client";
import React from 'react';
import type { Question } from '../../types';

export function QuizQuestion({ q, selected, onSelect }: { q: Question; selected: any; onSelect: (v: any) => void }) {
  if (q.type === 'multiple-choice' || q.type === 'image-choice' || q.type === 'true-false') {
    return (
      <div className="space-y-3">
        <div className="text-lg font-semibold">{q.question}</div>
        {q.type === 'image-choice' ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {(q.options ?? []).map((opt: any, i: number) => (
              <button key={i} onClick={() => onSelect(i)} className={`p-0 rounded overflow-hidden border ${selected === i ? 'ring-2 ring-cyan-400' : 'border-white/6'}`}>
                <img src={typeof opt === 'string' ? opt : opt.src} alt={`option-${i}`} className="w-full h-28 object-cover" />
              </button>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {(q.options ?? []).map((opt, i) => (
              <button
                key={opt}
                onClick={() => onSelect(q.type === 'true-false' ? (i === 0 ? true : false) : i)}
                className={`p-3 rounded glass text-left ${selected === (q.type === 'true-false' ? (i === 0 ? true : false) : i) ? 'ring-2 ring-cyan-400' : ''}`}
              >
                {opt}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  return <div>Question type not implemented yet.</div>;
}
