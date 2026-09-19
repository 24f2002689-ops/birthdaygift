"use client";
import React, { useEffect, useState } from 'react';

export function AudioController() {
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.loop = true;
  }, []);

  function toggle() {
    setMuted((m) => {
      const next = !m;
      if (audioRef.current) audioRef.current.muted = next;
      return next;
    });
  }

  function play() {
    if (!audioRef.current) return;
    audioRef.current.play();
    setPlaying(true);
  }

  useEffect(() => {
    function onEnter() {
      // start playback on user interaction
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play().catch(() => {});
        setPlaying(true);
      }
    }
    window.addEventListener('archive:enter', onEnter as EventListener);
    return () => window.removeEventListener('archive:enter', onEnter as EventListener);
  }, []);

  return (
    <div className="fixed bottom-6 left-6 glass p-2 rounded-full flex items-center gap-2">
      <audio ref={audioRef} src="/audio/placeholder.mp3" />
      <button onClick={play} className="px-3 py-1">Play</button>
      <button onClick={toggle} className="px-3 py-1">{muted ? 'Muted' : 'Sound'}</button>
    </div>
  );
}
