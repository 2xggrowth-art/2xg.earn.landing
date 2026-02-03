import { useState } from "react";
import ScrollFloat from './ScrollFloat';

const tiers = [
  {
    name: "Starter",
    description: "For lean teams installing their first performance system.",
    monthly: 790,
    yearly: 790 * 10,
    features: [
      "Up to 10 sales reps",
      "Core EARN scorecards",
      "Pipeline visibility dashboard",
      "Email support"
    ]
  },
  {
    name: "Growth",
    description: "For scaling teams who need deeper incentives and analytics.",
    monthly: 1490,
    yearly: 1490 * 10,
    featured: true,
    features: [
      "Up to 30 sales reps",
      "Advanced EARN rules & tiers",
      "Incentive experiment tracking",
      "Quarterly performance reviews"
    ]
  },
  {
    name: "Pro",
    description: "For revenue organizations that want a systemized growth engine.",
    monthly: 2490,
    yearly: 2490 * 10,
    features: [
      "Unlimited sales seats",
      "Custom EARN architecture",
      "RevOps & CRM integration support",
      "Monthly strategy sessions"
    ]
  }
];

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section
      id="pricing"
      className="px-4 py-2 text-slate-900 sm:py-12"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <ScrollFloat
              containerClassName="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
            >
              Pricing built around{" "}
              <span className="text-emerald-600">system-enforced growth</span>.
            </ScrollFloat>
            <p className="mt-3 text-sm text-slate-900 sm:text-base">
              Choose the level of depth your team needs—from simple scorecards to a fully
              integrated sales performance system.
            </p>
          </div>
          <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white p-1 text-xs text-slate-800 shadow-sm">
            <button
              type="button"
              className={`rounded-full px-3 py-1.5 transition-colors ${!isYearly ? "bg-emerald-500 text-white shadow-sm" : "hover:text-slate-900"
                }`}
              onClick={() => setIsYearly(false)}
              aria-pressed={!isYearly}
            >
              Monthly
            </button>
            <button
              type="button"
              className={`flex items-center gap-1 rounded-full px-3 py-1.5 transition-colors ${isYearly ? "bg-emerald-500 text-white shadow-sm" : "hover:text-slate-900"
                }`}
              onClick={() => setIsYearly(true)}
              aria-pressed={isYearly}
            >
              Yearly
              <span className={`hidden text-[10px] font-medium md:inline ${isYearly ? "text-emerald-50" : "text-emerald-600"}`}>
                (2 months free)
              </span>
            </button>
          </div>
        </div>

        <div className="mt-8 flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0">
          {tiers.map((tier) => {
            const price = isYearly ? tier.yearly : tier.monthly;
            return (
              <div
                key={tier.name}
                className={`relative flex min-w-[85vw] flex-shrink-0 flex-col gap-4 rounded-2xl border bg-white/60 p-5 shadow-sm snap-center md:min-w-0 md:w-auto ${tier.featured
                  ? "border-emerald-400 shadow-emerald-100 ring-1 ring-emerald-400/20"
                  : "border-slate-200"
                  }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                    {tier.name}
                  </h3>
                  {tier.featured && (
                    <span className="rounded-full bg-emerald-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-700">
                      Most popular
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-900 sm:text-sm">{tier.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-semibold text-slate-900 sm:text-2xl">
                    ${price.toLocaleString()}
                  </span>
                  <span className="text-xs text-slate-500">
                    / {isYearly ? "year" : "month"}
                  </span>
                </div>
                <ul className="flex-1 space-y-2 text-xs text-slate-900 sm:text-sm">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#cta"
                  className={`mt-2 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${tier.featured
                    ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 hover:bg-emerald-400"
                    : "border border-emerald-300 text-emerald-700 hover:border-emerald-400 hover:bg-emerald-50"
                    }`}
                >
                  Book a Strategy Call
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
