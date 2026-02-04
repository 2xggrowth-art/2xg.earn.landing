import { useBooking } from "../context/BookingContext";

export function CTASection() {
  const { openModal } = useBooking();
  return (
    <section
      id="cta"
      className="px-4 py-6 text-slate-900 sm:py-10 overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto max-w-5xl rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-white p-8 shadow-2xl shadow-emerald-900/5 sm:p-10 transition-all duration-500 hover:shadow-emerald-300/30 hover:border-emerald-300">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-center">
          <div className="space-y-6">
            <div>
              <h2
                id="cta-heading"
                className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
              >
                Ready to stop micromanaging and{" "}
                <span className="text-emerald-600">start scaling</span>?
              </h2>
              <p className="mt-4 text-base text-slate-900 sm:text-lg leading-relaxed">
                Join 100+ Indian SMBs in E-commerce, Retail, and Manufacturing who&apos;ve
                transformed their sales teams in just 90 days.
              </p>
            </div>

            <div>
              <button
                onClick={() => openModal()}
                type="button"
                className="inline-flex items-center justify-center rounded-full border border-emerald-300 px-6 py-3 text-base font-medium text-emerald-700 transition-all duration-300 hover:bg-emerald-50 hover:scale-105 hover:border-emerald-400 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 active:scale-95"
              >
                Calculate Your ROI
              </button>
            </div>

            <div className="space-y-4 pt-2">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-800">
                What we cover on the call:
              </p>
              <ul className="space-y-3 text-base text-slate-700">
                <li className="flex gap-3 items-start">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                  <span>Your current targets & baseline performance</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                  <span>Where accountability is breaking down</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                  <span>Your draft 90-day rollout plan</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-500 pt-2">
              <span>✓ Built for Indian SMBs</span>
              <span>✓ 90-day transformation</span>
              <span>✓ CRM Integrations</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center rounded-2xl border border-emerald-100 bg-white/50 p-8 text-center shadow-lg backdrop-blur-sm">
            <h3 className="mb-4 text-2xl font-bold text-slate-900 sm:text-3xl">
              Transform Your Sales Team Today
            </h3>
            <p className="mb-8 text-base text-slate-600 sm:text-lg">
              Stop losing revenue to inefficiency. Get your custom 90-day growth plan.
            </p>
            <button
              onClick={() => openModal()}
              className="w-full max-w-sm rounded-lg bg-emerald-600 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-emerald-500/30 transition-all hover:bg-emerald-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-500/40 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              Book Your Free Strategy Session
            </button>
            <p className="mt-4 text-sm text-slate-500">
              Limited spots available for this month.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

