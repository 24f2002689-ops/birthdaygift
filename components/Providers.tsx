"use client";
import React from 'react';
import { ParticleField } from './effects/ParticleField';
import { LenisScrollTrigger } from './LenisScrollTrigger';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Custom cursor removed to avoid hydration mismatch and use normal system cursor */}
      <ParticleField />
      <LenisScrollTrigger />
      {children}
    </>
  );
}
