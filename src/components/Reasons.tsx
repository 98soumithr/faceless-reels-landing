import { brand, reasons } from '@/content/content';

/**
 * Section 04 — the dark "why" band.
 *
 * Reference geometry (1440px design frame, measured off ref-sec-04):
 *   band          full-bleed dark, gradient mesh + grain, ~1070px tall
 *   h2            52px / 600, white, with the accent half set in italic
 *   left column   "01" label, 42px lead title, 16px body, then the art
 *   right column  six hairline-separated rows, 148px min height each:
 *                 number / 27px title + 16px body / 44px line icon
 *   split         45.4 / 54.6, no gutter — right column ends at the shell edge
 *
 * The reference's warm terracotta mesh is translated to the blue scheme.
 */

const MESH = [
  'radial-gradient(58% 54% at 78% 28%, rgba(47,107,255,.40) 0%, rgba(47,107,255,0) 70%)',
  'radial-gradient(46% 42% at 54% 56%, rgba(96,146,255,.20) 0%, rgba(96,146,255,0) 72%)',
  'radial-gradient(52% 50% at 12% 80%, rgba(44,74,140,.42) 0%, rgba(44,74,140,0) 70%)',
  'radial-gradient(66% 58% at 8% 2%, rgba(3,6,14,.90) 0%, rgba(3,6,14,0) 64%)',
  'radial-gradient(70% 62% at 95% 95%, rgba(3,6,14,.82) 0%, rgba(3,6,14,0) 66%)',
  'radial-gradient(60% 55% at 4% 50%, rgba(3,6,14,.55) 0%, rgba(3,6,14,0) 70%)',
  'linear-gradient(162deg, #080d1a 0%, #0d1533 46%, #070b18 100%)',
].join(',');

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

const LINE = 'rgba(255,255,255,.48)';

/** One line icon per reason, in the reference's thin-stroke style. */
const ICONS = [
  // One niche, done right — target
  <>
    <circle cx="22" cy="17" r="13" stroke={LINE} strokeWidth="1.6" />
    <circle cx="22" cy="17" r="6.5" stroke={LINE} strokeWidth="1.6" />
    <circle cx="22" cy="17" r="2.2" fill="var(--accent)" />
  </>,
  // Accuracy is the moat — shield + check
  <>
    <path
      d="M22 3.5 35 8v9c0 7.6-5.3 12.4-13 14.5C14.3 29.4 9 24.6 9 17V8l13-4.5Z"
      stroke={LINE}
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path
      d="m16.5 17.5 4 4 8-8.5"
      stroke="var(--accent)"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </>,
  // Volume without a team — stacked frames
  <>
    <rect x="6" y="12" width="19" height="14" rx="3" stroke={LINE} strokeWidth="1.6" />
    <rect x="12" y="8" width="19" height="14" rx="3" stroke={LINE} strokeWidth="1.6" />
    <rect x="18" y="4" width="19" height="14" rx="3" stroke="var(--accent)" strokeWidth="1.6" />
  </>,
  // Not a slideshow — film strip + play
  <>
    <rect x="4" y="7" width="36" height="20" rx="3" stroke={LINE} strokeWidth="1.6" />
    <path d="M4 12h36M4 22h36" stroke={LINE} strokeWidth="1.2" strokeDasharray="2.4 3.4" />
    <path d="M19 13.5 25.5 17 19 20.5v-7Z" fill="var(--accent)" />
  </>,
  // Ready to publish — lines + check badge
  <>
    <rect x="4" y="6" width="27" height="20" rx="3" stroke={LINE} strokeWidth="1.6" />
    <path d="M9.5 12h16M9.5 16.5h16M9.5 21h10" stroke={LINE} strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="33" cy="22" r="7.2" stroke="var(--accent)" strokeWidth="1.6" />
    <path
      d="m29.8 22 2.3 2.3 4.1-4.6"
      stroke="var(--accent)"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </>,
  // The output is the ad — signal + spark
  <>
    <path
      d="M11 7a14 14 0 0 0 0 20M7 3.5a19 19 0 0 0 0 27"
      stroke={LINE}
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M31 7a14 14 0 0 1 0 20M35 3.5a19 19 0 0 1 0 27"
      stroke={LINE}
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M21 8.5c.9 5.4 2.2 6.7 7.5 8.5-5.3 1.8-6.6 3.1-7.5 8.5-.9-5.4-2.2-6.7-7.5-8.5 5.3-1.8 6.6-3.1 7.5-8.5Z"
      fill="var(--accent)"
    />
  </>,
];

/** The fanned stack of tools the lead card talks about. Decorative. */
const FAN = [
  { left: 4, top: 84, rot: -26 },
  { left: 62, top: 58, rot: -17 },
  { left: 122, top: 38, rot: -8 },
  { left: 188, top: 34, rot: 2 },
  { left: 252, top: 46, rot: 12 },
];

