"use client";
import React from 'react';

export function IncidentCard({ incident, onOpen }: { incident: any; onOpen: (i: any) => void }) {
  return (
    <div className="glass p-4 rounded cursor-pointer" onClick={() => onOpen(incident)}>
      <div className="font-semibold">CASE #{incident.caseNumber} — {incident.title}</div>
      <div className="text-sm text-white/70">{incident.date} — {incident.status}</div>
      <div className="mt-2 text-sm text-white/80">{incident.description}</div>
    </div>
  );
}
