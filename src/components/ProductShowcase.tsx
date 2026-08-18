import { ChevronRight } from 'lucide-react';
import { weakTopics } from '../data/demoData';

export default function ProductShowcase() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div>
            <h2 className="section-heading mb-4">
              Know what to practice&nbsp;next.
            </h2>
            <p className="section-subheading mb-6">
              PrepIQ surfaces the topics that need the most work — so you spend time where it actually matters.
            </p>
            <a href="#cta" className="btn-primary">
              Start Preparing
            </a>
          </div>

          {/* Showcase card */}
          <div className="rounded-xl border border-surface-200 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.04)] overflow-hidden">
            {/* Header */}
            <div className="px-5 py-4 border-b border-surface-100 bg-surface-50">
              <p className="text-sm font-medium text-neutral-700">Weak Areas</p>
              <p className="text-xs text-neutral-400 mt-0.5">Topics below 60% — demo data</p>
            </div>

            {/* Weak topics */}
            <div className="p-5 space-y-5">
              {weakTopics.map((topic) => (
                <div key={topic.name}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-medium text-neutral-800">{topic.name}</span>
                    <span className="text-sm font-semibold" style={{
                      color: topic.progress < 50 ? '#ef4444' : '#d97706',
                    }}>
                      {topic.progress}%
                    </span>
                  </div>
                  <div className="h-2 bg-surface-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${topic.progress}%`,
                        backgroundColor: topic.progress < 50 ? '#ef4444' : '#d97706',
                      }}
                    />
                  </div>
                </div>
              ))}

              {/* Recommendation */}
              <div className="mt-6 p-4 rounded-lg bg-accent-50 border border-accent-100">
                <p className="text-xs font-medium text-accent-600 uppercase tracking-wide mb-1">
                  Recommended next
                </p>
                <p className="text-sm text-neutral-700 flex items-center gap-1">
                  Practice graph traversal problems
                  <ChevronRight size={14} className="text-accent-500" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
