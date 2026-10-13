import { hero } from '@/content/content';
import { ReelMarquee } from './ReelMarquee';
import { WaitlistForm } from './WaitlistForm';
import { FlipWord } from './FlipWord';

/**
 * Full-bleed dark hero. The reference's warm gradient mesh (gold core,
 * red bleed, bright diagonal streak) is translated one-for-one into the
 * blue brand ramp — same shapes, no warm hues — and, like the reference,
 * it drifts continuously. The coloured glow lives in separate blurred blob
 * layers (`BLOBS`) that each animate on their own slow cycle; a static
 * darkening overlay (`DARKEN`) sits on top to keep the glow pulled into a
 * lower-left crescent and the headline area readable as the blobs move.
 */
const BLOBS = [
  {
    // Bright core (the reference's gold), the most mobile highlight.
    style: {
      left: '-6%',
      top: '38%',
      width: '620px',
      height: '520px',
      background: 'radial-gradient(closest-side, rgba(150,190,255,0.7), rgba(150,190,255,0))',
      filter: 'blur(26px)',
      animation: 'heroBlobA 13s ease-in-out infinite',
    },
  },
  {
    style: {
      left: '-16%',
      top: '32%',
      width: '1040px',
      height: '820px',
      background: 'radial-gradient(closest-side, rgba(60,118,245,0.62), rgba(60,118,245,0))',
      filter: 'blur(36px)',
      animation: 'heroBlobB 16s ease-in-out infinite',
    },
  },
  {
    style: {
      left: '-8%',
      top: '58%',
      width: '1100px',
      height: '820px',
      background: 'radial-gradient(closest-side, rgba(42,96,230,0.6), rgba(42,96,230,0))',
      filter: 'blur(40px)',
      animation: 'heroBlobC 18s ease-in-out infinite',
    },
  },
  {
    // Fills the bottom band so the glow sweeps across like the reference.
    style: {
      left: '26%',
      top: '72%',
      width: '1000px',
      height: '620px',
      background: 'radial-gradient(closest-side, rgba(30,66,180,0.5), rgba(30,66,180,0))',
      filter: 'blur(42px)',
      animation: 'heroBlobD 21s ease-in-out infinite',
    },
  },
] as const;

// Painted on top of the moving blobs. Kept lighter than before so the glow
// stays prominent and its motion reads: darkens the top (for the nav) and
// the right edge, and tempers the area behind the headline just enough for
// the light type to stay readable.
const DARKEN = [
  'radial-gradient(1000px 760px at 100% 0%, rgba(4,8,18,0.9) 0%, rgba(4,8,18,0) 60%)',
  'radial-gradient(1020px 680px at 50% 30%, rgba(5,9,18,0.66) 0%, rgba(5,9,18,0.26) 46%, rgba(5,9,18,0) 72%)',
  'linear-gradient(to right, rgba(8,13,26,0) 46%, rgba(8,13,26,0.5) 78%, rgba(8,13,26,0.9) 100%)',
  'linear-gradient(to bottom, rgba(8,13,26,0.92) 0%, rgba(8,13,26,0.42) 15%, rgba(8,13,26,0) 38%)',
].join(',');

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)'/%3E%3C/svg%3E\")";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-dark pt-[150px] pb-[240px] md:pt-[290px] md:pb-[300px]"
    >
      {/* Near-black base. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-30"
        style={{ backgroundColor: '#060a13' }}
      />

      {/* Moving coloured blobs — the live part of the mesh. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-20">
        {BLOBS.map((blob, i) => (
          <div
            key={i}
            className="absolute will-change-transform"
            style={blob.style}
          />
        ))}
      </div>

      {/* Static darkening, painted over the blobs to contain the glow. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: DARKEN }}
      />

      {/* Thin bright diagonal streak out of the top-right, plus its halo. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[-300px] left-[84%] -z-10 h-[1250px] w-[140px] origin-top"
        style={{
          background:
            'linear-gradient(to bottom, rgba(120,170,255,0) 0%, rgba(136,180,255,0.34) 28%, rgba(196,220,255,0.5) 50%, rgba(120,170,255,0) 84%)',
          filter: 'blur(34px)',
          animation: 'heroStreak 8s ease-in-out infinite',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[-290px] left-[86%] -z-10 h-[1200px] w-[3px] origin-top -rotate-[26deg]"
        style={{
          background:
            'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(214,232,255,0.8) 30%, rgba(186,214,255,0.62) 58%, rgba(255,255,255,0) 88%)',
          filter: 'blur(1.6px)',
        }}
      />

      {/* Film grain, as in the reference. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.22] mix-blend-overlay"
        style={{ backgroundImage: GRAIN, backgroundSize: '160px 160px' }}
      />

      <div className="anim-hero shell relative">
        <h1 className="h1 mx-auto max-w-[900px] text-center text-[#eaeff8]">
          {hero.headlineLine1}
          <br />
          {hero.headlineBeforeWord}{' '}
          <FlipWord
            words={hero.niches}
            intervalMs={1400}
            className="text-accent italic"
          />{' '}
          {hero.headlineAfterWord}
        </h1>

        <p className="mt-8 text-center text-[18px] leading-[1.5] text-on-dark-soft">
          {hero.subhead}
        </p>

        <div className="mt-11 flex justify-center">
          <WaitlistForm source="hero" tone="dark" />
        </div>

        <p className="label mt-[108px] flex items-center gap-2.5 text-on-dark-faint">
          <span className="live-dot" aria-hidden="true" />
          {hero.eyebrow}
        </p>
      </div>

      <ReelMarquee className="relative mt-4" />

      {/* The dark fades into the page's paper at the very bottom. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[300px]"
        style={{
          background:
            'linear-gradient(to bottom, rgba(247,249,252,0) 0%, rgba(247,249,252,0.08) 45%, var(--paper) 100%)',
        }}
      />
    </section>
  );
}