function StackArt() {
  return (
    <div aria-hidden="true" className="relative mt-[44px] h-[196px] sm:h-[300px]">
      <div className="absolute top-0 left-0 h-[300px] w-[460px] origin-top-left scale-[0.62] sm:scale-100">
        {FAN.map((card) => (
          <div
            key={card.left}
            className="absolute h-[196px] w-[132px] rounded-[10px] border border-white/40 bg-gradient-to-b from-white/92 to-white/70 shadow-[0_24px_50px_-22px_rgba(0,0,0,.65)]"
            style={{
              left: card.left,
              top: card.top,
              transform: `rotate(${card.rot}deg)`,
            }}
          >
            <div className="space-y-[9px] p-[14px] pt-[18px]">
              <span className="block h-[7px] w-[58%] rounded-full bg-ink/15" />
              <span className="block h-[5px] w-[82%] rounded-full bg-ink/10" />
              <span className="block h-[5px] w-[70%] rounded-full bg-ink/10" />
              <span className="block h-[5px] w-[78%] rounded-full bg-ink/10" />
            </div>
          </div>
        ))}

        <div
          className="absolute h-[138px] w-[236px] overflow-hidden rounded-[12px] shadow-[0_34px_70px_-24px_rgba(47,107,255,.65)]"
          style={{
            left: 108,
            top: 104,
            transform: 'rotate(-2deg)',
            background: 'linear-gradient(150deg,#4a7dff 0%,#2f6bff 48%,#1d4fd8 100%)',
          }}
        >
          <div className="flex items-center justify-end px-[12px] pt-[10px]">
            <span className="flex gap-[4px]">
              <span className="h-[4px] w-[4px] rounded-full bg-white/55" />
              <span className="h-[4px] w-[4px] rounded-full bg-white/55" />
              <span className="h-[4px] w-[4px] rounded-full bg-white/55" />
            </span>
          </div>
          <div className="flex h-[96px] items-center justify-center gap-[10px]">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
              <path
                d="M13 0c1.6 9.4 3.0 10.8 13 13-10 2.2-11.4 3.6-13 13-1.6-9.4-3.0-10.8-13-13 10-2.2 11.4-3.6 13-13Z"
                fill="#fff"
              />
            </svg>
            <span className="text-[24px] leading-none font-semibold text-white">
              {brand.name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Reasons() {
  return (
    <section id="why" className="relative isolate overflow-hidden bg-dark text-on-dark">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ backgroundImage: MESH }}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[.16] mix-blend-overlay"
        style={{ backgroundImage: GRAIN }}
      />

      <div className="shell relative pt-[80px] pb-[96px] md:pt-[112px] md:pb-[140px]">
        <h2 className="h2 max-w-[1140px] text-on-dark">
          {reasons.headingLead}
          <span className="accented text-on-dark-soft">{reasons.headingAccent}</span>
        </h2>

        <div className="mt-[44px] grid gap-y-[64px] md:mt-[48px] lg:grid-cols-[minmax(0,45.4fr)_minmax(0,54.6fr)] lg:gap-y-0">
          {/* 01 — the lead card */}
          <div className="lg:pt-[17px] lg:pr-10">
            <p className="label text-on-dark-faint">01</p>
            <h3 className="mt-[18px] max-w-[340px] text-[clamp(30px,3.1vw,42px)] leading-[1.12] tracking-[-0.02em] text-on-dark">
              {reasons.lead.title}
            </h3>
            <p className="mt-[22px] max-w-[310px] text-[16px] leading-[1.5] text-on-dark-soft">
              {reasons.lead.body}
            </p>

            <StackArt />
          </div>

          {/* 02–07 — the six smaller cards */}
          <ol>
            {reasons.items.map((item, i) => (
              <li
                key={item.title}
                className="grid grid-cols-[46px_minmax(0,1fr)] items-start gap-x-2 border-t border-white/[.14] py-[26px] last:border-b sm:grid-cols-[65px_minmax(0,1fr)_auto] sm:gap-x-4 lg:min-h-[148px] lg:py-[27px]"
              >
                <span className="label pt-[9px] text-on-dark-faint">
                  {String(i + 2).padStart(2, '0')}
                </span>

                <div>
                  <h3 className="text-[clamp(21px,1.9vw,27px)] leading-[1.15] tracking-[-0.02em] text-on-dark">
                    {item.title}
                  </h3>
                  <p className="mt-[13px] max-w-[470px] text-[16px] leading-[1.55] text-on-dark-soft">
                    {item.body}
                  </p>
                </div>

                <span className="hidden shrink-0 self-start pt-[6px] pl-6 sm:block">
                  <svg width="44" height="34" viewBox="0 0 44 34" fill="none" aria-hidden="true">
                    {ICONS[i % ICONS.length]}
                  </svg>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
