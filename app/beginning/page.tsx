import React from 'react';
import { ChapterIntro } from '../../components/ChapterIntro';
import { Timeline } from '../../components/timeline/Timeline';

export default function Beginning() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#081028] via-[#0b1b3a] to-[#2b0b3a] text-white">
      <div className="p-8 max-w-4xl mx-auto">
        <ChapterIntro title="EVERY LEGEND HAS A BEGINNING" subtitle="An animated timeline of our earliest memories." />
        <h2 className="text-3xl gradient-text mt-6 mb-4">Our Story So Far</h2>
        <Timeline />
      </div>
    </section>
  );
}
