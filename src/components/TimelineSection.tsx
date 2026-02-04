import ScrollFloat from './ScrollFloat';

export function TimelineSection() {
  const steps = [
    {
      title: "Setup & Baseline",
      subtitle: "Days 1–14",
      description:
        "Audit current performance, define roles, and install the first version of your EARN rules.",
      points: [
        "Map existing pipeline and activity",
        "Set performance baselines",
        "Define incentive architecture"
      ],
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Incentive Activation",
      subtitle: "Days 15–45",
      description:
        "Launch scorecards, incentives, and visibility so reps start earning from new behaviors.",
      points: [
        "Launch EARN scorecards",
        "Turn on rewards and tiers",
        "Integrate into weekly rhythm"
      ],
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "from-amber-500 to-orange-500"
    },
    {
      title: "Optimization & Scale",
      subtitle: "Days 46–90",
      description:
        "Refine based on real data, then standardize the system as your operating model.",
      points: [
        "Optimize incentives and targets",
        "Lock in reporting cadence",
        "Prepare for team scale"
      ],
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      color: "from-emerald-500 to-green-500"
    }
  ];

  return (
    <section
      className="px-4 py-6 text-slate-900 sm:py-10 overflow-hidden"
      aria-labelledby="timeline-heading"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollFloat
          containerClassName="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
        >
          The <span className="text-emerald-600">90-Day Transformation</span>:{" "}
          From chaos to consistency.
        </ScrollFloat>
        <p className="mt-3 max-w-2xl text-base text-slate-900 sm:text-lg">
          Designed for Indian SMBs who can&apos;t afford 6-month consultancy projects.
          In 90 days, we shift your team from founder-dependent to system-driven.
        </p>

        <ol className="relative mt-10 flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0">
          <div className="pointer-events-none absolute inset-x-0 top-12 hidden h-1 bg-gradient-to-r from-blue-200 via-amber-200 to-emerald-200 md:block" />
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="group relative flex min-w-[280px] max-w-[85vw] flex-shrink-0 flex-col gap-4 rounded-2xl border border-slate-200 bg-white/60 p-5 shadow-sm snap-center md:min-w-0 md:max-w-none md:w-auto transition-all duration-300 hover:shadow-xl hover:shadow-emerald-200/30 hover:border-emerald-400 hover:-translate-y-2 hover:scale-[1.02] hover:bg-gradient-to-br hover:from-white hover:to-emerald-50/30 cursor-default"
            >
              <div className="flex items-center gap-3">
                <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${step.color} text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:rotate-6`}>
                  {step.icon}
                </div>
                <div>
                  <div className="text-sm font-medium uppercase tracking-wide text-slate-700">
                    Phase {index + 1}
                  </div>
                  <div className="text-base font-semibold text-emerald-700">
                    {step.subtitle}
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">
                {step.title}
              </h3>
              <p className="text-sm text-slate-900 sm:text-base">{step.description}</p>
              <ul className="mt-2 space-y-2 text-sm text-slate-900 sm:text-base">
                {step.points.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <svg className="h-5 w-5 flex-shrink-0 text-emerald-600 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
