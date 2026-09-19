export const incidents = [
  {
    id: 'i-001',
    caseNumber: '001',
    title: 'The Lost Keys',
    date: '2020-08-12',
    status: 'RESOLVED',
    image: '/images/incident-001.webp',
    video: null,
    description: 'A brief account of the time we misplaced the keys and blamed the dog.',
    evidence: [
      {
        id: 'e-001',
        type: 'photo',
        src: '/images/evidence-001.webp',
        caption: 'Key ring found under couch.'
      }
    ],
    question: 'Who was responsible?',
    options: ['Him', 'Me', 'Both', 'The Universe'],
    answer: 2
  },
  {
    id: 'i-002',
    caseNumber: '002',
    title: 'The Midnight Snack Heist',
    date: '2021-03-02',
    status: 'CLASSIFIED',
    image: '/images/incident-002.webp',
    video: null,
    description: 'Mystery of the missing cookies from the kitchen jar.',
    evidence: [
      { id: 'e-002', type: 'photo', src: '/images/evidence-002.webp', caption: 'Crumbs on countertop' }
    ],
    question: 'Who took the cookies?',
    options: ['Guest', 'You', 'Me', 'Squirrel'],
    answer: 1
  }
];
