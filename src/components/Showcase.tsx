'use client';

import { useState } from 'react';
import { showcase, type ReelMedia } from '@/content/content';

/**
 * Section 02 — the coverflow showcase.
 *
 * Reference geometry (1440px design frame, measured off ref-sec-02):
 *   centre card   638 x 359 (16:9), centred, r=16
 *   side cards    rotated 30deg in Y, scaled .86, blurred and washed back,
 *                 clipped by the container at the shell edge
 *   arrows        40px white circles, centred vertically, 15px inside the shell
 *   dots          white pill, 3 dots 6px / 11px apart, 22px under the card
 */

const EASE = 'cubic-bezier(.22,.61,.36,1)';

/** The single swap point for real media — gradient / image / video. */
function ReelMediaLayer({ media }: { media: ReelMedia }) {
  if (media.kind === 'image') {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={media.src}
        alt={media.alt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
    );
  }

  if (media.kind === 'video') {
    return (
      <video
        src={media.src}
        poster={media.poster}
        muted
        loop
        playsInline
        preload="none"
        className="absolute inset-0 h-full w-full object-cover"
      />
    );
  }

  return (
    <span
      aria-hidden="true"
      className="absolute inset-0"
      style={{ background: media.gradient }}
    />
  );
}

function Chevron({ dir }: { dir: 'prev' | 'next' }) {
  return (
    <svg
      width="9"
      height="16"
      viewBox="0 0 9 16"
      fill="none"
      aria-hidden="true"
      className={dir === 'prev' ? 'mr-[2px]' : 'ml-[2px]'}
    >
      <path
        d={dir === 'prev' ? 'M8 1 1.5 8 8 15' : 'M1 1l6.5 7L1 15'}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Showcase() {
  const reels = showcase.reels;
  const count = reels.length;
  const [active, setActive] = useState(0);

  const go = (delta: number) => setActive((i) => (i + delta + count) % count);

  return (
    <section id="showcase" className="relative overflow-hidden bg-paper">
      {/* The faint full-height rules that frame the page in the reference. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-[5.5%] hidden w-px bg-hair lg:block"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-[5.5%] hidden w-px bg-hair lg:block"
      />

      <div className="shell relative pt-[72px] pb-[80px] md:pt-[88px] md:pb-[96px]">
        <h2 className="h2 max-w-[920px] text-ink">
          {showcase.headingLead}
          <span className="accented">{showcase.headingAccent}</span>
          {showcase.headingTail}
        </h2>
        <p className="mt-[18px] max-w-[520px] text-[16px] leading-[1.55] text-ink-soft">
          {showcase.subtext}
        </p>

        <div className="relative mt-[44px] md:mt-[56px]">
          {/* Clips the rotated side cards at the shell edge, as the reference does. */}
          <div className="overflow-hidden">
            <div
              className="relative mx-auto aspect-[16/9] w-[min(638px,78vw)]"
              style={{ perspective: '1600px' }}
            >
              {reels.map((reel, i) => {
                const half = Math.floor(count / 2);
                const offset = ((i - active + count + half) % count) - half;
                const isActive = offset === 0;
                const side = Math.sign(offset);

                return (
                  <article
                    key={reel.title}
                    aria-hidden={!isActive}
                    className={`absolute inset-0 overflow-hidden rounded-[16px] border border-hair bg-dark ${
                      isActive
                        ? 'shadow-[0_30px_70px_-28px_rgba(10,15,28,.45)]'
                        : 'pointer-events-none shadow-[0_18px_40px_-26px_rgba(10,15,28,.35)]'
                    }`}
                    style={{
                      zIndex: isActive ? 20 : 10,
                      opacity: isActive ? 1 : 0.72,
                      transform: isActive
                        ? 'translateX(0) rotateY(0deg) scale(1)'
                        : `translateX(${side * 60}%) rotateY(${side * -28}deg) scale(.88)`,
                      // The reference keeps the side cards legible but softly out of focus.
                      filter: isActive ? 'none' : 'blur(2.5px)',
                      transition: `transform 700ms ${EASE}, opacity 700ms ${EASE}, filter 700ms ${EASE}`,
                    }}
                  >
                    <ReelMediaLayer media={reel.media} />

                    {/* Readability scrim under the caption. */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                    />

                    <span className="ui absolute left-[14px] top-[14px] rounded-full bg-white/15 px-[10px] py-[5px] text-[11px] font-medium text-white backdrop-blur-sm">
                      {reel.tag}
                    </span>

                    {/* Muted-audio badge — matches the reference's top-right pill. */}
                    <span
                      aria-hidden="true"
                      className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white shadow-[0_2px_8px_rgba(10,15,28,.2)]"
                    >
                      <svg width="17" height="16" viewBox="0 0 15 14" fill="none">
                        <path
                          d="M6 1.5 3.2 4H1.5v6h1.7L6 12.5v-11Z"
                          stroke="var(--accent)"
                          strokeWidth="1.4"
                          strokeLinejoin="round"
                        />
                        <path
                          d="m9.5 5 4 4m0-4-4 4"
                          stroke="var(--accent)"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>

                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-[18px]">
                      <h3 className="max-w-[78%] text-[clamp(15px,1.5vw,21px)] leading-[1.2] text-white">
                        {reel.title}
                      </h3>
                      <span className="ui shrink-0 pb-[2px] text-[12px] font-medium tabular-nums text-white/75">
                        {reel.runtime}
                      </span>
                    </div>

                    {/* Paper veil that pushes the side cards back. */}
                    {!isActive ? (
                      <span aria-hidden="true" className="absolute inset-0 bg-paper/12" />
                    ) : null}
                  </article>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous reel"
            className="absolute top-1/2 left-0 z-30 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white text-ink shadow-[0_2px_12px_rgba(10,15,28,.14)] transition-transform duration-200 hover:scale-105 lg:left-[15px]"
          >
            <Chevron dir="prev" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next reel"
            className="absolute top-1/2 right-0 z-30 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white text-ink shadow-[0_2px_12px_rgba(10,15,28,.14)] transition-transform duration-200 hover:scale-105 lg:right-[15px]"
          >
            <Chevron dir="next" />
          </button>
        </div>

        <div className="mt-[22px] flex justify-center">
          <div className="inline-flex items-center gap-[11px] rounded-full border border-hair bg-white px-[14px] py-[7px] shadow-[0_2px_10px_rgba(10,15,28,.07)]">
            {reels.map((reel, i) => (
              <button
                key={reel.title}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show ${reel.title}`}
                aria-current={i === active ? 'true' : undefined}
                className={`h-[6px] rounded-full transition-all duration-200 ${
                  i === active
                    ? 'w-[16px] bg-accent'
                    : 'w-[6px] bg-accent/25 hover:bg-accent/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
