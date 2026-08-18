import { howItWorksSteps } from '../data/demoData';

export default function HowItWorks() {
  return (
    <section className="py-20 sm:py-28 bg-surface-50" id="how-it-works">
      <div className="container-main">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="section-heading mb-4">How it works</h2>
          <p className="section-subheading mx-auto">
            Three steps from scattered practice to structured preparation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 max-w-4xl mx-auto relative">
          {/* Connecting line — desktop only */}
          <div
            className="hidden md:block absolute top-8 left-[calc(16.667%+24px)] right-[calc(16.667%+24px)] h-px bg-surface-300"
            aria-hidden="true"
          />

          {howItWorksSteps.map((step) => (
            <div key={step.number} className="relative text-center md:text-left">
              {/* Step number */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white border border-surface-200 text-accent-600 font-semibold text-sm mb-4 relative z-10">
                {step.number}
              </div>
              <h3 className="text-base font-semibold text-neutral-900 mb-2">{step.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
