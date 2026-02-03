import type { ReactNode } from "react";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f6fbf7] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-emerald-100/60 bg-[#f6fbf7]/80 backdrop-blur-xl shadow-sm supports-[backdrop-filter]:bg-[#f6fbf7]/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="2XG EARN" className="h-7 w-auto object-contain sm:h-8" />
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold tracking-tight text-slate-900 sm:text-base">
                2XG EARN
              </span>
              <span className="hidden text-xs text-slate-500 min-[380px]:block">
                Sales Performance System
              </span>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-800 md:flex">
            <a href="#earn" className="hover:text-emerald-600 transition-colors">
              EARN System
            </a>
            <a href="#roi" className="hover:text-emerald-600 transition-colors">
              ROI Calculator
            </a>
            <a href="#pricing" className="hover:text-emerald-600 transition-colors">
              Pricing
            </a>
            <a href="#faq" className="hover:text-emerald-600 transition-colors">
              FAQ
            </a>
          </nav>
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="#earn"
              className="hidden rounded-full border border-emerald-600/50 px-4 py-2 text-xs font-medium text-emerald-700 hover:border-emerald-600 hover:bg-emerald-50 md:inline-flex"
            >
              See How It Works
            </a>
            <a
              href="#cta"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
            >
              <span className="sm:hidden">Book Call</span>
              <span className="hidden sm:inline">Book a Strategy Call</span>
            </a>
          </div>
        </div>
      </header>
      <main>{children}</main>

    </div>
  );
}
