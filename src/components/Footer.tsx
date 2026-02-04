import { useBooking } from "../context/BookingContext";

export function Footer() {
    const { openModal } = useBooking();
    return (
        <footer className="border-t border-slate-200 bg-slate-50">
            <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
                <div className="grid gap-8 text-sm text-slate-800 md:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)_minmax(0,1.4fr)]">
                    <div>
                        <div className="flex items-center gap-2">
                            <img src="/logo.png" alt="2XG EARN" className="h-7 w-auto object-contain sm:h-8" />
                            <div className="flex flex-col leading-tight">
                                <span className="text-sm font-semibold tracking-tight text-slate-900 sm:text-base">
                                    2XG EARN
                                </span>
                                <span className="text-xs text-emerald-700/90">Sales Performance System</span>
                            </div>
                        </div>
                        <p className="mt-4 max-w-md text-sm text-slate-800 sm:text-base">
                            System-enforced sales accountability for Indian SMBs. Transform your team from reactive to results-driven in 90 days.
                        </p>
                        <div className="mt-4 space-y-2 text-sm text-slate-600">
                            <p>Proudly serving Indian SMBs since 2024</p>
                            <p>Data hosted in India · Support during IST hours</p>
                            <p>Payment: UPI, Credit Card, Net Banking</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-900">
                            Product
                        </h3>
                        <div className="mt-4 flex flex-col gap-2 text-base">
                            <a href="#earn" className="hover:text-emerald-600 transition-colors">
                                EARN System Overview
                            </a>
                            <a href="#roi" className="hover:text-emerald-600 transition-colors">
                                ROI Calculator
                            </a>
                            <a href="#pricing" className="hover:text-emerald-600 transition-colors">
                                Pricing & Engagement
                            </a>
                            <a href="#faq" className="hover:text-emerald-600 transition-colors">
                                FAQ
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-900">
                            Get in touch
                        </h3>
                        <div className="mt-4 space-y-3 text-base">
                            <p>
                                Ready to see how EARN could plug into your comp plan? Book a strategy call and we&apos;ll map it
                                out with your numbers.
                            </p>
                            <button
                                onClick={() => openModal()}
                                type="button"
                                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-200/50 hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 transition-all"
                            >
                                Book a strategy call
                            </button>
                            <p className="text-sm text-slate-600">
                                Average clients see measurable earnings lift within the first 90 days.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 text-sm text-slate-600 md:flex-row">
                    <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
                        <p>© {new Date().getFullYear()} 2XG EARN</p>
                        <span className="hidden text-slate-300 md:block">|</span>
                        <p className="text-center text-slate-600 md:text-left">Built for sales leaders who think in ROI, not clicks.</p>
                    </div>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-emerald-600 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-emerald-600 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
