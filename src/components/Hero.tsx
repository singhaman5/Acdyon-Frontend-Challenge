import DashboardPreview from './DashboardPreview';

export default function Hero() {
  return (
    <section className="pt-32 pb-16 sm:pt-40 sm:pb-24" id="product">
      <div className="container-main">
        {/* Copy */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-neutral-900 tracking-tight leading-[1.15] mb-5">
            Turn interview preparation into a measurable system.
          </h1>
          <p className="text-lg text-neutral-500 leading-relaxed mb-8 max-w-xl mx-auto">
            Practice role-specific questions, track weak areas, and build a preparation plan that tells you what to work on next.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#cta" className="btn-primary w-full sm:w-auto">
              Start Preparing
            </a>
            <a href="#how-it-works" className="btn-secondary w-full sm:w-auto">
              See how it works
            </a>
          </div>
        </div>

        {/* Dashboard Preview */}
        <DashboardPreview />
      </div>
    </section>
  );
}
