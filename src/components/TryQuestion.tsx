import { useState } from 'react';
import { CheckCircle2, XCircle, RotateCcw } from 'lucide-react';

interface Question {
  title: string;
  description: string;
  topic: string;
  difficulty: 'Easy' | 'Medium';
  options: string[];
  correctIndex: number;
  explanation: string;
}

const sampleQuestion: Question = {
  title: 'Two Sum',
  description: 'Given an array of integers and a target, return the indices of two numbers that add up to the target. What is the optimal time complexity?',
  topic: 'Arrays',
  difficulty: 'Easy',
  options: [
    'O(n²) — nested loops',
    'O(n) — hash map',
    'O(n log n) — sorting',
    'O(1) — constant time',
  ],
  correctIndex: 1,
  explanation: 'Using a hash map, you can check each element\'s complement in O(1), making the overall solution O(n) time and O(n) space.',
};

const difficultyColor: Record<string, string> = {
  Easy: 'bg-emerald-50 text-emerald-700',
  Medium: 'bg-amber-50 text-amber-700',
};

export default function TryQuestion() {
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const isCorrect = selected === sampleQuestion.correctIndex;

  const handleSelect = (index: number) => {
    if (submitted) return;
    setSelected(index);
  };

  const handleSubmit = () => {
    if (selected === null) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSelected(null);
    setSubmitted(false);
  };

  return (
    <section className="py-20 sm:py-28 bg-surface-50" id="try-question">
      <div className="container-main">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="section-heading mb-4">Try a question</h2>
          <p className="section-subheading mx-auto">
            This is what a PrepIQ session feels like. Pick an answer.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Question card */}
          <div className="rounded-xl border border-surface-200 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.04)] overflow-hidden">
            {/* Header */}
            <div className="px-5 py-4 border-b border-surface-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <h3 className="text-sm font-semibold text-neutral-800">{sampleQuestion.title}</h3>
                <span className={`text-xs font-medium px-2 py-0.5 rounded ${difficultyColor[sampleQuestion.difficulty]}`}>
                  {sampleQuestion.difficulty}
                </span>
              </div>
              <span className="text-xs text-neutral-400">{sampleQuestion.topic}</span>
            </div>

            {/* Body */}
            <div className="p-5">
              <p className="text-sm text-neutral-600 leading-relaxed mb-5">
                {sampleQuestion.description}
              </p>

              {/* Options */}
              <div className="space-y-2.5">
                {sampleQuestion.options.map((option, i) => {
                  let borderClass = 'border-surface-200 hover:border-surface-300';
                  let bgClass = '';
                  let iconEl: React.ReactNode = null;

                  if (selected === i && !submitted) {
                    borderClass = 'border-accent-400 ring-1 ring-accent-100';
                    bgClass = 'bg-accent-50/40';
                  }

                  if (submitted) {
                    if (i === sampleQuestion.correctIndex) {
                      borderClass = 'border-emerald-400 ring-1 ring-emerald-100';
                      bgClass = 'bg-emerald-50/50';
                      iconEl = <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />;
                    } else if (selected === i) {
                      borderClass = 'border-red-300 ring-1 ring-red-100';
                      bgClass = 'bg-red-50/50';
                      iconEl = <XCircle size={16} className="text-red-500 shrink-0" />;
                    }
                  }

                  return (
                    <button
                      key={i}
                      onClick={() => handleSelect(i)}
                      disabled={submitted}
                      className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-all duration-150
                        ${borderClass} ${bgClass}
                        ${submitted ? 'cursor-default' : 'cursor-pointer'}
                        flex items-center justify-between gap-3`}
                    >
                      <span className={`${submitted && i === sampleQuestion.correctIndex ? 'text-emerald-800 font-medium' : 'text-neutral-700'}`}>
                        {option}
                      </span>
                      {iconEl}
                    </button>
                  );
                })}
              </div>

              {/* Explanation */}
              {submitted && (
                <div className={`mt-4 p-4 rounded-lg text-sm leading-relaxed ${isCorrect ? 'bg-emerald-50 border border-emerald-100 text-emerald-800' : 'bg-amber-50 border border-amber-100 text-amber-800'}`}>
                  <p className="font-medium mb-1">{isCorrect ? 'Correct!' : 'Not quite.'}</p>
                  <p>{sampleQuestion.explanation}</p>
                </div>
              )}

              {/* Actions */}
              <div className="mt-5 flex items-center gap-3">
                {!submitted ? (
                  <button
                    onClick={handleSubmit}
                    disabled={selected === null}
                    className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Check Answer
                  </button>
                ) : (
                  <button
                    onClick={handleReset}
                    className="btn-secondary flex items-center gap-2"
                  >
                    <RotateCcw size={14} />
                    Try Again
                  </button>
                )}
              </div>
            </div>
          </div>

          <p className="text-xs text-neutral-400 text-center mt-4">
            Sample question — demo only
          </p>
        </div>
      </div>
    </section>
  );
}
