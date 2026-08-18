import { Target, Radar, TrendingUp, History } from 'lucide-react';
import { features } from '../data/demoData';
import type { Feature } from '../data/demoData';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Target,
  Radar,
  TrendingUp,
  History,
};

export default function Features() {
  return (
    <section className="py-20 sm:py-28" id="features">
      <div className="container-main">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="section-heading mb-4">Preparation with structure</h2>
          <p className="section-subheading mx-auto">
            Tools that turn scattered practice into a system you can trust.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature }: { feature: Feature }) {
  const Icon = iconMap[feature.icon];

  return (
    <div className="group p-5 rounded-xl border border-surface-200 hover:border-accent-200 transition-colors duration-200">
      <div className="w-9 h-9 rounded-lg bg-accent-50 flex items-center justify-center mb-3 group-hover:bg-accent-100 transition-colors duration-200">
        {Icon && <Icon size={18} className="text-accent-600" />}
      </div>
      <h3 className="text-sm font-semibold text-neutral-900 mb-1.5">{feature.title}</h3>
      <p className="text-sm text-neutral-500 leading-relaxed">{feature.description}</p>
    </div>
  );
}
