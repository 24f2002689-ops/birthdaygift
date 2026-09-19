"use client";
import React, { useEffect } from 'react';

export function MediaLightbox({ src, type = 'image', onClose }: { src: string; type?: 'image' | 'video'; onClose: () => void }) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={onClose}>
      <div className="glass p-4 rounded-md max-w-4xl max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
        {type === 'image' ? <img src={src} alt="media" className="max-w-full max-h-[80vh] mx-auto" /> : <video src={src} controls className="max-w-full max-h-[80vh] mx-auto" />}
        <div className="text-right mt-3">
          <button onClick={onClose} className="px-3 py-2 bg-white/6 rounded">Close</button>
        </div>
      </div>
    </div>
  );
}
