"use client";
import React, { useState } from 'react';
import { quiz } from '../../data/quiz';
import { QuizQuestion } from './QuizQuestion';
import { QuizProgress } from './QuizProgress';
import { QuizResult } from './QuizResult';

export default function QuizEngine() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<any>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const q = quiz[index];

  function next() {
    if (selected === null) return;
    // evaluate
    const correct = q.type === 'true-false' ? selected === q.answer : selected === q.answer;
    if (correct) setScore((s) => s + 1);
    setSelected(null);
    if (index + 1 >= quiz.length) {
      setDone(true);
      // mark unlock in localStorage so letters UI can read it
      try {
        localStorage.setItem('quiz:completed', '1');
      } catch (e) {
        // ignore
      }
    } else {
      setIndex((i) => i + 1);
    }
  }

  function retry() {
    setIndex(0);
    setSelected(null);
    setScore(0);
    setDone(false);
  }

  if (done) return <QuizResult score={score} total={quiz.length} onRetry={retry} />;

  return (
    <div className="max-w-3xl mx-auto">
      <QuizProgress index={index} total={quiz.length} />
      <QuizQuestion q={q} selected={selected} onSelect={setSelected} />
      <div className="flex justify-end mt-6">
        <button onClick={next} className="px-4 py-2 bg-cyan-500 rounded" aria-disabled={selected === null}>
          {index + 1 >= quiz.length ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  );
}
