import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import ScrollFloat from './ScrollFloat';

export function ROICalculator() {
  const [reps, setReps] = useState(8);
  const [avgDeal, setAvgDeal] = useState(5000);
  const [closeRate, setCloseRate] = useState(25);
  const [dealsPerRep, setDealsPerRep] = useState(6);

  const { currentRevenue, projectedRevenue, gain90, upliftPercent } = useMemo(() => {
    const current =
      reps * dealsPerRep * (closeRate / 100) * (isNaN(avgDeal) ? 0 : avgDeal);
    const projected = current * 1.25;
    const gain = (projected - current) * 3;
    const uplift = current > 0 ? ((projected - current) / current) * 100 : 0;
    return {
      currentRevenue: current,
      projectedRevenue: projected,
      gain90: gain,
      upliftPercent: uplift
    };
  }, [reps, avgDeal, closeRate, dealsPerRep]);

  return (
    <section
      id="roi"
      className="px-4 py-4 text-slate-900 sm:py-12"
      aria-labelledby="roi-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <ScrollFloat
              containerClassName="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
            >
              Model the{" "}
              <span className="text-emerald-600">90-day revenue impact</span>.
            </ScrollFloat>
            <p className="mt-3 text-sm text-slate-900 sm:text-base">
              Use your own numbers to see how a 25% performance lift, driven by the
              EARN system, compounds into quarterly revenue.
            </p>
          </div>
          <p className="text-xs text-slate-700 sm:text-sm">
            Assumes conservative +25% performance gain after EARN implementation.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <form
            className="space-y-4 rounded-2xl border border-slate-200 bg-white/60 p-4 shadow-sm sm:p-5"
            aria-label="ROI calculator inputs"
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <Field
                label="Sales reps"
                value={reps}
                min={1}
                step={1}
                onChange={setReps}
              />
              <Field
                label="Deals per rep / month"
                value={dealsPerRep}
                min={1}
                step={1}
                onChange={setDealsPerRep}
              />
              <Field
                label="Avg deal value"
                prefix="$"
                value={avgDeal}
                min={500}
                step={500}
                onChange={setAvgDeal}
              />
              <Field
                label="Close rate"
                suffix="%"
                value={closeRate}
                min={5}
                max={80}
                step={5}
                onChange={setCloseRate}
              />
            </div>
          </form>

          <div
            className="space-y-4 rounded-2xl border border-emerald-200 bg-gradient-to-b from-emerald-100/50 to-white/80 p-5 shadow-sm"
            aria-label="ROI calculator results"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs text-emerald-700">Projected performance uplift</p>
                <p className="text-2xl font-semibold text-emerald-700">
                  {upliftPercent.toFixed(0)}%
                </p>
              </div>
              <div className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 shadow-sm">
                EARN = Effort × Accountability × Rewards × Numbers
              </div>
            </div>

            <dl className="grid gap-3 text-sm">
              <ResultRow
                label="Current monthly revenue"
                value={currentRevenue}
              />
              <ResultRow
                label="Projected monthly revenue with EARN"
                value={projectedRevenue}
                highlight
              />
              <ResultRow
                label="Additional revenue over 90 days"
                value={gain90}
                strong
              />
            </dl>

            <p className="text-xs text-slate-500">
              This is not a guarantee. It&apos;s a conservative model of what happens
              when incentives, visibility, and accountability are systemized instead of
              improvised.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

interface FieldProps {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
  step?: number;
  prefix?: string;
  suffix?: string;
}

function Field({
  label,
  value,
  onChange,
  min,
  max,
  step,
  prefix,
  suffix
}: FieldProps) {
  return (
    <label className="flex flex-col gap-1 text-xs text-slate-900 sm:text-sm">
      <span>{label}</span>
      <div className="flex items-center rounded-xl border border-slate-200 bg-white px-3 py-2 focus-within:border-emerald-400 focus-within:ring-1 focus-within:ring-emerald-400 shadow-sm">
        {prefix && <span className="mr-1 text-slate-500">{prefix}</span>}
        <input
          type="number"
          inputMode="decimal"
          className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
          value={Number.isNaN(value) ? "" : value}
          min={min}
          max={max}
          step={step}
          onChange={(e) => onChange(Number(e.target.value))}
          aria-label={label}
        />
        {suffix && <span className="ml-1 text-slate-500">{suffix}</span>}
      </div>
    </label>
  );
}

interface ResultRowProps {
  label: string;
  value: number;
  highlight?: boolean;
  strong?: boolean;
}

function ResultRow({ label, value, highlight, strong }: ResultRowProps) {
  return (
    <div className="flex items-baseline justify-between gap-3">
      <dt className="text-xs text-slate-900 sm:text-sm">{label}</dt>
      <dd
        className={`text-sm tabular-nums sm:text-base ${strong
          ? "font-semibold text-emerald-700"
          : highlight
            ? "font-medium text-emerald-600"
            : "text-slate-900"
          }`}
      >
        ${value.toLocaleString(undefined, { maximumFractionDigits: 0 })}
      </dd>
    </div>
  );
}
