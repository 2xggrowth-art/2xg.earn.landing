import { useState } from "react";
import ScrollFloat from './ScrollFloat';
import { useBooking } from "../context/BookingContext";

const tiers = [
  {
    name: "Starter",
    description: "For Indian SMBs (3-10 reps) building their first accountability system.",
    monthly: 29900,
    yearly: 29900 * 10,
    features: [
      "Up to 10 sales reps",
      "Core EARN scorecards",
      "Pipeline visibility dashboard",
      "Email & WhatsApp support"
    ]
  },
  {
    name: "Growth",
    description: "For growing Indian SMBs (10-25 reps) who need enforcement + analytics.",
    monthly: 49900,
    yearly: 49900 * 10,
    featured: true,
    features: [
      "Up to 30 sales reps",
      "Advanced EARN rules & tiers",
      "Zoho, Salesforce, HubSpot integration",
      "Quarterly performance reviews"
    ]
  },
  {
    name: "Pro",
    description: "For established Indian SMBs (25-50 reps) with multi-location teams.",
    monthly: 79900,
    yearly: 79900 * 10,
    features: [
      "Unlimited sales seats",
      "Custom EARN architecture",
      "Full CRM integration support",
      "Monthly strategy sessions"
    ]
  }
];

export function PricingSection() {
  const { openModal } = useBooking();
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section
      id="pricing"
      className="px-4 py-6 text-slate-900 sm:py-10 overflow-hidden"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <ScrollFloat
              containerClassName="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
            >
              ROI-based pricing.{" "}
              <span className="text-emerald-600">Pay based on team size</span>.
            </ScrollFloat>
            <p className="mt-3 text-base text-slate-900 sm:text-lg">
              Transparent INR pricing for Indian SMBs. No hidden fees, no feature bloat.
            </p>
          </div>
          <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white p-1 text-sm text-slate-800 shadow-sm">
            <button
              type="button"
              className={`rounded-full px-4 py-2 transition-colors ${!isYearly ? "bg-emerald-500 text-white shadow-sm" : "hover:text-slate-900"
                }`}
              onClick={() => setIsYearly(false)}
              aria-pressed={!isYearly}
            >
              Monthly
            </button>
            <button
              type="button"
              className={`flex items-center gap-1 rounded-full px-4 py-2 transition-colors ${isYearly ? "bg-emerald-500 text-white shadow-sm" : "hover:text-slate-900"
                }`}
              onClick={() => setIsYearly(true)}
              aria-pressed={isYearly}
            >
              Yearly
              <span className={`hidden text-xs font-medium md:inline ${isYearly ? "text-emerald-50" : "text-emerald-600"}`}>
                (2 months free)
              </span>
            </button>
          </div>
        </div>

        <div className="mt-8 flex gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-x-visible">
          {tiers.map((tier) => {
            const price = isYearly ? tier.yearly : tier.monthly;
            return (
              <div
                key={tier.name}
                className={`group relative flex flex-col gap-4 rounded-2xl border bg-white/60 p-5 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] cursor-default min-w-[320px] md:min-w-0 ${tier.featured
                  ? "border-emerald-400 shadow-emerald-100 ring-1 ring-emerald-400/20 hover:shadow-emerald-300/50 hover:ring-2 hover:bg-gradient-to-br hover:from-white hover:to-emerald-50/50"
                  : "border-slate-200 hover:border-emerald-400 hover:shadow-emerald-200/30 hover:bg-gradient-to-br hover:from-white hover:to-emerald-50/30"
                  }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
                    {tier.name}
                  </h3>
                  {tier.featured && (
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700 transition-all duration-300 group-hover:bg-emerald-500 group-hover:text-white group-hover:scale-105">
                      Most popular
                    </span>
                  )}
                </div>
                <p className="text-sm text-slate-900 sm:text-base">{tier.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-semibold text-slate-900 sm:text-3xl transition-colors duration-300 group-hover:text-emerald-600">
                    ₹{price.toLocaleString('en-IN')}
                  </span>
                  <span className="text-sm text-slate-500">
                    / {isYearly ? "year" : "month"}
                  </span>
                </div>
                <ul className="flex-1 space-y-2 text-sm text-slate-900 sm:text-base">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500 transition-transform duration-300 group-hover:scale-150" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => openModal()}
                  className={`mt-2 inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold transition-all duration-300 active:scale-95 ${tier.featured
                    ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 hover:scale-105 hover:shadow-xl hover:shadow-emerald-400/40"
                    : "border border-emerald-300 text-emerald-700 hover:border-emerald-500 hover:bg-emerald-50 hover:scale-105 hover:shadow-md"
                    }`}
                >
                  Book a Strategy Call
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
