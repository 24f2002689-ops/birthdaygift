"use client";
import React from 'react';

export function QuizProgress({ index, total }: { index: number; total: number }) {
  const pct = Math.round(((index + 1) / total) * 100);
  return (
    <div className="mb-4">
      <div className="text-sm text-white/70">QUESTION {index + 1} / {total}</div>
      <div className="w-full bg-white/6 h-2 rounded mt-2">
        <div className="h-2 rounded bg-cyan-400" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
