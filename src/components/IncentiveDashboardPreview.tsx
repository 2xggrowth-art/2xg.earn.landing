import ScrollFloat from './ScrollFloat';

export function IncentiveDashboardPreview() {
  const leaderboard = [
    {
      name: "Jordan Lee",
      score: 142,
      tier: "Elite",
      initials: "JL",
      gradient: "from-violet-500 to-purple-500"
    },
    {
      name: "Sam Patel",
      score: 128,
      tier: "Gold",
      initials: "SP",
      gradient: "from-amber-500 to-orange-500"
    },
    {
      name: "Casey Nguyen",
      score: 117,
      tier: "Gold",
      initials: "CN",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section
      className="px-4 py-6 text-slate-900 sm:py-10"
      aria-labelledby="dashboard-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <ScrollFloat
              containerClassName="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
            >
              Incentives,{" "}
              <span className="text-emerald-600">leaderboards, and visibility</span> in
              one view.
            </ScrollFloat>
            <p className="mt-3 text-base text-slate-900 sm:text-lg">
              2XG EARN turns your performance rules into a visual dashboard that makes it
              obvious who&apos;s earning, who needs support, and which incentives are
              driving results.
            </p>
          </div>
        </div>

        <div
          className="mt-8 rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-slate-50 p-5 shadow-2xl shadow-emerald-900/5"
          aria-label="Incentive dashboard preview"
        >
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-emerald-700">EARN Overview</p>
              <p className="text-base font-semibold text-slate-900 sm:text-lg">
                Incentives & Performance
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs text-slate-800 sm:text-sm">
              <span className="rounded-full border border-slate-200 bg-white px-4 py-1.5 whitespace-nowrap">
                Active reps: <span className="font-semibold text-emerald-600">24</span>
              </span>
              <span className="rounded-full border border-slate-200 bg-white px-4 py-1.5 whitespace-nowrap">
                Rewards issued:{" "}
                <span className="font-semibold text-emerald-600">$18.4k</span>
              </span>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div className="space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-700">
                Leaderboard
              </h3>
              <ul className="space-y-2 text-sm sm:text-base">
                {leaderboard.map((rep, index) => (
                  <li
                    key={rep.name}
                    className="group/item flex items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-emerald-400 hover:-translate-y-1 hover:scale-[1.02] hover:bg-gradient-to-r hover:from-white hover:to-emerald-50/50 cursor-default"
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${rep.gradient} text-sm font-semibold text-white transition-all duration-300 group-hover/item:scale-110 group-hover/item:shadow-lg`}>
                          {rep.initials}
                        </div>
                        <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-slate-200 text-xs font-bold text-emerald-700 ring-2 ring-white">
                          #{index + 1}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">{rep.name}</p>
                        <p className="text-xs text-slate-500">
                          Tier:{" "}
                          <span className={`font-medium ${rep.tier === 'Elite' ? 'text-violet-600' : 'text-amber-600'}`}>{rep.tier}</span>
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-slate-500">EARN Score</p>
                      <p className="text-xl font-bold text-emerald-600 transition-all duration-300 group-hover/item:scale-110 group-hover/item:text-emerald-500">
                        {rep.score}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-900 sm:text-base">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-700">
                  Reward tiers
                </h3>
                <div className="mt-2 grid grid-cols-3 gap-2">
                  <Tier label="Silver" threshold="100" color="bg-slate-400" />
                  <Tier label="Gold" threshold="125" color="bg-emerald-400/70" />
                  <Tier label="Elite" threshold="140" color="bg-gradient-to-r from-violet-500 to-purple-500" />
                </div>
              </div>
              <div>
                <h3 className="mt-3 text-sm font-semibold uppercase tracking-wide text-slate-700">
                  Performance distribution
                </h3>
                <div className="mt-2 flex h-2 overflow-hidden rounded-full bg-slate-200">
                  <span className="flex-1 bg-red-400/80" />
                  <span className="flex-[1.5] bg-amber-400/80" />
                  <span className="flex-[2.5] bg-emerald-500" />
                </div>
                <div className="mt-2 flex justify-between text-xs text-slate-500">
                  <span>Behind</span>
                  <span>On Track</span>
                  <span>Overperforming</span>
                </div>
              </div>
              <div>
                <h3 className="mt-3 text-sm font-semibold uppercase tracking-wide text-slate-700">
                  Key metrics
                </h3>
                <div className="mt-2 grid grid-cols-3 gap-2">
                  <Stat label="Meetings set" value="+32%" />
                  <Stat label="Pipeline created" value="+24%" />
                  <Stat label="Win rate" value="+7 pts" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Tier({
  label,
  threshold,
  color
}: {
  label: string;
  threshold: string;
  color: string;
}) {
  return (
    <div className="group flex flex-col gap-1 rounded-xl border border-slate-200 bg-white p-2 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-emerald-400 hover:scale-105 hover:bg-gradient-to-br hover:from-white hover:to-emerald-50/50 cursor-default">
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs font-medium text-slate-700">{label}</span>
        <span className={`h-2 w-8 rounded-full ${color} transition-all duration-300 group-hover:w-12`} />
      </div>
      <span className="text-xs text-slate-500">From {threshold} EARN</span>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="group rounded-xl border border-slate-200 bg-white p-2 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-emerald-400 hover:scale-105 hover:bg-gradient-to-br hover:from-white hover:to-emerald-50/50 cursor-default">
      <p className="text-xs text-slate-500">{label}</p>
      <p className="text-base font-semibold text-emerald-600 transition-all duration-300 group-hover:text-emerald-500 group-hover:scale-110">{value}</p>
    </div>
  );
}
