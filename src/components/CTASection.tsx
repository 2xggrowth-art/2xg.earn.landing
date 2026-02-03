export function CTASection() {
  return (
    <section
      id="cta"
      className="px-4 pb-20 pt-10 text-slate-900 sm:pb-24 sm:pt-16"
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto max-w-5xl rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-white p-6 shadow-2xl shadow-emerald-900/5 sm:p-10">
        <div className="grid gap-6 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-center">
          <div>
            <h2
              id="cta-heading"
              className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
            >
              Ready to unlock your team&apos;s{" "}
              <span className="text-emerald-600">true performance</span>?
            </h2>
            <p className="mt-3 text-sm text-slate-900 sm:text-base">
              Book a strategy call to see how the EARN system would apply to your
              pipeline, incentives, and team structure over the next 90 days.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-200/50 hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              >
                Book a Strategy Call
              </a>
              <span className="text-xs text-slate-800 sm:text-sm">
                45 minutes • Focused on your numbers • No fluff
              </span>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-900 sm:text-sm">
            <p className="text-[11px] font-medium uppercase tracking-wide text-emerald-700">
              What we cover on the call
            </p>
            <ul className="mt-3 space-y-2">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span>Your current targets, conversion math, and baseline performance.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span>
                  Where incentives, visibility, and accountability are breaking down today.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span>
                  A draft EARN architecture and 90-day rollout plan tailored to your team.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

