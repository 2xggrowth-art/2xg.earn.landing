import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import ScrollFloat from './ScrollFloat';

export function ROICalculator() {
  const [reps, setReps] = useState(8);
  const [avgDeal, setAvgDeal] = useState(50000);
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
      className="px-4 py-6 text-slate-900 sm:py-10 overflow-hidden"
      aria-labelledby="roi-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <ScrollFloat
              containerClassName="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
            >
              Model the{" "}
              <span className="text-emerald-600">90-day revenue impact</span>.
            </ScrollFloat>
            <p className="mt-3 text-base text-slate-900 sm:text-lg">
              Use your own numbers to see how a 25% performance lift compounds
              into quarterly revenue for your team.
            </p>
          </div>
          <p className="text-sm text-slate-700 sm:text-base">
            Based on results from Indian SMBs. Conservative +25% gain over 90 days.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <form
            className="group space-y-4 rounded-2xl border border-slate-200 bg-white/60 p-4 shadow-sm sm:p-5 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-200/30 hover:border-emerald-400 hover:bg-gradient-to-br hover:from-white hover:to-emerald-50/30"
            aria-label="ROI calculator inputs"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field
                label="Sales reps"
                value={reps}
                min={1}
                step={1}
                onChange={setReps}
              />
              <Field
                label="Deals/rep/month"
                value={dealsPerRep}
                min={1}
                step={1}
                onChange={setDealsPerRep}
              />
              <Field
                label="Avg deal value"
                prefix="₹"
                value={avgDeal}
                min={5000}
                step={5000}
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
            className="group space-y-4 rounded-2xl border border-emerald-200 bg-gradient-to-b from-emerald-100/50 to-white/80 p-5 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-emerald-200/50 hover:border-emerald-400 hover:from-emerald-100/70"
            aria-label="ROI calculator results"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <div>
                <p className="text-sm text-emerald-700 sm:text-base">Projected performance uplift</p>
                <p className="text-3xl font-semibold text-emerald-700 sm:text-4xl">
                  {upliftPercent.toFixed(0)}%
                </p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-600 shadow-sm sm:rounded-full sm:px-4 sm:py-1.5 sm:text-sm">
                EARN = E × A × R × N
              </div>
            </div>

            <dl className="grid gap-3 text-base">
              <ResultRow
                label="Current monthly revenue"
                value={currentRevenue}
              />
              <ResultRow
                label="Projected monthly with EARN"
                value={projectedRevenue}
                highlight
              />
              <ResultRow
                label="Extra revenue (90 days)"
                value={gain90}
                strong
              />
            </dl>

            <p className="text-sm text-slate-500 sm:text-base">
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
  min = 0,
  max,
  step,
  prefix,
  suffix
}: FieldProps) {
  const [inputValue, setInputValue] = useState(value.toString());
  const [error, setError] = useState<string | null>(null);

  const validate = (val: string): { valid: boolean; num: number; error: string | null } => {
    if (val.trim() === '') {
      return { valid: false, num: 0, error: 'Required' };
    }

    const num = Number(val);

    if (isNaN(num)) {
      return { valid: false, num: 0, error: 'Invalid number' };
    }

    if (num < min) {
      return { valid: false, num, error: `Min ${prefix || ''}${min.toLocaleString('en-IN')}${suffix || ''}` };
    }

    if (max !== undefined && num > max) {
      return { valid: false, num, error: `Max ${prefix || ''}${max.toLocaleString('en-IN')}${suffix || ''}` };
    }

    return { valid: true, num, error: null };
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInputValue(val);

    const { valid, num, error: validationError } = validate(val);
    setError(validationError);

    if (valid) {
      onChange(num);
    }
  };

  const handleBlur = () => {
    const { valid, num } = validate(inputValue);
    if (!valid) {
      // Reset to last valid value on blur if invalid
      const clampedValue = Math.max(min, max !== undefined ? Math.min(max, value) : value);
      setInputValue(clampedValue.toString());
      setError(null);
      onChange(clampedValue);
    }
  };

  return (
    <label className="flex flex-col gap-1 text-sm text-slate-900 sm:text-base">
      <span className="flex items-center justify-between">
        {label}
        {error && (
          <span className="text-xs text-red-500 font-medium">{error}</span>
        )}
      </span>
      <div className={`flex items-center rounded-xl border bg-white px-4 py-2.5 shadow-sm transition-all duration-300 ${
        error
          ? 'border-red-300 focus-within:border-red-400 focus-within:ring-2 focus-within:ring-red-400/50'
          : 'border-slate-200 focus-within:border-emerald-400 focus-within:ring-2 focus-within:ring-emerald-400/50 hover:border-emerald-300 hover:shadow-md'
      }`}>
        {prefix && <span className="mr-1 text-slate-500">{prefix}</span>}
        <input
          type="number"
          inputMode="decimal"
          className="w-full bg-transparent text-base text-slate-900 outline-none placeholder:text-slate-400"
          value={inputValue}
          min={min}
          max={max}
          step={step}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-label={label}
          aria-invalid={!!error}
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
    <div className="flex items-baseline justify-between gap-2 rounded-lg p-1 transition-all duration-300 hover:bg-emerald-50/50">
      <dt className="text-sm text-slate-900 sm:text-base leading-tight flex-1">{label}</dt>
      <dd
        className={`text-base tabular-nums sm:text-lg transition-all duration-300 whitespace-nowrap flex-shrink-0 ${strong
          ? "font-semibold text-emerald-700"
          : highlight
            ? "font-medium text-emerald-600"
            : "text-slate-900"
          }`}
      >
        ₹{value.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
      </dd>
    </div>
  );
}
