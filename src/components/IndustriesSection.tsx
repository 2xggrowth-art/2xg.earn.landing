export function IndustriesSection() {
  // Add style for hiding scrollbar
  const scrollContainerStyle = {
    scrollbarWidth: 'none' as const,
    msOverflowStyle: 'none' as const,
    WebkitOverflowScrolling: 'touch' as const,
  };

  const industries = [
    {
      title: "Electronics Retail",
      subtitle: "Laptop, Mobile, Appliances & Consumer Electronics",
      description: "System-enforced demo tracking, omnichannel follow-ups, and accessory up-sell automation",
      challenges: [
        "Demo no-shows & poor conversion (15% avg)",
        "Lost opportunities during festival sales peaks",
        "Missed accessory & warranty up-sells",
        "No visibility into multi-channel customer journey"
      ],
      results: [
        { label: "Demo Conversion Rate", before: "15%", after: "32%", improvement: "+113%" },
        { label: "Additional Annual Revenue", value: "₹1.6 Cr", subtext: "per 10-person team" },
        { label: "Lead Response Time", before: "24-48 hrs", after: "<2 hrs", improvement: "92% faster" },
        { label: "Management Time Saved", value: "85%", subtext: "20hrs → 3hrs/week" }
      ],
      stats: {
        customers: "150+",
        avgTeamSize: "8-15 reps",
        roi: "7x in 90 days"
      },
      color: "from-blue-600 via-indigo-600 to-purple-600",
      iconBg: "bg-gradient-to-br from-blue-500 to-indigo-600",
      link: "#electronics-retail"
    },
    {
      title: "E-Cycles & Mobility",
      subtitle: "E-Bikes, E-Scooters & Electric Vehicle Dealers",
      description: "Test ride optimization, financing fast-track, and post-purchase lifecycle management",
      challenges: [
        "Test ride no-shows (35% avg) & low conversion (18%)",
        "Long consideration period (4 weeks avg)",
        "Financing delays killing deals (10 days avg)",
        "Zero post-purchase engagement & referrals"
      ],
      results: [
        { label: "Test Ride Conversion", before: "18%", after: "42%", improvement: "+133%" },
        { label: "Additional Annual Revenue", value: "₹6.8 Cr", subtext: "per 10-person team" },
        { label: "Financing Approval Time", before: "10 days", after: "3 days", improvement: "70% faster" },
        { label: "Customer Referral Rate", before: "3%", after: "18%", improvement: "6x increase" }
      ],
      stats: {
        customers: "80+",
        avgTeamSize: "5-12 reps",
        roi: "12x in 90 days"
      },
      color: "from-emerald-600 via-teal-600 to-cyan-600",
      iconBg: "bg-gradient-to-br from-emerald-500 to-teal-600",
      link: "#e-mobility"
    }
  ];

  return (
    <>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <section id="industries" className="relative py-12 sm:py-20 md:py-32 overflow-hidden">
        {/* Background gradient with pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50 pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16 md:mb-20 max-w-full overflow-hidden">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 px-4 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-emerald-800 mb-4 sm:mb-6 border border-emerald-200/50 max-w-full">
            <svg className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span className="break-words">Industry-Optimized Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 tracking-tight px-4 break-words max-w-full">
            Proven Results for{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent break-words">
              Your Industry
            </span>
          </h2>
          <p className="text-base sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4 break-words">
            Pre-configured enforcement workflows, industry-specific metrics, and proven playbooks.<br className="hidden sm:block" />
            <span className="text-slate-900 font-semibold break-words">Go live in 72 hours, not 6 weeks.</span>
          </p>
        </div>

        {/* Industry Cards */}
        <div
          className="hide-scrollbar md:grid md:grid-cols-2 md:gap-6 lg:gap-8 flex md:flex-none overflow-x-auto gap-4 pb-4 snap-x snap-mandatory -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0"
          style={scrollContainerStyle}
        >
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-200/50 min-w-[90vw] sm:min-w-[420px] md:min-w-0 snap-center flex-shrink-0 max-w-[90vw] sm:max-w-none"
            >
              {/* Card gradient overlay */}
              <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${industry.color} opacity-[0.07] rounded-full blur-3xl group-hover:opacity-[0.12] transition-opacity duration-500`} />

              <div className="relative p-4 sm:p-8 md:p-10 overflow-hidden max-w-full">
                {/* Icon & Title */}
                <div className="flex items-start gap-2.5 mb-3 sm:mb-6">
                  <div className={`flex-shrink-0 w-9 h-9 sm:w-16 sm:h-16 ${industry.iconBg} rounded-lg sm:rounded-2xl flex items-center justify-center shadow-lg`}>
                    <svg className="w-5 h-5 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0 max-w-full">
                    <h3 className="text-base sm:text-2xl md:text-3xl font-bold text-slate-900 mb-0.5 sm:mb-1 leading-tight break-words">
                      {industry.title}
                    </h3>
                    <p className="text-[9px] sm:text-xs font-medium text-slate-500 uppercase tracking-wide line-clamp-2 break-words">
                      {industry.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[11px] sm:text-base text-slate-700 mb-4 sm:mb-8 leading-relaxed break-words max-w-full">
                  {industry.description}
                </p>

                {/* Key Challenges */}
                <div className="mb-4 sm:mb-8">
                  <h4 className="text-[9px] sm:text-xs font-bold text-slate-900 uppercase tracking-wide mb-2 sm:mb-4">
                    Key Challenges We Solve:
                  </h4>
                  <div className="space-y-1.5 sm:space-y-3">
                    {industry.challenges.map((challenge, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 sm:gap-2 max-w-full">
                        <svg className="w-3 h-3 sm:w-5 sm:h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span className="text-[10px] sm:text-sm text-slate-600 leading-snug sm:leading-relaxed break-words flex-1">{challenge}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-1.5 sm:gap-4 p-2.5 sm:p-6 bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-lg sm:rounded-xl border border-slate-200/50 mb-4 sm:mb-8 max-w-full overflow-hidden">
                  <div className="text-center overflow-hidden">
                    <div className="text-sm sm:text-xl font-bold text-slate-900 truncate break-words">{industry.stats.customers}</div>
                    <div className="text-[9px] sm:text-xs text-slate-600 mt-0.5 break-words">Customers</div>
                  </div>
                  <div className="text-center overflow-hidden">
                    <div className="text-sm sm:text-xl font-bold text-slate-900 truncate break-words">{industry.stats.avgTeamSize}</div>
                    <div className="text-[9px] sm:text-xs text-slate-600 mt-0.5 line-clamp-1 break-words">Team Size</div>
                  </div>
                  <div className="text-center overflow-hidden">
                    <div className="text-sm sm:text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent truncate break-words">{industry.stats.roi}</div>
                    <div className="text-[9px] sm:text-xs text-slate-600 mt-0.5 break-words">ROI</div>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href={industry.link}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg sm:rounded-xl bg-gradient-to-r from-slate-900 to-slate-800 px-4 sm:px-8 py-2.5 sm:py-4 text-xs sm:text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <span className="break-words">Learn More</span>
                  <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 sm:mt-16 text-center px-4">
          <div className="inline-block p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100/50 border border-slate-200/50 max-w-2xl overflow-hidden">
            <p className="text-base sm:text-lg text-slate-700 mb-3 sm:mb-4 font-medium break-words">
              Don't see your industry? We can help.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 mb-5 sm:mb-6 max-w-md mx-auto break-words">
              We've successfully implemented 2XG EARN across Manufacturing, B2B Services, FMCG Distribution, and more.
            </p>
            <a
              href="https://wa.me/919916516507"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 sm:gap-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <svg className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span className="break-words">Schedule a Strategy Call</span>
            </a>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}
