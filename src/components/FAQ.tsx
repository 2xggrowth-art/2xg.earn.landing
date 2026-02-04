import { useState } from "react";

const faqs = [
  {
    q: "How is 2XG EARN different from Zoho CRM or Salesforce?",
    a: "We integrate with CRMs but add an enforcement layer. CRMs track what your team says they'll do—we ensure they actually do it through automated accountability, deadline tracking, and completion verification."
  },
  {
    q: "Is pricing in INR? Do you work with Indian companies?",
    a: "Yes, 2XG EARN is built specifically for Indian SMBs. All pricing is in ₹, support is available during IST business hours, and we have case studies from Indian E-commerce and Manufacturing companies."
  },
  {
    q: "What if my team already resists using our current CRM?",
    a: "That's exactly why we built EARN. The system enforces automatically—reducing resistance through mobile-first updates, automated reminders, and taking the burden off manual data entry."
  },
  {
    q: "What ROI should we expect?",
    a: "Conservative estimates show 300-500% ROI in the first 90 days. This includes 20-30% conversion improvement and 15-20 hours saved per week on reporting and follow-up management."
  },
  {
    q: "What's the implementation time?",
    a: "1-2 weeks to launch, 90 days to full transformation. This is not a 6-month consulting project—it's built for SMB speed and budget."
  },
  {
    q: "Do you integrate with our existing tools?",
    a: "Yes—we integrate with Zoho, Salesforce, and HubSpot. You can also import from Excel/Google Sheets. WhatsApp notifications are available for field sales teams."
  }
];

export function FAQ() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section
      id="faq"
      className="px-4 py-6 text-slate-900 sm:py-10 overflow-hidden"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <h2
            id="faq-heading"
            className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            FAQ
          </h2>
          <p className="mt-3 text-base text-slate-900 sm:text-lg">
            Answers to the most common questions from founders, sales leaders, and
            RevOps teams considering EARN.
          </p>
        </div>

        <div className="mt-8 space-y-3">
          {faqs.slice(0, showAll ? faqs.length : 3).map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-slate-200 bg-white/60 p-4 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-emerald-200/30 hover:border-emerald-400 hover:bg-gradient-to-r hover:from-white hover:to-emerald-50/30 md:block"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-base font-medium text-slate-900 sm:text-lg">
                <span>{item.q}</span>
                <span
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 text-sm text-slate-500 transition-all duration-300 group-open:rotate-45 group-open:bg-emerald-500 group-open:text-white group-open:border-emerald-500 group-hover:border-emerald-400 group-hover:text-emerald-600 group-hover:scale-110"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-slate-800 sm:text-base">{item.a}</p>
            </details>
          ))}
          {faqs.slice(showAll ? faqs.length : 3).map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-slate-200 bg-white/60 p-4 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-emerald-200/30 hover:border-emerald-400 hover:bg-gradient-to-r hover:from-white hover:to-emerald-50/30 hidden md:block"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-base font-medium text-slate-900 sm:text-lg">
                <span>{item.q}</span>
                <span
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 text-sm text-slate-500 transition-all duration-300 group-open:rotate-45 group-open:bg-emerald-500 group-open:text-white group-open:border-emerald-500 group-hover:border-emerald-400 group-hover:text-emerald-600 group-hover:scale-110"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-slate-800 sm:text-base">{item.a}</p>
            </details>
          ))}
        </div>

        {!showAll && (
          <div className="mt-6 flex justify-center md:hidden">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-white px-6 py-3 text-base font-semibold text-emerald-700 shadow-sm transition-all duration-300 hover:border-emerald-500 hover:bg-emerald-50 hover:scale-105 hover:shadow-md active:scale-95"
            >
              See All Questions
              <span className="text-lg">→</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
