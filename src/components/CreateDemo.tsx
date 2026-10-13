'use client';

import { useEffect, useRef, useState } from 'react';
import { createDemo } from '@/content/content';
import { asset } from '@/lib/asset';

/**
 * A self-running demo of the core idea: a sentence types into the prompt,
 * the Create button is clicked, a short build runs, and a finished vertical
 * reel is revealed — then it loops. Under prefers-reduced-motion it just
 * shows the finished state. No real interaction required; it's a visual.
 */
type Phase = 'typing' | 'ready' | 'clicking' | 'building' | 'done' | 'reset';

const { prompt, cta, building: buildingLabel, steps, output, promptLabel } = createDemo;

export function CreateDemo() {
  const [phase, setPhase] = useState<Phase>('typing');
  const [typed, setTyped] = useState(0);
  const [activeStep, setActiveStep] = useState(-1);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced) {
      setTyped(prompt.length);
      setActiveStep(steps.length - 1);
      setPhase('done');
      return;
    }

    let cancelled = false;
    const sleep = (ms: number) =>
      new Promise<void>((r) => {
        const id = setTimeout(r, ms);
        timers.push(id);
      });
    const timers: ReturnType<typeof setTimeout>[] = [];

    async function run() {
      while (!cancelled) {
        setPhase('typing');
        setActiveStep(-1);
        for (let i = 0; i <= prompt.length; i++) {
          if (cancelled) return;
          setTyped(i);
          await sleep(36);
        }
        setPhase('ready');
        await sleep(850);

        setPhase('clicking');
        await sleep(560);

        setPhase('building');
        for (let s = 0; s < steps.length; s++) {
          if (cancelled) return;
          setActiveStep(s);
          await sleep(300);
        }
        await sleep(200);

        setPhase('done');
        await sleep(3000);

        setPhase('reset');
        await sleep(520);
        setTyped(0);
      }
    }
    run();

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, []);

  const clicking = phase === 'clicking';
  const isBuilding = phase === 'building';
  const done = phase === 'done';
  const text = prompt.slice(0, typed);
  const showCaret = phase === 'typing' || phase === 'ready';

  return (
    <div
      ref={rootRef}
      className="mx-auto grid w-full max-w-[860px] items-center gap-5 md:grid-cols-[1fr_auto_minmax(190px,220px)] md:gap-6"
    >
      {/* ── Input panel ─────────────────────────────────────────────── */}
      <div className="card rounded-[18px] p-5 sm:p-6">
        <p className="label">{promptLabel}</p>

        <div className="mt-3 flex min-h-[64px] items-start gap-2.5 rounded-[12px] border border-hair bg-paper px-4 py-3.5">
          <span aria-hidden="true" className="mt-[2px] font-mono text-[15px] text-accent">
            ›
          </span>
          <p className="ui min-w-0 flex-1 text-left font-mono text-[14px] leading-[1.5] break-words text-ink sm:text-[15px]">
            {text}
            {showCaret ? (
              <span
                aria-hidden="true"
                className="ml-[1px] inline-block h-[1.05em] w-[2px] translate-y-[2px] bg-accent"
                style={{ animation: 'caretBlink 1s steps(1) infinite' }}
              />
            ) : null}
          </p>
        </div>

        <div className="relative mt-4 flex justify-end">
          <button
            type="button"
            aria-hidden="true"
            tabIndex={-1}
            className="btn btn-sm px-6 py-3 text-[14px] font-semibold text-white shadow-[0_8px_20px_-8px_rgba(47,107,255,0.7)] transition-transform duration-150"
            style={{
              backgroundColor: 'var(--accent)',
              transform: clicking ? 'scale(0.94)' : 'scale(1)',
            }}
          >
            {isBuilding ? (
              <span className="flex items-center gap-2">
                <span
                  className="h-[14px] w-[14px] rounded-full border-2 border-white/40 border-t-white"
                  style={{ animation: 'heroBlobSpin 0.7s linear infinite' }}
                />
                {isBuilding && activeStep >= 0 ? steps[activeStep] : cta}
              </span>
            ) : done ? (
              'Done'
            ) : (
              cta
            )}
          </button>

          {/* Cursor that darts to the button at click time. */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-1 right-5 transition-all duration-500 ease-out"
            style={{
              opacity: clicking || phase === 'ready' ? 1 : 0,
              transform: clicking ? 'translate(6px, 6px) scale(0.9)' : 'translate(26px, 20px) scale(1)',
            }}
          >
            <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
              <path
                d="M2 1.5 17 12l-6.3 1.4 3.4 6.4-2.7 1.4-3.4-6.5L3 20V1.5Z"
                fill="#0a0f1c"
                stroke="#fff"
                strokeWidth="1.3"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>

        {/* Build progress bar */}
        <div className="mt-4 h-[4px] w-full overflow-hidden rounded-full bg-hair">
          <div
            className="h-full rounded-full bg-accent transition-[width] duration-300 ease-out"
            style={{
              width: done
                ? '100%'
                : isBuilding
                  ? `${((activeStep + 1) / steps.length) * 100}%`
                  : '0%',
            }}
          />
        </div>
        <p className="ui mt-2 h-[16px] text-[12px] text-ink-faint">
          {isBuilding ? `${buildingLabel}…` : done ? 'Ready to post' : ''}
        </p>
      </div>

      {/* ── Flow arrow (desktop) ────────────────────────────────────── */}
      <div aria-hidden="true" className="hidden items-center justify-center md:flex">
        <div className="relative h-[2px] w-[44px] overflow-hidden rounded-full bg-hair-strong">
          <div
            className="absolute inset-y-0 w-[40%] rounded-full bg-accent"
            style={{
              animation: isBuilding ? 'flowDash 0.9s linear infinite' : 'none',
              opacity: isBuilding ? 1 : 0.25,
            }}
          />
        </div>
        <svg width="16" height="16" viewBox="0 0 16 16" className="ml-[-2px] text-hair-strong">
          <path d="M3 8h9m0 0-3.5-3.5M12 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* ── Output reel ─────────────────────────────────────────────── */}
      <div className="mx-auto w-[190px] md:w-full">
        <div
          className="relative aspect-[9/16] overflow-hidden rounded-[16px] border border-hair bg-dark-2 shadow-card-lg transition-all duration-500 ease-out"
          style={{
            opacity: done ? 1 : 0.18,
            transform: done ? 'translateY(0) scale(1)' : 'translateY(10px) scale(0.97)',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset(output.media.src)}
            alt={output.media.alt}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* shimmer while building */}
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background: done
                ? 'none'
                : 'linear-gradient(110deg, rgba(20,31,60,0.9) 30%, rgba(60,90,160,0.5) 50%, rgba(20,31,60,0.9) 70%)',
              backgroundSize: '220% 100%',
              animation: isBuilding ? 'shimmer 1.1s linear infinite' : 'none',
              opacity: done ? 0 : 1,
              transition: 'opacity 400ms ease',
            }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent"
            style={{ opacity: done ? 1 : 0 }}
          />
          {/* play button on reveal */}
          <span
            className="absolute inset-0 z-10 grid place-items-center transition-opacity duration-500"
            style={{ opacity: done ? 1 : 0 }}
          >
            <span className="grid h-11 w-11 place-items-center rounded-full bg-white/92 shadow-lg">
              <svg width="13" height="15" viewBox="0 0 11 12" fill="none" aria-hidden="true">
                <path d="M10 5.134c.667.385.667 1.347 0 1.732L1.75 12.49c-.667.385-1.5-.096-1.5-.866V1.377c0-.77.833-1.251 1.5-.866L10 5.134Z" fill="var(--accent)" />
              </svg>
            </span>
          </span>
          <span
            className="ui absolute right-2.5 bottom-2.5 z-10 rounded-[6px] bg-black/60 px-1.5 py-0.5 text-[11px] font-medium tabular-nums text-white transition-opacity duration-500"
            style={{ opacity: done ? 1 : 0 }}
          >
            {output.runtime}
          </span>
        </div>

        <p
          className="ui mt-2.5 h-[18px] text-center text-[13px] font-medium text-ink transition-opacity duration-500 md:text-left"
          style={{ opacity: done ? 1 : 0 }}
        >
          {output.title}
        </p>
      </div>
    </div>
  );
}
