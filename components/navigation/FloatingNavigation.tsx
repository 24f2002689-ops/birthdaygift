import React from 'react';
import Link from 'next/link';

export function FloatingNavigation() {
  return (
    <nav className="fixed top-6 right-6 glass p-3 rounded-full shadow-lg">
      <ul className="flex gap-2 items-center">
        <li><Link href="/" className="text-sm px-3 gradient-text">Home</Link></li>
        <li><Link href="/beginning" className="text-sm px-3 text-white/80">Beginning</Link></li>
        <li><Link href="/quiz" className="text-sm px-3 text-white/80">Quiz</Link></li>
      </ul>
    </nav>
  );
}
