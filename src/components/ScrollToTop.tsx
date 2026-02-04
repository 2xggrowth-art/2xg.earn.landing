import { useEffect, useState } from 'react';
import Lenis from 'lenis';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    // Try to find existing Lenis instance, otherwise use native scroll
    const lenis = (window as any).lenis as Lenis | undefined;
    if (lenis) {
      lenis.scrollTo(0, { duration: 1 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="scroll-to-top-button fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border-none bg-slate-900 shadow-[0px_0px_0px_4px_rgba(16,185,129,0.25)] transition-all duration-300 hover:w-36 hover:rounded-full hover:bg-emerald-500"
      aria-label="Scroll to top"
    >
      <svg
        className="scroll-to-top-icon w-3 transition-all duration-300"
        viewBox="0 0 384 512"
      >
        <path
          fill="white"
          d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
        />
      </svg>
      <span className="scroll-to-top-text absolute bottom-[-20px] text-[0px] text-white transition-all duration-300">
        Back to Top
      </span>
    </button>
  );
}
