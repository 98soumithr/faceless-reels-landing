'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';

/**
 * The rotating word in the hero headline ("a <history> reel"). It cross-fades
 * with a small vertical lift between niches and animates its width so the words
 * on either side stay snug. Server-renders `words[0]`, so there's no hydration
 * mismatch, and it holds on the first word under prefers-reduced-motion.
 */
export function FlipWord({
  words,
  intervalMs = 2200,
  className = '',
}: {
  words: string[];
  intervalMs?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState<number>();
  const refs = useRef<(HTMLSpanElement | null)[]>([]);

  // Advance on a timer unless the viewer asked for reduced motion.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) return;
    const id = window.setInterval(
      () => setIndex((v) => (v + 1) % words.length),
      intervalMs,
    );
    return () => window.clearInterval(id);
  }, [words.length, intervalMs]);

  // Track the active word's width so the container can transition to it.
  useLayoutEffect(() => {
    const el = refs.current[index];
    if (el) setWidth(el.offsetWidth);
  }, [index]);

  // Keep the measured width correct across viewport/font changes.
  useEffect(() => {
    const onResize = () => {
      const el = refs.current[index];
      if (el) setWidth(el.offsetWidth);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [index]);

  return (
    <span
      className="relative inline-grid align-baseline"
      style={{
        width: width ? `${width}px` : undefined,
        transition: 'width 340ms cubic-bezier(0.22,0.61,0.36,1)',
      }}
    >
      {words.map((word, i) => {
        const active = i === index;
        return (
          <span
            key={word}
            ref={(el) => {
              refs.current[i] = el;
            }}
            aria-hidden={!active}
            className={`col-start-1 row-start-1 justify-self-start whitespace-nowrap will-change-[opacity,transform] ${className}`}
            style={{
              opacity: active ? 1 : 0,
              transform: active ? 'translateY(0)' : 'translateY(0.14em)',
              filter: active ? 'blur(0)' : 'blur(3px)',
              transition:
                'opacity 340ms cubic-bezier(0.22,0.61,0.36,1), transform 340ms cubic-bezier(0.22,0.61,0.36,1), filter 340ms ease',
            }}
          >
            {word}
          </span>
        );
      })}
    </span>
  );
}
