import type { Question } from '../types';

export const quiz: Question[] = [
  {
    id: 'q-001',
    type: 'multiple-choice',
    question: 'Where did we first meet?',
    options: ['At a party', 'In class', 'Online', 'At a cafe'],
    answer: 1,
    correctMessage: 'Exactly!',
    incorrectMessage: 'Close, but not quite.'
  },
  {
    id: 'q-002',
    type: 'true-false',
    question: 'We once got lost together on a road trip.',
    options: ['True', 'False'],
    answer: true,
    correctMessage: 'Memory intact.',
    incorrectMessage: 'Memory failed.'
  },
  {
    id: 'q-003',
    type: 'image-choice',
    question: 'Which photo is from our first trip?',
    options: ['/images/quiz-1-a.webp', '/images/quiz-1-b.webp', '/images/quiz-1-c.webp', '/images/quiz-1-d.webp'],
    answer: 2,
    correctMessage: 'That one!',
    incorrectMessage: 'Not quite.'
  }
];
