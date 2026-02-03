import ScrollFloat from './ScrollFloat';

const items = [
  {
    key: "E",
    title: "Effort",
    description: "Daily input rules that define the minimum winning activity.",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-500/10",
    icon: (
      <svg
        aria-hidden="true"
        className="h-8 w-8 text-blue-400"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M13 10V3L4 14h7v7l9-11h-7z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  },
  {
    key: "A",
    title: "Accountability",
    description: "Scorecards, visibility, and cadence that keep behavior on track.",
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-500/10",
    icon: (
      <svg
        aria-hidden="true"
        className="h-8 w-8 text-amber-400"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  },
  {
    key: "R",
    title: "Rewards",
    description: "Tiered incentives that directly reflect the value of outcomes.",
    color: "from-emerald-500 to-green-500",
    bgColor: "bg-emerald-500/10",
    icon: (
      <svg
        aria-hidden="true"
        className="h-8 w-8 text-emerald-400"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  },
  {
    key: "N",
    title: "Numbers",
    description: "Conversion math that links activity, pipeline, and revenue.",
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-purple-500/10",
    icon: (
      <svg
        aria-hidden="true"
        className="h-8 w-8 text-purple-400"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }
];

export function EarnFormulaViz() {
  return (
    <section
      id="earn"
      className="px-4 py-16 text-slate-900 sm:py-20"
      aria-labelledby="earn-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <ScrollFloat
            containerClassName="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
          >
            <span className="text-emerald-600">EARN</span> = Effort × Accountability ×
            Rewards × Numbers
          </ScrollFloat>
          <p className="mt-3 text-sm text-slate-900 sm:text-base">
            Your revenue isn&apos;t random. 2XG EARN installs a formula so every rep
            understands exactly how their actions convert into earnings and team growth.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {items.map((item, index) => (
            <div
              key={item.key}
              className="relative flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white/60 p-4 text-center shadow-sm sm:gap-4 sm:p-6"
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-2xl sm:h-16 sm:w-16 ${item.bgColor}`}>
                {item.icon}
              </div>
              <div className={`flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br ${item.color} text-base font-bold text-white shadow-lg sm:h-10 sm:w-10 sm:text-lg`}>
                {item.key}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900 sm:text-base">
                  {item.title}
                </p>
                <p className="mt-1.5 text-xs text-slate-900 sm:mt-2 sm:text-sm">{item.description}</p>
              </div>
              {index < items.length - 1 && (
                <div className="pointer-events-none absolute right-[-20px] top-1/2 z-10 hidden text-2xl font-bold text-emerald-400 md:block">
                  ×
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-emerald-200 bg-gradient-to-r from-emerald-100/50 to-white/50 p-4 text-xs text-slate-900 sm:text-sm">
          <p>
            When any variable in the EARN formula is weak, performance stalls. 2XG EARN
            upgrades all four, then measures the compounding effect on revenue over the
            next 90 days.
          </p>
        </div>
      </div>
    </section>
  );
}
