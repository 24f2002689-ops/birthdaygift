"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function ChapterTransition({ chapter, title }: { chapter: string; title: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="fixed inset-0 flex items-center justify-center pointer-events-none z-50">
      <div className="text-center text-white">
        <div className="text-sm opacity-70">CHAPTER {chapter}</div>
        <h2 className="text-4xl font-display mt-2">{title}</h2>
      </div>
    </motion.div>
  );
}
