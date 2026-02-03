import React, { useLayoutEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import Lenis from 'lenis';

export interface ScrollStackItemProps {
    itemClassName?: string;
    children: ReactNode;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({ children, itemClassName = '' }) => (
    <div
        className={`scroll-stack-card relative md:sticky md:top-0 w-full min-h-screen origin-top will-change-transform ${itemClassName}`.trim()}
        style={{
            // CSS 'sticky' handles the heavy lifting of keeping the card in place on desktop.
            // On mobile, we default to relative scrolling to ensure content accessibility.
        }}
    >
        {children}
    </div>
);

interface ScrollStackProps {
    className?: string;
    children: ReactNode;
    itemScale?: number;
    itemDistance?: number;
    itemStackDistance?: number;
    stackPosition?: string;
    blurAmount?: number;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
    children,
    className = '',
    itemScale = 0.05,
}) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const lenisRef = useRef<Lenis | null>(null);
    const cardsRef = useRef<HTMLElement[]>([]);
    const cardTopsRef = useRef<number[]>([]);

    // Initialize Lenis for smooth document scrolling
    useLayoutEffect(() => {
        // Only initialize if we are in a browser environment
        if (typeof window === 'undefined') return;

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            touchMultiplier: 2,
        });
        lenisRef.current = lenis;

        const raf = (time: number) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };
        const rafId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
            lenisRef.current = null;
        };
    }, []);

    // Cache positions
    const measureCards = () => {
        if (!wrapperRef.current) return;
        const cards = Array.from(wrapperRef.current.querySelectorAll('.scroll-stack-card')) as HTMLElement[];
        cardsRef.current = cards;

        // We calculate the top offset of each card relative to the document
        // This is used to determine when a card is being "covered" by the next one.
        const tops = cards.map(card => {
            // We want the natural top position.
            // Since they are position: sticky, offsetTop gives the position within the parent.
            // This is generally correct for our calculation.
            return card.offsetTop;
        });
        cardTopsRef.current = tops;
    };

    useLayoutEffect(() => {
        measureCards();
        window.addEventListener('resize', measureCards);
        return () => window.removeEventListener('resize', measureCards);
    }, []);

    // Animation Loop
    useLayoutEffect(() => {
        const update = () => {
            if (!lenisRef.current) return;

            // Disable effect on mobile to match CSS 'md:sticky' behavior
            if (window.innerWidth < 768) {
                cardsRef.current.forEach(card => {
                    if (card.style.transform) card.style.transform = '';
                });
                return;
            }

            const scrollY = window.scrollY;
            const wh = window.innerHeight;

            cardsRef.current.forEach((card, i) => {
                // We want to apply an effect to card i when card i+1 is sliding up over it.
                const nextCardTop = cardTopsRef.current[i + 1];

                // If there is no next card, no scale down effect needed for the last item.
                if (typeof nextCardTop !== 'number') {
                    card.style.transform = 'translate3d(0,0,0) scale(1)';
                    return;
                }

                // The "visual" top of the next card in the viewport
                const nextCardVisTop = nextCardTop - scrollY;

                // Logic:
                // When nextCardVisTop > wh: Next card is below viewport. Current card is normal.
                // When nextCardVisTop <= wh: Next card is entering viewport (covering current). Current card shrinks.
                // When nextCardVisTop <= 0: Next card fully covers current. Current card is max shrunk.

                if (nextCardVisTop > wh) {
                    // Next card not yet in view
                    card.style.transform = 'translate3d(0,0,0) scale(1)';
                } else if (nextCardVisTop < 0) {
                    // Next card fully covering
                    const maxScale = 1 - itemScale;
                    card.style.transform = `translate3d(0,0,0) scale(${maxScale})`;
                } else {
                    // Transitioning
                    // progress goes from 0 (just entering at bottom) to 1 (at top)
                    // WAIT: progress should be 0 when just entering (wh), and 1 when at top (0).
                    // let p = (wh - nextCardVisTop) / wh; -> 0 at wh, 1 at 0. Correct.
                    const p = (wh - nextCardVisTop) / wh;
                    const currentScale = 1 - (p * itemScale);
                    card.style.transform = `translate3d(0,0,0) scale(${currentScale.toFixed(4)})`;
                }
            });
        };

        const lenis = lenisRef.current;
        if (lenis) {
            lenis.on('scroll', update);
            // Also run initial update
            update();
        }

        return () => {
            if (lenis) lenis.off('scroll', update);
        };
    }, [itemScale]);

    return (
        <div ref={wrapperRef} className={`relative w-full ${className}`}>
            {children}
        </div>
    );
};

export default ScrollStack;
