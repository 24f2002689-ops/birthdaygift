export const letters = [
  {
    id: 'l-001',
    title: 'For The Memories',
    subtitle: 'A short note',
    locked: false,
    unlockRequirement: null,
    content: '<p>[LETTER]</p>',
    image: '/images/letter-001.webp',
    theme: 'warm'
  },
  {
    id: 'l-secret',
    title: 'Open Last',
    subtitle: 'Secret Letter',
    locked: true,
    unlockRequirement: 'complete-quiz',
    content: '<p>[SECRET LETTER]</p>',
    image: '/images/letter-secret.webp',
    theme: 'gold'
  }
];
