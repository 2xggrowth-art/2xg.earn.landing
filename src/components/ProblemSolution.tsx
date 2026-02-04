import ScrollFloat from './ScrollFloat';

export function ProblemSolution() {
  return (
    <section
      id="problem"
      className="px-4 py-6 text-slate-900 sm:py-10 overflow-hidden"
      aria-labelledby="problem-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <ScrollFloat
            containerClassName="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            Your sales team isn't <span className="text-red-600">lazy</span>.{" "}
            Your <span className="text-emerald-600">system</span> is broken.
          </ScrollFloat>
          <p className="mt-3 text-base text-slate-900 sm:text-lg">
            If you're an Indian SMB founder or sales head, you already know: CRMs are
            graveyards of incomplete data. Your team says they're working hard, but you
            have no proof. Follow-ups get missed. Targets get missed.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          <div className="group space-y-5 rounded-2xl border border-red-200 bg-white/60 p-6 sm:p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-red-200/50 hover:border-red-400 hover:-translate-y-2 hover:scale-[1.02] cursor-default">
            <h3 className="text-lg font-semibold text-red-700 transition-colors duration-300 group-hover:text-red-600 sm:text-xl">
              Why your CRM isn&apos;t working
            </h3>
            <ul className="space-y-4 text-base text-slate-900">
              <li className="flex gap-3 items-start">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                <span>Your CRM (Zoho, Salesforce, HubSpot) is a graveyard of incomplete data.</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                <span>You spend 60% of your time micromanaging instead of growing.</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                <span>Follow-ups get missed. Pipeline forecasts are always wrong.</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                <span>Your team treats CRM updates as a burden, not a daily habit.</span>
              </li>
            </ul>
          </div>
          <div className="group space-y-5 rounded-2xl border border-emerald-200 bg-white/60 p-6 sm:p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-emerald-200/50 hover:border-emerald-400 hover:-translate-y-2 hover:scale-[1.02] hover:bg-gradient-to-br hover:from-white hover:to-emerald-50/50 cursor-default">
            <h3 className="text-lg font-semibold text-emerald-700 transition-colors duration-300 group-hover:text-emerald-600 sm:text-xl">
              How 2XG EARN enforces what your CRM only tracks
            </h3>
            <ul className="space-y-4 text-base text-slate-900">
              <li className="flex gap-3 items-start">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                <span>
                  System-enforced accountability: Automated reminders, deadline tracking,
                  and completion verification—no more micromanaging.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                <span>
                  Incentives tied to high-value activities that actually move deals forward.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                <span>
                  Real-time visibility: Know what's happening now, not what happened last week.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                <span>
                  Integrates with Zoho, Salesforce, HubSpot—we make your CRM work.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
