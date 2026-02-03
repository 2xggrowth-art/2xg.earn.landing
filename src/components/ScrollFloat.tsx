import React, { useEffect, useRef, ReactNode, RefObject, Children, isValidElement, cloneElement, ReactElement } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollFloatProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  containerClassName?: string;
  textClassName?: string;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
}

// Recursively process children and wrap each character in a span
function wrapCharacters(children: ReactNode, keyPrefix = ''): ReactNode {
  return Children.map(children, (child, index) => {
    const key = `${keyPrefix}-${index}`;

    // Handle strings - split into words to prevent breaking within words
    if (typeof child === 'string') {
      const words = child.split(' ');
      return words.map((word, wordIndex) => (
        <span
          key={`${key}-word-${wordIndex}`}
          className="inline whitespace-nowrap mr-[0.25em] last:mr-0"
        >
          {word.split('').map((char, charIndex) => (
            <span className="char inline-block" key={`${key}-word-${wordIndex}-char-${charIndex}`}>
              {char}
            </span>
          ))}
        </span>
      ));
    }

    // Handle React elements (like <span className="text-emerald-600">)
    if (isValidElement(child)) {
      const element = child as ReactElement<{ children?: ReactNode; className?: string }>;
      return cloneElement(element, {
        ...element.props,
        key,
        children: wrapCharacters(element.props.children, key)
      });
    }

    return child;
  });
}

const ScrollFloat: React.FC<ScrollFloatProps> = ({
  children,
  scrollContainerRef,
  containerClassName = '',
  textClassName = '',
  animationDuration = 1,
  ease = 'back.inOut(2)',
  scrollStart = 'top 85%',
  scrollEnd = 'bottom 20%',
  stagger = 0.03
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const wrappedContent = wrapCharacters(children);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef?.current || window;
    const charElements = el.querySelectorAll('.char');

    const ctx = gsap.context(() => {
      gsap.fromTo(
        charElements,
        {
          willChange: 'opacity, transform',
          opacity: 0,
          yPercent: 120,
          scaleY: 2.3,
          scaleX: 0.7,
          transformOrigin: '50% 0%'
        },
        {
          duration: animationDuration,
          ease: ease,
          opacity: 1,
          yPercent: 0,
          scaleY: 1,
          scaleX: 1,
          stagger: stagger,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: 'top 95%',
            end: scrollEnd,
            toggleActions: 'play none none none'
          }
        }
      );
    });

    return () => ctx.revert();
  }, [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd, stagger]);

  return (
    <h2 ref={containerRef} className={`${containerClassName}`}>
      <span className={`block ${textClassName}`}>{wrappedContent}</span>
    </h2>
  );
};

export default ScrollFloat;
