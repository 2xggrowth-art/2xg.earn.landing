const faqs = [
  {
    q: "Is 2XG EARN coaching or software?",
    a: "2XG EARN is a performance system. We help you define the rules, incentives, and visibility, then plug them into the tools you already use. It's not personality-driven coaching that disappears when a person leaves."
  },
  {
    q: "How quickly can we see results?",
    a: "Most teams see leading indicator shifts (effort, pipeline, consistency) within 30 days and revenue impact within a 90-day cycle as EARN becomes the operating rhythm."
  },
  {
    q: "Do you integrate with our CRM?",
    a: "Phase one focuses on getting the performance rules right. From there, we connect EARN to your existing CRM and reporting stack so you don't add more manual work."
  },
  {
    q: "What team size is EARN best for?",
    a: "The system works for teams as small as 5 reps and scales to complex sales organizations. Pricing tiers are based on depth of incentives and analytics, not headcount alone."
  }
];

export function FAQ() {
  return (
    <section
      id="faq"
      className="px-4 py-16 text-slate-900 sm:py-20"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <h2
            id="faq-heading"
            className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
          >
            FAQ
          </h2>
          <p className="mt-3 text-sm text-slate-900 sm:text-base">
            Answers to the most common questions from founders, sales leaders, and
            RevOps teams considering EARN.
          </p>
        </div>

        <div className="mt-8 space-y-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-slate-200 bg-white/60 p-4 shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-medium text-slate-900">
                <span>{item.q}</span>
                <span
                  className="flex h-6 w-6 items-center justify-center rounded-full border border-slate-200 text-xs text-slate-500 group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-xs text-slate-800 sm:text-sm">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
