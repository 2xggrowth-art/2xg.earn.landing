import DecryptedText from './DecryptedText';

export function HeroSection() {
  return (
    <section
      className="hero-grid-bg border-b border-emerald-100/60"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-2 md:gap-12 md:py-24 lg:px-6">
        <div className="flex flex-col gap-6 md:gap-8">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-[10px] font-medium text-emerald-700 shadow-sm ring-1 ring-emerald-100 sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            System-Enforced Sales Growth
          </span>
          <div className="space-y-4">
            <h1
              id="hero-heading"
              className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
            >
              <DecryptedText
                text="Don't Just Manage Leads. "
                animateOn="view"
                sequential={true}
                speed={60}
                revealDirection="start"
                className="text-slate-900"
                encryptedClassName="text-slate-400"
              />
              <DecryptedText
                text="EARN"
                animateOn="view"
                sequential={true}
                speed={60}
                revealDirection="start"
                className="text-emerald-600"
                encryptedClassName="text-emerald-300"
              />
              <DecryptedText
                text=" From Them."
                animateOn="view"
                sequential={true}
                speed={60}
                revealDirection="start"
                className="text-slate-900"
                encryptedClassName="text-slate-400"
              />
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-slate-900 sm:text-base">
              2XG EARN is a structured sales performance platform that aligns
              incentives, accountability, and real-time tracking so teams hit
              targets consistently within 90 days.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#cta"
              className="inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 sm:w-auto"
            >
              Book a Strategy Call
            </a>
            <a
              href="#earn"
              className="inline-flex w-full items-center justify-center rounded-full border border-emerald-600/50 bg-white/80 px-5 py-2.5 text-sm font-medium text-emerald-700 hover:border-emerald-600 hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 sm:w-auto"
            >
              See How It Works
            </a>
          </div>
          <dl className="mt-2 grid grid-cols-3 gap-2 border-t border-emerald-100/50 pt-6 text-xs text-slate-900 sm:gap-4 sm:text-sm">
            <div className="space-y-1">
              <dt className="font-semibold text-slate-900">90 days</dt>
              <dd className="text-slate-800">To measurable performance lift</dd>
            </div>
            <div className="space-y-1">
              <dt className="font-semibold text-slate-900">Incentive-first</dt>
              <dd className="text-slate-800">Rewards aligned to behaviors</dd>
            </div>
            <div className="space-y-1">
              <dt className="font-semibold text-slate-900">System-based</dt>
              <dd className="text-slate-800">Not coaching, a framework</dd>
            </div>
          </dl>
        </div>
        <div
          className="flex items-center justify-center pt-4 md:pt-0"
          aria-label="Sales performance dashboard preview"
        >
          <div className="w-full max-w-md transform rounded-2xl bg-slate-900/95 p-4 shadow-2xl shadow-emerald-500/20 ring-1 ring-emerald-400/20 transition-transform duration-500 hover:scale-[1.02]">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-slate-400">
                  Team Performance
                </p>
                <p className="text-sm font-semibold text-slate-50">
                  Next 90 Days
                </p>
              </div>
              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[10px] font-medium text-emerald-300 sm:text-xs">
                +26% forecasted
              </span>
            </div>
            <div className="space-y-3">
              <div>
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span>Quota Attainment</span>
                  <span className="font-semibold text-emerald-400">78%</span>
                </div>
                <div className="mt-1 h-2 rounded-full bg-slate-800">
                  <div className="h-2 w-[78%] rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500" />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span>Incentive Engagement</span>
                  <span className="font-semibold text-emerald-300">92%</span>
                </div>
                <div className="mt-1 h-2 rounded-full bg-slate-800">
                  <div className="h-2 w-[92%] rounded-full bg-emerald-300" />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span>Pipeline Visibility</span>
                  <span className="font-semibold text-emerald-300">Full</span>
                </div>
                <div className="mt-1 grid grid-cols-4 gap-1 text-[10px] text-slate-400">
                  <span className="rounded bg-slate-800 px-2 py-1">
                    New
                  </span>
                  <span className="rounded bg-slate-800 px-2 py-1">
                    Qualified
                  </span>
                  <span className="rounded bg-slate-800 px-2 py-1">
                    Proposal
                  </span>
                  <span className="rounded bg-emerald-500/20 px-2 py-1 text-emerald-200">
                    Won
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-[11px]">
              <div className="rounded-xl bg-slate-800/80 p-2">
                <p className="text-slate-400">Top Rep</p>
                <p className="font-semibold text-slate-50">142% quota</p>
              </div>
              <div className="rounded-xl bg-slate-800/80 p-2">
                <p className="text-slate-400">Rewards Issued</p>
                <p className="font-semibold text-emerald-300">$18.4k</p>
              </div>
              <div className="rounded-xl bg-slate-800/80 p-2">
                <p className="text-slate-400">ROI on Incentives</p>
                <p className="font-semibold text-emerald-300">5.2x</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
