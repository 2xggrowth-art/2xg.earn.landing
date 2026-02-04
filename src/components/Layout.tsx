import { useState, useEffect, type ReactNode } from "react";
import { useBooking } from "../context/BookingContext";

export function Layout({ children }: { children: ReactNode }) {
  const { openModal } = useBooking();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <div className="min-h-screen bg-[#F9F8F6] text-slate-900 overflow-x-hidden">
      <header className="sticky top-0 z-50 border-b border-emerald-100/60 bg-[#f6fbf7]/80 backdrop-blur-xl shadow-sm supports-[backdrop-filter]:bg-[#f6fbf7]/60 overflow-x-hidden">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 overflow-x-hidden">
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
          <nav className="hidden items-center gap-6 text-base text-slate-800 md:flex">
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
              href="https://wa.me/919916516507"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/40 hover:scale-110 sm:h-11 sm:w-11"
              aria-label="Chat on WhatsApp"
            >
              <svg className="h-6 w-6 text-white sm:h-7 sm:w-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
              </span>
            </a>
            <button
              onClick={() => openModal()}
              type="button"
              className="hidden rounded-full border border-emerald-600/50 px-5 py-2.5 text-sm font-medium text-emerald-700 hover:border-emerald-600 hover:bg-emerald-50 md:inline-flex"
            >
              See How It Works
            </button>
            <button
              onClick={() => openModal()}
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
            >
              <span className="sm:hidden">Book Call</span>
              <span className="hidden sm:inline">Book a Strategy Call</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-[60] transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
          onClick={closeMenu}
        />

        {/* Menu Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-64 bg-white shadow-2xl transition-transform duration-300 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b border-slate-200">
              <span className="text-lg font-semibold text-slate-900">Menu</span>
              <button
                onClick={closeMenu}
                className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-700"
                aria-label="Close menu"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col p-4 space-y-1">
              <a
                href="#earn"
                onClick={closeMenu}
                className="px-4 py-3 text-base text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-colors"
              >
                EARN System
              </a>
              <a
                href="#roi"
                onClick={closeMenu}
                className="px-4 py-3 text-base text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-colors"
              >
                ROI Calculator
              </a>
              <a
                href="#pricing"
                onClick={closeMenu}
                className="px-4 py-3 text-base text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-colors"
              >
                Pricing
              </a>
              <a
                href="#faq"
                onClick={closeMenu}
                className="px-4 py-3 text-base text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-colors"
              >
                FAQ
              </a>
            </nav>

            <div className="mt-auto p-4 space-y-3 border-t border-slate-200">
              <button
                onClick={() => {
                  closeMenu();
                  openModal();
                }}
                type="button"
                className="block w-full rounded-full border border-emerald-600/50 px-5 py-2.5 text-sm font-medium text-center text-emerald-700 hover:border-emerald-600 hover:bg-emerald-50"
              >
                See How It Works
              </button>
              <button
                onClick={() => {
                  closeMenu();
                  openModal();
                }}
                type="button"
                className="w-full inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 hover:bg-emerald-400"
              >
                Book a Strategy Call
              </button>
            </div>
          </div>
        </div>
      </div>

      <main className="overflow-x-hidden">{children}</main>

    </div>
  );
}
