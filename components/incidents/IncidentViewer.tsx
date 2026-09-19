"use client";
import React, { useEffect } from 'react';

export function IncidentViewer({ incident, onClose }: { incident: any; onClose: () => void }) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!incident) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={onClose}>
      <div className="glass p-4 rounded max-w-3xl w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="font-semibold text-lg">CASE #{incident.caseNumber} — {incident.title}</h3>
            <div className="text-sm text-white/70">{incident.date} — {incident.status}</div>
          </div>
          <div>
            <button onClick={onClose} className="px-3 py-1 bg-white/6 rounded">Close</button>
          </div>
        </div>

        <p className="text-sm text-white/80">{incident.description}</p>
        {incident.evidence && incident.evidence.length > 0 ? (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
            {incident.evidence.map((e: any) => (
              <div key={e.id} className="">
                <button onClick={() => { /* open evidence modal if desired */ }} className="w-full">
                  <img src={e.src} alt={e.caption} className="w-full rounded" />
                  <div className="text-xs text-white/70 mt-1">{e.caption}</div>
                </button>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
