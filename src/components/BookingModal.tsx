import { motion, AnimatePresence } from "motion/react";
import { useBooking } from "../context/BookingContext";
import { useEffect } from "react";

export function BookingModal() {
    const { isModalOpen, closeModal } = useBooking();

    // Prevent background scrolling when modal is open
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isModalOpen]);

    return (
        <AnimatePresence>
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className="relative w-full max-w-lg rounded-2xl border border-emerald-100 bg-white/95 p-6 shadow-2xl shadow-emerald-900/20 backdrop-blur-xl sm:p-8"
                    >
                        <button
                            onClick={closeModal}
                            className="absolute right-4 top-4 rounded-full p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600 sm:right-6 sm:top-6"
                        >
                            <span className="sr-only">Close</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                            </svg>
                        </button>

                        <div className="mb-6">
                            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                                Get Your Free Strategy Session
                            </h2>
                            <p className="mt-2 text-base text-slate-600 sm:text-lg">
                                Join 100+ Indian SMBs transforming their sales. No commitment required.
                            </p>
                        </div>

                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label htmlFor="modal-name" className="sr-only">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="modal-name"
                                    name="name"
                                    placeholder="Full Name"
                                    className="w-full rounded-lg border-slate-200 bg-white px-4 py-3 text-base outline-none ring-offset-2 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="modal-phone" className="sr-only">
                                    Phone Number
                                </label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-base font-medium text-slate-400">
                                        +91
                                    </span>
                                    <input
                                        type="tel"
                                        id="modal-phone"
                                        name="phone"
                                        placeholder="Phone Number"
                                        className="w-full rounded-lg border-slate-200 bg-white py-3 pl-12 pr-4 text-base outline-none ring-offset-2 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="modal-businessType" className="sr-only">
                                    Business Type
                                </label>
                                <select
                                    id="modal-businessType"
                                    name="businessType"
                                    className="w-full rounded-lg border-slate-200 bg-white px-4 py-3 text-base text-slate-600 outline-none ring-offset-2 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 focus:text-slate-900"
                                    required
                                    defaultValue=""
                                >
                                    <option value="" disabled>
                                        Select Business Type
                                    </option>
                                    <option value="manufacturing">Manufacturing</option>
                                    <option value="retail">Retail</option>
                                    <option value="ecommerce">E-commerce</option>
                                    <option value="services">Services</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <button
                                type="submit"
                                className="w-full rounded-lg bg-emerald-600 px-4 py-3.5 text-base font-semibold text-white shadow-lg shadow-emerald-500/30 transition-all hover:bg-emerald-500 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                            >
                                Book My Free Demo
                            </button>
                            <div className="flex items-center justify-center gap-4 text-xs text-slate-500 sm:text-sm">
                                <span className="flex items-center gap-1">
                                    <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Free consultation
                                </span>
                                <span className="flex items-center gap-1">
                                    <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    No credit card
                                </span>
                            </div>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
