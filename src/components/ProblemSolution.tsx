import ScrollFloat from './ScrollFloat';

export function ProblemSolution() {
  return (
    <section
      id="problem"
      className="px-4 py-4 text-slate-900 sm:py-12"
      aria-labelledby="problem-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <ScrollFloat
            containerClassName="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
          >
            The gap between <span className="text-red-600">potential</span> and{" "}
            <span className="text-emerald-600">paycheck</span>.
          </ScrollFloat>
          <p className="mt-3 text-sm text-slate-900 sm:text-base">
            Most sales teams have a "black box" between activity and revenue. Only the
            top 10% figure it out. The rest struggle with inconsistent motivation and
            unclear math.
          </p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="space-y-4 rounded-2xl border border-red-200 bg-white/60 p-4 sm:p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-red-700">
              The hidden cost of &quot;just managing&quot; sales
            </h3>
            <ul className="space-y-3 text-sm text-slate-900">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                <span>Missed targets month after month with no clear pattern.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                <span>Reps are reactive and inconsistent, motivation spikes then fades.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                <span>Leaders can&apos;t see which behaviors actually drive revenue.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                <span>Incentive programs are ad-hoc and rarely change performance.</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4 rounded-2xl border border-emerald-200 bg-white/60 p-4 sm:p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-emerald-700">
              How 2XG EARN installs a repeatable system
            </h3>
            <ul className="space-y-3 text-sm text-slate-900">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                <span>
                  Clear performance rules that define what great effort looks like for
                  every role.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                <span>
                  Incentives mapped directly to the activities and milestones that move
                  deals forward.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                <span>
                  Real-time visibility into team effort, pipeline health, and earned
                  rewards.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                <span>
                  A 90-day operating rhythm that turns sporadic performance into a
                  system.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
