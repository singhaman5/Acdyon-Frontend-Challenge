import { useState } from 'react';
import { Briefcase, ChevronRight } from 'lucide-react';
import {
  targetRole,
  overallProgress,
  topics,
  weakTopics,
  practiceHistory,
} from '../data/demoData';

type Tab = 'overview' | 'weak-areas' | 'practice';

const tabs: { key: Tab; label: string }[] = [
  { key: 'overview', label: 'Overview' },
  { key: 'weak-areas', label: 'Weak Areas' },
  { key: 'practice', label: 'Practice History' },
];

const difficultyColor: Record<string, string> = {
  Easy: 'bg-emerald-50 text-emerald-700',
  Medium: 'bg-amber-50 text-amber-700',
  Hard: 'bg-red-50 text-red-700',
};

export default function DashboardPreview() {
  const [activeTab, setActiveTab] = useState<Tab>('overview');

  return (
    <div className="max-w-4xl mx-auto">
      {/* Dashboard shell */}
      <div className="rounded-xl border border-surface-200 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.04)] overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-surface-100 bg-surface-50">
          <div className="flex items-center gap-2 text-sm text-neutral-500">
            <Briefcase size={15} className="text-neutral-400" />
            <span className="font-medium text-neutral-700">{targetRole}</span>
            <span className="text-neutral-300">·</span>
            <span>Demo preview</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-surface-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-surface-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-surface-300" />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-surface-100 px-4 sm:px-6 gap-0 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`relative px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors duration-150
                ${activeTab === tab.key
                  ? 'text-accent-600'
                  : 'text-neutral-400 hover:text-neutral-600'
                }`}
              aria-selected={activeTab === tab.key}
              role="tab"
            >
              {tab.label}
              {activeTab === tab.key && (
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent-600 rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="p-4 sm:p-6 min-h-[320px]">
          {activeTab === 'overview' && <OverviewPanel />}
          {activeTab === 'weak-areas' && <WeakAreasPanel />}
          {activeTab === 'practice' && <PracticePanel />}
        </div>
      </div>
    </div>
  );
}

/* ---------- Overview ---------- */
function OverviewPanel() {
  return (
    <div className="space-y-6">
      {/* Progress */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-neutral-700">Overall progress</span>
          <span className="text-sm font-semibold text-accent-600">{overallProgress}%</span>
        </div>
        <div className="h-2 bg-surface-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-accent-600 rounded-full transition-all duration-500"
            style={{ width: `${overallProgress}%` }}
          />
        </div>
      </div>

      {/* Topics grid */}
      <div>
        <h3 className="text-sm font-medium text-neutral-700 mb-3">Topics</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {topics.map((topic) => (
            <div
              key={topic.name}
              className="flex items-center justify-between p-3 rounded-lg border border-surface-200 hover:border-surface-300 transition-colors duration-150"
            >
              <div className="min-w-0">
                <p className="text-sm font-medium text-neutral-800 truncate">{topic.name}</p>
                <p className="text-xs text-neutral-400 mt-0.5">
                  {topic.questionsCompleted}/{topic.questionsTotal} questions
                </p>
              </div>
              <div className="flex items-center gap-2 ml-3 shrink-0">
                <div className="w-16 h-1.5 bg-surface-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${topic.progress}%`,
                      backgroundColor: topic.progress >= 70 ? '#059669' : topic.progress >= 50 ? '#d97706' : '#ef4444',
                    }}
                  />
                </div>
                <span className="text-xs font-medium text-neutral-500 w-8 text-right">{topic.progress}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- Weak Areas ---------- */
function WeakAreasPanel() {
  return (
    <div className="space-y-6">
      <p className="text-sm text-neutral-500">
        Topics below 60% completion — focus your next sessions here.
      </p>
      <div className="space-y-4">
        {weakTopics.map((topic) => (
          <div key={topic.name} className="p-4 rounded-lg border border-surface-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-neutral-800">{topic.name}</span>
              <span className="text-sm font-semibold text-red-600">{topic.progress}%</span>
            </div>
            <div className="h-2 bg-surface-100 rounded-full overflow-hidden mb-2">
              <div
                className="h-full bg-red-500 rounded-full transition-all duration-500"
                style={{ width: `${topic.progress}%` }}
              />
            </div>
            <p className="text-xs text-neutral-400">
              {topic.questionsCompleted} of {topic.questionsTotal} questions completed
            </p>
          </div>
        ))}
      </div>

      {/* Recommendation */}
      <div className="p-4 rounded-lg bg-accent-50 border border-accent-100">
        <p className="text-xs font-medium text-accent-600 uppercase tracking-wide mb-1">
          Recommended next
        </p>
        <p className="text-sm text-neutral-700 flex items-center gap-1">
          Practice graph traversal problems
          <ChevronRight size={14} className="text-accent-500" />
        </p>
      </div>
    </div>
  );
}

/* ---------- Practice History ---------- */
function PracticePanel() {
  return (
    <div className="space-y-1">
      <p className="text-sm text-neutral-500 mb-4">
        Recent practice sessions.
      </p>
      {practiceHistory.map((item, i) => (
        <div
          key={i}
          className="flex items-center justify-between py-3 border-b border-surface-100 last:border-0"
        >
          <div className="min-w-0 mr-3">
            <p className="text-sm font-medium text-neutral-800 truncate">{item.title}</p>
            <p className="text-xs text-neutral-400 mt-0.5">{item.topic}</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className={`text-xs font-medium px-2 py-0.5 rounded ${difficultyColor[item.difficulty]}`}>
              {item.difficulty}
            </span>
            <span className="text-xs text-neutral-400 w-20 text-right">{item.timeAgo}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
