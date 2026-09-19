"use client";
import React from 'react';

export function EvidenceCard({ evidence, onOpen }: { evidence: any; onOpen: (e: any) => void }) {
  return (
    <div className="glass p-3 rounded cursor-pointer" onClick={() => onOpen(evidence)}>
      <div className="font-semibold">Evidence</div>
      <div className="text-sm text-white/70 mt-1">{evidence.caption}</div>
      {evidence.type === 'photo' ? <img src={evidence.src} alt={evidence.caption} className="mt-2 w-full rounded object-cover" /> : null}
    </div>
  );
}

export default EvidenceCard;
