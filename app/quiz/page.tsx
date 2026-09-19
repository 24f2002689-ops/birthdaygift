import QuizEngine from '../../components/quiz/QuizEngine';

export default function QuizPage() {
  return (
    <main className="min-h-screen p-8 text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-display mb-4">HOW WELL DO YOU KNOW THIS FRIENDSHIP?</h1>
        <p className="mb-6 text-white/70">10 questions. No cheating. Probably.</p>
        <QuizEngine />
      </div>
    </main>
  );
}
