import React from 'react';
import { motion } from 'framer-motion';

export function AnimatedText({ text, className = '' }: { text: string; className?: string }) {
  const words = text.split(' ');
  return (
    <motion.h1 initial="hidden" animate="visible" className={className + ' heading-animated'}>
      {words.map((w, i) => (
        <motion.span key={i} initial={{ y: 18, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.04, duration: 0.45 }} style={{ display: 'inline-block', marginRight: i < words.length - 1 ? 6 : 0 }}>
          {w}
        </motion.span>
      ))}
    </motion.h1>
  );
}
