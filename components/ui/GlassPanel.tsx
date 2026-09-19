import React from 'react';

export function GlassPanel({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`glass rounded-2xl p-6 shadow-2xl ${className}`}>
      {children}
    </div>
  );
}
