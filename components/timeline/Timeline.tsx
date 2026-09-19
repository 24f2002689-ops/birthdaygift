"use client";
import React from 'react';
import { TimelineItem } from './TimelineItem';
import { memories } from '../../data/memories';

export function Timeline() {
  return (
    <div className="max-w-3xl mx-auto py-12">
      {memories.map((m, i) => (
        <TimelineItem
          key={m.id}
          index={i}
          year={m.date}
          title={m.title}
          image={m.image ?? undefined}
          description={m.description ?? ''}
        />
      ))}
    </div>
  );
}
