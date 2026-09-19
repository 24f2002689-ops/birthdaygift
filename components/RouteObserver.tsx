"use client";
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ChapterTransition } from './ChapterTransition';

export function RouteObserver() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const [meta, setMeta] = useState({ chapter: '01', title: '' });

  useEffect(() => {
    if (!pathname) return;
    // derive chapter number from path
    const parts = pathname.split('/').filter(Boolean);
    const chapter = (parts[0] || 'home').slice(0, 2).toUpperCase();
    const title = parts[0] ? parts[0].replace(/-/g, ' ').toUpperCase() : 'HOME';
    setMeta({ chapter: chapter, title });
    setShow(true);
    const t = setTimeout(() => setShow(false), 1400);
    return () => clearTimeout(t);
  }, [pathname]);

  return <>{show ? <ChapterTransition chapter={meta.chapter} title={meta.title} /> : null}</>;
}
