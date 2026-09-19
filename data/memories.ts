import type { Memory } from '../types';

export const memories: Memory[] = [
  // YUvasri section - placeholder letter + photos
  {
    id: 'y-001',
    title: 'A Letter for Yuvasri',
    date: '2026-09',
    category: 'yuvasri',
    image: '/WhatsApp Image 2026-09-19 at 9.51.48 AM.jpeg',
    images: [
      '/WhatsApp Image 2026-09-19 at 9.51.48 AM.jpeg',
      '/WhatsApp Image 2026-09-19 at 9.51.50 AM.jpeg',
      '/WhatsApp Image 2026-09-19 at 9.51.51 AM.jpeg',
      '/WhatsApp Image 2026-09-19 at 10.47.56 AM.jpeg'
    ],
    video: null,
    caption: 'Photos of Yuvasri',
    description: 'Placeholder letter will appear here. Replace with final text.',
    quote: null,
    featured: false
  },

  // Abhi & Prajin joint section
  {
    id: 'ap-001',
    title: 'Feb 2025 — When we met',
    date: '2025-02',
    category: 'abhi-prajin',
    image: '/WhatsApp Image 2026-09-19 at 10.58.21 AM.jpeg',
    images: ['/WhatsApp Image 2026-09-19 at 10.58.21 AM.jpeg'],
    video: null,
    caption: 'Meeting in Feb 2025',
    description: 'Start of the timeline: when we first met.',
    quote: null,
    featured: true
  },
  {
    id: 'ap-002',
    title: 'Nov 2025 — Getting close (3rd sem)',
    date: '2025-11',
    category: 'abhi-prajin',
    image: '/images/memory-002.webp',
    images: ['/images/memory-002.webp'],
    video: null,
    caption: 'Third semester',
    description: 'Growing closer during the semester.',
    quote: null,
    featured: false
  },
  {
    id: 'ap-003',
    title: 'Feb 2026 — Outing with Yuvasri',
    date: '2026-02',
    category: 'abhi-prajin',
    image: '/WhatsApp Image 2026-09-19 at 10.57.49 AM.jpeg',
    images: ['/WhatsApp Image 2026-09-19 at 10.57.49 AM.jpeg'],
    video: null,
    caption: 'February outing',
    description: 'A fun outing that brought us closer.',
    quote: null,
    featured: false
  },
  {
    id: 'ap-004',
    title: 'Sept 2026 — Still going strong',
    date: '2026-09',
    category: 'abhi-prajin',
    image: '/WhatsApp Image 2026-09-19 at 10.58.21 AM.jpeg',
    images: ['/WhatsApp Image 2026-09-19 at 10.58.21 AM.jpeg', '/WhatsApp Image 2026-09-19 at 10.57.49 AM.jpeg'],
    video: null,
    caption: 'September 2026',
    description: 'A snapshot of how things are now.',
    quote: null,
    featured: false
  }
];
