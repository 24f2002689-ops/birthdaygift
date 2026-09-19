"use client";
import React, { useEffect } from 'react';
import ConfettiLoader from '../effects/ConfettiLoader';

export function QuizResult({ score, total, onRetry }: { score: number; total: number; onRetry: () => void }) {
  const pct = Math.round((score / total) * 100);

  useEffect(() => {
    // Dispatch event to unlock secret content
    const ev = new CustomEvent('quiz:completed', { detail: { score, total, pct } });
    window.dispatchEvent(ev);

    // small confetti fallback using canvas-confetti if available
    try {
      // @ts-ignore
      const confetti = (window as any).confetti;
      if (confetti) confetti({ particleCount: 120, spread: 70, origin: { y: 0.6 } });
    } catch (e) {
      // ignore
    }
  }, [score, total, pct]);

  return (
    <div className="max-w-2xl mx-auto text-center">
      <ConfettiLoader />
      <h2 className="text-3xl font-display mb-4">FRIENDSHIP SCORE</h2>
      <div className="text-6xl font-bold mb-2">{pct}%</div>
      <p className="mb-4">You answered {score} of {total} correctly.</p>
      <div className="flex justify-center gap-3">
        <button onClick={onRetry} className="px-4 py-2 bg-cyan-500 rounded">Retry</button>
      </div>
    </div>
  );
}
