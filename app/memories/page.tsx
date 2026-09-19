import React, { useState } from 'react';
import { MasonryGallery } from '../../components/memories/MasonryGallery';

export default function MemoriesPage() {
  return (
    <main className="min-h-screen text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-display mb-6">THE MEMORY VAULT</h1>
        <p className="mb-6 text-white/70">The moments that actually mattered.</p>
        <MasonryGallery />
      </div>
    </main>
  );
}
