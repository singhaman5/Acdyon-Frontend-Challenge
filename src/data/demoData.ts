// ---------- Types ----------

export interface Topic {
  name: string;
  progress: number; // 0–100
  questionsTotal: number;
  questionsCompleted: number;
}

export interface PracticeItem {
  title: string;
  topic: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  timeAgo: string;
}

export interface Feature {
  icon: string; // Lucide icon name key
  title: string;
  description: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}

// ---------- Demo Data ----------

export const targetRole = 'Software Engineer';
export const overallProgress = 68;

export const topics: Topic[] = [
  { name: 'Arrays', progress: 82, questionsTotal: 40, questionsCompleted: 33 },
  { name: 'Strings', progress: 75, questionsTotal: 32, questionsCompleted: 24 },
  { name: 'Trees', progress: 71, questionsTotal: 28, questionsCompleted: 20 },
  { name: 'Graphs', progress: 42, questionsTotal: 24, questionsCompleted: 10 },
  { name: 'Dynamic Programming', progress: 48, questionsTotal: 30, questionsCompleted: 14 },
  { name: 'Sorting & Searching', progress: 88, questionsTotal: 20, questionsCompleted: 18 },
];

export const weakTopics: Topic[] = topics
  .filter((t) => t.progress < 60)
  .sort((a, b) => a.progress - b.progress);

export const practiceHistory: PracticeItem[] = [
  { title: 'Two Sum', topic: 'Arrays', difficulty: 'Easy', timeAgo: '2 hours ago' },
  { title: 'Binary Tree Traversal', topic: 'Trees', difficulty: 'Medium', timeAgo: '4 hours ago' },
  { title: 'Longest Substring Without Repeating Characters', topic: 'Strings', difficulty: 'Medium', timeAgo: 'Yesterday' },
  { title: 'Merge Intervals', topic: 'Sorting & Searching', difficulty: 'Medium', timeAgo: 'Yesterday' },
  { title: 'Course Schedule', topic: 'Graphs', difficulty: 'Medium', timeAgo: '2 days ago' },
  { title: 'Climbing Stairs', topic: 'Dynamic Programming', difficulty: 'Easy', timeAgo: '2 days ago' },
];

export const features: Feature[] = [
  {
    icon: 'Target',
    title: 'Role-specific preparation',
    description: 'Prepare around the job you\'re actually targeting — not a generic question list.',
  },
  {
    icon: 'Radar',
    title: 'Weak-area detection',
    description: 'Know which topics deserve your next hour instead of guessing.',
  },
  {
    icon: 'TrendingUp',
    title: 'Progress that means something',
    description: 'See preparation as a system instead of a pile of solved questions.',
  },
  {
    icon: 'History',
    title: 'Practice history',
    description: 'Review previous sessions and identify patterns in your performance.',
  },
];

export const howItWorksSteps: Step[] = [
  {
    number: '01',
    title: 'Choose your target role',
    description: 'Tell PrepIQ what you\'re preparing for — software engineer, data scientist, or another technical role.',
  },
  {
    number: '02',
    title: 'Practice',
    description: 'Work through questions selected for your role. Each session is focused, not random.',
  },
  {
    number: '03',
    title: 'Improve',
    description: 'Use performance insights to decide what to practice next. Build on your weakest areas.',
  },
];
