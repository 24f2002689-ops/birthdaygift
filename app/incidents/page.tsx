"use client";
import React, { useState } from 'react';
import { incidents } from '../../data/incidents';
import { IncidentCard } from '../../components/incidents/IncidentCard';
import { IncidentViewer } from '../../components/incidents/IncidentViewer';

export default function IncidentsPage() {
  const [open, setOpen] = useState<any | null>(null);

  return (
    <main className="min-h-screen p-8 text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-display mb-4">INCIDENT ARCHIVE</h1>
        <p className="mb-6 text-white/70">Evidence has been recovered. Click a case to view details.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {incidents.map((it) => (
            <IncidentCard key={it.id} incident={it} onOpen={(i) => setOpen(i)} />
          ))}
        </div>
      </div>

      {open ? <IncidentViewer incident={open} onClose={() => setOpen(null)} /> : null}
    </main>
  );
}
