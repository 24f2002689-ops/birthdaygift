import { LettersList } from '../../components/letters/LettersList';

export default function LettersPage() {
  return (
    <main className="min-h-screen p-8 text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-display mb-4">LETTERS</h1>
        <p className="mb-6 text-white/70">A small collection of letters. Some are locked until you complete certain tasks.</p>
        <LettersList />
      </div>
    </main>
  );
}
