import DecryptedText from './DecryptedText';
import { motion } from 'motion/react';
import { useBooking } from '../context/BookingContext';

export function HeroSection() {
  const { openModal } = useBooking();
  return (
    <section
      className="hero-grid-bg border-b border-emerald-100/60 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-6 md:grid-cols-2 md:gap-12 md:py-10 lg:px-6 overflow-hidden">
        <div className="flex flex-col gap-6 md:gap-8 min-w-0">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-xs font-medium text-emerald-700 shadow-sm ring-1 ring-emerald-100 sm:text-sm transition-all duration-300 hover:shadow-md hover:ring-emerald-200 hover:bg-white/90 cursor-default">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            For Indian E-commerce, Retail & Manufacturing SMBs
          </span>
          <div className="space-y-4 min-w-0">
            <h1
              id="hero-heading"
              className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl break-words"
            >
              <DecryptedText
                text="Stop Chasing Your Sales Team. "
                animateOn="view"
                sequential={true}
                speed={60}
                revealDirection="start"
                className="text-slate-900"
                encryptedClassName="text-slate-400"
              />
              <DecryptedText
                text="Start Tracking Results."
                animateOn="view"
                sequential={true}
                speed={60}
                revealDirection="start"
                className="text-emerald-600"
                encryptedClassName="text-emerald-300"
              />
            </h1>
            <p className="text-base leading-relaxed text-slate-900 sm:text-lg break-words">
              2XG EARN is a system-enforced sales growth platform for Indian SMBs.
              While CRMs track what your team says they'll do, we ensure they actually
              do it—through automated accountability and a proven 90-day transformation.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:flex-wrap">
            <button
              onClick={() => openModal()}
              type="button"
              className="inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:bg-emerald-400 hover:scale-105 hover:shadow-xl hover:shadow-emerald-400/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 active:scale-95 sm:w-auto"
            >
              Book a Strategy Call
            </button>
            <button
              onClick={() => openModal()}
              type="button"
              className="inline-flex w-full items-center justify-center rounded-full border border-emerald-600/50 bg-white/80 px-6 py-3 text-base font-medium text-emerald-700 transition-all duration-300 hover:border-emerald-600 hover:bg-emerald-50 hover:scale-105 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 active:scale-95 sm:w-auto"
            >
              See How It Works
            </button>
          </div>
          <dl className="-mt-2 grid grid-cols-1 gap-2 border-t border-emerald-100/50 pt-3 text-sm text-slate-900 sm:grid-cols-3 sm:gap-4 sm:text-base">
            <div className="space-y-1 p-2 rounded-lg transition-all duration-300 hover:bg-emerald-50/50 cursor-default min-w-0">
              <dt className="font-semibold text-slate-900 break-words">90 days</dt>
              <dd className="text-slate-800 break-words">From chaos to consistency</dd>
            </div>
            <div className="space-y-1 p-2 rounded-lg transition-all duration-300 hover:bg-emerald-50/50 cursor-default min-w-0">
              <dt className="font-semibold text-slate-900 break-words">System-Enforced</dt>
              <dd className="text-slate-800 break-words">Automated accountability</dd>
            </div>
            <div className="space-y-1 p-2 rounded-lg transition-all duration-300 hover:bg-emerald-50/50 cursor-default min-w-0">
              <dt className="font-semibold text-slate-900 break-words">ROI-Proven</dt>
              <dd className="text-slate-800 break-words">300-500% return in 90 days</dd>
            </div>
          </dl>
        </div>
        <div
          className="flex items-center justify-center pt-4 md:pt-0 min-w-0"
          aria-label="Sales performance dashboard preview"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hero-card max-w-full"
          >
            {/* Image */}
            <img
              src="/graph.png"
              alt="Sales performance graph"
              className="w-full h-full object-cover rounded-2xl max-w-full"
            />

            {/* Content that flips up on hover */}
            <div className="hero-card-content">
              <h3 className="hero-card-title">
                The <span className="text-emerald-600">EARN</span> Formula
              </h3>
              <p className="hero-card-description">
                <strong className="text-emerald-600">E</strong>ffort tracking that's automatic.<br />
                <strong className="text-emerald-600">A</strong>ccountability that's system-enforced.<br />
                <strong className="text-emerald-600">R</strong>ewards tied to real outcomes.<br />
                <strong className="text-emerald-600">N</strong>umbers you can trust daily.
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs text-emerald-700 font-medium">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Transform your sales in 90 days
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
