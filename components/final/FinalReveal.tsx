"use client";
import React, { useEffect } from 'react';
import { site } from '../../data/site';
import ConfettiLoader from '../effects/ConfettiLoader';

export default function FinalReveal() {
  useEffect(() => {
    // subtle entrance animation class
    document.body.classList.add('final-reveal-active');
    return () => document.body.classList.remove('final-reveal-active');
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center p-8">
      <ConfettiLoader />
      <div className="max-w-4xl">
        <h1 className="text-7xl md:text-9xl font-display leading-none mb-4 tracking-tight gradient-text">HAPPY<br />BIRTHDAY</h1>
        <div className="text-4xl md:text-6xl font-bold text-white/90 mb-6">{site.friendName}</div>

        <p className="mb-6 text-white/80 max-w-2xl mx-auto">Thank you for being you. Here's to many more memories.</p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-6 items-center justify-center">
          <div className="w-full h-28 md:h-36 bg-gradient-to-br from-[rgba(124,58,237,0.06)] to-[rgba(6,182,212,0.04)] rounded shadow-inner" />
          <div className="w-full h-40 md:h-48 bg-gradient-to-br from-[rgba(244,114,182,0.06)] to-[rgba(99,102,241,0.04)] rounded shadow-inner md:col-span-2" />
          <div className="w-full h-28 md:h-36 bg-gradient-to-br from-[rgba(6,182,212,0.06)] to-[rgba(244,114,182,0.04)] rounded shadow-inner" />
          <div className="w-full h-28 md:h-36 bg-gradient-to-br from-[rgba(124,58,237,0.06)] to-[rgba(6,182,212,0.04)] rounded shadow-inner" />
        </div>
      </div>
    </section>
  );
}
