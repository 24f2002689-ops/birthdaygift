"use client";
import React, { useState, useEffect } from 'react';
import Confetti from 'canvas-confetti';
import { CheckCircle2, AlertCircle, HelpCircle, ArrowRight, Lock, Sparkles } from 'lucide-react';

interface FriendshipQuizProps {
  onComplete: () => void;
}

export function FriendshipQuiz({ onComplete }: FriendshipQuizProps) {
  // Question 1 state (Permanent - once answered, locked in localStorage)
  const [q1Answer, setQ1Answer] = useState('');
  const [q1Submitted, setQ1Submitted] = useState(false);
  const [q1SavedAnswer, setQ1SavedAnswer] = useState('');

  // Question 2 state (Resets on page refresh)
  const [q2Selected, setQ2Selected] = useState<string | null>(null);
  const [q2Feedback, setQ2Feedback] = useState<string | null>(null);
  const [q2Passed, setQ2Passed] = useState(false);

  // Question 3 state (Resets on page refresh)
  const [q3Feedback, setQ3Feedback] = useState<string | null>(null);
  const [q3Passed, setQ3Passed] = useState(false);
  const [q3TemporaryStatus, setQ3TemporaryStatus] = useState<string | null>(null);
  const [q3LoadingTimeout, setQ3LoadingTimeout] = useState<NodeJS.Timeout | null>(null);

  // Check localStorage ONLY for locked Q1
  useEffect(() => {
    try {
      const saved = localStorage.getItem('mahi_quiz_q1_answer');
      if (saved) {
        setQ1SavedAnswer(saved);
        setQ1Answer(saved);
        setQ1Submitted(true);
      }
    } catch {
      // ignore
    }
  }, []);

  const triggerConfetti = () => {
    try {
      Confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#a855f7', '#ec4899', '#06b6d4', '#f59e0b'],
      });
    } catch {
      // fallback
    }
  };

  // Submit Q1 (Only answered once!)
  const handleQ1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!q1Answer.trim() || q1Submitted) return;

    try {
      localStorage.setItem('mahi_quiz_q1_answer', q1Answer.trim());
    } catch {
      // ignore
    }

    setQ1SavedAnswer(q1Answer.trim());
    setQ1Submitted(true);
    triggerConfetti();
  };

  // Handle Q2 Choice
  const handleQ2Select = (option: string) => {
    if (q2Passed) return;
    setQ2Selected(option);

    if (option === 'PVR Aerohub') {
      setQ2Passed(true);
      setQ2Feedback('🎯 Correct! Sept 13, 2025 — First outing to Madrasi Movie at PVR Aerohub!');
      triggerConfetti();
    } else {
      setQ2Feedback(`❌ Nope, not ${option}! Think about where we watched Madrasi movie on Sept 13, 2025 👀`);
    }
  };

  // Handle Q3 Choice with requested funny branching logic
  const handleQ3Select = (choice: string) => {
    if (q3LoadingTimeout) {
      clearTimeout(q3LoadingTimeout);
    }
    setQ3TemporaryStatus(null);

    if (choice === 'All') {
      setQ3Passed(true);
      setQ3Feedback('❤️ Correct! The whole squad is family. You passed the test!');
      triggerConfetti();
    } else if (choice === 'Prajin') {
      setQ3TemporaryStatus('Prajin');
      setQ3Feedback('✅ Correct! ...wait for it...');
      const timeout = setTimeout(() => {
        setQ3Feedback('😂 Just kidding gay choose again! (Hint: Think bigger)');
        setQ3TemporaryStatus(null);
      }, 2000);
      setQ3LoadingTimeout(timeout);
    } else if (choice === 'Yuvasri') {
      setQ3Feedback('💀 "chumma kooda yelarayum pudikum nu poda mata la nee lavdu" — Select again!');
    } else if (choice === 'Abhi') {
      setQ3Feedback('🤦‍♂️ "what bro, its very wrong bro.." — Try again!');
    }
  };

  const allPassed = q1Submitted && q2Passed && q3Passed;

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      {/* Header Banner */}
      <div className="text-center space-y-1.5">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass text-[11px] tracking-widest uppercase text-violet-400 font-semibold">
          <Sparkles className="w-3 h-3" />
          The Friendship Gatekeeper
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black gradient-text">
          Prove Your Friendship!
        </h2>
        <p className="text-white/60 text-xs sm:text-sm max-w-md mx-auto">
          Answer the classified questions below to unlock your birthday vault.
        </p>
      </div>

      {/* QUESTION 1 */}
      <div className="glass-card rounded-2xl p-4 sm:p-6 space-y-3 border border-white/10 relative overflow-hidden">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-violet-600/30 text-violet-300 font-bold flex items-center justify-center text-xs border border-violet-500/30 flex-shrink-0">
              01
            </span>
            <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
              What is the first movie you watched with Yuvasri?
            </h3>
          </div>
          {q1Submitted && (
            <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30 flex-shrink-0">
              <Lock className="w-2.5 h-2.5" /> Locked
            </span>
          )}
        </div>

        <form onSubmit={handleQ1Submit} className="space-y-3">
          <div>
            <input
              type="text"
              value={q1Answer}
              onChange={(e) => !q1Submitted && setQ1Answer(e.target.value)}
              disabled={q1Submitted}
              placeholder="Type movie name here..."
              className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-sm sm:text-base text-white placeholder-white/30 transition-all outline-none ${
                q1Submitted
                  ? 'border-emerald-500/50 bg-emerald-950/20 text-emerald-300 cursor-not-allowed'
                  : 'border-white/15 focus:border-violet-500 focus:bg-white/[0.07]'
              }`}
            />
          </div>

          {!q1Submitted ? (
            <button
              type="submit"
              disabled={!q1Answer.trim()}
              className="w-full py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-violet-600 to-pink-600 text-white hover:opacity-90 disabled:opacity-40 transition-all shadow-md shadow-violet-600/20"
            >
              Confirm Answer (One Try Only!)
            </button>
          ) : (
            <div className="p-3 rounded-xl bg-emerald-900/30 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-emerald-400" />
              <div>
                <strong>Yes, you&apos;re right! 🎉</strong> Answer recorded: &ldquo;{q1SavedAnswer}&rdquo;
              </div>
            </div>
          )}
        </form>
      </div>

      {/* QUESTION 2 */}
      <div 
        className={`glass-card rounded-2xl p-4 sm:p-6 space-y-3 border transition-all duration-300 ${
          !q1Submitted ? 'opacity-40 pointer-events-none border-white/5' : 'border-white/10'
        }`}
      >
        <div className="flex items-center gap-2.5">
          <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-cyan-600/30 text-cyan-300 font-bold flex items-center justify-center text-xs border border-cyan-500/30 flex-shrink-0">
            02
          </span>
          <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
            Where was our first time going out together with me and Abhi?
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
          {['PVR Aerohub', 'Express Avenue', 'La Luna Rooftop', 'Potheri'].map((option) => {
            const isSelected = q2Selected === option;
            const isCorrect = option === 'PVR Aerohub' && q2Passed;
            return (
              <button
                key={option}
                onClick={() => handleQ2Select(option)}
                disabled={q2Passed}
                className={`p-3 rounded-xl text-left font-medium transition-all text-xs sm:text-sm flex items-center justify-between border ${
                  isCorrect
                    ? 'bg-emerald-950/50 border-emerald-500 text-emerald-300'
                    : isSelected && !isCorrect
                    ? 'bg-rose-950/40 border-rose-500/60 text-rose-300'
                    : 'bg-white/[0.04] border-white/10 text-white/80 hover:bg-white/[0.08] hover:border-white/20'
                }`}
              >
                <span>{option}</span>
                {isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />}
                {isSelected && !isCorrect && <AlertCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />}
              </button>
            );
          })}
        </div>

        {q2Feedback && (
          <div
            className={`p-3 rounded-xl text-xs sm:text-sm border flex items-center gap-2.5 ${
              q2Passed
                ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300'
                : 'bg-rose-950/40 border-rose-500/40 text-rose-300'
            }`}
          >
            {q2Passed ? <CheckCircle2 className="w-4 h-4 flex-shrink-0" /> : <AlertCircle className="w-4 h-4 flex-shrink-0" />}
            <span>{q2Feedback}</span>
          </div>
        )}
      </div>

      {/* QUESTION 3 */}
      <div 
        className={`glass-card rounded-2xl p-4 sm:p-6 space-y-3 border transition-all duration-300 ${
          !q2Passed ? 'opacity-40 pointer-events-none border-white/5' : 'border-white/10'
        }`}
      >
        <div className="flex items-center gap-2.5">
          <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-pink-600/30 text-pink-300 font-bold flex items-center justify-center text-xs border border-pink-500/30 flex-shrink-0">
            03
          </span>
          <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
            Who do you like the most?
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
          {[
            { id: 'Prajin', label: 'Prajin' },
            { id: 'Abhi', label: 'Abhi' },
            { id: 'Yuvasri', label: 'Yuvasri' },
            { id: 'All', label: 'All of Them ❤️' },
          ].map((choice) => {
            const isAllPassed = q3Passed && choice.id === 'All';
            const isTemp = q3TemporaryStatus === choice.id;
            return (
              <button
                key={choice.id}
                onClick={() => handleQ3Select(choice.id)}
                className={`py-3 px-2.5 rounded-xl font-bold text-xs sm:text-sm text-center transition-all border ${
                  isAllPassed
                    ? 'bg-pink-950/50 border-pink-500 text-pink-300 scale-102 shadow-md shadow-pink-500/20'
                    : isTemp
                    ? 'bg-emerald-950/50 border-emerald-500 text-emerald-300'
                    : 'bg-white/[0.04] border-white/10 text-white/80 hover:bg-white/[0.08] hover:border-pink-500/40 hover:text-white'
                }`}
              >
                {choice.label}
              </button>
            );
          })}
        </div>

        {q3Feedback && (
          <div
            className={`p-3 rounded-xl text-xs sm:text-sm border flex items-center gap-2.5 ${
              q3Passed
                ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300'
                : 'bg-amber-950/40 border-amber-500/40 text-amber-300'
            }`}
          >
            {q3Passed ? <CheckCircle2 className="w-4 h-4 flex-shrink-0" /> : <HelpCircle className="w-4 h-4 flex-shrink-0" />}
            <span className="font-medium">{q3Feedback}</span>
          </div>
        )}
      </div>

      {/* UNLOCK NEXT LEVEL BUTTON */}
      {allPassed && (
        <div className="pt-2 text-center">
          <button
            onClick={onComplete}
            className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-white font-bold text-sm sm:text-base bg-gradient-to-r from-violet-600 via-pink-600 to-cyan-500 hover:scale-105 transition-all shadow-lg shadow-pink-500/30 glow-btn"
          >
            <span>Proceed to Our Story</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      )}
    </div>
  );
}
