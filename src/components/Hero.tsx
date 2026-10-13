import { hero } from '@/content/content';
import { ReelMarquee } from './ReelMarquee';
import { WaitlistForm } from './WaitlistForm';

/**
 * Full-bleed dark hero. The reference's warm gradient mesh (gold core,
 * red bleed, bright diagonal streak) is translated one-for-one into the
 * blue brand ramp — same shapes, same positions, no warm hues.
 */
const MESH = [
  // Darkening passes, painted over the blobs (first layer = topmost).
  'radial-gradient(1000px 780px at 100% 0%, rgba(4,8,18,0.95) 0%, rgba(4,8,18,0) 62%)',
  // Keep the centre — where the headline sits — near-black, as in the
  // reference. Without this the blooms below wash the whole stage out.
  'radial-gradient(1150px 880px at 60% 34%, rgba(5,9,18,0.94) 0%, rgba(5,9,18,0.55) 46%, rgba(5,9,18,0) 72%)',
  // Contain the bloom: darken the bottom-centre/right so the glow reads as a
  // crescent hugging the lower-left, not a wash across the whole bottom band.
  'radial-gradient(1200px 680px at 82% 102%, rgba(6,10,19,0.86) 0%, rgba(6,10,19,0) 58%)',
  'linear-gradient(to right, rgba(8,13,26,0) 32%, rgba(8,13,26,0.8) 66%, rgba(8,13,26,0.98) 100%)',
  'linear-gradient(to bottom, rgba(8,13,26,0.96) 0%, rgba(8,13,26,0.62) 14%, rgba(8,13,26,0) 34%)',
  // Bright core (the reference's gold), then the bleed outward — kept dim and
  // pulled tight to the lower-left so the stage stays near-black elsewhere.
  'radial-gradient(340px 270px at 2% 59%, rgba(150,190,255,0.5) 0%, rgba(150,190,255,0) 66%)',
  'radial-gradient(640px 500px at 0% 62%, rgba(60,118,245,0.5) 0%, rgba(60,118,245,0) 68%)',
  'radial-gradient(720px 520px at 8% 97%, rgba(40,92,222,0.46) 0%, rgba(40,92,222,0) 70%)',
  'radial-gradient(680px 540px at 19% 74%, rgba(26,66,175,0.26) 0%, rgba(26,66,175,0) 74%)',
  'radial-gradient(640px 480px at 23% 9%, rgba(20,48,138,0.34) 0%, rgba(20,48,138,0) 72%)',
  'radial-gradient(620px 520px at 0% 104%, rgba(80,138,250,0.3) 0%, rgba(80,138,250,0) 64%)',
  'linear-gradient(#060a13, #060a13)',
].join(',');

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)'/%3E%3C/svg%3E\")";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-dark pt-[150px] pb-[240px] md:pt-[290px] md:pb-[300px]"
    >
      {/* Gradient mesh. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: MESH }}
      />

      {/* Thin bright diagonal streak out of the top-right, plus its halo. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[-300px] left-[84%] -z-10 h-[1250px] w-[140px] origin-top -rotate-[26deg]"
        style={{
          background:
            'linear-gradient(to bottom, rgba(120,170,255,0) 0%, rgba(136,180,255,0.34) 28%, rgba(196,220,255,0.5) 50%, rgba(120,170,255,0) 84%)',
          filter: 'blur(34px)',
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
          {hero.headlineLead}
          <br />
          {hero.headlineTail}
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
