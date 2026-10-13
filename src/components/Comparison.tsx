import type { CSSProperties } from 'react';
import { comparison } from '@/content/content';

/**
 * The reference splits the cost line into a huge figure plus a small
 * uppercase suffix ("$100–300" + "A VIDEO"). Our content stores one
 * string, so take everything up to the last token containing a digit as
 * the figure and treat the remainder as the suffix.
 *   "$80–200 per reel"  -> { lead: "$80–200", tail: "per reel" }
 *   "under $1 per reel" -> { lead: "under $1", tail: "per reel" }
 */
function splitCost(value: string): { lead: string; tail: string } {
  const parts = value.trim().split(/\s+/);
  let last = -1;
  for (let i = 0; i < parts.length; i += 1) {
    if (/\d/.test(parts[i])) last = i;
  }
  if (last === -1) return { lead: value, tail: '' };
  return {
    lead: parts.slice(0, last + 1).join(' '),
    tail: parts.slice(last + 1).join(' '),
  };
}

/** Reference: the "old way" card is a cool grey mesh, light top-left -> grey bottom-right. */
const oldSurface: CSSProperties = {
  background:
    'radial-gradient(88% 72% at 92% 24%, rgba(10,15,28,0.085) 0%, rgba(10,15,28,0) 68%),' +
    'radial-gradient(76% 64% at 6% 96%, rgba(10,15,28,0.06) 0%, rgba(10,15,28,0) 70%),' +
    'linear-gradient(142deg, #ffffff 0%, #f1f3f7 52%, #e6e9f0 100%)',
};

/** Reference: the "ours" card is the same mesh tinted with the accent. */
const oursSurface: CSSProperties = {
  background:
    'radial-gradient(86% 70% at 92% 12%, rgba(47,107,255,0.17) 0%, rgba(47,107,255,0) 68%),' +
    'radial-gradient(74% 62% at 4% 94%, rgba(47,107,255,0.12) 0%, rgba(47,107,255,0) 70%),' +
    'linear-gradient(142deg, #ffffff 0%, #f4f7ff 56%, #e9f0ff 100%)',
};

function Cross() {
  return (
    <span
      aria-hidden="true"
      className="mt-[3px] grid size-[22px] shrink-0 place-items-center rounded-full bg-[rgba(10,15,28,0.07)]"
    >
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path
          d="M1 1 9 9M9 1 1 9"
          stroke="var(--ink-faint)"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

function Tick() {
  return (
    <span
      aria-hidden="true"
      className="mt-[3px] grid size-[22px] shrink-0 place-items-center rounded-full bg-accent-soft"
    >
      <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
        <path
          d="m1.4 5.8 2.7 2.7L9.6 2.9"
          stroke="var(--accent)"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function Comparison() {
  const oldCost = splitCost(comparison.old.footValue);
  const ourCost = splitCost(comparison.ours.footValue);
  const oldLabel = comparison.old.footLabel.replace(/:\s*$/, '');
  const ourLabel = comparison.ours.footLabel.replace(/:\s*$/, '');

  return (
    <section className="bg-paper py-[88px] md:py-[116px]">
      <div className="shell">
        <h2 className="h2">
          {comparison.headingLead.trim()}
          <span className="accented block">{comparison.headingAccent}</span>
        </h2>

        <div className="relative mt-[48px] grid gap-5 md:mt-[56px] lg:grid-cols-2 lg:gap-[22px]">
          {/* ── The old way ───────────────────────────────────────── */}
          <div
            style={oldSurface}
            className="flex flex-col rounded-[24px] border border-hair p-6 shadow-[0_1px_2px_rgba(10,15,28,0.04),0_22px_50px_-34px_rgba(10,15,28,0.28)] sm:p-7"
          >
            <h3 className="text-[20px] leading-[1.15] font-semibold text-ink sm:text-[21px]">
              {comparison.old.title}
            </h3>

            <div className="mt-5 border-t border-hair" />

            <ul className="mt-6 mb-8 space-y-[14px] sm:mb-10">
              {comparison.old.items.map((item) => (
                <li key={item} className="flex gap-[14px]">
                  <Cross />
                  <span className="text-[15.5px] leading-[1.5] text-ink-soft">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto rounded-[16px] bg-[rgba(10,15,28,0.055)] px-5 py-5">
              <p className="label">{oldLabel}</p>
              <p className="ui mt-[10px] flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="text-[38px] leading-[0.95] font-bold tracking-[-0.035em] text-ink-soft sm:text-[44px]">
                  {oldCost.lead}
                </span>
                {oldCost.tail ? <span className="label">{oldCost.tail}</span> : null}
              </p>
            </div>
          </div>

          {/* ── VS divider ────────────────────────────────────────── */}
          <div
            aria-hidden="true"
            className="flex justify-center lg:pointer-events-none lg:absolute lg:top-1/2 lg:left-1/2 lg:z-10 lg:-translate-x-1/2 lg:-translate-y-1/2"
          >
            <span className="ui grid size-[44px] place-items-center rounded-full bg-ink text-[13px] font-bold tracking-[0.02em] text-white shadow-[0_0_0_6px_var(--paper),0_10px_24px_-10px_rgba(10,15,28,0.6)]">
              VS
            </span>
          </div>

          {/* ── With us ───────────────────────────────────────────── */}
          <div
            style={oursSurface}
            className="flex flex-col rounded-[24px] border border-[rgba(47,107,255,0.22)] p-6 shadow-[0_1px_2px_rgba(10,15,28,0.04),0_22px_50px_-34px_rgba(29,79,216,0.38)] sm:p-7"
          >
            <h3 className="text-[20px] leading-[1.15] font-semibold text-ink sm:text-[21px]">
              {comparison.ours.title}
            </h3>

            <div className="mt-5 border-t border-[rgba(47,107,255,0.18)]" />

            <ul className="mt-6 mb-8 space-y-[14px] sm:mb-10">
              {comparison.ours.items.map((item) => (
                <li key={item} className="flex gap-[14px]">
                  <Tick />
                  <span className="text-[15.5px] leading-[1.5] text-ink">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto rounded-[16px] bg-accent px-5 py-5">
              <div className="flex items-start justify-between gap-3">
                <p className="label text-white/70">{ourLabel}</p>
                <span className="ui shrink-0 rounded-full border border-white/40 px-[11px] py-[5px] text-[10.5px] leading-none font-semibold tracking-[0.06em] text-white uppercase">
                  {comparison.callout}
                </span>
              </div>
              <p className="ui mt-[10px] flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="text-[38px] leading-[0.95] font-bold tracking-[-0.035em] text-white sm:text-[44px]">
                  {ourCost.lead}
                </span>
                {ourCost.tail ? <span className="label text-white/70">{ourCost.tail}</span> : null}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
