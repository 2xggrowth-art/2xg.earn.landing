import ScrollFloat from './ScrollFloat';

export function IncentiveDashboardPreview() {
  const leaderboard = [
    {
      name: "Jordan Lee",
      score: 142,
      tier: "Elite",
      initials: "JL",
      gradient: "from-emerald-500 to-teal-500"
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
      className="px-4 py-4 text-slate-900 sm:py-12"
      aria-labelledby="dashboard-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <ScrollFloat
              containerClassName="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
            >
              Incentives,{" "}
              <span className="text-emerald-600">leaderboards, and visibility</span> in
              one view.
            </ScrollFloat>
            <p className="mt-3 text-sm text-slate-900 sm:text-base">
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
          <div className="mb-4 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs text-emerald-700">EARN Overview</p>
              <p className="text-sm font-semibold text-slate-900">
                Incentives & Performance
              </p>
            </div>
            <div className="flex gap-2 text-[11px] text-slate-800">
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1">
                Active reps: <span className="font-semibold text-emerald-600">24</span>
              </span>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1">
                Rewards issued:{" "}
                <span className="font-semibold text-emerald-600">$18.4k</span>
              </span>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div className="space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-700">
                Leaderboard
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm">
                {leaderboard.map((rep, index) => (
                  <li
                    key={rep.name}
                    className="flex items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5 shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className={`flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br ${rep.gradient} text-xs font-semibold text-white`}>
                          {rep.initials}
                        </div>
                        <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-slate-200 text-[10px] font-bold text-emerald-700 ring-2 ring-white">
                          #{index + 1}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">{rep.name}</p>
                        <p className="text-[11px] text-slate-500">
                          Tier:{" "}
                          <span className={`font-medium ${rep.tier === 'Elite' ? 'text-emerald-600' : 'text-amber-600'}`}>{rep.tier}</span>
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-500">EARN Score</p>
                      <p className="text-lg font-bold text-emerald-600">
                        {rep.score}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-900 sm:text-sm">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-700">
                  Reward tiers
                </h3>
                <div className="mt-2 grid grid-cols-3 gap-2">
                  <Tier label="Silver" threshold="100" color="bg-slate-400" />
                  <Tier label="Gold" threshold="125" color="bg-emerald-400/70" />
                  <Tier label="Elite" threshold="140" color="bg-emerald-500" />
                </div>
              </div>
              <div>
                <h3 className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-700">
                  Performance distribution
                </h3>
                <div className="mt-2 flex h-2 overflow-hidden rounded-full bg-slate-200">
                  <span className="flex-1 bg-red-400/80" />
                  <span className="flex-[1.5] bg-amber-400/80" />
                  <span className="flex-[2.5] bg-emerald-500" />
                </div>
                <div className="mt-2 flex justify-between text-[11px] text-slate-500">
                  <span>Behind</span>
                  <span>On Track</span>
                  <span>Overperforming</span>
                </div>
              </div>
              <div>
                <h3 className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-700">
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
    <div className="flex flex-col gap-1 rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
      <div className="flex items-center justify-between gap-2">
        <span className="text-[11px] font-medium text-slate-700">{label}</span>
        <span className={`h-2 w-8 rounded-full ${color}`} />
      </div>
      <span className="text-[11px] text-slate-500">From {threshold} EARN</span>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
      <p className="text-[11px] text-slate-500">{label}</p>
      <p className="text-sm font-semibold text-emerald-600">{value}</p>
    </div>
  );
}
