import ScrollFloat from './ScrollFloat';

const testimonials = [
  {
    quote:
      "Within a single quarter, our team went from 'hope we hit' to everyone knowing exactly what to do daily to earn their number.",
    name: "Alex Rivera",
    role: "Founder & CEO, B2B SaaS",
    initials: "AR",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    quote:
      "EARN gave us language for performance. It turned tough conversations into objective scorecards and incentives.",
    name: "Morgan Blake",
    role: "Head of Sales, Growth Stage Startup",
    initials: "MB",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    quote:
      "We didn't need more training. We needed a system. EARN became the backbone of how we run sales.",
    name: "Taylor Chen",
    role: "VP Revenue, Performance-Driven Org",
    initials: "TC",
    gradient: "from-emerald-500 to-teal-500"
  }
];

export function Testimonials() {
  return (
    <section
      className="px-4 py-16 text-slate-900 sm:py-20"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollFloat
          containerClassName="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
        >
          Teams that switch to{" "}
          <span className="text-emerald-600">system-enforced performance</span>.
        </ScrollFloat>
        <p className="mt-3 max-w-2xl text-sm text-slate-900 sm:text-base">
          2XG EARN is built for founders, sales leaders, and RevOps who want a durable
          operating model—not another motivation campaign.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col justify-between gap-4 rounded-2xl border border-slate-200 bg-white/60 p-5 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <svg className="h-6 w-6 flex-shrink-0 text-emerald-500/40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="text-sm text-slate-900">
                  {t.quote}
                </blockquote>
              </div>
              <figcaption className="flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${t.gradient} text-sm font-semibold text-white shadow-lg`}>
                  {t.initials}
                </div>
                <div className="text-xs text-slate-700">
                  <div className="font-medium text-slate-900">{t.name}</div>
                  <div>{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
